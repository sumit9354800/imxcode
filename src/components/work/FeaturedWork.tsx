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
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black sm:text-xs">
              Featured Work
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Selected projects.
              <span className="block text-[#737A1A]">
                Built with intent.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
              A selection of digital products, websites and creative
              experiences built across different industries and disciplines.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-20 grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-2 lg:mt-28">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f5f5f3] transition-all duration-500 hover:border-[#737A1A]/40"
            >
              {/* Image */}
              <Link
                href={`/work/${project.slug}`}
                className="block"
                aria-label={`View ${project.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e9e5]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  {/* Project number */}
                  <div className="absolute left-5 top-5 flex h-10 items-center rounded-full border border-white/30 bg-black/40 px-4 text-[10px] font-medium tracking-[0.2em] !text-white backdrop-blur-md">
                    {String(project.order).padStart(2, "0")}
                  </div>

                  {/* Open project */}
                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#737A1A] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Category + Year */}
                <div className="flex items-center justify-between gap-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
                    {project.category}
                  </p>

                  <span className="text-[10px] font-medium tracking-[0.18em] text-black/50">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/work/${project.slug}`}>
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm leading-7 text-black/65 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-black/60 transition-colors duration-300 group-hover:border-[#737A1A]/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <div className="mt-7 border-t border-black/10 pt-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/40">
                    Role
                  </p>

                  <p className="mt-2 text-sm font-medium text-black">
                    {project.role}
                  </p>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {/* Live */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-full bg-[#737A1A] px-4 py-2.5 text-xs font-medium !text-white transition-colors duration-300 hover:bg-[#5f6515]"
                  >
                    Live Website

                    <ExternalLink
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/github inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
                  >
                    GitHub

                    <Github
                      size={14}
                      className="transition-transform duration-300 group-hover/github:scale-110"
                    />
                  </a>

                  {/* Detail */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/detail ml-auto inline-flex items-center gap-2 text-xs font-medium text-black/50 transition-colors duration-300 hover:text-[#737A1A]"
                  >
                    View project

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/detail:translate-x-0.5 group-hover/detail:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">
            {projects.length} Selected Projects
          </p>

          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/15 px-5 py-3 text-xs font-medium text-black transition-colors duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:text-white"
          >
            View all work

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}