import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { blogCta } from "@/data/blog-cta";

export default function BlogFinalCta() {
  return (
    <section className="bg-[#737A1A] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {blogCta.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            {blogCta.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            {blogCta.description}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={blogCta.primaryAction.href}
            className="group flex items-center justify-between bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:min-w-[190px]"
          >
            {blogCta.primaryAction.label}

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            href={blogCta.secondaryAction.href}
            className="flex items-center justify-center border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:min-w-[190px]"
          >
            {blogCta.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}