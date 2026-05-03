export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#fafaf5" }}
    >
      <div
        className="absolute top-28 right-12 w-28 h-28 dot-pattern opacity-30 pointer-events-none"
      />
      <div
        className="absolute bottom-28 left-8 w-20 h-20 dot-pattern opacity-30 pointer-events-none"
      />
      <div
        className="absolute top-36 right-20 w-16 h-16 pointer-events-none"
        style={{ background: "#ffe500", border: "3px solid #0a0a0a", transform: "rotate(14deg)" }}
      />
      <div
        className="absolute bottom-36 left-16 w-10 h-10 pointer-events-none"
        style={{ background: "#ff4444", border: "3px solid #0a0a0a", transform: "rotate(-10deg)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20">
        <div
          className="animate-fade-up opacity-0-init delay-100 inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest"
          style={{
            background: "#ffe500",
            border: "2px solid #0a0a0a",
            boxShadow: "3px 3px 0 #0a0a0a",
          }}
        >
          Full Stack Developer &amp; Web3 Engineer
        </div>

        <h1
          className="animate-fade-up opacity-0-init delay-200 font-display font-extrabold leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#0a0a0a" }}
        >
          Hi, I'm
          <br />
          <span
            style={{
              background: "#ffe500",
              padding: "2px 8px",
              border: "3px solid #0a0a0a",
              boxShadow: "5px 5px 0 #0a0a0a",
              display: "inline-block",
              marginBottom: "4px",
            }}
          >
            Romy Saputra
          </span>
          <br />
          Sihananda
        </h1>

        <p
          className="animate-fade-up opacity-0-init delay-400 text-base max-w-xl leading-relaxed mb-10 font-medium"
          style={{ color: "#3d3d3d" }}
        >
          I build fast, scalable web applications and decentralized products —
          from pixel-perfect interfaces to robust backend systems and smart
          contracts. Based in Blitar 🇮🇩
        </p>

        <div className="animate-fade-up opacity-0-init delay-500 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold transition-all duration-150"
            style={{
              background: "#ffe500",
              color: "#0a0a0a",
              border: "3px solid #0a0a0a",
              boxShadow: "4px 4px 0 #0a0a0a",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-2px, -2px)";
              e.currentTarget.style.boxShadow = "6px 6px 0 #0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "4px 4px 0 #0a0a0a";
            }}
          >
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold transition-all duration-150"
            style={{
              background: "transparent",
              color: "#0a0a0a",
              border: "3px solid #0a0a0a",
              boxShadow: "4px 4px 0 #0a0a0a",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-2px, -2px)";
              e.currentTarget.style.boxShadow = "6px 6px 0 #0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "4px 4px 0 #0a0a0a";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
