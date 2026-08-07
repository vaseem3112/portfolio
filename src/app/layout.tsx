import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Google Fonts aren't reachable in this build sandbox, so the token system
// falls back to system stacks defined in globals.css. Swap in
// next/font/google (Fraunces / Inter / JetBrains Mono) once deployed
// somewhere with normal internet access — the --font-* variables already
// wire straight through, no other change needed.

export const metadata: Metadata = {
  title: "Vaseem Manchuri — Data Science & Automation",
  description:
    "Vaseem Manchuri turns raw data into automated, reliable systems. Data science, RPA, and analytics engineering.",
  openGraph: {
    title: "Vaseem Manchuri — Data Science & Automation",
    description:
      "Vaseem Manchuri turns raw data into automated, reliable systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaseem Manchuri — Data Science & Automation",
    description:
      "Vaseem Manchuri turns raw data into automated, reliable systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased noise">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
