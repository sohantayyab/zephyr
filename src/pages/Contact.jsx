import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";

const services = ["Web Design", "Development", "Branding", "Something else"];

const budgets = ["Under $2k", "$2k - $5k", "$5k - $10k", "$10k+"];

const initialState = {
  name: "",
  email: "",
  service: "Web Design",
  budget: "",
  message: "",
};

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites take 4 to 8 weeks from kickoff to launch, depending on the scope and how quickly feedback comes in.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Absolutely. We love helping young teams find their voice and ship a standout first version.",
  },
  {
    q: "Will my site work on mobile?",
    a: "Every site we build is fully responsive and tested on phones, tablets and desktops.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We offer maintenance plans so your site stays fast, secure and up to date.",
  },
];

const info = [
  { icon: "mail", title: "Email", text: "hello@zephyr.studio" },
  { icon: "phone", title: "Phone", text: "+1 (555) 014-2026" },
  { icon: "pin", title: "Studio", text: "Remote-first, working worldwide" },
];

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-sm text-rose-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const [openFaq, setOpenFaq] = useState(0);
  const timerRef = useRef(null);

  // Clear the fake-sending timer if the page is left
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please tell us your name";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    console.log("Form submitted:", formData);

    // Simulated request. Replace with a real API call or EmailJS/Formspree.
    timerRef.current = setTimeout(() => {
      setStatus("success");
      setFormData(initialState);
    }, 1400);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:ring-4 ${
      errors[field]
        ? "border-rose-400/60 focus:ring-rose-500/20"
        : "border-white/10 focus:border-violet-400/70 focus:ring-violet-500/20"
    }`;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-40 text-center">
        <Reveal>
          <span className="glass inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
            Let's start a{" "}
            <span className="text-aurora">conversation.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Have a project in mind or just want to say hi? Drop us a message and
            we'll reply within 24 hours.
          </p>
        </Reveal>
      </section>

      {/* ---------- Info + Form ---------- */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-5">
        {/* Info */}
        <div className="space-y-5 lg:col-span-2">
          {info.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <SpotlightCard className="flex items-center gap-4 p-5">
                <span className="bg-aurora flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <p className="font-semibold text-white">{item.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="glass flex items-center gap-3 rounded-3xl p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <Icon name="clock" />
              </span>
              <div>
                <p className="font-semibold text-white">Fast replies</p>
                <p className="text-sm text-slate-400">
                  We usually respond within one business day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={150} className="lg:col-span-3">
          <div className="glass-strong rounded-[2rem] p-6 sm:p-10">
            {status === "success" ? (
              <div className="py-12 text-center">
                <span className="bg-aurora mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white shadow-2xl shadow-violet-500/40">
                  <Icon name="check" className="h-10 w-10" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold text-white">
                  Message sent!
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-slate-400">
                  Thanks for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-ghost mt-8 rounded-full px-7 py-3 font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your name" id="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Cooper"
                      className={inputClass("name")}
                    />
                  </Field>

                  <Field label="Email address" id="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputClass("email")}
                    />
                  </Field>
                </div>

                {/* Service chips */}
                <div>
                  <p className="text-sm font-medium text-slate-300">
                    What do you need?
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, service: s }))
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                          formData.service === s
                            ? "btn-aurora"
                            : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Budget (optional)" id="budget">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass("budget")}
                  >
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Your message" id="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals and timeline..."
                    className={inputClass("message")}
                  />
                  <p className="mt-1.5 text-right text-xs text-slate-500">
                    {formData.message.length} / 500
                  </p>
                </Field>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-aurora flex w-full items-center justify-center gap-2 rounded-full py-4 font-semibold"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Icon name="arrow" className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-3xl px-6 pt-28">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Frequently asked <span className="text-aurora">questions</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 80}>
                <div className="glass rounded-2xl">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-white">{f.q}</span>
                    <span
                      className={`shrink-0 text-violet-300 transition duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Icon name="plus" className="h-5 w-5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-slate-400">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}