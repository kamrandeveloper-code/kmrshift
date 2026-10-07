import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { MobileNav } from "@/components/mobile-nav";
import { contactHref, navLinks, siteImages } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-15 max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:grid lg:h-[76px] lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link href="/" className="-m-1 inline-flex shrink-0 rounded-xs p-1">
          <Image
            src={siteImages.logo.src}
            width={siteImages.logo.width}
            height={siteImages.logo.height}
            alt="KMR Shift"
            loading="eager"
            className="h-22 w-auto lg:h-27"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3.5 py-2 text-[15px] font-medium text-muted transition-colors duration-200 hover:text-obsidian"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex lg:justify-end">
          <ButtonLink href={contactHref} size="md">
            Discuss Your System
          </ButtonLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

