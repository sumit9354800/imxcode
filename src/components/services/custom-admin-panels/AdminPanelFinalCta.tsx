import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AdminPanelFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#737A1A] text-black">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <div className="absolute left-[18%] top-0 h-full w-px bg-black/10" />
        <div className="absolute right-[22%] top-0 h-full w-px bg-black/10" />
        <div className="absolute top-1/2 h-px w-full bg-black/10" />

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-black/10" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-black/60" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
            Build Your System
          </span>
        </div>

        {/* Main */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
          <h2 className="max-w-5xl text-[clamp(2.8rem,5.5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Still managing
            <br />
            everything manually?
          </h2>

          <div>
            <p className="max-w-md text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
              Tell us where your team is losing time, what needs to be
              controlled and which workflows need improvement. We&apos;ll turn
              the process into a system built around your business.
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-black px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-3 border-t border-black/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
            Dashboards · Data · Workflow · Control
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
            IMX / Custom Admin Panels
          </span>
        </div>
      </div>
    </section>
  );
}