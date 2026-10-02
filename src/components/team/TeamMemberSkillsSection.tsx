import {
  ArrowUpRight,
  Code2,
  Palette,
  Video,
  Layers3,
} from "lucide-react";
import { teamMembers } from "@/data/team";

const skillIcons = [
  Code2,
  Palette,
  Video,
  Layers3,
];

export default function TeamMemberSkillsSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient olive glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#737A1A]/5 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
        {/* ========================================
            HEADER
        ======================================== */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-xs">
              Team Member Skills
            </p>
          </div>

          <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
            Different people.
            <span className="block text-[#737A1A]">
              Different strengths.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            Our team brings together engineering, design and creative
            capabilities to turn ideas into complete digital experiences.
          </p>
        </div>

        {/* ========================================
            TEAM SKILLS
        ======================================== */}
        <div className="mt-20 border-t border-white/10">
          {teamMembers.map((member, memberIndex) => {
            const Icon = skillIcons[memberIndex % skillIcons.length];

            return (
              <div
                key={member.id}
                className="group border-b border-white/10"
              >
                <div className="grid gap-8 py-10 lg:grid-cols-[80px_0.8fr_1.2fr] lg:items-start lg:gap-12 lg:py-12">
                  {/* Number */}
                  <div>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                      {String(memberIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Member */}
                  <div>
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-[#737A1A]/50">
                        <Icon
                          size={19}
                          className="text-[#737A1A]"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                          {member.name}
                        </h3>

                        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#737A1A]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="lg:pt-1">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-white/65 transition-all duration-300 hover:border-[#737A1A]/60 hover:text-[#737A1A]"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                        {member.skills.length} core skills
                      </span>

                      <a
                        href={`/team/${member.id}`}
                        className="group/link inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 hover:text-white"
                      >
                        View profile

                        <ArrowUpRight
                          size={13}
                          className="text-[#737A1A] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================
            BOTTOM STATEMENT
        ======================================== */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
            One team, multiple disciplines — bringing technology, design and
            creative thinking together under one roof.
          </p>

          <div className="flex shrink-0 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            IMX Creative Tech
          </div>
        </div>
      </div>
    </section>
  );
}