
import Link from "next/link";
import { footerGroups } from "@/data/footer";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Olive ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Footer */}
        <div className="grid gap-16 border-b border-white/10 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="IMX Digital Studio home"
            >
              <span className="text-3xl font-semibold tracking-[-0.07em] text-white transition-colors duration-300 group-hover:text-[#737A1A]">
                IMX
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white sm:text-base">
              A digital studio combining technology, design and creative
              expertise to build meaningful digital experiences.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group inline-flex h-13 items-center gap-4 rounded-full bg-black px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#737A1A] hover:text-white"
            >
              <span>Start a project</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#737A1A]">
                  {group.title}
                </p>

                <nav className="flex flex-col items-start gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs font-medium !text-white transition-colors duration-300 hover:!text-[#737A1A] sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            © {new Date().getFullYear()} IMX Digital Studio
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-[10px] font-medium uppercase tracking-[0.16em] !text-white transition-colors duration-300 hover:!text-[#737A1A]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-[10px] font-medium uppercase tracking-[0.16em] !text-white transition-colors duration-300 hover:!text-[#737A1A]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
