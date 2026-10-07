const phases = [
  {
    title: "Deep Audit",
    description:
      "Mapping every table, stored procedure and user workflow in your current stack to identify the critical business logic.",
  },
  {
    title: "Structural Blueprint",
    description:
      "Defining the target cloud architecture and data schemas before a single line of code is written.",
  },
  {
    title: "Parallel Build",
    description:
      "Engineers build the new system in isolation while your legacy system continues to run daily operations.",
  },
  {
    title: "Hard Cutover",
    description:
      "Synchronized data migration and final switchover, typically executed inside a single weekend window.",
  },
] as const;

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-16 border-b border-rule lg:scroll-mt-[76px]"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-24 xl:gap-x-12">
        <div className="lg:col-span-4">
          <h2
            id="approach-heading"
            className="max-w-[12ch] font-display text-[clamp(2rem,1.5rem+2vw,2.875rem)] font-medium leading-[1.2] tracking-[-0.02em] text-obsidian"
          >
            The <span className="text-brand">Shift</span> Protocol
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg lg:mt-10">
            An engineering-first approach that minimizes risk while maximizing
            system performance, through a rigid four-phase execution model.
          </p>
        </div>

        <ol className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:col-span-8">
          {phases.map((phase, index) => (
            <li key={phase.title} className="bg-paper p-6 sm:p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.04em] text-brand">
                Phase_{String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-xl font-medium tracking-[-0.01em] text-obsidian sm:text-[1.375rem]">
                {phase.title}
              </h3>
              <p className="mt-4 leading-[1.8] text-obsidian/70">
                {phase.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
