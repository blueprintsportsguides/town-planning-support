import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const RECIPIENT_EMAILS = [
      process.env.CONTACT_EMAIL_1,
      process.env.CONTACT_EMAIL_2,
    ].filter(Boolean) as string[];

    const body = await request.json();
    const { name, email, phone, service, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (RECIPIENT_EMAILS.length === 0) {
      console.error("No recipient emails configured");
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
      ${service ? `<p><strong>Service Required:</strong> ${service}</p>` : ""}
      ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
      <hr />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br />")}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">
        This message was sent from the Town Planning Support website contact form.
      </p>
    `;

    const emailText = `
New Contact Form Submission

From: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${service ? `Service Required: ${service}` : ""}
${projectType ? `Project Type: ${projectType}` : ""}

Message:
${message}

---
This message was sent from the Town Planning Support website contact form.
    `.trim();

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Town Planning Support <onboarding@resend.dev>",
      to: RECIPIENT_EMAILS,
      replyTo: email,
      subject: `New Enquiry from ${name} - Town Planning Support`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
