"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight, GitBranch } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ProjectVisual";

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-project-title"
        className="relative flex h-full w-full max-w-2xl flex-col overflow-y-auto border-l border-white/15 bg-[#0b0b0a] p-6 text-[#f4f0e8] sm:p-10"
      >
        <div className="mb-8 flex items-center justify-between border-b border-white/12 pb-5">
          <div className="font-mono text-xs tracking-[0.16em] text-[#e84a27] uppercase">
            Case Study {project.index} {"//"} {project.year}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close project case study"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#f4f0e8] transition-colors hover:border-[#e84a27] hover:text-[#e84a27]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="font-mono text-xs tracking-[0.14em] text-[#c8b89a] uppercase">
          {project.category}
        </p>
        <h3
          id="drawer-project-title"
          className="mt-2 font-display text-3xl leading-tight font-bold text-[#f4f0e8] sm:text-4xl"
        >
          {project.name}
        </h3>
        <p className="mt-2 font-serif text-xl italic text-[#a9a397]">
          {project.subtitle}
        </p>

        <div className="mt-7">
          <ProjectVisual
            theme={project.visualTheme}
            index={project.index}
            subtitle={project.subtitle}
          />
        </div>

        <div className="mt-8 space-y-7 text-sm leading-relaxed text-[#d4cfc4] sm:text-base">
          <div>
            <h4 className="mb-2 font-mono text-[11px] tracking-[0.16em] text-[#e84a27] uppercase">
              Overview
            </h4>
            <p>{project.description}</p>
          </div>

          <div className="border-l-2 border-[#e84a27] pl-4">
            <h4 className="mb-1.5 font-mono text-[11px] tracking-[0.16em] text-[#c8b89a] uppercase">
              Problem Solved
            </h4>
            <p>{project.problem}</p>
          </div>

          <div>
            <h4 className="mb-2 font-mono text-[11px] tracking-[0.16em] text-[#c8b89a] uppercase">
              Role & Contributions — {project.role}
            </h4>
            <ul className="space-y-2">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="font-mono text-xs text-[#e84a27]">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2.5 font-mono text-[11px] tracking-[0.16em] text-[#c8b89a] uppercase">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((feat) => (
                <li
                  key={feat}
                  className="border border-white/12 bg-[#141412] px-3.5 py-2.5 font-mono text-xs text-[#f4f0e8]"
                >
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2.5 font-mono text-[11px] tracking-[0.16em] text-[#c8b89a] uppercase">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/15 px-3 py-1 font-mono text-xs text-[#d4cfc4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/12 pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 bg-[#e84a27] px-5 py-3 font-mono text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#ff5b36]"
            >
              <span>Live Project</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 border border-white/20 px-5 py-3 font-mono text-xs tracking-[0.14em] text-[#f4f0e8] uppercase transition-colors hover:border-[#c8b89a]"
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              <span>GitHub Repo</span>
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex min-h-[44px] items-center gap-2 bg-[#e84a27] px-5 py-3 font-mono text-xs tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#ff5b36]"
            >
              <span>Request Architecture Walkthrough</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
