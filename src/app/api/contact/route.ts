import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiter: IP -> array of submission timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true; // Rate limit exceeded
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

// Heuristic to detect automated bot spam like "fKtZcjRrBsOdRxmdlt" or "QVfzYtDvwRylimWZEFxY"
function isBotGibberish(text: string): boolean {
  if (!text) return false;
  const clean = text.trim();

  // Single token of random mixed-case alphanumeric string without spaces
  if (clean.length >= 10 && !clean.includes(' ')) {
    const internalCaps = (clean.slice(1).match(/[A-Z]/g) || []).length;
    if (internalCaps >= 3) return true;
    // 5+ consecutive consonants
    if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/.test(clean)) return true;
  }

  // Very short messages with high entropy
  if (clean.length >= 8 && clean.length <= 30 && /^[a-zA-Z0-9]+$/.test(clean) && !clean.includes(' ')) {
    const internalCaps = (clean.slice(1).match(/[A-Z]/g) || []).length;
    if (internalCaps >= 2) return true;
  }

  return false;
}

// Disposable email domain blocklist
const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
  'yopmail.com', 'fakeinbox.com', 'sharklasers.com', 'guerrillamailblock.com',
  'grr.la', 'dispostable.com', 'maildrop.cc', '10minutemail.com',
  'trashmail.com', 'mailnesia.com', 'temp-mail.org', 'getnada.com'
];

function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return DISPOSABLE_DOMAINS.some(d => domain === d || domain?.endsWith('.' + d));
}

// Basic HTML sanitization to prevent injection
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
    const { name, company, email, phone, message, website, _time } = body;

    // 1. Honeypot check: If hidden 'website' field is filled, silently discard (bot detected)
    if (website && typeof website === 'string' && website.trim().length > 0) {
      console.warn('Spam bot trapped by honeypot field. Discarding silently.');
      return NextResponse.json(
        { success: true, message: 'Enquiry submitted successfully. We will be in touch soon!' },
        { status: 200 }
      );
    }

    // 2. Time-based check: Form completed in under 2.5 seconds is automated bot
    if (_time && typeof _time === 'number') {
      const elapsed = Date.now() - _time;
      if (elapsed > 0 && elapsed < 2500) {
        console.warn(`Spam bot detected via submission speed (${elapsed}ms). Discarding silently.`);
        return NextResponse.json(
          { success: true, message: 'Enquiry submitted successfully. We will be in touch soon!' },
          { status: 200 }
        );
      }
    }

    // 3. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // 4. Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 4b. Block disposable email addresses
    if (isDisposableEmail(email)) {
      console.warn(`Disposable email blocked in contact form: ${email}`);
      return NextResponse.json(
        { success: true, message: 'Enquiry submitted successfully. We will be in touch soon!' },
        { status: 200 }
      );
    }

    // 4c. Message length checks
    if (message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide a more detailed message (at least 10 characters).' },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message is too long. Please keep it under 5000 characters.' },
        { status: 400 }
      );
    }

    // 4d. Phone number validation (if provided)
    if (phone && typeof phone === 'string' && phone.trim().length > 0) {
      const digitsOnly = phone.replace(/[\s\-\+\(\)]/g, '');
      if (!/^\d+$/.test(digitsOnly) || digitsOnly.length < 7) {
        return NextResponse.json(
          { success: false, error: 'Please provide a valid phone number with at least 7 digits.' },
          { status: 400 }
        );
      }
    }

    // 5. Gibberish check: Name or Message looks like bot-generated random string
    if (isBotGibberish(name) || isBotGibberish(message)) {
      console.warn('Bot spam pattern detected in name/message content. Discarding silently.');
      return NextResponse.json(
        { success: true, message: 'Enquiry submitted successfully. We will be in touch soon!' },
        { status: 200 }
      );
    }

    // 6. Rate Limiting by Client IP
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     request.headers.get('x-real-ip') || 
                     'unknown-ip';

    if (clientIp !== 'unknown-ip' && checkRateLimit(clientIp)) {
      return NextResponse.json(
        { success: false, error: 'Too many enquiries submitted from this network. Please try again later.' },
        { status: 429 }
      );
    }

    // 7. Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || 'Individual');
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'N/A');
    const safeMessage = escapeHtml(message);

    const mailOptions = {
      from: process.env.SMTP_USER || 'info@paraschemindia.com',
      to: 'info@paraschemindia.com',
      replyTo: email,
      subject: `New Contact Enquiry from ${safeName} (${safeCompany})`,
      text: `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Enquiry</h2>
            <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 13px;">Received via paraschemindia.com</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #475569;">Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 8px 0; color: #0f172a;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 8px 0; color: #0f172a;">${safePhone}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="font-weight: bold; margin-bottom: 8px; color: #475569;">Message:</p>
              <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; color: #0f172a;">
                ${safeMessage.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 11px; color: #64748b;">
            Paras Chem India · Automated Web Enquiry Notification
          </div>
        </div>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('SMTP credentials not configured. Email notification prepared.');
    }

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully. We will be in touch soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing your request.' },
      { status: 500 }
    );
  }
}
