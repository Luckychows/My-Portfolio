import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { ResumeSection } from "@/components/sections/resume-section";
import { Skills } from "@/components/sections/skills";
import { TerminalSection } from "@/components/sections/terminal-section";
import { Timeline } from "@/components/sections/timeline";
import { CustomCursor } from "@/components/custom-cursor";
import { CyberBackground } from "@/components/cyber-background";
import { LoadingScreen } from "@/components/loading-screen";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CyberBackground />
      <div className="noise" />
      <LoadingScreen />
      <CustomCursor />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <ResumeSection />
        <TerminalSection />
        <Contact />
      </div>
    </main>
  );
}
