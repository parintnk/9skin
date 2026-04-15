"use client";

import { LuChevronUp } from "react-icons/lu";
import { SiLine } from "react-icons/si";

export default function SectionNav({ scrollPct }: { scrollPct: number }) {
  return (
    <>
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
