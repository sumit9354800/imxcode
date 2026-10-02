import Image from "next/image";
import Link from "next/link";
import { footerGroups } from "@/data/footer";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Main footer */}
        <div className="grid gap-16 border-b border-white/10 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="IMX Digital Studio home"
            >
              <Image
                src="/icons/footer-light-log.png"
                alt="IMX Digital Studio"
                width={110}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/35 sm:text-base">
              A digital studio combining technology, design and creative
              expertise to build meaningful digital experiences.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              Start a project

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/25">
                  {group.title}
                </p>

                <nav className="flex flex-col items-start gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs text-white/45 transition-colors hover:text-white sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} IMX Digital Studio
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-[10px] uppercase tracking-[0.16em] text-white/25 hover:text-white/60"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-[10px] uppercase tracking-[0.16em] text-white/25 hover:text-white/60"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}