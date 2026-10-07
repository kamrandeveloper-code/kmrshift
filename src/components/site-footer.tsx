import { contactEmail, contactHref, contactPhone, navLinks } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate bg-obsidian text-paper">
      <div
        aria-hidden="true"
        className="grid-dots-inverse absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
          <div className="lg:col-span-5">
            {/* Light-on-dark wordmark; the header logo SVG is dark-on-light. */}
            <a
              href="#main"
              className="inline-flex items-center gap-2.5 rounded-xs font-display text-xl font-bold tracking-[-0.02em]"
            >
              <span aria-hidden="true" className="size-6 rounded-xs bg-brand" />
              KMR <span className="text-brand">Shift</span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-paper/60">
              Legacy systems. Modern solutions. We turn aging desktop software
              into fast, secure web applications.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/45">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-paper/75 transition-colors duration-200 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contactHref}
                  className="text-paper/75 transition-colors duration-200 hover:text-paper"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/45">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-paper/75 transition-colors duration-200 hover:text-brand"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={contactPhone.tel}
                  className="text-paper/75 transition-colors duration-200 hover:text-brand"
                >
                  {contactPhone.display}
                </a>
              </li>
              <li>
                <a
                  href={contactPhone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/75 transition-colors duration-200 hover:text-brand"
                >
                  WhatsApp
                  <span className="sr-only"> (opens WhatsApp)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-rule-inverse py-6 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} KMR Shift. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 bg-brand" />
            Sys.status — operational
          </p>
        </div>
      </div>
    </footer>
  );
}
