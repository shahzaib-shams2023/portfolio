"use client";

import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const reducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="border-t border-white/12 bg-[#0b0b0a] pt-16 pb-10 text-[#f4f0e8]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {portfolioData.identity.name}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#a9a397]">
              {portfolioData.identity.title}
            </p>
            <p className="mt-4 font-mono text-xs text-[#c8b89a]">
              {portfolioData.identity.email}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-[#a9a397] uppercase">
              Sections
            </p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-[#d4cfc4] transition-colors hover:text-[#e84a27]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col justify-between md:col-span-3 md:items-end">
            <div className="w-full md:text-right">
              <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-[#a9a397] uppercase">
                Socials
              </p>
              <ul className="flex flex-wrap gap-4 md:justify-end">
                {portfolioData.contact.socials.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#d4cfc4] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#e84a27] hover:decoration-[#e84a27]"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              data-cursor-label="TOP"
              className="mt-8 inline-flex min-h-[42px] items-center gap-2 border border-white/20 px-4 py-2 font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:border-[#e84a27] hover:text-[#e84a27]"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#a9a397]">
          <span>
            © {year} {portfolioData.identity.copyrightOwner}. All rights
            reserved.
          </span>
          <span>
            {portfolioData.identity.location} · Built with Next.js, Three.js &
            GSAP
          </span>
        </div>
      </div>
    </footer>
  );
}

