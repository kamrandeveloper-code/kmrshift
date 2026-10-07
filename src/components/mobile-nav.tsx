"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { contactHref, navLinks } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label="Main menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="-mr-2.5 inline-flex size-11 items-center justify-center rounded-md text-obsidian transition-colors hover:bg-obsidian/5"
      >
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 top-[3px] h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-[9px] h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full border-b border-rule bg-paper transition-[opacity,transform,visibility] duration-200 ease-out motion-reduce:transition-none ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto max-w-[1280px] px-5 pb-6 pt-1 sm:px-6"
        >
          <ul className="divide-y divide-rule">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="flex min-h-13 items-center text-base font-medium text-obsidian transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={contactHref} onClick={close} className="mt-4 w-full">
            Discuss Your System
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
