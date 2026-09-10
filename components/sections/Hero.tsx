"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import {
  ArrowRight,
  ArrowDown,
  Mail,
  Check,
  Copy,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const SPECIALTIES = [
  "Frontend Software Engineer",
  "Next.js & React Specialist",
  "TypeScript & UI Architect",
  "Full Stack Product Builder",
];

export function Hero() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentSpecialty = SPECIALTIES[specialtyIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentSpecialty.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSpecialty.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        // Pause at full word
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSpecialty.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDeleting(false);
        setSpecialtyIndex((prev) => (prev + 1) % SPECIALTIES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, specialtyIndex]);

  const handleScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const codeSnippet = `// smnahid.config.ts — Software Engineer

interface Engineer {
  name: string;
  role: string;
  stack: string[];
  mindset: string;
}

export const nahid: Engineer = {
  name: "S.M. Nahid Hasan",
  role: "Frontend & Full Stack Engineer",
  stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  mindset: "Clean Architecture & High Performance"
};

export async function buildProduct(requirements: Problem) {
  return await engineerSolution({
    typeSafety: "Strict",
    responsiveUI: true,
    userDelight: "Maximized"
  });
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-tech-grid"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 10% 20%, hsla(195, 80%, 55%, 0.07) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 90% 80%, hsla(250, 70%, 60%, 0.05) 0%, transparent 60%)",
      }}
    >
      {/* Subtle atmospheric glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] bg-[#19B9EE]/[0.05] dark:bg-[#19B9EE]/[0.08] blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Identity & Animated Specialty */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-6">

            {/* Availability Badge */}
            <div className="flex items-center">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/80 dark:bg-surface/60 border border-border-subtle shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-medium text-foreground-secondary">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            {/* Main Name & Animated Specialty Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-[4rem] font-bold tracking-tight text-foreground leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>

              {/* Animated Specialty Text */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#19B9EE] tracking-tight">
                  {displayedText}
                </span>
                <span className="ml-0.5 font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-[#19B9EE] animate-pulse">
                  |
                </span>
              </div>
            </div>

            {/* Short Bio Description */}
            <p className="font-sans text-base sm:text-lg text-foreground-muted max-w-xl leading-relaxed">
              I build fast, scalable web applications and high-fidelity user interfaces using React, Next.js, and TypeScript. Passionate about clean architecture, performance optimization, and delightful user experiences.
            </p>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38C8F5] transition-all duration-200 shadow-md shadow-[#19B9EE]/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Download Resume</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <button
                type="button"
                onClick={() => handleScroll("projects")}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-medium bg-surface/80 hover:bg-surface border border-border-subtle hover:border-[#19B9EE]/50 text-foreground transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-[#19B9EE] transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>

              {/* Social / Direct Connect Icons */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl border border-border-subtle bg-surface/80 text-foreground-secondary hover:text-[#19B9EE] hover:border-[#19B9EE]/50 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl border border-border-subtle bg-surface/80 text-foreground-secondary hover:text-[#19B9EE] hover:border-[#19B9EE]/50 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy Email"
                  className="p-3 rounded-xl border border-border-subtle bg-surface/80 text-foreground-secondary hover:text-[#19B9EE] hover:border-[#19B9EE]/50 transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
                  title={copiedEmail ? "Email Copied!" : "Copy Email"}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Code Editor Window */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[500px] rounded-2xl border border-border-subtle bg-[#080D14]/90 dark:bg-[#070B10]/95 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden group transition-all duration-300 hover:border-[#19B9EE]/40">

              {/* Editor Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-black/40">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 inline-block" />
                </div>

                {/* Tab title */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
                  <Code2 className="w-3.5 h-3.5 text-[#19B9EE]" />
                  <span>smnahid.config.ts</span>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={copyCode}
                  className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Copy code"
                  aria-label="Copy code snippet"
                >
                  {copiedCode ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-200 select-text">
                <div className="text-slate-500 italic pb-2">
                  # Full Stack Developer
                </div>

                <div className="space-y-1">
                  <div>
                    <span className="text-[#F43F5E]">interface</span>{" "}
                    <span className="text-[#FBBF24]">Engineer</span> {"{"}
                  </div>
                  <div className="pl-4 text-slate-400">
                    name: <span className="text-[#19B9EE]">string</span>;
                  </div>
                  <div className="pl-4 text-slate-400">
                    stack: <span className="text-[#19B9EE]">string[]</span>;
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-2">
                    <span className="text-[#A855F7]">export const</span>{" "}
                    <span className="text-[#38BDF8]">nahid</span>:{" "}
                    <span className="text-[#FBBF24]">Engineer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-[#10B981]">&quot;S.M. Nahid Hasan&quot;</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">stack:</span> [
                    <span className="text-[#10B981]">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-[#10B981]">&quot;React&quot;</span>,{" "}
                    <span className="text-[#10B981]">&quot;TypeScript&quot;</span>,
                    <span className="text-[#10B981]">&quot;Antd&quot;</span>,{" "}
                    <span className="text-[#10B981]">&quot;Express.js&quot;</span>,{" "}
                    <span className="text-[#10B981]">&quot;Prisma ORM&quot;</span>,
                    <span className="text-[#10B981]">&quot;PostgreSQL&quot;</span>,
                    <span className="text-[#10B981]">&quot;MySQL&quot;</span>],

                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">mindset:</span>{" "}
                    <span className="text-[#10B981]">&quot;Clean Architecture&quot;</span>
                  </div>
                  <div>{"};"}</div>

                  <div className="pt-2">
                    <span className="text-[#A855F7]">export async function</span>{" "}
                    <span className="text-[#38BDF8]">buildProduct</span>(idea) {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A855F7]">return await</span>{" "}
                    <span className="text-[#FBBF24]">engineer</span>({"{"}
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">typeSafety:</span>{" "}
                    <span className="text-[#10B981]">&quot;Strict&quot;</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">performance:</span>{" "}
                    <span className="text-[#19B9EE]">100</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">userDelight:</span>{" "}
                    <span className="text-[#F43F5E]">true</span>
                  </div>
                  <div className="pl-4">{"});"}</div>
                  <div>{"}"}</div>
                </div>

                {/* Bottom Cursor Indicator */}
                <div className="pt-3 flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <span className="w-2 h-3.5 bg-[#19B9EE] inline-block animate-pulse" />
                  <span>TypeScript 5.0 · React 19 · UTF-8</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


