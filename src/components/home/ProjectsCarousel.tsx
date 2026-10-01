"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { workProjects } from "@/data/work";

export default function ProjectsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = workProjects
    .filter((project) => project.published)
    .sort((a, b) => a.order - b.order);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "right" ? 430 : -430,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#737A1A]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/40 sm:text-xs">
                Selected projects
              </p>
            </div>

            <h2 className="max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Work that
              <span className="block text-[#737A1A]">speaks for itself.</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous projects"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors duration-300 hover:border-white/30 hover:bg-white hover:!text-black"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next projects"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors duration-300 hover:border-white/30 hover:bg-white hover:!text-black"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group w-[82vw] shrink-0 snap-start sm:w-[520px] lg:w-[580px]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-[#111]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 520px, 580px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                {/* Number */}
                {/* <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[9px] font-medium tracking-[0.2em] text-white backdrop-blur-md">
                  {project.number}
                </div> */}

                {/* Year */}
                {/* <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[9px] font-medium tracking-[0.16em] text-white backdrop-blur-md">
                  {project.year}
                </div> */}

                {/* Open */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#737A1A] !text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-105"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
                    {project.category}
                  </p>

                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-3xl">
                  {project.title}
                </h3>

                {/* Links */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[9px] font-medium uppercase tracking-[0.14em] !text-black transition-colors duration-300 hover:bg-[#737A1A] hover:!text-white"
                  >
                    Live
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.14em] !text-white/55 transition-colors duration-300 hover:border-white/30 hover:!text-white"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-white/15" />

          <p className="text-[9px] uppercase tracking-[0.24em] text-white/25">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
