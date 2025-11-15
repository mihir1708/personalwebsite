import { motion } from "framer-motion";
import { SectionIntro } from "../components/SectionIntro";

const experience = [
  {
    period: "Jan 2025 – Aug 2025",
    company: "Bot Auto TX Inc.",
    role: "Software Engineering Intern",
    achievements: [
      "Built safety-event matcher, dispatch scheduler, and trip data pipeline powering a 6-truck autonomous fleet.",
      "Integrated REST services and automated alerts to boost incident traceability for engineers and fleet ops.",
      "Designed Python data-matching algorithms that eliminated manual CPM calculations for finance stakeholders.",
      "Partnered with operations on requirements, documentation, and Docker/AWS deployments for each launch."
    ],
    stack: ["Python", "AWS", "Docker", "SQLAlchemy", "REST APIs", "Pandas"]
  },
  {
    period: "May 2023 – Jul 2023",
    company: "Core42 (G42)",
    role: "Software Intern — Digital Humans",
    achievements: [
      "Shipped a production-ready 3D character across Unreal Engine, Blender, and NVIDIA Omniverse in a 4-person team.",
      "Implemented audio-driven facial sync with Audio2Face and custom TTS, delivering lifelike real-time performances."
    ],
    stack: ["Unreal Engine", "Blender", "NVIDIA Omniverse", "Python", "Audio2Face"]
  },
  {
    period: "Sep 2024 – Dec 2024",
    company: "UAlberta Dean’s Research",
    role: "Undergraduate Researcher — Generative AI",
    achievements: [
      "Built an NLP pipeline for smart-city datasets with zero-shot topic classification and confidence-ranked insights.",
      "Benchmarked GPT/BERT/BART, selecting BART-Large-MNLI for accuracy and presenting findings in a faculty showcase."
    ],
    stack: ["Python", "Hugging Face", "BART", "Data Engineering"]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience">
      <div className="section-shell experience">
        <SectionIntro
          eyebrow="Experience"
          title="Learning at the intersection of autonomy, 3D, and AI."
          description="I thrive on translating ambiguous requirements into tested, documented systems—whether that’s an autonomous fleet, a digital human prototype, or a research pipeline."
        />
        <div className="experience__timeline">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              className="experience__item glass-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <header className="experience__header">
                <span className="experience__period">{item.period}</span>
                <div>
                  <h3>{item.company}</h3>
                  <p className="experience__role">{item.role}</p>
                </div>
              </header>
              <ul className="experience__achievements">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <footer className="experience__footer">
                <span>Stack</span>
                <div className="experience__stack">
                  {item.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

