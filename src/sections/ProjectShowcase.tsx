import { ProjectCard } from "../components/ProjectCard";
import { SectionIntro } from "../components/SectionIntro";

const projects = [
  {
    title: "Custom Linux Shell",
    headline: "Teaching Unix fundamentals with a production-grade command runner",
    description:
      "A C-based shell that supports built-ins, foreground/background execution, redirection, and piping—all rigorously tested with valgrind and GDB to ensure memory safety and deterministic behavior in teaching labs.",
    tags: ["C", "POSIX", "Signals", "Systems Programming"]
  },
  {
    title: "Event Lottery App",
    headline: "Secure Android platform automating campus event draws",
    description:
      "A role-based Android app that lets organizers configure lotteries, spin up Firebase-backed authentication, and run auditable draws with strong validation, modular architecture, and story-driven unit tests.",
    tags: ["Android", "Java", "Firebase", "Clean Architecture"]
  },
  {
    title: "StaySharp",
    headline: "Driver alertness insights for the UofA Engineering Challenge",
    description:
      "A Django web experience that ingests heart-rate data, classifies driver fatigue with HRV analytics, and fires threshold-based alerts—complete with real-time dashboards and daily compliance reports.",
    tags: ["Python", "Django", "Data Visualization", "SQLite"]
  }
];

export function ProjectShowcase() {
  return (
    <section id="work">
      <div className="section-shell project-showcase">
        <SectionIntro
          eyebrow="Featured builds"
          title="Shipping tools that make autonomy and analytics human."
          description="Hands-on projects from labs and competitions that showcase my range—from systems programming to data-rich mobile and web experiences."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

