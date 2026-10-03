"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  const previous = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials.length) return null;

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-52 top-[-120px]
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
          -right-60 bottom-[-220px]
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
          opacity-30
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

                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
                  Client perspective
                </p>
              </div>

              <p className="mt-3 max-w-[220px] text-[11px] leading-5 text-white/25">
                Real perspectives from the people and teams we have built with.
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
                Built together.
                <span className="block text-[#737A1A]">
                  Remembered longer.
                </span>
              </h2>

              <span className="hidden shrink-0 pb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 lg:block">
                IMX / TRUST / 001
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-5">
              <p className="max-w-xl text-sm leading-6 text-white/40 sm:text-[15px]">
                Every project is a collaboration. The result is measured not
                only by what we build, but by how it feels to work together.
              </p>

              {/* Controls */}
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/40
                    transition-all duration-300
                    hover:border-[#737A1A]
                    hover:bg-[#737A1A]
                    hover:text-white
                  "
                >
                  <ArrowLeft size={15} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/40
                    transition-all duration-300
                    hover:border-[#737A1A]
                    hover:bg-[#737A1A]
                    hover:text-white
                  "
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            TESTIMONIAL EXPERIENCE
        ======================================================== */}

        <div className="mt-12 lg:mt-14">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            {/* =================================================
                3D CLIENT CORE
            ================================================== */}

            <div className="relative flex min-h-[330px] items-center justify-center sm:min-h-[380px] lg:min-h-[430px]">
              {/* Large faint number */}
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
                  text-[10rem]
                  font-semibold
                  leading-none
                  tracking-[-0.12em]
                  text-white/[0.025]
                  sm:text-[13rem]
                "
              >
                {String(active + 1).padStart(2, "0")}
              </span>

              {/* Orbit */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  h-[260px]
                  w-[260px]
                  rounded-full
                  border
                  border-white/[0.07]
                  [transform:rotateX(68deg)rotateZ(-18deg)]
                  sm:h-[310px]
                  sm:w-[310px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  border
                  border-[#737A1A]/20
                  [transform:rotateY(64deg)rotateZ(22deg)]
                  sm:h-[270px]
                  sm:w-[270px]
                "
              />

              {/* Orbit points */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-[calc(50%+125px)]
                  top-[calc(50%-48px)]
                  h-2
                  w-2
                  rounded-full
                  bg-[#737A1A]
                  shadow-[0_0_18px_rgba(115,122,26,0.75)]
                "
              />

              <span
                aria-hidden="true"
                className="
                  absolute
                  left-[calc(50%-142px)]
                  top-[calc(50%+38px)]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-white/40
                "
              />

              {/* 3D stage */}
              <div
                className="
                  relative
                  h-[210px]
                  w-[210px]
                  [perspective:900px]
                  sm:h-[250px]
                  sm:w-[250px]
                "
              >
                {/* Back depth */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-[18px]
                    rounded-[2rem]
                    border
                    border-[#737A1A]/10
                    bg-[#737A1A]/[0.025]
                    [transform:translateZ(-55px)rotateX(8deg)rotateY(-8deg)]
                    blur-[1px]
                  "
                />

                {/* Main 3D object */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[2rem]
                    border
                    border-white/[0.12]
                    bg-[#0b0b0b]
                    shadow-[0_35px_90px_rgba(0,0,0,0.55)]
                    [transform-style:preserve-3d]
                    [transform:rotateX(7deg)rotateY(-10deg)]
                  "
                >
                  {/* Top plane */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-4
                      right-4
                      top-[-15px]
                      h-4
                      rounded-t-xl
                      border
                      border-white/[0.08]
                      bg-[#171717]
                      [transform-origin:bottom]
                      [transform:rotateX(90deg)]
                    "
                  />

                  {/* Right plane */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-4
                      right-[-15px]
                      top-4
                      w-4
                      rounded-r-xl
                      border
                      border-white/[0.07]
                      bg-[#141414]
                      [transform-origin:left]
                      [transform:rotateY(90deg)]
                    "
                  />

                  {/* Inner border */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-4
                      rounded-[1.4rem]
                      border
                      border-[#737A1A]/20
                    "
                  />

                  {/* Center core */}
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
                      bg-[#737A1A]/[0.05]
                      [transform:translateZ(35px)]
                      sm:h-28
                      sm:w-28
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#737A1A]/30
                        bg-[#737A1A]/10
                        shadow-[0_0_45px_rgba(115,122,26,0.18)]
                      "
                    >
                      <Quote
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#737A1A]"
                      />
                    </div>
                  </div>

                  {/* Technical lines */}
                  <div className="absolute left-7 right-7 top-8 h-px bg-white/[0.07]" />
                  <div className="absolute bottom-8 left-7 right-7 h-px bg-white/[0.07]" />

                  <div className="absolute bottom-8 left-7 top-8 w-px bg-white/[0.05]" />
                  <div className="absolute bottom-8 right-7 top-8 w-px bg-white/[0.05]" />

                  {/* Core label */}
                  <span className="absolute left-8 top-12 font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                    Client signal
                  </span>

                  <span className="absolute bottom-12 right-8 font-mono text-[7px] uppercase tracking-[0.2em] text-[#737A1A]/70">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Floating label */}
              <div
                className="
                  absolute
                  left-[8%]
                  top-[15%]
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-3
                  py-2
                  backdrop-blur-md
                  sm:left-[10%]
                "
              >
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
                  Perspective / Real
                </span>
              </div>

              <div
                className="
                  absolute
                  bottom-[13%]
                  right-[4%]
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
                  Trust / Signal
                </span>
              </div>
            </div>

            {/* =================================================
                ACTIVE TESTIMONIAL
            ================================================== */}

            <div className="relative">
              {/* Quote card */}
              <article
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-white/[0.09]
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  sm:p-9
                  lg:p-12
                "
              >
                {/* Olive glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-[#737A1A]/[0.08]
                    blur-[90px]
                  "
                />

                {/* Top line */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#737A1A]">
                    {current.number}
                  </span>

                  <Quote
                    size={24}
                    strokeWidth={1}
                    className="text-[#737A1A]/50"
                  />
                </div>

                {/* Quote */}
                <blockquote
                  className="
                    relative
                    mt-12
                    max-w-4xl
                    text-[clamp(1.55rem,2.8vw,2.7rem)]
                    font-medium
                    leading-[1.18]
                    tracking-[-0.045em]
                    text-white
                  "
                >
                  “{current.quote}”
                </blockquote>

                {/* Client */}
                <div className="relative mt-12 flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {current.name}
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      {current.role} · {current.company}
                    </p>
                  </div>

                  <div className="hidden text-right sm:block">
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                      Client perspective
                    </p>

                    <p className="mt-1 font-mono text-[8px] tracking-[0.18em] text-[#737A1A]/60">
                      IMX / VERIFIED
                    </p>
                  </div>
                </div>

                {/* Bottom progress */}
                <div className="relative mt-7 flex gap-1.5">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`View testimonial ${index + 1}`}
                      className="group/dot h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]"
                    >
                      <span
                        className={`
                          block h-full rounded-full
                          transition-all duration-500
                          ${
                            index === active
                              ? "bg-[#737A1A]"
                              : "bg-transparent group-hover/dot:bg-white/20"
                          }
                        `}
                      />
                    </button>
                  ))}
                </div>
              </article>

              {/* Mini previous / next indicators */}
              <div className="mt-5 flex items-center justify-between px-1">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Client feedback / {String(active + 1).padStart(2, "0")}
                </p>

                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                  {String(testimonials.length).padStart(2, "0")} perspectives
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
              Digital experiences made with intent
            </p>
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
            TRUST / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
