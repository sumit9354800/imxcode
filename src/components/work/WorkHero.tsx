import Link from "next/link";

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Olive ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1600px] flex-col justify-between px-6 pb-10 pt-12 sm:px-8 lg:px-12 xl:px-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#737A1A]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
            Selected Work
          </p>
        </div>

        {/* Main */}
        <div className="grid items-end gap-12 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Heading */}
          <div>
            <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Work that
              <span className="block text-[#737A1A]">
                moves
              </span>
              <span className="block">
                businesses.
              </span>
            </h1>
          </div>

          {/* Intro */}
          <div className="max-w-lg lg:pb-3">
            <p className="text-base leading-7 text-white sm:text-lg sm:leading-8">
              We build digital experiences across technology, design, branding
              and creative production — turning ideas into work that people
              remember.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#featured-work"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#737A1A] px-6 text-sm font-medium !text-white transition-colors duration-300 hover:bg-white hover:!text-black"
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
                className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-sm font-medium !text-white transition-colors duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:!text-white"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-3">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Focus
            </p>

            <p className="mt-2 text-sm text-white">
              Technology · Design · Creative
            </p>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Capabilities
            </p>

            <p className="mt-2 text-sm text-white">
              Digital Products & Experiences
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Studio
            </p>

            <p className="mt-2 text-sm text-white">
              IMX Digital Studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}