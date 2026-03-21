import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,13,26,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(34,211,238,0.08)" : "none",
      }}
    >
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-extrabold text-xl tracking-tight"
          style={{ color: "#e2f4ff" }}
        >
          Romy<span style={{ color: "#22d3ee" }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#7a9ab8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e2f4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7a9ab8")}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-200"
              style={{ borderColor: "#22d3ee", color: "#22d3ee" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#22d3ee";
                e.currentTarget.style.color = "#080d1a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#22d3ee";
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#22d3ee" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#22d3ee" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#22d3ee" }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-5"
          style={{
            background: "#0d1526",
            borderTop: "1px solid rgba(34,211,238,0.1)",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium"
              style={{ color: "#c8d4e8" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
