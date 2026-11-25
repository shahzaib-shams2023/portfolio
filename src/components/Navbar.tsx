"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NAV_ITEMS = [
  { label: "About", href: "#about", index: "01" },
  { label: "Skills", href: "#skills", index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Journey", href: "#experience", index: "04" },
  { label: "Services", href: "#services", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(Math.max(y / maxScroll, 0), 1) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };

    closeBtnRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0b0b0a]/88 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div
          ref={progressRef}
          aria-hidden="true"
          className="h-[2px] w-full origin-left bg-[#e84a27]"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#hero"
            data-cursor-label="HOME"
            className="group flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-[#f4f0e8] uppercase"
          >
            <span className="inline-block h-2.5 w-2.5 bg-[#e84a27] transition-transform duration-300 group-hover:rotate-45" />
            <span>{portfolioData.identity.name}</span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group inline-flex items-baseline gap-1.5 py-2 font-mono text-xs tracking-[0.12em] text-[#a9a397] uppercase transition-colors hover:text-[#f4f0e8]"
              >
                <span className="text-[10px] text-[#e84a27] opacity-80">
                  {item.index}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-cursor-label="TALK"
              className="hidden items-center gap-2 border border-white/20 px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-[#f4f0e8] uppercase transition-colors hover:border-[#e84a27] hover:bg-[#e84a27] hover:text-white sm:inline-flex"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              ref={menuBtnRef}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#f4f0e8] transition-colors hover:border-[#e84a27] lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Navigation Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#0b0b0a] p-6 sm:p-10 ${
            reducedMotion ? "" : "animate-in fade-in duration-200"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/12 pb-5">
            <span className="font-mono text-xs tracking-[0.16em] text-[#a9a397] uppercase">
              Index // Navigation
            </span>
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={() => {
                setMenuOpen(false);
                menuBtnRef.current?.focus();
              }}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#f4f0e8] hover:border-[#e84a27]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="my-auto flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-baseline justify-between border-b border-white/10 py-3.5 font-display text-3xl font-bold tracking-tight text-[#f4f0e8] transition-colors hover:text-[#e84a27] sm:text-4xl"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#e84a27]">
                  {item.index}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-5 font-mono text-xs text-[#a9a397]">
            <span>{portfolioData.identity.availability}</span>
            <a
              href={`mailto:${portfolioData.identity.email}`}
              className="text-[#f4f0e8] underline decoration-[#e84a27] underline-offset-4"
            >
              {portfolioData.identity.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

