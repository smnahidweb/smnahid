"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          eyebrow="Track Record & Contributions"
          title="Engineering Experience"
          description="Chronological record of roles, client projects, and academic leadership where I shipped production software and mentored engineers."
        />

        <div className="relative border-l border-border-subtle ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${
                    exp.current
                      ? "bg-[#19B9EE] border-background ring-4 ring-[#19B9EE]/20"
                      : "bg-surface border-border-subtle group-hover:border-[#19B9EE]"
                  }`}
                />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle hover:border-border-hover transition-all duration-200 space-y-5">
                  {/* Top metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-heading font-bold text-lg sm:text-xl text-foreground">
                          {exp.role}
                        </span>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-cyan-subtle text-[#19B9EE] border border-accent-cyan-border">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground-secondary">
                        <span className="flex items-center gap-1 font-semibold text-foreground">
                          <Briefcase className="w-3.5 h-3.5 text-[#19B9EE]" />
                          {exp.company}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-foreground-muted" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted bg-surface-raised px-3 py-1.5 rounded-lg border border-border-subtle shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#19B9EE]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-border-subtle animate-in fade-in duration-200">
                      {/* Key Responsibilities */}
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2 font-semibold">
                          Key Responsibilities & Scope
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-foreground-secondary flex items-start gap-2.5"
                            >
                              <span className="text-[#19B9EE] font-mono font-bold shrink-0 mt-0.5">
                                •
                              </span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="pt-2">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-2 font-semibold">
                            Measurable Impact
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((ach, idx) => (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm text-foreground-secondary flex items-start gap-2.5"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#19B9EE] shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Bar: Tech Badges & Toggle Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-border-subtle">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-surface-raised border border-border-subtle font-mono text-[11px] text-foreground-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#19B9EE] hover:underline self-start sm:self-auto cursor-pointer"
                    >
                      <span>{isExpanded ? "Collapse" : "View Breakdown"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
