import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { webApplicationWorkProjects } from "@/data/services/web-application-development";

export default function WebApplicationWork() {
  const projects = webApplicationWorkProjects.slice(0, 3);

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

        {/* Projects / Coming Soon */}
        {projects.length > 0 ? (
          <div className="mt-10 grid gap-px bg-white/10 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative overflow-hidden bg-[#0a0a0a]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.03]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#111,#050505)]" />
                  )}

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
        ) : (
          <div className="mt-10 overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <div className="relative flex min-h-[360px] items-center justify-center px-6 py-16 text-center sm:min-h-[420px]">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute left-[10%] top-[18%] h-24 w-24 rounded-full border border-[#737A1A]/20" />

              <div className="pointer-events-none absolute bottom-[14%] right-[10%] h-32 w-32 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

              <div className="relative z-10 max-w-xl">
                <span className="inline-flex border border-[#737A1A]/40 bg-[#737A1A]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
                  Coming Soon
                </span>

                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Our web application work
                  <span className="block text-[#737A1A]">
                    is on the way.
                  </span>
                </h3>

                <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/40 sm:text-base">
                  We’re currently preparing a selection of web applications,
                  platforms and digital products. Check back soon to explore
                  the work.
                </p>

                <Link
                  href="/work"
                  className="group mt-8 inline-flex items-center gap-2 bg-[#737A1A] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#858C20]"
                >
                  Explore our work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

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