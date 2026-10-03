import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { teamMembers } from "@/data/team";

export default function CoreTeamSection() {
  return (
    <section
      id="core-team"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.055] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20 xl:px-16">
        {/* Header */}
        <div className="border-t border-black/10 pt-6 sm:pt-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#737A1A]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#737A1A] sm:text-[10px]">
                  Core Team
                </p>
              </div>

              <h2 className="mt-5 max-w-4xl text-[clamp(2.7rem,5.2vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                The people
                <span className="block text-[#737A1A]">
                  behind the work.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="text-xs leading-5 text-black/50 sm:text-sm sm:leading-6">
                Developers, designers and creatives working together to turn
                ambitious ideas into meaningful digital experiences.
              </p>

              <div className="mt-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-black/25">
                <span className="h-px w-6 bg-black/15" />
                {String(teamMembers.length).padStart(2, "0")} People
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-5">
          {teamMembers.map((member, index) => (
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              className="group min-w-0"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl bg-[#f1f1ed] ring-1 ring-black/[0.06]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 768px) 33vw,
                      20vw
                    "
                    className="object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />

                  {/* Number */}
                  <div className="absolute left-3 top-3">
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-md bg-black/65 px-1.5 text-[8px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Role on hover */}
                  <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#c9d06f]">
                          {member.role}
                        </span>

                        <p className="mt-1 text-[10px] leading-4 text-white/70">
                          {member.shortBio}
                        </p>
                      </div>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#737A1A] text-black transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={14} strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3 flex items-start justify-between gap-2 px-0.5">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-[15px]">
                    {member.name}
                  </h3>

                  <p className="mt-1 truncate text-[8px] font-medium uppercase tracking-[0.14em] text-black/35 sm:text-[9px]">
                    {member.role}
                  </p>
                </div>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-black/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#737A1A]"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-9 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
            One team. Multiple disciplines. One direction.
          </p>

          <span className="text-[9px] uppercase tracking-[0.18em] text-black/20">
            IMX Digital Studio
          </span>
        </div>
      </div>
    </section>
  );
}