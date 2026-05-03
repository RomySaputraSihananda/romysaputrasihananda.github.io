import { useEffect, useState } from "react";

const GITHUB_USERNAME = "romysaputrasihananda";

const HIDE_LANGS = new Set([
  "HTML", "CSS", "SCSS", "Sass", "Blade", "Angular", "Smarty",
]);

const LANG_COLOR: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#eab308",
  Solidity: "#aa6746",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  "C++": "#f34b7d",
  Java: "#b07219",
  Dart: "#00B4AB",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

const MANUAL_TOOLS = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "Node.js / Express", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Docker / AWS", category: "DevOps" },
  { name: "ethers.js / Wagmi", category: "Web3" },
  { name: "Hardhat / Foundry", category: "Web3" },
  { name: "REST & GraphQL", category: "Backend" },
  { name: "Git & CI/CD", category: "DevOps" },
];

const CAT_BG: Record<string, string> = {
  Frontend: "#a8d8ff",
  Backend: "#b8f0d0",
  Web3: "#e0c8ff",
  DevOps: "#ffe5a0",
};

interface Repo {
  language: string | null;
  fork: boolean;
}

export default function Skills() {
  const [langs, setLangs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then((r) => r.json())
      .then((repos: Repo[]) => {
        const count: Record<string, number> = {};
        repos
          .filter((r) => !r.fork && r.language)
          .forEach((r) => {
            count[r.language!] = (count[r.language!] ?? 0) + 1;
          });

        const sorted = Object.entries(count)
          .filter(([lang]) => !HIDE_LANGS.has(lang))
          .sort(([, a], [, b]) => b - a)
          .slice(0, 10)
          .map(([lang]) => lang);

        setLangs(sorted);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <div
            className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ background: "#0a0a0a", color: "#ffe500" }}
          >
            Expertise
          </div>
          <h2 className="font-display font-extrabold text-4xl" style={{ color: "#0a0a0a" }}>
            Stack &amp; Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="p-6"
            style={{
              background: "#fafaf5",
              border: "3px solid #0a0a0a",
              boxShadow: "4px 4px 0 #0a0a0a",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg" style={{ color: "#0a0a0a" }}>
                Languages
              </h3>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold transition-all duration-150 px-2 py-1"
                style={{ color: "#0a0a0a", border: "2px solid #0a0a0a" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#ffe500"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                from GitHub
              </a>
            </div>

            {loading ? (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 animate-pulse"
                    style={{ width: `${60 + (i % 3) * 20}px`, background: "#e5e5e5", border: "2px solid #0a0a0a" }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {langs.map((lang) => {
                  const color = LANG_COLOR[lang] ?? "#0a0a0a";
                  return (
                    <span
                      key={lang}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold"
                      style={{
                        background: `${color}22`,
                        border: `2px solid ${color}`,
                        color: "#0a0a0a",
                      }}
                    >
                      <span
                        className="w-2 h-2 flex-shrink-0"
                        style={{ background: color, border: "1px solid #0a0a0a" }}
                      />
                      {lang}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className="p-6"
            style={{
              background: "#fafaf5",
              border: "3px solid #0a0a0a",
              boxShadow: "4px 4px 0 #0a0a0a",
            }}
          >
            <h3 className="font-display font-bold text-lg mb-6" style={{ color: "#0a0a0a" }}>
              Tools &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {MANUAL_TOOLS.map((s) => {
                const bg = CAT_BG[s.category] ?? "#e5e5e5";
                return (
                  <span
                    key={s.name}
                    className="px-3 py-1.5 text-sm font-bold"
                    style={{
                      background: bg,
                      border: "2px solid #0a0a0a",
                      boxShadow: "2px 2px 0 #0a0a0a",
                      color: "#0a0a0a",
                    }}
                  >
                    {s.name}
                  </span>
                );
              })}
            </div>

            <div className="mt-6 pt-5" style={{ borderTop: "2px solid #0a0a0a" }}>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#0a0a0a" }}
              >
                Also familiar with
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpenZeppelin", "Prisma", "Redis", "Socket.io", "Jest", "Figma", "Vercel", "IPFS", "Chainlink"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-bold"
                    style={{
                      background: "#ffffff",
                      border: "2px solid #0a0a0a",
                      color: "#0a0a0a",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
