import { websiteMaintenanceProcess } from "@/data/services/website-maintenance";

export default function WebsiteMaintenanceProcess() {
  return (
    <section className="bg-white px-6 py-20 text-black sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Our maintenance process
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Keep it healthy.
              <span className="block text-[#737A1A]">
                Keep it improving.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/50 lg:ml-auto">
            We treat maintenance as an ongoing partnership — understanding
            what needs attention today while preparing the website for what
            comes next.
          </p>
        </div>

        {/* Process timeline */}
        <div className="mt-16 border-t border-black/10">
          {websiteMaintenanceProcess.map((step, index) => (
            <div
              key={step.number}
              className="group grid gap-6 border-b border-black/10 py-8 transition-colors hover:bg-black/[0.02] sm:grid-cols-[90px_220px_1fr] sm:items-start sm:gap-8 lg:py-10"
            >
              {/* Number */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-[#737A1A]">
                  {step.number}
                </span>

                {index < websiteMaintenanceProcess.length - 1 && (
                  <span className="hidden h-px w-8 bg-black/10 sm:block" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-2xl text-sm leading-7 text-black/50 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black/45">
            Your website should not only work today. It should stay reliable
            as your business, content and technology change.
          </p>

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#737A1A]">
            Assess → Maintain → Improve → Support
          </span>
        </div>
      </div>
    </section>
  );
}