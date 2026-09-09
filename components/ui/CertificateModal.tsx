"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  issuer: string;
  term: string;
  certificateUrl?: string;
  description: string;
}

export function CertificateModal({
  isOpen,
  onClose,
  title,
  issuer,
  term,
  certificateUrl,
  description,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs transition-opacity"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-border-strong bg-surface text-foreground shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-border-subtle">
          <div>
            <span className="font-mono text-xs text-[#19B9EE] font-medium">
              {term} &middot; {issuer}
            </span>
            <h3 id="cert-title" className="text-lg font-heading font-semibold text-foreground mt-0.5">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <p className="text-sm text-foreground-secondary leading-relaxed">
            {description}
          </p>

          {certificateUrl && (
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-border-subtle bg-black/40 flex items-center justify-center">
              <Image
                src={certificateUrl}
                alt={`${title} Certificate`}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-contain"
                unoptimized
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 px-5 border-t border-border-subtle font-mono text-xs">
          <span className="text-foreground-muted">Verified Academic Record</span>
          <div className="flex items-center gap-3">
            {certificateUrl && (
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#19B9EE] hover:underline"
              >
                <span>View Full Size</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity cursor-pointer font-sans text-xs font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
