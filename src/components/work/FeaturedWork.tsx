import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { workProjects } from "@/data/work";

export default function FeaturedWork() {
  const projects = workProjects
    .filter((project) => project.published)
    .sort((a, b) => a.order - b.order);

  return (
    <section
      id="featured-work"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.035] blur-[100px]" />

        <div className="absolute right-[-180px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.04] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

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
              A selection of digital products, websites and creative experiences
              built across different industries and disciplines.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROJECT GRID
            3 COLUMNS DESKTOP
        ====================================================== */}

        <div className="mt-14 border-t border-black/10 pt-5 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="
                  group
                  flex
                  min-w-0
                  flex-col
                  overflow-hidden
                  rounded-[1.25rem]
                  border
                  border-black/10
                  bg-[#f5f5f3]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#737A1A]/40
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* =================================================
                    IMAGE
                    NO CENTER ELEMENT / NO OVERLAY CONTENT
                ================================================== */}

                <Link
                  href={`/work/${project.liveUrl}`}
                  className="block min-w-0"
                  aria-label={`View ${project.title}`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e9e5]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* Very subtle image overlay only */}
                    <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition-colors duration-500 group-hover:bg-black/[0.06]" />

                    {/* Project number */}
                    <div className="absolute left-4 top-4 flex h-8 items-center rounded-full border border-white/25 bg-black/35 px-3 text-[8px] font-medium tracking-[0.2em] text-white backdrop-blur-md">
                      {String(project.order).padStart(2, "0")}
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#737A1A] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  {/* Category + Year */}

                  <div className="flex min-w-0 items-center justify-between gap-3">
                    <p className="min-w-0 truncate text-[8px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                      {project.category}
                    </p>

                    <span className="shrink-0 text-[9px] font-medium tracking-[0.16em] text-black/40">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}

                  <Link
                    href={`/work/${project.liveUrl}`}
                    className="block min-w-0"
                  >
                    <h3 className="mt-4 line-clamp-2 text-xl font-medium leading-[1] tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-2xl">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Description */}

                  <p className="mt-3 line-clamp-3 text-xs leading-6 text-black/60 sm:text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="
                          max-w-full
                          truncate
                          rounded-full
                          border
                          border-black/10
                          bg-white
                          px-2.5
                          py-1.5
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.1em]
                          text-black/55
                          transition-colors
                          duration-300
                          group-hover:border-[#737A1A]/30
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}

                  <div className="mt-5 border-t border-black/10 pt-4" />
                  {/* =================================================
                      LINKS
                  ================================================== */}

                  <div className="mt-auto flex min-w-0 flex-wrap items-center gap-2 pt-5">
                    {/* Live */}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/link
                        inline-flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-full
                        bg-[#737A1A]
                        px-3.5
                        py-2.5
                        text-[10px]
                        font-medium
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-[#5f6515]
                      "
                    >
                      Live Website
                      <ExternalLink
                        size={12}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>

                    {/* GitHub */}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/github
                        inline-flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-black/15
                        bg-white
                        px-3.5
                        py-2.5
                        text-[10px]
                        font-medium
                        text-black
                        transition-colors
                        duration-300
                        hover:border-[#737A1A]
                        hover:text-[#737A1A]
                      "
                    >
                      GitHub
                      <Github
                        size={12}
                        className="transition-transform duration-300 group-hover/github:scale-110"
                      />
                    </a>

                    {/* Detail */}

                    <Link
                      href={`/work/${project.liveUrl}`}
                      className="
                        group/detail
                        ml-auto
                        inline-flex
                        shrink-0
                        items-center
                        gap-1
                        text-[10px]
                        font-medium
                        text-black/45
                        transition-colors
                        duration-300
                        hover:text-[#737A1A]
                      "
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
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-black/40">
            {projects.length} Selected Projects
          </p>

          <Link
            href="/work"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2.5
              rounded-full
              border
              border-black/15
              px-4
              py-2.5
              text-[10px]
              font-medium
              text-black
              transition-all
              duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:text-white
            "
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
