"use client";

import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { BackgroundEffects } from "@/components/portfolio/BackgroundEffects";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative bg-[#050505] text-white min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
        <BackgroundEffects />
        <Navbar />
        
        <main className="flex flex-col w-full overflow-hidden">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
