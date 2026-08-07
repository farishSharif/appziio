import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly at info@appziio.com." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, projectType, message } = body;

    // Server-side validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Appziio Contact Form <onboarding@resend.dev>",
      to: "info@appziio.com",
      replyTo: email,
      subject: `New inquiry: ${projectType} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="margin-bottom: 24px;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Name</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0; font-weight: 500;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Project Type</td>
              <td style="padding: 8px 0; font-weight: 500;">${projectType}</td>
            </tr>
          </table>
          
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          
          <h3 style="margin-bottom: 12px;">Message</h3>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">
            Sent from appziio.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
