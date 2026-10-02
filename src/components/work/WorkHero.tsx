import Link from "next/link";

export default function WorkHero() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-black text-white">
      {/* =========================================================
          AMBIENT LIGHT
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[#737A1A]/10 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.06] blur-[140px]"
      />

      {/* =========================================================
          GRID
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Grid glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(115,122,26,0.16), transparent 32%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1600px] flex-col px-6 pb-8 pt-10 sm:px-8 lg:px-12 xl:px-16">
        {/* =======================================================
            TOP
        ======================================================= */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/60 sm:text-xs">
              Selected Work
            </p>
          </div>

          <p className="hidden text-[9px] uppercase tracking-[0.28em] text-white/25 sm:block">
            IMX / 2026
          </p>
        </div>

        {/* =======================================================
            MAIN
        ======================================================= */}

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-12">
          {/* LEFT */}
          <div className="relative z-10">
            <h1 className="max-w-6xl text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.8] tracking-[-0.085em]">
              Work that
              <span className="block text-[#737A1A]">
                moves
              </span>
              <span className="block">
                businesses.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              We build digital experiences across technology, design, branding
              and creative production — turning ideas into work that people
              remember.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#featured-work"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#737A1A] px-6 text-sm font-medium !text-white transition-all duration-300 hover:bg-white hover:!text-black"
              >
                Explore our work

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-1"
                >
                  ↓
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-medium !text-white transition-all duration-300 hover:border-[#737A1A] hover:bg-[#737A1A]"
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT — 3D OBJECT
          ===================================================== */}

          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
            {/* Outer ring */}
            <div
              aria-hidden="true"
              className="absolute h-[300px] w-[300px] rounded-full border border-[#737A1A]/20 sm:h-[400px] sm:w-[400px]"
            />

            <div
              aria-hidden="true"
              className="absolute h-[360px] w-[360px] rounded-full border border-white/[0.06] sm:h-[480px] sm:w-[480px]"
            />

            {/* Orbit */}
            <div
              aria-hidden="true"
              className="absolute h-[330px] w-[330px] rounded-full border border-[#737A1A]/30 [transform:rotateX(65deg)_rotateZ(-20deg)] sm:h-[440px] sm:w-[440px]"
            />

            {/* Orbit dot */}
            <div
              aria-hidden="true"
              className="absolute h-[330px] w-[330px] animate-[spin_12s_linear_infinite] sm:h-[440px] sm:w-[440px]"
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#737A1A] shadow-[0_0_25px_rgba(115,122,26,0.9)]" />
            </div>

            {/* 3D sphere */}
            <div
              aria-hidden="true"
              className="relative h-[220px] w-[220px] rounded-full sm:h-[290px] sm:w-[290px]"
              style={{
                background:
                  "radial-gradient(circle at 32% 25%, #d9dcaa 0%, #737A1A 20%, #424609 48%, #171900 72%, #050505 100%)",
                boxShadow:
                  "inset -35px -35px 65px rgba(0,0,0,0.75), inset 20px 15px 40px rgba(255,255,255,0.12), 0 0 90px rgba(115,122,26,0.18)",
              }}
            >
              {/* Surface highlight */}
              <div
                className="absolute left-[18%] top-[14%] h-[25%] w-[35%] rounded-full bg-white/15 blur-xl"
                aria-hidden="true"
              />

              {/* Inner ring */}
              <div
                className="absolute inset-[16%] rounded-full border border-white/10"
                aria-hidden="true"
              />

              {/* Core */}
              <div
                className="absolute left-1/2 top-1/2 h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 blur-[2px]"
                aria-hidden="true"
              />
            </div>

            {/* Floating labels */}
            <div className="absolute left-[4%] top-[20%] rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
              <span className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                Digital
              </span>
            </div>

            <div className="absolute bottom-[17%] right-[2%] rounded-full border border-[#737A1A]/30 bg-[#737A1A]/10 px-4 py-2 backdrop-blur-md">
              <span className="text-[8px] uppercase tracking-[0.22em] text-[#737A1A]">
                Creative
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM METADATA
        ======================================================= */}

        <div className="grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-3">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Focus
            </p>

            <p className="mt-2 text-sm text-white/65">
              Technology · Design · Creative
            </p>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Capabilities
            </p>

            <p className="mt-2 text-sm text-white/65">
              Digital Products & Experiences
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Studio
            </p>

            <p className="mt-2 text-sm text-white/65">
              IMX Creative Tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}