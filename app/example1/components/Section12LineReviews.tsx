"use client";

import Image from "next/image";
import { lineReviewSrcs, lineReviewDesktopCards, lineReviewDesktopSrcs } from "../data";

export default function Section12LineReviews({ onOpenLightbox }: { onOpenLightbox: (images: string[], index: number) => void }) {
  return (
    <section id="s12" className="pt-12 sm:pt-15 " style={{ backgroundColor: "var(--brand-lighter)" }}>

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-14 px-4" data-reveal="fade">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>
          官方line 顧客好評分享
        </h2>
        <p className="mt-2 text-sm sm:text-base italic" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
          Official Line Customer Review Sharing
        </p>
      </div>

      {/* Mobile: 2-col masonry */}
      <div className="sm:hidden columns-2 gap-2 px-4 pb-10" style={{ columnGap: 10 }}>
        {lineReviewSrcs.map((src, i) => (
          <div
            key={i}
            data-reveal="pop"
            className="break-inside-avoid cursor-zoom-in"
            style={{ marginBottom: 10, animationDelay: `${i * 0.15}s` }}
            onClick={() => { onOpenLightbox(lineReviewSrcs, i); }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(30,24,18,0.10)", padding: "4px" }}>
              <Image src={src} alt={`顧客好評 ${i + 1}`} width={300} height={480} className="w-full h-auto rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: absolute scattered layout */}
      <div className="hidden sm:block relative mx-auto" style={{ maxWidth: 1200, height: 900, paddingLeft: 24, paddingRight: 24 }}>
        {lineReviewDesktopCards.map((card, i) => (
          <div
            key={i}
            data-reveal="pop"
            style={{
              position: "absolute",
              left: card.left,
              top: card.top,
              width: card.width,
              animationDelay: `${i * 0.15}s`,
              zIndex: 1,
            }}
          >
            <div
              className="cursor-zoom-in"
              style={{ transformOrigin: "center center", transition: "transform 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; (e.currentTarget as HTMLElement).parentElement!.style.zIndex = "10"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).parentElement!.style.zIndex = "1"; }}
              onClick={() => { onOpenLightbox(lineReviewDesktopSrcs, i); }}
            >
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", boxShadow: "0 6px 24px rgba(30,24,18,0.12)", padding: "6px" }}>
                <Image
                  src={`/img/Page 12_ Customer Review from Line Official /${card.src}`}
                  alt={`顧客好評 ${i + 1}`}
                  width={300}
                  height={480}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
