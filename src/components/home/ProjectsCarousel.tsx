"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import {
  workProjects,
  type WorkService,
  type WorkProject,
  type ProjectType,
} from "@/data/work";

const serviceTabs: {
  id: WorkService;
  label: string;
  shortLabel: string;
}[] = [
  { id: "Web Development", label: "Web Development", shortLabel: "Web" },
  { id: "UI/UX Design", label: "UI/UX Design", shortLabel: "UI/UX" },
  { id: "Graphic Design", label: "Graphic Design", shortLabel: "Graphic" },
  { id: "Branding", label: "Branding", shortLabel: "Branding" },
  { id: "Video & Motion", label: "Video & Motion", shortLabel: "Motion" },
];

const PROJECTS_PER_SLIDE = 8;

function ProjectCarousel({
  projects,
  carouselKey,
}: {
  projects: WorkProject[];
  carouselKey: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => {
    const result: WorkProject[][] = [];
    for (let i = 0; i < projects.length; i += PROJECTS_PER_SLIDE) {
      result.push(projects.slice(i, i + PROJECTS_PER_SLIDE));
    }
    return result;
  }, [projects]);

  const totalSlides = slides.length;

  if (projects.length === 0) return null;

  const goPrev = () => setCurrentSlide((prev) => Math.max(0, prev - 1));
  const goNext = () =>
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));

  return (
    <div className="relative mt-5" data-carousel={carouselKey}>
      {totalSlides > 1 && (
        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentSlide === 0}
            aria-label="Previous projects"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next projects"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      )}

      <div className="overflow-hidden">
        <div
          className="flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={`${carouselKey}-${slideIndex}`}
              className="grid w-full shrink-0 grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-9"
            >
              {slide.map((project, index) => {
                const globalIndex = slideIndex * PROJECTS_PER_SLIDE + index;

                return (
                  <article key={project.id} className="group min-w-0">
                    <div className="relative overflow-hidden rounded-[1.25rem] border border-white/[0.09] bg-[#101010] p-1 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#737A1A]/35 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#111]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/30" />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#737A1A]/0 blur-[65px] transition-all duration-700 group-hover:bg-[#737A1A]/25"
                        />

                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                          <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[7px] tracking-[0.15em] text-white/70 backdrop-blur-md">
                            {String(globalIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[7px] uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
                            {project.year}
                          </span>
                        </div>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#737A1A] text-white opacity-0 shadow-[0_10px_30px_rgba(115,122,26,0.3)] transition-all duration-300 group-hover:opacity-100 hover:scale-105"
                        >
                          <ArrowUpRight size={16} />
                        </a>

                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>

                    <div className="px-1 pt-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-[7px] font-medium uppercase tracking-[0.22em] text-[#737A1A] sm:text-[8px]">
                          {project.category}
                        </p>
                        <span className="shrink-0 font-mono text-[7px] tracking-[0.15em] text-white/20">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="mt-1.5 truncate text-[1.05rem] font-medium tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#737A1A] sm:text-[1.15rem]">
                        {project.title}
                      </h3>

                      <div className="mt-3 flex items-center gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-[#737A1A] hover:text-white"
                        >
                          Live <ArrowUpRight size={10} />
                        </a>
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.12em] text-white/45 transition-all duration-300 hover:border-white/25 hover:text-white"
                          >
                            <Github size={10} /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
          {totalSlides > 1
            ? "Use arrows to explore projects"
            : "Selected projects"}
        </p>
        <span className="font-mono text-[8px] tracking-[0.2em] text-white/20">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function ProjectGroup({
  title,
  eyebrow,
  description,
  projects,
  projectType,
}: {
  title: string;
  eyebrow: string;
  description: string;
  projects: WorkProject[];
  projectType: ProjectType;
}) {
  return (
    <section className="mt-12 first:mt-0" aria-label={title}>
      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#737A1A]">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.05em] text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 max-w-xl text-xs leading-6 text-white/40 sm:text-sm">
            {description}
          </p>
        </div>
        <span className="w-fit shrink-0 rounded-full border border-white/10 px-3 py-2 font-mono text-[8px] tracking-[0.16em] text-white/45">
          {String(projects.length).padStart(2, "0")} PROJECT
          {projects.length === 1 ? "" : "S"}
        </span>
      </div>

      {projects.length > 0 ? (
        <ProjectCarousel projects={projects} carouselKey={projectType} />
      ) : (
        <div className="mt-5 flex min-h-[190px] flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-white/10 bg-white/[0.015] px-6 text-center">
          <span className="mb-4 h-2 w-2 rounded-full bg-[#737A1A]" />
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#737A1A]">
            {title}
          </p>
          <h4 className="mt-2 text-lg font-medium tracking-[-0.03em] text-white">
            Projects coming soon.
          </h4>
          <p className="mt-2 max-w-sm text-xs leading-6 text-white/35">
            We&apos;re preparing selected work for this collection.
          </p>
        </div>
      )}
    </section>
  );
}

export default function ProjectsCarousel() {
  const [activeService, setActiveService] =
    useState<WorkService>("Web Development");

  const projects = useMemo(
    () =>
      workProjects
        .filter(
          (project) => project.published && project.service === activeService,
        )
        .sort((a, b) => a.order - b.order),
    [activeService],
  );

  const clientProjects = projects.filter(
    (project) => project.projectType === "Client Project",
  );

  const independentProjects = projects.filter(
    (project) => project.projectType === "Independent Project",
  );

  return (
    <section className="relative overflow-hidden bg-[#070707] text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-[-100px] h-[560px] w-[560px] rounded-full bg-[#737A1A]/[0.12] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 bottom-[-220px] h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.06] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr] lg:gap-14">
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
                Explore our work across technology, design, branding and visual
                experiences.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-6">
              <h2 className="max-w-5xl text-[clamp(2.7rem,5.2vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                Work that
                <span className="block text-[#737A1A]">speaks for itself.</span>
              </h2>
              <span className="hidden shrink-0 pb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 lg:block">
                IMX / WORK / 001
              </span>
            </div>
            <div className="mt-6">
              <p className="max-w-xl text-sm leading-6 text-white/40 sm:text-[15px]">
                Explore client work and independent projects across different
                creative and digital disciplines.
              </p>
            </div>
          </div>
        </div>

        {/* Service tabs */}
        <div className="mt-10 border-y border-white/[0.08]">
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {serviceTabs.map((tab) => {
              const isActive = activeService === tab.id;
              const count = workProjects.filter(
                (project) => project.published && project.service === tab.id,
              ).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveService(tab.id)}
                  aria-pressed={isActive}
                  className={`group relative shrink-0 px-5 py-4 text-left transition-all duration-300 sm:px-7 lg:px-9 ${
                    isActive
                      ? "text-white"
                      : "text-white/30 hover:text-white/70"
                  }`}
                >
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#737A1A] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-[9px] font-medium uppercase tracking-[0.18em] ${
                        isActive ? "text-[#737A1A]" : "text-white/30"
                      }`}
                    >
                      {tab.shortLabel}
                    </span>
                    <span className="font-mono text-[7px] text-white/20">
                      {String(count).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/50">{tab.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active service summary */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#737A1A]" />
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#737A1A]">
              {activeService}
            </p>
          </div>
          <span className="font-mono text-[8px] tracking-[0.18em] text-white/20">
            {String(projects.length).padStart(2, "0")} TOTAL PROJECTS
          </span>
        </div>

        {/* Separate project collections */}
        {projects.length > 0 ? (
          <div className="mt-8">
            <ProjectGroup
              key={`${activeService}-client`}
              title="Client Projects"
              eyebrow="01 / CLIENT WORK"
              description="Digital experiences and websites delivered for clients and businesses."
              projects={clientProjects}
              projectType="Client Project"
            />
            <ProjectGroup
              key={`${activeService}-independent`}
              title="Independent Projects"
              eyebrow="02 / SELF-INITIATED"
              description="Experiments, concepts and self-initiated products built to explore ideas and technology."
              projects={independentProjects}
              projectType="Independent Project"
            />
          </div>
        ) : (
          <div className="mt-5 flex min-h-[300px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.015] text-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#737A1A]/30 bg-[#737A1A]/10">
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

        {/* Footer */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />
            <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
              Client work & independent projects
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
