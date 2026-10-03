import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { aboutProof } from "@/data/about-proof";

export default function AboutProof() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#737A1A]/[0.08]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#737A1A]/[0.06]
          blur-[140px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.45]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,black,transparent_92%)]
        "
      />

      {/* =====================================================
          BACKGROUND NUMBER
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          -top-5
          select-none
          font-black
          text-[14rem]
          leading-none
          tracking-[-0.12em]
          text-white/[0.025]
          sm:text-[20rem]
          lg:text-[27rem]
        "
      >
        09
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr] lg:items-end lg:gap-12">
          {/* Eyebrow */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#737A1A]" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.28em] text-[#9ba044] sm:text-[9px]">
                {aboutProof.eyebrow}
              </span>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                Proof / 09
              </span>

              <span className="h-px w-8 bg-white/10" />
            </div>
          </div>

          {/* Main heading */}

          <div>
            <h2 className="max-w-5xl text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
              {aboutProof.title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/45 sm:text-[15px] sm:leading-7">
              {aboutProof.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <div className="relative mt-10 border-y border-white/[0.08] sm:mt-12">
          {/* Desktop connection line */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[12.5%]
              right-[12.5%]
              top-1/2
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#737A1A]/20
              to-transparent
              lg:block
            "
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {aboutProof.stats.map((stat, index) => (
              <article
                key={stat.label}
                className="
                  group
                  relative
                  min-h-[220px]
                  overflow-hidden
                  border-white/[0.08]
                  px-5
                  py-7
                  transition-all
                  duration-300
                  hover:bg-white/[0.025]
                  sm:px-6
                  sm:py-8
                  lg:min-h-[235px]
                  lg:px-7
                "
              >
                {/* Vertical separators */}

                {index !== 0 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-8
                      hidden
                      h-[calc(100%-4rem)]
                      w-px
                      bg-white/[0.08]
                      sm:block
                    "
                  />
                )}

                {/* Olive top line */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-5
                    right-5
                    top-0
                    h-px
                    origin-left
                    scale-x-0
                    bg-[#737A1A]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                    sm:left-6
                    sm:right-6
                  "
                />

                {/* Top row */}

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[8px] font-semibold tracking-[0.18em] text-white/25">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#9ba044]
                    "
                    strokeWidth={1.4}
                  />
                </div>

                {/* Value */}

                <div className="relative mt-10">
                  <div className="font-mono text-[3.5rem] font-semibold leading-none tracking-[-0.08em] text-[#9ba044] sm:text-[4rem]">
                    {stat.value}
                  </div>

                  <div className="mt-4 h-px w-10 bg-[#737A1A] transition-all duration-300 group-hover:w-16" />
                </div>

                {/* Label */}

                <h3 className="relative mt-4 text-base font-medium tracking-[-0.02em] text-white/90 sm:text-lg">
                  {stat.label}
                </h3>

                {/* Description */}

                <p className="relative mt-2 max-w-xs text-[12px] leading-5 text-white/35">
                  {stat.description}
                </p>

                {/* Bottom marker */}

                <div className="absolute bottom-5 left-5 flex items-center gap-2 sm:left-6">
                  <span className="h-1 w-1 rounded-full bg-[#737A1A]" />

                  <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/20">
                    Verified metric
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM PROOF STATEMENT
        ====================================================== */}

        <div className="mt-10 border-t border-white/[0.08] pt-7 sm:mt-12 sm:pt-8">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            {/* Statement */}

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-white/25">
                  Our track record
                </span>
              </div>

              <p className="max-w-4xl text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.055em] text-white/90">
                {aboutProof.statement}
              </p>
            </div>

            {/* CTA */}

            <Link
              href="/work"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                border-b
                border-[#737A1A]
                pb-2
                text-xs
                font-medium
                text-white
                transition-colors
                duration-300
                hover:text-[#9ba044]
              "
            >
              See our work

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
            IMX Digital Studio
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
            About / 09
          </span>
        </div>
      </div>
    </section>
  );
}