"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[84px] h-[34px] rounded-full border border-border-subtle bg-surface/50 animate-pulse" />
    );
  }

  const options = [
    { key: "dark" as const, icon: Moon, label: "Dark mode" },
    { key: "system" as const, icon: Monitor, label: "System theme" },
    { key: "light" as const, icon: Sun, label: "Light mode" },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Select color theme"
      className="inline-flex items-center p-1 rounded-full border border-border-subtle bg-surface/70 backdrop-blur-md shadow-xs transition-colors"
    >
      {options.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            onClick={() => setTheme(key)}
            className={`relative p-1.5 rounded-full transition-all duration-200 outline-hidden focus-visible:ring-2 focus-visible:ring-[#19B9EE] ${
              isActive
                ? "text-[#19B9EE] bg-accent-cyan-subtle shadow-xs font-medium"
                : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
