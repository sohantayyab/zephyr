import { Link } from "react-router-dom";
import Logo from "./Logo";

const socials = ["X / Twitter", "GitHub", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 overflow-hidden border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
            Zephyr is a creative studio crafting fast, beautiful and responsive
            websites for brands that refuse to blend in.
          </p>
          <span className="glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </span>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-slate-400">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Connect
          </h3>
          <ul className="mt-5 space-y-3 text-slate-400">
            <li>
              <a
                href="mailto:hello@zephyr.studio"
                className="transition hover:text-white"
              >
                hello@zephyr.studio
              </a>
            </li>
            {socials.map((s) => (
              <li key={s}>
                <a href="#" className="transition hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="ghost-text mt-10 select-none text-center font-display text-[20vw] font-bold leading-[0.8] tracking-tighter">
        ZEPHYR
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Zephyr Studio. All rights reserved.
      </div>
    </footer>
  );
}