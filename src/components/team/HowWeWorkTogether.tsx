import { ArrowUpRight, Check } from "lucide-react";
import { teamCollaborationItems } from "@/data/team-collaboration";

export default function HowWeWorkTogether() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#737A1A]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#737A1A]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-xs">
                How We Work Together
              </p>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-black/40">
              Different disciplines. One shared direction.
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
              Better together.
              <span className="block text-[#737A1A]">
                Always.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
              Great digital work happens when different perspectives come
              together. At IMX, every project benefits from the combined
              thinking of technology, design and creative.
            </p>
          </div>
        </div>

        {/* Collaboration Grid */}
        <div className="mt-20 grid border-t border-black/10 md:grid-cols-2">
          {teamCollaborationItems.map((item, index) => (
            <div
              key={item.number}
              className={`group relative border-b border-black/10 p-7 transition-colors duration-300 hover:bg-[#737A1A]/[0.04] sm:p-9 lg:p-12 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                />
              </div>

              {/* Content */}
              <div className="mt-16 max-w-xl">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/30">
                  {item.focus}
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-black/50 sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-12 flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#737A1A]/10">
                  <Check size={12} className="text-[#737A1A]" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/30">
                  Part of the IMX way
                </span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-black/40 sm:text-base">
            The best work doesn't come from one person doing everything.
            It comes from the right people building together.
          </p>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
            IMX Creative Tech
          </span>
        </div>
      </div>
    </section>
  );
}