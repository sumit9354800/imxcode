import Link from "next/link";
import { contactCTA } from "@/data/contact";

export default function ContactCTASection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Olive ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #737A1A 1px, transparent 1px), linear-gradient(to bottom, #737A1A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-32 sm:px-8 lg:px-12 lg:py-40 xl:px-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#737A1A]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
            {contactCTA.eyebrow}
          </p>
        </div>

        {/* Main */}
        <div className="mt-12 max-w-6xl">
          <h2 className="text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.84] tracking-[-0.08em] text-white">
            {contactCTA.title}
          </h2>

          <p className="mt-10 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
            {contactCTA.description}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          {/* Primary */}
          <Link
            href={contactCTA.primaryHref}
            className="
              group inline-flex h-13 w-fit items-center gap-4
              rounded-full bg-[#737A1A] px-6
              text-sm font-medium !text-white
              transition-colors duration-300
              hover:bg-white hover:!text-black
            "
          >
            <span className="!text-white transition-colors duration-300 group-hover:!text-black">
              {contactCTA.primaryLabel}
            </span>

            <span
              aria-hidden="true"
              className="
                !text-white transition-all duration-200
                group-hover:translate-x-1
                group-hover:!text-black
              "
            >
              ↗
            </span>
          </Link>

          {/* Secondary */}
          <Link
            href={contactCTA.secondaryHref}
            className="
              inline-flex h-13 w-fit items-center
              rounded-full border border-white/20
              px-6 text-sm font-medium !text-white
              transition-colors duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:!text-white
            "
          >
            <span className="!text-white">
              {contactCTA.secondaryLabel}
            </span>
          </Link>
        </div>

        {/* Bottom line */}
        <div className="mt-24 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white">
            IMX Digital Studio
          </p>

          <p className="text-[10px] uppercase tracking-[0.24em] text-white">
            Technology · Design · Creative · Growth
          </p>
        </div>
      </div>
    </section>
  );
}