"use client";

import type { ProjectItem } from "@/data/portfolio";

interface ProjectVisualProps {
  theme: ProjectItem["visualTheme"];
  index: string;
  subtitle: string;
  name?: string;
  imageUrl?: string;
  liveUrl?: string;
}

export function ProjectVisual({
  theme,
  index,
  subtitle,
  name,
  imageUrl,
  liveUrl,
}: ProjectVisualProps) {
  const content = (
    <div className="group/visual relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden border border-white/15 bg-[#11110f] p-5 sm:p-7">
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt={name ? `${name} preview` : `${subtitle} preview`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/visual:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/80 via-[#0b0b0a]/20 to-[#0b0b0a]/60" />
        </>
      ) : null}

      {/* Corner Registration Marks */}
      <div className="relative z-10 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.16em] text-[#a9a397] uppercase">
        <span className="shrink-0">FIG. {index} {"//"} ARCHETYPE</span>
        <span className="truncate text-right text-[#c8b89a]">{subtitle}</span>
      </div>

      {/* Theme-Specific Architectural Graphic (fallback when no imageUrl) */}
      {!imageUrl && (
        <div className="relative my-auto flex h-full w-full items-center justify-center py-3">
        {theme === "topology" && (
          <svg
            viewBox="0 0 560 280"
            className="h-full w-full"
            role="img"
            aria-label="Distributed system topology visual diagram"
          >
            <defs>
              <pattern
                id="topoGrid"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 28 0 L 0 0 0 28"
                  fill="none"
                  stroke="rgba(244,240,232,0.06)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="560" height="280" fill="url(#topoGrid)" />
            <g stroke="#C8B89A" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
              <path d="M90 140 C165 140, 175 65, 255 65" />
              <path d="M90 140 C165 140, 175 215, 255 215" />
              <path d="M255 65 C340 65, 345 140, 445 140" />
              <path d="M255 215 C340 215, 345 140, 445 140" />
            </g>
            <path
              d="M90 140 C165 140, 175 65, 255 65 C340 65, 345 140, 445 140"
              stroke="#E84A27"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
            />
            {[
              { x: 90, y: 140, label: "INGRESS", active: true },
              { x: 255, y: 65, label: "STREAM-01", active: true },
              { x: 255, y: 215, label: "CACHE-02", active: false },
              { x: 445, y: 140, label: "SINK", active: true },
            ].map((node) => (
              <g key={node.label} transform={`translate(${node.x}, ${node.y})`}>
                <circle
                  r="24"
                  fill="#0B0B0A"
                  stroke={node.active ? "#E84A27" : "#C8B89A"}
                  strokeWidth="1.5"
                />
                <circle
                  r="5"
                  fill={node.active ? "#E84A27" : "#C8B89A"}
                />
                <text
                  y="40"
                  textAnchor="middle"
                  fill="#F4F0E8"
                  fontSize="10"
                  fontFamily="monospace"
                  letterSpacing="1.5"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        )}

        {theme === "waveform" && (
          <svg
            viewBox="0 0 560 280"
            className="h-full w-full"
            role="img"
            aria-label="Shader contour wave field diagram"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
              const offset = idx * 24;
              const isHighlight = idx === 3;
              return (
                <path
                  key={idx}
                  d={`M 20 ${90 + offset * 0.6} C 150 ${20 + offset * 0.5}, 250 ${
                    220 - offset * 0.4
                  }, 380 ${110 + offset * 0.5} C 455 ${55 + offset * 0.35}, 510 ${
                    145 + offset * 0.25
                  }, 540 ${115 + offset * 0.4}`}
                  fill="none"
                  stroke={isHighlight ? "#E84A27" : "#C8B89A"}
                  strokeOpacity={isHighlight ? 0.95 : 0.22 + idx * 0.06}
                  strokeWidth={isHighlight ? 2.4 : 1.2}
                />
              );
            })}
            <circle
              cx="380"
              cy="132"
              r="34"
              fill="none"
              stroke="#E84A27"
              strokeOpacity="0.6"
              strokeDasharray="3 4"
            />
          </svg>
        )}

        {theme === "compiler" && (
          <div className="grid w-full max-w-md grid-cols-2 gap-3 text-left">
            <div className="border border-white/15 bg-[#f2efe9] p-4 text-[#141311]">
              <span className="font-mono text-[10px] tracking-[0.14em] text-[#57534b] uppercase">
                AA+ // PAPER
              </span>
              <p className="mt-2 font-serif text-3xl leading-none italic">Aa</p>
              <p className="mt-2 font-mono text-[10px]">#F2EFE9 / #141311</p>
            </div>
            <div className="border border-white/15 bg-[#e84a27] p-4 text-white">
              <span className="font-mono text-[10px] tracking-[0.14em] text-white/80 uppercase">
                SIGNAL ACCENT
              </span>
              <p className="mt-2 font-display text-3xl leading-none font-bold">
                16:10
              </p>
              <p className="mt-2 font-mono text-[10px]">clamp(2.8rem, 8vw)</p>
            </div>
            <div className="col-span-2 flex items-center justify-between border border-white/15 bg-[#0b0b0a] px-4 py-3 font-mono text-[11px] text-[#c8b89a]">
              <span>--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1)</span>
              <span className="text-[#e84a27]">TOKENS OK</span>
            </div>
          </div>
        )}

        {theme === "ledger" && (
          <div className="flex w-full max-w-md flex-col gap-2.5 font-mono text-[11px]">
            {[
              { seq: "0x01", cmd: "INIT_COMMAND", status: "COMMITTED" },
              { seq: "0x02", cmd: "VALIDATE_SCHEMA", status: "VERIFIED" },
              { seq: "0x03", cmd: "APPEND_LEDGER", status: "IMMUTABLE" },
            ].map((row, idx) => (
              <div
                key={row.seq}
                className={`flex items-center justify-between border px-4 py-3 ${
                  idx === 2
                    ? "border-[#e84a27] bg-[#e84a27]/12 text-[#f4f0e8]"
                    : "border-white/15 bg-[#0b0b0a] text-[#d4cfc4]"
                }`}
              >
                <span className="text-[#e84a27]">{row.seq}</span>
                <span>{row.cmd}</span>
                <span className="text-[#c8b89a]">{row.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      )}

      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-3.5 font-mono text-[10px] tracking-[0.12em] text-[#a9a397] uppercase">
        <span className="shrink-0">System Specimen</span>
        <span className="truncate text-right">Architectural Topology & Flow</span>
      </div>
    </div>
  );

  if (liveUrl) {
    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${name ?? subtitle} live site`}
        className="block transition-opacity hover:opacity-95"
      >
        {content}
      </a>
    );
  }

  return content;
}
