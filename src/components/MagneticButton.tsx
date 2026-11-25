"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  cursorLabel?: string;
  strength?: number;
}

type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function MagneticControl(props: AnchorProps | ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const strength = props.strength ?? 0.24;

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(el, {
      x,
      y,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = () => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: "elastic.out(1, 0.45)",
      overwrite: "auto",
    });
  };

  if ("href" in props && props.href !== undefined) {
    const {
      children,
      className = "",
      cursorLabel,
      ...rest
    } = props;
    delete (rest as { strength?: number }).strength;
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        data-cursor-label={cursorLabel}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={`inline-flex min-h-[44px] items-center justify-center transition-colors ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    className = "",
    cursorLabel,
    type = "button",
    ...rest
  } = props;
  delete (rest as { strength?: number }).strength;

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      data-cursor-label={cursorLabel}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`inline-flex min-h-[44px] items-center justify-center transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
