"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Ambient subtle glow background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#19B9EE]/8 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Eyebrow & Status Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
        
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/70 border border-border-subtle font-mono text-xs text-foreground-muted">
            <span>Dhaka, BD (UTC+6)</span>
            <span>·</span>
            <span className="text-emerald-500 font-medium">Open to roles</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.08]">
              Building thoughtful,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19B9EE] via-[#38C8F5] to-[#0284C7]">
                high-performance
              </span>{" "}
              software for the modern web.
            </h1>

            {/* CTA Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScroll("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38C8F5] transition-all duration-200 shadow-md shadow-[#19B9EE]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>View Selected Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-medium bg-surface border border-border-subtle text-foreground hover:border-[#19B9EE]/50 hover:bg-surface-hover transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#19B9EE]" />
              </button>

              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 px-3.5 py-3.5 rounded-xl border border-border-subtle bg-surface text-foreground-secondary hover:text-foreground hover:border-border-hover transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span className="sr-only sm:not-sr-only sm:text-xs sm:font-mono">
                  {copied ? "Copied!" : "Email"}
                </span>
              </button>
            </div>


          </div>

          {/* Right Column: Engineering System Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border-subtle bg-surface/80 backdrop-blur-xl p-6 shadow-xl space-y-5">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted">
                  <Terminal className="w-4 h-4 text-[#19B9EE]" />
                  <span>system.status // smnahid.dev</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[11px] text-emerald-500 font-medium">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Telemetry Grid */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-surface-raised border border-border-subtle space-y-2">
                  <div className="flex justify-between text-foreground-muted text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#19B9EE]" />
                      ARCHITECTURAL DISCIPLINE
                    </span>
                    <span className="text-[#19B9EE] font-semibold">100%</span>
                  </div>
                  <div className="text-foreground font-sans text-sm font-medium">
                    Clean Component Boundaries & Strict Type Contracts
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-surface text-[10px] text-foreground-secondary border border-border-subtle">
                      App Router
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface text-[10px] text-foreground-secondary border border-border-subtle">
                      Server Components
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface text-[10px] text-foreground-secondary border border-border-subtle">
                      Zod Schemas
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface-raised border border-border-subtle space-y-2">
                  <div className="flex justify-between text-foreground-muted text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#19B9EE]" />
                      FLAGSHIP SYSTEM
                    </span>
                    <span className="text-foreground-secondary">EdTech AI</span>
                  </div>
                  <div className="text-foreground font-sans text-sm font-medium">
                    MULYAYON: Academic Assessment Intelligence
                  </div>
                  <p className="text-[11px] text-foreground-muted font-sans line-clamp-2">
                    Automated rubric-aligned grading engine with educator review pipelines.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface-raised border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#19B9EE]" />
                    <span className="text-foreground font-sans text-xs">
                      Academic Distinction
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#19B9EE] font-semibold">
                    SGPA 4.00 / 4.00
                  </span>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="p-3.5 rounded-xl bg-accent-cyan-subtle border border-accent-cyan-border text-xs text-foreground-secondary leading-relaxed">
                <span className="text-[#19B9EE] font-mono font-semibold mr-1.5">
                  &gt;
                </span>
                &quot;Simple to use, thoughtful in architecture, reliable in production.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
