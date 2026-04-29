"use client";

import Bubble from "./Bubble";
import type { S3Problems } from "@/lib/content/types";

export default function Section3Problems({ data }: { data: S3Problems }) {
  return (
    <section id="s3" className="h-auto min-h-[580px] sm:h-auto sm:min-h-0 py-4 sm:py-24 lg:py-28 flex flex-col justify-center overflow-hidden sm:block" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-3 sm:mb-5">
          <h2 className="text-lg sm:text-3xl mt-5 md:mt-0 lg:text-[2.4rem] font-light leading-snug" style={{ letterSpacing: "0.03em" }}>
            {data.heading}
          </h2>
          <span className="text-[11px] sm:text-sm mb-4 md:mb-0 lg:text-[17px] font-light shrink-0" style={{ color: "var(--brand-gold)", letterSpacing: "0.18em" }}>
            {data.eyebrow}
          </span>
        </div>
        <div className="w-full h-px mb-12 sm:mb-16" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />

        {/* Mobile bubbles */}
        <div className="flex flex-col gap-2 mb-4 sm:hidden">
          {data.bubblesMobile.map((b, i) => (
            <div key={i} data-reveal={b.dark ? "right" : "left"} className={`flex ${b.dark ? "justify-end" : "justify-start"}`}>
              <Bubble dark={b.dark} text={b.text} align={b.dark ? "right" : "left"} />
            </div>
          ))}
        </div>

        {/* Desktop bubbles — render pairs of rows */}
        <div className="hidden sm:flex flex-col gap-7 mb-20">
          {(() => {
            const bubbles = data.bubblesDesktop;
            const rows: typeof bubbles[] = [];
            let i = 0;
            if (bubbles[0]) { rows.push([bubbles[0]]); i = 1; }
            while (i < bubbles.length) {
              rows.push(bubbles.slice(i, i + 2));
              i += 2;
            }
            return rows.map((row, ri) => (
              row.length === 1 ? (
                <div key={ri} data-reveal="left" className="flex justify-start sm:pl-[12%]">
                  <Bubble dark={row[0].dark} text={row[0].text} align={row[0].dark ? "right" : "left"} />
                </div>
              ) : (
                <div key={ri} data-reveal className="flex flex-row items-start justify-between gap-5">
                  {row.map((b, bi) => (
                    <Bubble key={bi} dark={b.dark} text={b.text} align={b.dark ? "right" : "left"} />
                  ))}
                </div>
              )
            ));
          })()}
        </div>

        <div className="flex items-start gap-2 sm:gap-8 mt-12 md:mt-0">
          <span className="text-[4.5rem] sm:text-[5rem] lg:text-[6rem] font-extralight leading-none shrink-0 select-none mt-2" style={{ color: "var(--brand-dark)", opacity: 0.25 }}>(</span>
          <div className="flex-1 text-center space-y-1 sm:space-y-3 py-2 sm:py-4">
            <p className="text-[10px] sm:text-base lg:text-[18px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>{data.para1}</p>
            <p className="text-[10px] sm:text-base lg:text-[18px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>{data.para2}</p>
            <p className="text-[10px] sm:text-sm tracking-[0.4em] font-light pt-1" style={{ color: "var(--brand-gold)" }}>· · ·</p>
          </div>
          <span className="text-[4.5rem] sm:text-[5rem] lg:text-[6rem] font-extralight leading-none shrink-0 select-none mt-2" style={{ color: "var(--brand-dark)", opacity: 0.25 }}>)</span>
        </div>
      </div>
    </section>
  );
}
