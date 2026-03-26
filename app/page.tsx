import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { TimelineSection } from "@/components/sections/timeline";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}
