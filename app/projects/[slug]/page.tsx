import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, PERSONAL_INFO } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [
        {
          url: project.coverImage,
          alt: `${project.title} cover preview`,
        },
      ],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#19B9EE] selection:text-[#05070A]">
      {/* ── Top Editorial Navigation Bar ── */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-xs text-foreground-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-foreground-muted group-hover:text-[#19B9EE] transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38c8f5] transition-colors shadow-xs"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── Main Case Study Article ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">
        {/* ── 1. Project Header ── */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="text-[#19B9EE] font-bold tracking-widest uppercase">
              {project.number} / Case Study
            </span>
            <span className="w-1 h-1 rounded-full bg-border-hover" />
            <span className="text-foreground-muted uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          <p className="font-heading text-lg sm:text-xl lg:text-2xl text-foreground-secondary font-medium leading-snug max-w-3xl">
            {project.subtitle}
          </p>

          <p className="font-sans text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-3xl pt-2">
            {project.description}
          </p>

          {/* Quick Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-subtle font-mono">
            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-foreground-muted block mb-1">
                ROLE
              </span>
              <p className="text-xs sm:text-[13px] text-foreground font-medium">
                {project.role}
              </p>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-foreground-muted block mb-1">
                STATUS
              </span>
              <p className="text-xs sm:text-[13px] text-foreground font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production</span>
              </p>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-foreground-muted block mb-1">
                ENGINEER
              </span>
              <p className="text-xs sm:text-[13px] text-foreground font-medium">
                {PERSONAL_INFO.shortName}
              </p>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.16em] uppercase text-foreground-muted block mb-1">
                LINKS
              </span>
              <div className="flex items-center gap-3 text-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#19B9EE] hover:underline"
                  >
                    Live Site
                  </a>
                )}
                {project.clientRepoUrl && (
                  <a
                    href={project.clientRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground hover:underline"
                  >
                    Client
                  </a>
                )}
                {project.serverRepoUrl && (
                  <a
                    href={project.serverRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground hover:underline"
                  >
                    Server
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Full-Width Editorial Hero Image ── */}
        <section className="relative rounded-2xl sm:rounded-3xl border border-border-subtle bg-surface overflow-hidden shadow-xl shadow-black/5">
          <Image
            src={project.coverImage}
            alt="MULYAYON assessment and evaluation platform interface"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-auto object-contain block"
          />
        </section>

        {/* ── 3. Overview ── */}
        {project.overview && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block mb-2">
                01 / OVERVIEW
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Product Vision
              </h2>
            </div>
            <div className="lg:col-span-8 font-sans text-base sm:text-lg text-foreground-secondary leading-relaxed space-y-4">
              <p>{project.overview}</p>
            </div>
          </section>
        )}

        {/* ── 4. The Problem & The Solution ── */}
        {(project.problem || project.solution) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {project.problem && (
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-rose-400 block">
                  02 / THE CHALLENGE
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                  The Problem
                </h3>
                <p className="font-sans text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block">
                  03 / THE APPROACH
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                  The Solution
                </h3>
                <p className="font-sans text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </section>
        )}

        {/* ── 5. How It Works ── */}
        {project.howItWorks && project.howItWorks.length > 0 && (
          <section className="space-y-8 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block mb-2">
                04 / WORKFLOW
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                How It Works
              </h2>
              <p className="font-sans text-sm sm:text-base text-foreground-secondary mt-1">
                The end-to-end evaluation and review lifecycle engineered for academic staff.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {project.howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="p-5 sm:p-6 rounded-2xl bg-surface border border-border-subtle space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-[#19B9EE] block">
                      {item.step}
                    </span>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 6. Architecture & System Design ── */}
        {project.architecturePoints && project.architecturePoints.length > 0 && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block mb-2">
                05 / SYSTEM DESIGN
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Architecture Highlights
              </h2>
              <p className="font-sans text-xs sm:text-sm text-foreground-secondary">
                Technical patterns and boundary choices prioritizing throughput and integrity.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {project.architecturePoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border-subtle"
                >
                  <Cpu className="w-4 h-4 text-[#19B9EE] shrink-0 mt-0.5" />
                  <p className="font-mono text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 7. Key Features ── */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-8 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block mb-2">
                06 / CAPABILITIES
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, i) => {
                const parts = feature.split(":");
                const title = parts.length > 1 ? parts[0] : `Feature ${i + 1}`;
                const description = parts.length > 1 ? parts.slice(1).join(":") : feature;

                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#19B9EE] shrink-0" />
                      <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground">
                        {title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-foreground-secondary pl-6 leading-relaxed">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── 8. Engineering Decisions ── */}
        {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
          <section className="space-y-8 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block mb-2">
                07 / DECISIONS
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Engineering Trade-Offs
              </h2>
              <p className="font-sans text-xs sm:text-sm text-foreground-secondary mt-1">
                Conscious technical choices made to balance speed, isolation, and developer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.engineeringDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2.5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-foreground-muted block mb-1">
                      DECISION 0{i + 1}
                    </span>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {decision.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-foreground-secondary leading-relaxed pt-2 border-t border-border-subtle">
                    {decision.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 9. Technology Stack ── */}
        <section className="space-y-6 pt-4 border-t border-border-subtle">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#19B9EE] block mb-2">
              08 / TECH STACK
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
              Technologies Utilized
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl font-mono text-xs bg-surface border border-border-subtle text-foreground-secondary hover:border-[#19B9EE]/40 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── 10. Outcome & Status ── */}
        {project.outcome && (
          <section className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-surface border border-border-subtle space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <span className="tracking-widest uppercase">CURRENT STATUS</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
              Production Deployment & Impact
            </h3>
            <p className="font-sans text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              {project.outcome}
            </p>
          </section>
        )}

        {/* ── 11. Project Links & Navigation Footer ── */}
        <section className="pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-foreground-muted group-hover:text-[#19B9EE] transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-semibold text-[#19B9EE] hover:text-[#38c8f5] transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {project.clientRepoUrl && (
              <a
                href={project.clientRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-foreground-muted group-hover:text-foreground transition-colors" />
                <span>Client Repo</span>
                <ExternalLink className="w-3 h-3 text-foreground-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {project.serverRepoUrl && (
              <a
                href={project.serverRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-foreground-secondary hover:text-foreground transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-foreground-muted group-hover:text-foreground transition-colors" />
                <span>Server Repo</span>
                <ExternalLink className="w-3 h-3 text-foreground-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
