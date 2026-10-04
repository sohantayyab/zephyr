export default function SpotlightCard({ children, className = "" }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={`spotlight glass relative overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-white/20 ${className}`}
    >
      <div className="relative h-full">{children}</div>
    </div>
  );
}