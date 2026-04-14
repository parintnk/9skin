"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { kolRow1, kolRow2 } from "../data";

export default function Section11KOL({ onOpenLightbox }: { onOpenLightbox: (images: string[], index: number) => void }) {
  const [isKolInteracting, setIsKolInteracting] = useState(false);
  const kolResumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (kolResumeTimerRef.current !== null) {
        window.clearTimeout(kolResumeTimerRef.current);
      }
    };
  }, []);

  const pauseKolAutoScroll = () => {
    setIsKolInteracting(true);
    if (kolResumeTimerRef.current !== null) {
      window.clearTimeout(kolResumeTimerRef.current);
    }
    kolResumeTimerRef.current = window.setTimeout(() => {
      setIsKolInteracting(false);
      kolResumeTimerRef.current = null;
    }, 1800);
  };

  return (
    <section id="s11" className="py-8 sm:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: "var(--brand-lighter)" }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-6 sm:mb-20">

        {/* Big heading */}
        <div data-reveal className="hidden sm:block text-center mb-6 sm:mb-20">
          <p className="text-[11px] lg:text-[13px] font-light tracking-[0.28em] uppercase mb-6" style={{ color: "var(--brand-muted)" }}>
            KOL Reviews
          </p>
          <h2
            className="text-[2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-light leading-tight mb-4"
            style={{ letterSpacing: "0.04em", fontFamily: "Georgia, serif" }}
          >
            眞實口碑・看得見的改變
          </h2>
          <p className="text-sm lg:text-base font-light tracking-widest" style={{ color: "var(--brand-dark)", opacity: 0.65, letterSpacing: "0.18em" }}>
            Real Testimonials, Visible Transformations.
          </p>
        </div>

        {/* Featured block: 2 portrait cards + text */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 lg:gap-16">

          {/* Left: cards — hidden on mobile, 2 on sm+ */}
          <div className="hidden sm:flex gap-3 sm:gap-6 shrink-0">
            {[kolRow2[5], kolRow2[6]].map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-md cursor-zoom-in ${i === 1 ? "hidden sm:block" : ""}`}
                onClick={() => { onOpenLightbox(kolRow2.map(r => r.src), 5 + i); }}
                style={{
                  width: "clamp(100px, 28vw, 160px)",
                  height: "clamp(176px, 50vw, 284px)",
                  border: "1px solid #E8E0D4",
                  boxShadow: "0 8px 32px rgba(56,50,42,0.12)",
                  backgroundColor: "#F5F0E8",
                  padding: "3px",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={160}
                  height={284}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div data-reveal data-reveal-delay="1" className="flex-1 w-full text-center sm:text-left">
            <p className="text-base tracking-[0.4em] mb-5 hidden sm:block" style={{ color: "var(--brand-muted)", letterSpacing: "0.3em" }}>
              · · · · · · ·
            </p>
            <h3
              className="text-xl sm:text-2xl lg:text-[1.7rem] font-medium sm:font-light mb-4 sm:mb-4"
              style={{ letterSpacing: "0.05em" }}
            >
              KOL與顧客一致好評
            </h3>
            <div className="w-10 sm:w-12 h-px mb-6 sm:mb-6 mx-auto sm:mx-0" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
            <div className="space-y-4 mb-2 sm:mb-8">
              <p className="text-[12px] sm:text-sm lg:text-[17px] font-light leading-[1.8] sm:leading-loose text-left sm:text-left" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                許多美容部落客與KOL體驗後都給予高度評價，不只是因為立即的效果，更重視的是玖膚對肌膚健康的長期關注
              </p>
              <p className="text-[12px] sm:text-sm lg:text-[17px] font-light leading-[1.8] sm:leading-loose text-left sm:text-left" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                超過5000位顧客的信任，來自於我們對每一位客人的用心照護。每一則好評都是我們持續進步的動力
              </p>
            </div>
            <p className="text-[11px] font-light tracking-[0.2em] uppercase hidden sm:block" style={{ color: "var(--brand-muted)" }}>
              Highly positive feedback from KOLs and customers
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-12">
        <div className="h-px" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
      </div>

      {/* Marquee rows */}
      <div className="marquee-outer flex flex-col gap-4">

        {/* Row 1 — scrolls left */}
        <div
          className={`kol-scroll-row overflow-x-auto px-6 sm:px-10 ${isKolInteracting ? "is-interacting" : ""}`}
          onPointerDown={pauseKolAutoScroll}
          onTouchStart={pauseKolAutoScroll}
          onWheel={pauseKolAutoScroll}
          onScroll={pauseKolAutoScroll}
        >
          <div className="flex gap-3 sm:gap-4 marquee-track-left" style={{ width: "max-content" }}>
            {[...kolRow1, ...kolRow1].map((img, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-xl cursor-zoom-in"
                style={{
                  height: "clamp(260px, 55vw, 420px)",
                  width: "clamp(146px, 31vw, 236px)",
                  backgroundColor: "#F5F0E8",
                  padding: "2px",
                }}
                onClick={() => { onOpenLightbox(kolRow1.map(r => r.src), i % kolRow1.length); }}
              >
                <Image src={img.src} alt={img.alt} width={236} height={420} className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className={`kol-scroll-row overflow-x-auto px-6 sm:px-10 ${isKolInteracting ? "is-interacting" : ""}`}
          onPointerDown={pauseKolAutoScroll}
          onTouchStart={pauseKolAutoScroll}
          onWheel={pauseKolAutoScroll}
          onScroll={pauseKolAutoScroll}
        >
          <div className="flex gap-3 sm:gap-4 marquee-track-right" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((img, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-xl cursor-zoom-in"
                style={{
                  height: "clamp(260px, 55vw, 420px)",
                  width: "clamp(146px, 31vw, 236px)",
                  backgroundColor: "#F5F0E8",
                  padding: "2px",
                }}
                onClick={() => { onOpenLightbox(kolRow2.map(r => r.src), i % kolRow2.length); }}
              >
                <Image src={img.src} alt={img.alt} width={236} height={420} className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
