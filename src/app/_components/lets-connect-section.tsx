"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const inputBase =
  "w-full rounded-2xl border-2 border-[#2a2a2a] bg-[#141414] px-5 py-4 text-base font-medium text-accent placeholder:text-accent2 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_4px_rgba(162,147,255,0.15)] resize-none";

export default function LetsConnectSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project enquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="dk-safe-x-padding dk-section-distance"
      aria-label="Let's Connect Section"
    >
      <SectionHeader
        title="Let's Work Together"
        description="Have a project in mind? Tell us about it and we'll get back to you within 24 hours."
        inViewport={inView}
        className="text-center"
        animate
      />

      <MotionWrapper
        className="mt-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {submitted ? (
          <div className="bg-gray rounded-[36px] p-10 flex flex-col items-center justify-center gap-4 text-center min-h-[300px]">
            <div className="text-5xl">✅</div>
            <h3 className="font-montserrat font-bold text-2xl text-accent">
              Message Sent!
            </h3>
            <p className="text-accent2 text-base">
              Your email client should have opened. We&apos;ll get back to you
              as soon as possible.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", budget: "", message: "" });
              }}
              className="mt-2 px-6 py-2 dk-gradient-btn text-white rounded-xl font-semibold text-sm"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray rounded-[36px] p-8 md:p-10 flex flex-col gap-5"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-widest text-accent2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-widest text-accent2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputBase}
                />
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="budget"
                className="text-xs font-bold uppercase tracking-widest text-accent2"
              >
                Budget
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                value={form.budget}
                onChange={handleChange}
                placeholder="e.g. $1,000 – $5,000"
                className={inputBase}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-widest text-accent2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, and timeline..."
                className={inputBase}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 dk-gradient-btn text-white font-bold text-base rounded-2xl transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              Send Message →
            </button>

            <p className="text-center text-xs text-accent2">
              Or email us directly at{" "}
              <a
                href={`mailto:${CONFIG.email}`}
                className="dk-gradient-text font-semibold"
              >
                {CONFIG.email}
              </a>
            </p>
          </form>
        )}
      </MotionWrapper>
    </section>
  );
}
