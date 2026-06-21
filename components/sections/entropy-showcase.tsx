"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Braces, Shuffle } from "lucide-react";

import { Entropy } from "@/components/ui/entropy";

/**
 * EntropyShowcase
 * ---------------------------------------------------------------
 * A visual interlude between content sections, showcasing the
 * order-vs-chaos particle simulation. Styled to match the
 * portfolio's HUD/targeting-frame aesthetic with reticle borders,
 * mono readouts, and glass surfaces.
 */
export function EntropyShowcase() {
  return (
    <section
      id="entropy"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="Entropy — order vs chaos visualisation"
    >
      {/* subtle background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(61,127,255,0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-edge relative z-10">
        {/* section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mono-label mb-3">// VISUALISATION</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Order &amp; Entropy
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            A real-time particle simulation exploring the boundary between
            structure and chaos — mirroring how innovation emerges at the edge of
            the unknown.
          </p>
        </motion.div>

        {/* main canvas card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="reticle mx-auto max-w-2xl"
        >
          <div className="glass rounded-xl border border-border-strong/40 p-1.5">
            {/* HUD top bar */}
            <div className="flex items-center justify-between rounded-t-lg border-b border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="flex items-center gap-2">
                <Braces className="h-3 w-3 text-electric-bright" aria-hidden="true" />
                PARTICLE.SIM
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-electric-glow" />
                RUNNING
              </span>
            </div>

            {/* canvas wrapper — centred with rounded corners */}
            <div className="flex items-center justify-center overflow-hidden rounded-b-lg bg-black p-4 sm:p-6">
              <Entropy size={460} className="rounded-lg" />
            </div>
          </div>
        </motion.div>

        {/* legend row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-foreground/80" />
            Order
          </span>
          <span className="flex items-center gap-2">
            <Shuffle className="h-3 w-3 text-electric-bright" aria-hidden="true" />
            Chaos
          </span>
          <span className="hidden text-border-strong sm:inline">|</span>
          <span className="italic text-muted/70">
            &ldquo;Digital poetry in motion&rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
