"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PERSONAL_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio] ${data.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          eyebrow="Get in touch"
          title="Let's work together."
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Email */}
            <div>
              <p className="text-sm text-foreground-muted mb-3">Email me directly</p>
              <div className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border-subtle">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#19B9EE] shrink-0" />
                  <span className="font-mono text-sm text-foreground select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="ml-3 p-1.5 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-raised transition-colors cursor-pointer"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm text-foreground-muted mb-3">Find me online</p>
              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface border border-border-subtle hover:border-[#19B9EE]/40 text-foreground-secondary hover:text-foreground transition-colors group"
                >
                  <div className="flex items-center gap-2.5 text-sm">
                    <LinkedinIcon className="w-4 h-4 text-[#19B9EE]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface border border-border-subtle hover:border-[#19B9EE]/40 text-foreground-secondary hover:text-foreground transition-colors group"
                >
                  <div className="flex items-center gap-2.5 text-sm">
                    <GithubIcon className="w-4 h-4 text-[#19B9EE]" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 text-sm text-foreground-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Open to full-time &amp; contract work</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-sm">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground">
                  <p className="font-medium text-emerald-500 mb-1">Message ready!</p>
                  <p className="text-foreground-muted">
                    Your default email app should have opened. If not, write to{" "}
                    <span className="font-mono text-foreground">{PERSONAL_INFO.email}</span>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm text-foreground-secondary"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name")}
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-[#19B9EE]/50 transition-colors ${
                        errors.name
                          ? "border-rose-500"
                          : "border-border-subtle focus:border-[#19B9EE]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm text-foreground-secondary"
                    >
                      Your email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@company.com"
                      {...register("email")}
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-[#19B9EE]/50 transition-colors ${
                        errors.email
                          ? "border-rose-500"
                          : "border-border-subtle focus:border-[#19B9EE]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm text-foreground-secondary"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    {...register("subject")}
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-[#19B9EE]/50 transition-colors ${
                      errors.subject
                        ? "border-rose-500"
                        : "border-border-subtle focus:border-[#19B9EE]"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm text-foreground-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project or what you're looking for..."
                    {...register("message")}
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-[#19B9EE]/50 transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500"
                        : "border-border-subtle focus:border-[#19B9EE]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38C8F5] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#19B9EE]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
