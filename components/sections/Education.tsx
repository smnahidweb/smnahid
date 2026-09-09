"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EDUCATION_LIST, RECOGNITIONS, RecognitionItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateModal } from "@/components/ui/CertificateModal";
import {
  GraduationCap,
  Trophy,
  Star,
  BookOpen,
  ExternalLink,
  Sparkles,
  Medal,
  Users,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: {
      duration: 0.52,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay,
    },
  };
}

// ─── Academic Snapshot Bar ────────────────────────────────────────────────────





// ─── Education Card ───────────────────────────────────────────────────────────

interface EduCardProps {
  index: number;
  institution: string;
  degree: string;
  field: string;
  grade: string;
  period: string;
  isFeatured?: boolean;
  delay: number;
  reduced: boolean;
}

const EDU_ICONS = [GraduationCap, BookOpen, BookOpen];

function EduCard({
  index,
  institution,
  degree,
  field,
  grade,
  period,
  isFeatured,
  delay,
  reduced,
}: EduCardProps) {
  const IconComponent = EDU_ICONS[index] ?? GraduationCap;

  const gradeMatch = grade.match(/([\d.]+)\s*\/\s*([\d.]+)/);
  const gradeLabel = grade.split(" ")[0];
  const gradeValue = gradeMatch?.[1] ?? "";
  const gradeMax = gradeMatch?.[2] ?? "";

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col h-full ${isFeatured
        ? "border-[#19B9EE]/30 bg-surface hover:border-[#19B9EE]/50 shadow-lg shadow-[#19B9EE]/5"
        : "border-border-subtle bg-surface hover:border-border-hover"
        }`}
    >
      {isFeatured && (
        <div
          className="absolute -top-10 -right-10 w-40 h-40 bg-[#19B9EE]/10 blur-[60px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className="relative p-5 sm:p-6 flex flex-col justify-between flex-1 h-full">
        <div>
          <div className="flex items-start justify-between gap-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-colors duration-300 shrink-0 ${isFeatured
                  ? "bg-[#19B9EE]/10 border-[#19B9EE]/30 text-[#19B9EE]"
                  : "bg-surface-raised border-border-subtle text-foreground-muted group-hover:text-[#19B9EE] group-hover:border-[#19B9EE]/30"
                  }`}
              >
                <IconComponent className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground-muted">
                  {degree}
                </span>
                <p className="text-xs text-foreground-secondary">{field}</p>
              </div>
            </div>
            <span className="font-mono text-[11px] text-foreground-muted bg-surface-raised border border-border-subtle px-2.5 py-1 rounded-lg shrink-0 whitespace-nowrap">
              {period}
            </span>
          </div>

          <h3
            className={`font-heading font-bold text-base sm:text-lg leading-snug transition-colors duration-200 ${isFeatured
              ? "text-foreground group-hover:text-[#19B9EE]"
              : "text-foreground"
              }`}
          >
            {institution}
          </h3>
        </div>

        <div className="mt-auto pt-4 border-t border-border-subtle flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-foreground-muted block mb-0.5">
              {gradeLabel}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span
                className={`font-heading text-2xl sm:text-3xl font-bold leading-none ${isFeatured ? "text-[#19B9EE]" : "text-foreground"
                  }`}
              >
                {gradeValue}
              </span>
              <span className="font-mono text-xs sm:text-sm text-foreground-muted">/ {gradeMax}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Recognition Card ─────────────────────────────────────────────────────────

const REC_ICONS: Record<string, React.ElementType> = {
  "Academic Excellence": Star,
  "Mentorship": Users,
  "Leadership": Medal,
};

const REC_COLORS: Record<string, { icon: string; bg: string; border: string }> = {
  "Academic Excellence": {
    icon: "text-amber-400",
    bg: "bg-amber-400/[0.08]",
    border: "border-amber-400/20",
  },
  "Mentorship": {
    icon: "text-[#19B9EE]",
    bg: "bg-[#19B9EE]/[0.08]",
    border: "border-[#19B9EE]/20",
  },
  "Leadership": {
    icon: "text-violet-400",
    bg: "bg-violet-400/[0.08]",
    border: "border-violet-400/20",
  },
};

interface RecCardProps {
  rec: RecognitionItem;
  onOpen: (rec: RecognitionItem) => void;
  delay: number;
  reduced: boolean;
}

function RecCard({ rec, onOpen, delay, reduced }: RecCardProps) {
  const Icon = REC_ICONS[rec.tag] ?? Trophy;
  const colors = REC_COLORS[rec.tag] ?? {
    icon: "text-[#19B9EE]",
    bg: "bg-[#19B9EE]/[0.08]",
    border: "border-[#19B9EE]/20",
  };

  const dashIdx = rec.title.indexOf(" \u2014 ");
  const shortTitle = dashIdx > -1 ? rec.title.slice(0, dashIdx).trim() : rec.title;
  const topic = dashIdx > -1 ? rec.title.slice(dashIdx + 3).trim() : rec.tag;
  const year = rec.term.match(/\d{4}/)?.[0] ?? rec.term;

  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="group relative rounded-2xl border border-border-subtle bg-surface hover:border-border-hover transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 h-full">
        <div>
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div
              className={`w-10 h-10 rounded-xl border flex items-center justify-center ${colors.bg} ${colors.border} shrink-0`}
            >
              <Icon className={`w-4 h-4 ${colors.icon}`} strokeWidth={1.75} />
            </div>
            <span className="font-mono text-[11px] text-foreground-muted bg-surface-raised border border-border-subtle px-2.5 py-1 rounded-lg shrink-0 whitespace-nowrap">
              {year}
            </span>
          </div>

          <h4 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-1 leading-snug">
            {shortTitle}
          </h4>
          <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">{topic}</p>
        </div>

        <div className="mt-auto pt-4 border-t border-border-subtle flex flex-col gap-2.5">
          <p className="font-mono text-[11px] text-foreground-muted leading-relaxed">
            {rec.issuer}
          </p>
          {rec.certificateUrl && (
            <div>
              <button
                onClick={() => onOpen(rec)}
                className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium ${colors.icon} hover:underline underline-offset-2 transition-colors cursor-pointer`}
                aria-label={`View certificate for ${shortTitle}`}
              >
                <span>Verify Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({
  icon: Icon,
  label,
  delay,
  reduced,
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
  reduced: boolean;
}) {
  return (
    <motion.div
      {...(reduced ? {} : fadeUp(delay))}
      className="flex items-center gap-2.5 mb-6"
    >
      <div className="w-7 h-7 rounded-lg bg-surface-raised border border-border-subtle flex items-center justify-center text-foreground-muted">
        <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
      </div>
      <span className="font-mono text-xs tracking-[0.18em] uppercase text-foreground-muted">
        {label}
      </span>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function Education() {
  const [selectedCert, setSelectedCert] = useState<RecognitionItem | null>(null);
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="education"
      className="py-20 md:py-28 border-t border-border-subtle"
      aria-label="Education and Recognition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          eyebrow="Academic Background"
          title="Education & Recognition"
          description="Academic foundation, distinction, and community mentorship across three institutions."
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Education Column */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <SectionLabel
              icon={GraduationCap}
              label="Academic Journey"
              delay={0}
              reduced={reduced}
            />
            <div className="grid grid-cols-1 lg:grid-rows-3 gap-4 flex-1">
              {EDUCATION_LIST.map((edu, i) => (
                <EduCard
                  key={edu.id}
                  index={i}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  grade={edu.grade}
                  period={edu.period}
                  isFeatured={i === 0}
                  delay={0.06 + i * 0.1}
                  reduced={reduced}
                />
              ))}
            </div>
          </div>

          {/* Recognition Column */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <SectionLabel
              icon={Sparkles}
              label="Achievements & Recognition"
              delay={0.08}
              reduced={reduced}
            />
            <div className="grid grid-cols-1 lg:grid-rows-3 gap-4 flex-1">
              {RECOGNITIONS.map((rec, i) => (
                <RecCard
                  key={rec.id}
                  rec={rec}
                  onOpen={setSelectedCert}
                  delay={0.14 + i * 0.1}
                  reduced={reduced}
                />
              ))}
            </div>

            {/* Mentor callout */}

          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          issuer={selectedCert.issuer}
          term={selectedCert.term}
          certificateUrl={selectedCert.certificateUrl}
          description={selectedCert.description}
        />
      )}
    </section>
  );
}

