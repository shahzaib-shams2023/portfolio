"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;

  // Compact 2D simplex-style value noise for architectural contour topology
  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));
    float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
    float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
    float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p = rot * p * 2.02;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 st = (vUv - 0.5) * aspect;
    vec2 ptr = (uPointer - 0.5) * aspect;

    float distToPointer = length(st - ptr);
    float pointerInfluence = exp(-distToPointer * 2.4);

    vec2 flow = st * 1.45 + vec2(uTime * 0.035, -uTime * 0.022);
    flow += (st - ptr) * pointerInfluence * 0.22;

    float field = fbm(flow + fbm(flow * 0.8 + uTime * 0.015));

    // Topographic elevation isolines
    float contourFreq = 16.0;
    float bands = abs(fract(field * contourFreq) - 0.5);
    float line = 1.0 - smoothstep(0.015, 0.055, bands);

    // Secondary major index contours
    float majorBands = abs(fract(field * 4.0) - 0.5);
    float majorLine = 1.0 - smoothstep(0.012, 0.042, majorBands);

    // Base warm obsidian ink
    vec3 obsidian = vec3(0.043, 0.043, 0.039);
    vec3 warmUmber = vec3(0.11, 0.095, 0.082);
    vec3 brass = vec3(0.784, 0.722, 0.604);
    vec3 vermilion = vec3(0.910, 0.290, 0.153);

    vec3 color = mix(obsidian, warmUmber, smoothstep(-0.35, 0.45, field) * 0.55);

    // Subtle illuminated contours near pointer + gentle ambient elevation lines
    float lineStrength = 0.10 + pointerInfluence * 0.34;
    color = mix(color, brass, line * lineStrength);
    color = mix(color, vermilion, majorLine * (0.08 + pointerInfluence * 0.48));

    // Vignette so center/left editorial typography retains crisp WCAG contrast
    float radialFade = smoothstep(1.25, 0.22, length(st));
    color = mix(obsidian, color, radialFade);

    // Subtle film dither to avoid gradient banding
    float dither = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.012;
    color += dither;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function TopographicCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (reducedMotion || webglFailed) return;

    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let frameId = 0;
    let isVisible = true;
    let isTabActive = document.visibilityState === "visible";

    const pointerTarget = new THREE.Vector2(0.68, 0.42);
    const pointerCurrent = new THREE.Vector2(0.68, 0.42);

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      queueMicrotask(() => setWebglFailed(true));
      return;
    }

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0.68, 0.42) },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      depthWrite: false,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const updateSize = () => {
      if (!renderer || !container) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const isMobile = width < 768;
      const maxDpr = isMobile ? 1.5 : 2;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width * dpr, height * dpr);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointerTarget.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      );
    };

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(frameId);
      setWebglFailed(true);
    };

    const handleVisibilityChange = () => {
      isTabActive = document.visibilityState === "visible";
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    canvas.addEventListener("webglcontextlost", handleContextLost);

    let lastTime = performance.now();

    const renderFrame = (now: number) => {
      frameId = requestAnimationFrame(renderFrame);
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isVisible || !isTabActive || !renderer) return;

      uniforms.uTime.value += delta;
      pointerCurrent.lerp(pointerTarget, 1 - Math.exp(-delta * 4.5));
      uniforms.uPointer.value.copy(pointerCurrent);

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      geometry.dispose();
      material.dispose();
      renderer?.dispose();
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, [reducedMotion, webglFailed]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0b0b0a]"
    >
      {/* Static architectural contour fallback for reduced-motion or WebGL fallback */}
      {(reducedMotion || webglFailed) && (
        <svg
          className="h-full w-full opacity-55"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <radialGradient id="heroWarmGlow" cx="72%" cy="38%" r="55%">
              <stop offset="0%" stopColor="#E84A27" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#C8B89A" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0B0B0A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#heroWarmGlow)" />
          <g stroke="#C8B89A" strokeOpacity="0.18" strokeWidth="1">
            <path d="M-80 650 C 260 540, 480 280, 920 340 C 1180 375, 1340 220, 1540 160" />
            <path d="M-60 720 C 310 610, 560 350, 970 410 C 1220 445, 1360 310, 1540 245" />
            <path d="M-40 790 C 360 670, 620 430, 1020 480 C 1260 510, 1390 390, 1540 340" />
            <path d="M120 -40 C 360 180, 640 120, 960 220 C 1180 290, 1340 160, 1520 90" />
          </g>
          <path
            d="M-80 560 C 260 440, 520 200, 960 270 C 1220 310, 1360 140, 1540 80"
            stroke="#E84A27"
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
        </svg>
      )}
    </div>
  );
}
