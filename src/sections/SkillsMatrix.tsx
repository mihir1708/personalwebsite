import { motion } from "framer-motion";
import { SectionIntro } from "../components/SectionIntro";

const skillGroups = [
  {
    title: "Backend & Data Systems",
    description:
      "Designing resilient services that move mission-critical data— from fleet telemetry pipelines to ETL workloads and analytics dashboards.",
    skills: ["Python", "C/C++", "SQL", "AWS", "Docker", "SQLAlchemy", "Pandas", "NumPy"]
  },
  {
    title: "Product & Platform Engineering",
    description:
      "Shipping full-stack features with strong testing habits, documentation, and CI/CD to keep teams confident in every release.",
    skills: ["React", "Node.js", "Django", "Android (Java)", "Firebase", "GitHub Actions", "Linux", "Git"]
  },
  {
    title: "AI, 3D & Visualization",
    description:
      "Blending creative engineering with ML research to build lifelike digital humans, generative pipelines, and immersive storytelling interfaces.",
    skills: ["Hugging Face", "TensorFlow", "Unreal Engine", "Blender", "Three.js", "Audio2Face", "Data Viz"]
  }
];

export function SkillsMatrix() {
  return (
    <section id="skills">
      <div className="section-shell skills">
        <SectionIntro
          eyebrow="Skill Matrix"
          title="Crafting reliable software across the stack."
          description="A snapshot of the languages, frameworks, and platforms I reach for when transforming requirements into dependable, human-centered solutions."
        />
        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="skills__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.12 }}
            >
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

