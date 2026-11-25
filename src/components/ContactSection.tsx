"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { MagneticControl } from "@/components/MagneticButton";

interface FormFields {
  name: string;
  email: string;
  scope: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const SCOPE_OPTIONS = [
  "Interactive Website / Flagship",
  "Full-Stack Product Build",
  "Design System & Frontend Architecture",
  "Full-Time Role / Advisory",
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    scope: SCOPE_OPTIONS[0],
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "submitting" | "sent" | "fallback" | "error";
    notice?: string;
  }>({ status: "idle" });

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `[Portfolio: ${fields.scope}] ${fields.name || "Inquiry"}`
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nReply Email: ${fields.email}\nScope: ${fields.scope}\n\n${fields.message}`
    );
    return `mailto:${portfolioData.identity.email}?subject=${subject}&body=${body}`;
  };

  const validateClient = (): boolean => {
    const nextErrors: FieldErrors = {};

    if (fields.name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!fields.scope.trim()) {
      nextErrors.scope = "Select an engagement scope.";
    }

    if (fields.message.trim().length < 12) {
      nextErrors.message =
        "Please include at least 12 characters describing your project or role.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.identity.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateClient()) return;

    setSubmitState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        configured?: boolean;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (response.ok && result.ok) {
        setSubmitState({
          status: "sent",
          notice: "Message delivered via configured contact endpoint.",
        });
        setFields({
          name: "",
          email: "",
          scope: SCOPE_OPTIONS[0],
          message: "",
        });
        return;
      }

      if (response.status === 400 && result.fieldErrors) {
        setErrors(result.fieldErrors);
        setSubmitState({
          status: "error",
          notice: result.error ?? "Please correct the highlighted fields.",
        });
        return;
      }

      if (response.status === 501 || result.configured === false) {
        setSubmitState({
          status: "fallback",
          notice:
            result.error ??
            "No server email provider is configured yet. Send directly via your email client below.",
        });
        return;
      }

      setSubmitState({
        status: "error",
        notice:
          result.error ??
          "Could not submit right now. You can use the direct email link below.",
      });
    } catch {
      setSubmitState({
        status: "fallback",
        notice:
          "Network or server endpoint unavailable. Use the pre-filled email button below to send directly.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-arch-grid-light relative border-t border-[#141311]/15 bg-[#f2efe9] py-24 text-[#141311] sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 border-b border-[#141311]/15 pb-8">
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
            {portfolioData.contact.eyebrow}
          </p>
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.7rem)] leading-[0.96] font-extrabold tracking-tight">
            {portfolioData.contact.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Channels & Metadata */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <div>
              <p className="text-base leading-relaxed text-[#2b2924] sm:text-lg">
                {portfolioData.contact.description}
              </p>

              <div className="mt-8 space-y-4 border-t border-[#141311]/15 pt-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border border-[#141311]/15 bg-[#e6e1d7]/75 p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#e84a27]" aria-hidden="true" />
                    <div>
                      <span className="block font-mono text-[10px] tracking-[0.14em] text-[#57534b] uppercase">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${portfolioData.identity.email}`}
                        className="font-mono text-sm font-medium text-[#141311] underline decoration-[#e84a27]/60 underline-offset-4"
                      >
                        {portfolioData.identity.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    data-cursor-label="COPY"
                    className="inline-flex min-h-[40px] items-center gap-1.5 border border-[#141311]/20 bg-[#f2efe9] px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] uppercase transition-colors hover:border-[#141311]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#e84a27]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="border border-[#141311]/15 bg-[#e6e1d7]/60 p-4">
                    <span className="mb-1 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-[#57534b] uppercase">
                      <Phone className="h-3.5 w-3.5 text-[#e84a27]" aria-hidden="true" />
                      Phone
                    </span>
                    {/\d{6,}/.test(portfolioData.identity.phone) ? (
                      <a
                        href={`tel:${portfolioData.identity.phone.replace(/\s+/g, "")}`}
                        className="font-mono text-xs text-[#141311]"
                      >
                        {portfolioData.identity.phone}
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-[#57534b]">
                        {portfolioData.identity.phone}
                      </span>
                    )}
                  </div>

                  <div className="border border-[#141311]/15 bg-[#e6e1d7]/60 p-4">
                    <span className="mb-1 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-[#57534b] uppercase">
                      <MapPin className="h-3.5 w-3.5 text-[#e84a27]" aria-hidden="true" />
                      Location
                    </span>
                    <span className="font-mono text-xs text-[#141311]">
                      {portfolioData.identity.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-[#57534b] uppercase">
                Network & Profiles
              </p>
              <ul className="divide-y divide-[#141311]/15 border-y border-[#141311]/15">
                {portfolioData.contact.socials.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="OPEN"
                      className="group flex min-h-[48px] items-center justify-between py-3 transition-colors hover:text-[#e84a27]"
                    >
                      <div>
                        <span className="font-display text-base font-bold">
                          {social.label}
                        </span>
                        <span className="ml-3 font-mono text-xs text-[#57534b]">
                          {social.handle}
                        </span>
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Validated Contact Form with Honest Integration */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="border border-[#141311]/20 bg-[#e6e1d7]/80 p-6 sm:p-10"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-[#141311]/15 pb-4">
                <span className="font-mono text-xs tracking-[0.14em] text-[#141311] uppercase">
                  Project / Collaboration Brief
                </span>
                <span className="font-mono text-[11px] text-[#57534b]">
                  {/* POST /api/contact + mailto fallback */}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-[#141311] uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={fields.name}
                    onChange={(e) => {
                      setFields((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) {
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    placeholder="Alex Mercer"
                    className="min-h-[46px] w-full border border-[#141311]/25 bg-[#f2efe9] px-4 py-2.5 text-sm text-[#141311] placeholder:text-[#57534b]/60 focus:border-[#e84a27] focus:outline-none"
                  />
                  {errors.name && (
                    <p
                      id="error-name"
                      role="alert"
                      className="mt-1.5 font-mono text-xs text-[#b92b0c]"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-[#141311] uppercase"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={(e) => {
                      setFields((prev) => ({ ...prev, email: e.target.value }));
                      if (errors.email) {
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    placeholder="you@company.com"
                    className="min-h-[46px] w-full border border-[#141311]/25 bg-[#f2efe9] px-4 py-2.5 text-sm text-[#141311] placeholder:text-[#57534b]/60 focus:border-[#e84a27] focus:outline-none"
                  />
                  {errors.email && (
                    <p
                      id="error-email"
                      role="alert"
                      className="mt-1.5 font-mono text-xs text-[#b92b0c]"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-scope"
                  className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-[#141311] uppercase"
                >
                  Engagement Scope
                </label>
                <select
                  id="contact-scope"
                  name="scope"
                  value={fields.scope}
                  onChange={(e) =>
                    setFields((prev) => ({ ...prev, scope: e.target.value }))
                  }
                  className="min-h-[46px] w-full border border-[#141311]/25 bg-[#f2efe9] px-4 py-2.5 text-sm text-[#141311] focus:border-[#e84a27] focus:outline-none"
                >
                  {SCOPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-[#141311] uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={fields.message}
                  onChange={(e) => {
                    setFields((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) {
                      setErrors((prev) => ({ ...prev, message: undefined }));
                    }
                  }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "error-message" : undefined
                  }
                  placeholder="Share context, timeline, or technical goals..."
                  className="w-full border border-[#141311]/25 bg-[#f2efe9] px-4 py-3 text-sm text-[#141311] placeholder:text-[#57534b]/60 focus:border-[#e84a27] focus:outline-none"
                />
                {errors.message && (
                  <p
                    id="error-message"
                    role="alert"
                    className="mt-1.5 font-mono text-xs text-[#b92b0c]"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Feedback & Functional Mailto Fallback */}
              {submitState.status !== "idle" && submitState.notice && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-5 border p-4 text-sm ${
                    submitState.status === "sent"
                      ? "border-[#141311] bg-[#141311] text-[#f2efe9]"
                      : "border-[#e84a27] bg-[#f2efe9] text-[#141311]"
                  }`}
                >
                  <p>{submitState.notice}</p>
                  {submitState.status === "fallback" && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={buildMailtoHref()}
                        className="inline-flex min-h-[40px] items-center gap-2 bg-[#e84a27] px-4 py-2 font-mono text-xs tracking-[0.12em] text-white uppercase hover:bg-[#ff5b36]"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Open Pre-filled Email</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <MagneticControl
                  type="submit"
                  cursorLabel="SEND"
                  disabled={submitState.status === "submitting"}
                  className="gap-2.5 bg-[#141311] px-7 py-3.5 font-mono text-xs tracking-[0.14em] text-[#f2efe9] uppercase hover:bg-[#e84a27] disabled:opacity-50"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    {submitState.status === "submitting"
                      ? "Sending..."
                      : "Send Inquiry"}
                  </span>
                </MagneticControl>

                <a
                  href={buildMailtoHref()}
                  className="font-mono text-xs text-[#57534b] underline decoration-[#141311]/30 underline-offset-4 hover:text-[#141311]"
                >
                  Or compose directly via email client
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

