
"use client";

import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { contactCTA } from "@/data/contact";

export default function ContactCTASection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[620px] w-[620px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#737A1A]/[0.11]
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-56 top-[-180px]
          h-[460px] w-[460px]
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
          opacity-35
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
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
            TOP META
        ======================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
              {contactCTA.eyebrow}
            </p>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 sm:block">
            IMX / CONTACT / 001
          </span>
        </div>

        {/* =======================================================
            MAIN SYSTEM
        ======================================================== */}

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* =================================================
              COPY
          ================================================== */}

          <div>
            <h2
              className="
                max-w-4xl
                text-[clamp(3rem,6.3vw,7rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.075em]
                text-white
              "
            >
              {contactCTA.title}
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-white/40
                sm:text-lg
                sm:leading-8
              "
            >
              {contactCTA.description}
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Primary */}
              <Link
                href={contactCTA.primaryHref}
                className="
                  group
                  inline-flex
                  h-12
                  w-fit
                  items-center
                  gap-4
                  rounded-full
                  bg-[#737A1A]
                  px-6
                  text-sm
                  font-medium
                  !text-white
                  shadow-[0_15px_40px_rgba(115,122,26,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  hover:!text-black
                "
              >
                <span className="!text-white transition-colors duration-300 group-hover:!text-black">
                  {contactCTA.primaryLabel}
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    !text-white
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:!text-black
                  "
                />
              </Link>

              {/* Secondary */}
              <Link
                href={contactCTA.secondaryHref}
                className="
                  group
                  inline-flex
                  h-12
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  px-6
                  text-sm
                  font-medium
                  !text-white
                  transition-all
                  duration-300
                  hover:border-[#737A1A]
                  hover:bg-[#737A1A]
                "
              >
                <span className="!text-white">
                  {contactCTA.secondaryLabel}
                </span>

                <MoveUpRight
                  size={14}
                  className="
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:text-white
                  "
                />
              </Link>
            </div>
          </div>

          {/* =================================================
              3D PROJECT LAUNCH CORE
          ================================================== */}

          <div className="relative flex min-h-[350px] items-center justify-center sm:min-h-[420px]">
            {/* Faint giant number */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                select-none
                font-mono
                text-[11rem]
                font-semibold
                leading-none
                tracking-[-0.15em]
                text-white/[0.025]
                sm:text-[14rem]
              "
            >
              01
            </span>

            {/* Outer orbit */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-white/[0.07]
                [transform:rotateX(68deg)rotateZ(-18deg)]
                sm:h-[340px]
                sm:w-[340px]
              "
            />

            {/* Olive orbit */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[235px]
                w-[235px]
                rounded-full
                border
                border-[#737A1A]/20
                [transform:rotateY(62deg)rotateZ(22deg)]
                sm:h-[285px]
                sm:w-[285px]
              "
            />

            {/* Dashed orbit */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[190px]
                w-[190px]
                rounded-full
                border
                border-dashed
                border-white/[0.08]
                [transform:rotateX(62deg)rotateY(15deg)]
                sm:h-[230px]
                sm:w-[230px]
              "
            />

            {/* Orbit points */}
            <span
              aria-hidden="true"
              className="
                absolute
                left-[calc(50%+135px)]
                top-[calc(50%-55px)]
                h-2
                w-2
                rounded-full
                bg-[#737A1A]
                shadow-[0_0_20px_rgba(115,122,26,0.8)]
                sm:left-[calc(50%+165px)]
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                left-[calc(50%-140px)]
                top-[calc(50%+65px)]
                h-1.5
                w-1.5
                rounded-full
                bg-white/40
                sm:left-[calc(50%-165px)]
              "
            />

            {/* =================================================
                3D OBJECT
            ================================================== */}

            <div
              className="
                relative
                h-[190px]
                w-[190px]
                [perspective:1000px]
                sm:h-[230px]
                sm:w-[230px]
              "
            >
              {/* Back depth */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-[20px]
                  rounded-[2rem]
                  border
                  border-[#737A1A]/10
                  bg-[#737A1A]/[0.025]
                  shadow-[0_30px_80px_rgba(0,0,0,0.4)]
                  [transform:translateZ(-70px)rotateX(8deg)rotateY(-8deg)]
                "
              />

              {/* Middle depth */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-[10px]
                  rounded-[2rem]
                  border
                  border-white/[0.07]
                  bg-[#111]
                  [transform:translateZ(-35px)rotateX(8deg)rotateY(-8deg)]
                "
              />

              {/* Main cube */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[2rem]
                  border
                  border-white/[0.12]
                  bg-[#0b0b0b]
                  shadow-[0_40px_100px_rgba(0,0,0,0.65)]
                  [transform-style:preserve-3d]
                  [transform:rotateX(8deg)rotateY(-12deg)]
                "
              >
                {/* Top face */}
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
                    border-white/[0.08]
                    bg-[#181818]
                    [transform-origin:bottom]
                    [transform:rotateX(90deg)]
                  "
                />

                {/* Right face */}
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
                    border-white/[0.07]
                    bg-[#151515]
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

                {/* Technical grid */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-5
                    overflow-hidden
                    rounded-[1.4rem]
                    opacity-70
                    [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
                    [background-size:26px_26px]
                  "
                />

                {/* Center launch core */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-24
                    w-24
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#737A1A]/30
                    bg-[#737A1A]/[0.045]
                    shadow-[0_0_60px_rgba(115,122,26,0.12)]
                    [transform:translateZ(40px)]
                    sm:h-28
                    sm:w-28
                  "
                >
                  <div
                    className="
                      absolute
                      h-16
                      w-16
                      rounded-full
                      border
                      border-[#737A1A]/25
                    "
                  />

                  <div
                    className="
                      absolute
                      h-10
                      w-10
                      rounded-full
                      border
                      border-white/[0.08]
                    "
                  />

                  <div
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#737A1A]
                      shadow-[0_0_25px_rgba(115,122,26,0.85)]
                    "
                  />
                </div>

                {/* Technical labels */}
                <span className="absolute left-8 top-9 font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                  Project
                </span>

                <span className="absolute right-8 top-9 font-mono text-[7px] uppercase tracking-[0.2em] text-[#737A1A]/70">
                  Ready
                </span>

                <span className="absolute bottom-9 left-8 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                  IMX / 001
                </span>

                <span className="absolute bottom-9 right-8 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                  Launch
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

            {/* =================================================
                FLOATING LABELS
            ================================================== */}

            <div
              className="
                absolute
                left-[2%]
                top-[9%]
                rounded-full
                border
                border-white/10
                bg-white/[0.035]
                px-3
                py-2
                backdrop-blur-md
              "
            >
              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
                Strategy / Defined
              </span>
            </div>

            <div
              className="
                absolute
                bottom-[8%]
                right-[1%]
                rounded-full
                border
                border-[#737A1A]/20
                bg-[#737A1A]/[0.05]
                px-3
                py-2
                backdrop-blur-md
              "
            >
              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#737A1A]/80">
                Build / Ready
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM META
        ======================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
              IMX Digital Studio
            </p>
          </div>

          <p className="text-[8px] uppercase tracking-[0.22em] text-white/20">
            Technology · Design · Creative · Growth
          </p>
        </div>
      </div>
    </section>
  );
}
