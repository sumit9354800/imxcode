import { ArrowUpRight } from "lucide-react";
import { teamCultureItems } from "@/data/team-culture";

export default function TeamCultureSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Olive atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.055] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* Compact Header */}
        <div className="grid gap-6 border-b border-black/10 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A] sm:text-[10px]">
                Team Culture / Philosophy
              </p>
            </div>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
                {String(teamCultureItems.length).padStart(2, "0")} Principles
              </span>

              <span className="h-px w-8 bg-black/10" />
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.6rem,5vw,5.4rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              How we think.
              <span className="text-[#737A1A]"> How we build.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-xs leading-6 text-black/45 sm:text-sm">
              Our culture shapes how we communicate, collaborate and turn
              different perspectives into better digital work.
            </p>
          </div>
        </div>

        {/* Compact Culture System */}
        <div className="mt-8 grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {teamCultureItems.map((item, index) => (
            <article
              key={item.number}
              className={`group relative min-w-0 p-5 transition-colors duration-300 hover:bg-[#737A1A]/[0.035] sm:p-6 lg:p-7 ${
                index < teamCultureItems.length - 1
                  ? "border-b border-black/10 lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 1
                  ? "sm:border-r sm:border-black/10 lg:border-r"
                  : ""
              }`}
            >
              {/* Olive hover line */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#737A1A]">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#737A1A]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-2xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[11px] leading-5 text-black/45 sm:text-xs">
                {item.description}
              </p>

              {/* Statement */}
              <div className="mt-5 flex items-center gap-2 border-t border-black/10 pt-4">
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#737A1A]" />

                <p className="truncate text-[7px] font-semibold uppercase tracking-[0.17em] text-black/30 transition-colors duration-300 group-hover:text-[#737A1A]">
                  {item.statement}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-5 text-black/35 sm:text-xs">
            Different perspectives make better work. We give people room to
            think, experiment and contribute.
          </p>

          <div className="flex shrink-0 items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            IMX Digital Studio
          </div>
        </div>
      </div>
    </section>
  );
}