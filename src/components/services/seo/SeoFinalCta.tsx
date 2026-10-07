import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SeoFinalCta() {
  return (
    <section className="bg-[#737A1A] px-6 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/65">
            Start with visibility
          </span>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Ready to get your business found?
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Let&apos;s build an SEO strategy around your business, your audience
            and the opportunities that matter most.
          </p>
        </div>

        <Link
          href="/contact"
          className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Start a conversation
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}