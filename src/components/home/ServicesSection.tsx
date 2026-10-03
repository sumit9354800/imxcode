"use client";

import Link from "next/link";
import { homeServiceGroups } from "@/data/home-services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-48 top-20
          h-[420px] w-[420px]
          rounded-full
          bg-[#737A1A]/[0.07]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-48 bottom-[-120px]
          h-[420px] w-[420px]
          rounded-full
          bg-[#737A1A]/[0.05]
          blur-[140px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-35
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative mx-auto max-w-[1500px]
          px-5 py-16
          sm:px-8 sm:py-20
          lg:px-12 lg:py-24
          xl:px-16
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.45fr_1.55fr] lg:gap-12">
          {/* Left meta */}
          <div className="flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-[6px] h-px w-8 bg-[#737A1A]" />

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 sm:text-[10px]">
                  What we do
                </p>

                <p className="mt-3 max-w-[210px] text-[11px] leading-5 text-black/35">
                  Strategy, technology and creative expertise working as one
                  digital system.
                </p>
              </div>
            </div>

            {/* System indicator */}
            <div className="mt-7 hidden lg:block">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#737A1A]/25" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30">
                  SYSTEM / ACTIVE
                </span>
              </div>

              <div className="mt-3 h-px w-28 bg-black/10">
                <div className="h-full w-[72%] bg-[#737A1A]" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div>
            <div className="flex items-end justify-between gap-6">
              <h2
                className="
                  max-w-4xl
                  text-[clamp(2.7rem,5.2vw,5.8rem)]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.07em]
                "
              >
                Digital capabilities
                <span className="block text-[#737A1A]">
                  built to move brands.
                </span>
              </h2>

              <span className="hidden shrink-0 pb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-black/25 lg:block">
                04 / 04
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-black/50 sm:text-[15px] sm:leading-6">
                Technology, design and creative expertise working together to
                turn ideas into useful, polished digital experiences.
              </p>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/25 lg:hidden">
                IMX / SERVICES / 001
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            COMPACT SERVICE GRID
        ======================================================== */}

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {homeServiceGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <Link
                  key={group.number}
                  href={group.href}
                  className="group block"
                >
                  <article
                    className="
                      relative
                      min-h-[255px]
                      overflow-hidden
                      rounded-[1.65rem]
                      border border-black/[0.09]
                      bg-white/80
                      p-5
                      shadow-[0_8px_35px_rgba(0,0,0,0.035)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      ease-out
                      hover:-translate-y-1.5
                      hover:border-[#737A1A]/35
                      hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)]
                      sm:min-h-[270px]
                      sm:p-6
                      lg:p-7
                    "
                  >
                    {/* =================================================
                        HOVER LIGHT
                    ================================================== */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        bg-[#737A1A]/0
                        blur-[80px]
                        transition-all
                        duration-700
                        group-hover:bg-[#737A1A]/[0.12]
                      "
                    />

                    {/* Top technical line */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-x-0 top-0 h-px
                        bg-gradient-to-r
                        from-transparent
                        via-black/10
                        to-transparent
                        transition-colors duration-500
                        group-hover:via-[#737A1A]/50
                      "
                    />

                    {/* =================================================
                        TOP ROW
                    ================================================== */}

                    <div className="relative flex items-center justify-between">
                      {/* Number */}
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            font-mono
                            text-[9px]
                            tracking-[0.2em]
                            text-[#737A1A]
                          "
                        >
                          {group.number}
                        </span>

                        <span className="h-px w-7 bg-black/10 transition-all duration-500 group-hover:w-12 group-hover:bg-[#737A1A]/50" />
                      </div>

                      {/* Icon */}
                      <div
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-full
                          border border-black/10
                          bg-white
                          text-black
                          shadow-[0_5px_20px_rgba(0,0,0,0.035)]
                          transition-all duration-500
                          group-hover:-rotate-6
                          group-hover:border-[#737A1A]
                          group-hover:bg-[#737A1A]
                          group-hover:text-white
                          group-hover:shadow-[0_10px_30px_rgba(115,122,26,0.2)]
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="relative mt-8">
                      <div className="flex items-start justify-between gap-5">
                        <h3
                          className="
                            max-w-[80%]
                            text-[1.65rem]
                            font-medium
                            leading-[0.95]
                            tracking-[-0.05em]
                            text-black
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                            sm:text-[1.8rem]
                            lg:text-[2rem]
                          "
                        >
                          {group.title}
                        </h3>

                        {/* Arrow */}
                        <span
                          aria-hidden="true"
                          className="
                            flex h-8 w-8
                            shrink-0
                            items-center justify-center
                            rounded-full
                            border border-black/10
                            text-xs
                            text-black
                            transition-all duration-500
                            group-hover:rotate-45
                            group-hover:border-[#737A1A]
                            group-hover:bg-[#737A1A]
                            group-hover:text-white
                          "
                        >
                          ↗
                        </span>
                      </div>

                      {/* Services */}
                      <div className="mt-4 flex max-w-[90%] flex-wrap gap-x-2 gap-y-1.5">
                        {group.services.map((service, serviceIndex) => (
                          <span
                            key={service}
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.12em]
                              text-black/40
                              transition-colors
                              duration-300
                              group-hover:text-black/65
                              sm:text-[9px]
                            "
                          >
                            {service}

                            {serviceIndex < group.services.length - 1 && (
                              <span className="ml-2 text-[#737A1A]">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* =================================================
                        BOTTOM
                    ================================================== */}

                    <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 lg:left-7 lg:right-7">
                      <div className="flex items-end justify-between gap-5">
                        <p className="max-w-[82%] text-[11px] leading-5 text-black/40 transition-colors duration-300 group-hover:text-black/60 sm:text-xs">
                          {group.description}
                        </p>

                        <span className="hidden shrink-0 font-mono text-[7px] tracking-[0.16em] text-black/15 sm:block">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mt-4 h-px w-full overflow-hidden bg-black/[0.07]">
                        <div
                          className="
                            h-full
                            w-[12%]
                            bg-[#737A1A]/50
                            transition-all
                            duration-700
                            group-hover:w-full
                            group-hover:bg-[#737A1A]
                          "
                        />
                      </div>
                    </div>

                    {/* Corner detail */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute right-0 top-0
                        h-9 w-9 overflow-hidden
                      "
                    >
                      <div
                        className="
                          absolute
                          -right-5
                          -top-5
                          h-10
                          w-10
                          rounded-full
                          border border-black/10
                          transition-all duration-500
                          group-hover:border-[#737A1A]/35
                        "
                      />
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================== */}

        <div
          className="
            mt-7
            flex flex-col gap-4
            border-t border-black/10
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <p className="text-[8px] uppercase tracking-[0.23em] text-black/30 sm:text-[9px]">
              One studio. Multiple capabilities.
            </p>
          </div>

          <Link
            href="/services"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border border-black
              px-5
              py-2.5
              text-[11px]
              font-medium
              text-black
              transition-all
              duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:text-white
              hover:shadow-[0_12px_35px_rgba(115,122,26,0.15)]
            "
          >
            <span>Explore all services</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}