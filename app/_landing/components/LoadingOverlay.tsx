"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [ready, setReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const minDisplayMs = 600;

    const reveal = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDisplayMs - elapsed);
      window.setTimeout(() => setReady(true), wait);
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
      return () => window.removeEventListener("load", reveal);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setHidden(true), 500);
    return () => window.clearTimeout(t);
  }, [ready]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={ready}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: "var(--brand-cream)",
        color: "var(--brand-dark)",
        opacity: ready ? 0 : 1,
        pointerEvents: ready ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-6 loading-fade">
        <div className="flex items-baseline gap-2">
          <span
            className="text-4xl sm:text-5xl tracking-widest font-light"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.05em" }}
          >
            9skin
          </span>
          <span
            className="text-sm sm:text-base font-light"
            style={{ color: "var(--brand-gold)", letterSpacing: "0.18em" }}
          >
            玖膚
          </span>
        </div>

        <div
          className="relative h-px w-20 overflow-hidden"
          style={{ backgroundColor: "rgba(122,114,100,0.18)" }}
        >
          <span
            className="absolute inset-y-0 w-8 loading-bar-anim"
            style={{ backgroundColor: "var(--brand-gold)" }}
          />
        </div>

        <p
          className="text-[10px] tracking-[0.4em] uppercase font-light"
          style={{ color: "var(--brand-gold)", opacity: 0.7 }}
        >
          Loading
        </p>
      </div>

      <style>{`
        @keyframes loading-bar-slide-overlay {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .loading-bar-anim {
          animation: loading-bar-slide-overlay 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
