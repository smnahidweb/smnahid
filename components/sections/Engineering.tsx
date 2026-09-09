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
  if (!category) return null;
  const Icon = ICON_MAP[category.icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full p-5 sm:p-6 rounded-2xl border border-border-subtle bg-surface overflow-hidden transition-[border-color,box-shadow] duration-500 ease-out hover:border-[#19B9EE]/35 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      {/* Soft ambient top highlight glow that fades in smoothly */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#19B9EE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Top row: icon */}
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-border-subtle bg-surface-raised transition-[border-color,background-color] duration-500 ease-out group-hover:border-[#19B9EE]/30 group-hover:bg-[#19B9EE]/[0.06]">
            <Icon
              className="w-4 h-4 text-foreground-muted transition-colors duration-500 ease-out group-hover:text-[#19B9EE]"
              strokeWidth={1.75}
            />
          </div>
        </div>

        {/* Category title */}
        <div>
          <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground tracking-tight leading-snug">
            {category.title}
          </h3>
        </div>

        {/* Subtle separator */}
        <div className="h-px w-full bg-border-subtle/80" />

        {/* Technology list — clean, static single-line items without individual item hover */}
        <ul className="flex flex-col gap-2 flex-1">
          {category.technologies.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-2.5 py-0.5 text-foreground-secondary select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#19B9EE]/60 shrink-0" />
              <span className="font-mono text-xs sm:text-[13px] text-foreground-secondary">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ─── Main Engineering Section ─────────────────────────────────────────────────

export function Engineering() {
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
          title="Skills & Technologies"
          description="The tools and technologies I use to design, build, and ship modern web products."
        />

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {STACK_CATEGORIES.map((cat, i) => (
            <StackCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
