import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/data/work";

export default function WebApplicationWork() {
  const projects = workProjects
    .filter((project) => project.published)
    .slice(0, 3);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* Header */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Selected Work
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-[clamp(2.6rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Digital products built for real-world use.
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-3 self-start border-b border-white/15 pb-2 text-xs font-medium uppercase tracking-[0.16em] text-white/60 transition-colors hover:border-[#737A1A] hover:text-[#737A1A] lg:self-end"
          >
            View all work

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-px bg-white/10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden bg-[#0a0a0a]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"
                />

                <span className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.2em] text-white/45">
                  0{index + 1}
                </span>

                <span className="absolute right-5 top-5 border border-white/15 bg-black/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/55 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#737A1A]">
                    {project.category}
                  </span>

                  <span className="h-px w-5 bg-white/10" />

                  <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                    {project.role}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/40">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-white/35"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-7 border-t border-white/10 pt-5">
                  <Link
                    href="/work"
                    className="group/link inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-[#737A1A]"
                  >
                    Explore project

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-white/35 sm:text-sm">
            Every project starts with a different problem. The technology,
            design and workflow are shaped around it.
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            IMX / Selected Work
          </span>
        </div>

      </div>
    </section>
  );
}