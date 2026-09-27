import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productSlug, productName, quantity, company, email } = body;

    if (!quantity || !company || !email) {
      return NextResponse.json(
        { success: false, error: 'Quantity, company, and email are required fields.' },
        { status: 400 }
      );
    }

    console.log('Received product enquiry:', { productSlug, productName, quantity, company, email });

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
      from: process.env.SMTP_USER || 'noreply@paraschemindia.com',
      to: 'kanadiadhruv3883@gmail.com',
      subject: `New Product Enquiry: ${productName} (${company})`,
      text: `Product: ${productName} (${productSlug})\nQuantity: ${quantity}\nCompany: ${company}\nEmail: ${email}`,
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Product:</strong> ${productName} (${productSlug})</p>
        <p><strong>Quantity Required:</strong> ${quantity}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Enquiry email sent successfully via SMTP');
    } else {
      console.log('SMTP credentials not found in .env. Enquiry email was logged but not sent.');
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
