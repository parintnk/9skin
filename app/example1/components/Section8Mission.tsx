"use client";

import Image from "next/image";

export default function Section8Mission() {
  return (
    <section
      id="s8"
      className="flex flex-col lg:flex-row relative"
      style={{
        background:
          "linear-gradient(180deg, var(--brand-lighter) 0%, rgba(255,255,255,0.72) 100%)",
      }}
    >

      {/* Left: content */}
      <div className="flex-1 flex flex-col px-6 sm:px-12 lg:px-14 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-0">

        {/* Eyebrow */}
        <p
          className="text-[10px] sm:text-sm font-light mb-3 sm:mb-5 uppercase tracking-[0.2em]"
          style={{ color: "var(--brand-muted)" }}
        >
          Let you meet the best version of yourself
        </p>

        {/* Main heading */}
        <div data-reveal className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-3 mb-8 sm:mb-8">
          <div className="shrink-0 pt-1 sm:pt-0">
            <Image src="/img/9skin logo.png" alt="9skin玖膚" width={120} height={40} className="h-[22px] sm:h-8 lg:h-10 w-auto object-contain" style={{ mixBlendMode: "multiply", filter: "brightness(0.40)" }} />
          </div>
          <h2 className="text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] font-medium leading-tight tracking-[0.05em] text-[var(--brand-dark)]">
            讓你遇見最好的自己
          </h2>
        </div>

        {/* Sub-heading & Line */}
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-[15px] sm:text-xl lg:text-2xl font-medium tracking-[0.15em] text-[var(--brand-dark)]">
            我們的使命
          </h3>
          <div className="flex-1 h-px bg-[var(--brand-dark)] opacity-10" />
        </div>

        {/* Body */}
        <div className="space-y-4 mb-12 sm:mb-10 pl-1 sm:pl-0">
          <p data-reveal data-reveal-delay="1" className="text-[13.5px] sm:text-[15px] lg:text-base font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">
            9skin成立於2021年，在台北與高雄皆有分店，以改善2000個以上從問題肌膚到健康肌，再邁向變成細緻的光澤肌。
          </p>
          <p data-reveal data-reveal-delay="2" className="text-[13.5px] sm:text-[15px] lg:text-base font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">
            我們提供8種護膚課程，其中以『韓式深層保養』最受歡迎，許多客人第一次體驗後就成為長期回購的忠實顧客。
          </p>
          <p data-reveal data-reveal-delay="3" className="text-[13.5px] sm:text-[15px] lg:text-base font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">
            創立玖膚，只為了一個使命：幫助每個人提升顏值、增加價值，讓你遇見最好的自己。
          </p>
        </div>

        {/* Founder story block */}
        <div data-reveal className="flex flex-col sm:flex-row gap-0 flex-1 relative w-full">

          {/* Salon image — hidden on mobile */}
          <div className="hidden sm:block relative sm:w-[42%] shrink-0 overflow-hidden" style={{ minHeight: 200, borderRadius: "2px 0 0 0" }}>
            <Image src="/img/Page 8-2.jpg" alt="玖膚空間" fill className="object-cover object-center" />
          </div>

          {/* Founder story */}
          <div className="flex-1 relative rounded-2xl sm:rounded-none overflow-hidden w-full">
            {/* Background */}
            <div className="absolute inset-0 bg-white/60 sm:bg-white/72 backdrop-blur-xl border border-white/80 sm:border-0 rounded-2xl sm:rounded-none shadow-[0_8px_32px_rgba(0,0,0,0.04)] sm:shadow-[0_12px_28px_rgba(30,24,18,0.06)]" />

            {/* Content */}
            <div className="relative z-10 px-6 py-8 sm:px-8 sm:pt-8 sm:pb-10 flex flex-col gap-6 w-full">
              {/* Quotes decorative mark */}
              <div className="absolute top-4 right-6 text-[5rem] text-[var(--brand-muted)] opacity-20 font-serif leading-none select-none">
                "
              </div>

              {/* Label row */}
              <div className="flex flex-col gap-1.5 relative z-10">
                <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[var(--brand-muted)]">
                  The founder&apos;s story
                </span>
                <h4 className="text-[15px] sm:text-[15px] font-medium tracking-[0.1em] text-[var(--brand-dark)]">
                  創辦人的故事
                </h4>
              </div>

              {/* Story */}
              <div className="space-y-4 relative z-10">
                <p className="text-[13.5px] sm:text-sm lg:text-[16px] font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">
                  小時候的我，是同學眼中的「小黑妹」，因外在曾在學校被取笑。那段經歷讓我深刻感受到自信的重要，也激發我投入保養研究。
                </p>
                <p className="text-[13.5px] sm:text-sm lg:text-[16px] font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">
                  經過努力與學習，我找到了屬於自己的美，也下定決心：把這項專業技術傳承下去，幫助更多人看見自己最美的一面。
                </p>
                <p className="text-[13.5px] sm:text-sm lg:text-[16px] font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">
                  正是曾經的低谷，造就了現在的玖膚。因為這段經歷，我知道如何改變自己，也希望每一位走進玖膚的人，都能看見肌膚的改變、重拾自信，活出最美好的自己。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right: full-height studio photo */}
      <div className="lg:hidden w-full px-6 pb-12 pt-2">
        <div
          className="relative overflow-hidden w-full rounded-[24px] h-[40vh] min-h-[320px] max-h-[480px]"
          style={{ boxShadow: "0 14px 40px rgba(30,24,18,0.08)" }}
        >
          <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" fill className="object-cover object-[center_30%]" />
        </div>
      </div>
      <div className="hidden lg:block relative lg:w-[34%] xl:w-[36%]" style={{ minHeight: 640 }}>
        <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" fill className="object-cover object-center" />
      </div>

    </section>
  );
}

