"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Radio } from "lucide-react";

import { InteractiveDotsBackground } from "@/components/interactive-dots-background";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

/**
 * Hero
 * ---------------------------------------------------------------
 * Adapted from a cyber-tech "ascii hero" concept: a full-bleed
 * frame with corner brackets, mono coordinate/status readouts,
 * and a scanning highlight line — reframed around Sthando's
 * identity instead of placeholder brand copy. The HUD/targeting
 * language deliberately echoes the drone-hackathon origin of
 * HarvestFlow, tying the personal brand to the headline project.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-background pt-24"
    >
      <InteractiveDotsBackground />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div
        className="pointer-events-none absolute inset-0 scanline-overlay opacity-30"
        aria-hidden="true"
      />

      <div className="container-edge relative z-10">
        <div className="reticle relative mx-auto border border-border-strong/60 px-6 py-14 sm:px-12 sm:py-20">
          {/* scanning highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden opacity-60"
            aria-hidden="true"
          >
            <div className="h-px w-1/3 animate-scan bg-gradient-to-r from-transparent via-electric-glow to-transparent" />
          </div>

          {/* top readout row */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="flex items-center gap-2">
              <Radio className="h-3 w-3 text-amber" aria-hidden="true" />
              {profile.location} // -24.6282°S, 25.9231°E
            </span>
            <span className="flex items-center gap-2 text-electric-bright">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-electric-glow" />
              STATUS: BUILDING HARVESTFLOW
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono-label mb-5"
          >
            // PORTFOLIO — V.2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient-electric text-glow">
              Sthando Abel
            </span>
            <br />
            <span className="text-foreground">Makwapa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl font-display text-lg text-foreground/90 sm:text-xl"
          >
            &ldquo;{profile.heroMessage}&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a href="#harvestflow">View HarvestFlow</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.cvPath} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* bottom readout row */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>{profile.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>{profile.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{profile.linkedin}</span>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-electric-bright"
          aria-label="Scroll to About section"
        >
          Scroll
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
