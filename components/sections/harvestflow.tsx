"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, MapPin, Rocket, Store, TrendingUp, Truck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { harvestflow } from "@/lib/data";

const pillarIcons = [Store, TrendingUp, Truck];
const milestoneIcons = [Award, MapPin, Rocket];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Harvestflow() {
  return (
    <section
      id="harvestflow"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* ambient radar-style ring, echoing the drone-hackathon origin */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full border border-electric/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] scale-75 rounded-full border border-electric/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] scale-50 rounded-full border border-electric/10"
      />

      <div className="container-edge relative">
        <SectionHeading
          index="03"
          title="Featured Project"
          description="From a 48-hour hackathon prototype to a venture in active development."
        />

        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <Card className="reticle overflow-hidden border-amber/20">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Badge variant="amber" className="text-sm">
                  {harvestflow.award}
                </Badge>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Drones for Africa Hackathon
                </span>
              </div>

              <h3 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {harvestflow.name}
              </h3>
              <p className="mt-4 max-w-2xl text-lg text-foreground/90">
                {harvestflow.oneLiner}
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted">
                {harvestflow.description}
              </p>

              {/* milestone strip */}
              <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
                {harvestflow.milestones.map((m, i) => {
                  const Icon = milestoneIcons[i % milestoneIcons.length];
                  return (
                    <div key={m.label} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-bright" aria-hidden="true" />
                      <div>
                        <p className="mono-label">{m.label}</p>
                        <p className="mt-1 text-sm text-foreground/90">{m.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10">
                <Button asChild variant="outline">
                  <a href={harvestflow.caseStudyHref}>
                    Read the full case study
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* three pillars */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {harvestflow.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <motion.div
                key={pillar.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="reticle h-full">
                  <CardContent className="p-7">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-electric/30 bg-electric/10">
                      <Icon className="h-5 w-5 text-electric-bright" aria-hidden="true" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pillar.detail}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
