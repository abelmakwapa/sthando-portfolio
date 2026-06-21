import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { objective } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          index="01"
          title="About"
          description="Where finance fundamentals meet a builder's instinct."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="reticle">
            <CardContent className="p-8">
              <p className="mono-label mb-4">Objective</p>
              <p className="leading-relaxed text-foreground/90">{objective.body}</p>
            </CardContent>
          </Card>

          <Card className="reticle">
            <CardContent className="p-8">
              <p className="mono-label mb-4">Bio</p>
              <p className="leading-relaxed text-foreground/90">{objective.bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
