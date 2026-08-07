import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Pulse from "@/components/Pulse";

const stats = [
  { value: "1000+", label: "records processed" },
  { value: "99%+", label: "platform reliability" },
  { value: "40%", label: "efficiency gain" },
];

const stack = [
  { cat: "Data", items: ["Python", "SQL", "Pandas", "NumPy"] },
  { cat: "Automation", items: ["Automation Anywhere A360", "Salesforce Flows", "OCR"] },
  { cat: "Analysis", items: ["Excel", "Tableau", "Power BI"] },
  { cat: "Applied ML", items: ["Scikit-learn", "Streamlit", "APIs"] },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pt-32">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald">
            Data Science · Automation
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-text sm:text-5xl md:text-6xl">
            Turning raw data into{" "}
            <em className="text-emerald not-italic">automated systems</em>{" "}
            that hold up under real use.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            I&apos;m Vaseem Manchuri — a data science graduate who builds the
            dashboards, bots, and pipelines that sit between messy spreadsheets
            and decisions people can trust.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
            >
              View work <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-emerald hover:text-emerald"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <Pulse className="h-10 w-full max-w-2xl" />
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl text-text sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <Reveal>
            <h2 className="font-display text-2xl text-text md:text-3xl">
              What I work with
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s, i) => (
              <Reveal delay={i * 0.05} key={s.cat}>
                <div className="h-full bg-bg p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-emerald">
                    {s.cat}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-emerald">
                Featured project
              </p>
              <h3 className="mt-3 font-display text-2xl text-text md:text-3xl">
                Automated Student Performance Analytics System
              </h3>
              <p className="mt-3 max-w-xl text-sm text-muted md:text-base">
                Excel → Python → Tableau pipeline that cut a 2-hour reporting
                job down to 10 minutes, with 95% better data quality.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-emerald hover:text-emerald"
            >
              Read the case study <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
