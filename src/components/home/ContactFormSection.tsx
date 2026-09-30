"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function generateCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

export default function ContactFormSection() {
  /*
   * IMPORTANT:
   * Do NOT generate Math.random() during the initial render.
   * Server and client must render the same HTML during hydration.
   */
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

  /*
   * Generate the verification code only after the component
   * has mounted on the client.
   */
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
        throw new Error(
          data.message || "Unable to submit the form."
        );
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
        error instanceof Error
          ? error.message
          : "Unable to submit the form."
      );
    }
  }

  /*
   * Success state
   */
  if (status === "success") {
    return (
      <section className="relative overflow-hidden bg-white text-black">
        {/* Olive ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-[1600px] px-6 py-28 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-black/10 bg-white p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.06)] sm:p-16">
            <CheckCircle2 className="mx-auto mb-6 h-12 w-12 text-[#737A1A]" />

            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-black sm:text-6xl">
              Thanks for reaching out.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-black">
              We have received your enquiry and will get back to you soon.
            </p>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setError("");
                setCode(generateCode());
              }}
              className="mt-8 rounded-full bg-[#737A1A] px-6 py-3 text-sm font-medium !text-white transition-colors duration-300 hover:bg-black hover:!text-white"
            >
              Send another enquiry
            </button>
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
          OLIVE AMBIENT GLOW
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* =====================================================
              LEFT
          ====================================================== */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#737A1A]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-black sm:text-xs">
                Start a project
              </span>
            </div>

            <h2 className="mt-8 max-w-xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-black">
              Let&apos;s build
              <span className="block text-[#737A1A]">
                something
              </span>
              great.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-black sm:text-lg sm:leading-8">
              Tell us what you are building, what you need help with, or
              simply share your idea. We&apos;ll take it from there.
            </p>
          </div>

          {/* =====================================================
              FORM
          ====================================================== */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10"
          >
            {/* ===================================================
                NAME + EMAIL
            ==================================================== */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-black"
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
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 text-sm text-black outline-none placeholder:text-black focus:border-[#737A1A]"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-black"
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
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 text-sm text-black outline-none placeholder:text-black focus:border-[#737A1A]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* ===================================================
                PHONE + SERVICE
            ==================================================== */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-black"
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
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 text-sm text-black outline-none placeholder:text-black focus:border-[#737A1A]"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-black"
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
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f6] px-4 text-sm text-black outline-none focus:border-[#737A1A]"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Web Applications">
                    Web Applications
                  </option>
                  <option value="E-commerce">
                    E-commerce
                  </option>
                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                  <option value="Branding">
                    Branding
                  </option>
                  <option value="Graphic Design">
                    Graphic Design
                  </option>
                  <option value="Video Editing">
                    Video Editing
                  </option>
                  <option value="Motion Graphics">
                    Motion Graphics
                  </option>
                  <option value="SEO & Digital Growth">
                    SEO & Digital Growth
                  </option>
                  <option value="Website Maintenance">
                    Website Maintenance
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>

            {/* ===================================================
                MESSAGE
            ==================================================== */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-black"
              >
                Project details
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    message: event.target.value,
                  })
                }
                className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f8f6] p-4 text-sm leading-6 text-black outline-none placeholder:text-black focus:border-[#737A1A]"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* ===================================================
                HONEYPOT
            ==================================================== */}
            <div
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="website">
                Website
              </label>

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

            {/* ===================================================
                VERIFICATION
            ==================================================== */}
            <div className="mt-6 rounded-2xl border border-black/10 bg-[#f8f8f6] p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-black">
                    Enter code
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className="select-none rounded-lg border border-[#737A1A] bg-[#737A1A] px-4 py-2 font-mono text-lg font-semibold tracking-[0.3em] !text-white"
                      aria-live="polite"
                    >
                      {code || "----"}
                    </span>

                    <button
                      type="button"
                      onClick={refreshCode}
                      className="text-xs font-medium !text-black transition-colors hover:!text-[#737A1A]"
                    >
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
                      verificationCode: event.target.value.replace(
                        /\D/g,
                        ""
                      ),
                    })
                  }
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 font-mono text-sm text-black outline-none placeholder:text-black focus:border-[#737A1A] sm:max-w-[180px]"
                  placeholder="Enter code"
                />
              </div>
            </div>

            {/* ===================================================
                ERROR
            ==================================================== */}
            {error && (
              <p
                role="alert"
                className="mt-4 text-sm font-medium text-red-600"
              >
                {error}
              </p>
            )}

            {/* ===================================================
                SUBMIT
            ==================================================== */}
            <button
              type="submit"
              disabled={status === "loading" || !code}
              className="
                group mt-6 inline-flex h-13 w-full
                items-center justify-center gap-3
                rounded-full bg-[#737A1A] px-6
                text-sm font-medium !text-white
                transition-colors duration-300
                hover:bg-black hover:!text-white
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <span className="!text-white">
                {status === "loading"
                  ? "Sending..."
                  : "Send enquiry"}
              </span>

              {status !== "loading" && (
                <ArrowUpRight
                  className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}