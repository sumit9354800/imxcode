import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { footerGroups } from "@/data/footer";

const whatsappUrl = "https://wa.me/917780819304";

// Replace this with your actual Instagram profile URL.
const instagramUrl = "https://www.instagram.com/imxcode0102/";

// Replace this with the actual deployed India Travel Safari landing page URL.
const landingPageUrl = "/resources";

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

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45 sm:text-base">
              A digital studio combining technology, design and creative
              expertise to build meaningful digital experiences.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#737A1A]"
            >
              Start a project
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with IMX Digital Studio on WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white"
              >
                <FaWhatsapp size={21} />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow IMX Digital Studio on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white"
              >
                <FaInstagram size={21} />
              </a>
            </div>
          </div>

          {/* Footer navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                  {group.title}
                </p>

                <nav
                  aria-label={`${group.title} footer links`}
                  className="flex flex-col items-start gap-3"
                >
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs text-white/55 transition-colors hover:text-white sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Featured landing page */}
            <div>
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Featured Project
              </p>

              <a
                href={landingPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-white sm:text-sm"
              >
               Resources
                <FaArrowUpRightFromSquare
                  size={10}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            © {new Date().getFullYear()} IMX Digital Studio
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-[10px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-[10px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
