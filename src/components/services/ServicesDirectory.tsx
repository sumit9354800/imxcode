import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { serviceGroups } from "@/data/navigation";

export default function ServicesDirectory() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-180px] h-[520px] w-[520px] rounded-full bg-[#737A1A]/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-220px] h-[460px] w-[460px] rounded-full bg-[#737A1A]/[0.03] blur-[130px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.9) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="grid gap-8 border-b border-black/10 pb-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-14">
          {/* Left metadata */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40 sm:text-[10px]">
                Our Services
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25">
                IMX / Capabilities
              </span>

              <span className="h-px w-8 bg-black/10" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                {String(serviceGroups.length).padStart(2, "0")} Categories
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div>
            <h2 className="max-w-5xl text-[clamp(2.7rem,5.2vw,5.7rem)] font-semibold leading-[0.87] tracking-[-0.075em]">
              Everything you need to
              <span className="block text-[#737A1A]">
                build, launch and grow.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-xs leading-6 text-black/45 sm:text-sm sm:leading-6">
              Explore our core capabilities across technology, design,
              branding, creative production and digital growth — brought
              together under one studio.
            </p>
          </div>
        </div>

        {/* ===================================================
            SERVICE DIRECTORY
        ==================================================== */}

        <div className="mt-8">
          {serviceGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="group/category relative border-b border-black/10 py-7 sm:py-8 lg:py-9"
            >
              {/* Olive top signal */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover/category:w-full" />

              <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-10">
                {/* =================================================
                    CATEGORY
                ================================================== */}

                <div className="flex items-start justify-between lg:block">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-semibold tracking-[0.2em] text-[#737A1A]">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-7 bg-black/10" />

                      <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-black/25">
                        Capability
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold leading-none tracking-[-0.055em] sm:text-3xl lg:text-[2.15rem]">
                      {group.title}
                    </h3>
                  </div>

                  {/* Service count */}
                  <div className="mt-1 text-right lg:mt-7 lg:text-left">
                    <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-black/25">
                      {String(group.items.length).padStart(2, "0")} Services
                    </span>
                  </div>
                </div>

                {/* =================================================
                    SERVICE LINKS
                ================================================== */}

                <div className="grid border-t border-black/10 sm:grid-cols-2 sm:border-t-0">
                  {group.items.map((service, serviceIndex) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`group/service relative flex min-w-0 items-center justify-between gap-5 border-b border-black/10 py-4 transition-all duration-300 sm:px-5 sm:py-5 ${
                        serviceIndex % 2 === 0
                          ? "sm:border-r sm:border-black/10"
                          : ""
                      } ${
                        serviceIndex >= group.items.length - 2
                          ? "sm:border-b-0"
                          : ""
                      }`}
                    >
                      {/* Hover background */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-0 bg-[#737A1A]/[0.035] opacity-0 transition-opacity duration-300 group-hover/service:opacity-100"
                      />

                      {/* Left side */}
                      <div className="relative z-10 flex min-w-0 items-center gap-3.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-black/10 text-[8px] font-semibold tracking-[0.12em] text-black/25 transition-all duration-300 group-hover/service:border-[#737A1A]/35 group-hover/service:bg-[#737A1A] group-hover/service:text-white">
                          {String(serviceIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="truncate text-sm font-medium tracking-[-0.025em] text-black/75 transition-colors duration-300 group-hover/service:text-black sm:text-[15px]">
                          {service.label}
                        </span>
                      </div>

                      {/* Arrow */}
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-black/10 text-black/25 transition-all duration-300 group-hover/service:border-[#737A1A] group-hover/service:bg-[#737A1A] group-hover/service:text-white">
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover/service:-translate-y-0.5 group-hover/service:translate-x-0.5"
                        />
                      </span>

                      {/* Bottom progress line */}
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover/service:w-full"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <p className="max-w-xl text-[10px] leading-5 text-black/35 sm:text-xs">
              One studio, multiple disciplines — connected around the same
              business goal.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/20">
              IMX Digital Studio
            </span>

            <span className="h-px w-7 bg-black/10" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
              {String(
                serviceGroups.reduce(
                  (total, group) => total + group.items.length,
                  0
                )
              ).padStart(2, "0")}{" "}
              Capabilities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}