import Image from "next/image";
import Link from "next/link";

const capabilities = [
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Graphic Design",
  "Video & Motion",
];

const verticalLines = Array.from({ length: 21 }, (_, i) => i * 80);
const horizontalLines = Array.from({ length: 12 }, (_, i) => i * 80);

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-white text-black">
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        {verticalLines.map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="900"
            stroke="rgba(0,0,0,0.045)"
            strokeWidth="1"
          />
        ))}

        {horizontalLines.map((y) => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="1600"
            y2={y}
            stroke="rgba(0,0,0,0.045)"
            strokeWidth="1"
          />
        ))}

        {/* Moving vertical lights */}
        {verticalLines.slice(2, 18).map((x, index) => (
          <line
            key={`gv-${x}`}
            x1={x}
            y1="-160"
            x2={x}
            y2="100"
            stroke="#737A1A"
            strokeWidth="2"
            opacity="0"
          >
            <animate
              attributeName="y1"
              from="-160"
              to="900"
              dur="5s"
              begin={`${index * 0.35}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              from="100"
              to="1160"
              dur="5s"
              begin={`${index * 0.35}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.5;0"
              dur="5s"
              begin={`${index * 0.35}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Moving horizontal lights */}
        {horizontalLines.slice(1, 11).map((y, index) => (
          <line
            key={`gh-${y}`}
            x1="-200"
            y1={y}
            x2="100"
            y2={y}
            stroke="#737A1A"
            strokeWidth="2"
            opacity="0"
          >
            <animate
              attributeName="x1"
              from="-200"
              to="1600"
              dur="6s"
              begin={`${index * 0.55}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              from="100"
              to="1900"
              dur="6s"
              begin={`${index * 0.55}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.45;0"
              dur="6s"
              begin={`${index * 0.55}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </svg>

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#737A1A]/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[30%] top-[55%] h-[400px] w-[400px] rounded-full bg-[#737A1A]/[0.025] blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] max-w-[1600px] flex-col px-6 pb-7 pt-10 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            TOP BAR
        ====================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/45 sm:text-xs">
              Digital Studio · Technology · Creative
            </p>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.35em] text-black/25 sm:block">
            IMX / 001
          </span>
        </div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-0 lg:py-4">
          {/* LEFT */}
          <div className="relative z-20">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Built for ambitious brands
              </span>
            </div>

            <h1 className="max-w-[850px] text-[clamp(4rem,9vw,9.5rem)] font-semibold leading-[0.81] tracking-[-0.085em]">
              <span className="block">We build</span>

              <span className="relative block text-[#737A1A]">
                digital
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-7px] left-0 h-[3px] w-[34%] bg-[#737A1A]"
                />
              </span>

              <span className="block">experiences.</span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
              IMX is a digital studio combining technology, design and creative
              expertise to build premium digital experiences for ambitious
              businesses and organizations worldwide.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center gap-4 rounded-full bg-black px-6 text-sm font-medium !text-white transition-all duration-300 hover:bg-[#737A1A]"
              >
                <span className="!text-white">Start a project</span>

                <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/work"
                className="inline-flex h-13 items-center rounded-full border border-black/15 bg-white px-6 text-sm font-medium !text-black transition-all duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:!text-white"
              >
                Explore our work
              </Link>
            </div>
          </div>

          {/* =====================================================
              3D VISUAL
          ====================================================== */}

          <div className="relative hidden h-[590px] items-center justify-center lg:flex">
            {/* Main 3D stage */}
            <div
              className="relative h-[470px] w-[470px]"
              style={{ perspective: "1200px" }}
            >
              {/* Outer orbit */}
              <div
                className="absolute inset-[-35px] rounded-full border border-black/[0.07]"
                style={{
                  transform: "rotateX(68deg) rotateZ(-18deg)",
                }}
              />

              {/* Olive orbit */}
              <div
                className="absolute inset-[-5px] rounded-full border border-[#737A1A]/30"
                style={{
                  transform: "rotateX(68deg) rotateZ(25deg)",
                }}
              />

              {/* Dashed orbit */}
              <div
                className="absolute inset-[25px] animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-[#737A1A]/20"
                style={{
                  transform: "rotateX(68deg)",
                }}
              />

              {/* Vertical axis */}
              <div className="absolute left-1/2 top-[-20px] h-[510px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

              {/* Horizontal axis */}
              <div className="absolute left-[-20px] top-1/2 h-px w-[510px] -translate-y-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              {/* =================================================
                  3D IMX CORE
              ================================================== */}

              <div
                className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    "translate(-50%, -50%) rotateX(18deg) rotateY(-28deg)",
                }}
              >
                {/* Back glow */}
                <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/20 blur-[65px]" />

                {/* Glass back plate */}
                <div
                  className="absolute inset-[18px] rounded-[2rem] border border-black/10 bg-white/50 backdrop-blur-xl"
                  style={{
                    transform: "translateZ(-35px)",
                  }}
                />

                {/* Main black block */}
                <div
                  className="absolute inset-[38px] rounded-[1.6rem] bg-black shadow-[35px_45px_90px_rgba(0,0,0,0.22)]"
                  style={{
                    transform: "translateZ(35px)",
                  }}
                >
                  {/* Inner border */}
                  <div className="absolute inset-3 rounded-[1.25rem] border border-white/10" />

                  {/* Olive inner core */}
                  <div className="absolute inset-[28px] rounded-[1rem] border border-[#737A1A]/30" />

                  {/* Core glow */}
                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/25 blur-[25px]" />

                  {/* IMX symbol */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/icons/favicon-light.png"
                      alt="IMX Digital Studio"
                      width={110}
                      height={110}
                      className="h-[76px] w-auto object-contain"
                      priority
                    />
                  </div>

                  {/* Technical data */}
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-[7px] uppercase tracking-[0.3em] text-[#737A1A]">
                        Digital Studio
                      </p>

                      <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/30">
                        Technology / Design
                      </p>
                    </div>

                    <span className="text-[9px] tracking-[0.25em] text-white/30">
                      01
                    </span>
                  </div>
                </div>

                {/* Top 3D plane */}
                <div
                  className="absolute left-[38px] top-[2px] h-[36px] w-[184px] rounded-t-[1rem] bg-[#737A1A]"
                  style={{
                    transformOrigin: "bottom center",
                    transform: "rotateX(90deg)",
                  }}
                />

                {/* Right 3D plane */}
                <div
                  className="absolute right-[2px] top-[38px] h-[184px] w-[36px] rounded-r-[1rem] bg-[#373E01]"
                  style={{
                    transformOrigin: "left center",
                    transform: "rotateY(90deg)",
                  }}
                />
              </div>

              {/* =================================================
                  FLOATING UI CARDS
              ================================================== */}

              <div
                className="
    absolute
    left-[56%]
    top-[48%]
    z-30
    w-[150px]
    -translate-y-1/2
    rounded-2xl
    border border-black/10
    bg-white/90
    p-5
    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
    backdrop-blur-xl
    transition-transform
    duration-500
    hover:-translate-y-[55%]
  "
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-[#737A1A]" />

                  <span className="text-[8px] font-medium tracking-[0.2em] text-black/30">
                    01
                  </span>
                </div>

                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-black/70">
                  Strategy
                </p>

                <div className="mt-4 h-px w-full bg-black/10" />

                <p className="mt-3 text-[10px] leading-5 text-black/45">
                  Ideas into digital systems.
                </p>
              </div>

              <div className="absolute bottom-[62px] right-[-18px] w-[135px] rounded-2xl border border-black/10 bg-black p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-white/40">
                    Build
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                </div>

                <p className="mt-5 text-lg font-medium tracking-[-0.04em] !text-white">
                  Digital
                  <br />
                  systems.
                </p>

                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] bg-[#737A1A]" />
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute right-[55px] top-[35px] rounded-full border border-[#737A1A]/20 bg-[#737A1A]/[0.06] px-4 py-2 backdrop-blur-md">
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#737A1A]">
                  Creative
                </span>
              </div>

              <div className="absolute bottom-[55px] left-[65px] rounded-full border border-black/10 bg-white/80 px-4 py-2 backdrop-blur-md">
                <span className="text-[8px] uppercase tracking-[0.25em] text-black/45">
                  Technology
                </span>
              </div>

              {/* Orbit points */}
              <span className="absolute left-[22px] top-[45%] h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_20px_rgba(115,122,26,0.7)]" />

              <span className="absolute right-[38px] top-[28%] h-1.5 w-1.5 rounded-full bg-black/50" />

              <span className="absolute bottom-[38px] right-[36%] h-1.5 w-1.5 rounded-full bg-[#737A1A]/70" />
            </div>
          </div>
        </div>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <div className="border-t border-black/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-xs"
              >
                <span className="text-[#737A1A]">
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
