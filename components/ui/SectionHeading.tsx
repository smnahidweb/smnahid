import React from "react";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      }`}
    >
      <div
        className={`flex items-center gap-3 mb-3 font-mono text-xs tracking-wider uppercase text-foreground-muted ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-[#19B9EE] font-semibold">{number}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#19B9EE]/50" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-foreground-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
