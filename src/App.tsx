import { useEffect } from "react";
import Lenis from "lenis";
import { HeroSection } from "./sections/HeroSection";
import { Navigation } from "./components/Navigation";
import { ProjectShowcase } from "./sections/ProjectShowcase";
import { ExperienceTimeline } from "./sections/ExperienceTimeline";
import { SkillsMatrix } from "./sections/SkillsMatrix";
import { ContactSection } from "./sections/ContactSection";
import { LayoutFooter } from "./components/LayoutFooter";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Connect" }
];

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navigation sections={sections} />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ContactSection />
      </main>
      <LayoutFooter />
    </>
  );
}

export default App;

