import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/data/work";

export default function EcommerceWork() {
  const projects = workProjects
    .filter((project) => project.published)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Selected Work
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
              A selection of digital experiences showing how we approach
              product, interface and technology.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              Work that turns
              <br />
              <span className="text-[#737A1A]">attention into action.</span>
            </h2>

            <Link
              href="/work"
              className="group hidden shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white sm:flex"
            >
              View all work
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/work"
              className="group block"
            >
              <article>
                {/* Image */}
                <div className="relative aspect-[1.15] overflow-hidden border border-white/10 bg-[#090909]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#111,#050505)]" />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                  {/* Number */}
                  <span className="absolute left-5 top-5 text-[9px] font-medium tracking-[0.2em] text-white/60">
                    0{index + 1}
                  </span>

                  {/* Arrow */}
                  <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A] group-hover:text-black">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-5 flex items-start justify-between gap-5 border-t border-white/10 pt-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#737A1A]">
                        {project.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/25">
                    {project.role}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 px-2.5 py-1 text-[8px] uppercase tracking-[0.14em] text-white/35"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile all-work link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            View all work
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-[-0.025em] text-white/70 sm:text-2xl">
            Good commerce design makes the next action feel natural — from
            discovering a product to completing the purchase.
          </p>
        </div>
      </div>
    </section>
  );
}