import { ArrowUpRight } from "lucide-react";
import { aboutApproach } from "@/data/about-approach";

export default function AboutApproach() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#737A1A]/5 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:gap-12">
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {aboutApproach.eyebrow}
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Think clearly.
              <span className="block text-[#737A1A]">
                Build carefully.
              </span>
              <span className="block">Move forward.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              {aboutApproach.description}
            </p>
          </div>
        </div>

        {/* Approach steps */}
        <div className="mt-16 border-t border-white/10">
          {aboutApproach.items.map((item) => (
            <article
              key={item.number}
              className="group relative grid gap-5 border-b border-white/10 py-7 transition-transform duration-300 hover:translate-x-1 sm:py-8 lg:grid-cols-[80px_0.7fr_1.2fr_0.35fr] lg:items-center lg:gap-10"
            >
              {/* Hover line */}
              <span className="absolute left-0 top-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

              <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                {item.number}
              </span>

              <h3 className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-xl text-sm leading-6 text-white/45">
                {item.description}
              </p>

              <div className="flex items-center justify-between gap-4 lg:justify-end">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-[#737A1A]">
                  {item.focus}
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
            A clear process gives creativity room to work and technology a
            direction to follow.
          </p>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
            IMX / 03
          </span>
        </div>
      </div>
    </section>
  );
}