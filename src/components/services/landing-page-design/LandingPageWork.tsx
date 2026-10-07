import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/data/work";

export default function LandingPageWork() {
  const projects = workProjects
    .filter((project) => project.published)
    .slice(0, 3);

  return (
    <section className="bg-[#f7f7f4] px-6 py-20 text-black sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Selected work
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Experiences built to
              <span className="block text-[#737A1A]">
                make an impression.
              </span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-2 border-b border-black/15 pb-2 text-sm font-medium transition hover:border-[#737A1A] hover:text-[#737A1A]"
          >
            View all work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-end p-6">
                    <span className="text-7xl font-semibold tracking-[-0.08em] text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                )}

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs text-black/35">
                      {project.year}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em]">
                      {project.title}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition group-hover:border-[#737A1A] group-hover:bg-[#737A1A] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-black/55">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-black/45"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black/45">
            Every project starts with a different objective. The common thread
            is making the experience easier to understand and act on.
          </p>

          <span className="text-xs uppercase tracking-[0.18em] text-[#737A1A]">
            Selected projects
          </span>
        </div>
      </div>
    </section>
  );
}