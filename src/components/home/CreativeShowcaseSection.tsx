import Image from "next/image";
import Link from "next/link";
import { creativeItems } from "@/data/creative";

export default function CreativeShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Olive ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#737A1A]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
                Creative capabilities
              </p>
            </div>

            <h2 className="mt-8 max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-white">
              Ideas made
              <span className="block text-[#737A1A]">visible.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white sm:text-base sm:leading-7">
            From interfaces and brand systems to graphics, video and motion, we
            create visual experiences that make digital products memorable.
          </p>
        </div>

        {/* Creative Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2">
          {creativeItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0a0a0a] transition-colors duration-300 hover:border-[#737A1A]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#737A1A] bg-black/60 text-[10px] font-medium text-white backdrop-blur-md">
                  {item.number}
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute right-5 top-5
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-[#737A1A]
                    bg-[#737A1A] text-white
                    opacity-0
                    transition-all duration-300
                    group-hover:opacity-100
                  "
                >
                  ↗
                </div>
              </div>

              {/* Content */}
              <div className="flex items-end justify-between gap-5 p-5">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                </div>

                <span className="text-sm text-white">Explore</span>
              </div>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/services"
            className="
              group inline-flex items-center gap-3
              rounded-full
              border border-white/20
              px-5 py-3
              text-xs font-medium
              text-white
              transition-colors duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:text-white
            "
          >
            <span>Explore creative services</span>

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