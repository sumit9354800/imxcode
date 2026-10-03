"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

function generateCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

export default function ContactFormSection() {
  const [code, setCode] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    verificationCode: "",
    website: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  useEffect(() => {
    setCode(generateCode());
  }, []);

  function refreshCode() {
    setCode(generateCode());

    setFormData((prev) => ({
      ...prev,
      verificationCode: "",
    }));

    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    /*
     * Honeypot
     */
    if (formData.website) {
      return;
    }

    /*
     * Verification
     */
    if (!code || formData.verificationCode !== code) {
      setError("Verification code is incorrect.");
      refreshCode();
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit the form.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        verificationCode: "",
        website: "",
      });

      setCode(generateCode());
    } catch (error) {
      setStatus("error");

      setError(
        error instanceof Error ? error.message : "Unable to submit the form.",
      );
    }
  }

  /*
   * =============================================================
   * SUCCESS STATE
   * =============================================================
   */

  if (status === "success") {
    return (
      <section className="relative overflow-hidden bg-white text-black">
        {/* Background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-52 top-[-120px]
            h-[520px] w-[520px]
            rounded-full
            bg-[#737A1A]/10
            blur-[160px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            opacity-40
            [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="mx-auto max-w-3xl">
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-black/10
                bg-white
                p-8
                text-center
                shadow-[0_30px_100px_rgba(0,0,0,0.08)]
                sm:p-14
              "
            >
              {/* Olive top line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#737A1A]" />

              <div
                className="
                  mx-auto flex h-16 w-16
                  items-center justify-center
                  rounded-full
                  border border-[#737A1A]/20
                  bg-[#737A1A]/[0.06]
                "
              >
                <CheckCircle2
                  className="h-7 w-7 text-[#737A1A]"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.25em] text-[#737A1A]">
                Transmission received
              </p>

              <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                Thanks for
                <span className="block text-[#737A1A]">reaching out.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/45 sm:text-base">
                We have received your enquiry and will get back to you soon.
              </p>

              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setError("");
                  setCode(generateCode());
                }}
                className="
                  mt-8
                  inline-flex
                  h-11
                  items-center
                  gap-3
                  rounded-full
                  bg-[#737A1A]
                  px-5
                  text-sm
                  font-medium
                  !text-white
                  transition-all
                  duration-300
                  hover:bg-black
                "
              >
                Send another enquiry
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-56 top-[-100px]
          h-[560px] w-[560px]
          rounded-full
          bg-[#737A1A]/[0.09]
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-60 bottom-[-220px]
          h-[500px] w-[500px]
          rounded-full
          bg-[#737A1A]/[0.05]
          blur-[150px]
        "
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-40
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative mx-auto max-w-[1600px]
          px-5 py-16
          sm:px-8 sm:py-20
          lg:px-12 lg:py-24
          xl:px-16
        "
      >
        {/* Top meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 sm:text-[10px]">
              Start a project
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-black/20 sm:block">
            IMX / CONTACT / 001
          </span>
        </div>

        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          {/* =====================================================
              LEFT / PROJECT INTAKE CORE
          ====================================================== */}

          <div className="lg:sticky lg:top-24">
            <h2
              className="
                max-w-xl
                text-[clamp(3rem,6vw,6.5rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.075em]
              "
            >
              Let&apos;s build
              <span className="block text-[#737A1A]">something</span>
              great.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-black/40 sm:text-base sm:leading-8">
              Tell us what you are building, what you need help with, or simply
              share your idea. We&apos;ll take it from there.
            </p>

            {/* =================================================
                3D CORE
            ================================================== */}
            <div className="relative mt-8 hidden sm:block lg:mt-10">
              <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-[#fafafa] p-6">
                {/* Technical background */}
                <div
                  aria-hidden="true"
                  className="
        pointer-events-none absolute inset-0 opacity-60
        [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
        [background-size:28px_28px]
      "
                />

                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  className="
        pointer-events-none absolute
        -right-20 -top-20
        h-40 w-40
        rounded-full
        bg-[#737A1A]/[0.07]
        blur-3xl
      "
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#737A1A]">
                      Contact / Direct
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/25">
                      IMX / 001
                    </span>
                  </div>

                  {/* Contact channels */}
                  <div className="mt-6 grid gap-3">
                    {/* Email */}
                    <a
                      href="mailto:contact@imxcode.in"
                      className="
            group flex items-center justify-between
            rounded-xl
            border border-black/[0.07]
            bg-white
            px-4 py-4
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-[#737A1A]/30
            hover:shadow-[0_14px_35px_rgba(115,122,26,0.10)]
          "
                    >
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/30">
                          Email
                        </span>

                        <p className="mt-1 text-sm font-medium text-black/75">
                          contact@imxcode.in
                        </p>
                      </div>

                      <span
                        className="
              flex h-8 w-8 items-center justify-center
              rounded-full
              border border-black/[0.08]
              text-sm text-black/45
              transition-all duration-300
              group-hover:border-[#737A1A]/30
              group-hover:bg-[#737A1A]
              group-hover:text-white
            "
                      >
                        ↗
                      </span>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+917678289882"
                      className="
            group flex items-center justify-between
            rounded-xl
            border border-black/[0.07]
            bg-white
            px-4 py-4
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-[#737A1A]/30
            hover:shadow-[0_14px_35px_rgba(115,122,26,0.10)]
          "
                    >
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/30">
                          Phone
                        </span>

                        <p className="mt-1 text-sm font-medium text-black/75">
                          +91 76782 89882
                        </p>
                      </div>

                      <span
                        className="
              flex h-8 w-8 items-center justify-center
              rounded-full
              border border-black/[0.08]
              text-sm text-black/45
              transition-all duration-300
              group-hover:border-[#737A1A]/30
              group-hover:bg-[#737A1A]
              group-hover:text-white
            "
                      >
                        ↗
                      </span>
                    </a>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/25">
                      Direct communication
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#737A1A]/70">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile technical metadata */}
            <div className="mt-8 grid grid-cols-2 gap-2 sm:hidden">
              <div className="rounded-xl border border-black/[0.08] bg-black/[0.02] p-3">
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/30">
                  Process
                </p>
                <p className="mt-2 text-xs font-medium">Strategy → Build</p>
              </div>

              <div className="rounded-xl border border-black/[0.08] bg-black/[0.02] p-3">
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/30">
                  Response
                </p>
                <p className="mt-2 text-xs font-medium">Project review</p>
              </div>
            </div>
          </div>

          {/* =====================================================
              FORM
          ====================================================== */}

          <form
            onSubmit={handleSubmit}
            className="
              relative
              overflow-hidden
              rounded-[1.8rem]
              border border-black/[0.09]
              bg-white
              p-5
              shadow-[0_25px_90px_rgba(0,0,0,0.07)]
              sm:p-7
              lg:p-9
            "
          >
            {/* Top accent */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#737A1A]" />

            {/* Form header */}
            <div className="mb-7 flex items-center justify-between border-b border-black/[0.08] pb-5">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#737A1A]">
                  Project intake
                </p>

                <p className="mt-1 text-xs text-black/35">
                  Tell us about your project.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/25">
                  Secure
                </span>
              </div>
            </div>

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-black/55"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border border-black/10
                    bg-[#f8f8f6]
                    px-4
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-black/25
                    focus:border-[#737A1A]
                    focus:bg-white
                    focus:shadow-[0_0_0_3px_rgba(115,122,26,0.06)]
                  "
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-black/55"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border border-black/10
                    bg-[#f8f8f6]
                    px-4
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-black/25
                    focus:border-[#737A1A]
                    focus:bg-white
                    focus:shadow-[0_0_0_3px_rgba(115,122,26,0.06)]
                  "
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone + Service */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-black/55"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      phone: event.target.value,
                    })
                  }
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border border-black/10
                    bg-[#f8f8f6]
                    px-4
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-black/25
                    focus:border-[#737A1A]
                    focus:bg-white
                    focus:shadow-[0_0_0_3px_rgba(115,122,26,0.06)]
                  "
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-black/55"
                >
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      service: event.target.value,
                    })
                  }
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border border-black/10
                    bg-[#f8f8f6]
                    px-4
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#737A1A]
                    focus:bg-white
                    focus:shadow-[0_0_0_3px_rgba(115,122,26,0.06)]
                  "
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Web Applications">Web Applications</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="SEO & Digital Growth">
                    SEO & Digital Growth
                  </option>
                  <option value="Website Maintenance">
                    Website Maintenance
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-black/55"
              >
                Project details
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    message: event.target.value,
                  })
                }
                className="
                  min-h-[130px]
                  w-full
                  resize-none
                  rounded-xl
                  border border-black/10
                  bg-[#f8f8f6]
                  p-4
                  text-sm
                  leading-6
                  text-black
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-black/25
                  focus:border-[#737A1A]
                  focus:bg-white
                  focus:shadow-[0_0_0_3px_rgba(115,122,26,0.06)]
                "
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Honeypot */}
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="website">Website</label>

              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    website: event.target.value,
                  })
                }
              />
            </div>

            {/* Verification */}
            <div className="mt-5 rounded-2xl border border-black/[0.08] bg-[#f8f8f6] p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={13} className="text-[#737A1A]" />

                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/55">
                      Verification
                    </p>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className="
                        select-none
                        rounded-lg
                        border border-[#737A1A]
                        bg-[#737A1A]
                        px-4 py-2
                        font-mono
                        text-lg
                        font-semibold
                        tracking-[0.3em]
                        !text-white
                      "
                      aria-live="polite"
                    >
                      {code || "----"}
                    </span>

                    <button
                      type="button"
                      onClick={refreshCode}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-[10px]
                        font-medium
                        !text-black/45
                        transition-colors
                        hover:!text-[#737A1A]
                      "
                    >
                      <RefreshCw size={11} />
                      Refresh
                    </button>
                  </div>
                </div>

                <input
                  id="verificationCode"
                  name="verificationCode"
                  required
                  inputMode="numeric"
                  maxLength={4}
                  value={formData.verificationCode}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      verificationCode: event.target.value.replace(/\D/g, ""),
                    })
                  }
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border border-black/10
                    bg-white
                    px-4
                    font-mono
                    text-sm
                    text-black
                    outline-none
                    placeholder:text-black/25
                    transition-all
                    focus:border-[#737A1A]
                    sm:max-w-[180px]
                  "
                  placeholder="Enter code"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <p role="alert" className="text-xs font-medium text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading" || !code}
              className="
                group
                mt-5
                inline-flex
                h-13
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#737A1A]
                px-6
                text-sm
                font-medium
                !text-white
                shadow-[0_15px_40px_rgba(115,122,26,0.15)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-black
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <span className="!text-white">
                {status === "loading" ? "Sending..." : "Send enquiry"}
              </span>

              {status !== "loading" && (
                <ArrowUpRight
                  className="
                    h-4 w-4
                    !text-white
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-black/[0.07] pt-4">
              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/20">
                IMX / Secure intake
              </p>

              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/20">
                Technology · Design · Creative
              </p>
            </div>
          </form>
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[8px] uppercase tracking-[0.22em] text-black/25">
              Start with an idea
            </p>
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-black/15">
            CONTACT / 001
          </span>
        </div>
      </div>
    </section>
  );
}
