import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/data/work";

export default function WebsiteDevelopmentWork() {
 const projects = workProjects.filter((project) => project.published);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#737A1A]/[0.08] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#737A1A]/[0.06] blur-[130px]"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex flex-col gap-7 border-b border-white/10 pb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A]/25" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Selected Work
              </span>
            </div>

            <h2 className="mt-5 max-w-[900px] text-[clamp(2.2rem,4.5vw,4.7rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              Digital experiences
              <span className="block text-[#737A1A]">
                built to be used.
              </span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2.5 text-[11px] font-medium text-white/55 transition-all duration-300 hover:border-[#737A1A]/60 hover:text-white sm:self-auto"
          >
            View all work

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group block min-w-0"
            >
              {/* =================================================
                  IMAGE CARD
              ================================================== */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                {/* Image */}

                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/35" />

                {/* Subtle olive glow */}

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#737A1A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* =================================================
                    TOP META
                ================================================== */}

                <div className="absolute left-3 top-3">
                  <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.14em] text-white/75 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute right-3 top-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/35 font-mono text-[8px] text-white/60 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* =================================================
                    HOVER DETAILS
                ================================================== */}

                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-3 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#c9ce82]">
                        {project.year}
                      </span>

                      <h3 className="mt-1 truncate text-[17px] font-medium tracking-[-0.035em] text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#737A1A] text-white">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* Corner focus line */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* =================================================
                  PROJECT INFO
              ================================================== */}

              <div className="px-1 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="min-w-0 truncate text-[15px] font-medium tracking-[-0.02em] text-white/90 transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>

                  <span className="shrink-0 text-[9px] uppercase tracking-[0.15em] text-white/25">
                    {project.year}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#737A1A]/70 transition-all duration-300 group-hover:w-8" />

                  <span className="truncate text-[8px] uppercase tracking-[0.15em] text-white/25">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =================================================
            BOTTOM SYSTEM
        ================================================== */}

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
              Web Development / Selected Projects
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.15em] text-white/20">
            04 PROJECTS
          </span>
        </div>
      </div>
    </section>
  );
}