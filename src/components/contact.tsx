import { ContactForm } from "@/components/contact-form";
import { contactEmail, contactPhone } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-16 border-b border-rule lg:scroll-mt-[76px]"
    >
      <div
        aria-hidden="true"
        className="grid-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_80%_at_15%_40%,black,transparent)]"
      />

      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-24 xl:gap-x-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
            Start the shift
          </p>
          <h2
            id="contact-heading"
            className="mt-5 max-w-[14ch] text-balance font-display text-[clamp(2rem,1.5rem+2vw,2.875rem)] font-medium leading-[1.15] tracking-[-0.02em] text-obsidian"
          >
            Tell us about your <span className="text-brand">legacy system</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Share what you run today and where it’s holding you back. We’ll
            come back with an honest assessment — no obligation.
          </p>

          <dl className="mt-10 divide-y divide-rule border-y border-rule">
            <ContactRow label="Email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </ContactRow>
            <ContactRow label="Phone" href={contactPhone.tel}>
              {contactPhone.display}
            </ContactRow>
            <ContactRow label="WhatsApp" href={contactPhone.whatsapp} external>
              {contactPhone.display}
            </ContactRow>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  href,
  external = false,
  children,
}: {
  label: string;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        {label}
      </dt>
      <dd>
        <a
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="font-display text-lg font-medium text-obsidian transition-colors duration-200 hover:text-brand"
        >
          {children}
          {external && <span className="sr-only"> (opens WhatsApp)</span>}
        </a>
      </dd>
    </div>
  );
}
