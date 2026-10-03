import { ArrowUpRight } from "lucide-react";
import { websiteCapabilities } from "@/data/services/website-development";

export default function WebsiteDevelopmentCapabilities() {
  return (
    <section
      id="website-capabilities"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[20%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.08] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.07] blur-[140px]"
      />

      {/* Technical vertical lines */}
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-white/[0.035]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/[0.025]" />
      <div className="pointer-events-none absolute inset-y-0 right-[8%] w-px bg-white/[0.035]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
          {/* Eyebrow */}

          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A]/25" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">
                What Goes Into It
              </span>
            </div>

            <div className="mt-5 hidden items-center gap-3 lg:flex">
              <span className="text-[8px] uppercase tracking-[0.22em] text-white/20">
                Web / Architecture
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="text-[8px] uppercase tracking-[0.22em] text-[#737A1A]/70">
                01 — 05
              </span>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-[900px] text-[clamp(2.3rem,4.6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              More than a
              <br />
              good-looking
              <br />
              <span className="text-[#737A1A]">website.</span>
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-6 text-white/45 sm:text-[15px] sm:leading-7">
              Every website is built on a foundation of structure, engineering,
              performance and the right digital tools.
            </p>
          </div>
        </div>

        {/* =================================================
            CAPABILITY GRID
        ================================================== */}

        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:mt-12 lg:grid-cols-2">
          {websiteCapabilities.map((capability, index) => (
            <div
              key={capability.number}
              className="
                group
                relative
                min-w-0
                bg-black
                px-5
                py-6
                transition-colors
                duration-500
                hover:bg-[#737A1A]/[0.045]
                sm:px-7
                sm:py-7
                lg:px-8
                lg:py-8
              "
            >
              {/* Hover indicator */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[2px]
                  origin-top
                  scale-y-0
                  bg-[#737A1A]
                  transition-transform
                  duration-500
                  group-hover:scale-y-100
                "
              />

              {/* =================================================
                  TOP META
              ================================================== */}

              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#737A1A]">
                  {capability.number}
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/15">
                  Capability {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <div className="mt-7 flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <h3 className="text-[22px] font-medium tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#737A1A] sm:text-2xl lg:text-[27px]">
                    {capability.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-7 bg-[#737A1A]/70 transition-all duration-500 group-hover:w-12" />

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                      className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#737A1A]"
                    />
                  </div>
                </div>

                {/* Large index */}
                <span className="shrink-0 font-mono text-[30px] leading-none tracking-[-0.06em] text-white/[0.055] sm:text-[38px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p className="mt-6 max-w-[620px] text-[13px] leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55 sm:text-sm sm:leading-6">
                {capability.description}
              </p>

              {/* =================================================
                  ITEMS
              ================================================== */}

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.08] pt-5">
                {capability.items.map((item) => (
                  <span
                    key={item}
                    className="
                      relative
                      pl-3
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.13em]
                      text-white/25
                      transition-colors
                      duration-300
                      group-hover:text-white/40
                    "
                  >
                    <span className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#737A1A]/60" />
                    {item}
                  </span>
                ))}
              </div>

              {/* =================================================
                  BOTTOM SIGNAL
              ================================================== */}

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#737A1A]/60" />

                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/15">
                    Digital Layer
                  </span>
                </div>

                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#737A1A]" />
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            BOTTOM SYSTEM
        ================================================== */}

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
              System
            </span>

            <span className="h-px w-7 bg-white/10" />

            <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
              Design · Engineering · Performance
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/20">
              Built for real-world use
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
          </div>
        </div>
      </div>
    </section>
  );
}