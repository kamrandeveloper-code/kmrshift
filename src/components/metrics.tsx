const metrics = [
  { value: "140ms", label: "Avg latency reduction" },
  { value: "$2.4M", label: "Saved in licensing fees" },
  { value: "99.99%", label: "Uptime commitment" },
  { value: "12-Week", label: "Average deployment cycle" },
] as const;

export function Metrics() {
  return (
    <section aria-label="Results" className="border-b border-rule bg-zinc-200">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse gap-2.5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted sm:text-xs">
                {metric.label}
              </dt>
              <dd className="font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.25rem)] font-medium leading-none tracking-[-0.02em] text-obsidian">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
