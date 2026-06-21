import { Trophy } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading index="04" title="Achievements" />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <Card key={item.title} className="reticle h-full">
              <CardContent className="flex h-full flex-col p-7">
                <Trophy className="mb-4 h-6 w-6 text-amber-bright" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
