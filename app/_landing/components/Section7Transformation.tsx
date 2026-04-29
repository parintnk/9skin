"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical } from "react-icons/lu";
import { img } from "@/lib/img";
import type { S7Transformation } from "@/lib/content/types";

const ICONS: Record<string, React.ReactNode> = {
  clipboard: <LuClipboardList />,
  leaf: <LuLeaf />,
  sparkles: <LuSparkles />,
  flask: <LuFlaskConical />,
};

export default function Section7Transformation({ data }: { data: S7Transformation }) {
  const cards = data.cards;
  return (
    <section id="s7" className="py-8 sm:py-20 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="px-8 sm:px-12 lg:px-14 mb-8 lg:mb-18">
        <div className="flex items-center gap-4 mb-5">
          <div className="hidden sm:block h-px w-8" style={{ backgroundColor: "rgba(56,50,42,0.25)" }} />
          <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase" style={{ color: "var(--brand-gold)" }}>{data.eyebrow}</p>
        </div>
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h2 className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-tight" style={{ letterSpacing: "0.03em" }}>{data.heading}</h2>
          <p className="text-sm lg:text-[17px] font-light shrink-0 pb-1" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>{data.subheading}</p>
        </div>
      </div>
      <div className="hidden sm:block w-full h-px mb-12 lg:mb-16" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />

      {/* Mobile */}
      <div className="sm:hidden grid grid-cols-2 gap-3 px-5">
        {cards.map((item, i) => (
          <div key={i} data-reveal data-reveal-delay={i + 1} className="flex flex-col rounded-[28px] p-2" style={{ backgroundColor: "rgba(216, 211, 211, 0.72)", border: "1px solid rgba(56,50,42,0.08)", boxShadow: "0 10px 30px rgba(56,50,42,0.08)", backdropFilter: "blur(10px)" }}>
            <div className="card-wrap relative w-full overflow-hidden rounded-[22px]" style={{ aspectRatio: "0.84 / 1" }}>
              <Image src={img(item.img)} alt={item.alt} fill className="card-img object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(56,50,42,0.18) 0%, rgba(56,50,42,0) 45%)" }} />
            </div>
            <div className="px-2 pt-3 pb-2">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[15px] font-medium leading-none truncate" style={{ color: "var(--brand-dark)", letterSpacing: "0.01em" }}>{item.label}</p>
                    <span className="inline-flex h-4 w-6 shrink-0 p-1 items-center justify-center rounded-full" style={{ backgroundColor: "var(--brand-footer)", color: "var(--brand-footer-text)", fontSize: 14 }}>{ICONS[item.icon]}</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] font-light leading-[1.55]" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.01em" }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 px-8 sm:px-12 lg:px-14" style={{ gap: 0 }}>
        {cards.map((item, i) => (
          <div key={i} data-reveal data-reveal-delay={i + 1} className="flex flex-col" style={{ borderLeft: i % 2 === 0 ? "none" : "1px solid rgba(56,50,42,0.12)" }}>
            <div className="card-wrap relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={img(item.img)} alt={item.alt} fill className="card-img object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,24,18,0.35) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 pb-4">
                <p className="text-white text-sm lg:text-base font-light tracking-widest">{item.label}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-7 pt-6 pb-8">
              <span style={{ color: "var(--brand-gold)", fontSize: 20 }}>{ICONS[item.icon]}</span>
              <p className="text-sm lg:text-[17px] font-light leading-[1.9]" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden sm:block w-full h-px mt-4" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />
    </section>
  );
}
