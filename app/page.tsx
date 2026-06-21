import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FloatingCvButton } from "@/components/floating-cv-button";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Harvestflow } from "@/components/sections/harvestflow";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Harvestflow />
      <Achievements />
      <Skills />
      <Contact />
      <FloatingCvButton />
    </main>
  );
}
