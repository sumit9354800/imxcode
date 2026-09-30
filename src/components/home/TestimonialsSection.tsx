import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
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

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
              Client perspective
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
              Built together.
              <span className="block text-[#737A1A]">
                Remembered longer.
              </span>
            </h2>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid border-t border-white/15 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.number}
              className="
                group relative border-b border-white/15 p-7
                transition-colors duration-300
                hover:bg-[#737A1A]/10
                lg:border-b-0 lg:border-r lg:p-10
                lg:last:border-r-0
              "
            >
              {/* Top accent */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                  {testimonial.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    text-2xl text-[#737A1A]
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  “
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mt-16 text-xl leading-8 tracking-[-0.025em] text-white sm:text-2xl sm:leading-9">
                “{testimonial.quote}”
              </blockquote>

              {/* Client */}
              <div className="mt-12 border-t border-white/15 pt-5">
                <p className="text-sm font-medium text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-white">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-[#737A1A]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white">
            Digital experiences made with intent
          </p>
        </div>
      </div>
    </section>
  );
}