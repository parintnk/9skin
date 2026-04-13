"use client";

import Bubble from "./Bubble";

export default function Section3Problems() {
  return (
    <section className="h-[85svh] min-h-[580px] sm:h-auto sm:min-h-0 py-4 sm:py-24 lg:py-28 flex flex-col justify-center overflow-hidden sm:block" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-3 sm:mb-5">
          <h2 className="text-lg sm:text-3xl mt-5 md:mt-0 lg:text-[2.4rem] font-light leading-snug" style={{ letterSpacing: "0.03em" }}>
            變美的路上,你也正在經歷這些嗎?
          </h2>
          <span className="text-[11px] sm:text-sm mb-4 md:mb-0 lg:text-[17px] font-light shrink-0" style={{ color: "var(--brand-gold)", letterSpacing: "0.18em" }}>
            Skin problems
          </span>
        </div>
        <div className="w-full h-px mb-12 sm:mb-16" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
        <div className="flex flex-col gap-2 sm:gap-7 mb-4 sm:mb-20">
          {/* Row 1 — center-left */}
          <div data-reveal="left" className="flex justify-start sm:pl-[12%]">
            <Bubble text="保養品越買越多,毛孔卻沒有變細,反而更明顯" align="left" />
          </div>
          {/* Row 2 — mobile */}
          <div data-reveal="right" className="flex justify-end sm:hidden">
            <Bubble dark text="痘痘藥、A酸都試過,皮膚卻始終反覆、不穩定" align="right" />
          </div>
          {/* Row 2 — desktop */}
          <div data-reveal className="hidden sm:flex sm:flex-row sm:items-start sm:justify-between gap-5">
            <Bubble text="一到換季就泛紅、刺癢、脫皮,怎麼保養都不安心" align="left" />
            <Bubble dark text="痘痘藥、A酸都試過,皮膚卻始終反覆、不穩定" align="right" />
          </div>
          {/* Row 2 mobile — light */}
          <div data-reveal="left" className="flex justify-start sm:hidden">
            <Bubble text="一到換季就泛紅、刺癢、脫皮,怎麼保養都不安心" align="left" />
          </div>
          {/* Row 3 — mobile */}
          <div data-reveal="right" className="flex justify-end sm:hidden">
            <Bubble dark text="明明用的是高價保養,肌膚卻還是黯淡、沒精神" align="right" />
          </div>
          <div data-reveal="left" className="flex justify-start sm:hidden">
            <Bubble text="不適合自己的課程與產品,讓皮膚越照顧越敏感" align="left" />
          </div>
          {/* Row 3 — desktop */}
          <div data-reveal className="hidden sm:flex sm:flex-row sm:items-start sm:justify-between gap-5">
            <Bubble dark text="明明用的是高價保養,肌膚卻還是黯淡、沒精神" align="right" />
            <Bubble text="不適合自己的課程與產品,讓皮膚越照顧越敏感" align="left" />
          </div>
        </div>

        <div className="flex items-start gap-2 sm:gap-8 mt-12 md:mt-0">
          <span className="text-[4.5rem] sm:text-[5rem] lg:text-[6rem] font-extralight leading-none shrink-0 select-none mt-2 sm:mt-2" style={{ color: "var(--brand-dark)", opacity: 0.25 }}>(</span>
          <div className="flex-1 text-center space-y-1 sm:space-y-3 py-2 sm:py-4">
            <p className="text-[10px] sm:text-base lg:text-[18px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
              問題的核心不在於你不夠努力,<br className="sm:hidden" />而是缺少對肌膚的正確理解與專業指引如果你也在想「我只是想要一個穩定、透亮、<br className="sm:hidden" />不再折騰的肌膚,到底該從哪裡開始?」
            </p>
            <p className="text-[10px] sm:text-base lg:text-[18px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
              真正的改變,從了解肌膚狀態、回到皮膚本身的節奏開始!
            </p>
            <p className="text-[10px] sm:text-sm tracking-[0.4em] font-light pt-1" style={{ color: "var(--brand-gold)" }}>· · ·</p>
          </div>
          <span className="text-[4.5rem] sm:text-[5rem] lg:text-[6rem] font-extralight leading-none shrink-0 select-none mt-2 sm:mt-2" style={{ color: "var(--brand-dark)", opacity: 0.25 }}>)</span>
        </div>
      </div>
    </section>
  );
}
