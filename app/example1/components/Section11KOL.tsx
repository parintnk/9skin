"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { img } from "@/lib/img";
import type { S11KOL } from "@/lib/content/types";

export default function Section11KOL({ data, onOpenLightbox }: { data: S11KOL; onOpenLightbox: (images: string[], index: number) => void }) {
  const [isKolInteracting, setIsKolInteracting] = useState(false);
  const kolResumeTimerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (kolResumeTimerRef.current !== null) window.clearTimeout(kolResumeTimerRef.current);
  }, []);

  const pauseKolAutoScroll = () => {
    setIsKolInteracting(true);
    if (kolResumeTimerRef.current !== null) window.clearTimeout(kolResumeTimerRef.current);
    kolResumeTimerRef.current = window.setTimeout(() => { setIsKolInteracting(false); kolResumeTimerRef.current = null; }, 1800);
  };

  const row1 = data.row1;
  const row2 = data.row2;
  const featured = data.featuredImages;

  return (
    <section id="s11" className="py-8 sm:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: "var(--brand-lighter)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-6 sm:mb-20">
        <div data-reveal className="hidden sm:block text-center mb-6 sm:mb-20">
          <p className="text-[11px] lg:text-[13px] font-light tracking-[0.28em] uppercase mb-6" style={{ color: "var(--brand-muted)" }}>{data.eyebrow}</p>
          <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-light leading-tight mb-4" style={{ letterSpacing: "0.04em", fontFamily: "Georgia, serif" }}>{data.heading}</h2>
          <p className="text-sm lg:text-base font-light tracking-widest" style={{ color: "var(--brand-dark)", opacity: 0.65, letterSpacing: "0.18em" }}>{data.subheading}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 lg:gap-16">
          <div className="hidden sm:flex gap-3 sm:gap-6 shrink-0">
            {featured.map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl shadow-md cursor-zoom-in ${i === 1 ? "hidden sm:block" : ""}`} onClick={() => { onOpenLightbox(row2.map(r => img(r.src)), 5 + i); }} style={{ width: "clamp(100px, 28vw, 160px)", height: "clamp(176px, 50vw, 284px)", border: "1px solid #E8E0D4", boxShadow: "0 8px 32px rgba(56,50,42,0.12)", backgroundColor: "#F5F0E8", padding: "3px" }}>
                <Image src={img(src)} alt={`featured ${i + 1}`} width={160} height={284} className="w-full h-full object-cover rounded-xl" />
              </div>
            ))}
          </div>

          <div data-reveal data-reveal-delay="1" className="flex-1 w-full text-center sm:text-left">
            <p className="text-base tracking-[0.4em] mb-5 hidden sm:block" style={{ color: "var(--brand-muted)", letterSpacing: "0.3em" }}>· · · · · · ·</p>
            <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-medium sm:font-light mb-4 sm:mb-4" style={{ letterSpacing: "0.05em" }}>{data.featuredHeading}</h3>
            <div className="w-10 sm:w-12 h-px mb-6 sm:mb-6 mx-auto sm:mx-0" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
            <div className="space-y-4 mb-2 sm:mb-8">
              <p className="text-[12px] sm:text-sm lg:text-[17px] font-light leading-[1.8] sm:leading-loose text-left" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>{data.featuredPara1}</p>
              <p className="text-[12px] sm:text-sm lg:text-[17px] font-light leading-[1.8] sm:leading-loose text-left" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>{data.featuredPara2}</p>
            </div>
            <p className="text-[11px] font-light tracking-[0.2em] uppercase hidden sm:block" style={{ color: "var(--brand-muted)" }}>{data.featuredFooter}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-12">
        <div className="h-px" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
      </div>

      <div className="marquee-outer flex flex-col gap-4">
        <div className={`kol-scroll-row overflow-x-auto px-6 sm:px-10 ${isKolInteracting ? "is-interacting" : ""}`} onPointerDown={pauseKolAutoScroll} onTouchStart={pauseKolAutoScroll} onWheel={pauseKolAutoScroll} onScroll={pauseKolAutoScroll}>
          <div className="flex gap-3 sm:gap-4 marquee-track-left" style={{ width: "max-content" }}>
            {[...row1, ...row1].map((imgItem, i) => (
              <div key={i} className="shrink-0 overflow-hidden rounded-xl cursor-zoom-in" style={{ height: "clamp(260px, 55vw, 420px)", width: "clamp(146px, 31vw, 236px)", backgroundColor: "#F5F0E8", padding: "2px" }} onClick={() => { onOpenLightbox(row1.map(r => img(r.src)), i % row1.length); }}>
                <Image src={img(imgItem.src)} alt={imgItem.alt} width={236} height={420} className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        <div className={`kol-scroll-row overflow-x-auto px-6 sm:px-10 ${isKolInteracting ? "is-interacting" : ""}`} onPointerDown={pauseKolAutoScroll} onTouchStart={pauseKolAutoScroll} onWheel={pauseKolAutoScroll} onScroll={pauseKolAutoScroll}>
          <div className="flex gap-3 sm:gap-4 marquee-track-right" style={{ width: "max-content" }}>
            {[...row2, ...row2].map((imgItem, i) => (
              <div key={i} className="shrink-0 overflow-hidden rounded-xl cursor-zoom-in" style={{ height: "clamp(260px, 55vw, 420px)", width: "clamp(146px, 31vw, 236px)", backgroundColor: "#F5F0E8", padding: "2px" }} onClick={() => { onOpenLightbox(row2.map(r => img(r.src)), i % row2.length); }}>
                <Image src={img(imgItem.src)} alt={imgItem.alt} width={236} height={420} className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
