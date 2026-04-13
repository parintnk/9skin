"use client";

import { LuChevronUp } from "react-icons/lu";
import { SiLine } from "react-icons/si";
import { navSections } from "../data";

export default function SectionNav({ activeSection, scrollPct }: { activeSection: number; scrollPct: number }) {
  return (
    <>
      {/* ── Section nav dots ── */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {navSections.map((s, i) => (
          <button
            key={i}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center justify-end"
            aria-label={s.label}
          >
            <span
              className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap px-2 py-1 rounded"
              style={{ backgroundColor: "var(--brand-footer)", color: "#E8E2DA" }}
            >
              {s.label}
            </span>
            <span
              className="block rounded-full transition-all"
              style={{
                width: activeSection === i ? 8 : 6,
                height: activeSection === i ? 8 : 6,
                backgroundColor: activeSection === i ? "var(--brand-dark)" : "transparent",
                border: `1.5px solid ${activeSection === i ? "var(--brand-dark)" : "rgba(56,50,42,0.35)"}`,
              }}
            />
          </button>
        ))}
      </nav>

      {/* ── Floating LINE button ── */}
      <a
        href="https://line.me/R/ti/p/@9skin"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105"
        style={{ backgroundColor: "#06C755", boxShadow: "0 6px 24px rgba(6,199,85,0.4)" }}
        aria-label="LINE 預約"
      >
        <SiLine size={28} color="white" />
      </a>

      {/* ── Back to top ── */}
      {scrollPct > 8 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
          style={{ backgroundColor: "var(--brand-footer)", opacity: 0.85 }}
          aria-label="Back to top"
        >
          <LuChevronUp size={18} color="#E8E2DA" />
        </button>
      )}
    </>
  );
}
