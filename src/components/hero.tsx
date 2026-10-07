import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { contactHref, servicesHref, siteImages } from "@/lib/site";

const rise = "motion-safe:animate-kmr-rise";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-x-clip border-b border-rule"
    >
      <div
        aria-hidden="true"
        className="grid-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_75%_55%,black,transparent)]"
      />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-24 xl:gap-x-12">
        <div className="sm:mx-auto sm:max-w-2xl sm:text-center lg:col-span-6 lg:mx-0 lg:max-w-none lg:text-left">
          <p
            className={`flex items-center gap-2 font-mono sm:justify-center lg:justify-start text-[11px] font-medium uppercase tracking-[0.06em] text-muted sm:gap-2.5 sm:text-xs sm:tracking-[0.1em] ${rise}`}
          >
            <span>Legacy systems</span>
            <span
              aria-hidden="true"
              className="inline-block text-brand motion-safe:animate-kmr-shift-arrow"
            >
              →
            </span>
            <span className="sr-only">to</span>
            <span>Modern web solutions</span>
          </p>

          <h1
            id="hero-heading"
            className={`mt-5 text-balance font-display text-[clamp(2.375rem,1.6rem+3.2vw,3.5rem)] lg:text-[clamp(2.5rem,calc(4.4vw-0.25rem),3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-obsidian sm:mt-6 ${rise} [animation-delay:80ms]`}
          >
            <span className="block">Your legacy system.</span>
            <span className="block text-brand">Ready for what’s next.</span>
          </h1>

          <p
            className={`mt-5 max-w-xl text-base sm:mx-auto lg:mx-0 leading-relaxed text-muted sm:mt-6 sm:text-lg ${rise} [animation-delay:160ms]`}
          >
            We modernize outdated desktop software into fast, secure web
            applications — preserving the business logic you depend on while
            giving your team the tools to move forward.
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start ${rise} [animation-delay:240ms]`}
          >
            <ButtonLink href={servicesHref}>Explore Modernization</ButtonLink>
            <ButtonLink href={contactHref} variant="secondary">
              Discuss Your System
            </ButtonLink>
          </div>
        </div>

        <TransformationVisual />
      </div>
    </section>
  );
}

function TransformationVisual() {
  return (
    <div
      className={`mx-auto w-full max-w-[680px] lg:col-span-6 lg:max-w-none ${rise} [animation-delay:320ms]`}
    >
      <InterfaceFrame
        phase="01"
        label="Legacy desktop"
        image={siteImages.legacyApp}
        alt="Legacy desktop software interface before modernization"
        sizes="(min-width: 1024px) 440px, (min-width: 640px) 420px, 88vw"
        className="w-[88%] sm:w-[62%]"
      />

      {/* Mobile: vertical connector between the stacked frames */}
      <div aria-hidden="true" className="flex justify-center py-3 sm:hidden">
        <span className="flex size-9 items-center justify-center rounded-xs border border-rule bg-surface text-brand">
          <svg viewBox="0 0 16 16" fill="none" className="size-4">
            <path
              d="M8 2.5v11m0 0 4.5-4.5M8 13.5 3.5 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </span>
      </div>

      <div className="flex items-start sm:-mt-[8%]">
        {/* Tablet and up: connector from the legacy frame into the modern one */}
        <div
          aria-hidden="true"
          className="hidden pr-[2%] pt-[11%] sm:block sm:w-[32%]"
        >
          <svg viewBox="0 0 160 72" fill="none" className="w-full text-brand">
            <path
              d="M24 2v38a20 20 0 0 0 20 20h96"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect x="21" y="0" width="6" height="6" fill="currentColor" />
            <g className="motion-safe:animate-kmr-shift-arrow">
              <path
                d="m140 53 8 7-8 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        <InterfaceFrame
          phase="02"
          label="Modern web app"
          image={siteImages.modernApp}
          alt="Modern web application interface after modernization"
          sizes="(min-width: 1024px) 500px, (min-width: 640px) 470px, 92vw"
          modern
          className="relative z-10 ml-auto w-[92%] sm:w-[68%]"
        />
      </div>
    </div>
  );
}

type InterfaceFrameProps = {
  phase: string;
  label: string;
  image: { src: string; width: number; height: number };
  alt: string;
  sizes: string;
  modern?: boolean;
  className?: string;
};

function InterfaceFrame({
  phase,
  label,
  image,
  alt,
  sizes,
  modern = false,
  className = "",
}: InterfaceFrameProps) {
  return (
    <figure
      className={`overflow-hidden rounded-xs border bg-surface ${modern ? "border-obsidian/20 shadow-frame-raised" : "border-rule"} ${className}`}
    >
      <figcaption
        className={`flex h-8 items-center gap-2 border-b px-3 font-mono text-[10.5px] uppercase tracking-[0.08em] ${modern ? "border-rule bg-surface text-muted" : "border-rule-inverse bg-obsidian text-paper/60"}`}
      >
        <span
          aria-hidden="true"
          className={`size-1.5 shrink-0 ${modern ? "bg-brand" : "bg-paper/40"}`}
        />
        <span className={modern ? "text-obsidian" : "text-paper"}>{phase}</span>
        <span className="truncate">{label}</span>
      </figcaption>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        sizes={sizes}
        quality={90}
        loading="eager"
        fetchPriority={modern ? "high" : "auto"}
        className="block h-auto w-full"
      />
    </figure>
  );
}
