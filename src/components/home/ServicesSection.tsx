import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Olive ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black sm:text-xs">
              What we do
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-black">
              Technology,
              <span className="block text-[#737A1A]">
                design & creative.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
              We combine technology, design, branding, creative production and
              digital growth to build meaningful experiences for ambitious
              businesses.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24 border-t border-black/10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="group relative block border-b border-black/10 py-8 transition-colors duration-300 hover:bg-[#737A1A]/5 sm:py-10 lg:py-11"
              >
                <div className="grid items-center gap-6 lg:grid-cols-[70px_55px_1fr_1.1fr_190px] lg:gap-8">
                  {/* Number */}
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-full
                      border border-black/15 bg-white text-black
                      transition-all duration-300
                      group-hover:border-[#737A1A]
                      group-hover:bg-[#737A1A]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#737A1A]">
                      {service.category}
                    </p>

                    <h3 className="text-2xl font-medium tracking-[-0.04em] text-black transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-6 text-black sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  {/* Tags + Arrow */}
                  <div className="flex items-center justify-between gap-5 lg:justify-end">
                    <div className="hidden flex-wrap justify-end gap-2 lg:flex">
                      {service.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/15 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-full border border-black/15 bg-white text-black
                        transition-all duration-300
                        group-hover:border-[#737A1A]
                        group-hover:bg-[#737A1A]
                        group-hover:text-white
                      "
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black">
            Need a combination of technology, design and creative services for
            a larger digital project? We can build the right team around your
            requirements.
          </p>

          <Link
            href="/services"
            className="
              group inline-flex w-fit items-center gap-3 rounded-full
              border border-black px-5 py-3 text-xs font-medium text-black
              transition-colors duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:text-white
            "
          >
            Explore all services

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