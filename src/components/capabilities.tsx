const capabilities = [
  {
    title: "Web Reconstruction",
    description:
      "We rebuild monolithic desktop applications (Access, FoxPro, Visual Basic) as scalable, secure cloud-native web applications on a modern React architecture.",
  },
  {
    title: "Database Sanitization",
    description:
      "Extraction, cleaning and normalization of legacy on-prem data into high-performance PostgreSQL environments with zero integrity loss.",
  },
  {
    title: "Live Integrations",
    description:
      "Bridging the gap between your new cloud platform and the accounting, logistics or ERP tools you already run, through purpose-built APIs.",
  },
] as const;

export function Capabilities() {
  return (
    <section
      id="services"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-16 bg-obsidian text-paper lg:scroll-mt-[76px]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <h2
            id="capabilities-heading"
            className="font-display text-[clamp(1.75rem,1.4rem+1.4vw,2.375rem)] font-medium leading-[1.1] tracking-[-0.02em]"
          >
            Core Capabilities
          </h2>
          <p className="hidden pb-1.5 font-mono text-xs uppercase tracking-[0.14em] text-paper/45 sm:block">
            Service inventory
          </p>
        </div>

        <ol className="mt-10 border-t border-rule-inverse sm:mt-14 lg:mt-20">
          {capabilities.map((item, index) => (
            <li
              key={item.title}
              className="-mx-5 grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 border-b border-rule-inverse px-5 py-8 transition-colors duration-200 hover:bg-paper/[0.05] sm:-mx-6 sm:px-6 lg:-mx-5 lg:grid-cols-12 lg:gap-x-8 lg:px-5 lg:py-14"
            >
              <span className="pt-1 font-mono text-sm text-brand lg:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium tracking-[-0.01em] sm:text-2xl lg:col-span-4">
                {item.title}
              </h3>
              <p className="col-start-2 max-w-2xl text-base leading-relaxed text-paper/60 lg:col-span-6 lg:col-start-6 lg:text-[1.0625rem] lg:leading-[1.9]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
