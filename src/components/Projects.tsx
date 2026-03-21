import { useEffect, useState } from "react";

const GITHUB_USERNAME = "RomySaputraSihananda";

const PINNED_REPOS: string[] = [];

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

function SkeletonCard() {
  return (
    <div
      className="rounded-2xl p-6 border animate-pulse"
      style={{ background: "#0d1526", borderColor: "rgba(34,211,238,0.08)" }}
    >
      <div
        className="h-4 rounded-full w-1/3 mb-5"
        style={{ background: "#1e3a5f" }}
      />
      <div
        className="h-5 rounded-full w-2/3 mb-3"
        style={{ background: "#1e3a5f" }}
      />
      <div
        className="h-3 rounded-full w-full mb-2"
        style={{ background: "#162033" }}
      />
      <div
        className="h-3 rounded-full w-4/5 mb-6"
        style={{ background: "#162033" }}
      />
      <div className="flex gap-2">
        <div
          className="h-6 w-16 rounded-full"
          style={{ background: "#1e3a5f" }}
        />
        <div
          className="h-6 w-20 rounded-full"
          style={{ background: "#1e3a5f" }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repo[] = await res.json();

        let filtered = data.filter((r) => !r.fork);

        if (PINNED_REPOS.length > 0) {
          filtered = PINNED_REPOS.map((name) =>
            filtered.find((r) => r.name === name),
          ).filter(Boolean) as Repo[];
        } else {
          filtered = filtered
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
        }

        setRepos(filtered);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24" style={{ background: "#080d1a" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#22d3ee" }}
            >
              Portfolio
            </p>
            <h2
              className="font-display font-extrabold text-4xl"
              style={{ color: "#e2f4ff" }}
            >
              Selected Work
            </h2>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors duration-200 underline underline-offset-4"
            style={{ color: "#7a9ab8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a9ab8")}
          >
            All on GitHub →
          </a>
        </div>

        {error && (
          <div
            className="text-center py-16 rounded-2xl border"
            style={{
              borderColor: "rgba(34,211,238,0.08)",
              background: "#0d1526",
            }}
          >
            <p className="text-sm mb-1" style={{ color: "#e2f4ff" }}>
              Couldn't load repositories.
            </p>
            <p className="text-xs" style={{ color: "#7a9ab8" }}>
              Make sure{" "}
              <code
                className="px-1 rounded"
                style={{ background: "#1e3a5f", color: "#22d3ee" }}
              >
                {GITHUB_USERNAME}
              </code>{" "}
              is a valid GitHub username.
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </div>
    </section>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  const langColor: Record<string, string> = {
    TypeScript: "#22d3ee",
    JavaScript: "#f59e0b",
    Solidity: "#a78bfa",
    Python: "#34d399",
    Rust: "#f97316",
    Go: "#67e8f9",
    HTML: "#fb923c",
    CSS: "#818cf8",
  };
  const color = repo.language
    ? (langColor[repo.language] ?? "#7a9ab8")
    : "#7a9ab8";

  return (
    <div
      className="group relative rounded-2xl p-6 border flex flex-col transition-all duration-300"
      style={{ background: "#0d1526", borderColor: "rgba(34,211,238,0.08)" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}44`)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(34,211,238,0.08)")
      }
    >
      <div className="flex items-start justify-between mb-4">
        {repo.language && (
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full border"
            style={{
              color,
              borderColor: `${color}33`,
              background: `${color}10`,
            }}
          >
            {repo.language}
          </span>
        )}
        <div className="flex gap-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            className="transition-colors duration-200"
            style={{ color: "#7a9ab8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e2f4ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7a9ab8")}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Live demo"
              className="transition-colors duration-200"
              style={{ color: "#7a9ab8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e2f4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a9ab8")}
            >
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3
        className="font-display font-bold text-lg mb-2 capitalize"
        style={{ color: "#e2f4ff" }}
      >
        {repo.name.replace(/-/g, " ")}
      </h3>
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "#7a9ab8" }}
      >
        {repo.description ?? "No description provided."}
      </p>

      <div className="flex flex-col gap-3">
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2.5 py-1 rounded-md text-xs border"
                style={{
                  background: "#080d1a",
                  borderColor: "rgba(34,211,238,0.1)",
                  color: "#7a9ab8",
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        )}
        <div
          className="flex items-center gap-4 text-xs"
          style={{ color: "#4a6a8a" }}
        >
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 2a3 3 0 00-1 5.83V10a2 2 0 002 2h2v2.17a3 3 0 101 0V12h2a2 2 0 002-2V7.83A3 3 0 0018 5a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 001 2.24V10h-4V7.83A3 3 0 006 5a3 3 0 000-3z" />
            </svg>
            {repo.forks_count}
          </span>
        </div>
      </div>
    </div>
  );
}
