import { ArrowUpRight, Quote } from "lucide-react";
import { aboutBeliefs } from "@/data/about-beliefs";

export default function AboutBeliefs() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#737A1A]/[0.07]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#737A1A]/[0.045]
          blur-[160px]
        "
      />

      {/* Technical grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.5]
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

      {/* Large background number */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          top-[-30px]
          select-none
          font-black
          text-[15rem]
          leading-none
          tracking-[-0.16em]
          text-black/[0.025]
          sm:text-[22rem]
          lg:text-[30rem]
        "
      >
        04
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* =====================================================
            TOP BAR
        ====================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#737A1A]
                text-white
                shadow-[0_0_30px_rgba(115,122,26,0.18)]
              "
            >
              <Quote size={12} strokeWidth={1.6} />
            </span>

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[9px]">
              {aboutBeliefs.eyebrow}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-black/25 sm:block">
              Philosophy / System
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30">
              IMX / 04
            </span>
          </div>
        </div>

        {/* =====================================================
            HERO / INTRO
        ====================================================== */}

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
          {/* System information */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#737A1A]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-black/30">
                How we think
              </span>
            </div>

            <div className="mt-7 flex items-end gap-5">
              <div>
                <span className="font-mono text-[3rem] font-semibold leading-none tracking-[-0.08em] text-black/85 sm:text-[4rem]">
                  05
                </span>

                <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.2em] text-black/30">
                  Core beliefs
                </p>
              </div>

              <div className="mb-1 h-10 w-px bg-black/10" />

              <p className="max-w-[190px] text-[10px] leading-5 text-black/45">
                Principles that shape the way we approach every digital
                experience.
              </p>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.08em]">
              How we think
              <span className="block">
                shapes what{" "}
                <span className="relative text-[#737A1A]">
                  we build.
                  <span className="absolute -bottom-1 left-0 h-px w-1/2 bg-[#737A1A]" />
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-black/45 sm:text-[15px] sm:leading-7">
              {aboutBeliefs.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            PHILOSOPHY STRIP
        ====================================================== */}

        <div className="mt-12 border-y border-black/[0.08] py-7 sm:mt-14 sm:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr] lg:items-center lg:gap-12">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-black/30">
                Our philosophy
              </span>
            </div>

            <p className="max-w-5xl text-[clamp(1.35rem,2.5vw,2.4rem)] font-medium leading-[1.08] tracking-[-0.045em] text-black/80">
              We believe technology should{" "}
              <span className="text-[#737A1A]">simplify</span> complexity,
              design should{" "}
              <span className="text-[#737A1A]">create clarity</span>, and
              every detail should have a{" "}
              <span className="text-[#737A1A]">reason to exist.</span>
            </p>
          </div>
        </div>

        {/* =====================================================
            BELIEFS GRID
        ====================================================== */}

        <div className="mt-12 sm:mt-14">
          {/* Header */}

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-black/30">
                What guides us
              </span>

              <span className="h-px w-10 bg-black/10" />
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/25">
              05 Principles
            </span>
          </div>

          {/* Belief cards */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {aboutBeliefs.items.map((item) => (
              <article
                key={item.number}
                className="
                  group
                  relative
                  min-h-[230px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/[0.08]
                  bg-white
                  p-5
                  shadow-[0_14px_40px_rgba(0,0,0,0.035)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#737A1A]/30
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
                  sm:p-6
                "
              >
                {/* Top accent */}

                <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#737A1A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Background number */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-2
                    -top-5
                    font-mono
                    text-[7rem]
                    font-bold
                    leading-none
                    tracking-[-0.14em]
                    text-black/[0.035]
                  "
                >
                  {item.number}
                </span>

                {/* Header */}

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#737A1A]">
                    {item.number}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-black/25 transition-all duration-300 group-hover:border-[#737A1A]/30 group-hover:bg-[#737A1A] group-hover:text-white">
                    <ArrowUpRight size={12} />
                  </span>
                </div>

                {/* Divider */}

                <div className="relative mt-8 h-px w-full bg-black/[0.08]">
                  <span className="absolute left-0 top-0 h-px w-8 bg-[#737A1A]" />
                </div>

                {/* Content */}

                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.045em] text-black sm:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[12px] leading-5 text-black/45">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:left-6 sm:right-6">
                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/20">
                    Principle
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]/70" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-black/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25">
            Think deeply · Build intentionally · Keep improving
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
              IMX / 04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}