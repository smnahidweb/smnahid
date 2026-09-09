"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ExternalLink,
  CheckCircle2,
  Cpu,
  Sparkles,
  BarChart3,
  ShieldAlert,
  Bot,
  UserCheck,
} from "lucide-react";

export function Projects() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  const [activeMulyayonTab, setActiveMulyayonTab] = useState<
    "overview" | "architecture" | "workflow" | "features"
  >("overview");

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border-subtle bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          eyebrow="Case Studies & Products"
          title="Selected Projects"
          description="Detailed architectural case studies of full-stack web applications and developer tooling built with precision."
        />

        {/* 1. STAR CENTERPIECE: MULYAYON AI PLATFORM */}
        <div className="relative rounded-3xl border border-border-subtle bg-surface shadow-2xl p-6 sm:p-10 mb-16 overflow-hidden">
          {/* Subtle Accent Glow */}
          <div
            className="absolute -right-20 -top-20 w-96 h-96 bg-[#19B9EE]/10 blur-[100px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Bar: Numbering + Category + Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#19B9EE]">
                {featuredProject.number} / 04
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-hover" />
              <span className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                {featuredProject.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-cyan-subtle text-[#19B9EE] border border-accent-cyan-border">
                FLAGSHIP PRODUCT
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              {featuredProject.liveUrl && (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-raised border border-border-subtle hover:border-[#19B9EE]/60 hover:text-[#19B9EE] transition-colors"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {featuredProject.githubUrl && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-raised border border-border-subtle hover:border-[#19B9EE]/60 hover:text-[#19B9EE] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Featured Title & Tagline */}
          <div className="py-6 space-y-3">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight">
              {featuredProject.title}
            </h3>
            <p className="text-lg sm:text-xl font-medium text-[#19B9EE]">
              {featuredProject.tagline}
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-4xl">
              {featuredProject.overview}
            </p>
          </div>

          {/* Interactive Case Study Tabs */}
          <div className="mt-4 mb-8">
            <div className="flex flex-wrap gap-2 border-b border-border-subtle pb-3">
              {[
                { id: "overview", label: "Problem & Solution" },
                { id: "architecture", label: "System Architecture" },
                { id: "workflow", label: "AI & Teacher Workflow" },
                { id: "features", label: "Core Capabilities" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveMulyayonTab(
                      tab.id as "overview" | "architecture" | "workflow" | "features"
                    )
                  }
                  className={`px-4 py-2 rounded-xl font-mono text-xs transition-colors cursor-pointer ${
                    activeMulyayonTab === tab.id
                      ? "bg-accent-cyan-subtle text-[#19B9EE] font-semibold border border-accent-cyan-border"
                      : "text-foreground-muted hover:text-foreground hover:bg-surface-raised"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="pt-6">
              {activeMulyayonTab === "overview" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
                  <div className="p-6 rounded-2xl bg-surface-raised border border-border-subtle space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4" />
                      The Core Problem
                    </span>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {featuredProject.problem}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-raised border border-border-subtle space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#19B9EE] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      The Engineered Solution
                    </span>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {featuredProject.solution}
                    </p>
                  </div>
                </div>
              )}

              {activeMulyayonTab === "architecture" && (
                <div className="p-6 rounded-2xl bg-surface-raised border border-border-subtle space-y-4 animate-in fade-in duration-200">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#19B9EE] font-semibold flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    Architecture & Data Pipeline
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredProject.architecturePoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-surface border border-border-subtle text-xs sm:text-sm text-foreground-secondary flex items-start gap-2.5"
                      >
                        <span className="text-[#19B9EE] font-mono font-bold shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeMulyayonTab === "workflow" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-200">
                  <div className="p-5 rounded-2xl bg-surface-raised border border-border-subtle space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-[#19B9EE] font-mono text-xs font-bold">
                      <Bot className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground">
                      1. AI Ingestion & Analysis
                    </h4>
                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      Student scripts are parsed against rubric criteria. The AI engine generates draft evaluations with line-by-line justification.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-raised border border-border-subtle space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-[#19B9EE] font-mono text-xs font-bold">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground">
                      2. Educator Review & Calibration
                    </h4>
                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      Teachers inspect suggested scoring, adjust rubric sliders, override marks, and personalize pedagogical feedback seamlessly.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-raised border border-border-subtle space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-[#19B9EE] font-mono text-xs font-bold">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground">
                      3. Analytics & Export
                    </h4>
                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      Aggregated class analytics reveal knowledge gaps, question-wise mastery, and institutional progress reports.
                    </p>
                  </div>
                </div>
              )}

              {activeMulyayonTab === "features" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in duration-200">
                  {featuredProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface-raised border border-border-subtle flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#19B9EE] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground-secondary">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metrics & Stack Footer */}
          <div className="pt-6 border-t border-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Metrics */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {featuredProject.metrics?.map((m) => (
                <div
                  key={m.label}
                  className="p-3 rounded-xl bg-surface-raised border border-border-subtle font-mono text-center"
                >
                  <span className="block text-foreground font-heading font-bold text-sm sm:text-base text-[#19B9EE]">
                    {m.value}
                  </span>
                  <span className="text-[10px] text-foreground-muted">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="lg:col-span-6 flex flex-wrap gap-1.5 lg:justify-end">
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-surface-raised border border-border-subtle font-mono text-xs text-foreground-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. SECONDARY PROJECTS (Alternating Editorial Grid) */}
        <div className="space-y-8">
          <div className="mb-6">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Other Selected Systems
            </h3>
            <p className="text-sm text-foreground-secondary mt-1">
              Production web applications, component libraries, and engineering tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 sm:p-7 rounded-2xl bg-surface border border-border-subtle hover:border-[#19B9EE]/50 transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border-subtle font-mono text-xs text-foreground-muted">
                    <span className="text-[#19B9EE] font-semibold">{proj.number}</span>
                    <span>{proj.category}</span>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-xl text-foreground">
                      {proj.title}
                    </h4>
                    <p className="text-xs font-mono text-[#19B9EE] mt-0.5">
                      {proj.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                    {proj.overview}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {proj.features.slice(0, 2).map((f, i) => (
                      <div
                        key={i}
                        className="text-xs text-foreground-muted flex items-start gap-2"
                      >
                        <span className="text-[#19B9EE] font-mono">•</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack + Links */}
                <div className="space-y-4 pt-4 border-t border-border-subtle">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-surface-raised border border-border-subtle font-mono text-[10px] text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-foreground-muted text-[11px]">
                      Role: {proj.role.split("—")[0]}
                    </span>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#19B9EE] hover:underline"
                      >
                        <span>Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
