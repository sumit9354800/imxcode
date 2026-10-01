import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import { teamMembers } from "@/data/team";

type TeamProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export default async function TeamProfilePage({
  params,
}: TeamProfilePageProps) {
  const { id } = await params;

  const member = teamMembers.find((item) => item.id === id);

  if (!member) {
    notFound();
  }

  return (
    <main className="bg-white text-black">
      {/* ========================================
          PROFILE HERO
      ======================================== */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* Olive glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#737A1A]/15 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16">
          {/* Back */}
          <Link
            href="/team"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to team
          </Link>

          {/* Hero content */}
          <div className="mt-16 grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Profile image */}
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-medium backdrop-blur-md">
                  {String(teamMembers.indexOf(member) + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute -bottom-3 left-8 right-8 h-px bg-[#737A1A]" />
            </div>

            {/* Information */}
            <div className="lg:pb-2">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#737A1A]" />

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#737A1A] sm:text-xs">
                  {member.role}
                </p>
              </div>

              <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
                {member.name}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                {member.bio}
              </p>

              {/* Meta */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-[#737A1A]" />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      {member.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={15}
                    className="text-[#737A1A]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Experience
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          ABOUT + EXPERTISE
      ======================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Label */}
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#737A1A]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
                  About
                </p>
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-black/40">
                A closer look at {member.name.split(" ")[0]}'s role,
                capabilities and contribution at IMX.
              </p>
            </div>

            {/* Bio */}
            <div>
              <p className="max-w-4xl text-[clamp(1.8rem,3.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.05em]">
                {member.shortBio}
              </p>

              <div className="mt-12 border-t border-black/10 pt-8">
                <p className="max-w-3xl text-base leading-8 text-black/55">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* ========================================
          SKILLS
      ======================================== */}
      <section className="border-t border-black/10 bg-[#f6f6f2]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#737A1A]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
                  Expertise
                </p>
              </div>

              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                Skills &amp;
                <span className="block text-[#737A1A]">capabilities.</span>
              </h2>
            </div>

            <div className="grid border-t border-black/10 sm:grid-cols-2">
              {member.skills.map((skill, index) => (
                <div
                  key={typeof skill === 'string' ? skill : skill.name}
                  className="flex items-center gap-5 border-b border-black/10 py-6"
                >
                  <span className="text-[10px] font-medium tracking-[0.15em] text-[#737A1A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                    {typeof skill === 'string' ? skill : skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          TOOLS
      ======================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-8 border-t border-black/10 pt-7 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
                Tools &amp; Software
              </p>
            </div>

            <div className="flex max-w-3xl flex-wrap gap-2">
              {member.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-black/65 transition-colors duration-300 hover:border-[#737A1A]/50 hover:text-[#737A1A]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SELECTED PROJECTS
      ======================================== */}
      {member.projects.length > 0 && (
        <section className="bg-black text-white">
          <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
            {/* Header */}
            <div className="flex flex-col gap-8 border-t border-white/10 pt-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#737A1A]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
                    Selected Work
                  </p>
                </div>

                <h2 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                  Projects by
                  <span className="block text-[#737A1A]">
                    {member.name.split(" ")[0]}.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                A selection of digital work contributed to by {member.name}.
              </p>
            </div>

            {/* Projects */}
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {member.projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[9px] backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A]">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5 border-b border-white/10 pb-6">
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#737A1A]">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {project.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 group-hover:text-white">
                      Visit project
                      <ArrowUpRight
                        size={13}
                        className="text-[#737A1A]"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          PROFILE CTA
      ======================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
          <div className="border-t border-black/10 pt-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
                  Work with IMX
                </p>

                <h2 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                  Have something
                  <span className="block text-[#737A1A]">worth building?</span>
                </h2>
              </div>

              <div>
                <p className="max-w-md text-sm leading-7 text-black/50 sm:text-base">
                  Let's bring the right people, skills and technology together
                  for your next digital project.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#737A1A]"
                  >
                    Start a project

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href="/team"
                    className="inline-flex items-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition-colors duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
                  >
                    Back to team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}