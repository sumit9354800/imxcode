"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { aboutWhyImx } from "@/data/about-why-imx";

export default function AboutWhyImx() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = aboutWhyImx.items[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND SYSTEM
      ====================================================== */}

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-50
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,black,transparent_92%)]
        "
      />

      {/* Main olive atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-60 top-[18%]
          h-[600px] w-[600px]
          rounded-full
          bg-[#737A1A]/10
          blur-[160px]
        "
      />

      {/* Secondary atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-60 bottom-[-10%]
          h-[600px] w-[600px]
          rounded-full
          bg-[#737A1A]/[0.07]
          blur-[170px]
        "
      />

      {/* Giant background number */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-16 top-[-20px]
          select-none
          font-black
          text-[18rem]
          leading-none
          tracking-[-0.16em]
          text-white/[0.025]
          sm:text-[25rem]
          lg:text-[34rem]
        "
      >
        06
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        {/* =================================================
            TOP META
        ================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-[#737A1A]/30
                bg-[#737A1A]/10
                text-[#737A1A]
              "
            >
              <Sparkles size={13} strokeWidth={1.7} />
            </span>

            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {aboutWhyImx.eyebrow}
            </p>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 sm:text-[9px]">
            IMX / 06
          </span>
        </div>

        {/* =================================================
            MAIN INTRO
        ================================================== */}

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#737A1A]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                The IMX difference
              </span>
            </div>

            <h2 className="mt-8 text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
              Why
              <span className="block text-[#737A1A]">IMX?</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              {aboutWhyImx.description}
            </p>
          </div>

          {/* Right intro statement */}
          <div className="lg:pb-2">
            <div className="max-w-3xl">
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                Built differently
              </span>

              <p className="mt-5 text-[clamp(1.8rem,3.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.06em]">
                Different disciplines.
                <br />
                <span className="text-[#737A1A]">
                  One connected direction.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            INTERACTIVE SYSTEM
        ================================================== */}

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-[0.42fr_1.58fr] lg:gap-8">
          {/* =================================================
              LEFT NAVIGATION
          ================================================== */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              className="
                overflow-hidden
                rounded-[1.5rem]
                border border-white/[0.08]
                bg-white/[0.025]
                backdrop-blur-xl
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                    IMX Principles
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Select a principle
                  </p>
                </div>

                <span className="font-mono text-[8px] text-[#737A1A]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(aboutWhyImx.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Navigation */}
              <div className="p-2">
                {aboutWhyImx.items.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => handleSelect(index)}
                      aria-pressed={isActive}
                      className={`
                        group relative
                        flex w-full
                        items-center
                        gap-4
                        rounded-xl
                        px-4 py-4
                        text-left
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-[#737A1A]/10"
                            : "hover:bg-white/[0.035]"
                        }
                      `}
                    >
                      {/* Active line */}
                      <span
                        className={`
                          absolute
                          bottom-2 left-0 top-2
                          w-[2px]
                          rounded-full
                          bg-[#737A1A]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                      />

                      {/* Number */}
                      <span
                        className={`
                          flex h-9 w-9
                          shrink-0
                          items-center justify-center
                          rounded-full
                          border
                          font-mono
                          text-[8px]
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "border-[#737A1A]/40 bg-[#737A1A] text-white shadow-[0_0_25px_rgba(115,122,26,0.25)]"
                              : "border-white/10 bg-white/[0.025] text-white/30 group-hover:border-white/20 group-hover:text-white/60"
                          }
                        `}
                      >
                        {item.number}
                      </span>

                      {/* Title */}
                      <span
                        className={`
                          flex-1
                          text-sm
                          font-medium
                          tracking-[-0.02em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-white/45 group-hover:text-white/75"
                          }
                        `}
                      >
                        {item.title}
                      </span>

                      {/* Arrow */}
                      <ArrowRight
                        size={15}
                        className={`
                          shrink-0
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "translate-x-0 text-[#737A1A]"
                              : "-translate-x-1 text-white/15 group-hover:translate-x-0 group-hover:text-white/40"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Bottom progress */}
              <div className="border-t border-white/[0.08] px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                    Progress
                  </span>

                  <span className="font-mono text-[7px] text-white/25">
                    {Math.round(
                      ((activeIndex + 1) /
                        aboutWhyImx.items.length) *
                        100,
                    )}
                    %
                  </span>
                </div>

                <div className="mt-3 h-px w-full bg-white/[0.08]">
                  <div
                    className="h-px bg-[#737A1A] transition-all duration-500"
                    style={{
                      width: `${
                        ((activeIndex + 1) /
                          aboutWhyImx.items.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              ACTIVE CONTENT
          ================================================== */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[1.5rem]
              border border-white/[0.08]
              bg-[#090909]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            "
          >
            {/* Internal grid */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                opacity-50
                [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
                [background-size:48px_48px]
              "
            />

            {/* Olive glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-[320px] w-[320px]
                rounded-full
                bg-[#737A1A]/10
                blur-[100px]
              "
            />

            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                right-[-100px]
                top-1/2
                h-[380px]
                w-[380px]
                -translate-y-1/2
                rounded-full
                border border-[#737A1A]/10
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                right-[-35px]
                top-1/2
                h-[250px]
                w-[250px]
                -translate-y-1/2
                rounded-full
                border border-dashed border-white/[0.08]
              "
            />

            {/* Content */}
            <div className="relative flex min-h-[430px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_12px_rgba(115,122,26,0.7)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                    Active principle
                  </span>
                </div>

                <span className="font-mono text-[9px] text-white/20">
                  {activeItem.number}
                </span>
              </div>

              {/* Main */}
              <div className="relative max-w-3xl py-12">
                {/* Giant active number */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-4
                    -top-12
                    select-none
                    font-black
                    text-[11rem]
                    leading-none
                    tracking-[-0.12em]
                    text-white/[0.025]
                    sm:text-[15rem]
                  "
                >
                  {activeItem.number}
                </span>

                <div className="relative">
                  <div
                    className="
                      mb-6
                      inline-flex
                      h-10 w-10
                      items-center justify-center
                      rounded-xl
                      border border-[#737A1A]/25
                      bg-[#737A1A]/10
                    "
                  >
                    <Check
                      size={17}
                      strokeWidth={1.8}
                      className="text-[#737A1A]"
                    />
                  </div>

                  <h3
                    key={`title-${activeIndex}`}
                    className="
                      max-w-2xl
                      text-[clamp(2.2rem,5vw,5rem)]
                      font-semibold
                      leading-[0.9]
                      tracking-[-0.07em]
                      animate-[fadeUp_400ms_ease-out]
                    "
                  >
                    {activeItem.title}
                  </h3>

                  <p
                    key={`description-${activeIndex}`}
                    className="
                      mt-7
                      max-w-2xl
                      text-sm
                      leading-7
                      text-white/45
                      sm:text-base
                      sm:leading-8
                      animate-[fadeUp_450ms_ease-out]
                    "
                  >
                    {activeItem.description}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="relative flex flex-col gap-5 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Check size={12} className="text-[#737A1A]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                    IMX principle
                  </span>
                </div>

                {/* Mini indicators */}
                <div className="flex items-center gap-1.5">
                  {aboutWhyImx.items.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => handleSelect(index)}
                      aria-label={`View ${item.title}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          activeIndex === index
                            ? "w-8 bg-[#737A1A]"
                            : "w-1.5 bg-white/15 hover:bg-white/30"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div className="mt-16 border-t border-white/[0.08] pt-8 sm:mt-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                Our direction
              </span>

              <p className="mt-4 max-w-4xl text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.05em]">
                Different disciplines.
                <span className="text-[#737A1A]">
                  {" "}
                  One direction.
                </span>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_12px_rgba(115,122,26,0.7)]" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-white/25">
                IMX / 06
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          LOCAL ANIMATION
      ====================================================== */}

    </section>
  );
}