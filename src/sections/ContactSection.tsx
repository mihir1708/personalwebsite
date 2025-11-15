import { motion } from "framer-motion";
import { SectionIntro } from "../components/SectionIntro";

const signals = [
  { label: "Phone", value: "+1 (780) 297-7446" },
  { label: "Email", value: "mmukhi@ualberta.ca", href: "mailto:mmukhi@ualberta.ca" },
  { label: "LinkedIn", value: "linkedin.com/in/mihirmukhi", href: "https://linkedin.com/in/mihirmukhi" },
  { label: "GitHub", value: "github.com/mihir1708", href: "https://github.com/mihir1708" }
];

export function ContactSection() {
  return (
    <section id="connect">
      <div className="section-shell contact">
        <SectionIntro
          eyebrow="Let’s collaborate"
          title="Building something ambitious?"
          description="I’m looking for teams tackling hard problems with care, curiosity, and great taste. Drop a line and let’s explore how I can contribute."
        />
        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {signals.map((signal) => (
            <div key={signal.label} className="contact__tile glass-card">
              <span className="contact__label">{signal.label}</span>
              {signal.href ? (
                <a className="contact__value" href={signal.href} target="_blank" rel="noreferrer">
                  {signal.value}
                </a>
              ) : (
                <span className="contact__value">{signal.value}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

