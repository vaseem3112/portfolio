import Reveal from "@/components/Reveal";
import Pulse from "@/components/Pulse";

const otherProjects = [
  {
    title: "RPA Invoice Processing System",
    desc: "Automation bot that extracts, validates, and processes invoice data with OCR and error handling.",
    tags: ["Automation Anywhere A360", "OCR", "Excel"],
    metrics: [
      { v: "98%", l: "accuracy" },
      { v: "87%", l: "time saved" },
    ],
  },
  {
    title: "Music Recommendation System",
    desc: "Full-stack app using content-based filtering and the Spotify API for personalized recommendations.",
    tags: ["Python", "Spotify API", "Streamlit", "Scikit-learn"],
    metrics: [
      { v: "1000+", l: "songs indexed" },
      { v: "<2s", l: "response time" },
    ],
  },
];

const impact = [
  { title: "Efficiency", desc: "Cut manual effort by up to 92% through automation." },
  { title: "Accuracy", desc: "98% accuracy in data extraction and validation." },
  { title: "Scale", desc: "Systems processing 1000+ records without breaking." },
  { title: "Range", desc: "OCR, APIs, and ML integrated where they earn their keep." },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-emerald">Projects</span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-text md:text-5xl">
          Systems that turn messy input into something you can act on.
        </h1>
      </Reveal>

      {/* Featured case study */}
      <section className="mt-20 rounded-2xl border border-border bg-surface p-8 md:p-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald">Featured</span>
          <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">
            Automated Student Performance Analytics System
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            An end-to-end analytics pipeline that turns raw Excel exports into
            automated reporting and interactive dashboards for academic
            performance tracking.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <Pulse className="mt-10 h-10 w-full max-w-xl" />
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:max-w-lg">
          {[
            { v: "1000+", l: "records processed" },
            { v: "95%", l: "data quality gain" },
            { v: "92%", l: "time saved (2h → 10m)" },
          ].map((m, i) => (
            <Reveal delay={i * 0.05} key={m.l}>
              <p className="font-display text-2xl text-text">{m.v}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">{m.l}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Problem</h3>
            <p className="mt-3 text-sm text-text">
              Academic performance data lived in scattered spreadsheets.
              Producing a single report meant hours of manual cleanup, with
              no repeatable way to spot trends across cohorts.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Solution</h3>
            <p className="mt-3 text-sm text-text">
              Cleaned and transformed the data with Excel formulas and pivot
              tables, built interactive Tableau dashboards for multi-dimensional
              analysis, and wrote Python pipelines to compute aggregates and
              surface top performers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Automation</h3>
            <p className="mt-3 text-sm text-text">
              Report generation and email delivery run on Automation Anywhere
              A360 — the pipeline produces and distributes reports without
              anyone re-running the process by hand.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Excel", "Tableau", "Python", "SQL", "Automation Anywhere"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other projects */}
      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-text md:text-3xl">Other projects</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherProjects.map((p, i) => (
            <Reveal delay={i * 0.05} key={p.title}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <h3 className="font-display text-xl text-text">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-8 border-t border-border pt-5">
                  {p.metrics.map((m) => (
                    <div key={m.l}>
                      <p className="font-display text-xl text-text">{m.v}</p>
                      <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-text md:text-3xl">Impact, in short</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((c, i) => (
            <Reveal delay={i * 0.05} key={c.title}>
              <div className="h-full bg-bg p-6">
                <h3 className="text-text">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
