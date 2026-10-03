import Image from "next/image";
import Link from "next/link";
import { creativeItems } from "@/data/creative";

export default function CreativeShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient olive glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#737A1A]"
              />

              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
                Creative work
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
              Where ideas become
              <span className="block text-[#737A1A]">visual.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            We shape interfaces, identities and visual content into a
            consistent digital presence that people can recognize and
            remember.
          </p>
        </div>

        {/* Creative showcase */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {creativeItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition-colors duration-300 hover:border-[#737A1A]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/35" />

                {/* Number */}
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[9px] font-medium text-white backdrop-blur-md">
                  {item.number}
                </span>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="
                    absolute right-4 top-4 flex h-9 w-9 items-center
                    justify-center rounded-full border border-[#737A1A]
                    bg-[#737A1A] text-sm text-white
                    opacity-0 translate-y-1
                    transition-all duration-300
                    group-hover:translate-y-0 group-hover:opacity-100
                  "
                >
                  ↗
                </span>
              </div>

              {/* Content */}
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#737A1A]">
                  {item.category}
                </p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="text-white/40 transition-colors duration-300 group-hover:text-[#737A1A]"
                  >
                    →
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/services"
            className="
              group inline-flex items-center gap-3 rounded-full
              border border-white/15 px-5 py-3 text-xs font-medium
              text-white transition-colors duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
            "
          >
            Explore creative services

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