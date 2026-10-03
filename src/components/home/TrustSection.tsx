"use client";

const trustItems = [
  "Education",
  "Business",
  "Technology",
  "Digital Commerce",
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* =========================================================
          AMBIENT LIGHT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-48 -top-32
          h-[520px] w-[520px]
          rounded-full
          bg-[#737A1A]/[0.16]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-48 bottom-[-180px]
          h-[450px] w-[450px]
          rounded-full
          bg-[#737A1A]/[0.07]
          blur-[140px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-30
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
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

        <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr] lg:gap-14">
          {/* Meta */}
          <div className="flex items-start gap-3">
            <span className="mt-[6px] h-px w-8 bg-[#737A1A]" />

            <div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#737A1A]/30" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                </span>

                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/55 sm:text-[10px]">
                  Selected Work
                </p>
              </div>

              <p className="mt-3 max-w-[210px] text-[11px] leading-5 text-white/30">
                Digital experiences built for teams shaping what comes next.
              </p>
            </div>
          </div>

          {/* Heading */}
          <div>
            <div className="flex items-end justify-between gap-6">
              <h2
                className="
                  max-w-5xl
                  text-[clamp(2.7rem,5.2vw,5.8rem)]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.07em]
                "
              >
                Trusted by teams
                <span className="block text-[#737A1A]">
                  building what comes next.
                </span>
              </h2>

              <span className="hidden shrink-0 pb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 lg:block">
                IMX / TRUST / 001
              </span>
            </div>

            <div className="mt-6 flex items-end justify-between gap-6">
              <p className="max-w-xl text-sm leading-6 text-white/45 sm:text-[15px] sm:leading-6">
                We work with businesses and organizations to create digital
                products, experiences and identities designed to last.
              </p>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 sm:block">
                04 SECTORS
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            TRUST NETWORK
        ======================================================== */}

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          {/* Central connection line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-[8%] right-[8%] top-1/2
              hidden h-px
              bg-gradient-to-r
              from-transparent
              via-[#737A1A]/40
              to-transparent
              lg:block
            "
          />

          {/* Moving signal */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-[8%] top-1/2
              hidden h-px w-24
              bg-gradient-to-r
              from-transparent
              via-[#737A1A]
              to-transparent
              lg:block
              motion-safe:animate-[trustSignal_4s_linear_infinite]
            "
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {trustItems.map((item, index) => (
              <div
                key={item}
                className="group relative"
              >
                <div
                  className="
                    relative
                    min-h-[190px]
                    overflow-hidden
                    rounded-[1.5rem]
                    border border-white/[0.09]
                    bg-white/[0.035]
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-1.5
                    hover:border-[#737A1A]/40
                    hover:bg-[#737A1A]/[0.07]
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                    sm:p-6
                  "
                >
                  {/* Inner glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-[#737A1A]/0
                      blur-[70px]
                      transition-all
                      duration-700
                      group-hover:bg-[#737A1A]/[0.16]
                    "
                  />

                  {/* Top technical line */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-x-5 top-0 h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:via-[#737A1A]/60
                    "
                  />

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="relative flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.2em]
                        text-[#737A1A]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        text-xs
                        text-white/60
                        transition-all
                        duration-500
                        group-hover:rotate-45
                        group-hover:border-[#737A1A]
                        group-hover:bg-[#737A1A]
                        group-hover:text-white
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* =================================================
                      CENTER VISUAL
                  ================================================== */}

                  <div className="relative mt-8">
                    <div
                      className="
                        relative
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-black/40
                        transition-all
                        duration-500
                        group-hover:border-[#737A1A]/60
                        group-hover:shadow-[0_0_30px_rgba(115,122,26,0.18)]
                      "
                    >
                      {/* Core */}
                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#737A1A]
                          shadow-[0_0_15px_rgba(115,122,26,0.8)]
                          transition-transform
                          duration-500
                          group-hover:scale-150
                        "
                      />

                      {/* Orbit */}
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          inset-1
                          rounded-full
                          border
                          border-dashed
                          border-white/10
                          transition-transform
                          duration-700
                          group-hover:rotate-180
                        "
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-5
                        text-[1.55rem]
                        font-medium
                        tracking-[-0.05em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#737A1A]
                        sm:text-[1.7rem]
                      "
                    >
                      {item}
                    </h3>
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                        Sector / {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-mono text-[7px] tracking-[0.15em] text-white/20">
                        IMX
                      </span>
                    </div>

                    <div className="mt-3 h-px w-full overflow-hidden bg-white/[0.08]">
                      <div
                        className="
                          h-full
                          w-[14%]
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
                        border border-white/10
                        transition-all
                        duration-500
                        group-hover:border-[#737A1A]/40
                      "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM META
        ======================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t border-white/10
            pt-5
          "
        >
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="text-[8px] uppercase tracking-[0.22em] text-white/25">
              Built across industries
            </span>
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-white/15">
            01 — 04
          </span>
        </div>
      </div>

      {/* =========================================================
          ANIMATION
      ========================================================== */}

    </section>
  );
}