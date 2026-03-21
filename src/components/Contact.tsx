import { useState } from "react";

const EMAIL = "romysaputrasihanandaa@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name} — Portfolio`);
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputStyle: React.CSSProperties = {
    background: "#080d1a",
    border: "1px solid rgba(34,211,238,0.15)",
    color: "#c8d4e8",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    fontFamily: "Space Grotesk, sans-serif",
    transition: "border-color 0.2s",
  };

  const contacts = [
    {
      label: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "github.com/RomySaputraSihananda",
      href: "https://github.com/RomySaputraSihananda",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: "linkedin.com/in/romy-saputra-sihananda-495500270",
      href: "https://linkedin.com/in/romy-saputra-sihananda-495500270",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24" style={{ background: "#080d1a" }}>
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#22d3ee" }}
          >
            Let's Talk
          </p>
          <h2
            className="font-display font-extrabold text-4xl leading-tight mb-6"
            style={{ color: "#e2f4ff" }}
          >
            Let's build
            <br />
            <span style={{ color: "#22d3ee" }}>something</span> together
          </h2>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "#7a9ab8" }}
          >
            Have a project idea, want to collaborate, or just want to say hello?
            Feel free to reach out — I'm always open to interesting
            conversations.
          </p>

          <div className="flex flex-col gap-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-8 h-8 rounded-lg border flex items-center justify-center text-sm flex-shrink-0"
                  style={{
                    background: "rgba(34,211,238,0.06)",
                    borderColor: "rgba(34,211,238,0.15)",
                    color: "#22d3ee",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-sm transition-colors duration-200 group-hover:underline underline-offset-2"
                  style={{ color: "#7a9ab8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#22d3ee")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#7a9ab8")
                  }
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl border p-8"
          style={{ background: "#0d1526", borderColor: "rgba(34,211,238,0.1)" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                className="text-xs font-medium mb-1.5 block"
                style={{ color: "#7a9ab8" }}
              >
                Your Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Budi Santoso"
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#22d3ee")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(34,211,238,0.15)")
                }
              />
            </div>
            <div>
              <label
                className="text-xs font-medium mb-1.5 block"
                style={{ color: "#7a9ab8" }}
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="budi@email.com"
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#22d3ee")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(34,211,238,0.15)")
                }
              />
            </div>
            <div>
              <label
                className="text-xs font-medium mb-1.5 block"
                style={{ color: "#7a9ab8" }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#22d3ee")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(34,211,238,0.15)")
                }
              />
            </div>
            <button
              type="submit"
              className="mt-1 w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
              style={{ background: "#22d3ee", color: "#080d1a" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#67e8f9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#22d3ee")
              }
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send via Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
