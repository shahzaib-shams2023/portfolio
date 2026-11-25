"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const items = portfolioData.experience.items;
  const [selectedId, setSelectedId] = useState(items[0].id);

  const activeItem = items.find((item) => item.id === selectedId) ?? items[0];

  return (
    <section
      id="experience"
      className="bg-arch-grid-light relative bg-[#f2efe9] py-24 text-[#141311] sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#141311]/15 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
              {portfolioData.experience.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[0.98] font-extrabold tracking-tight">
              {portfolioData.experience.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#57534b] sm:text-base">
            {portfolioData.experience.description}
          </p>
        </div>

        {/* Interactive Architectural Dossier Ledger */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Index Selector Column */}
          <div
            role="tablist"
            aria-label="Career and education milestones"
            className="flex flex-col border-t border-[#141311]/15 lg:col-span-5"
          >
            {items.map((item) => {
              const isSelected = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`exp-tab-${item.id}`}
                  aria-selected={isSelected}
                  aria-controls={`exp-panel-${item.id}`}
                  data-cursor-label="OPEN"
                  onClick={() => setSelectedId(item.id)}
                  className={`group flex w-full flex-col gap-1.5 border-b border-[#141311]/15 px-4 py-5 text-left transition-colors sm:px-6 ${
                    isSelected
                      ? "bg-[#141311] text-[#f2efe9]"
                      : "bg-transparent text-[#141311] hover:bg-[#e6e1d7]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase">
                    <span
                      className={
                        isSelected ? "text-[#e84a27]" : "text-[#e84a27]"
                      }
                    >
                      {item.period}
                    </span>
                    <span
                      className={
                        isSelected ? "text-[#c8b89a]" : "text-[#57534b]"
                      }
                    >
                      {item.type}
                    </span>
                  </div>

                  <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
                    {item.role}
                  </span>

                  <span
                    className={`font-mono text-xs ${
                      isSelected ? "text-[#d4cfc4]" : "text-[#57534b]"
                    }`}
                  >
                    {item.organization} · {item.location}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Dossier Viewport */}
          <div className="lg:col-span-7">
            <div
              role="tabpanel"
              id={`exp-panel-${activeItem.id}`}
              aria-labelledby={`exp-tab-${activeItem.id}`}
              className="flex h-full flex-col justify-between border border-[#141311]/20 bg-[#e6e1d7]/75 p-7 sm:p-10"
            >
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#141311]/15 pb-4 font-mono text-xs uppercase">
                  <span className="tracking-[0.14em] text-[#e84a27]">
                    {activeItem.type} {"//"} {activeItem.period}
                  </span>
                  <span className="text-[#57534b]">{activeItem.location}</span>
                </div>

                <h3 className="font-display text-2xl leading-tight font-bold text-[#141311] sm:text-3xl">
                  {activeItem.role}
                </h3>
                <p className="mt-1 font-serif text-xl italic text-[#57534b]">
                  {activeItem.organization}
                </p>

                <p className="mt-6 text-base leading-relaxed text-[#2b2924]">
                  {activeItem.summary}
                </p>

                <div className="mt-7">
                  <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-[#57534b] uppercase">
                    Key Highlights & Contributions
                  </p>
                  <ul className="space-y-2.5">
                    {activeItem.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#141311] sm:text-base"
                      >
                        <span className="mt-1 font-mono text-xs text-[#e84a27]">
                          0{idx + 1}
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[#141311]/15 pt-5">
                <p className="mb-2.5 font-mono text-[11px] tracking-[0.16em] text-[#57534b] uppercase">
                  Primary Environment
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeItem.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#141311]/20 bg-[#f2efe9] px-3 py-1 font-mono text-xs text-[#141311]"
                    >
                      {tech}
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
