"use client";

import Image from "next/image";
import { skinCareItems } from "../data";

export default function Section6SkinCare() {
  return (
    <section id="s6" className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>

      {/* Image — desktop left only */}
      <div className="hidden lg:block relative lg:w-[38%] xl:w-[40%]" style={{ minHeight: 700 }}>
        <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover object-[center_15%]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 sm:px-12 lg:px-14 py-6 sm:py-14 lg:py-16">

        {/* Eyebrow + rule */}
        <div className="flex items-center gap-4 mb-4 sm:mb-8">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
          <p className="text-xs lg:text-[13px] tracking-[0.28em] uppercase font-light shrink-0" style={{ color: "var(--brand-gold)" }}>
            Korean deep skin care
          </p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
        </div>

        {/* Main heading */}
        <h2 data-reveal className="text-[1.8rem] sm:text-[3.4rem] lg:text-[4rem] font-light mb-2 sm:mb-3" style={{ letterSpacing: "0.08em" }}>
          SKIN CARE
        </h2>

        {/* Subtitle row */}
        <div data-reveal data-reveal-delay="1" className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1 sm:mb-2">
          <span className="text-lg sm:text-[1.8rem] lg:text-[2.1rem] font-normal" style={{ letterSpacing: "0.04em" }}>
            韓式深層保養
          </span>
          <span className="text-sm sm:text-lg lg:text-xl font-light" style={{ color: "rgba(56,50,42,0.35)" }}>·</span>
          <span className="text-sm sm:text-base lg:text-[20px] font-light" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>
            不只表面，更深入肌底
          </span>
        </div>

        {/* Thin accent under subtitle */}
        <div className="w-12 h-0.5 mt-3 sm:mt-5 mb-4 sm:mb-7" style={{ backgroundColor: "var(--brand-gold)", opacity: 0.5 }} />

        {/* Description */}
        <p className="text-[13px] sm:text-base lg:text-[17px] font-light leading-relaxed sm:leading-loose mb-4 sm:mb-10" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
          我們的客製化皮膚管理課程，適合痘痘肌、敏感肌、酒糟肌以及乾燥肌等各種膚況，透過11個完整步驟，約120分鐘的專屬課程，由美容師一對一進行肌膚檢測與專業諮詢，幫你全面了解自己的肌膚狀態
        </p>

        {/* Divider + sub-heading */}
        <div className="flex items-center gap-4 mb-4 sm:mb-8">
          <h3 className="text-base sm:text-lg lg:text-[1.3rem] font-light shrink-0" style={{ letterSpacing: "0.06em" }}>
            課程內容包括
          </h3>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />
        </div>

        {/* Items list */}
        <div className="flex flex-col flex-1">
          {skinCareItems.map((item, i) => (
            <div
              key={item.num}
              data-reveal
              data-reveal-delay={Math.min(i + 1, 5)}
              className="flex gap-3 sm:gap-5 items-start py-2 sm:py-4"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(56,50,42,0.1)" }}
            >
              <span
                className="text-[11px] sm:text-[13px] font-light tracking-wider shrink-0 pt-0.75"
                style={{ color: "var(--brand-gold)", minWidth: "2.2rem" }}
              >
                {item.num}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <p className="text-sm sm:text-base lg:text-[20px] font-normal shrink-0" style={{ letterSpacing: "0.04em" }}>
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.02em" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer summary */}
        <div className="mt-4 sm:mt-8 pt-4 sm:pt-7 space-y-1.5" style={{ borderTop: "1px solid rgba(56,50,42,0.14)" }}>
          <p className="text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.86, letterSpacing: "0.03em" }}>
            全程使用頂級院線保養品，確保肌膚得到最完整、最精準的照護
          </p>
          <p className="text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.86, letterSpacing: "0.03em" }}>
            每次課程都不只是表面保養而是從根本調理肌膚，幫助肌膚恢復健康、穩定與透亮，真正看得見的效果
          </p>
        </div>

      </div>

      {/* Image — mobile bottom */}
      <div className="lg:hidden w-full px-5 pt-2 pb-4">
        <div className="overflow-hidden rounded-3xl max-h-[35vh]" style={{ boxShadow: "0 8px 32px rgba(30,24,18,0.13)" }}>
          <Image src="/img/Page 6.JPG" alt="韓式深層保養" width={900} height={1200} className="w-full h-full object-cover object-[center_12%]" />
        </div>
      </div>
    </section>
  );
}
