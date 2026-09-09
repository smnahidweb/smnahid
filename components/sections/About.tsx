"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";
import { ArrowUpRight, FileDown } from "lucide-react";


export function About() {
  const photoUrl = "https://github.com/smnahidweb.png";

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">

          <span className="w-6 h-px bg-[#19B9EE]/50" aria-hidden="true" />

        </div>

        {/* Main Asymmetric Grid: Photo (Left 40%) + Content (Right 60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Editorial Photo Presentation */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">

              {/* Outer Framing Container */}
              <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-surface/50 p-2 shadow-xl shadow-black/5 group">

                {/* Image Wrapper */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface-raised">
                  <Image
                    src={photoUrl}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                    className="object-cover object-center  group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                    priority
                  />

                  {/* Subtle corner reticle details */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/40 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/40 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none" />
                </div>

                {/* Understated Editorial Caption Below Image */}
                <div className="flex items-center justify-between px-2 pt-3 pb-1 font-mono text-[11px] text-foreground-muted select-none">
                  <span className="font-medium text-foreground tracking-tight">
                    {PERSONAL_INFO.name.toUpperCase()}
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground-subtle">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>DHAKA, BD</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heading, Biography, Actions, & 4 Supporting Points */}
          <div className="lg:col-span-7 flex flex-col space-y-8 lg:space-y-10">

            {/* Section Heading */}
            <div className="space-y-3">

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
                A little about me<span className="text-[#19B9EE]">.</span>
              </h2>
            </div>

            {/* Concise Human Biography */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              <p>
                I am a software engineer who cares deeply about building clean, accessible interfaces and dependable web applications. My daily work is centered around <strong className="text-foreground font-medium">React</strong>, <strong className="text-foreground font-medium">Next.js</strong>, and <strong className="text-foreground font-medium">TypeScript</strong>, with an emphasis on maintainable architecture and real-world performance.
              </p>
              <p>
                I approach software development from a product mindset—focusing on intuitive workflows and user clarity just as much as strict type contracts. While frontend engineering is my primary craft, I actively build complete full-stack systems with Node.js and PostgreSQL to take ideas from concept to production.
              </p>
            </div>

            {/* Actions: Download Resume & GitHub */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[#19B9EE] text-[#05070A] hover:bg-[#38C8F5] transition-all duration-200 shadow-sm shadow-[#19B9EE]/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FileDown className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-medium bg-surface/80 hover:bg-surface border border-border-subtle hover:border-[#19B9EE]/50 text-foreground transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#19B9EE] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>



          </div>

        </div>

      </div>
    </section>
  );
}

