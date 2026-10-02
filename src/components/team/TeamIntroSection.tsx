import { ArrowUpRight } from "lucide-react";
import { teamIntro } from "@/data/team-intro";

export default function TeamIntroSection() {
  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:gap-12">
          {/* Eyebrow */}
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {teamIntro.eyebrow}
            </p>
          </div>

          {/* Main heading */}
          <div>
            <h2 className="max-w-5xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
              {teamIntro.title}
            </h2>

            <div className="mt-6 flex max-w-2xl items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#737A1A]" />

              <p className="text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
                {teamIntro.description}
              </p>
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-14 border-t border-black/10">
          {teamIntro.disciplines.map((discipline) => (
            <div
              key={discipline.number}
              className="group relative grid gap-3 border-b border-black/10 py-5 transition-transform duration-300 hover:translate-x-1 sm:grid-cols-[60px_0.7fr_1fr] sm:items-center sm:gap-6 sm:py-6"
            >
              {/* Accent */}
              <span className="absolute left-0 top-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium tracking-[0.18em] text-[#737A1A]">
                  {discipline.number}
                </span>

                <span className="h-px w-4 bg-black/15 transition-all duration-300 group-hover:w-6 group-hover:bg-[#737A1A]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                {discipline.title}
              </h3>

              {/* Description */}
              <div className="flex items-center justify-between gap-5">
                <p className="max-w-xl text-xs leading-5 text-black/50 sm:text-sm sm:leading-6">
                  {discipline.description}
                </p>

                <ArrowUpRight
                  size={16}
                  className="hidden shrink-0 text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A] sm:block"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Compact footer */}
        <div className="mt-7 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
            Different skills. One shared direction.
          </p>

          <span className="hidden text-[9px] uppercase tracking-[0.18em] text-black/30 sm:block">
            IMX Digital Studio
          </span>
        </div>
      </div>
    </section>
  );
}