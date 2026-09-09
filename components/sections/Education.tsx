"use client";

import React, { useState } from "react";
import { EDUCATION_LIST, RECOGNITIONS, RecognitionItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export function Education() {
  const [selectedCert, setSelectedCert] = useState<RecognitionItem | null>(null);

  return (
    <section id="education" className="py-20 md:py-28 border-t border-border-subtle bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          eyebrow="Academic Background & Distinctions"
          title="Education & Recognition"
          description="Formal academic grounding in Computer Science alongside verified faculty honors and peer mentoring recognitions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-[#19B9EE]" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border-hover transition-colors space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 className="font-heading font-bold text-base sm:text-lg text-foreground">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-foreground-secondary">
                        {edu.degree} &middot; {edu.field}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-accent-cyan-subtle text-[#19B9EE] font-semibold border border-accent-cyan-border">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-foreground-muted">
                    <span>{edu.period}</span>
                    {edu.status && (
                      <>
                        <span>&middot;</span>
                        <span className="text-[#19B9EE] font-medium">
                          {edu.status}
                        </span>
                      </>
                    )}
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-border-subtle">
                    {edu.highlights.map((hl, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-foreground-secondary flex items-start gap-2"
                      >
                        <span className="text-[#19B9EE] font-mono">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Recognitions, Awards & Mentorship */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#19B9EE]" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                Honors & Mentorship
              </h3>
            </div>

            <div className="space-y-4">
              {RECOGNITIONS.map((rec) => (
                <div
                  key={rec.id}
                  className="p-5 rounded-2xl bg-surface border border-border-subtle hover:border-[#19B9EE]/40 transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#19B9EE] font-semibold px-2 py-0.5 rounded-md bg-accent-cyan-subtle border border-accent-cyan-border">
                      {rec.term}
                    </span>
                    <span className="font-mono text-xs text-foreground-muted">
                      {rec.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-base text-foreground">
                      {rec.title}
                    </h4>
                    <p className="text-xs font-mono text-foreground-muted mt-0.5">
                      {rec.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    {rec.description}
                  </p>

                  {rec.certificateUrl && (
                    <div className="pt-2 border-t border-border-subtle flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCert(rec)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#19B9EE] hover:underline cursor-pointer font-medium"
                      >
                        <span>View Verified Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      <span className="font-mono text-[10px] text-foreground-muted">
                        Official Record
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
