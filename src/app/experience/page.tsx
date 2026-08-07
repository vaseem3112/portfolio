import Reveal from "@/components/Reveal";

const achievements = [
  { title: "Platform reliability", desc: "Maintained 99%+ uptime for Salesforce Service Cloud supporting enterprise logistics." },
  { title: "Automation impact", desc: "Cut manual intervention 40% through automated Salesforce Flows." },
  { title: "Data accuracy", desc: "Improved data accuracy 30% via cross-functional collaboration." },
  { title: "User impact", desc: "Improved the experience for 500+ daily active users." },
];

const responsibilities = [
  "Provided technical support and troubleshooting for Salesforce Service Cloud",
  "Built and maintained automated Flows for delivery tracking and notifications",
  "Collaborated with product, engineering, and operations for integrations",
  "Monitored system performance and resolved issues proactively",
  "Ensured accurate data handling across logistics and customer-service workflows",
];

const skillsApplied = [
  { cat: "Technical", items: ["Salesforce Service Cloud administration", "Flow Builder & process automation", "API management", "Performance monitoring", "Data validation"] },
  { cat: "Collaboration", items: ["Cross-functional teamwork", "Troubleshooting", "Documentation", "Stakeholder management"] },
  { cat: "Domain", items: ["Logistics & supply chain", "Customer service workflows", "SLA management", "Process improvement"] },
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-emerald">Experience</span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-text md:text-5xl">
          Delivering measurable, not just busy, work.
        </h1>
      </Reveal>

      <section className="mt-16 rounded-2xl border border-border bg-surface p-8 md:p-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <h2 className="font-display text-2xl text-text">Associate Support Engineer</h2>
              <p className="mt-1 text-sm text-muted">Conduent Pvt Ltd · India</p>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Apr 2025 – Aug 2025 · 5 months
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-text">
            Delivered technical support for the Salesforce Service Cloud
            platform, driving operational reliability across logistics and
            customer-service operations.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal delay={i * 0.05} key={a.title}>
              <div className="rounded-xl border border-border bg-bg p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-2">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Key responsibilities</h3>
            <ul className="mt-4 space-y-2">
              {responsibilities.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-text">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Salesforce Service Cloud", "Salesforce Flows", "Process Automation", "System Monitoring", "Troubleshooting"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-text md:text-3xl">Skills applied on the job</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {skillsApplied.map((g, i) => (
            <Reveal delay={i * 0.05} key={g.cat}>
              <div className="h-full bg-bg p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-emerald">{g.cat}</p>
                <ul className="mt-4 space-y-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-sm text-muted">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
