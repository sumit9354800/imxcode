import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/data/team";

export default function CoreTeamSection() {
  return (
    <section
      id="core-team"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16">
        {/* Section Header */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#737A1A]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#737A1A] sm:text-xs">
                  Core Team
                </p>
              </div>

              <h2 className="mt-7 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                The people
                <span className="block text-[#737A1A]">
                  behind the work.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/50 sm:text-base sm:leading-7 lg:pb-2">
              Developers, designers and creatives working together to turn
              ambitious ideas into meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-20 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {teamMembers.map((member, index) => (
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              className="group text-center"
            >
              {/* Portrait */}
              <div className="relative mx-auto w-fit">
                {/* Olive ring */}
                <div className="absolute -inset-2 rounded-full border border-transparent transition-all duration-500 group-hover:border-[#737A1A]/40" />

                {/* Image */}
                <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[#f1f1ed] sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    sizes="160px"
                  />
                </div>

                {/* Number */}
                <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-[9px] font-medium text-white shadow-sm">
                  0{index + 1}
                </span>
              </div>

              {/* Name */}
              <h3 className="mt-6 text-base font-semibold tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-lg">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-[9px] font-medium uppercase leading-4 tracking-[0.14em] text-[#737A1A] sm:text-[10px]">
                {member.role}
              </p>

              {/* Short Bio */}
              <p className="mx-auto mt-3 max-w-[210px] text-xs leading-5 text-black/45">
                {member.shortBio}
              </p>

              {/* View profile */}
              <div className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35 transition-colors duration-300 group-hover:text-black">
                View profile

                <ArrowUpRight
                  size={13}
                  className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#737A1A]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}