import Link from "next/link";
import { studioPrinciples } from "@/data/studio";

export default function StudioApproachSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Subtle olive ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black sm:text-xs">
              Our approach
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-black">
              One studio.
              <span className="block text-[#737A1A]">
                Many capabilities.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
              IMX brings strategy, design, technology and creative production
              together to create digital experiences from idea to execution.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {studioPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="group relative border-b border-black/10 p-7 sm:border-r lg:border-b-0 lg:p-8"
            >
              {/* Hover accent */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                  {principle.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    border border-[#737A1A]
                    bg-white text-black
                    transition-colors duration-300
                    group-hover:bg-[#737A1A]
                    group-hover:text-white
                  "
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.04em] text-black">
                {principle.title}
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-black">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-black sm:text-base">
            Different disciplines. One connected process. Built around what
            your business actually needs.
          </p>

          <Link
            href="/about"
            className="
              group inline-flex w-fit items-center gap-3
              rounded-full
              border border-black/20
              px-5 py-3
              text-xs font-medium
              text-black
              transition-colors duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:text-white
            "
          >
            <span>Meet the studio</span>

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