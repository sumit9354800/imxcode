import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-[0.025]
        "
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black sm:text-xs">
              Capabilities
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Technology,
              <span className="block text-[#737A1A]">
                design & motion.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
              A combination of development, design and creative production
              capabilities for building complete digital experiences.
            </p>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:mt-28 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="group relative overflow-hidden bg-white p-7 sm:p-9"
              >
                {/* Accent line */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full"
                />

                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.25em] text-[#737A1A]">
                    {group.number}
                  </span>

                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-full
                      border border-[#737A1A] bg-white text-[#737A1A]
                      transition-colors duration-300
                      group-hover:bg-[#737A1A]
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-12 text-2xl font-medium tracking-[-0.045em] text-black sm:text-3xl">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-5 min-h-[96px] max-w-md text-sm leading-6 text-black">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-black/10
                        bg-[#f7f7f5] px-3 py-1.5
                        text-[9px] font-medium uppercase tracking-[0.13em]
                        text-black
                        transition-colors duration-200
                        group-hover:border-[#737A1A]
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-black">
                    IMX Capability
                  </span>

                  <div
                    className="
                      flex h-9 w-9 items-center justify-center rounded-full
                      border border-black/15 bg-white text-black
                      transition-all duration-300
                      group-hover:border-[#737A1A]
                      group-hover:bg-[#737A1A]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}