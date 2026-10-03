"use client";

import { ArrowDownRight, Code2, Palette, Sparkles } from "lucide-react";
import { aboutWhoWeAre } from "@/data/about-who-we-are";

const capabilityIcons = [Code2, Palette, Sparkles];

export default function AboutWhoWeAre() {
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
          top-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#737A1A]/[0.06]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#737A1A]/[0.045]
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
          opacity-60
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

      {/* =====================================================
          GIANT SECTION NUMBER
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-10
          top-[-10px]
          select-none
          font-black
          text-[14rem]
          leading-none
          tracking-[-0.16em]
          text-black/[0.025]
          sm:text-[20rem]
          lg:-right-16
          lg:text-[27rem]
        "
      >
        02
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* =====================================================
            TOP BAR
        ====================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-px w-10 overflow-hidden bg-black/10">
              <span className="absolute inset-y-0 left-0 w-1/2 bg-[#737A1A]" />
            </span>

            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[9px]">
              {aboutWhoWeAre.eyebrow}
            </p>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/25">
            IMX / 02
          </span>
        </div>

        {/* =====================================================
            MAIN INTRO
        ====================================================== */}

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-end lg:gap-12">
          {/* LEFT INFORMATION */}

          <div className="relative">
            {/* Technical marker */}

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-black/10 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.04)]">
                <span className="h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_14px_rgba(115,122,26,0.6)]" />
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-black/30">
                Who we are
              </span>
            </div>

            <div className="border-l border-black/10 pl-5">
              <p className="max-w-xs text-[9px] font-medium uppercase leading-6 tracking-[0.2em] text-black/35 sm:text-[10px]">
                Technology
                <br />
                Design
                <br />
                Creative
                <br />
                <span className="text-[#737A1A]">
                  One connected team.
                </span>
              </p>
            </div>

            {/* Small system detail */}

            <div className="mt-7 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white">
                <ArrowDownRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#737A1A]"
                />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30">
                What defines us
              </span>
            </div>
          </div>

          {/* MAIN STATEMENT */}

          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-black/25">
                Digital capability system
              </span>
            </div>

            <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              We bring different
              <span className="block">
                disciplines into one{" "}
                <span className="relative inline-block text-[#737A1A]">
                  digital team.
                  <span className="absolute -bottom-1 left-0 h-px w-1/2 bg-[#737A1A]/40" />
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-black/45 sm:text-[15px] sm:leading-7">
              {aboutWhoWeAre.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            CAPABILITY SYSTEM
        ====================================================== */}

        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          {/* Connection line */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[16.666%]
              right-[16.666%]
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

          {/* Signal points */}

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[25%]
              top-[calc(50%-2px)]
              hidden
              h-1
              w-1
              rounded-full
              bg-[#737A1A]
              shadow-[0_0_12px_rgba(115,122,26,0.7)]
              lg:block
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[25%]
              top-[calc(50%-2px)]
              hidden
              h-1
              w-1
              rounded-full
              bg-[#737A1A]
              shadow-[0_0_12px_rgba(115,122,26,0.7)]
              lg:block
            "
          />

          {/* =================================================
              CAPABILITY CARDS
          ================================================== */}

          <div className="grid gap-3 lg:grid-cols-3">
            {aboutWhoWeAre.capabilities.map((item, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];

              return (
                <article
                  key={item.number}
                  className="
                    group
                    relative
                    min-h-[250px]
                    overflow-hidden
                    rounded-[1.25rem]
                    border
                    border-black/[0.08]
                    bg-white/80
                    p-5
                    shadow-[0_16px_45px_rgba(0,0,0,0.04)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#737A1A]/30
                    hover:shadow-[0_22px_55px_rgba(115,122,26,0.08)]
                    sm:min-h-[265px]
                    sm:p-6
                  "
                >
                  {/* Olive glow */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-44
                      w-44
                      rounded-full
                      bg-[#737A1A]/[0.055]
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#737A1A]/[0.10]
                    "
                  />

                  {/* Background number */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-3
                      -top-7
                      font-mono
                      text-[8rem]
                      font-black
                      leading-none
                      tracking-[-0.12em]
                      text-black/[0.035]
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:text-[#737A1A]/[0.08]
                    "
                  >
                    {item.number}
                  </span>

                  {/* Top row */}

                  <div className="relative flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-black/[0.08]
                        bg-[#f8f8f5]
                        shadow-[0_8px_20px_rgba(0,0,0,0.035)]
                        transition-all
                        duration-300
                        group-hover:border-[#737A1A]/30
                        group-hover:bg-[#737A1A]/[0.08]
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#737A1A] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/20">
                      0{index + 1} / 03
                    </span>
                  </div>

                  {/* Content */}

                  <div className="relative mt-9">
                    <h3 className="text-xl font-semibold tracking-[-0.05em] sm:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-[13px] leading-5 text-black/45">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom system bar */}

                  <div className="absolute bottom-0 left-0 right-0 border-t border-black/[0.07] px-5 py-3.5 sm:px-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.2em] text-black/25">
                        IMX Capability
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#737A1A]" />

                        <ArrowDownRight
                          size={13}
                          strokeWidth={1.5}
                          className="
                            text-black/20
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:translate-y-1
                            group-hover:text-[#737A1A]
                          "
                        />
                      </div>
                    </div>

                    {/* Progress line */}

                    <div className="mt-2.5 h-px w-full overflow-hidden bg-black/[0.06]">
                      <div
                        className="
                          h-full
                          w-0
                          bg-[#737A1A]
                          transition-all
                          duration-500
                          group-hover:w-full
                        "
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <div className="relative mt-12 border-t border-black/[0.08] pt-8 sm:mt-14 sm:pt-9 lg:mt-16">
          <div className="grid gap-6 lg:grid-cols-[0.3fr_1fr] lg:gap-12">
            {/* Label */}

            <div className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
                Our perspective
              </span>
            </div>

            {/* Statement */}

            <div>
              <p className="max-w-5xl text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.06] tracking-[-0.05em]">
                {aboutWhoWeAre.statement}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#737A1A]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/25">
                  Technology × Design × Creative
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TECHNICAL METADATA
        ====================================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-black/[0.06] pt-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-black/20">
            IMX Digital Studio
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-black/20">
            About / 02
          </span>
        </div>
      </div>
    </section>
  );
}