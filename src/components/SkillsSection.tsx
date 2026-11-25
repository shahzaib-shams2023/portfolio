"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { portfolioData, type SkillItem } from "@/data/portfolio";

export function SkillsSection() {
  const categories = portfolioData.skills.categories;
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [activeSkill, setActiveSkill] = useState<{
    categoryTitle: string;
    categoryCode: string;
    item: SkillItem;
  }>({
    categoryTitle: categories[0].title,
    categoryCode: categories[0].code,
    item: categories[0].items[0],
  });

  const visibleCategories = useMemo(() => {
    if (selectedCategoryId === "all") return categories;
    return categories.filter((c) => c.id === selectedCategoryId);
  }, [categories, selectedCategoryId]);

  const relatedProjects = useMemo(() => {
    return portfolioData.projects.items.filter((project) =>
      activeSkill.item.relatedProjectIds.includes(project.id)
    );
  }, [activeSkill]);

  return (
    <section
      id="skills"
      className="bg-arch-grid-dark relative border-t border-white/10 bg-[#0b0b0a] py-24 text-[#f4f0e8] sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/12 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
              {portfolioData.skills.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[0.98] font-extrabold tracking-tight">
              {portfolioData.skills.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#a9a397] sm:text-base">
            {portfolioData.skills.description}
          </p>
        </div>

        {/* Category Filter Bar */}
        <div
          role="group"
          aria-label="Filter capabilities by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setSelectedCategoryId("all")}
            aria-pressed={selectedCategoryId === "all"}
            className={`min-h-[40px] px-4 py-2 font-mono text-xs tracking-[0.12em] uppercase transition-colors ${
              selectedCategoryId === "all"
                ? "bg-[#e84a27] text-white"
                : "border border-white/15 bg-[#141412] text-[#a9a397] hover:border-white/35 hover:text-[#f4f0e8]"
            }`}
          >
            All Disciplines ({categories.length})
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                aria-pressed={isSelected}
                className={`min-h-[40px] px-4 py-2 font-mono text-xs tracking-[0.12em] uppercase transition-colors ${
                  isSelected
                    ? "bg-[#e84a27] text-white"
                    : "border border-white/15 bg-[#141412] text-[#a9a397] hover:border-white/35 hover:text-[#f4f0e8]"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Capability Matrix + Sticky Inspector */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7">
            {visibleCategories.map((category) => (
              <div
                key={category.id}
                className="border border-white/12 bg-[#141412]/80 p-6 sm:p-7"
              >
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-[#e84a27] uppercase">
                      {category.code}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-[#f4f0e8]">
                      {category.title}
                    </h3>
                  </div>
                  <p className="max-w-xs text-xs leading-relaxed text-[#a9a397]">
                    {category.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item) => {
                    const isFocused = activeSkill.item.name === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        data-cursor-label="INSPECT"
                        onClick={() =>
                          setActiveSkill({
                            categoryTitle: category.title,
                            categoryCode: category.code,
                            item,
                          })
                        }
                        onMouseEnter={() =>
                          setActiveSkill({
                            categoryTitle: category.title,
                            categoryCode: category.code,
                            item,
                          })
                        }
                        aria-pressed={isFocused}
                        className={`min-h-[42px] border px-4 py-2 text-left font-mono text-xs transition-all ${
                          isFocused
                            ? "border-[#e84a27] bg-[#e84a27]/15 text-[#f4f0e8]"
                            : "border-white/15 bg-[#0b0b0a] text-[#d4cfc4] hover:border-[#c8b89a]"
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Architectural Inspector */}
          <aside
            aria-live="polite"
            aria-label="Selected capability details"
            className="lg:col-span-5"
          >
            <div className="border border-white/15 bg-[#141412] p-7 sm:p-9 lg:sticky lg:top-24">
              <div className="mb-6 flex items-center justify-between border-b border-white/12 pb-4">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[#c8b89a] uppercase">
                  <Layers className="h-3.5 w-3.5 text-[#e84a27]" aria-hidden="true" />
                  Capability Inspector
                </span>
                <span className="font-mono text-xs text-[#e84a27]">
                  {activeSkill.categoryCode}
                </span>
              </div>

              <p className="font-mono text-xs tracking-[0.12em] text-[#a9a397] uppercase">
                {activeSkill.categoryTitle}
              </p>

              <h3 className="mt-2 font-display text-2xl font-bold text-[#f4f0e8] sm:text-3xl">
                {activeSkill.item.name}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#d4cfc4] sm:text-base">
                {activeSkill.item.context}
              </p>

              <div className="mt-8 border-t border-white/12 pt-6">
                <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-[#a9a397] uppercase">
                  Applied in Selected Works
                </p>

                {relatedProjects.length > 0 ? (
                  <ul className="space-y-2.5">
                    {relatedProjects.map((project) => (
                      <li key={project.id}>
                        <a
                          href="#projects"
                          className="group flex items-center justify-between border border-white/12 bg-[#0b0b0a] px-4 py-3 transition-colors hover:border-[#e84a27]"
                        >
                          <div>
                            <span className="mr-2.5 font-mono text-[11px] text-[#e84a27]">
                              {project.index}
                            </span>
                            <span className="text-sm font-medium text-[#f4f0e8]">
                              {project.subtitle}
                            </span>
                          </div>
                          <ArrowUpRight
                            className="h-4 w-4 text-[#a9a397] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#e84a27]"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-mono text-xs text-[#a9a397]">
                    Foundational practice across builds.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

