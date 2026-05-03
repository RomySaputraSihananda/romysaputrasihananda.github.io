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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: "#fafaf5",
        borderBottom: scrolled ? "3px solid #0a0a0a" : "3px solid transparent",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-extrabold text-xl tracking-tight"
          style={{ color: "#0a0a0a" }}
        >
          Romy<span style={{ color: "#ffe500", WebkitTextStroke: "1px #0a0a0a" }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-bold transition-all duration-150 hover:underline underline-offset-4"
                style={{ color: "#0a0a0a", textDecorationColor: "#ffe500", textDecorationThickness: "3px" }}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-bold px-5 py-2 transition-all duration-150 inline-block"
              style={{
                background: "#ffe500",
                color: "#0a0a0a",
                border: "2px solid #0a0a0a",
                boxShadow: "3px 3px 0 #0a0a0a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-2px, -2px)";
                e.currentTarget.style.boxShadow = "5px 5px 0 #0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "3px 3px 0 #0a0a0a";
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
            className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#0a0a0a" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#0a0a0a" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#0a0a0a" }}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "#fafaf5",
            borderTop: "3px solid #0a0a0a",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold"
              style={{ color: "#0a0a0a" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
