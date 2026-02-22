import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// List of recipient email addresses
const RECIPIENT_EMAILS = [
  'ankushcoder497001@gmail.com',
  'ankushgupta997769@gmail.com',
  "shrikantpandey985@gmail.com",
  "aatoshkumar3333@gmail.com",
];

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Validate input
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    // Create transporter using Gmail or your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <h3 style="color: #333;">Message:</h3>
        <p style="white-space: pre-wrap; color: #555;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </div>
    `;

    // Send email to all recipients
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: RECIPIENT_EMAILS.join(', '),
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
