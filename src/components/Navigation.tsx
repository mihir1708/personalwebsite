import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavigationProps = {
  sections: { id: string; label: string }[];
};

export function Navigation({ sections }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/mihirmukhi" },
    { label: "GitHub", href: "https://github.com/mihir1708" },
    { label: "Email", href: "mailto:mmukhi@ualberta.ca" }
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="nav-shell"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <button className="nav__brand" onClick={() => scrollTo("top")} aria-label="Scroll to top">
          <span className="nav__brand-glyph">MM</span>
          <span className="nav__brand-label">Mihir Mukhi</span>
        </button>
        <nav>
          <ul className="nav__links">
            {sections.map((section) => (
              <li key={section.id}>
                <button className="nav__link" onClick={() => scrollTo(section.id)}>
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__social">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="nav__social-link">
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav__cta" href="#connect">
          Let&apos;s build
        </a>
      </div>
    </motion.header>
  );
}

