import { ArrowUpRight } from "lucide-react";
import { teamCultureItems } from "@/data/team-culture";

export default function TeamCultureSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:gap-12">
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              Team Culture / Philosophy
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              How we think
              <span className="block text-[#737A1A]">shapes how we build.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Our culture influences every project we work on — from the way
              we communicate and collaborate to the way we approach design,
              technology and creative problem solving.
            </p>
          </div>
        </div>

        {/* Culture Grid */}
        <div className="mt-16 grid border-t border-black/10 sm:grid-cols-2">
          {teamCultureItems.map((item, index) => (
            <article
              key={item.number}
              className={`group relative p-6 sm:p-8 lg:p-10 ${
                index % 2 === 0 ? "sm:border-r sm:border-black/10" : ""
              } ${
                index < 2 ? "border-b border-black/10" : ""
              }`}
            >
              {/* Hover line */}
              <span className="absolute left-0 top-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                />
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/50">
                {item.description}
              </p>

              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35 transition-colors duration-300 group-hover:text-[#737A1A]">
                  {item.statement}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black/40">
            Different perspectives make better work. We give people room to
            think, experiment and contribute.
          </p>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/25">
            IMX Creative Tech
          </span>
        </div>
      </div>
    </section>
  );
}