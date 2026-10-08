import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/data/work";

export default function MotionGraphicsWork() {
  const projects = workProjects
    .filter((project) => project.published)
    .slice(0, 3);

  return (
    <section className="bg-black px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Selected work
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Ideas brought
              <span className="block text-[#737A1A]">
                to life through motion.
              </span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#737A1A]"
          >
            View all work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work#${project.id}`}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] transition-colors hover:border-[#737A1A]/50"
            >
              {/* Project visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.04]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-5xl font-semibold tracking-[-0.08em] text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
              </div>

              {/* Project details */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#737A1A]">
                    {project.category}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#737A1A]"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em]">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-2xl text-sm leading-6 text-white/40">
            We use motion to make brands, products and ideas easier to
            understand — and harder to forget.
          </p>
        </div>
      </div>
    </section>
  );
}