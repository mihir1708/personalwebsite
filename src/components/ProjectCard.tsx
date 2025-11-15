import { motion } from "framer-motion";
import { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  headline: string;
  description: string;
  tags: string[];
  cta?: ReactNode;
  index: number;
};

export function ProjectCard({ title, headline, description, tags, cta, index }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
    >
      <header className="project-card__header">
        <span className="project-card__index">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-card__headline">{headline}</p>
      </header>
      <p className="project-card__description">{description}</p>
      <footer className="project-card__footer">
        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {cta}
      </footer>
    </motion.article>
  );
}

