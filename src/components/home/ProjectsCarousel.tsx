"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
} from "lucide-react";
import { workProjects } from "@/data/work";

export default function ProjectsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = workProjects
    .filter((project) => project.published)
    .sort((a, b) => a.order - b.order);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "right" ? 520 : -520,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#070707] text-white">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-56 top-[-100px]
          h-[560px] w-[560px]
          rounded-full
          bg-[#737A1A]/[0.12]
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
          bg-[#737A1A]/[0.06]
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
                  Selected projects
                </p>
              </div>

              <p className="mt-3 max-w-[210px] text-[11px] leading-5 text-white/25">
                A selection of digital products, identities and experiences
                built by IMX.
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
                Work that
                <span className="block text-[#737A1A]">
                  speaks for itself.
                </span>
              </h2>

              <span className="hidden shrink-0 pb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 lg:block">
                IMX / WORK / 001
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-5">
              <p className="max-w-xl text-sm leading-6 text-white/40 sm:text-[15px]">
                Explore selected projects across technology, design, branding
                and digital experiences.
              </p>

              {/* Controls */}
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous projects"
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
                  onClick={() => scroll("right")}
                  aria-label="Next projects"
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
            PROJECT CAROUSEL
        ======================================================== */}

        <div
          ref={carouselRef}
          className="
            mt-12
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:mt-14
          "
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="
                group
                w-[84vw]
                shrink-0
                snap-start
                sm:w-[500px]
                lg:w-[570px]
              "
            >
              {/* =================================================
                  PROJECT VISUAL
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.6rem]
                  border border-white/[0.09]
                  bg-[#101010]
                  p-1
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:border-[#737A1A]/30
                  group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                "
              >
                {/* Inner frame */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-[#111]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 500px, 570px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.045]
                    "
                  />

                  {/* Image darkening */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/10
                      transition-colors
                      duration-500
                      group-hover:bg-black/25
                    "
                  />

                  {/* Olive spotlight */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-52
                      w-52
                      rounded-full
                      bg-[#737A1A]/0
                      blur-[80px]
                      transition-all
                      duration-700
                      group-hover:bg-[#737A1A]/20
                    "
                  />

                  {/* =================================================
                      TOP METADATA
                  ================================================== */}

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span
                      className="
                        rounded-full
                        border border-white/15
                        bg-black/35
                        px-3
                        py-1.5
                        font-mono
                        text-[8px]
                        tracking-[0.16em]
                        text-white/70
                        backdrop-blur-md
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        rounded-full
                        border border-white/15
                        bg-black/35
                        px-3
                        py-1.5
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-white/60
                        backdrop-blur-md
                      "
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* =================================================
                      CENTER MARK
                  ================================================== */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                    "
                  >
                  </div>

                  {/* Open button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#737A1A]
                      text-white
                      opacity-0
                      shadow-[0_10px_30px_rgba(115,122,26,0.3)]
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      hover:scale-105
                    "
                  >
                    <ArrowUpRight size={18} />
                  </a>

                  {/* Bottom image line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* =================================================
                  PROJECT INFO
              ================================================== */}

              <div className="px-1 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[8px] font-medium uppercase tracking-[0.24em] text-[#737A1A] sm:text-[9px]">
                    {project.category}
                  </p>

                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/20">
                    {project.year}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-5">
                  <h3
                    className="
                      text-[1.55rem]
                      font-medium
                      tracking-[-0.045em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#737A1A]
                      sm:text-[1.8rem]
                    "
                  >
                    {project.title}
                  </h3>

                  <span className="font-mono text-[7px] tracking-[0.15em] text-white/15">
                    0{index + 1}
                  </span>
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-4
                      py-2
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-black
                      transition-all
                      duration-300
                      hover:bg-[#737A1A]
                      hover:text-white
                    "
                  >
                    Live
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-white/45
                      transition-all
                      duration-300
                      hover:border-white/25
                      hover:text-white
                    "
                  >
                    <Github size={11} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
              Scroll to explore
            </p>
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
      </div>
    </section>
  );
}