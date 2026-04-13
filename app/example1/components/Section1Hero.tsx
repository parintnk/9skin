"use client";

import Image from "next/image";
import PinIcon from "./PinIcon";

export default function Section1Hero() {
  return (
    <section id="s1" className="sm:min-h-screen flex flex-col">

      {/* ══ MOBILE Hero (full-screen cover) ══ */}
      <div className="lg:hidden relative flex flex-col" style={{ minHeight: "100svh" }}>

        {/* Full-bleed background image */}
        <Image
          src="/img/Page 1.JPG"
          alt="9skin"
          fill
          className="object-cover object-[center_15%] pb-12"
          priority
        />

        {/* Gradient overlay — stronger coverage for readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.12) 25%, rgba(20,16,12,0.55) 100%, rgba(20,16,12,0.88) 100%)" }}
        />

        {/* Content layer — 3-zone layout */}
        <div className="relative z-10 flex flex-col flex-1 px-7 pt-12 pb-5">

          {/* Zone 1 — Logo (top) */}
          <div className="flex items-center justify-center mt-[80px]">
            <Image
              src="/img/9skin logo.png"
              alt="9skin 玖膚"
              width={160}
              height={58}
              className="w-[200px] h-auto object-cover"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.90 }}
              priority
            />
          </div>

          {/* Zone 2 — Heading (middle) */}
          <div className="mt-5 ">
            {/* <p className="text-[10px] tracking-[0.32em] uppercase mb-3 font-light" style={{ color: "rgba(232,226,218,0.5)" }}>
              Since 2021 · Taipei · Kaohsiung
            </p> */}
            <h1 className="text-[2.25rem] font-medium text-center leading-snug mb-10" style={{ color: "#F0EBE2", letterSpacing: "0.04em" }}>
              「關於玖膚」
            </h1>
          </div>

          {/* Zone 3 — Body + scroll hint (bottom) */}
          <div className="mt-auto flex items-center justify-center">
            <div className="">
              <p className="text-[12px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>養膚,是一件深遠的事,我們陪你管理「顏值」</p>
              <p className="text-[12px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>規劃專屬保養計畫,成為你的顏值資產顧問</p>
              <p className="text-[12px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>在這裡,你可以慢下來,被傾聽、被理解</p>
              <p className="text-[12px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>溫潤空間與細緻服務,讓肌膚與心一起放鬆</p>
            </div>
          </div>
        </div>

        {/* Location bar — pinned at bottom */}
        <div className="relative z-10 flex items-center gap-0" style={{ backgroundColor: "var(--brand-footer)" }}>
          <div className="flex-1 flex items-center gap-2.5 px-5 py-4">
            <PinIcon />
            <span className="text-xs font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>台北・松江南京</span>
          </div>
          <div className="w-px h-4" style={{ backgroundColor: "rgba(197,186,176,0.2)" }} />
          <div className="flex-1 flex items-center gap-2.5 px-5 py-4">
            <PinIcon />
            <span className="text-xs font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>高雄・巨蛋站</span>
          </div>
        </div>
      </div>

      {/* ══ DESKTOP layout (unchanged) ══ */}
      <main className="hidden lg:flex flex-1 flex-row">

        {/* Left */}
        <div className="flex flex-col px-6 sm:px-12 lg:px-14 pt-5 pb-5 sm:pt-8 sm:pb-10 lg:pt-14 lg:pb-14 flex-1">

          {/* Logo */}
          <div className="mb-4 lg:mb-20">
            <Image src="/img/9skin logo.png" alt="9skin 玖膚" width={220} height={80} className="w-[160px] lg:w-[200px] h-auto" style={{ mixBlendMode: "multiply", filter: "brightness(0.40)" }} />
          </div>

          {/* Heading block */}
          <div className="mb-5 sm:mb-12">
            <h1 data-reveal data-reveal-delay="2" className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-light leading-tight mb-8" style={{ letterSpacing: "0.04em" }}>
              「關於玖膚」
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(56,50,42,0.3)" }} />
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4 lg:gap-10 lg:flex-1 lg:justify-center">
            <div data-reveal data-reveal-delay="3" className="space-y-3">
              <p className="text-base lg:text-[20px] font-light leading-loose">養膚,是一件深遠的事,我們陪你管理「顏值」</p>
              <p className="text-base lg:text-[20px] font-light leading-loose">規劃專屬保養計畫,成為你的顏值資產顧問</p>
              <p className="text-base lg:text-[20px] font-light leading-loose">在這裡,你可以慢下來,被傾聽、被理解</p>
            </div>
            <div data-reveal data-reveal-delay="4" className="space-y-3">
              <div className="w-20 h-px" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
              <p className="text-base lg:text-[20px] font-light leading-loose">溫潤空間與細緻服務,讓肌膚與心一起放鬆</p>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="hidden lg:block relative lg:w-[32%] xl:w-[34%]">
          <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_15%]" priority />
        </div>
      </main>

      {/* Desktop footer */}
      <footer className="hidden lg:block py-5 px-8 sm:px-12" style={{ backgroundColor: "var(--brand-footer)" }}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-20">
          <div className="flex items-center gap-3">
            <PinIcon />
            <span className="text-sm lg:text-[17px] font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
              台北店：位於松江南京站步行3分鐘
            </span>
          </div>
          <div className="w-px h-4" style={{ backgroundColor: "rgba(197,186,176,0.2)" }} />
          <div className="flex items-center gap-3">
            <PinIcon />
            <span className="text-sm lg:text-[17px] font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
              高雄店：位於巨蛋站步行6分鐘
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
