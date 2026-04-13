"use client";

import { useEffect, useRef, useState } from "react";

const s5Cards = [
  {
    label: "醫美療程",
    dark: false,
    featured: false,
    rows: [
      { label: "費用", lines: ["價格 $5000以上"] },
      { label: "時間", lines: ["1～2月一次，平均1hr/次"] },
      { label: "特色", lines: ["以雷射為主作為治療", "但是針對需要維護保養的敏感肌", "或是需要專業手工針清的粉刺痘痘肌", "雷射並非最佳首選"] },
      { label: "成效", lines: ["快速立即見效", "但長期施作肌膚容易敏感及需承擔操作風險"] },
    ],
  },
  {
    label: "玖膚皮膚管理",
    dark: true,
    featured: true,
    rows: [
      { label: "費用", lines: ["價格 $2~3000"] },
      { label: "時間", lines: ["1～2月一次，平均60~120分/次"] },
      { label: "特色", lines: ["從專業肌膚檢測開始，深入了解肌膚底層狀況", "找出真正影響膚況的關鍵", "依據每個人的膚質、肌膚耐受度與不同區域的問題差異", "搭配專業皮膚管理儀器、專業手法與頂級院線保養品", "為肌膚各區量身規劃對應的管理方式", "真正做到客製化的皮膚分區管理", "讓每一次做臉都不是浪費，而是看得到改變"] },
      { label: "成效", lines: ["透過系統性的皮膚管理不只是短暫好看而是膚質真正被改善", "達到穩定、透亮、有彈性的水煮蛋肌"] },
    ],
  },
  {
    label: "傳統美容",
    dark: false,
    featured: false,
    rows: [
      { label: "費用", lines: ["價格 $2000左右"] },
      { label: "時間", lines: ["1～2月一次，平均60~120分/次"] },
      { label: "特色", lines: ["以粉刺清潔與基礎保濕為核心", "流程相對固定", "較少結合科技化輔助調整", "因此在皮膚質地層面的改善較為有限"] },
      { label: "成效", lines: ["以基礎清潔保濕", "以及舒適放鬆為主"] },
    ],
  },
];

function S5Carousel() {
  const [s5Active, setS5Active] = useState(1);
  const s5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = s5Ref.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.scrollWidth / 3;
      const idx = Math.round(el.scrollLeft / cardW);
      setS5Active(Math.min(2, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    // scroll to center card on mount
    const cardW = el.scrollWidth / 3;
    el.scrollLeft = cardW;
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={s5Ref}
        className="s5-carousel sm:hidden flex overflow-x-auto gap-3 px-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingTop: "2vh",
          paddingBottom: "2vh",
        }}
      >
        {s5Cards.map((col, i) => (
          <div
            key={col.label}
            data-reveal
            data-reveal-delay={i + 1}
            className="shrink-0 overflow-hidden rounded-2xl transition-all duration-300"
            style={{
              width: "68vw",
              scrollSnapAlign: "center",
              border: col.featured ? "2px solid var(--brand-gold)" : "1px solid rgba(56,50,42,0.12)",
              boxShadow: i === s5Active
                ? "0 8px 32px rgba(56,50,42,0.15)"
                : "0 2px 12px rgba(56,50,42,0.05)",
              transform: i === s5Active ? "scale(1)" : "scale(0.92)",
              opacity: i === s5Active ? 1 : 0.6,
            }}
          >
            {/* Card header */}
            <div
              className="py-4 px-5 text-center"
              style={{
                backgroundColor: col.dark ? "var(--brand-footer)" : "var(--brand-light)",
                color: col.dark ? "var(--brand-footer-text)" : "var(--brand-dark)",
              }}
            >
              <p className="text-base font-light tracking-widest">{col.label}</p>
            </div>
            {/* Card rows */}
            <div style={{ backgroundColor: col.featured ? "rgba(74,72,64,0.04)" : "transparent" }}>
              {col.rows.map((row, ri) => (
                <div key={row.label}>
                  {ri > 0 && (
                    <div className="mx-5" style={{ height: 1, backgroundColor: "rgba(56,50,42,0.1)" }} />
                  )}
                  <div className="px-5 py-3">
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-1.5 font-light" style={{ color: "var(--brand-gold)" }}>
                      {row.label}
                    </p>
                    {row.lines.map((line, li) => (
                      <p key={li} className="text-[12px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: col.featured ? 0.9 : 0.78 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Text indicators */}
      <div className="flex sm:hidden justify-center gap-4 mt-3 mb-2">
        {s5Cards.map((col, i) => (
          <button
            key={i}
            className="transition-all duration-300"
            style={{
              fontSize: 11,
              fontWeight: i === s5Active ? 500 : 300,
              letterSpacing: "0.05em",
              color: i === s5Active ? "var(--brand-dark)" : "rgba(56,50,42,0.35)",
              paddingBottom: 2,
              background: "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottomStyle: "solid",
              borderBottomWidth: 1.5,
              borderBottomColor: i === s5Active ? "var(--brand-dark)" : "transparent",
            }}
            onClick={() => {
              const el = s5Ref.current;
              if (!el) return;
              const cardW = el.scrollWidth / 3;
              el.scrollTo({ left: cardW * i, behavior: "smooth" });
            }}
          >
            {col.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default function Section5WhyChoose() {
  return (
    <section id="s5" className="h-auto sm:min-h-0 py-16 sm:py-24 lg:py-28 flex flex-col overflow-hidden" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="px-6 sm:px-10 lg:px-14">

        {/* Heading */}
        <div data-reveal className="text-center mb-6 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light mb-3" style={{ letterSpacing: "0.04em" }}>
            為什麼選擇玖膚？
          </h2>
          <p className="text-sm lg:text-[17px] font-light tracking-widest" style={{ color: "var(--brand-gold)" }}>
            Why choose us?
          </p>
        </div>

        {/* ── MOBILE: horizontal carousel with center focus ── */}
        <style>{`
          .s5-carousel::-webkit-scrollbar { display: none; }
        `}</style>
        <S5Carousel />

        {/* ── DESKTOP: table ── */}
        <div data-reveal className="hidden sm:block overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: 560 }}>
            <thead>
              <tr>
                {[
                  { label: "醫美療程", dark: false },
                  { label: "玖膚皮膚管理", dark: true },
                  { label: "傳統美容", dark: false },
                ].map((col) => (
                  <th
                    key={col.label}
                    className="py-5 px-4 text-center font-light text-base lg:text-lg"
                    style={{
                      backgroundColor: col.dark ? "var(--brand-footer)" : "var(--brand-light)",
                      color: col.dark ? "var(--brand-footer-text)" : "var(--brand-dark)",
                      letterSpacing: "0.08em",
                      border: "1px solid rgba(56,50,42,0.12)",
                      width: "33.33%",
                    }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cells: [
                    ["費用：價格 $5000以上"],
                    ["費用：價格 $2~3000"],
                    ["費用：價格 $2000左右"],
                  ],
                },
                {
                  cells: [
                    ["時間：1～2月一次，平均1hr/次"],
                    ["時間：1～2月一次，平均60~120分/次"],
                    ["時間：1～2月一次，平均60~120分/次"],
                  ],
                },
                {
                  highlight: true,
                  cells: [
                    ["以雷射為主作為治療", "但是針對需要維護保養的敏感肌", "或是需要專業手工針清的粉刺痘痘肌", "雷射並非最佳首選"],
                    ["從專業肌膚檢測開始，深入了解肌膚底層狀況", "找出真正影響膚況的關鍵", "依據每個人的膚質、肌膚耐受度與不同區域的問題差異", "搭配專業皮膚管理儀器、專業手法與頂級院線保養品", "為肌膚各區量身規劃對應的管理方式", "真正做到客製化的皮膚分區管理", "讓每一次做臉都不是浪費，而是看得到改變"],
                    ["以粉刺清潔與基礎保濕為核心", "流程相對固定", "較少結合科技化輔助調整", "因此在皮膚質地層面的改善較為有限"],
                  ],
                },
                {
                  cells: [
                    ["快速立即見效", "但長期施作肌膚容易敏感及需承擔操作風險"],
                    ["透過系統性的皮膚管理不只是短暫好看而是膚質真正被改善", "達到穩定、透亮、有彈性的水煮蛋肌"],
                    ["以基礎清潔保濕", "以及舒適放鬆為主"],
                  ],
                },
              ].map((row, ri) => (
                <tr key={ri}>
                  {row.cells.map((lines, ci) => {
                    const isCenter = ci === 1;
                    return (
                      <td
                        key={ci}
                        className="px-5 lg:px-7 py-7 text-center align-middle"
                        style={{
                          border: "1px solid rgba(56,50,42,0.12)",
                          backgroundColor: isCenter ? "rgba(74,72,64,0.05)" : "transparent",
                        }}
                      >
                        {lines.map((line, li) => {
                          const isBold = isCenter && row.highlight && li === 5;
                          return (
                            <p
                              key={li}
                              className="leading-loose"
                              style={{
                                fontSize: "14px",
                                letterSpacing: "0.03em",
                                color: "var(--brand-dark)",
                                opacity: isCenter ? 0.9 : 0.78,
                                fontWeight: isBold ? 500 : 300,
                              }}
                            >
                              {line}
                            </p>
                          );
                        })}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
