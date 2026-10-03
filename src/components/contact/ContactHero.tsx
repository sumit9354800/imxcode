"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND SYSTEM
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical construction lines */}

        <div className="absolute inset-y-0 left-[12%] w-px bg-white/[0.08]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.08]" />
        <div className="absolute inset-y-0 right-[12%] w-px bg-white/[0.08]" />

        {/* Horizontal construction lines */}

        <div className="absolute left-0 right-0 top-[28%] h-px bg-white/[0.06]" />
        <div className="absolute left-0 right-0 top-[72%] h-px bg-white/[0.06]" />

        {/* Ambient glows */}

        <div className="absolute right-[-180px] top-[-140px] h-[600px] w-[600px] rounded-full bg-[#737A1A]/20 blur-[150px]" />

        <div className="absolute bottom-[-220px] left-[30%] h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.08] blur-[150px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-6 pb-12 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-12 lg:pb-16 xl:px-16">

        {/* =================================================
            TOP META
        ================================================== */}

        <div className="relative z-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
              Contact IMX
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/25 sm:block">
            IMX / Let&apos;s Talk
          </span>
        </div>

        {/* =================================================
            HERO GRID
        ================================================== */}

        <div className="grid min-h-[650px] gap-8 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-4 lg:py-16">

          {/* =================================================
              LEFT COPY
          ================================================== */}

          <div className="relative z-20 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-6 items-center rounded-full border border-[#737A1A]/40 bg-[#737A1A]/10 px-3 text-[8px] font-medium uppercase tracking-[0.2em] text-[#9da32c]">
                Open for new projects
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                01 / Contact
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(3.1rem,6.8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-[#737A1A]">
                worth building.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Have a website, application, brand or digital idea in mind?
              Tell us what you&apos;re working on. We&apos;ll help you figure
              out the right way forward.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#project-form"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-[#737A1A]
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#858c20]
                  hover:shadow-[0_12px_40px_rgba(115,122,26,0.25)]
                "
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>

              <a
                href="#contact-details"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-2
                  py-3
                  text-sm
                  font-medium
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Other ways to reach us

                <ArrowDown
                  size={15}
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>

          {/* =================================================
              4D CONTACT MODEL
          ================================================== */}

          <div className="relative hidden h-[560px] lg:block">

            {/* Perspective stage */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                [perspective:1400px]
              "
            >

              {/* =================================================
                  OUTER 4D FIELD
              ================================================== */}

              <div
                className="
                  contact-field
                  relative
                  h-[420px]
                  w-[420px]
                  [transform-style:preserve-3d]
                "
              >

                {/* Outer orbit */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[390px]
                    w-[390px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#737A1A]/20
                    [transform:rotateX(68deg)_rotateZ(-15deg)]
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[330px]
                    w-[330px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-white/[0.08]
                    [transform:rotateY(68deg)_rotateZ(25deg)]
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[270px]
                    w-[270px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#737A1A]/25
                    [transform:rotateX(55deg)_rotateY(25deg)]
                  "
                />

                {/* =================================================
                    4D HYPER-CUBE WIREFRAME
                ================================================== */}

                <div
                  className="
                    hypercube
                    absolute
                    left-1/2
                    top-1/2
                    h-[210px]
                    w-[210px]
                    -translate-x-1/2
                    -translate-y-1/2
                    [transform-style:preserve-3d]
                  "
                >
                  {/* Front square */}

                  <div
                    className="
                      absolute
                      inset-0
                      border
                      border-[#737A1A]/70
                      [transform:translateZ(105px)]
                    "
                  />

                  {/* Back square */}

                  <div
                    className="
                      absolute
                      inset-0
                      border
                      border-[#737A1A]/30
                      [transform:translateZ(-105px)]
                    "
                  />

                  {/* Left */}

                  <div
                    className="
                      absolute
                      inset-0
                      border
                      border-white/10
                      [transform:rotateY(90deg)_translateZ(105px)]
                    "
                  />

                  {/* Right */}

                  <div
                    className="
                      absolute
                      inset-0
                      border
                      border-white/10
                      [transform:rotateY(-90deg)_translateZ(105px)]
                    "
                  />

                  {/* Top */}

                  <div
                    className="
                      absolute
                      inset-0
                      border
                      border-white/10
                      [transform:rotateX(90deg)_translateZ(105px)]
                    "
                  />

                  {/* Bottom */}

                  <div
                    className="
                      absolute
                      inset-0
                      border
                      border-white/10
                      [transform:rotateX(-90deg)_translateZ(105px)]
                    "
                  />

                  {/* Inner hypercube */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[105px]
                      w-[105px]
                      -translate-x-1/2
                      -translate-y-1/2
                      border
                      border-[#737A1A]/60
                      [transform:translateZ(30px)]
                    "
                  />

                  {/* 4D diagonal connections */}

                  <span className="absolute left-0 top-0 h-px w-[105px] origin-left rotate-[27deg] bg-[#737A1A]/35" />

                  <span className="absolute right-0 top-0 h-px w-[105px] origin-right -rotate-[27deg] bg-[#737A1A]/35" />

                  <span className="absolute bottom-0 left-0 h-px w-[105px] origin-left -rotate-[27deg] bg-[#737A1A]/35" />

                  <span className="absolute bottom-0 right-0 h-px w-[105px] origin-right rotate-[27deg] bg-[#737A1A]/35" />
                </div>

                {/* =================================================
                    CENTRAL CONTACT CORE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    flex
                    h-[118px]
                    w-[118px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#737A1A]/50
                    bg-black/80
                    shadow-[0_0_80px_rgba(115,122,26,0.22)]
                    backdrop-blur-md
                  "
                >
                  {/* Core rings */}

                  <div className="absolute inset-3 rounded-full border border-[#737A1A]/20" />

                  <div className="absolute inset-6 rounded-full border border-white/[0.08]" />

                  {/* Core */}

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#737A1A] shadow-[0_0_35px_rgba(115,122,26,0.65)]">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* =================================================
                    SIGNAL NODES
                ================================================== */}

                <div className="contact-node node-one absolute left-[7%] top-[28%]">
                  <span />
                </div>

                <div className="contact-node node-two absolute right-[8%] top-[19%]">
                  <span />
                </div>

                <div className="contact-node node-three absolute bottom-[18%] left-[17%]">
                  <span />
                </div>

                <div className="contact-node node-four absolute bottom-[12%] right-[17%]">
                  <span />
                </div>

                {/* =================================================
                    SIGNAL BEAMS
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[9%]
                    top-[30%]
                    h-px
                    w-[125px]
                    origin-left
                    rotate-[12deg]
                    bg-gradient-to-r
                    from-[#737A1A]
                    to-transparent
                    opacity-40
                  "
                />

                <div
                  className="
                    absolute
                    right-[8%]
                    top-[22%]
                    h-px
                    w-[130px]
                    origin-right
                    -rotate-[20deg]
                    bg-gradient-to-l
                    from-[#737A1A]
                    to-transparent
                    opacity-40
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[19%]
                    left-[18%]
                    h-px
                    w-[125px]
                    origin-left
                    -rotate-[17deg]
                    bg-gradient-to-r
                    from-[#737A1A]
                    to-transparent
                    opacity-35
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[14%]
                    right-[18%]
                    h-px
                    w-[125px]
                    origin-right
                    rotate-[17deg]
                    bg-gradient-to-l
                    from-[#737A1A]
                    to-transparent
                    opacity-35
                  "
                />

                {/* =================================================
                    FLOATING LABELS
                ================================================== */}

                <div className="absolute left-[0%] top-[20%] rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 backdrop-blur-md">
                  <span className="text-[7px] uppercase tracking-[0.22em] text-white/40">
                    Your idea
                  </span>
                </div>

                <div className="absolute right-[-2%] top-[10%] rounded-full border border-[#737A1A]/25 bg-[#737A1A]/[0.06] px-3 py-2 backdrop-blur-md">
                  <span className="text-[7px] uppercase tracking-[0.22em] text-[#9da32c]">
                    Brief
                  </span>
                </div>

                <div className="absolute bottom-[18%] left-[-4%] rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 backdrop-blur-md">
                  <span className="text-[7px] uppercase tracking-[0.22em] text-white/40">
                    Connect
                  </span>
                </div>

                <div className="absolute bottom-[8%] right-[0%] rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 backdrop-blur-md">
                  <span className="text-[7px] uppercase tracking-[0.22em] text-white/40">
                    Build
                  </span>
                </div>

                {/* =================================================
                    TECHNICAL DATA
                ================================================== */}

                <div className="absolute left-[14%] top-[48%]">
                  <p className="text-[7px] uppercase tracking-[0.22em] text-white/25">
                    Connection
                  </p>

                  <p className="mt-1 text-[10px] font-medium tracking-[0.12em] text-white/55">
                    READY
                  </p>
                </div>

                <div className="absolute right-[12%] bottom-[37%] text-right">
                  <p className="text-[7px] uppercase tracking-[0.22em] text-white/25">
                    Signal
                  </p>

                  <p className="mt-1 text-[10px] font-medium tracking-[0.12em] text-[#737A1A]">
                    ACTIVE
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                MODEL CAPTION
            ================================================== */}

            <div className="absolute bottom-2 left-1/2 w-full max-w-[420px] -translate-x-1/2">
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Contact system
                  </p>

                  <p className="mt-1 text-[10px] tracking-[0.12em] text-white/50">
                    Idea → Connection → Build
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#737A1A]" />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE 4D MODEL
          ================================================== */}

          <div className="relative flex h-[300px] items-center justify-center lg:hidden">
            <div className="relative h-[250px] w-[250px] [perspective:900px]">

              {/* Orbit */}

              <div className="absolute inset-[15px] rounded-full border border-[#737A1A]/20 [transform:rotateX(65deg)_rotateZ(-15deg)]" />

              <div className="absolute inset-[35px] rounded-full border border-white/[0.08] [transform:rotateY(65deg)_rotateZ(20deg)]" />

              {/* Cube */}

              <div className="absolute left-1/2 top-1/2 h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-[contactSpin_14s_linear_infinite]">

                <div className="absolute inset-0 border border-[#737A1A]/60 [transform:translateZ(62px)]" />

                <div className="absolute inset-0 border border-[#737A1A]/25 [transform:translateZ(-62px)]" />

                <div className="absolute inset-0 border border-white/10 [transform:rotateY(90deg)_translateZ(62px)]" />

                <div className="absolute inset-0 border border-white/10 [transform:rotateY(-90deg)_translateZ(62px)]" />

                <div className="absolute inset-0 border border-white/10 [transform:rotateX(90deg)_translateZ(62px)]" />

                <div className="absolute inset-0 border border-white/10 [transform:rotateX(-90deg)_translateZ(62px)]" />
              </div>

              {/* Core */}

              <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#737A1A]/40 bg-black/80 shadow-[0_0_45px_rgba(115,122,26,0.35)] backdrop-blur-md">
                <div className="h-5 w-5 rounded-full bg-[#737A1A] shadow-[0_0_25px_rgba(115,122,26,0.7)]" />
              </div>

              {/* Mobile labels */}

              <div className="absolute left-[-10px] top-[35px] rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5">
                <span className="text-[6px] uppercase tracking-[0.2em] text-white/40">
                  Brief
                </span>
              </div>

              <div className="absolute right-[-5px] bottom-[35px] rounded-full border border-[#737A1A]/25 bg-[#737A1A]/[0.06] px-2.5 py-1.5">
                <span className="text-[6px] uppercase tracking-[0.2em] text-[#9da32c]">
                  Build
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM META
        ================================================== */}

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            Technology · Design · Creative
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            New projects · Collaborations · Enquiries
          </span>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

    </section>
  );
}