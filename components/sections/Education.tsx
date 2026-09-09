"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EDUCATION_LIST, RECOGNITIONS, RecognitionItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateModal } from "@/components/ui/CertificateModal";

// ─── Animation factory ────────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  };
}

// ─── Education item ───────────────────────────────────────────────────────────

interface EduItemProps {
  index: number;
  institution: string;
  degree: string;
  field: string;
  grade: string;
  period: string;
  delay: number;
  reduced: boolean;
}

function EduItem({ index, institution, degree, field, grade, period, delay, reduced }: EduItemProps) {
  const num = String(index + 1).padStart(2, "0");
  const motionProps = reduced ? {} : fadeUp(delay);

  return (
    <motion.div {...motionProps} className="group py-8 first:pt-0">
      <span
        className="block font-mono text-[10px] tracking-[0.18em] text-[#19B9EE]/60 mb-3 select-none"
        aria-hidden="true"
      >
        {num}
      </span>

      <h3 className="font-heading font-bold text-[1.2rem] sm:text-[1.35rem] leading-snug text-foreground mb-2 transition-colors duration-200 group-hover:text-[#19B9EE]">
        {institution}
      </h3>

      <p className="text-sm text-foreground-secondary mb-5">
        {degree}&nbsp;&middot;&nbsp;{field}
      </p>

      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <span className="font-mono text-sm text-[#19B9EE] font-medium">{grade}</span>
        <span className="font-mono text-xs text-foreground-muted tracking-wider">{period}</span>
      </div>
    </motion.div>
  );
}

// ─── Recognition item ─────────────────────────────────────────────────────────

interface RecItemProps {
  rec: RecognitionItem;
  onOpen: (rec: RecognitionItem) => void;
  delay: number;
  reduced: boolean;
}

function RecItem({ rec, onOpen, delay, reduced }: RecItemProps) {
  const motionProps = reduced ? {} : fadeUp(delay);

  // Extract year from term e.g. "Summer 2023" → "2023"
  const year = rec.term.match(/\d{4}/)?.[0] ?? rec.term;

  // Split title at " — " for a cleaner two-line hierarchy
  const dashIdx = rec.title.indexOf(" \u2014 ");
  const shortTitle = dashIdx > -1 ? rec.title.slice(0, dashIdx).trim() : rec.title;
  const topic     = dashIdx > -1 ? rec.title.slice(dashIdx + 3).trim() : rec.tag;

  return (
    <motion.div {...motionProps} className="py-8 first:pt-0">
      <span className="block font-mono text-[10px] tracking-[0.18em] text-foreground-muted mb-3 select-none">
        {year}
      </span>

      <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-1">
        {shortTitle}
      </h3>

      <p className="text-sm text-foreground-secondary mb-1">{topic}</p>

      <p className="font-mono text-xs text-foreground-muted mb-4">{rec.issuer}</p>

      {rec.certificateUrl && (
        <button
          onClick={() => onOpen(rec)}
          className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-foreground-muted hover:text-[#19B9EE] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B9EE] focus-visible:ring-offset-2 rounded-sm"
          aria-label={`View certificate for ${shortTitle}`}
        >
          <span className="underline underline-offset-4 decoration-foreground-muted/40 group-hover/link:decoration-[#19B9EE] transition-colors duration-200">
            View certificate
          </span>
          <span
            className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          >
            &#8599;
          </span>
        </button>
      )}
    </motion.div>
  );
}

// ─── Animated vertical center divider (desktop only) ─────────────────────────

function CenterDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const height = useTransform(scrollYProgress, [0.1, 0.55, 0.9], ["0%", "55%", "100%"]);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-border-subtle overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ height }}
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-transparent via-[#19B9EE]/35 to-transparent"
      />
    </div>
  );
}

// ─── Subtle item divider ──────────────────────────────────────────────────────

function ItemDivider() {
  return <hr className="border-0 border-t border-border-subtle" aria-hidden="true" />;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Education() {
  const [selectedCert, setSelectedCert] = useState<RecognitionItem | null>(null);
  const reduced = useReducedMotion() ?? false;
  const colLabelProps = reduced ? {} : fadeUp(0);

  return (
    <section
      id="education"
      className="py-20 md:py-28 border-t border-border-subtle"
      aria-label="Education and Recognition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          number="03"
          eyebrow="Academic Background"
          title="Education & Recognition"
          description="Academic foundation, distinction, and mentorship experience."
        />

        {/* Two-column editorial grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <CenterDivider />

          {/* ── Education ──────────────────────────────────────────── */}
          <div className="lg:pr-14 xl:pr-20">
            <motion.p
              {...colLabelProps}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground-muted mb-2"
            >
              Education
            </motion.p>

            {EDUCATION_LIST.map((edu, i) => (
              <React.Fragment key={edu.id}>
                {i > 0 && <ItemDivider />}
                <EduItem
                  index={i}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  grade={edu.grade}
                  period={edu.period}
                  delay={0.06 + i * 0.09}
                  reduced={reduced}
                />
              </React.Fragment>
            ))}
          </div>

          {/* ── Recognition ────────────────────────────────────────── */}
          <div className="lg:pl-14 xl:pl-20 mt-12 lg:mt-0">
            <motion.p
              {...(reduced ? {} : fadeUp(0.12))}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground-muted mb-2"
            >
              Recognition
            </motion.p>

            {RECOGNITIONS.map((rec, i) => (
              <React.Fragment key={rec.id}>
                {i > 0 && <ItemDivider />}
                <RecItem
                  rec={rec}
                  onOpen={setSelectedCert}
                  delay={0.16 + i * 0.1}
                  reduced={reduced}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal — unchanged */}
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
