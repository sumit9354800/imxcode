import Link from "next/link";

const capabilities = [
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Graphic Design",
  "Video & Motion",
];

const verticalLines = Array.from({ length: 21 }, (_, index) => index * 80);
const horizontalLines = Array.from({ length: 12 }, (_, index) => index * 80);

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-white text-black">
      {/* =========================================================
          BASE GRID
      ========================================================== */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        {/* Base vertical grid */}
        {verticalLines.map((x) => (
          <line
            key={`base-v-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="900"
            stroke="rgba(0,0,0,0.055)"
            strokeWidth="1"
          />
        ))}

        {/* Base horizontal grid */}
        {horizontalLines.map((y) => (
          <line
            key={`base-h-${y}`}
            x1="0"
            y1={y}
            x2="1600"
            y2={y}
            stroke="rgba(0,0,0,0.055)"
            strokeWidth="1"
          />
        ))}

        {/* =======================================================
            MOVING LIGHT — VERTICAL
        ======================================================== */}
        {verticalLines.map((x, index) => (
          <line
            key={`glow-v-${x}`}
            x1={x}
            y1="-120"
            x2={x}
            y2="120"
            stroke="url(#verticalGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          >
            <animate
              attributeName="y1"
              from="-120"
              to="900"
              dur="4.8s"
              begin={`${(index % 7) * 0.55}s`}
              repeatCount="indefinite"
            />

            <animate
              attributeName="y2"
              from="120"
              to="1140"
              dur="4.8s"
              begin={`${(index % 7) * 0.55}s`}
              repeatCount="indefinite"
            />

            <animate
              attributeName="opacity"
              values="0;0.9;0.9;0"
              dur="4.8s"
              begin={`${(index % 7) * 0.55}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* =======================================================
            MOVING LIGHT — HORIZONTAL
        ======================================================== */}
        {horizontalLines.map((y, index) => (
          <line
            key={`glow-h-${y}`}
            x1="-180"
            y1={y}
            x2="180"
            y2={y}
            stroke="url(#horizontalGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          >
            <animate
              attributeName="x1"
              from="-180"
              to="1600"
              dur="5.5s"
              begin={`${(index % 6) * 0.7 + 0.4}s`}
              repeatCount="indefinite"
            />

            <animate
              attributeName="x2"
              from="180"
              to="1960"
              dur="5.5s"
              begin={`${(index % 6) * 0.7 + 0.4}s`}
              repeatCount="indefinite"
            />

            <animate
              attributeName="opacity"
              values="0;0.85;0.85;0"
              dur="5.5s"
              begin={`${(index % 6) * 0.7 + 0.4}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* =======================================================
            GRID LIGHT GRADIENTS
        ======================================================== */}
        <defs>
          <linearGradient id="verticalGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#737A1A" stopOpacity="0" />
            <stop offset="40%" stopColor="#737A1A" stopOpacity="0" />
            <stop offset="50%" stopColor="#737A1A" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#737A1A" stopOpacity="0" />
            <stop offset="100%" stopColor="#737A1A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="horizontalGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#737A1A" stopOpacity="0" />
            <stop offset="40%" stopColor="#737A1A" stopOpacity="0" />
            <stop offset="50%" stopColor="#737A1A" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#737A1A" stopOpacity="0" />
            <stop offset="100%" stopColor="#737A1A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* =========================================================
          AMBIENT LIGHT
      ========================================================== */}

      {/* Center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/[0.035] blur-[140px]"
      />

      {/* Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#737A1A]/[0.035] blur-3xl"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] max-w-[1600px] flex-col px-6 pb-8 pt-12 sm:px-8 lg:px-12 xl:px-16">
        {/* Top label */}
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#737A1A]/50" />

          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/45 sm:text-xs">
            Digital Studio · Technology · Creative
          </p>
        </div>

        {/* Main hero */}
        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-10">
          {/* LEFT */}
          <div className="relative z-10 max-w-[850px]">
            <h1 className="text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              <span className="block text-black">We build</span>

              <span className="relative block">
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-[7px] text-[#373E01]"
                >
                  digital
                </span>

                <span
                  aria-hidden="true"
                  className="absolute left-[3px] top-[3px] text-[#5d6415]"
                >
                  digital
                </span>

                <span className="relative text-[#737A1A]">digital</span>
              </span>

              <span className="block text-black">experiences.</span>
            </h1>

            <div className="mt-10 max-w-xl">
              <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                IMX is a digital studio combining technology, design and
                creative expertise to build premium digital experiences for
                ambitious businesses and organizations worldwide.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* Primary */}
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center gap-4 rounded-full bg-black px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#737A1A] hover:text-white"
              >
                <span className="text-white">Start a project</span>

                <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* Secondary */}
              <Link
                href="/work"
                className="group inline-flex h-13 items-center rounded-full border border-black/15 bg-white px-6 text-sm font-medium text-black transition-colors duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:text-white"
              >
                <span className="text-black transition-colors duration-300 group-hover:text-white">
                  Explore our work
                </span>
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
          <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">
            <div className="relative flex h-[390px] w-[390px] items-center justify-center">
              {/* Orbit circles */}
              <div className="absolute inset-0 rounded-full border border-black/[0.10]" />

              <div className="absolute inset-[42px] rounded-full border border-black/[0.08]" />

              <div className="absolute inset-[85px] rounded-full border border-[#737A1A]/[0.12]" />

              {/* Rotating dashed orbit */}
              <div className="absolute inset-[-25px] animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-[#737A1A]/20" />

              {/* Core */}
              <div className="relative h-44 w-44 rotate-12 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:rotate-0">
                <div className="absolute inset-3 border border-white/15" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    IMX
                  </span>

                  <span className="text-2xl font-light text-white">01</span>
                </div>
              </div>

              {/* Design */}
              <div className="absolute left-0 top-[18%] rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-black/60 shadow-sm backdrop-blur-sm">
                Design
              </div>

              {/* Technology */}
              <div className="absolute bottom-[15%] right-[-8%] rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-black/60 shadow-sm backdrop-blur-sm">
                Technology
              </div>

              {/* Accent dot */}
              <div className="absolute right-[5%] top-[8%] h-2 w-2 rounded-full bg-[#737A1A]" />
            </div>
          </div>
        </div>

        {/* Bottom capabilities */}
        <div className="border-t border-black/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-xs"
              >
                <span className="text-[#737A1A]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
