import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // In a real application, you would send an email, save to DB, or integrate with a CRM here.
    console.log('Received contact enquiry:', { name, company, email, phone, message });

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
