import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Video,
  Layers3,
} from "lucide-react";

import { teamMembers } from "@/data/team";

const skillIcons = [Code2, Palette, Video, Layers3];

export default function TeamMemberSkillsSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#737A1A]/[0.06] blur-[130px]"
      />

      {/* Technical grid */}
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

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* Header */}
        <div className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A] sm:text-[10px]">
                Team Skills
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.87] tracking-[-0.07em]">
              Different people.
              <span className="block text-[#737A1A]">
                Different strengths.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
              Our team brings together engineering, design and creative
              capabilities to turn ideas into complete digital experiences.
            </p>

            <div className="mt-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-white/20">
              <span className="h-px w-6 bg-white/15" />
              {String(teamMembers.length).padStart(2, "0")} Team Members
            </div>
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {teamMembers.map((member, memberIndex) => {
            const Icon = skillIcons[memberIndex % skillIcons.length];

            return (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group relative min-w-0 overflow-hidden border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#737A1A]/45 hover:bg-[#737A1A]/[0.045] sm:p-6"
              >
                {/* Hover line */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-black transition-colors duration-300 group-hover:border-[#737A1A]/50">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#737A1A]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold tracking-[-0.035em] sm:text-xl">
                        {member.name}
                      </h3>

                      <p className="mt-1 truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-[#737A1A]">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Number + arrow */}
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="text-[8px] font-medium tracking-[0.18em] text-white/20">
                      {String(memberIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center border border-white/10 text-white/25 transition-all duration-300 group-hover:border-[#737A1A]/50 group-hover:text-[#737A1A]">
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-white/10 px-2.5 py-1.5 text-[9px] font-medium text-white/45 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/65"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                    {String(member.skills.length).padStart(2, "0")} Core Skills
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/20 transition-colors duration-300 group-hover:text-[#737A1A]">
                    View profile
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[10px] leading-5 text-white/30 sm:text-xs">
            One team, multiple disciplines — bringing technology, design and
            creative thinking together under one roof.
          </p>

          <div className="flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            IMX Digital Studio
          </div>
        </div>
      </div>
    </section>
  );
}