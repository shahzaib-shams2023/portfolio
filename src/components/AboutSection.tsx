"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePillarId, setActivePillarId] = useState(
    portfolioData.about.pillars[0].id
  );
  const reducedMotion = useReducedMotion();

  const activePillar =
    portfolioData.about.pillars.find((p) => p.id === activePillarId) ??
    portfolioData.about.pillars[0];

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.from("[data-about-reveal]", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-arch-grid-light relative bg-[#f2efe9] py-24 text-[#141311] sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          data-about-reveal
          className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#141311]/15 pb-4"
        >
          <span className="font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
            {portfolioData.about.eyebrow}
          </span>
          <span className="font-mono text-xs tracking-[0.14em] text-[#57534b] uppercase">
            Engineering & Product Philosophy
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Lead Quote */}
          <div className="lg:col-span-6">
            <h2
              data-about-reveal
              className="font-serif text-[clamp(2.25rem,4.5vw,4.1rem)] leading-[1.05] tracking-[-0.02em] text-[#141311]"
            >
              “{portfolioData.about.leadQuote}”
            </h2>

            <div data-about-reveal className="mt-10 border-t border-[#141311]/15 pt-6">
              <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-[#57534b] uppercase">
                Core Disciplines & Interests
              </p>
              <ul className="flex flex-wrap gap-2.5" aria-label="Core interests">
                {portfolioData.about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="border border-[#141311]/20 bg-[#e6e1d7]/70 px-3.5 py-2 font-mono text-xs text-[#141311]"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Narrative + Interactive Philosophy Lens */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-6">
            <div data-about-reveal className="space-y-5 text-base leading-[1.7] text-[#2b2924] sm:text-lg">
              {portfolioData.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div
              data-about-reveal
              className="border border-[#141311]/20 bg-[#e6e1d7]/60 p-6 sm:p-8"
            >
              <div
                role="tablist"
                aria-label="Engineering pillars"
                className="mb-6 flex flex-wrap gap-2 border-b border-[#141311]/15 pb-4"
              >
                {portfolioData.about.pillars.map((pillar) => {
                  const isActive = pillar.id === activePillar.id;
                  return (
                    <button
                      key={pillar.id}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      aria-controls={`pillar-panel-${pillar.id}`}
                      id={`pillar-tab-${pillar.id}`}
                      onClick={() => setActivePillarId(pillar.id)}
                      className={`min-h-[40px] px-3.5 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors ${
                        isActive
                          ? "bg-[#141311] text-[#f2efe9]"
                          : "border border-[#141311]/20 text-[#57534b] hover:border-[#141311] hover:text-[#141311]"
                      }`}
                    >
                      {pillar.label}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`pillar-panel-${activePillar.id}`}
                aria-labelledby={`pillar-tab-${activePillar.id}`}
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-[#141311] sm:text-2xl">
                  {activePillar.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534b] sm:text-base">
                  {activePillar.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

