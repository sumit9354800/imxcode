"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import {
  contactDetails,
  contactProjectTypes,
} from "@/data/contact";

function generateVerificationCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export default function ContactForm() {
  const [projectType, setProjectType] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    setVerificationCode(generateVerificationCode());
  }, [formKey]);

  const refreshCode = () => {
    setUserCode("");
    setError("");
    setFormKey((current) => current + 1);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess(false);

    /*
     * Honeypot protection
     */
    if (honeypot.trim() !== "") {
      return;
    }

    /*
     * Project type validation
     */
    if (!projectType) {
      setError("Please select what you need.");
      return;
    }

    /*
     * Verification code validation
     */
    if (userCode.trim() !== verificationCode) {
      setError(
        "The verification code is incorrect. Please try again."
      );

      refreshCode();
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    /*
     * Required field validation
     */
    if (!name || !email || !phone || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,

          // Existing API expects "service"
          service: projectType,

          message,

          // Existing API expects this field
          verificationCode: userCode,

          // Existing API honeypot field
          website: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to send your enquiry right now."
        );
      }

      setSuccess(true);
      setError("");

      /*
       * Reset form fields after successful submission.
       */
      form.reset();
      setProjectType("");
      setUserCode("");

      /*
       * Generate a fresh verification code.
       */
      setFormKey((current) => current + 1);
    } catch (error) {
      console.error("Contact form error:", error);

      setSuccess(false);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="project-form"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          {/* LEFT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
                Start a Project
              </span>
            </div>

            <h2 className="mt-6 max-w-lg text-[clamp(2.4rem,4.5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              Tell us what you&apos;re building.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Give us a little context about your project. You don&apos;t
              need everything figured out yet — we can shape the direction
              together.
            </p>

            {/* Contact Details */}
            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                Prefer to reach us directly?
              </p>

              <div className="mt-5 space-y-4">

                {/* Email */}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#737A1A]">
                    <Mail
                      size={15}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="text-sm text-black/55 transition-colors duration-300 group-hover:text-black">
                    {contactDetails.email}
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#737A1A]">
                    <Phone
                      size={15}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="text-sm text-black/55 transition-colors duration-300 group-hover:text-black">
                    {contactDetails.phone}
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={contactDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#737A1A]">
                    <MessageCircle
                      size={15}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="text-sm text-black/55 transition-colors duration-300 group-hover:text-black">
                    {contactDetails.whatsapp}
                  </span>
                </a>

              </div>
            </div>

            {/* Trust Points */}
            <div className="mt-8 space-y-3 border-t border-black/10 pt-6">

              <div className="flex items-center gap-3">
                <Check
                  size={15}
                  strokeWidth={2}
                  className="text-[#737A1A]"
                />

                <span className="text-xs text-black/45">
                  No fixed package required
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check
                  size={15}
                  strokeWidth={2}
                  className="text-[#737A1A]"
                />

                <span className="text-xs text-black/45">
                  Built around your requirements
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check
                  size={15}
                  strokeWidth={2}
                  className="text-[#737A1A]"
                />

                <span className="text-xs text-black/45">
                  Clear next steps after enquiry
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="border-t border-black/10 pt-8"
          >

            {/* Honeypot */}
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
            >
              <label htmlFor="website">
                Website
              </label>

              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) =>
                  setHoneypot(event.target.value)
                }
              />
            </div>

            {/* Name + Email */}
            <div className="grid gap-8 sm:grid-cols-2">

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Your name
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-[#737A1A]"
                />
              </label>

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-[#737A1A]"
                />
              </label>

            </div>

            {/* Company + Phone */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2">

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Company
                </span>

                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company or organization"
                  className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-[#737A1A]"
                />
              </label>

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Phone
                </span>

                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-[#737A1A]"
                />
              </label>

            </div>

            {/* Project Type */}
            <div className="mt-10">

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                What do you need?
              </span>

              <div className="mt-4 flex flex-wrap gap-2">
                {contactProjectTypes.map((type) => {
                  const active = projectType === type.id;

                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setProjectType(type.id)
                      }
                      className={`border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-black/55 hover:border-[#737A1A] hover:text-black"
                      }`}
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Message */}
            <label className="mt-10 block">

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Tell us about the project
              </span>

              <textarea
                name="message"
                rows={4}
                required
                placeholder="What are you looking to build?"
                className="mt-3 w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/25 focus:border-[#737A1A]"
              />

            </label>

            {/* Verification */}
            <div className="mt-10 border-t border-black/10 pt-7">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end">

                <div className="shrink-0">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    Enter code
                  </span>

                  <div className="mt-3 flex h-12 items-center border border-black/10 bg-black px-5">
                    <span className="select-none text-lg font-semibold tracking-[0.35em] text-[#737A1A]">
                      {verificationCode}
                    </span>
                  </div>
                </div>

                <label className="block flex-1">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    Verification code
                  </span>

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    required
                    autoComplete="off"
                    value={userCode}
                    onChange={(event) =>
                      setUserCode(
                        event.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                    placeholder="Enter the 4-digit code"
                    className="mt-3 w-full border-b border-black/15 bg-transparent px-0 py-3 text-base tracking-[0.15em] outline-none transition-colors placeholder:text-black/25 focus:border-[#737A1A]"
                  />

                </label>

              </div>

              <button
                type="button"
                onClick={refreshCode}
                className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-black/35 transition-colors hover:text-[#737A1A]"
              >
                Generate another code
              </button>

            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 border-l-2 border-[#737A1A] bg-black/[0.03] px-4 py-3">
                <p className="text-xs text-black/60">
                  {error}
                </p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mt-6 flex items-center gap-3 border-l-2 border-[#737A1A] bg-[#737A1A]/10 px-4 py-3">
                <Check
                  size={16}
                  className="shrink-0 text-[#737A1A]"
                />

                <p className="text-xs text-black/65">
                  Your enquiry has been sent successfully.
                  We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {/* Submit */}
            <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-sm text-[11px] leading-5 text-black/35">
                We&apos;ll use your details only to respond
                to your enquiry.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#858c20] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {submitting
                  ? "Sending..."
                  : "Send enquiry"}

                {!submitting && (
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
}