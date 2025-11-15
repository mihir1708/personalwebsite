import { motion } from "framer-motion";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <motion.header
      className="section-heading"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="pill">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.header>
  );
}

