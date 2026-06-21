"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InteractiveDotsBackgroundProps {
  className?: string;
  /** Spacing between dots in pixels */
  spacing?: number;
  /** Base dot radius in pixels */
  dotRadius?: number;
  /** Radius (px) of the cursor's influence field */
  influenceRadius?: number;
  /** Base dot color (rgb triplet, no commas spaces ok) */
  color?: string;
  /** Highlight color used near the cursor */
  highlightColor?: string;
}

/**
 * InteractiveDotsBackground
 * ---------------------------------------------------------------
 * A subtle, performant canvas grid of dots that brighten and drift
 * toward the cursor within a falloff radius. Pointer-events are
 * disabled on the canvas itself so it never blocks interaction
 * with content above it. Respects prefers-reduced-motion by
 * rendering a static grid with no animation loop.
 */
export function InteractiveDotsBackground({
  className,
  spacing = 28,
  dotRadius = 1.1,
  influenceRadius = 160,
  color = "61, 127, 255",
  highlightColor = "94, 166, 255",
}: InteractiveDotsBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const mouse = React.useRef({ x: -9999, y: -9999 });
  const rafRef = React.useRef<number>(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots: { x: number; y: number }[] = [];

    function buildGrid() {
      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({ x: i * spacing, y: j * spacing });
        }
      }
    }

    function resize() {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      buildGrid();
      if (prefersReducedMotion) drawStatic();
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(${color}, 0.35)`;
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const { x: mx, y: my } = mouse.current;

      for (const dot of dots) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / influenceRadius);

        const radius = dotRadius + t * 1.8;
        const alpha = 0.18 + t * 0.65;

        // subtle drift away from cursor for a "field" feel
        const drift = t * 3;
        const angle = Math.atan2(dy, dx);
        const ox = dot.x + Math.cos(angle) * drift;
        const oy = dot.y + Math.sin(angle) * drift;

        ctx.beginPath();
        ctx.arc(ox, oy, radius, 0, Math.PI * 2);
        ctx.fillStyle =
          t > 0.05
            ? `rgba(${highlightColor}, ${alpha})`
            : `rgba(${color}, ${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function handlePointerLeave() {
      mouse.current = { x: -9999, y: -9999 };
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    if (!prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [spacing, dotRadius, influenceRadius, color, highlightColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
