import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiter
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3; // max 3 subscriptions per IP per hour

// Track recent emails to prevent duplicate subscriptions
const recentEmails = new Map<string, number>();
const EMAIL_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours

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

function isDuplicateEmail(email: string): boolean {
  const now = Date.now();
  const lastSeen = recentEmails.get(email.toLowerCase());
  if (lastSeen && now - lastSeen < EMAIL_COOLDOWN_MS) {
    return true;
  }
  recentEmails.set(email.toLowerCase(), now);
  return true; // Always return true after first time to prevent further emails
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // 1. Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 2. Block disposable emails
    if (isDisposableEmail(email)) {
      // Silently accept to not reveal detection
      console.warn(`Disposable email blocked: ${email}`);
      return NextResponse.json(
        { success: true, message: 'Successfully subscribed to the newsletter!' },
        { status: 200 }
      );
    }

    // 3. Rate limit by IP
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                     request.headers.get('x-real-ip') ||
                     'unknown-ip';

    if (clientIp !== 'unknown-ip' && checkRateLimit(clientIp)) {
      // Silently accept to not reveal rate limiting
      console.warn(`Newsletter rate limit hit for IP: ${clientIp}`);
      return NextResponse.json(
        { success: true, message: 'Successfully subscribed to the newsletter!' },
        { status: 200 }
      );
    }

    // 4. Duplicate email check
    if (isDuplicateEmail(email)) {
      console.log(`Duplicate newsletter subscription attempt: ${email}`);
      return NextResponse.json(
        { success: true, message: 'Successfully subscribed to the newsletter!' },
        { status: 200 }
      );
    }

    console.log('Received newsletter subscription:', { email });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'info@paraschemindia.com',
      to: 'info@paraschemindia.com',
      subject: `New Newsletter Subscription`,
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Newsletter Subscription</h2>
          </div>
          <div style="padding: 24px;">
            <p><strong>Email:</strong> ${email}</p>
            <p style="color: #64748b; font-size: 12px; margin-top: 16px;">IP: ${clientIp}</p>
          </div>
        </div>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Newsletter subscription email sent successfully via SMTP');
    } else {
      console.log('SMTP credentials not found. Newsletter subscription logged.');
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing your request.' },
      { status: 500 }
    );
  }
}
