import Avatar from "../assets/avatar.png";

export default function About() {
  const socials = [
    {
      href: "https://github.com/RomySaputraSihananda",
      title: "GitHub",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      href: "https://linkedin.com/in/romy-saputra-sihananda-495500270",
      title: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/romysihananda",
      title: "Twitter / X",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24" style={{ background: "#0a1020" }}>
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div
            className="aspect-[4/5] rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(34,211,238,0.12)" }}
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#22d3ee" }}
          >
            About Me
          </p>
          <h2
            className="font-display font-extrabold text-4xl leading-tight mb-6"
            style={{ color: "#e2f4ff" }}
          >
            Building for the
            <br />
            <span style={{ color: "#22d3ee" }}>Modern Web</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#7a9ab8" }}
          >
            I'm a Full Stack Developer based in Blitar, Indonesia. I specialize
            in building modern web applications — clean UIs, solid backends, and
            reliable infrastructure. When projects call for it, I also work with
            Web3: smart contracts, wallet integrations, and decentralized apps.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#7a9ab8" }}
          >
            I care about code quality, great user experience, and shipping
            products people actually use. When I'm not coding, I'm probably
            exploring the latest in tech or enjoying a cup of kopi susu ☕.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "PostgreSQL",
              "Solidity",
              "ethers.js",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  background: "rgba(34,211,238,0.05)",
                  borderColor: "rgba(34,211,238,0.15)",
                  color: "#c8d4e8",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200"
                style={{
                  borderColor: "rgba(34,211,238,0.15)",
                  color: "#7a9ab8",
                  background: "rgba(34,211,238,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#22d3ee";
                  e.currentTarget.style.color = "#22d3ee";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.15)";
                  e.currentTarget.style.color = "#7a9ab8";
                }}
              >
                {s.icon}
              </a>
            ))}
            <span className="text-sm ml-1" style={{ color: "#7a9ab8" }}>
              — Blitar, Indonesia
            </span>
          </div>

          {/* <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold border-b pb-0.5 transition-colors duration-200"
            style={{ color: "#22d3ee", borderColor: "rgba(34,211,238,0.3)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#22d3ee";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
            }}
          >
            Download Resume
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
}
