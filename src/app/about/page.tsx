import Reveal from "@/components/Reveal";

const journey = [
  { year: "2019–2021", label: "Class XII", detail: "Sree Chaitanya Junior College · GPA 8.68/10" },
  { year: "2021–2025", label: "B.Tech, Data Science", detail: "Sri Venkateswara College of Engineering and Technology" },
  { year: "2025", label: "Associate Support Engineer", detail: "Conduent Pvt Ltd — Salesforce Service Cloud" },
  { year: "Now", label: "Analytics & automation roles", detail: "Building project-based proof of skill while applying" },
];

const skillGroups = [
  { cat: "Data analysis & visualization", items: ["Advanced Excel", "Tableau", "Power BI"] },
  { cat: "Programming & databases", items: ["Python", "SQL", "APIs"] },
  { cat: "Automation & tools", items: ["Automation Anywhere A360", "Salesforce Service Cloud", "Salesforce Flows"] },
  { cat: "Applied", items: ["Jupyter", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "OCR", "GitHub"] },
];

const certifications = [
  { title: "Python for Data Science", org: "Cognitive Class" },
  { title: "Data Science Virtual Experience", org: "British Airways" },
  { title: "Power BI Virtual Case Experience", org: "PwC Switzerland" },
  { title: "Appreciation Certificate", org: "Zilla Parishad High School, Muthirevula", note: "English-language volunteering" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-emerald">About</span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-text md:text-5xl">
          Data science grad, automation-minded.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted md:text-lg">
          Strong foundations in data analysis, automation, and business
          problem-solving — with hands-on experience building dashboards,
          automation bots, and data-driven projects. Preparing for analytics
          and technology consulting roles through structured learning and
          real project work.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm sm:grid-cols-4">
          <div><p className="text-muted">Location</p><p className="mt-1 text-text">Pileru, AP, India</p></div>
          <div><p className="text-muted">Email</p><a href="mailto:vaseemanchuri@gmail.com" className="mt-1 block text-text hover:text-emerald">vaseemanchuri@gmail.com</a></div>
          <div><p className="text-muted">Phone</p><a href="tel:+919100288408" className="mt-1 block text-text hover:text-emerald">+91 9100288408</a></div>
          <div><p className="text-muted">Education</p><p className="mt-1 text-text">B.Tech, Data Science</p></div>
        </div>
      </Reveal>

      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-text md:text-3xl">Journey</h2>
        </Reveal>
        <div className="mt-10 border-l border-border pl-8">
          {journey.map((j, i) => (
            <Reveal delay={i * 0.05} key={j.label}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-2 w-2 rounded-full bg-emerald" />
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{j.year}</p>
                <h3 className="mt-2 font-display text-xl text-text">{j.label}</h3>
                <p className="mt-1 text-sm text-muted">{j.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-text md:text-3xl">Skills</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal delay={i * 0.05} key={g.cat}>
              <div className="h-full bg-bg p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-emerald">{g.cat}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-2xl text-text md:text-3xl">Certifications</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal delay={i * 0.04} key={c.title}>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-text">{c.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{c.org}</p>
                {c.note && <p className="mt-2 text-xs text-muted">{c.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
