import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactSchema } from "@varel-web/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot (anti-spam)
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, topic, message } = parsed.data;

    // 🚨 SEND EMAIL (CHECK RESULT)
    const result = await resend.emails.send({
      // ⚠️ PAKAI YANG PALING AMAN
      from: "Contact <hello@varel.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: topic || "New Portfolio Contact",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "-"}

        Message:
        ${message}
      `,
    });

    // 🚨 RESEND ERROR HANDLING
    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json(
        { success: false, error: "Email delivery failed" },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", result.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
