"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { workProjects, type WorkProject, type WorkService } from "@/data/work";

const serviceTabs: { id: WorkService; label: string; shortLabel: string }[] = [
  { id: "Web Development", label: "Web Development", shortLabel: "Web" },
  { id: "UI/UX Design", label: "UI/UX Design", shortLabel: "UI/UX" },
  { id: "Graphic Design", label: "Graphic Design", shortLabel: "Graphic" },
  { id: "Branding", label: "Branding", shortLabel: "Branding" },
  { id: "Video & Motion", label: "Video & Motion", shortLabel: "Motion" },
];

type ProjectGroupProps = {
  title: string;
  eyebrow: string;
  description: string;
  projects: WorkProject[];
  number: string;
};

function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#f5f5f3] transition-all duration-500 hover:-translate-y-1 hover:border-[#737A1A]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} website`}
        className="block min-w-0"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e9e5]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition-colors duration-500 group-hover:bg-black/[0.06]" />
          {/* <span className="absolute left-4 top-4 flex h-8 items-center rounded-full border border-white/25 bg-black/45 px-3 text-[8px] font-medium tracking-[0.2em] text-white backdrop-blur-md">
            {String(project.order).padStart(2, "0")}
          </span> */}
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#737A1A] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </span>
        </div>
      </a>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <p className="min-w-0 truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-[#737A1A]">
            {project.category}
          </p>
          <span className="shrink-0 text-[9px] font-medium tracking-[0.16em] text-black/40">
            {project.year}
          </span>
        </div>

        <Link href={`/work/${project.id}`} className="block min-w-0">
          <h3 className="mt-4 line-clamp-2 text-xl font-medium leading-[1.05] tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-2xl">
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-xs leading-6 text-black/60 sm:text-sm">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="max-w-full truncate rounded-full border border-black/10 bg-white px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.1em] text-black/55 transition-colors duration-300 group-hover:border-[#737A1A]/30"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-black/10 pt-4" />
        <div className="mt-auto flex min-w-0 flex-wrap items-center gap-2 pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#737A1A] px-3.5 py-2.5 text-[10px] font-medium text-white transition-colors duration-300 hover:bg-[#5f6515]"
          >
            Live Website
            <ExternalLink
              size={12}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/github inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/15 bg-white px-3.5 py-2.5 text-[10px] font-medium text-black transition-colors duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
            >
              GitHub
              <Github
                size={12}
                className="transition-transform duration-300 group-hover/github:scale-110"
              />
            </a>
          )}

          <Link
            href={`/work/${project.id}`}
            className="group/detail ml-auto inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-black/45 transition-colors duration-300 hover:text-[#737A1A]"
          >
            View
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover/detail:-translate-y-0.5 group-hover/detail:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectGroup({
  title,
  eyebrow,
  description,
  projects,
  number,
}: ProjectGroupProps) {
  if (projects.length === 0) return null;

  return (
    <section className="mb-12 last:mb-0" aria-label={title}>
      <div className="mb-6 flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#737A1A]">
            {number} / {eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 max-w-2xl text-xs leading-6 text-black/55 sm:text-sm">
            {description}
          </p>
        </div>
        <span className="w-fit shrink-0 rounded-full border border-black/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-black/55">
          {String(projects.length).padStart(2, "0")}{" "}
          {projects.length === 1 ? "Project" : "Projects"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 animate-[fadeIn_0.45s_ease-out] md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function EmptyState({ service }: { service: WorkService }) {
  return (
    <div className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#f5f5f3] px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#737A1A]/30 bg-[#737A1A]/[0.06]">
        <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
        <span className="absolute inset-2 rounded-full border border-[#737A1A]/20" />
      </div>
      <p className="relative text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A]">
        {service}
      </p>
      <h3 className="relative mt-3 text-2xl font-medium tracking-[-0.04em]">
        Projects coming soon.
      </h3>
      <p className="relative mt-2 max-w-md text-xs leading-6 text-black/50">
        We are preparing selected work for this service. New projects will
        appear here soon.
      </p>
    </div>
  );
}

export default function FeaturedWork() {
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
    <section
      id="featured-work"
      className="relative overflow-hidden bg-white text-black"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.035] blur-[100px]" />
        <div className="absolute bottom-[5%] right-[-180px] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 shrink-0 bg-[#737A1A]" />
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-black sm:text-[10px]">
              Featured Work
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Selected projects.
              <span className="block text-[#737A1A]">Built with intent.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
              A selection of client collaborations and independent digital
              experiences built across different industries and disciplines.
            </p>
          </div>
        </div>

        <div className="mt-10 border-y border-black/10 sm:mt-14">
          <div className="flex w-full overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {serviceTabs.map((tab, index) => {
              const count = workProjects.filter(
                (project) => project.published && project.service === tab.id,
              ).length;
              const isActive = activeService === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveService(tab.id)}
                  aria-pressed={isActive}
                  className={`group relative flex min-w-fit shrink-0 items-center gap-2.5 px-4 py-5 text-left transition-colors duration-300 sm:px-6 ${isActive ? "text-black" : "text-black/40 hover:text-black"}`}
                >
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#737A1A] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                  <span
                    className={`text-[8px] font-medium tracking-[0.18em] ${isActive ? "text-[#737A1A]" : "text-black/25"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] sm:block">
                    {tab.label}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] sm:hidden">
                    {tab.shortLabel}
                  </span>
                  <span
                    className={`flex h-5 min-w-5 items-center justify-center rounded-full border px-1.5 text-[8px] font-medium ${isActive ? "border-[#737A1A]/30 bg-[#737A1A]/10 text-[#737A1A]" : "border-black/10 text-black/30"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-8 sm:mt-14 sm:pt-10">
          {projects.length > 0 ? (
            <div key={activeService}>
              <ProjectGroup
                number="01"
                eyebrow="Client work"
                title="Client Projects"
                description="Websites and digital solutions created in collaboration with businesses, organizations and clients."
                projects={clientProjects}
              />
              <ProjectGroup
                number="02"
                eyebrow="Self-initiated"
                title="Independent Projects"
                description="Concepts, experiments and self-initiated builds created to explore ideas, solve problems and develop new skills."
                projects={independentProjects}
              />
            </div>
          ) : (
            <EmptyState service={activeService} />
          )}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-black/40">
            {projects.length}{" "}
            {projects.length === 1 ? "Selected Project" : "Selected Projects"}
            <span className="mx-2 text-black/20">/</span>
            {clientProjects.length} Client
            <span className="mx-1 text-black/20">·</span>
            {independentProjects.length} Independent
          </p>
          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-black/15 px-4 py-2.5 text-[10px] font-medium text-black transition-all duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:text-white"
          >
            View all work
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
