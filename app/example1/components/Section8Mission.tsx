"use client";

import Image from "next/image";

export default function Section8Mission() {
  return (
    <section id="s8" className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>

      {/* Left: content */}
      <div className="flex-1 flex flex-col px-6 sm:px-12 lg:px-14 pt-8 sm:pt-14 lg:pt-16 pb-0">

        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-light mb-3 sm:mb-5 italic" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>
          Let you meet the best version of yourself
        </p>

        {/* Main heading */}
        <div data-reveal className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 sm:mb-8">
          <Image src="/img/9skin logo.png" alt="9skin玖膚" width={120} height={40} className="h-7 sm:h-8 lg:h-10 w-auto" />
          <h2 className="text-[1.3rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold leading-tight" style={{ letterSpacing: "0.03em" }}>
            讓你遇見最好的自己
          </h2>
        </div>

        {/* Sub-heading */}
        <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-5" style={{ letterSpacing: "0.04em" }}>
          我們的使命
        </h3>

        {/* Rule */}
        <div className="w-full h-px mb-4 sm:mb-7" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />

        {/* Body */}
        <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-10">
          <p data-reveal data-reveal-delay="1" className="text-[12px] sm:text-[15px] lg:text-base font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.03em" }}>
            9skin成立於2021年，在台北與高雄皆有分店，以改善2000個以上從問題肌膚到健康肌，再邁向變成細緻的光澤肌
          </p>
          <p data-reveal data-reveal-delay="2" className="text-[12px] sm:text-[15px] lg:text-base font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.03em" }}>
            我們提供8種護膚課程，其中以『韓式深層保養』最受歡迎，許多客人第一次體驗後就成為長期回購的忠實顧客
          </p>
          <p data-reveal data-reveal-delay="3" className="text-[12px] sm:text-[15px] lg:text-base font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.03em" }}>
            創立玖膚，只為了一個使命：幫助每個人提升顏值、增加價值，讓你遇見最好的自己
          </p>
        </div>

        {/* Salon image + Founder story — side by side */}
        <div data-reveal className="flex flex-col sm:flex-row gap-0 flex-1">

          {/* Salon image — hidden on mobile */}
          <div className="hidden sm:block relative sm:w-[42%] shrink-0 overflow-hidden" style={{ minHeight: 200, borderRadius: "2px 0 0 0" }}>
            <Image src="/img/Page 8-2.jpg" alt="玖膚空間" fill className="object-cover object-center" />
          </div>

          {/* Founder story */}
          <div className="flex-1 px-4 sm:px-8 pt-4 sm:pt-8 pb-6 sm:pb-10 flex flex-col gap-3 sm:gap-5" style={{ backgroundColor: "rgba(56,50,42,0.04)" }}>
            {/* Label row */}
            <div className="flex items-center justify-between">
              <span
                className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[13px] font-light tracking-widest"
                style={{ backgroundColor: "var(--brand-footer)", color: "var(--brand-footer-text)" }}
              >
                創辦人的故事
              </span>
              <span className="text-[10px] sm:text-xs font-light tracking-[0.16em]" style={{ color: "var(--brand-muted)" }}>
                The founder&apos;s story
              </span>
            </div>
            {/* Story */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm lg:text-[17px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                小時候的我，是同學眼中的「小黑妹」，因外在曾在學校被取笑。那段經歷讓我深刻感受到自信的重要，也激發我投入保養研究。
              </p>
              <p className="text-xs sm:text-sm lg:text-[17px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                經過努力與學習，我找到了屬於自己的美，也下定決心：把這項專業技術傳承下去，幫助更多人看見自己最美的一面。
              </p>
              <p className="text-xs sm:text-sm lg:text-[17px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                正是曾經的低谷，造就了現在的玖膚。因為這段經歷，我知道如何改變自己，也希望每一位走進玖膚的人，都能看見肌膚的改變、重拾自信，活出最美好的自己。
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right: full-height studio photo */}
      <div className="lg:hidden w-full px-16 pt-4 pb-3">
        <div className="overflow-hidden w-full rounded-2xl max-h-[40vh]" style={{ boxShadow: "0 6px 24px rgba(30,24,18,0.10)" }}>
          <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" width={900} height={1200} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="hidden lg:block relative lg:w-[34%] xl:w-[36%]" style={{ minHeight: 640 }}>
        <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" fill className="object-cover object-center" />
      </div>

    </section>
  );
}
