import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { aboutProof } from "@/data/about-proof";

export default function AboutProof() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-0 select-none text-[18rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[24rem] lg:text-[32rem]"
      >
        09
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
              {aboutProof.eyebrow}
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            {aboutProof.title}
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {aboutProof.description}
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {aboutProof.stats.map((stat, index) => (
            <article
              key={stat.label}
              className={[
                "group relative border-white/10 px-1 py-8 sm:px-6 sm:py-10 lg:px-7 lg:py-8",
                index < 2 ? "sm:border-b lg:border-b-0" : "",
                index % 2 === 0 ? "sm:border-r lg:border-r" : "",
                index === 2 ? "lg:border-l" : "",
                index !== 3 ? "lg:border-r" : "",
              ].join(" ")}
            >
              {/* Top accent */}
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.18em] text-white/30">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                  strokeWidth={1.5}
                />
              </div>

              <div className="text-6xl font-semibold tracking-[-0.06em] text-[#737A1A] sm:text-7xl">
                {stat.value}
              </div>

              <h3 className="mt-5 text-lg font-medium tracking-[-0.02em]">
                {stat.label}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom proof statement */}
        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            {aboutProof.statement}
          </p>

          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#737A1A] pb-2 text-sm font-medium text-white transition-colors hover:text-[#737A1A]"
          >
            See our work

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}