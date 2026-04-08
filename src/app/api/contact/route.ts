import { NextResponse } from "next/server";
import { contactSchema } from "@varel-web/lib/contact-schema";

export async function POST(req: Request) {
  try {
    const appsScriptUrl =
      "https://script.google.com/macros/s/AKfycbyz4VMIGBywxf_p5ul34a2LAHd6toHpFjrbZhM4wdwriaV7zmSsk4hFyS66NLjNSg5x/exec";
    const body = await req.json();

    // Honeypot (anti-spam)
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, phone, topic, message } = parsed.data;

    if (!appsScriptUrl) {
      console.error("GOOGLE APPS SCRIPT URL is missing");
      return NextResponse.json(
        { success: false, error: "Contact service is not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "-",
        topic: topic || "New Portfolio Contact",
        message,
      }),
      cache: "no-store",
    });

    const rawResponse = await response.text();

    if (!response.ok) {
      console.error("GOOGLE APPS SCRIPT ERROR:", rawResponse);
      return NextResponse.json(
        { success: false, error: "Message delivery failed" },
        { status: 500 },
      );
    }

    console.log("GOOGLE APPS SCRIPT SUCCESS:", rawResponse);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
