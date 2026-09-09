import React from "react";
import { GITHUB_METRICS, PERSONAL_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/Icons";
import { Star, GitFork, ExternalLink, Terminal } from "lucide-react";

export function GithubSection() {
  return (
    <section id="github" className="py-20 md:py-28 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          eyebrow="Open Source & Codebase Consistency"
          title="GitHub & Engineering Activity"
          description="A window into my open repositories, architecture experiments, and continuous commitment to writing clean, maintainable software."
        />

        {/* Top Summary Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-sm mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-surface-raised border border-border-subtle text-foreground">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  github.com/{GITHUB_METRICS.username}
                </h3>
                <p className="font-mono text-xs text-foreground-muted">
                  {GITHUB_METRICS.bio}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-foreground-secondary px-3 py-1.5 rounded-lg bg-surface-raised border border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Code Cadence</span>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38C8F5] transition-colors shadow-xs"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {GITHUB_METRICS.highlights.map((hl) => (
            <div
              key={hl.label}
              className="p-4 rounded-xl bg-surface border border-border-subtle"
            >
              <span className="block font-mono text-[11px] text-foreground-muted uppercase tracking-wider mb-1">
                {hl.label}
              </span>
              <span className="font-heading font-bold text-sm text-foreground">
                {hl.value}
              </span>
            </div>
          ))}
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {GITHUB_METRICS.pinnedRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-6 rounded-2xl bg-surface border border-border-subtle hover:border-[#19B9EE]/50 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                    <Terminal className="w-4 h-4 text-[#19B9EE]" />
                    <span>{repo.name}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-foreground-muted hover:text-[#19B9EE] transition-colors"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-border-subtle">
                <div className="flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-surface-raised border border-border-subtle font-mono text-[10px] text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 font-mono text-xs text-foreground-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#19B9EE]" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
