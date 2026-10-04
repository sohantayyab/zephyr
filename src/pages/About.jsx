import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

const values = [
  {
    icon: "spark",
    title: "Craft",
    text: "We sweat the details others skip, because details are what people feel.",
    tint: "bg-violet-400/15 text-violet-300",
  },
  {
    icon: "bolt",
    title: "Speed",
    text: "Fast sites, fast feedback and fast delivery without cutting corners.",
    tint: "bg-cyan-400/15 text-cyan-300",
  },
  {
    icon: "layers",
    title: "Clarity",
    text: "Simple structures and honest communication from the first call to launch.",
    tint: "bg-fuchsia-400/15 text-fuchsia-300",
  },
  {
    icon: "shield",
    title: "Trust",
    text: "We treat your product like our own and stand behind everything we ship.",
    tint: "bg-emerald-400/15 text-emerald-300",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Zephyr is born",
    text: "Two friends, one laptop each and a shared obsession with beautiful websites.",
  },
  {
    year: "2021",
    title: "First 50 projects",
    text: "Word spread fast. We grew from freelancers into a proper studio.",
  },
  {
    year: "2023",
    title: "Going global",
    text: "A remote-first team of 12 serving clients across four continents.",
  },
  {
    year: "2026",
    title: "Zephyr 2.0",
    text: "A new identity, a sharper process and bigger ambitions than ever.",
  },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & Creative Director",
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
  },
  {
    name: "Maya Chen",
    role: "Lead Engineer",
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  },
  {
    name: "Omar Siddiqui",
    role: "Product Designer",
    gradient: "linear-gradient(135deg,#ec4899,#f59e0b)",
  },
  {
    name: "Lena Fischer",
    role: "Motion Designer",
    gradient: "linear-gradient(135deg,#34d399,#22d3ee)",
  },
];

export default function About() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-40 text-center">
        <Reveal>
          <span className="glass inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About Zephyr
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
            A small studio with a{" "}
            <span className="text-aurora">big gust of ideas.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            We are designers, engineers and storytellers who believe the web
            should feel as good as it looks.
          </p>
        </Reveal>
      </section>

      {/* ---------- Story ---------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Our story
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">
            Zephyr started with a simple frustration: too many websites were
            slow, cluttered and forgettable. We set out to build the opposite,
            experiences that load instantly, look stunning and feel effortless.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            Today we partner with startups and established brands to turn
            ambitious ideas into polished digital products, from the first
            sketch to the final pixel.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["React", "Tailwind CSS", "Motion", "Branding", "Accessibility"].map(
              (t) => (
                <span
                  key={t}
                  className="glass rounded-full px-4 py-1.5 text-sm text-slate-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SpotlightCard className="p-10">
            <p className="font-display text-7xl font-bold leading-none text-white/10">
              "
            </p>
            <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Great design is{" "}
              <span className="text-aurora">felt before it is seen.</span>
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="bg-aurora flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white">
                AM
              </span>
              <div>
                <p className="font-semibold text-white">Alex Morgan</p>
                <p className="text-sm text-slate-500">Founder, Zephyr</p>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>

      {/* ---------- Values ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="What drives us"
          title="Four values behind"
          highlight="everything we make."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <SpotlightCard className="h-full p-7">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${v.tint}`}
                >
                  <Icon name={v.icon} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {v.text}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading
          eyebrow="Our journey"
          title="Seven years of"
          highlight="moving forward."
        />
        <div className="relative mt-16 border-l border-white/10 pl-8">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 100} className="relative pb-12 last:pb-0">
              <span className="bg-aurora absolute -left-[41px] top-1 h-4 w-4 rounded-full ring-4 ring-void" />
              <p className="text-aurora font-display text-sm font-bold tracking-widest">
                {item.year}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-400">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="The team"
          title="The people behind"
          highlight="the wind."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <SpotlightCard className="p-7 text-center">
                <span
                  style={{ background: m.gradient }}
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full font-display text-2xl font-bold text-white shadow-xl"
                >
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{m.role}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center">
            <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-fuchsia-600/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
                Want to work together?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-slate-300">
                We'd love to hear about your next big idea.
              </p>
              <Link
                to="/contact"
                className="btn-aurora mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold"
              >
                Say hello
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}