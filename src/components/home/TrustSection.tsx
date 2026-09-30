const trustItems = [
  "Education",
  "Business",
  "Technology",
  "Digital Commerce",
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Subtle olive ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#737A1A]/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
              Selected Work
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Trusted by teams
              <span className="block text-[#737A1A]">
                building what comes next.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
              We work with businesses and organizations to create digital
              products, experiences and identities that are designed to last.
            </p>
          </div>
        </div>

        {/* Industry Strip */}
        <div className="mt-24 border-y border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div
                key={item}
                className="group relative flex min-h-[150px] items-end border-white/10 p-6 transition-colors duration-300 hover:bg-[#737A1A]/10 sm:border-r sm:last:border-r-0"
              >
                <div>
                  <span className="mb-5 block text-[9px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#737A1A] sm:text-2xl">
                    {item}
                  </h3>
                </div>

                <span className="absolute right-6 top-6 text-sm text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#737A1A]">
                  ↗
                </span>

                {/* Hover accent line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}