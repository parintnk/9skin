"use client";

import Link from "next/link";

const pages = [
  {
    href: "/example1",
    label: "Example 1",
    desc: "Warm Cream Classic",
    bg: "#FAF7F2",
    accent: "#C4A46B",
    text: "#2A2826",
  },
  {
    href: "/example2",
    label: "Example 2",
    desc: "Clinical Sage Green",
    bg: "#EFF5F1",
    accent: "#8BAF9C",
    text: "#1C2B25",
  },
  {
    href: "/example3",
    label: "Example 3",
    desc: "Dark Luxury",
    bg: "#0B0B09",
    accent: "#C4A46B",
    text: "#EDE8DE",
  },
  {
    href: "/example4",
    label: "Example 4",
    desc: "Fresh Modern Clinic",
    bg: "#F9F8F5",
    accent: "#2C6E52",
    text: "#2A2926",
  },
];

export default function ExampleIndex() {
  return (
    <main
      style={{ minHeight: "100vh", backgroundColor: "#F5F4F0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}
    >
      <h1
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1A18", marginBottom: "8px", textAlign: "center" }}
      >
        9skin 玖膚 — Design Examples
      </h1>
      <p style={{ color: "#8C8880", fontSize: "1rem", marginBottom: "48px", textAlign: "center" }}>
        Select a landing page design to preview
      </p>

      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", width: "100%", maxWidth: "960px" }}
      >
        {pages.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                backgroundColor: p.bg,
                border: `2px solid ${p.accent}`,
                borderRadius: "16px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "transform 0.18s, box-shadow 0.18s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${p.accent}33`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: p.accent, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>
                  {p.href.replace("/example", "")}
                </span>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "1.1rem", color: p.text, margin: 0 }}>{p.label}</p>
                <p style={{ fontSize: "0.875rem", color: p.text, opacity: 0.6, margin: "4px 0 0" }}>{p.desc}</p>
              </div>
              <span
                style={{ fontSize: "0.8rem", color: p.accent, fontWeight: 600, letterSpacing: "0.05em", marginTop: "auto" }}
              >
                VIEW →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
