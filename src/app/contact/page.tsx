"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(
      `${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`
    );
    window.location.href = `mailto:vaseemanchuri@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-emerald">Contact</span>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-text md:text-5xl">
          Let&apos;s talk about the work.
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Open to opportunities in data science, analytics, and automation —
          and happy to talk through a project even if it&apos;s early.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-emerald" />
              <a href="mailto:vaseemanchuri@gmail.com" className="text-text hover:text-emerald">
                vaseemanchuri@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-emerald" />
              <a href="tel:+919100288408" className="text-text hover:text-emerald">
                +91 9100288408
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-emerald" />
              <span className="text-text">Pileru, Andhra Pradesh, India</span>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/VASEEMMANCHURI"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text transition-colors hover:border-emerald hover:text-emerald"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <a
                href="https://github.com/vaseem3112"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text transition-colors hover:border-emerald hover:text-emerald"
              >
                <GithubIcon /> GitHub
              </a>
            </div>

            <div className="flex items-center gap-2 pt-4 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              Open to opportunities
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          {sent ? (
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="font-display text-xl text-text">Opening your mail app…</h3>
              <p className="mt-2 text-sm text-muted">
                If nothing happened, email directly at{" "}
                <a href="mailto:vaseemanchuri@gmail.com" className="text-emerald">
                  vaseemanchuri@gmail.com
                </a>
                .
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 font-mono text-xs uppercase tracking-widest text-muted hover:text-text"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-8">
              <div>
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Full name"
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-muted/60 focus:border-emerald"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-muted/60 focus:border-emerald"
                />
              </div>
              <div>
                <label htmlFor="subject" className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Job opportunity / collaboration"
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-muted/60 focus:border-emerald"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-muted/60 focus:border-emerald"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
              >
                Send message <ArrowUpRight size={14} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
