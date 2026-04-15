"use client";

import { useEffect, useRef, useState } from "react";
import { LuChevronUp, LuX } from "react-icons/lu";
import { SiLine, SiInstagram } from "react-icons/si";

export default function SectionNav({
  scrollPct,
  lineUrl,
  instagramUrl,
}: {
  scrollPct: number;
  lineUrl: string;
  instagramUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* ── Floating Contact FAB ── */}
      <div ref={wrapRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <FabItem
          href={instagramUrl}
          label="Instagram"
          show={open}
          delay={0}
          bg="linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)"
          icon={<SiInstagram size={20} color="white" />}
        />
        <FabItem
          href={lineUrl}
          label="LINE"
          show={open}
          delay={60}
          bg="#06C755"
          icon={<SiLine size={22} color="white" />}
        />
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close contact" : "我要預約"}
          aria-expanded={open}
          className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 group"
          style={{
            background: "radial-gradient(circle at 30% 25%, #FBF7EF 0%, #EFE7D6 60%, #E2D7C0 100%)",
            boxShadow: "0 10px 28px rgba(122,114,100,0.28), 0 2px 6px rgba(56,50,42,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          <span
            aria-hidden
            className="absolute inset-[3px] rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              border: "1px solid rgba(201,169,110,0.55)",
              opacity: open ? 0 : 1,
            }}
          />
          {open ? (
            <LuX size={26} color="#38322A" />
          ) : (
            <span
              className="relative text-[13px] leading-[1.15] tracking-[0.18em] text-center"
              style={{
                color: "#38322A",
                fontFamily: '"Noto Serif TC", Georgia, serif',
                fontWeight: 500,
              }}
            >
              我要<br />預約
            </span>
          )}
        </button>
      </div>

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

function FabItem({
  href, label, show, delay, bg, icon, textLabel,
}: {
  href: string;
  label: string;
  show: boolean;
  delay: number;
  bg: string;
  icon?: React.ReactNode;
  textLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={show ? 0 : -1}
      className="group flex items-center gap-2.5"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : "translateY(10px) scale(0.8)",
        pointerEvents: show ? "auto" : "none",
        transition: `opacity .25s ease ${delay}ms, transform .3s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      <span
        className="text-[11px] tracking-[0.22em] uppercase font-light px-3 py-1 rounded-full whitespace-nowrap"
        style={{
          backgroundColor: "rgba(56,50,42,0.92)",
          color: "#E8E2DA",
          backdropFilter: "blur(6px)",
        }}
      >
        {label}
      </span>
      <span
        className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
        style={{
          background: bg,
          boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
        }}
      >
        {icon ?? (
          <span className="text-[11px] font-medium tracking-widest" style={{ color: "#F5EFE4" }}>
            {textLabel}
          </span>
        )}
      </span>
    </a>
  );
}
