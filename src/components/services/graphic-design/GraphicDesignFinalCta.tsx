import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GraphicDesignFinalCta() {
  return (
    <section className="bg-[#737A1A] px-6 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/65">
              Make it visual
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Give your ideas
              <span className="block text-white/70">
                a stronger visual voice.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              From campaign graphics to complete visual systems, we create
              design that helps your message get noticed, understood and
              remembered.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Start a project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}