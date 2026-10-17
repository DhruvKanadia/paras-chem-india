import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiter: IP -> array of submission timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

function isBotGibberish(text: string): boolean {
  if (!text) return false;
  const clean = text.trim();
  if (clean.length >= 10 && !clean.includes(' ')) {
    const internalCaps = (clean.slice(1).match(/[A-Z]/g) || []).length;
    if (internalCaps >= 3) return true;
    if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/.test(clean)) return true;
  }
  return false;
}

function escapeHtml(str: string): string {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productSlug, productName, quantity, company, email, website, _time } = body;

    // 1. Honeypot check
    if (website && typeof website === 'string' && website.trim().length > 0) {
      console.warn('Enquiry bot trapped by honeypot.');
      return NextResponse.json(
        { success: true, message: 'Product enquiry submitted successfully.' },
        { status: 200 }
      );
    }

    // 2. Submission speed check
    if (_time && typeof _time === 'number') {
      const elapsed = Date.now() - _time;
      if (elapsed > 0 && elapsed < 2000) {
        console.warn(`Enquiry bot detected via speed (${elapsed}ms).`);
        return NextResponse.json(
          { success: true, message: 'Product enquiry submitted successfully.' },
          { status: 200 }
        );
      }
    }

    if (!quantity || !company || !email) {
      return NextResponse.json(
        { success: false, error: 'Quantity, company, and email are required fields.' },
        { status: 400 }
      );
    }

    // 3. Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // 4. Gibberish check
    if (isBotGibberish(company) || isBotGibberish(quantity)) {
      console.warn('Enquiry bot detected via gibberish content.');
      return NextResponse.json(
        { success: true, message: 'Product enquiry submitted successfully.' },
        { status: 200 }
      );
    }

    // 5. Rate limit check
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     request.headers.get('x-real-ip') || 
                     'unknown-ip';

    if (clientIp !== 'unknown-ip' && checkRateLimit(clientIp)) {
      return NextResponse.json(
        { success: false, error: 'Too many enquiries sent. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeProduct = escapeHtml(productName || productSlug);
    const safeQty = escapeHtml(quantity);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);

    const mailOptions = {
      from: process.env.SMTP_USER || 'info@paraschemindia.com',
      to: 'info@paraschemindia.com',
      replyTo: email,
      subject: `New Product Enquiry: ${safeProduct} (${safeCompany})`,
      text: `Product: ${productName} (${productSlug})\nQuantity: ${quantity}\nCompany: ${company}\nEmail: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e40af; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Product Enquiry</h2>
            <p style="margin: 4px 0 0 0; color: #bfdbfe; font-size: 13px;">${safeProduct}</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Product:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${safeProduct}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Quantity Required:</td>
                <td style="padding: 8px 0; color: #0f172a;">${safeQty}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 8px 0; color: #0f172a;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #64748b;">
            Paras Chem India · Automated Product Enquiry System
          </div>
        </div>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json(
      { success: true, message: 'Product enquiry submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing your request.' },
      { status: 500 }
    );
  }
}
