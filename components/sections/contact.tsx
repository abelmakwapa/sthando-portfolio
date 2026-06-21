import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const contactRows = [
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin, href: profile.linkedinUrl },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          index="06"
          title="Contact"
          description="Open to internships, collaborators, and conversations about African agri-tech."
        />

        <Card className="reticle border-electric/25">
          <CardContent className="grid gap-10 p-8 sm:p-12 md:grid-cols-2">
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">
                Let&apos;s build something useful.
              </p>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Whether it&apos;s HarvestFlow, finance work, or a first conversation about
                an internship — I respond fastest by email or LinkedIn.
              </p>

              <Button asChild size="lg" className="mt-8">
                <a href={profile.cvPath} download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Full CV
                </a>
              </Button>
            </div>

            <dl className="space-y-5">
              {contactRows.map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-strong">
                    <row.icon className="h-4 w-4 text-electric-bright" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="mono-label">{row.label}</dt>
                    {row.href ? (
                      <dd>
                        <a
                          href={row.href}
                          className="text-sm text-foreground/90 transition-colors hover:text-electric-bright"
                        >
                          {row.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="text-sm text-foreground/90">{row.value}</dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js, Tailwind, and shadcn/ui</span>
        </footer>
      </div>
    </section>
  );
}
