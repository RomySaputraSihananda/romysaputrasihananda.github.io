export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ background: "#080d1a", borderColor: "rgba(34,211,238,0.08)" }}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-display font-extrabold text-xl"
          style={{ color: "#e2f4ff" }}
        >
          Romy<span style={{ color: "#22d3ee" }}>.</span>
        </span>
        <p className="text-sm" style={{ color: "#7a9ab8" }}>
          © {new Date().getFullYear()} Romy Saputra Sihananda — Built with React
          &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
