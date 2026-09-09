"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  Server,
  Database,
  Code2,
  GitBranch,
  LayoutTemplate,
  Globe,
  LucideIcon,
} from "lucide-react";
import { STACK_CATEGORIES, StackCategory } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

// ─── Icon Map ────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  PanelsTopLeft,
  Server,
  Database,
  Code2,
  GitBranch,
  LayoutTemplate,
  Globe,
};

// ─── StackCard Component ──────────────────────────────────────────────────────

function StackCard({ category, index }: { category: StackCategory; index: number }) {
  const Icon = ICON_MAP[category.icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full min-h-[160px] p-5 sm:p-6 rounded-[15px] border border-border-subtle bg-surface overflow-hidden transition-all duration-300 hover:border-[rgba(25,185,238,0.28)] hover:bg-surface-hover/30"
    >
      {/* Animated top-edge line on hover */}
      <div
        className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-[#19B9EE]/0 via-[#19B9EE] to-[#19B9EE]/0 transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />

      {/* Subtle dot-grid texture that appears on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage: "radial-gradient(var(--grid-color) 1px, transparent 1px)",
        }}
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full gap-3.5">
        {/* Top row: icon + number */}
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center w-9 h-9 rounded-[9px] border border-border-subtle bg-surface-raised transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-[rgba(25,185,238,0.22)]">
            <Icon
              className="w-4 h-4 text-foreground-muted transition-colors duration-300 group-hover:text-[#19B9EE]"
              strokeWidth={1.75}
            />
          </div>
          <span className="font-mono text-[11px] font-medium text-foreground-subtle transition-colors duration-300 group-hover:text-[#19B9EE] select-none">
            {category.number}
          </span>
        </div>

        {/* Category title */}
        <h3 className="font-heading text-base sm:text-[17px] font-semibold text-foreground tracking-tight leading-snug">
          {category.title}
        </h3>

        {/* Technology list */}
        <p className="font-sans text-sm text-foreground-muted leading-relaxed transition-colors duration-300 group-hover:text-foreground-secondary">
          {category.technologies.map((tech, i) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {i < category.technologies.length - 1 && (
                <span className="mx-1.5 text-foreground-subtle select-none" aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Engineering Principles Footer ───────────────────────────────────────────

function PrinciplesFooter() {
  const principles = [
    "Clear architecture",
    "Fast experiences",
    "Thoughtful interfaces",
    "Maintainable systems",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-14 pt-8 border-t border-border-subtle"
    >
      <p className="font-sans text-sm text-center leading-relaxed">
        <span className="text-foreground-subtle italic mr-3">I care about software that is</span>
        {principles.map((p, i) => (
          <React.Fragment key={p}>
            <span className="text-foreground-secondary">{p}</span>
            {i < principles.length - 1 && (
              <span className="mx-2.5 text-foreground-subtle" aria-hidden="true">·</span>
            )}
          </React.Fragment>
        ))}
      </p>
    </motion.div>
  );
}

// ─── Main Engineering Section ─────────────────────────────────────────────────

export function Engineering() {
  const row1 = STACK_CATEGORIES.slice(0, 3); // Frontend, Backend, Database
  const row2 = STACK_CATEGORIES.slice(3, 5); // Programming Languages, DevOps & Tools
  const row3 = STACK_CATEGORIES.slice(5, 7); // CMS, Platforms

  return (
    <section
      id="engineering"
      className="py-20 md:py-28 border-t border-border-subtle bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <SectionHeading
          number="04"
          eyebrow="Engineering"
          title="Engineering Stack"
          description="The tools and technologies I use to design, build, and ship modern web products."
        />

        {/* ── Card Grid ── */}
        <div className="space-y-3 sm:space-y-4">

          {/* Row 1: 3 equal columns — Frontend · Backend · Database */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {row1.map((cat, i) => (
              <StackCard key={cat.id} category={cat} index={i} />
            ))}
          </div>

          {/* Row 2: Programming Languages (wider 3/5) · DevOps & Tools (2/5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="lg:col-span-3">
              <StackCard category={row2[0]} index={3} />
            </div>
            <div className="lg:col-span-2">
              <StackCard category={row2[1]} index={4} />
            </div>
          </div>

          {/* Row 3: CMS (2/5) · Platforms (wider 3/5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="lg:col-span-2">
              <StackCard category={row3[0]} index={5} />
            </div>
            <div className="lg:col-span-3">
              <StackCard category={row3[1]} index={6} />
            </div>
          </div>

        </div>

        {/* Engineering principles */}
        <PrinciplesFooter />

      </div>
    </section>
  );
}
