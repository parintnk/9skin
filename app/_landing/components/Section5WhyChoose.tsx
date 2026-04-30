"use client";

import { useEffect, useRef, useState } from "react";
import type { S5WhyChoose } from "@/lib/content/types";

function S5Carousel({ cards }: { cards: S5WhyChoose["columns"] }) {
  const [s5Active, setS5Active] = useState(1);
  const s5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = s5Ref.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.scrollWidth / cards.length;
      const idx = Math.round(el.scrollLeft / cardW);
      setS5Active(Math.min(cards.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const cardW = el.scrollWidth / cards.length;
    el.scrollLeft = cardW;
    return () => el.removeEventListener("scroll", onScroll);
  }, [cards.length]);

  return (
    <>
      <div ref={s5Ref} className="s5-carousel sm:hidden flex overflow-x-auto gap-3 px-4" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingTop: "2vh", paddingBottom: "2vh" }}>
        {cards.map((col, i) => (
          <div key={col.label} data-reveal data-reveal-delay={i + 1} className="shrink-0 overflow-hidden rounded-2xl transition-all duration-300" style={{ width: "68vw", scrollSnapAlign: "center", border: col.featured ? "2px solid var(--brand-gold)" : "1px solid rgba(56,50,42,0.12)", boxShadow: i === s5Active ? "0 8px 32px rgba(56,50,42,0.15)" : "0 2px 12px rgba(56,50,42,0.05)", transform: i === s5Active ? "scale(1)" : "scale(0.92)", opacity: i === s5Active ? 1 : 0.6 }}>
            <div className="py-4 px-5 text-center" style={{ backgroundColor: col.dark ? "var(--brand-footer)" : "var(--brand-light)", color: col.dark ? "var(--brand-footer-text)" : "var(--brand-dark)" }}>
              <p className="text-base font-light tracking-widest">{col.label}</p>
            </div>
            <div style={{ backgroundColor: col.featured ? "rgba(74,72,64,0.04)" : "transparent" }}>
              {col.rows.map((row, ri) => (
                <div key={row.label}>
                  {ri > 0 && (<div className="mx-5" style={{ height: 1, backgroundColor: "rgba(56,50,42,0.1)" }} />)}
                  <div className="px-5 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-1.5 font-light" style={{ color: "var(--brand-gold)" }}>{row.label}</p>
                    {row.lines.map((line, li) => (
                      <p key={li} className="text-[12px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: col.featured ? 0.9 : 0.78 }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex sm:hidden justify-center gap-4 mt-3 mb-2">
        {cards.map((col, i) => (
          <button key={i} className="transition-all duration-300" style={{ fontSize: 11, fontWeight: i === s5Active ? 500 : 300, letterSpacing: "0.05em", color: i === s5Active ? "var(--brand-dark)" : "rgba(56,50,42,0.35)", paddingBottom: 2, background: "none", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottomStyle: "solid", borderBottomWidth: 1.5, borderBottomColor: i === s5Active ? "var(--brand-dark)" : "transparent" }} onClick={() => { const el = s5Ref.current; if (!el) return; const cardW = el.scrollWidth / cards.length; el.scrollTo({ left: cardW * i, behavior: "smooth" }); }}>
            {col.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default function Section5WhyChoose({ data }: { data: S5WhyChoose }) {
  const cards = data.columns;
  // Desktop rows: for each row-index in cards[0].rows, build cells from each column
  const rowCount = Math.max(...cards.map(c => c.rows.length));
  const rows: { cells: string[][] }[] = [];
  for (let ri = 0; ri < rowCount; ri++) {
    rows.push({
      cells: cards.map(c => {
        const row = c.rows[ri];
        if (!row) return [];
        if (ri < 2) return [`${row.label}：${row.lines.join(" / ")}`];
        return row.lines;
      }),
    });
  }

  return (
    <section id="s5" className="h-auto sm:min-h-0 py-16 sm:py-24 lg:py-28 flex flex-col overflow-hidden" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="px-6 sm:px-10 lg:px-14">
        <div data-reveal className="text-center mb-6 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light mb-3" style={{ letterSpacing: "0.04em" }}>{data.heading}</h2>
          <p className="text-sm lg:text-[17px] font-light tracking-widest" style={{ color: "var(--brand-gold)" }}>{data.subheading}</p>
        </div>
        <style>{`.s5-carousel::-webkit-scrollbar { display: none; }`}</style>
        <S5Carousel cards={cards} />

        <div data-reveal className="hidden sm:block overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: 560 }}>
            <thead>
              <tr>
                {cards.map((col) => (
                  <th key={col.label} className="py-5 px-4 text-center font-light text-base lg:text-lg" style={{ backgroundColor: col.dark ? "var(--brand-footer)" : "var(--brand-light)", color: col.dark ? "var(--brand-footer-text)" : "var(--brand-dark)", letterSpacing: "0.08em", border: "1px solid rgba(56,50,42,0.12)", width: `${100 / cards.length}%` }}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                const maxLinesInRow = Math.max(...row.cells.map(c => c.length));
                return (
                  <tr key={ri}>
                    {row.cells.map((lines, ci) => {
                      const isCenter = cards[ci]?.featured;
                      return (
                        <td key={ci} className="px-5 lg:px-7 py-7 text-center align-middle" style={{ border: "1px solid rgba(56,50,42,0.12)", backgroundColor: isCenter ? "rgba(74,72,64,0.05)" : "transparent" }}>
                          {ri === 2 ? (
                            <>
                              {lines.length > 0 && (
                                <p className="leading-loose" style={{ fontSize: "14px", letterSpacing: "0.03em", color: "var(--brand-dark)", opacity: isCenter ? 0.9 : 0.78, fontWeight: 300 }}>
                                  {lines[0]}
                                </p>
                              )}
                              {lines.length > 1 && (
                                <div className="inline-block text-left mt-1">
                                  {lines.slice(1).map((line, li) => (
                                    <p key={li + 1} className="leading-loose" style={{ fontSize: "14px", letterSpacing: "0.03em", color: "var(--brand-dark)", opacity: isCenter ? 0.9 : 0.78, fontWeight: 300 }}>
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            lines.map((line, li) => (
                              <p key={li} className="leading-loose" style={{ fontSize: "14px", letterSpacing: "0.03em", color: "var(--brand-dark)", opacity: isCenter ? 0.9 : 0.78, fontWeight: 300 }}>
                                {line}
                              </p>
                            ))
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
