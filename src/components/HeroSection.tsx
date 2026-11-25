"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TopographicCanvas } from "@/components/TopographicCanvas";
import { MagneticControl } from "@/components/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.from("[data-hero-reveal]", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
        clearProps: "transform",
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#0b0b0a] pt-24 pb-10 text-[#f4f0e8] sm:pb-14"
    >
      <TopographicCanvas />
      <div
        aria-hidden="true"
        className="bg-arch-grid-dark pointer-events-none absolute inset-0 opacity-65"
      />

      {/* Top Editorial Telemetry Row */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          data-hero-reveal
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-5 font-mono text-[11px] tracking-[0.16em] text-[#a9a397] uppercase"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[#f4f0e8]">
              <span className="h-2 w-2 rounded-full bg-[#e84a27]" />
              {portfolioData.identity.availability}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#c8b89a]" aria-hidden="true" />
              {portfolioData.identity.location}
            </span>
            <span className="text-[#c8b89a]">
              {portfolioData.identity.timezone}
            </span>
          </div>
        </div>
      </div>

      {/* Main Monumental Headline Stage */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p
              data-hero-reveal
              className="mb-5 font-mono text-xs tracking-[0.2em] text-[#e84a27] uppercase"
            >
              {portfolioData.identity.title}
            </p>

            <h1
              data-hero-reveal
              className="font-display text-[clamp(2.85rem,8.4vw,7.4rem)] leading-[0.92] font-extrabold tracking-[-0.035em] text-[#f4f0e8]"
            >
              <span className="block">{portfolioData.identity.name}</span>
              <span className="mt-1 block font-serif text-[clamp(3rem,8.6vw,7.8rem)] font-normal italic tracking-[-0.02em] text-[#c8b89a]">
                {portfolioData.identity.displayLineOne}{" "}
                <span className="text-[#f4f0e8] not-italic">
                  {portfolioData.identity.displayLineTwo}
                </span>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-3">
            <p
              data-hero-reveal
              className="mb-6 max-w-md text-base leading-relaxed text-[#d4cfc4] sm:text-lg"
            >
              {portfolioData.identity.tagline}
            </p>

            <p
              data-hero-reveal
              className="mb-8 max-w-md border-l border-[#e84a27]/70 pl-4 font-mono text-xs leading-relaxed text-[#a9a397]"
            >
              {portfolioData.identity.intro}
            </p>

            <div data-hero-reveal className="flex flex-wrap items-center gap-3.5">
              <MagneticControl
                href="#projects"
                cursorLabel="EXPLORE"
                className="gap-2.5 bg-[#e84a27] px-6 py-3.5 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase hover:bg-[#ff5b36]"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </MagneticControl>

              <MagneticControl
                href="#contact"
                cursorLabel="CONTACT"
                className="gap-2 border border-white/25 bg-[#141412]/70 px-6 py-3.5 font-mono text-xs font-medium tracking-[0.14em] text-[#f4f0e8] uppercase hover:border-[#c8b89a] hover:bg-[#1c1b18]"
              >
                <span>Collaborate</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </MagneticControl>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Anchor & Stack Highlight Strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          data-hero-reveal
          className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-5 font-mono text-[11px] tracking-[0.14em] text-[#a9a397]"
        >
          <span className="max-w-2xl text-[#a9a397]">
            {portfolioData.meta.highlightStrip}
          </span>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[#f4f0e8] uppercase transition-colors hover:text-[#e84a27]"
          >
            <span>Scroll to enter</span>
            <span aria-hidden="true" className="text-[#e84a27]">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

