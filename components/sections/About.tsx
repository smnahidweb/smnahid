import React from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Lightbulb, ShieldCheck, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Compass,
      title: "Design-Driven Frontend",
      description:
        "Deep obsession with typography, fluid spacing, micro-interactions, and frictionless UX that respects user attention.",
    },
    {
      icon: ShieldCheck,
      title: "Resilient Full-Stack Core",
      description:
        "Building type-safe server actions, predictable REST APIs, and structured relational schemas using Next.js, Node.js, and PostgreSQL.",
    },
    {
      icon: Lightbulb,
      title: "Product Mindset",
      description:
        "Evaluating technical decisions by their real-world impact on user workflows, business velocity, and long-term maintainability.",
    },
    {
      icon: Zap,
      title: "Pragmatic Problem Solving",
      description:
        "Keeping systems simple, avoiding unnecessary abstractions, and prioritizing tight feedback loops from design to production.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border-subtle bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          eyebrow="Context & Engineering Philosophy"
          title="Bridging design engineering with full-stack resilience."
          description="A look into my background, technical evolution, and how I approach building software products."
        />

        {/* Editorial Layout: Large Statement + Supporting Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bold Editorial Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border-subtle shadow-sm space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#19B9EE] font-semibold">
                CORE BELIEF
              </span>
              <blockquote className="text-xl md:text-2xl font-heading font-bold text-foreground leading-snug">
                &ldquo;{PERSONAL_INFO.philosophy}&rdquo;
              </blockquote>
              <p className="text-sm text-foreground-secondary leading-relaxed pt-2 border-t border-border-subtle">
                I view code as a medium to solve human problems. Whether refining an interactive grading interface for teachers or configuring database indices, the goal is always clarity, speed, and reliability.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              {PERSONAL_INFO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-surface border border-border-subtle"
                >
                  <span className="block text-foreground-muted text-[11px] mb-1">
                    {stat.label}
                  </span>
                  <span className="text-foreground font-heading font-bold text-base text-[#19B9EE]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-foreground-secondary leading-relaxed">
              {PERSONAL_INFO.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Four Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-surface border border-border-subtle hover:border-[#19B9EE]/40 transition-colors space-y-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan-subtle border border-accent-cyan-border text-[#19B9EE] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
