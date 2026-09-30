import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { contactActions } from "@/data/contact";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${contactActions.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:scale-105"
      >
        <FaWhatsapp className="h-6 w-6" color="green" aria-hidden="true" />
      </a>

      {/* Call */}
      <a
        href={`tel:+91${contactActions.phone}`}
        aria-label={`Call us at ${contactActions.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-black shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:scale-105"
      >
        <FiPhone className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
      </a>
    </div>
  );
}
