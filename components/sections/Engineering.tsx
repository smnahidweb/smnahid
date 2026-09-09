"use client";

import React, { useState } from "react";
import { TECHNOLOGIES, ENGINEERING_PRINCIPLES, TechnologyItem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Server, Database, Layout, FileText, Globe, CheckCircle2 } from "lucide-react";

type CategoryType = "Frontend" | "Backend" | "Database" | "UI / Design Systems" | "Forms / Data" | "CMS / Platforms";

const CATEGORIES: { id: CategoryType; label: string; icon: React.ElementType }[] = [
  { id: "Frontend", label: "Frontend Core", icon: Code2 },
  { id: "Backend", label: "Backend & APIs", icon: Server },
  { id: "Database", label: "Database & ORM", icon: Database },
  { id: "UI / Design Systems", label: "UI & Design Systems", icon: Layout },
  { id: "Forms / Data", label: "Forms & Data Engine", icon: FileText },
  { id: "CMS / Platforms", label: "CMS & Platforms", icon: Globe },
];

export function Engineering() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("Frontend");
  const filteredTechs = TECHNOLOGIES.filter((t) => t.category === activeCategory);
  const [selectedTech, setSelectedTech] = useState<TechnologyItem>(filteredTechs[0] || TECHNOLOGIES[0]);

  const handleCategoryChange = (cat: CategoryType) => {
    setActiveCategory(cat);
    const techsInCat = TECHNOLOGIES.filter((t) => t.category === cat);
    if (techsInCat.length > 0) {
      setSelectedTech(techsInCat[0]);
    }
  };

  return (
    <section id="engineering" className="py-20 md:py-28 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          eyebrow="Architecture & Technical Capabilities"
          title="Engineering Stack & Principles"
          description="A structured index of technologies I rely on in production, how I apply them, and the architectural principles guiding my work."
        />

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface border border-border-subtle mb-8 max-w-full overflow-x-auto">
          {CATEGORIES.map(({ id, label, icon: Icon }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => handleCategoryChange(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer shrink-0 ${isActive
                    ? "bg-accent-cyan-subtle text-[#19B9EE] font-semibold border border-accent-cyan-border shadow-xs"
                    : "text-foreground-secondary hover:text-foreground hover:bg-surface-hover"
                  }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Capability Explorer (2 Columns: Tech Grid + Detailed Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {/* Left Grid: Clickable Tech Chips */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredTechs.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <button
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 ${isSelected
                      ? "bg-surface border-[#19B9EE] ring-1 ring-[#19B9EE]/30 shadow-md"
                      : "bg-surface/60 border-border-subtle hover:border-border-hover hover:bg-surface"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-base text-foreground">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-raised border border-border-subtle text-[#19B9EE]">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted line-clamp-2">
                    {tech.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Technology Inspector Panel */}
          <div className="lg:col-span-6">
            <div className="sticky top-24 p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div>
                  <span className="font-mono text-xs text-[#19B9EE] uppercase tracking-wider font-semibold">
                    {selectedTech.category} · System Inspector
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {selectedTech.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent-cyan-subtle border border-accent-cyan-border font-mono text-xs text-[#19B9EE] font-semibold">
                  {selectedTech.level}
                </span>
              </div>

              {/* Architectural Overview */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-foreground-muted font-semibold">
                  Core Purpose & Capability
                </h4>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {selectedTech.description}
                </p>
              </div>

              {/* What I Use It For */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-foreground-muted font-semibold">
                  Practical Implementation Context
                </h4>
                <div className="p-4 rounded-xl bg-surface-raised border border-border-subtle text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  {selectedTech.usageContext}
                </div>
              </div>

              {/* Associated Production Systems */}
              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <h4 className="font-mono text-xs uppercase tracking-wider text-foreground-muted font-semibold">
                  Implemented In Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.projects.map((proj) => (
                    <span
                      key={proj}
                      className="px-3 py-1 rounded-lg bg-surface border border-border-subtle font-mono text-xs text-foreground flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#19B9EE]" />
                      <span>{proj}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
