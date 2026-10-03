"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeIndex = openIndex ?? 0;
  const activeItem = faqItems[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-52 top-[-100px]
          h-[520px] w-[520px]
          rounded-full
          bg-[#737A1A]/[0.10]
          blur-[160px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-60 bottom-[-220px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#737A1A]/[0.055]
          blur-[150px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-40
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative mx-auto max-w-[1600px]
          px-5 py-16
          sm:px-8 sm:py-20
          lg:px-12 lg:py-24
          xl:px-16
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr] lg:gap-14">
          {/* Meta */}
          <div className="flex items-start gap-3">
            <span className="mt-[6px] h-px w-8 bg-[#737A1A]" />

            <div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#737A1A]/25" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                </span>

                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 sm:text-[10px]">
                  FAQ / Information
                </p>
              </div>

              <p className="mt-3 max-w-[220px] text-[11px] leading-5 text-black/35">
                Clear answers to the questions that usually come before a
                project begins.
              </p>
            </div>
          </div>

          {/* Heading */}
          <div>
            <div className="flex items-end justify-between gap-6">
              <h2
                className="
                  max-w-5xl
                  text-[clamp(2.7rem,5.2vw,5.8rem)]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.07em]
                "
              >
                Questions,
                <span className="block text-[#737A1A]">
                  answered clearly.
                </span>
              </h2>

              <span className="hidden shrink-0 pb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-black/20 lg:block">
                IMX / FAQ / 001
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-5">
              <p className="max-w-xl text-sm leading-6 text-black/40 sm:text-[15px]">
                A few things you may want to know before starting a project
                with IMX.
              </p>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/25">
                  {String(faqItems.length).padStart(2, "0")} answers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            FAQ SYSTEM
        ======================================================== */}

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          {/* =================================================
              ACCORDION
          ================================================== */}

          <div className="border-t border-black/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.number}
                  className="
                    relative
                    border-b border-black/10
                  "
                >
                  {/* Olive active rail */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[2px]
                      bg-[#737A1A]
                      transition-all
                      duration-500
                      ${
                        isOpen
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      px-2
                      py-6
                      text-left
                      transition-all
                      duration-300
                      hover:bg-[#737A1A]/[0.035]
                      sm:gap-5
                      sm:py-7
                      sm:pl-4
                    "
                  >
                    {/* Number */}
                    <span
                      className={`
                        w-8
                        shrink-0
                        font-mono
                        text-[9px]
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-[#737A1A]"
                            : "text-black/25"
                        }
                      `}
                    >
                      {item.number}
                    </span>

                    {/* Question */}
                    <span
                      className={`
                        flex-1
                        text-[1.05rem]
                        font-medium
                        leading-6
                        tracking-[-0.025em]
                        transition-colors
                        duration-300
                        sm:text-xl
                        sm:leading-7
                        lg:text-[1.35rem]
                        ${
                          isOpen
                            ? "text-[#737A1A]"
                            : "text-black"
                        }
                      `}
                    >
                      {item.question}
                    </span>

                    {/* Icon */}
                    <span
                      aria-hidden="true"
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "border-[#737A1A] bg-[#737A1A] text-white"
                            : "border-black/10 bg-white text-black/45 group-hover:border-[#737A1A] group-hover:text-[#737A1A]"
                        }
                      `}
                    >
                      {isOpen ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-400
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-[32px_1fr] gap-4 pb-7 pl-2 sm:grid-cols-[36px_1fr] sm:gap-5 sm:pl-4">
                        <span />

                        <p className="max-w-3xl pr-8 text-sm leading-7 text-black/45 sm:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              3D KNOWLEDGE OBJECT
          ================================================== */}

          <div className="relative hidden min-h-[480px] items-center justify-center lg:flex">
            {/* Giant background number */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                font-mono
                text-[13rem]
                font-semibold
                leading-none
                tracking-[-0.14em]
                text-black/[0.025]
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            {/* Orbit */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-black/[0.07]
                [transform:rotateX(67deg)rotateZ(-20deg)]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                h-[290px]
                w-[290px]
                rounded-full
                border
                border-[#737A1A]/20
                [transform:rotateY(65deg)rotateZ(18deg)]
              "
            />

            {/* Orbit points */}
            <span
              aria-hidden="true"
              className="
                absolute
                left-[calc(50%+155px)]
                top-[calc(50%-35px)]
                h-2
                w-2
                rounded-full
                bg-[#737A1A]
                shadow-[0_0_18px_rgba(115,122,26,0.7)]
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                left-[calc(50%-165px)]
                top-[calc(50%+60px)]
                h-1.5
                w-1.5
                rounded-full
                bg-black/25
              "
            />

            {/* 3D stage */}
            <div
              className="
                relative
                h-[245px]
                w-[245px]
                [perspective:1000px]
              "
            >
              {/* Back layer */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-[18px]
                  rounded-[2rem]
                  border
                  border-[#737A1A]/10
                  bg-[#737A1A]/[0.025]
                  [transform:translateZ(-65px)rotateX(7deg)rotateY(-8deg)]
                "
              />

              {/* Middle layer */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-[9px]
                  rounded-[2rem]
                  border
                  border-black/[0.07]
                  bg-white
                  shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                  [transform:translateZ(-30px)rotateX(7deg)rotateY(-8deg)]
                "
              />

              {/* Main object */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[2rem]
                  border
                  border-black/[0.10]
                  bg-[#fafafa]
                  shadow-[0_35px_80px_rgba(0,0,0,0.12)]
                  [transform-style:preserve-3d]
                  [transform:rotateX(7deg)rotateY(-10deg)]
                "
              >
                {/* Top plane */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-5
                    right-5
                    top-[-17px]
                    h-5
                    rounded-t-xl
                    border
                    border-black/[0.08]
                    bg-white
                    [transform-origin:bottom]
                    [transform:rotateX(90deg)]
                  "
                />

                {/* Right plane */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    right-[-17px]
                    top-5
                    w-5
                    rounded-r-xl
                    border
                    border-black/[0.07]
                    bg-[#eeeeee]
                    [transform-origin:left]
                    [transform:rotateY(90deg)]
                  "
                />

                {/* Inner frame */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-5
                    rounded-[1.4rem]
                    border
                    border-[#737A1A]/20
                  "
                />

                {/* Technical grid inside */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-5
                    overflow-hidden
                    rounded-[1.4rem]
                    opacity-60
                    [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
                    [background-size:28px_28px]
                  "
                />

                {/* Center ring */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-28
                    w-28
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#737A1A]/25
                    bg-[#737A1A]/[0.04]
                    [transform:translateZ(35px)]
                  "
                >
                  <div
                    className="
                      absolute
                      h-16
                      w-16
                      rounded-full
                      border
                      border-[#737A1A]/30
                    "
                  />

                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-[#737A1A]
                      shadow-[0_0_25px_rgba(115,122,26,0.65)]
                    "
                  />
                </div>

                {/* Labels */}
                <span className="absolute left-8 top-10 font-mono text-[7px] uppercase tracking-[0.2em] text-black/25">
                  Knowledge
                </span>

                <span className="absolute bottom-10 right-8 font-mono text-[7px] uppercase tracking-[0.18em] text-[#737A1A]/70">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(faqItems.length).padStart(2, "0")}
                </span>

                {/* Crosshair */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-5
                    h-8
                    w-px
                    -translate-x-1/2
                    bg-[#737A1A]/20
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    h-8
                    w-px
                    -translate-x-1/2
                    bg-[#737A1A]/20
                  "
                />
              </div>
            </div>

            {/* Floating active question */}
            <div
              className="
                absolute
                bottom-[8%]
                left-[2%]
                max-w-[220px]
                rounded-2xl
                border
                border-black/[0.08]
                bg-white/80
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/35">
                  Active question
                </span>
              </div>

              <p className="mt-2 line-clamp-2 text-[11px] font-medium leading-4 text-black/70">
                {activeItem?.question}
              </p>
            </div>

            {/* Floating system label */}
            <div
              className="
                absolute
                right-[1%]
                top-[9%]
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#737A1A]/20
                bg-[#737A1A]/[0.04]
                px-3
                py-2
                backdrop-blur-md
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#737A1A]/80">
                Information / Clear
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE ACTIVE INFO
        ======================================================== */}

        <div className="mt-8 rounded-2xl border border-black/[0.08] bg-black/[0.02] p-4 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#737A1A]">
              Active / {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <ArrowUpRight size={14} className="text-[#737A1A]" />
          </div>

          <p className="mt-3 text-[11px] leading-5 text-black/40">
            {activeItem?.question}
          </p>
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[8px] uppercase tracking-[0.22em] text-black/30">
              Information made simple
            </p>
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-black/20">
            FAQ / {String(faqItems.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
