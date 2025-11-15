import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { HeroScene } from "../three/HeroScene";

const heroStats = [
  { label: "Internships", value: "2" },
  { label: "GPA", value: "3.8 / 4.0" },
  { label: "Scholarships", value: "4×" }
];

export function HeroSection() {
  const stats = useMemo(() => heroStats, []);

  return (
    <section id="top" className="hero">
      <div className="hero__canvas">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
          <color attach="background" args={["#03030a"]} />
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="hero__content">
        <motion.span
          className="hero__tag pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Computer Engineering Student · Autonomy & AI
        </motion.span>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Engineering dependable systems for{" "}
          <span className="rainbow-text">autonomous fleets</span> and intelligent products.
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          I’m Mihir, a computer engineering student at the University of Alberta building production software for
          autonomous trucking, interactive 3D experiences, and research-grade AI. I blend rigorous testing,
          full-stack craft, and storytelling visuals to ship tools teams trust.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        >
          <a className="hero__cta-primary" href="#work">
            View playground
          </a>
          <a className="hero__cta-secondary" href="#connect">
            Let&apos;s talk
          </a>
        </motion.div>

        <motion.dl
          className="hero__stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

