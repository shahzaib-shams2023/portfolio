"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-arch-grid-dark relative border-t border-white/10 bg-[#0b0b0a] py-24 text-[#f4f0e8] sm:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/12 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
              {portfolioData.services.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[0.98] font-extrabold tracking-tight">
              {portfolioData.services.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#a9a397] sm:text-base">
            {portfolioData.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/12 md:grid-cols-2">
          {portfolioData.services.items.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between bg-[#0b0b0a] p-7 transition-colors hover:bg-[#141412] sm:p-10"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.18em] text-[#e84a27] uppercase">
                    Service {service.index}
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Inquire about ${service.title}`}
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#a9a397] transition-colors group-hover:border-[#e84a27] group-hover:text-[#e84a27]"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <h3 className="font-display text-2xl leading-tight font-bold text-[#f4f0e8] sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-2 font-serif text-lg italic text-[#c8b89a]">
                  {service.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#a9a397] sm:text-base">
                  {service.description}
                </p>
              </div>

              <ul className="mt-8 space-y-2 border-t border-white/10 pt-5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-mono text-xs text-[#d4cfc4]"
                  >
                    <span className="h-1.5 w-1.5 bg-[#e84a27]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

