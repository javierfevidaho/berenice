import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, serviceType, city, date, message } = body;

    if (!name || !phone || !email || !serviceType || !city || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log inquiry (replace with Resend / SendGrid / Supabase in production)
    console.log("[New Cleaning Inquiry]", {
      name,
      phone,
      email,
      serviceType,
      city,
      date,
      message,
      receivedAt: new Date().toISOString(),
    });

    // TODO: Send email notification via Resend:
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from, to, subject, html });

    return NextResponse.json({ message: "Quote request received." }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
