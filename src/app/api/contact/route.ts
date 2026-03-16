import { NextResponse } from "next/server";

type Body = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Body;

  const name = asString(body.name).trim();
  const email = asString(body.email).trim();
  const message = asString(body.message).trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Vul je naam in." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Vul een geldig e-mailadres in." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Je bericht is te kort." }, { status: 400 });
  }

  // Placeholder: hier kun je later e-mail (Resend), Slack of CRM integreren.
  console.log("contact_form_submission", {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

