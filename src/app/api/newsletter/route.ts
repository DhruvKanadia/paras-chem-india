import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    console.log('Received newsletter subscription:', { email });

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
