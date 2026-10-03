import { ArrowUpRight } from "lucide-react";
import { teamCollaborationItems } from "@/data/team-collaboration";

export default function HowWeWorkTogether() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Ambient olive atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 h-[520px] w-[520px] rounded-full bg-[#737A1A]/[0.06] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.045] blur-[140px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Section marker */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A] sm:text-[10px]">
                How We Work Together
              </p>
            </div>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-[clamp(3rem,5vw,5rem)] font-semibold leading-none tracking-[-0.08em] text-black/10">
                {String(teamCollaborationItems.length).padStart(2, "0")}
              </span>

              <span className="mb-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                Collaboration principles
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Different minds.
              <span className="block text-[#737A1A]">
                One direction.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-black/45 sm:text-base sm:leading-7">
              Great digital work happens when technology, design and creative
              thinking move together — not separately.
            </p>
          </div>
        </div>

        {/* Collaboration Flow */}
        <div className="relative mt-12">
          {/* Desktop connection line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[34px] hidden h-px bg-black/10 lg:block"
          />

          <div className="grid gap-0 lg:grid-cols-4">
            {teamCollaborationItems.map((item, index) => (
              <div
                key={item.number}
                className="group relative border-b border-black/10 py-7 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Connector */}
                <div className="relative z-10 flex items-center justify-between lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-500 group-hover:border-[#737A1A]/60 group-hover:shadow-[0_0_0_8px_rgba(115,122,26,0.05)]">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#737A1A]">
                        {item.number}
                      </span>
                    </div>

                    <div className="h-px w-8 bg-black/10 lg:hidden" />
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A] lg:absolute lg:right-7 lg:top-7 lg:opacity-0 lg:group-hover:opacity-100"
                  />
                </div>

                {/* Content */}
                <div className="mt-6 lg:mt-8">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                    {item.focus}
                  </p>

                  <h3 className="mt-3 max-w-[240px] text-2xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[270px] text-xs leading-6 text-black/45 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#737A1A]" />

                  <span className="h-px w-8 bg-black/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#737A1A]" />

                  <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-black/25">
                    IMX Method
                  </span>
                </div>

                {/* Mobile connector */}
                {index < teamCollaborationItems.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-[33px] h-7 w-px bg-black/10 lg:hidden"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#737A1A]" />

            <p className="max-w-2xl text-xs leading-6 text-black/40 sm:text-sm">
              The strongest ideas emerge when the right people challenge,
              shape and build them together.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
            <span className="h-px w-6 bg-black/15" />
            IMX Digital Studio
          </div>
        </div>
      </div>
    </section>
  );
}