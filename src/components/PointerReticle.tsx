"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const FINE_POINTER_QUERY = "(pointer: fine)";

function subscribePointer(callback: () => void) {
  const mq = window.matchMedia(FINE_POINTER_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}

function getServerPointerSnapshot() {
  return false;
}

export function PointerReticle() {
  const reticleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const isFinePointer = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerPointerSnapshot
  );

  const enabled = !reducedMotion && isFinePointer;

  useEffect(() => {
    if (!enabled || !reticleRef.current) return;

    const reticle = reticleRef.current;
    const labelEl = labelRef.current;

    const moveX = gsap.quickTo(reticle, "x", {
      duration: 0.28,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(reticle, "y", {
      duration: 0.28,
      ease: "power3.out",
    });

    const handleMove = (e: PointerEvent) => {
      moveX(e.clientX);
      moveY(e.clientY);

      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor-label]"
      ) as HTMLElement | null;

      const label = target?.dataset.cursorLabel;
      if (label && labelEl) {
        labelEl.textContent = label;
        reticle.dataset.active = "true";
      } else {
        if (labelEl) labelEl.textContent = "";
        reticle.dataset.active = "false";
      }
    };

    const handleLeave = () => {
      reticle.style.opacity = "0";
    };

    const handleEnter = () => {
      reticle.style.opacity = "1";
    };

    const handleScrollOrBlur = () => {
      if (labelEl) labelEl.textContent = "";
      reticle.dataset.active = "false";
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScrollOrBlur, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleScrollOrBlur);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={reticleRef}
      aria-hidden="true"
      data-active="false"
      className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[opacity] duration-200 [&[data-active=true]_.reticle-pill]:scale-100 [&[data-active=true]_.reticle-pill]:opacity-100 [&[data-active=true]_.reticle-ring]:scale-50 [&[data-active=true]_.reticle-ring]:opacity-0"
    >
      <div className="reticle-ring h-7 w-7 rounded-full border border-[#e84a27]/55 transition-transform duration-200" />
      <span
        ref={labelRef}
        className="reticle-pill absolute left-4 top-4 scale-75 whitespace-nowrap border border-[#e84a27] bg-[#0b0b0a]/95 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-[#f4f0e8] uppercase opacity-0 transition-all duration-200"
      />
    </div>
  );
}
