"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, GitBranch, Maximize2 } from "lucide-react";
import { portfolioData, type ProjectItem } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectDrawer } from "@/components/ProjectDrawer";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerProject, setDrawerProject] = useState<ProjectItem | null>(null);
  const reducedMotion = useReducedMotion();

  const projects = portfolioData.projects.items;

  useGSAP(
    () => {
      if (reducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const wrapper = trackWrapperRef.current;
        const track = trackRef.current;
        if (!wrapper || !track) return;

        const getScrollAmount = () => {
          return Math.max(track.scrollWidth - wrapper.clientWidth, 0);
        };

        gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${Math.max(getScrollAmount(), 400)}`,
            pin: true,
            scrub: 0.75,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                projects.length - 1,
                Math.floor(self.progress * projects.length)
              );
              setActiveIndex(idx);
            },
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reducedMotion, projects.length] }
  );

  const jumpToCard = (idx: number) => {
    setActiveIndex(idx);
    const card = document.getElementById(`project-card-${projects[idx].id}`);
    if (!card) return;

    // On mobile/vertical layout, scroll card into view directly
    if (window.innerWidth < 1024 || reducedMotion) {
      card.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }

    // On desktop pinned track, calculate corresponding scroll position
    const wrapper = trackWrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const trigger = ScrollTrigger.getAll().find((st) => st.trigger === wrapper);
    if (trigger) {
      const ratio = projects.length > 1 ? idx / (projects.length - 1) : 0;
      const targetScroll = trigger.start + (trigger.end - trigger.start) * ratio;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-t border-white/10 bg-[#0b0b0a] text-[#f4f0e8]"
    >
      {/* Editorial Intro Header */}
      <div className="mx-auto max-w-[1440px] px-5 pt-24 pb-10 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-white/12 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
              {portfolioData.projects.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[0.98] font-extrabold tracking-tight">
              {portfolioData.projects.headline}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-[#a9a397] sm:text-base">
            {portfolioData.projects.description}
          </p>
        </div>
      </div>

      {/* Pinned Horizontal Stage on Desktop / Vertical Editorial Chapters on Mobile */}
      <div
        ref={trackWrapperRef}
        className="relative overflow-hidden lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:py-8"
      >
        {/* Desktop Chapter Progress Bar */}
        <div className="mx-auto mb-6 hidden w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:flex lg:px-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#a9a397]">
            <span className="text-[#e84a27]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
            <span className="ml-3 uppercase tracking-[0.14em]">
              Scroll or select chapter
            </span>
          </div>

          <div className="flex items-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => jumpToCard(idx)}
                className={`min-h-[36px] border px-3 py-1 font-mono text-[11px] transition-colors ${
                  activeIndex === idx
                    ? "border-[#e84a27] bg-[#e84a27] text-white"
                    : "border-white/15 text-[#a9a397] hover:border-white/35 hover:text-[#f4f0e8]"
                }`}
              >
                {p.index}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Track */}
        <div
          ref={trackRef}
          className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-5 pb-20 sm:px-8 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-10 lg:px-12 lg:pb-0"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="grid w-full shrink-0 grid-cols-1 gap-7 border border-white/12 bg-[#141412] p-6 sm:p-8 lg:w-[82vw] lg:max-w-[1140px] lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10"
            >
              {/* Visual Preview Column */}
              <div className="lg:col-span-6">
                <ProjectVisual
                  theme={project.visualTheme}
                  index={project.index}
                  subtitle={project.subtitle}
                />
              </div>

              {/* Editorial Detail Column */}
              <div className="flex flex-col justify-between gap-6 lg:col-span-6">
                <div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.14em] uppercase">
                    <span className="text-[#e84a27]">
                      {project.index} {"//"} {project.category}
                    </span>
                    <span className="text-[#c8b89a]">{project.year}</span>
                  </div>

                  <h3 className="font-display text-2xl leading-tight font-bold text-[#f4f0e8] sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#d4cfc4] sm:text-base">
                    {project.description}
                  </p>

                  <p className="mt-4 border-l border-[#e84a27]/70 pl-3.5 text-xs leading-relaxed text-[#a9a397] sm:text-sm">
                    <strong className="font-mono text-[11px] text-[#f4f0e8] uppercase">
                      Problem:{" "}
                    </strong>
                    {project.problem}
                  </p>

                  <div className="mt-5">
                    <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-[#c8b89a] uppercase">
                      Role: {project.role}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/12 bg-[#0b0b0a] px-2.5 py-1 font-mono text-[11px] text-[#d4cfc4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    data-cursor-label="CASE STUDY"
                    onClick={() => setDrawerProject(project)}
                    className="inline-flex min-h-[44px] items-center gap-2 bg-[#e84a27] px-5 py-2.5 font-mono text-xs tracking-[0.12em] text-white uppercase transition-colors hover:bg-[#ff5b36]"
                  >
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Inspect Case Study</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="LIVE"
                      className="inline-flex min-h-[44px] items-center gap-1.5 border border-white/20 px-4 py-2.5 font-mono text-xs tracking-[0.12em] text-[#f4f0e8] uppercase transition-colors hover:border-[#c8b89a]"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="CODE"
                      className="inline-flex min-h-[44px] items-center gap-1.5 border border-white/20 px-4 py-2.5 font-mono text-xs tracking-[0.12em] text-[#f4f0e8] uppercase transition-colors hover:border-[#c8b89a]"
                    >
                      <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Source</span>
                    </a>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <span className="font-mono text-[11px] tracking-[0.12em] text-[#a9a397] uppercase">
                      Enterprise / Private Build
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={drawerProject}
        onClose={() => setDrawerProject(null)}
      />
    </section>
  );
}
