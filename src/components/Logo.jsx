import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-2.5">
      <span className="bg-aurora flex h-9 w-9 items-center justify-center rounded-xl shadow-lg shadow-violet-500/30 transition duration-300 group-hover:rotate-12">
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 6h14L5 18h14" />
        </svg>
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Zephyr
      </span>
    </Link>
  );
}