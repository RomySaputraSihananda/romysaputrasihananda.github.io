export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
      style={{ background: "#080d1a" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1
          className="animate-fade-up opacity-0-init delay-200 font-display font-extrabold leading-none mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#e2f4ff" }}
        >
          Hi, I'm
          <br />
          <span className="text-glow" style={{ color: "#22d3ee" }}>
            Romy Saputra Sihananda
          </span>
        </h1>

        <h2
          className="animate-fade-up opacity-0-init delay-300 font-display text-2xl font-semibold mb-6"
          style={{ color: "#7a9ab8" }}
        >
          Full Stack Developer &amp; Web3 Engineer
        </h2>

        <p
          className="animate-fade-up opacity-0-init delay-400 text-base max-w-xl leading-relaxed mb-10"
          style={{ color: "#7a9ab8" }}
        >
          I build fast, scalable web applications and decentralized products —
          from pixel-perfect interfaces to robust backend systems and smart
          contracts. Based in Blitar 🇮🇩
        </p>

        <div className="animate-fade-up opacity-0-init delay-500 flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ background: "#22d3ee", color: "#080d1a" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#67e8f9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#22d3ee";
            }}
          >
            View Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200"
            style={{ borderColor: "rgba(34,211,238,0.3)", color: "#c8d4e8" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#22d3ee";
              e.currentTarget.style.color = "#22d3ee";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
              e.currentTarget.style.color = "#c8d4e8";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
