import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  text,
  center = true,
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="glass inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
        {title}{" "}
        {highlight && <span className="text-aurora">{highlight}</span>}
      </h2>
      {text && <p className="mt-4 text-lg text-slate-400">{text}</p>}
    </Reveal>
  );
}