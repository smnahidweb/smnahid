"use client";

import React, { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ArrowUp, Mail, Globe } from "lucide-react";

export function Footer() {
  const [dhakaTime, setDhakaTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC+6 (Dhaka)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDhakaTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-subtle bg-surface/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg text-foreground tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-xs text-[#19B9EE] px-2 py-0.5 rounded-full bg-accent-cyan-subtle border border-accent-cyan-border">
                v2.0
              </span>
            </div>
            <p className="text-sm text-foreground-secondary max-w-md leading-relaxed">
              {PERSONAL_INFO.positioning}
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#19B9EE]" />
                Dhaka, Bangladesh (UTC+6)
              </span>
              {dhakaTime && (
                <>
                  <span>·</span>
                  <span className="text-foreground-secondary">{dhakaTime}</span>
                </>
              )}
            </div>
          </div>

          {/* Social Links & Actions */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-border-subtle bg-surface hover:border-[#19B9EE]/50 hover:text-[#19B9EE] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-border-subtle bg-surface hover:border-[#19B9EE]/50 hover:text-[#19B9EE] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-border-subtle bg-surface hover:border-[#19B9EE]/50 hover:text-[#19B9EE] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-xl border border-border-subtle bg-surface hover:border-[#19B9EE]/50 text-foreground-secondary hover:text-[#19B9EE] transition-colors ml-2 cursor-pointer"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex flex-col md:items-end text-xs font-mono text-foreground-muted space-y-1">
              <p>© {new Date().getFullYear()} S.M. Nahid Hasan. All rights reserved.</p>
              <p className="text-[11px] text-foreground-subtle flex items-center gap-1">
                Built with Next.js, TypeScript, Tailwind CSS & Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
