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
    <section id="about" className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div
            className="aspect-[4/5] overflow-hidden"
            style={{
              border: "3px solid #0a0a0a",
              boxShadow: "8px 8px 0 #0a0a0a",
            }}
          >
            <img src={Avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div
            className="absolute -bottom-3 -right-3 w-14 h-14 -z-10"
            style={{ background: "#ffe500", border: "3px solid #0a0a0a" }}
          />
        </div>

        <div>
          <div
            className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ background: "#0a0a0a", color: "#ffe500" }}
          >
            About Me
          </div>
          <h2
            className="font-display font-extrabold text-4xl leading-tight mb-6"
            style={{ color: "#0a0a0a" }}
          >
            Building for the
            <br />
            <span
              style={{
                background: "#ffe500",
                padding: "0 6px",
                border: "2px solid #0a0a0a",
                display: "inline",
              }}
            >
              Modern Web
            </span>
          </h2>
          <p className="text-base leading-relaxed mb-4 font-medium" style={{ color: "#3d3d3d" }}>
            I'm a Full Stack Developer based in Blitar, Indonesia. I specialize
            in building modern web applications — clean UIs, solid backends, and
            reliable infrastructure. When projects call for it, I also work with
            Web3: smart contracts, wallet integrations, and decentralized apps.
          </p>
          <p className="text-base leading-relaxed mb-8 font-medium" style={{ color: "#3d3d3d" }}>
            I care about code quality, great user experience, and shipping
            products people actually use. When I'm not coding, I'm probably
            exploring the latest in tech or enjoying a cup of kopi susu ☕.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "Solidity", "ethers.js", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-bold"
                style={{
                  background: "#fafaf5",
                  border: "2px solid #0a0a0a",
                  boxShadow: "2px 2px 0 #0a0a0a",
                  color: "#0a0a0a",
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
                className="w-9 h-9 flex items-center justify-center transition-all duration-150"
                style={{
                  border: "2px solid #0a0a0a",
                  boxShadow: "3px 3px 0 #0a0a0a",
                  color: "#0a0a0a",
                  background: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ffe500";
                  e.currentTarget.style.transform = "translate(-2px, -2px)";
                  e.currentTarget.style.boxShadow = "5px 5px 0 #0a0a0a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "3px 3px 0 #0a0a0a";
                }}
              >
                {s.icon}
              </a>
            ))}
            <span className="text-sm font-medium ml-2" style={{ color: "#3d3d3d" }}>
              — Blitar, Indonesia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
