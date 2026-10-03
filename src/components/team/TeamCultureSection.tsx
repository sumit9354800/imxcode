import { ArrowUpRight } from "lucide-react";
import { teamCultureItems } from "@/data/team-culture";

export default function TeamCultureSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Ambient olive glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-[520px] w-[520px] rounded-full bg-[#737A1A]/[0.05] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.04] blur-[140px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Header */}
        <div className="border-b border-black/10 pb-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#737A1A]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A] sm:text-[10px]">
                  Team Culture / Philosophy
                </p>
              </div>

              <h2 className="mt-6 max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                How we think
                <span className="block text-[#737A1A]">
                  shapes how we build.
                </span>
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-xs leading-6 text-black/45 sm:text-sm">
                Culture is not something separate from the work. It shows up
                in how we question, create, communicate and make decisions.
              </p>

              <div className="mt-5 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                {String(teamCultureItems.length).padStart(2, "0")} Principles
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Culture List */}
        <div className="mt-10">
          {teamCultureItems.map((item, index) => (
            <article
              key={item.number}
              className="group relative border-b border-black/10 py-7 sm:py-8 lg:py-9"
            >
              {/* Hover accent */}
              <span className="absolute left-0 top-0 h-full w-0.5 bg-[#737A1A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid gap-6 lg:grid-cols-[90px_1fr_0.9fr_40px] lg:items-center lg:gap-10">
                {/* Number */}
                <div className="flex items-center gap-4 lg:block">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#737A1A]">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-black/10 lg:mt-5 lg:block" />
                </div>

                {/* Title */}
                <div>
                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-[clamp(1.8rem,3.2vw,3.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#737A1A]">
                    {item.title}
                  </h3>
                </div>

                {/* Description + Statement */}
                <div>
                  <p className="max-w-xl text-xs leading-6 text-black/45 sm:text-sm">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-px w-6 bg-[#737A1A]/40 transition-all duration-300 group-hover:w-10 group-hover:bg-[#737A1A]" />

                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/30 transition-colors duration-300 group-hover:text-[#737A1A]">
                      {item.statement}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden justify-end lg:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A] group-hover:text-white">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>

              {/* Mobile arrow */}
              <div className="mt-5 flex lg:hidden">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-black/30 transition-all duration-300 group-hover:border-[#737A1A] group-hover:text-[#737A1A]">
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-10 grid gap-6 border-t border-black/10 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#737A1A]" />

            <p className="max-w-2xl text-sm leading-6 text-black/40 sm:text-base">
              Different perspectives make better work. We give people room to
              think, experiment and contribute.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
            <span className="h-px w-8 bg-black/15" />
            IMX Digital Studio
          </div>
        </div>
      </div>
    </section>
  );
}