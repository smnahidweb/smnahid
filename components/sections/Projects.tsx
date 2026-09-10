"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, ArrowRight } from "lucide-react";

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

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== featured?.id);

  if (!featured) return null;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-t border-border-subtle bg-background"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          number="05"
          eyebrow="Selected Work"
          title="Selected Work"
          description="A selection of products and systems I've designed and engineered."
        />

        {/* ── Featured Showcase Card (Matching Reference Design) ── */}
        <div className="mt-12 lg:mt-16">
          <div
            className="group relative rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Project Visual Frame */}
              <div className="lg:col-span-6 w-full">
                <Link
                  href={`/projects/${featured.slug}`}
                  className="block relative rounded-2xl overflow-hidden border border-border-subtle bg-surface-raised w-full shadow-md"
                  aria-label={`View ${featured.title} details`}
                >
                  <Image
                    src={featured.coverImage}
                    alt="MULYAYON assessment and evaluation platform interface"
                    width={1672}
                    height={941}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-auto object-contain block transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.015]"
                  />
                </Link>
              </div>

              {/* Right Column: Project Information */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Title */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-foreground tracking-tight leading-tight">
                    {featured.title}
                  </h3>
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-amber-300">
                   Developing Phase
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-foreground-secondary leading-relaxed mb-5 max-w-xl">
                  {featured.description}
                </p>

                {/* Key Bullet Points with Cyan Dots */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#19B9EE] shrink-0" />
                    <span>AI-Calibrated Script Evaluation & Scoring</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#19B9EE] shrink-0" />
                    <span>Side-by-Side Educator Review & Rubric Override</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#19B9EE] shrink-0" />
                    <span>Class-Wide Performance Heatmaps & Analytics</span>
                  </li>
                </ul>

                {/* Technology Pill Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full font-mono text-xs font-medium bg-[#19B9EE]/10 text-[#19B9EE] border border-[#19B9EE]/25"
                    >
                      {tech}
                    </span>
                  ))}
                  {featured.technologies.length > 5 && (
                    <span className="px-3 py-1 rounded-full font-mono text-xs font-medium bg-surface-raised text-foreground-muted border border-border-subtle">
                      +{featured.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Action Buttons Row */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Primary: Live Demo */}
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38c8f5] shadow-lg shadow-[#19B9EE]/20 hover:shadow-[#19B9EE]/35 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  

                  {/* Secondary: View Details */}
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-medium bg-surface-raised hover:bg-surface-raised/80 border border-border-subtle hover:border-border-hover text-foreground transition-colors duration-200"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#19B9EE]" />
                  </Link>
                </div>
              </div>
            </div>
            </div>
        </div>

        {/* ── Scalable Secondary Projects (if future projects are added) ── */}
        {otherProjects.length > 0 && (
          <div className="mt-20 space-y-8">
            <div className="space-y-8">
              {otherProjects.map((p) => (
                <article
                  key={p.id}
                  className="group relative rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-6 lg:order-2 w-full">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        width={1200}
                        height={675}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        className="w-full h-auto object-contain block rounded-2xl border border-border-subtle bg-surface-raised shadow-md"
                      />
                    </div>

                    <div className="lg:col-span-6 lg:order-1 flex flex-col justify-center">
                      <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-foreground tracking-tight leading-tight mb-3">
                        {p.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-foreground-secondary leading-relaxed mb-5 max-w-xl">
                        {p.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {p.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#19B9EE] shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full font-mono text-xs font-medium bg-[#19B9EE]/10 text-[#19B9EE] border border-[#19B9EE]/25"
                          >
                            {tech}
                          </span>
                        ))}
                        {p.technologies.length > 5 && (
                          <span className="px-3 py-1 rounded-full font-mono text-xs font-medium bg-surface-raised text-foreground-muted border border-border-subtle">
                            +{p.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      {p.liveUrl && (
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38c8f5] shadow-lg shadow-[#19B9EE]/20 hover:shadow-[#19B9EE]/35 transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
