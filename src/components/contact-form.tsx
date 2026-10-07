"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { contactEmail, emailjsConfig } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "block w-full rounded-xs border border-rule bg-surface px-3.5 py-3 text-[15px] text-obsidian placeholder:text-muted/70 transition-colors duration-200 hover:border-obsidian/25 focus:border-brand focus:outline-none focus-visible:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (data.get("website")) return;

    setStatus("sending");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: data.get("name"),
          reply_to: data.get("email"),
          company: data.get("company"),
          legacy_system: data.get("system"),
          message: data.get("message"),
        },
        { publicKey: emailjsConfig.publicKey },
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col justify-center border border-rule bg-surface p-8 sm:p-10"
      >
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
          <span aria-hidden="true" className="size-1.5 bg-brand" />
          Sys.status — received
        </p>
        <p className="mt-5 font-display text-2xl font-medium tracking-[-0.01em] text-obsidian">
          Thanks — your message is in.
        </p>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          We’ll review your system details and reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="contact-name">
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
        />
      </Field>
      <Field label="Work email" htmlFor="contact-email">
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
        />
      </Field>
      <Field label="Company" htmlFor="contact-company">
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </Field>
      <Field label="Current system" htmlFor="contact-system">
        <input
          id="contact-system"
          name="system"
          type="text"
          placeholder="e.g. Access, FoxPro, VB6"
          className={inputClass}
        />
      </Field>
      <Field
        label="What should we know?"
        htmlFor="contact-message"
        className="sm:col-span-2"
      >
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Users, pain points, timeline…"
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div aria-hidden="true" className="hidden">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-muted">
          {status === "error" ? (
            <span className="text-brand">
              Something went wrong. Please email us at{" "}
              <a href={`mailto:${contactEmail}`} className="underline">
                {contactEmail}
              </a>
              .
            </span>
          ) : (
            "We reply within one business day."
          )}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand px-5 text-[15px] font-semibold text-brand-foreground transition-colors duration-200 hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
