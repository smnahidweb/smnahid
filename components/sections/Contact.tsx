"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PERSONAL_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

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
    // Form submission action
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${data.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border-subtle bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          eyebrow="Initiate Conversation"
          title="Let's build something useful."
          description="Whether you're engineering a new product, scaling a frontend architecture, or looking for an engineer to join your team, I'm ready to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-sm space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#19B9EE] font-semibold">
                  DIRECT CONTACT
                </span>
                <h3 className="text-xl font-heading font-bold text-foreground mt-1">
                  Connect Directly
                </h3>
                <p className="text-xs text-foreground-secondary mt-1 leading-relaxed">
                  I typically respond within 24 hours. Feel free to copy my direct email or connect through LinkedIn.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-surface-raised border border-border-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-foreground-muted">
                    PRIMARY INBOX
                  </span>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#19B9EE] hover:underline cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">
                          Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="font-mono text-xs sm:text-sm font-semibold text-foreground select-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-raised border border-border-subtle hover:border-[#19B9EE]/50 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <LinkedinIcon className="w-4 h-4 text-[#19B9EE]" />
                    <span>LinkedIn / in/smnahid</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-muted" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-raised border border-border-subtle hover:border-[#19B9EE]/50 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <GithubIcon className="w-4 h-4 text-[#19B9EE]" />
                    <span>GitHub / smnahid</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-muted" />
                </a>
              </div>

              {/* Availability Note */}
              <div className="pt-4 border-t border-border-subtle flex items-center gap-2 font-mono text-xs text-foreground-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Status: Available for Full-Time & Select Contract Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#19B9EE] font-semibold">
                    MESSAGE DISPATCH
                  </span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1">
                    Send a Message
                  </h3>
                </div>
                <MessageSquare className="w-5 h-5 text-foreground-muted" />
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-accent-cyan-subtle border border-accent-cyan-border text-xs sm:text-sm text-foreground space-y-1 animate-in fade-in duration-200">
                  <p className="font-semibold text-[#19B9EE] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Message prepared in your default mail client!
                  </p>
                  <p className="text-foreground-secondary">
                    If your email app didn&apos;t open automatically, you can also write to{" "}
                    <span className="font-mono text-foreground font-medium">
                      {PERSONAL_INFO.email}
                    </span>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-foreground-muted uppercase tracking-wider"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name")}
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[#19B9EE] transition-colors ${
                        errors.name
                          ? "border-rose-500 ring-1 ring-rose-500/20"
                          : "border-border-subtle focus:border-[#19B9EE]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs font-mono text-rose-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-foreground-muted uppercase tracking-wider"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      {...register("email")}
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[#19B9EE] transition-colors ${
                        errors.email
                          ? "border-rose-500 ring-1 ring-rose-500/20"
                          : "border-border-subtle focus:border-[#19B9EE]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs font-mono text-rose-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs text-foreground-muted uppercase tracking-wider"
                  >
                    Subject / Project Context *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Engineering Role / Web Application Build"
                    {...register("subject")}
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[#19B9EE] transition-colors ${
                      errors.subject
                        ? "border-rose-500 ring-1 ring-rose-500/20"
                        : "border-border-subtle focus:border-[#19B9EE]"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs font-mono text-rose-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-foreground-muted uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your project, team requirements, or collaboration idea..."
                    {...register("message")}
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-raised border text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[#19B9EE] transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500 ring-1 ring-rose-500/20"
                        : "border-border-subtle focus:border-[#19B9EE]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs font-mono text-rose-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-mono text-xs font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38C8F5] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#19B9EE]/20 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
