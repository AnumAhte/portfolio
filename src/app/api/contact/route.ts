import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Strip spaces from App Password (Google shows it as "xxxx xxxx xxxx xxxx")
    const appPassword = process.env.EMAIL_PASS?.replace(/\s/g, "");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,          // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject?.trim()
        ? `[Portfolio] ${subject.trim()}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fafafa; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #9333ea, #7c3aed); padding: 32px 40px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #fff;">New Message — Portfolio</h1>
            <p style="margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.75);">Someone reached out via your contact form</p>
          </div>
          <div style="padding: 32px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(168,85,247,0.15); color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; width: 90px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(168,85,247,0.15); color: #fafafa; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(168,85,247,0.15); color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(168,85,247,0.15);">
                  <a href="mailto:${email}" style="color: #a855f7; font-size: 15px; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                subject?.trim()
                  ? `<tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid rgba(168,85,247,0.15); color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Subject</td>
                      <td style="padding: 10px 0; border-bottom: 1px solid rgba(168,85,247,0.15); color: #fafafa; font-size: 15px;">${subject.trim()}</td>
                    </tr>`
                  : ""
              }
            </table>
            <div style="margin-top: 24px;">
              <p style="margin: 0 0 10px; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
              <div style="background: rgba(168,85,247,0.07); border: 1px solid rgba(168,85,247,0.2); border-radius: 10px; padding: 20px;">
                <p style="margin: 0; color: #e4e4e7; font-size: 15px; line-height: 1.75; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(168,85,247,0.15);">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #9333ea, #7c3aed); color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 600;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <div style="padding: 16px 40px; background: rgba(168,85,247,0.05); border-top: 1px solid rgba(168,85,247,0.1); text-align: center;">
            <p style="margin: 0; color: #52525b; font-size: 12px;">Sent from anumahtesham.dev portfolio contact form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
