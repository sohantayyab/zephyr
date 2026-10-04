import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page scrolling behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const desktopLink = ({ isActive }) =>
    `rounded-full px-5 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-white/10 text-white"
        : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
        <nav
          className={`glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition duration-300 ${
            scrolled ? "shadow-[0_10px_40px_-10px_rgba(139,92,246,0.4)]" : ""
          }`}
        >
          <Logo onClick={close} />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={desktopLink}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="btn-aurora hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold md:inline-flex"
          >
            Let's talk
            <Icon name="arrow" className="h-4 w-4" />
          </Link>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-void/95 backdrop-blur-xl transition duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            onClick={close}
            style={{ transitionDelay: open ? `${i * 80 + 100}ms` : "0ms" }}
            className={({ isActive }) =>
              `font-display text-4xl font-bold transition duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${isActive ? "text-aurora" : "text-white"}`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          onClick={close}
          className="btn-aurora mt-4 rounded-full px-8 py-3 font-semibold"
        >
          Start a project
        </Link>
      </div>
    </>
  );
}