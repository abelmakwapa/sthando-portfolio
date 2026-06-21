import { Code2, LineChart, Users, Languages as LanguagesIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, typeof Code2> = {
  Technical: Code2,
  Finance: LineChart,
  "Soft Skills": Users,
  Languages: LanguagesIcon,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          index="05"
          title="Skills"
          description="A working set spanning code, capital, and communication."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            return (
              <Card key={group.category} className="reticle">
                <CardContent className="p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-electric/30 bg-electric/10">
                      <Icon className="h-5 w-5 text-electric-bright" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
