"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
} from "lucide-react";
import { workProjects, type WorkService } from "@/data/work";

const serviceTabs: {
  id: WorkService;
  label: string;
  shortLabel: string;
}[] = [
  {
    id: "Web Development",
    label: "Web Development",
    shortLabel: "Web",
  },
  {
    id: "UI/UX Design",
    label: "UI/UX Design",
    shortLabel: "UI/UX",
  },
  {
    id: "Graphic Design",
    label: "Graphic Design",
    shortLabel: "Graphic",
  },
  {
    id: "Branding",
    label: "Branding",
    shortLabel: "Branding",
  },
  {
    id: "Video & Motion",
    label: "Video & Motion",
    shortLabel: "Motion",
  },
];

export default function ProjectsCarousel() {
  const [activeService, setActiveService] =
    useState<WorkService>("Web Development");

  const [currentSlide, setCurrentSlide] = useState(0);

  /*
   * ============================================================
   * FILTER PROJECTS BY SERVICE
   * ============================================================
   */

  const projects = useMemo(() => {
    return workProjects
      .filter(
        (project) =>
          project.published &&
          project.service === activeService
      )
      .sort((a, b) => a.order - b.order);
  }, [activeService]);

  /*
   * ============================================================
   * CREATE SLIDES
   *
   * Desktop:
   * 4 columns × 2 rows = 8 projects
   *
   * Every 8 projects = one horizontal slide
   * ============================================================
   */

  const slides = useMemo(() => {
    const result = [];

    for (let i = 0; i < projects.length; i += 8) {
      result.push(projects.slice(i, i + 8));
    }

    return result;
  }, [projects]);

  const totalSlides = slides.length;

  /*
   * ============================================================
   * CHANGE SERVICE
   * ============================================================
   */

  const changeService = (service: WorkService) => {
    setActiveService(service);

    /*
     * Every tab starts from first slide.
     */
    setCurrentSlide(0);
  };

  /*
   * ============================================================
   * SLIDER CONTROLS
   * ============================================================
   */

  const goNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
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
                  Selected work
                </p>
              </div>

              <p className="mt-3 max-w-[210px] text-[11px] leading-5 text-white/25">
                Explore our work across technology, design, branding and
                visual experiences.
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

            <div className="mt-6 flex items-end justify-between gap-5">
              <p className="max-w-xl text-sm leading-6 text-white/40 sm:text-[15px]">
                Explore selected projects across different creative and
                digital disciplines.
              </p>

              {/* Slider controls */}
              {totalSlides > 1 && (
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={currentSlide === 0}
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
                      disabled:cursor-not-allowed
                      disabled:opacity-20
                    "
                  >
                    <ArrowLeft size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={currentSlide === totalSlides - 1}
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
                      disabled:cursor-not-allowed
                      disabled:opacity-20
                    "
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =======================================================
            SERVICE TABS
        ======================================================== */}

        <div className="mt-10 border-y border-white/[0.08]">
          <div
            className="
              flex
              overflow-x-auto
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {serviceTabs.map((tab) => {
              const isActive = activeService === tab.id;

              const count = workProjects.filter(
                (project) =>
                  project.published &&
                  project.service === tab.id
              ).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => changeService(tab.id)}
                  className={`
                    group
                    relative
                    shrink-0
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-300
                    sm:px-7
                    lg:px-9
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/30 hover:text-white/70"
                    }
                  `}
                >
                  {/* Active line */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[2px]
                      bg-[#737A1A]
                      transition-transform
                      duration-300
                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-50"
                      }
                    `}
                  />

                  <div className="flex items-center gap-2.5">
                    <span
                      className={`
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        ${
                          isActive
                            ? "text-[#737A1A]"
                            : "text-white/30"
                        }
                      `}
                    >
                      {tab.shortLabel}
                    </span>

                    <span
                      className="
                        font-mono
                        text-[7px]
                        text-white/20
                      "
                    >
                      {String(count).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-white/50">
                    {tab.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            CURRENT SERVICE LABEL
        ======================================================== */}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#737A1A]" />

            <p className="text-[9px] uppercase tracking-[0.25em] text-[#737A1A]">
              {activeService}
            </p>
          </div>

          <span className="font-mono text-[8px] tracking-[0.18em] text-white/20">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* =======================================================
            SLIDER
        ======================================================== */}

        {projects.length > 0 ? (
          <div className="relative mt-5 overflow-hidden">
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                will-change-transform
              "
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="
                    grid
                    w-full
                    shrink-0
                    grid-cols-1
                    gap-x-4
                    gap-y-8
                    sm:grid-cols-2
                    lg:grid-cols-4
                    lg:gap-x-5
                    lg:gap-y-9
                  "
                >
                  {slide.map((project, index) => {
                    const globalIndex = slideIndex * 8 + index;

                    return (
                      <article
                        key={project.id}
                        className="group min-w-0"
                      >
                        {/* =================================================
                            IMAGE
                        ================================================== */}

                        <div
                          className="
                            relative
                            overflow-hidden
                            rounded-[1.25rem]
                            border border-white/[0.09]
                            bg-[#101010]
                            p-1
                            transition-all
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:border-[#737A1A]/35
                            group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                          "
                        >
                          <div
                            className="
                              relative
                              aspect-[4/3]
                              overflow-hidden
                              rounded-[1rem]
                              bg-[#111]
                            "
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="
                                (max-width: 640px) 92vw,
                                (max-width: 1024px) 46vw,
                                24vw
                              "
                              className="
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:scale-[1.06]
                              "
                            />

                            {/* Overlay */}
                            <div
                              className="
                                absolute inset-0
                                bg-black/5
                                transition-all
                                duration-500
                                group-hover:bg-black/30
                              "
                            />

                            {/* Olive glow */}
                            <div
                              aria-hidden="true"
                              className="
                                pointer-events-none
                                absolute
                                -right-16
                                -top-16
                                h-40
                                w-40
                                rounded-full
                                bg-[#737A1A]/0
                                blur-[65px]
                                transition-all
                                duration-700
                                group-hover:bg-[#737A1A]/25
                              "
                            />

                            {/* Metadata */}
                            <div
                              className="
                                absolute
                                left-4
                                right-4
                                top-4
                                flex
                                items-center
                                justify-between
                              "
                            >
                              <span
                                className="
                                  rounded-full
                                  border border-white/15
                                  bg-black/35
                                  px-2.5
                                  py-1
                                  font-mono
                                  text-[7px]
                                  tracking-[0.15em]
                                  text-white/70
                                  backdrop-blur-md
                                "
                              >
                                {String(globalIndex + 1).padStart(2, "0")}
                              </span>

                              <span
                                className="
                                  rounded-full
                                  border border-white/15
                                  bg-black/35
                                  px-2.5
                                  py-1
                                  text-[7px]
                                  uppercase
                                  tracking-[0.15em]
                                  text-white/60
                                  backdrop-blur-md
                                "
                              >
                                {project.year}
                              </span>
                            </div>

                            {/* Open button */}
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title}`}
                              className="
                                absolute
                                bottom-4
                                right-4
                                flex
                                h-10
                                w-10
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
                              <ArrowUpRight size={16} />
                            </a>

                            {/* Bottom line */}
                            <div
                              className="
                                absolute
                                bottom-0
                                left-0
                                right-0
                                h-px
                                bg-gradient-to-r
                                from-transparent
                                via-[#737A1A]/70
                                to-transparent
                                opacity-0
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                              "
                            />
                          </div>
                        </div>

                        {/* =================================================
                            PROJECT INFO
                        ================================================== */}

                        <div className="px-1 pt-4">
                          <div className="flex items-center justify-between gap-3">
                            <p
                              className="
                                truncate
                                text-[7px]
                                font-medium
                                uppercase
                                tracking-[0.22em]
                                text-[#737A1A]
                                sm:text-[8px]
                              "
                            >
                              {project.category}
                            </p>

                            <span
                              className="
                                shrink-0
                                font-mono
                                text-[7px]
                                tracking-[0.15em]
                                text-white/20
                              "
                            >
                              {project.year}
                            </span>
                          </div>

                          <div className="mt-1.5 flex items-center justify-between gap-3">
                            <h3
                              className="
                                truncate
                                text-[1.05rem]
                                font-medium
                                tracking-[-0.035em]
                                text-white
                                transition-colors
                                duration-300
                                group-hover:text-[#737A1A]
                                sm:text-[1.15rem]
                              "
                            >
                              {project.title}
                            </h3>

                            <span
                              className="
                                shrink-0
                                font-mono
                                text-[7px]
                                tracking-[0.12em]
                                text-white/15
                              "
                            >
                              {String(globalIndex + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center gap-2">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-white
                                px-3
                                py-1.5
                                text-[7px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-black
                                transition-all
                                duration-300
                                hover:bg-[#737A1A]
                                hover:text-white
                              "
                            >
                              Live
                              <ArrowUpRight size={10} />
                            </a>

                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-white/10
                                px-3
                                py-1.5
                                text-[7px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-white/45
                                transition-all
                                duration-300
                                hover:border-white/25
                                hover:text-white
                              "
                            >
                              <Github size={10} />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* =========================================================
             EMPTY STATE
          ========================================================== */

          <div
            className="
              mt-5
              flex
              min-h-[300px]
              flex-col
              items-center
              justify-center
              rounded-[1.5rem]
              border
              border-dashed
              border-white/10
              bg-white/[0.015]
              text-center
            "
          >
            <div
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#737A1A]/30
                bg-[#737A1A]/10
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#737A1A]">
              {activeService}
            </p>

            <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">
              Projects coming soon.
            </h3>

            <p className="mt-2 max-w-sm px-5 text-sm leading-6 text-white/30">
              We&apos;re preparing selected {activeService.toLowerCase()} work
              for this collection.
            </p>

            <span className="mt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
              IMX / WORK / SOON
            </span>
          </div>
        )}

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div
          className="
            mt-8
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
              {totalSlides > 1
                ? "Use arrows to explore projects"
                : "Selected projects"}
            </p>
          </div>

          <div className="flex items-center gap-5">
            {totalSlides > 0 && (
              <span className="font-mono text-[8px] tracking-[0.2em] text-white/20">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </span>
            )}

            <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
              {String(projects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}