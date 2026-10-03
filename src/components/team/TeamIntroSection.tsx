import { ArrowUpRight } from "lucide-react";
import { teamIntro } from "@/data/team-intro";

export default function TeamIntroSection() {
  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Olive atmosphere */}
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.07] blur-[130px]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-10">
          {/* Eyebrow */}
          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-px w-7 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A] sm:text-[10px]">
              {teamIntro.eyebrow}
            </p>
          </div>

          {/* Main heading */}
          <div>
            <div className="flex items-end justify-between gap-8">
              <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.2rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                {teamIntro.title}
              </h2>

              {/* Section number */}
              <span className="hidden shrink-0 pb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-black/20 lg:block">
                04 / Team
              </span>
            </div>

            <div className="mt-5 flex max-w-2xl items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#737A1A]" />

              <p className="text-xs leading-5 text-black/50 sm:text-sm sm:leading-6">
                {teamIntro.description}
              </p>
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-10 border-t border-black/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {teamIntro.disciplines.map((discipline, index) => (
              <div
                key={discipline.number}
                className={`
                  group relative min-w-0 border-b border-black/10
                  px-1 py-6
                  transition-all duration-300
                  hover:bg-[#737A1A]/[0.035]
                  sm:px-5 sm:py-7
                  lg:px-6 lg:py-8
                  ${
                    index % 2 !== 0
                      ? "sm:border-l sm:border-black/10"
                      : ""
                  }
                  ${
                    index % 3 !== 0
                      ? "lg:border-l lg:border-black/10"
                      : ""
                  }
                `}
              >
                {/* Hover accent */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

                {/* Top line */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-[#737A1A]">
                      {discipline.number}
                    </span>

                    <span className="h-px w-5 bg-black/10 transition-all duration-300 group-hover:w-8 group-hover:bg-[#737A1A]" />
                  </div>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.04em] sm:text-[22px]">
                  {discipline.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-sm text-[11px] leading-5 text-black/45 sm:text-xs sm:leading-5">
                  {discipline.description}
                </p>

                {/* Bottom marker */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#737A1A] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="text-[8px] uppercase tracking-[0.18em] text-black/20 transition-colors duration-300 group-hover:text-black/40">
                    Discipline
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact footer */}
        <div className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
            Different skills. One shared direction.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.18em] text-black/20">
              {String(teamIntro.disciplines.length).padStart(2, "0")}{" "}
              disciplines
            </span>

            <span className="hidden h-px w-6 bg-black/10 sm:block" />

            <span className="hidden text-[9px] uppercase tracking-[0.18em] text-black/25 sm:block">
              IMX Digital Studio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}