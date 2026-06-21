import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading index="02" title="Education" />

        <div className="space-y-6">
          {education.map((entry) => (
            <Card key={entry.institution} className="reticle">
              <CardContent className="flex flex-col gap-6 p-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-5">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-electric/30 bg-electric/10">
                    <GraduationCap className="h-5 w-5 text-electric-bright" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {entry.credential}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{entry.institution}</p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/80">
                      {entry.detail}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-start gap-3 sm:flex-col sm:items-end">
                  <Badge variant={entry.status === "current" ? "default" : "outline"}>
                    {entry.status === "current" ? "In Progress" : "Completed"}
                  </Badge>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    {entry.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
