import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

const words = [
  "Strategy",
  "Branding",
  "Web Design",
  "Development",
  "Motion",
  "Product",
  "Prototyping",
  "SEO",
];

const stats = [
  { value: 250, suffix: "+", label: "Projects shipped" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 40, suffix: "+", label: "Awards & features" },
  { value: 12, suffix: "", label: "Countries served" },
];

const steps = [
  {
    icon: "spark",
    title: "Discover",
    text: "We dig into your goals, audience and competitors to find the sharpest angle.",
  },
  {
    icon: "layers",
    title: "Design",
    text: "Wireframes become bold, polished interfaces with a clear visual language.",
  },
  {
    icon: "code",
    title: "Build",
    text: "Clean, fast and accessible code that works on every screen and browser.",
  },
  {
    icon: "bolt",
    title: "Launch",
    text: "We ship, measure and keep improving so your site only gets better.",
  },
];

const testimonials = [
  {
    quote:
      "Zephyr rebuilt our entire site in six weeks. Conversions jumped 41% and the whole team keeps getting compliments.",
    name: "Sara Whitfield",
    role: "CEO, Northwind",
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
  },
  {
    quote:
      "The most polished handoff I've ever seen. Fast, communicative and obsessively detail-oriented.",
    name: "Daniel Reyes",
    role: "Product Lead, Lumen",
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  },
  {
    quote:
      "They turned a messy idea into a brand that feels premium. Our launch day traffic broke every record.",
    name: "Amira Khan",
    role: "Founder, Oasis Labs",
    gradient: "linear-gradient(135deg,#ec4899,#f59e0b)",
  },
];

const bars = [35, 55, 45, 70, 60, 85, 75, 100];

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[340px] w-[340px] sm:h-[460px] sm:w-[460px]">
      <div className="absolute inset-10 rounded-full bg-violet-600/30 blur-3xl" />

      {/* Orbit rings */}
      <div className="spin-slow absolute inset-0 rounded-full border border-white/10">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
      </div>
      <div className="spin-reverse absolute inset-9 rounded-full border border-dashed border-white/15">
        <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_#e879f9]" />
      </div>
      <div className="spin-slow absolute inset-[4.5rem] rounded-full border border-white/10">
        <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_20px_#a78bfa]" />
      </div>

      {/* Glowing core */}
      <div className="core absolute inset-[28%] rounded-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="h-14 w-14 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 6h14L5 18h14" />
        </svg>
      </div>

      {/* Floating chips */}
      <div className="float glass absolute -left-2 top-14 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
          <Icon name="bolt" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-slate-400">Performance</p>
          <p className="font-display text-sm font-bold text-white">99 / 100</p>
        </div>
      </div>

      <div
        className="float glass absolute -right-2 top-1/2 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-10"
        style={{ animationDelay: "-2s" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-400/15 text-fuchsia-300">
          <Icon name="device" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-slate-400">Responsive</p>
          <p className="font-display text-sm font-bold text-white">All screens</p>
        </div>
      </div>

      <div
        className="float glass absolute bottom-10 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-0"
        style={{ animationDelay: "-4s" }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs text-slate-400">Shipped</p>
          <p className="font-display text-sm font-bold text-white">250+ sites</p>
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const half = [...words, ...words];
  const full = [...half, ...half];

  return (
    <div className="marquee-wrap fade-edges overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
      <div className="marquee">
        {full.map((word, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 font-display text-2xl font-semibold text-slate-500 sm:text-3xl"
          >
            {word}
            <Icon name="spark" className="h-5 w-5 text-violet-400" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-2 lg:pt-44">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-slate-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for new projects
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl xl:text-7xl">
              Websites that feel like{" "}
              <span className="text-aurora">weightless motion.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              Zephyr is a creative studio crafting fast, beautiful and
              responsive websites for brands that refuse to blend in.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="btn-aurora inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold"
              >
                Start a project
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="btn-ghost inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold"
              >
                Our story
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "linear-gradient(135deg,#22d3ee,#8b5cf6)",
                  "linear-gradient(135deg,#8b5cf6,#ec4899)",
                  "linear-gradient(135deg,#ec4899,#f59e0b)",
                  "linear-gradient(135deg,#34d399,#22d3ee)",
                ].map((g, i) => (
                  <span
                    key={i}
                    style={{ background: g }}
                    className="h-10 w-10 rounded-full border-2 border-void"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                Loved by <span className="font-semibold text-white">120+ teams</span>{" "}
                worldwide
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </section>

      {/* ---------- Marquee ---------- */}
      <Marquee />

      {/* ---------- Bento features ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          eyebrow="Why Zephyr"
          title="Built different,"
          highlight="down to the pixel."
          text="Every project blends sharp design, clean engineering and obsessive attention to detail."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <SpotlightCard className="h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                <Icon name="bolt" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Blazing performance
              </h3>
              <p className="mt-2 max-w-md text-slate-400">
                Optimised assets, lean code and smart loading give you sites
                that score near-perfect on speed.
              </p>
              <div className="mt-8 flex h-32 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="bg-aurora flex-1 rounded-t-md"
                    style={{ height: `${h}%`, opacity: 0.35 + i * 0.08 }}
                  />
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={100}>
            <SpotlightCard className="h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/15 text-fuchsia-300">
                <Icon name="layers" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Pixel-perfect design
              </h3>
              <p className="mt-2 text-slate-400">
                Consistent spacing, type and colour systems that make every
                screen feel intentional.
              </p>
              <div className="mt-8 flex gap-2">
                {["#22d3ee", "#8b5cf6", "#ec4899", "#f59e0b"].map((c) => (
                  <span
                    key={c}
                    className="h-10 flex-1 rounded-xl"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={100}>
            <SpotlightCard className="h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-300">
                <Icon name="device" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Responsive everywhere
              </h3>
              <p className="mt-2 text-slate-400">
                From a phone in your pocket to an ultra-wide monitor, every
                layout adapts beautifully.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium">
                {["Mobile", "Tablet", "Laptop", "Desktop"].map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={200} className="md:col-span-2">
            <SpotlightCard className="h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <Icon name="code" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Clean code, built to scale
              </h3>
              <p className="mt-2 max-w-md text-slate-400">
                Modern React, reusable components and tidy architecture that
                your team can grow with.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm leading-relaxed">
                <code className="whitespace-pre text-cyan-200">
                  {`const zephyr = {
  speed: "instant",
  design: "unforgettable",
  responsive: true,
};`}
                </code>
              </pre>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="glass-strong grid grid-cols-2 gap-y-10 rounded-[2rem] px-6 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-aurora font-display text-5xl font-bold sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          eyebrow="Our process"
          title="From idea to launch in"
          highlight="four steps."
          text="A simple, transparent workflow that keeps projects moving and everyone in the loop."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <SpotlightCard className="h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="bg-aurora flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                    <Icon name={s.icon} />
                  </span>
                  <span className="font-display text-4xl font-bold text-white/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.text}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Kind words"
          title="Teams that"
          highlight="love working with us."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <SpotlightCard className="flex h-full flex-col p-7">
                <p className="text-amber-400">★★★★★</p>
                <p className="mt-4 flex-1 leading-relaxed text-slate-300">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    style={{ background: t.gradient }}
                    className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-12">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/40 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
                Let's build something that{" "}
                <span className="text-aurora">moves.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
                Tell us about your project and we'll get back to you within 24
                hours.
              </p>
              <Link
                to="/contact"
                className="btn-aurora mt-9 inline-flex items-center gap-2 rounded-full px-9 py-4 font-semibold"
              >
                Get in touch
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}