"use client";

import { motion } from "framer-motion";

// Signature element: a live-feeling signal line, standing in for the
// "raw data -> clean signal" idea that runs through the whole site.
export default function Pulse({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 60"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M0 30 L120 30 L145 8 L165 52 L190 30 L260 30 L280 18 L300 42 L320 30 L600 30"
        fill="none"
        stroke="var(--emerald)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
