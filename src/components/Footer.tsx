export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ background: "#0a0a0a", borderTop: "3px solid #0a0a0a" }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-extrabold text-xl" style={{ color: "#fafaf5" }}>
          Romy<span style={{ color: "#ffe500" }}>.</span>
        </span>
        <p className="text-sm font-medium" style={{ color: "#a0a0a0" }}>
          © {new Date().getFullYear()} Romy Saputra Sihananda — Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
