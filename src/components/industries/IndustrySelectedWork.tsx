import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { workProjects } from "@/data/work";
import { industrySelectedWork } from "@/data/industry-selected-work";

export default function IndustrySelectedWork() {
  const selectedProjects = industrySelectedWork
    .map((selected) => {
      const project = workProjects.find(
        (item) => item.title === selected.title,
      );

      if (!project) return null;

      return {
        ...project,
        industry: selected.industry,
      };
    })
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#737A1A]/8 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="flex flex-col gap-7 border-b border-black/10 pb-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737A1A] sm:text-xs">
                Selected Work
              </span>
            </div>

            <h2 className="mt-5 max-w-4xl text-[clamp(2.6rem,5.2vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Real projects.
              <span className="block text-[#737A1A]">
                Real digital experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-black/45 sm:text-[15px]">
              A focused selection of digital experiences built across
              different industries, audiences and business needs.
            </p>
          </div>

          {/* View all */}
          <Link
            href="/work"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-black/20 pb-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:border-[#737A1A] hover:text-[#737A1A]"
          >
            View all work

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
          {selectedProjects.map((project, index) => {
            if (!project) return null;

            return (
              <Link
                key={project.title}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block min-w-0"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f1f1ee] ring-1 ring-black/[0.06]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Dark hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

                  {/* Top Industry */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-md border border-white/20 bg-black/65 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white opacity-100 backdrop-blur-md transition-opacity duration-300 group-hover:bg-[#737A1A] group-hover:text-black">
                      {project.industry}
                    </span>
                  </div>

                  {/* Number */}
                  <span className="absolute right-3 top-3 text-[9px] font-semibold tracking-[0.15em] text-white opacity-0 drop-shadow transition-opacity duration-300 group-hover:opacity-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Bottom Hover Details */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-4 pb-4 pt-20 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#c9d06f]">
                          {project.category}
                        </span>

                        <h3 className="mt-1 truncate text-base font-medium tracking-[-0.02em] text-white">
                          {project.title}
                        </h3>

                        <p className="mt-1 text-[10px] text-white/55">
                          Explore project
                        </p>
                      </div>

                      {/* Arrow */}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#737A1A] text-black transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex items-start justify-between gap-3 px-1 pt-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-[15px]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/35">
                      {project.category}
                    </p>
                  </div>

                  <span className="shrink-0 pt-0.5 text-[9px] font-medium tracking-[0.12em] text-black/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
              Our approach
            </span>

            <p className="mt-3 max-w-3xl text-xl font-medium leading-tight tracking-[-0.03em] sm:text-2xl">
              Different industries.
              <span className="text-black/35">
                {" "}
                Different digital needs.
              </span>
            </p>
          </div>

          <div className="text-[9px] uppercase tracking-[0.2em] text-black/20">
            {String(selectedProjects.length).padStart(2, "0")} Projects
          </div>
        </div>
      </div>
    </section>
  );
}