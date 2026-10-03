import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#737A1A] text-black">
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <div className="absolute left-[20%] top-0 h-full w-px bg-black/10" />
        <div className="absolute right-[20%] top-0 h-full w-px bg-black/10" />
        <div className="absolute top-1/2 h-px w-full bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-black/60" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
            Start a Project
          </span>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <h2 className="max-w-4xl text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Have a project in mind?
            <br />
            Let&apos;s build it.
          </h2>

          <div>
            <p className="max-w-md text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
              Tell us what you&apos;re building, what you&apos;re trying to
              achieve and where you need help. We&apos;ll figure out the right
              approach together.
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-black px-5 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Meta */}
        <div className="mt-16 flex flex-col gap-3 border-t border-black/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
            Technology · Design · Creative
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
            IMX / Services
          </span>
        </div>
      </div>
    </section>
  );
}