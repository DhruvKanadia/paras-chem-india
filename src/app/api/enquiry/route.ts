import { NextResponse } from 'next/server';

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
