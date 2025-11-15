import { motion } from "framer-motion";

export function LayoutFooter() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer__inner">
        <div>
          <p className="footer__title">Mihir Mukhi</p>
          <p className="footer__tagline">Computer Engineering @ UAlberta — Autonomy, AI, and 3D storytelling.</p>
        </div>
        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Open to internships, research, and ambitious builder teams.</span>
          <span>Portfolio v0.2 — Resume-aligned content pass.</span>
        </div>
      </div>
    </motion.footer>
  );
}

