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
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                Selected Work
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Real projects.
              <br />
              Real digital experiences.
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-black/20 pb-2 text-sm font-medium transition-colors hover:border-[#737A1A] hover:text-[#737A1A]"
          >
            View all work

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
          A selection of digital experiences built across education, business
          and commerce — showing how our capabilities adapt to different
          industries.
        </p>

        {/* Projects */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {selectedProjects.map((project, index) => {
            if (!project) return null;

            return (
              <article
                key={project.title}
                className={`group md:col-span-2" 
                `}
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-[#f1f1ee] ${
                      index === 0
                        ? "aspect-[16/8]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 100vw, 1200px"
                          : "(max-width: 768px) 100vw, 600px"
                      }
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                    {/* Industry badge */}
                    <div className="absolute left-5 top-5 border border-white/20 bg-black/70 px-3 py-2 backdrop-blur-md">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        {project.industry}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center bg-[#737A1A] text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-6 border-b border-black/10 py-5">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-black/45">
                        {project.category}
                      </p>
                    </div>

                    <span className="mt-1 shrink-0 text-xs font-medium text-black/25">
                      0{index + 1}
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 border-t border-black/10 pt-8">
          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
            Every industry has a different problem. The right digital
            experience starts by understanding it.
          </p>
        </div>
      </div>
    </section>
  );
}