import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

interface ContactPayload {
  name: string;
  email: string;
  scope: string;
  message: string;
}

function validatePayload(data: unknown): {
  valid: boolean;
  errors?: Partial<Record<keyof ContactPayload, string>>;
  value?: ContactPayload;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, errors: { message: "Invalid request payload." } };
  }

  const record = data as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const scope = typeof record.scope === "string" ? record.scope.trim() : "";
  const message =
    typeof record.message === "string" ? record.message.trim() : "";

  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (name.length < 2 || name.length > 120) {
    errors.name = "Please enter your name (2–120 characters).";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email) || email.length > 180) {
    errors.email = "Please enter a valid email address.";
  }

  if (!scope) {
    errors.scope = "Please choose a project or inquiry scope.";
  }

  if (message.length < 12 || message.length > 3000) {
    errors.message = "Please enter a message (12–3000 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    value: { name, email, scope, message },
  };
}

/**
 * Contact submission integration point.
 *
 * Configure CONTACT_WEBHOOK_URL or RESEND_API_KEY + CONTACT_TO_EMAIL in your
 * server environment to enable live delivery. When neither is configured, this
 * endpoint explicitly returns 501 with `configured: false` so the frontend
 * falls back honestly to a pre-filled `mailto:` action instead of faking delivery.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed JSON body." },
      { status: 400 }
    );
  }

  const validation = validatePayload(body);
  if (!validation.valid || !validation.value) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        fieldErrors: validation.errors,
      },
      { status: 400 }
    );
  }

  const { name, email, scope, message } = validation.value;

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const upstream = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          scope,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!upstream.ok) {
        return NextResponse.json(
          {
            ok: false,
            configured: true,
            error: "Upstream contact webhook rejected the submission.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, configured: true });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          configured: true,
          error: "Unable to reach the configured contact webhook.",
        },
        { status: 502 }
      );
    }
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || portfolioData.identity.email;
  if (resendApiKey && toEmail) {
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `[Portfolio Inquiry: ${scope}] from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nScope: ${scope}\n\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            configured: true,
            error: "Email delivery service returned an error.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, configured: true });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          configured: true,
          error: "Failed to connect to email delivery service.",
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json(
    {
      ok: false,
      configured: false,
      error:
        "Server email transport is not configured yet. Use the direct email link below to send your message.",
    },
    { status: 501 }
  );
}

