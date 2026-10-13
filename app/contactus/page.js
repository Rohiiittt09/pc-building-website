
"use client";

import { useState } from "react";
import Link from "next/link";

const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "CPU", href: "/Products" },
      { label: "GPU", href: "/Products" },
      { label: "RAM", href: "/Products" },
      { label: "Storage", href: "/Products" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "PC Builder", href: "/Pc-builder" },
      { label: "Custom PCs", href: "/custom-pcs" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contactus" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Message send nahi hua. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: data.message || "Your message has been submitted successfully.",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#05080B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#3ABAE9] focus:ring-2 focus:ring-[#3ABAE9]/10";

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#05080B] text-white">
      {/* CONTACT SECTION */}
      <section className="relative border-t border-white/5 bg-[#05080B] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#3ABAE9]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3ABAE9]">
                Contact Us
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something
              <span className="block text-[#3ABAE9]">
                Powerful.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Have a question about PC components, compatibility or your custom
              build? Send us a message and tell us what you need.
            </p>
          </div>

          {/* Contact Content */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A1117] p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#3ABAE9]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
                  Get In Touch
                </p>

                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  We&apos;re here to help.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
                  Whether you&apos;re planning a gaming PC, a workstation or
                  upgrading your current system, share your requirements with
                  us.
                </p>

                <div className="mt-9 space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 text-xl text-[#3ABAE9]">
                      ✉
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Email
                      </p>
                      <a
                        href="mailto:support@cyberflix.com"
                        className="mt-1 block break-all text-sm font-medium text-gray-200 transition hover:text-[#3ABAE9]"
                      >
                        support@cyberflix.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 text-xl text-[#3ABAE9]">
                      ☎
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Phone
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-200">
                        Add your verified business number
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 text-xl text-[#3ABAE9]">
                      ⌖
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-200">
                        Add your verified business address
                      </p>
                    </div>
                  </div>
                </div>

                {/* PC Builder Card */}
                <div className="mt-9 rounded-2xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3ABAE9]/10 text-lg text-[#3ABAE9]">
                      ⚡
                    </span>

                    <p className="text-sm font-semibold text-gray-100">
                      Planning your next PC build?
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Select components, estimate your budget and review basic
                    compatibility with our PC Builder.
                  </p>

                  <Link
                    href="/Pc-builder"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#3ABAE9] transition hover:text-white"
                  >
                    Open PC Builder <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="rounded-3xl border border-white/10 bg-[#0A1117] p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
                Send a Message
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                How can we help?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Fill in the details below. All fields are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      maxLength={100}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. PC build consultation"
                    required
                    maxLength={150}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    minLength={10}
                    maxLength={3000}
                    className={`${inputClass} resize-y leading-6`}
                  />

                  <p className="mt-2 text-right text-xs text-gray-600">
                    {form.message.length}/3000
                  </p>
                </div>

                {status.message && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border p-4 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-green-500/20 bg-green-500/10 text-green-300"
                        : "border-red-500/20 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#3ABAE9] px-6 py-4 text-sm font-bold text-[#05080B] transition hover:bg-white hover:shadow-lg hover:shadow-[#3ABAE9]/10 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && (
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-gray-600">
                  We&apos;ll respond using the email address you provide.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}