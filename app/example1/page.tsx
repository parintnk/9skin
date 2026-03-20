"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuChevronUp } from "react-icons/lu";
import { SiLine, SiInstagram } from "react-icons/si";

function PinIcon() {
  return (
    <svg width="11" height="15" viewBox="0 0 14 18" fill="none" className="shrink-0">
      <path
        d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 7 4.5a2.5 2.5 0 0 1 0 5z"
        fill="var(--brand-footer-text)"
      />
    </svg>
  );
}

function Bubble({ text, dark = false, align = "left" }: { text: string; dark?: boolean; align?: "left" | "right" | "center" }) {
  const bgHex = dark ? "#404338" : "#E0DAD0";
  const color = dark ? "var(--brand-footer-text)" : "var(--brand-dark)";

  const tail =
    align === "left" ? (
      <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 20 }}>
        <div style={{ width: 0, height: 0, borderRight: "12px solid transparent", borderTop: `13px solid ${bgHex}` }} />
      </div>
    ) : align === "right" ? (
      <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 20 }}>
        <div style={{ width: 0, height: 0, borderLeft: "12px solid transparent", borderTop: `13px solid ${bgHex}` }} />
      </div>
    ) : (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: `11px solid ${bgHex}` }} />
      </div>
    );

  return (
    <div className="flex flex-col max-w-[88vw] sm:max-w-none">
      <div
        className="rounded-2xl px-6 sm:px-8 py-4 sm:py-5"
        style={{
          backgroundColor: bgHex,
          color,
          boxShadow: dark
            ? "0 6px 28px rgba(30,24,18,0.22), 0 1px 4px rgba(30,24,18,0.1)"
            : "0 2px 16px rgba(30,24,18,0.08)",
        }}
      >
        <p className="text-[15px] sm:text-base lg:text-[17px] font-light" style={{ letterSpacing: "0.04em" }}>
          {text}
        </p>
      </div>
      {tail}
    </div>
  );
}

const kolRow1 = [
  { src: "/img/Page 11 KOL Reviews/Page \u200d11-1-1.png", alt: "KOL review 1" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-2.png", alt: "KOL review 2" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-3.png", alt: "KOL review 3" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-4.png", alt: "KOL review 4" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-1.png", alt: "KOL review 5" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-2.png", alt: "KOL review 6" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-3.png", alt: "KOL review 7" },
];

const kolRow2 = [
  { src: "/img/Page 11 KOL Reviews/Page 11-2-4.png", alt: "KOL review 8" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-1.png", alt: "KOL review 9" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-2.png", alt: "KOL review 10" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-3.png", alt: "KOL review 11" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-4.png", alt: "KOL review 12" },
  { src: "/img/Page 11 KOL Reviews/Page 11-4-1.png", alt: "KOL review 13" },
  { src: "/img/Page 11 KOL Reviews/Page 11-4-2.png", alt: "KOL review 14" },
];

const baReviews = [
  { img: "/img/BAreview/Page 10-1.png", title: "韓式深層保養" },
  { img: "/img/BAreview/Page 10-2.png", title: "再生光" },
  { img: "/img/BAreview/Page 10-3.png", title: "草藥煥膚" },
  { img: "/img/BAreview/Page 10-4.png", title: "玖式微針" },
  { img: "/img/BAreview/Page 10-5.png", title: "韓式深層保養＋再生光" },
  { img: "/img/BAreview/Page 10-6.png", title: "韓式深層保養＋草藥煥膚" },
  { img: "/img/BAreview/Page 10-7.png", title: "無痕水光" },
  { img: "/img/BAreview/Page 10-8.png", title: "童顏外泌體" },
];

const skinCareItems = [
  { num: "01", title: "水飛梭", desc: "深層清潔毛孔，去除老廢角質與髒汙" },
  { num: "02", title: "手工針清", desc: "無痛感手法細膩，針對粉刺與痘痘清除，溫和不傷肌膚" },
  { num: "03", title: "水楊酸煥膚", desc: "促進肌膚更新，調理粉刺，細緻膚質" },
  { num: "04", title: "保濕導入", desc: "舒緩肌膚，加強保濕" },
  { num: "05", title: "調理式面膜", desc: "針對不同肌膚狀態進行深層修護" },
  { num: "06", title: "功能性軟膜", desc: "高包覆調理，協助補水、提升吸收，讓肌膚穩定" },
  { num: "07", title: "PDT照光修護", desc: "減緩泛紅與不穩定感，促進修護" },
];

const concerns = [
  {
    img: "/img/Page 2-1.png",
    title: "痘痘反覆出現",
    subtitle: "Persistent acne",
    desc: "一次又一次治痘，皮膚卻永遠在反覆出狀況。痘痘從來不是單一原因。出油、發炎、細菌、角質代謝肌膚屏障只要一個環節失衡，就很難真正穩定。與其一直「處理痘痘」 不如把皮膚的整體狀態調回健康",
  },
  {
    img: "/img/Page 2-2.png",
    title: "保養品一直買，皮膚卻沒變好",
    subtitle: "Skincare shopping, skin unchanged",
    desc: "明明用的是專櫃、醫美等級保養 肌膚卻怎麼都不透亮？ 不是你保養不夠，是皮膚狀態不對 角質太厚，吸收進不去；角質太薄，水留不住 真正該做的，是先了解肌膚 再把皮膚慢慢養回健康、會發光的狀態",
  },
  {
    img: "/img/Page 2-3.png",
    title: "越認真保養，皮膚卻越敏感",
    subtitle: "More skincare, more sensitive",
    desc: "做臉、煥膚、雷射都嘗試過 皮膚卻越來越紅、越來越薄？ 當肌膚已經不穩定，再一味追求刺激與重建，反而只會讓皮膚更疲憊。真正有效的保養是從肌膚生理出發，選對現在「適合你」的照護方式",
  },
  {
    img: "/img/Page 2-4.png",
    title: "想瘦小臉，卻不想再忍痛",
    subtitle: "Face slimming without the pain",
    desc: "想要緊緻小臉卻對電波、音波的疼痛感卻步？ 瘦臉不一定要忍痛。透過非侵入式的儀器護理，科技加持，安全溫和又看得見效果。從表層到深層喚醒肌膚支撐力，讓肌膚感受更緊緻、改善鬆弛感，最終感受輪廓更立體",
  },
];

const steps = [
  {
    num: "01",
    title: "評估你的肌膚屬性",
    lines: [
      "透過專業檢測與分析找出真正的膚況問題，而非憑感覺保養",
      "我們會同時評估肌膚耐受度、當下的不穩定狀態與已存在的問題點",
      "了解肌膚能承受的程度與修護需求",
      "再為每一位顧客量身規劃最適合的客製化照護方案",
    ],
  },
  {
    num: "02",
    title: "以肌膚調理・養護為前提",
    lines: [
      "不追求立即見效的激進手段而是建立肌膚的健康基礎",
      "從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態",
    ],
  },
  {
    num: "03",
    title: "守護肌膚・讓好狀態常在",
    lines: [
      "肌膚已達理想狀態",
      "我們專注守護，維持最佳膚況，讓亮澤與彈性長久可見",
    ],
  },
];

const lineReviewSrcs = [
  "/img/Page 12_ Customer Review from Line Official /IMG_0054.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_1424.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_1588.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_2692.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_2693.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_3443.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_3870.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_6375.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_7069.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_7154.jpg",
  "/img/Page 12_ Customer Review from Line Official /IMG_7644.jpg",
];

const lineReviewDesktopCards: { src: string; left: string; top: number; width: string }[] = [
  { src: "IMG_0054.jpg", left: "0%", top: 0, width: "27%"},
  { src: "IMG_1424.jpg", left: "24%", top: 50, width: "26%" },
  { src: "IMG_1588.jpg", left: "49%", top: 30, width: "24%"},
  { src: "IMG_2692.jpg", left: "73%", top: -10, width: "26%" },
  { src: "IMG_2693.jpg", left: "-5%", top: 270, width: "27%" },
  { src: "IMG_3443.jpg", left: "22%", top: 295, width: "25%"},
  { src: "IMG_3870.jpg", left: "49%", top: 200, width: "24%" },
  { src: "IMG_6375.jpg", left: "76%", top: 188, width: "25%"},
  { src: "IMG_7069.jpg", left: "-2%", top: 480, width: "26%"},
  { src: "IMG_7154.jpg", left: "22%", top: 425, width: "26%" },
  { src: "IMG_7644.jpg", left: "48%", top: 350, width: "26%"},
  { src: "IMG_8622.jpg", left: "79%", top: 485, width: "25%" },
  { src: "IMG_9222.jpg", left: "-4%", top: 605, width: "27%" },
  { src: "IMG_9264.jpg", left: "25%", top: 625, width: "26%"},
  { src: "IMG_9595.jpg", left: "51%", top: 520, width: "23%" },
  { src: "IMG_9699.jpg", left: "75%", top: 600, width: "24%"},
];

const lineReviewDesktopSrcs = lineReviewDesktopCards.map(c => `/img/Page 12_ Customer Review from Line Official /${c.src}`);

const navSections = [
  { id: "s1", label: "關于我們" },
  { id: "s6", label: "韓式深層保養" },
  { id: "s5", label: "為什麼選擇玖膚" },
  { id: "s7", label: "玖膚水煮蛋肌" },
  { id: "s8", label: "我們的使命" },
  { id: "s10", label: "顧客成效見證" },
  { id: "s11", label: "KOL好評" },
  { id: "s12", label: "LINE顧客好評" },
];

export default function Page() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
      } else {
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setLightboxIndex(i => Math.max(0, i! - 1));
      else if (e.key === "ArrowRight") setLightboxIndex(i => Math.min(lightboxImages.length - 1, i! + 1));
      else if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, lightboxImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = navSections.findIndex(s => s.id === e.target.id);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    navSections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand-dark)" }}>

      {/* ── Scroll progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ height: 3, backgroundColor: "transparent" }}>
        <div
          style={{
            height: "100%",
            width: `${scrollPct}%`,
            background: "linear-gradient(90deg, #C5A882 0%, #A0896E 50%, #7A6652 100%)",
            boxShadow: "0 0 10px rgba(160,137,110,0.6), 0 0 4px rgba(160,137,110,0.4)",
            borderRadius: "0 2px 2px 0",
            transition: "width 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          SECTION 1 — Hero / About
      ══════════════════════════════════════ */}
      <section id="s1" className="sm:min-h-screen flex flex-col">

        {/* ══ MOBILE Hero (full-screen cover) ══ */}
        <div className="lg:hidden relative flex flex-col" style={{ minHeight: "100svh" }}>

          {/* Full-bleed background image */}
          <Image
            src="/img/Page 1.JPG"
            alt="9skin"
            fill
            className="object-cover object-[center_15%]"
            priority
          />

          {/* Gradient overlay — stronger coverage for readability */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.12) 35%, rgba(20,16,12,0.55) 60%, rgba(20,16,12,0.88) 100%)" }}
          />

          {/* Content layer — 3-zone layout */}
          <div className="relative z-10 flex flex-col flex-1 px-7 pt-12 pb-7 justify-between">

            {/* Zone 1 — Logo (top) */}
            <div>
              <Image
                src="/img/9skin logo.png"
                alt="9skin 玖膚"
                width={160}
                height={58}
                className="w-[130px] h-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}
                priority
              />
            </div>

            {/* Zone 2 — Heading (middle) */}
            <div>
              <p className="text-[10px] tracking-[0.32em] uppercase mb-3 font-light" style={{ color: "rgba(232,226,218,0.5)" }}>
                Since 2021 · Taipei · Kaohsiung
              </p>
              <h1 className="text-[2.45rem] font-light leading-snug mb-4" style={{ color: "#F0EBE2", letterSpacing: "0.04em" }}>
                「关于我们」
              </h1>
              <div className="w-10 h-px" style={{ backgroundColor: "rgba(232,226,218,0.35)" }} />
            </div>

            {/* Zone 3 — Body + scroll hint (bottom) */}
            <div>
              <div className="space-y-2 mb-5">
                <p className="text-[14.5px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>養膚，是一件更深、更長遠的事</p>
                <p className="text-[14.5px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>我們像管理資產一樣，陪你管理『顏值』</p>
                <p className="text-[14.5px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>替你規劃專屬保養計畫，成為風格與生活的顏值資產管理顧問</p>
              </div>
              <div className="w-16 h-px mb-5" style={{ backgroundColor: "rgba(232,226,218,0.18)" }} />
              <div className="space-y-2 mb-7">
                <p className="text-[14.5px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.65)", letterSpacing: "0.03em" }}>我們打造溫馨、寬敞且舒適的開放式諮詢空間</p>
                <p className="text-[14.5px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.65)", letterSpacing: "0.03em" }}>以暖色調營造放鬆有溫度的環境</p>
                <p className="text-[14.5px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.65)", letterSpacing: "0.03em" }}>讓每位顧客都能享有專屬的私密與安心感</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-px h-6" style={{ backgroundColor: "rgba(232,226,218,0.28)" }} />
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(232,226,218,0.35)" }}>Scroll</span>
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
                「关于我们」
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(56,50,42,0.3)" }} />
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 lg:gap-10 lg:flex-1 lg:justify-center">
              <div data-reveal data-reveal-delay="3" className="space-y-3">
                <p className="text-base lg:text-[20px] font-light leading-loose">養膚，是一件更深、更長遠的事</p>
                <p className="text-base lg:text-[20px] font-light leading-loose">我們像管理資產一樣，陪你管理『顏值』</p>
                <p className="text-base lg:text-[20px] font-light leading-loose">替你規劃專屬保養計畫，成為風格與生活的顏值資產管理顧問</p>
              </div>
              <div data-reveal data-reveal-delay="4" className="space-y-3">
                <div className="w-20 h-px" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
                <p className="text-base lg:text-[20px] font-light leading-loose">我們打造溫馨、寬敞且舒適的開放式諮詢空間</p>
                <p className="text-base lg:text-[20px] font-light leading-loose">以暖色調營造放鬆有溫度的環境</p>
                <p className="text-base lg:text-[20px] font-light leading-loose">讓每位顧客都能享有專屬的私密與安心感</p>
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

      {/* ══════════════════════════════════════
          SECTION 2 — Skin Concerns
      ══════════════════════════════════════ */}
      <section className="py-8 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-lighter)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-0">

          <div data-reveal className="text-center mb-6 sm:mb-20">
            <p className="text-[11px] lg:text-[13px] tracking-[0.3em] uppercase mb-5 font-light" style={{ color: "var(--brand-gold)" }}>
              Skin Concerns
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-4" style={{ letterSpacing: "0.04em" }}>
              常見的肌膚困擾，你中了幾項？
            </h2>
            <p className="text-sm lg:text-[17px] font-light" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
              How many of these common skin concerns do you struggle with?
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
              <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 sm:gap-y-16">
            {concerns.map((c, i) => (
              <div key={i} data-reveal data-reveal-delay={i + 1} className="flex flex-col gap-5">
                <div className="card-wrap relative w-full overflow-hidden" style={{ aspectRatio: "543/209", borderRadius: "2px" }}>
                  <Image src={c.img} alt={c.title} fill className="card-img object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(20,16,12,0.1) 0%, rgba(20,16,12,0.55) 100%)" }} />
                  <div className="absolute inset-0 flex flex-col justify-end px-6 pb-5">
                    <p className="text-white font-light text-base lg:text-lg leading-snug mb-1" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                    <p className="text-white/60 text-[11px] tracking-widest font-light">{c.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm lg:text-[17px] font-light leading-[1.95]" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16 sm:mt-20">
            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(56,50,42,0.25)", backgroundColor: "rgba(56,50,42,0.04)" }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v12M2.5 9.5l5.5 5 5.5-5" stroke="var(--brand-dark)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="mt-10">
            <div className="rounded-full px-8 sm:px-12 py-4 sm:py-5 text-center" style={{ backgroundColor: "var(--brand-footer)", boxShadow: "0 4px 24px rgba(30,24,18,0.12)" }}>
              <p className="text-sm lg:text-[17px] font-light leading-relaxed" style={{ color: "var(--brand-footer-text)", letterSpacing: "0.05em" }}>
                這些問題看似獨立，實際上都指向同一個核心：肌膚缺乏正確的深層調理與系統化管理
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Skin Problems / Chat Bubbles
      ══════════════════════════════════════ */}
      <section className="py-8 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug" style={{ letterSpacing: "0.03em" }}>
              變美的路上，你也正在經歷這些嗎？
            </h2>
            <span className="text-sm lg:text-[17px] font-light shrink-0" style={{ color: "var(--brand-gold)", letterSpacing: "0.18em" }}>
              Skin Problems
            </span>
          </div>
          <div className="w-full h-px mb-16" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />

          <div className="flex flex-col gap-4 sm:gap-7 mb-6 sm:mb-20">
            {/* Row 1 — center-left */}
            <div data-reveal="left" className="flex justify-start sm:pl-[12%]">
              <Bubble text="保養品越買越多，毛孔卻沒有變細，反而更明顯" align="left" />
            </div>
            {/* Row 2 — mobile */}
            <div data-reveal="right" className="flex justify-end sm:hidden">
              <Bubble dark text="痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定" align="right" />
            </div>
            {/* Row 2 — desktop */}
            <div data-reveal className="hidden sm:flex sm:flex-row sm:items-start sm:justify-between gap-5">
              <Bubble text="一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心" align="left" />
              <Bubble dark text="痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定" align="right" />
            </div>
            {/* Row 2 mobile — light */}
            <div data-reveal="left" className="flex justify-start sm:hidden">
              <Bubble text="一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心" align="left" />
            </div>
            {/* Row 3 — mobile */}
            <div data-reveal="right" className="flex justify-end sm:hidden">
              <Bubble dark text="明明用的是高價保養，肌膚卻還是黯淡、沒精神" align="right" />
            </div>
            <div data-reveal="left" className="flex justify-start sm:hidden">
              <Bubble text="不適合自己的課程與產品，讓皮膚越照顧越敏感" align="left" />
            </div>
            {/* Row 3 — desktop */}
            <div data-reveal className="hidden sm:flex sm:flex-row sm:items-start sm:justify-between gap-5">
              <Bubble dark text="明明用的是高價保養，肌膚卻還是黯淡、沒精神" align="right" />
              <Bubble text="不適合自己的課程與產品，讓皮膚越照顧越敏感" align="left" />
            </div>
          </div>

          <div className="flex items-start gap-4 sm:gap-8">
            <span className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-extralight leading-none shrink-0 select-none mt-2" style={{ color: "var(--brand-dark)", opacity: 0.68 }}>(</span>
            <div className="flex-1 text-center space-y-3 py-4">
              <p className="text-[15px] sm:text-base lg:text-[18px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
                問題的核心不在於你不夠努力，而是缺少對肌膚的正確理解與專業指引
              </p>
              <p className="text-[15px] sm:text-base lg:text-[18px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
                如果你也在想「我只是想要一個穩定、透亮、不再折騰的肌膚，到底該從哪裡開始？」
              </p>
              <p className="text-[15px] sm:text-base lg:text-[18px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
                真正的改變，從了解肌膚狀態、回到皮膚本身的節奏開始！
              </p>
              <p className="text-sm tracking-[0.4em] font-light pt-1" style={{ color: "var(--brand-gold)" }}>· · ·</p>
            </div>
            <span className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-extralight leading-none shrink-0 select-none mt-2" style={{ color: "var(--brand-dark)", opacity: 0.68 }}>)</span>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — Three Keys
      ══════════════════════════════════════ */}
      <section className="flex flex-col" style={{ backgroundColor: "var(--brand-light)" }}>

        {/* Header */}
        <div className="px-8 sm:px-12 lg:px-14 pt-7 sm:pt-16 pb-8 sm:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
            <h2
              data-reveal
              className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug lg:w-[44%] shrink-0 mb-5 lg:mb-0"
              style={{ letterSpacing: "0.03em" }}
            >
              想要彈潤透亮的水煮蛋肌？
            </h2>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-base lg:text-[20px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                我們先為你完整評估肌膚狀況，了解當下真正需要的是什麼
              </p>
              <p className="text-base lg:text-[20px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                想把皮膚慢慢養好，先從這三個關鍵開始：
              </p>
            </div>
          </div>
          <div className="w-full h-px mt-10" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
        </div>

        {/* Split: image left | steps right */}
        <div className="flex flex-col lg:flex-row flex-1">

          {/* Image */}
          <div className="lg:hidden w-full">
            <Image src="/img/Page 4.png" alt="水煮蛋肌" width={564} height={439} className="w-full h-auto" />
          </div>
          <div className="hidden lg:block relative lg:w-[44%] xl:w-[46%]" style={{ minHeight: 520 }}>
            <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover object-center" />
          </div>

          {/* Steps */}
          <div className="flex-1 flex flex-col justify-center gap-10 lg:gap-12 px-8 sm:px-12 lg:px-14 py-12 lg:py-16">
            {steps.map((step, i) => (
              <div key={step.num} data-reveal data-reveal-delay={i + 1}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--brand-footer)" }}
                  >
                    <span className="text-xs font-light tracking-wider" style={{ color: "var(--brand-footer-text)" }}>
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-[1.4rem] font-light" style={{ letterSpacing: "0.04em" }}>
                    {step.title}
                  </h3>
                </div>
                <div className="w-full h-px mb-5" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
                <div className="space-y-2">
                  {step.lines.map((line, i) => (
                    <p key={i} className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — Why Choose 玖膚
      ══════════════════════════════════════ */}
      <section id="s5" className="py-8 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="px-6 sm:px-10 lg:px-14">

          {/* Heading */}
          <div data-reveal className="text-center mb-6 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light mb-3" style={{ letterSpacing: "0.04em" }}>
              為什麼選擇玖膚？
            </h2>
            <p className="text-sm lg:text-[17px] font-light tracking-widest" style={{ color: "var(--brand-gold)" }}>
              Why choose us?
            </p>
          </div>

          {/* ── MOBILE: cards ── */}
          <div className="flex flex-col gap-5 sm:hidden">
            {[
              {
                label: "玖膚皮膚管理",
                dark: true,
                featured: true,
                rows: [
                  { label: "費用", lines: ["價格 $2~3000"] },
                  { label: "時間", lines: ["1～2月一次，平均60~120分/次"] },
                  { label: "特色", lines: ["從專業肌膚檢測開始，深入了解肌膚底層狀況", "依據膚質、耐受度與不同區域問題，搭配專業儀器與手法", "真正做到客製化的皮膚分區管理", "讓每一次做臉都是看得到改變"] },
                  { label: "成效", lines: ["膚質真正被改善", "達到穩定、透亮、有彈性的水煮蛋肌"] },
                ],
              },
              {
                label: "醫美療程",
                dark: false,
                featured: false,
                rows: [
                  { label: "費用", lines: ["價格 $5000以上"] },
                  { label: "時間", lines: ["1～2月一次，平均1hr/次"] },
                  { label: "特色", lines: ["以雷射為主作為治療", "針對敏感肌或需手工針清的痘痘肌，雷射並非最佳首選"] },
                  { label: "成效", lines: ["快速立即見效", "但長期施作肌膚容易敏感及需承擔操作風險"] },
                ],
              },
              {
                label: "傳統美容",
                dark: false,
                featured: false,
                rows: [
                  { label: "費用", lines: ["價格 $2000左右"] },
                  { label: "時間", lines: ["1～2月一次，平均60~120分/次"] },
                  { label: "特色", lines: ["以粉刺清潔與基礎保濕為核心", "流程相對固定，較少結合科技化輔助調整"] },
                  { label: "成效", lines: ["以基礎清潔保濕及舒適放鬆為主", "在皮膚質地層面改善較為有限"] },
                ],
              },
            ].map((col, i) => (
              <div key={col.label} data-reveal data-reveal-delay={i + 1} className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(56,50,42,0.12)" }}>
                {/* Card header */}
                <div
                  className="py-4 px-5 text-center"
                  style={{
                    backgroundColor: col.dark ? "var(--brand-footer)" : "var(--brand-light)",
                    color: col.dark ? "var(--brand-footer-text)" : "var(--brand-dark)",
                  }}
                >
                  <p className="text-base font-light tracking-widest">{col.label}</p>
                </div>
                {/* Card rows */}
                <div className="divide-y" style={{ borderColor: "rgba(56,50,42,0.1)" }}>
                  {col.rows.map((row) => (
                    <div key={row.label} className="px-5 py-4" style={{ backgroundColor: col.featured ? "rgba(74,72,64,0.04)" : "transparent" }}>
                      <p className="text-[11px] tracking-[0.2em] uppercase mb-2 font-light" style={{ color: "var(--brand-gold)" }}>
                        {row.label}
                      </p>
                      {row.lines.map((line, i) => (
                        <p key={i} className="text-sm font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: col.featured ? 0.9 : 0.78 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── DESKTOP: table ── */}
          <div data-reveal className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse" style={{ minWidth: 560 }}>
              <thead>
                <tr>
                  {[
                    { label: "醫美療程", dark: false },
                    { label: "玖膚皮膚管理", dark: true },
                    { label: "傳統美容", dark: false },
                  ].map((col) => (
                    <th
                      key={col.label}
                      className="py-5 px-4 text-center font-light text-base lg:text-lg"
                      style={{
                        backgroundColor: col.dark ? "var(--brand-footer)" : "var(--brand-light)",
                        color: col.dark ? "var(--brand-footer-text)" : "var(--brand-dark)",
                        letterSpacing: "0.08em",
                        border: "1px solid rgba(56,50,42,0.12)",
                        width: "33.33%",
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cells: [
                      ["費用：價格 $5000以上"],
                      ["費用：價格 $2~3000"],
                      ["費用：價格 $2000左右"],
                    ],
                  },
                  {
                    cells: [
                      ["時間：1～2月一次，平均1hr/次"],
                      ["時間：1～2月一次，平均60~120分/次"],
                      ["時間：1～2月一次，平均60~120分/次"],
                    ],
                  },
                  {
                    highlight: true,
                    cells: [
                      ["以雷射為主作為治療", "但是針對需要維護保養的敏感肌", "或是需要專業手工針清的粉刺痘痘肌", "雷射並非最佳首選"],
                      ["從專業肌膚檢測開始，深入了解肌膚底層狀況", "找出真正影響膚況的關鍵", "依據每個人的膚質、肌膚耐受度與不同區域的問題差異", "搭配專業皮膚管理儀器、專業手法與頂級院線保養品", "為肌膚各區量身規劃對應的管理方式", "真正做到客製化的皮膚分區管理", "讓每一次做臉都不是浪費，而是看得到改變"],
                      ["以粉刺清潔與基礎保濕為核心", "流程相對固定", "較少結合科技化輔助調整", "因此在皮膚質地層面的改善較為有限"],
                    ],
                  },
                  {
                    cells: [
                      ["快速立即見效", "但長期施作肌膚容易敏感及需承擔操作風險"],
                      ["透過系統性的皮膚管理不只是短暫好看而是膚質真正被改善", "達到穩定、透亮、有彈性的水煮蛋肌"],
                      ["以基礎清潔保濕", "以及舒適放鬆為主"],
                    ],
                  },
                ].map((row, ri) => (
                  <tr key={ri}>
                    {row.cells.map((lines, ci) => {
                      const isCenter = ci === 1;
                      return (
                        <td
                          key={ci}
                          className="px-5 lg:px-7 py-7 text-center align-middle"
                          style={{
                            border: "1px solid rgba(56,50,42,0.12)",
                            backgroundColor: isCenter ? "rgba(74,72,64,0.05)" : "transparent",
                          }}
                        >
                          {lines.map((line, li) => {
                            const isBold = isCenter && row.highlight && li === 5;
                            return (
                              <p
                                key={li}
                                className="leading-loose"
                                style={{
                                  fontSize: "14px",
                                  letterSpacing: "0.03em",
                                  color: "var(--brand-dark)",
                                  opacity: isCenter ? 0.9 : 0.78,
                                  fontWeight: isBold ? 500 : 300,
                                }}
                              >
                                {line}
                              </p>
                            );
                          })}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — Skin Care Program
      ══════════════════════════════════════ */}
      <section id="s6" className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Image — mobile top, desktop left */}
        <div className="lg:hidden w-full px-5 pt-8 pb-2">
          <div className="overflow-hidden rounded-3xl" style={{ boxShadow: "0 8px 32px rgba(30,24,18,0.13)" }}>
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" width={900} height={1200} className="w-full h-auto" />
          </div>
        </div>
        <div className="hidden lg:block relative lg:w-[38%] xl:w-[40%]" style={{ minHeight: 700 }}>
          <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover object-[center_15%]" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-8 sm:px-12 lg:px-14 py-14 lg:py-16">

          {/* Eyebrow + rule */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
            <p className="text-xs lg:text-[13px] tracking-[0.28em] uppercase font-light shrink-0" style={{ color: "var(--brand-gold)" }}>
              Korean deep skin care
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
          </div>

          {/* Main heading */}
          <h2 data-reveal className="text-[2.8rem] sm:text-[3.4rem] lg:text-[4rem] font-light mb-3" style={{ letterSpacing: "0.08em" }}>
            SKIN CARE
          </h2>

          {/* Subtitle row */}
          <div data-reveal data-reveal-delay="1" className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <span className="text-2xl sm:text-[1.8rem] lg:text-[2.1rem] font-normal" style={{ letterSpacing: "0.04em" }}>
              韓式深層保養
            </span>
            <span className="text-lg lg:text-xl font-light" style={{ color: "rgba(56,50,42,0.35)" }}>·</span>
            <span className="text-base lg:text-[20px] font-light" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>
              不只表面，更深入肌底
            </span>
          </div>

          {/* Thin accent under subtitle */}
          <div className="w-12 h-[2px] mt-5 mb-7" style={{ backgroundColor: "var(--brand-gold)", opacity: 0.5 }} />

          {/* Description */}
          <p className="text-base lg:text-[17px] font-light leading-loose mb-10" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
            我們的客製化皮膚管理課程，適合痘痘肌、敏感肌、酒糟肌以及乾燥肌等各種膚況，透過11個完整步驟，約120分鐘的專屬課程，由美容師一對一進行肌膚檢測與專業諮詢，幫你全面了解自己的肌膚狀態
          </p>

          {/* Divider + sub-heading */}
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg lg:text-[1.3rem] font-light shrink-0" style={{ letterSpacing: "0.06em" }}>
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
                className="flex gap-5 items-start py-4"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(56,50,42,0.1)" }}
              >
                <span
                  className="text-[13px] font-light tracking-wider shrink-0 pt-[3px]"
                  style={{ color: "var(--brand-gold)", minWidth: "2.2rem" }}
                >
                  {item.num}
                </span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <p className="text-base lg:text-[20px] font-normal shrink-0" style={{ letterSpacing: "0.04em" }}>
                    {item.title}
                  </p>
                  <p className="text-sm lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.02em" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer summary */}
          <div className="mt-8 pt-7 space-y-1.5" style={{ borderTop: "1px solid rgba(56,50,42,0.14)" }}>
            <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.86, letterSpacing: "0.03em" }}>
              全程使用頂級院線保養品，確保肌膚得到最完整、最精準的照護
            </p>
            <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.86, letterSpacing: "0.03em" }}>
              每次課程都不只是表面保養而是從根本調理肌膚，幫助肌膚恢復健康、穩定與透亮，真正看得見的效果
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7 — 玖膚水煮蛋肌養成術
      ══════════════════════════════════════ */}
      <section id="s7" className="py-8 sm:py-20 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>

        {/* Header block */}
        <div className="px-8 sm:px-12 lg:px-14 mb-14 lg:mb-18">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgba(56,50,42,0.25)" }} />
            <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase" style={{ color: "var(--brand-gold)" }}>
              Skin Transformation Method
            </p>
          </div>
          <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-tight" style={{ letterSpacing: "0.03em" }}>
              玖膚水煮蛋肌養成術
            </h2>
            <p className="text-sm lg:text-[17px] font-light shrink-0 pb-1" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
              Our 4 Commitments
            </p>
          </div>
        </div>

        {/* Full-width rule */}
        <div className="w-full h-px mb-12 lg:mb-16" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />

        {/* ── Mobile: horizontal card list ── */}
        <div className="sm:hidden px-6 flex flex-col" style={{ borderTop: "1px solid rgba(56,50,42,0.12)" }}>
          {[
            {
              img: "/img/Page 7-1.png",
              alt: "諮詢照顧",
              label: "專屬諮詢",
              icon: <LuClipboardList size={18} />,
              text: "專屬美容師一對一諮詢照顧，為你設計客製化護膚流程",
            },
            {
              img: "/img/Page 7-2.jpg",
              alt: "舒適空間",
              label: "舒適環境",
              icon: <LuLeaf size={18} />,
              text: "溫馨舒適且乾淨的空間，用心服務讓肌膚與心情一起放鬆",
            },
            {
              img: "/img/Page 7-3.png",
              alt: "專業手法",
              label: "專業手法",
              icon: <LuSparkles size={18} />,
              text: "搭配進口院線保養品與專業儀器輔助，透過美容師細膩的手法，讓每一次保養都發揮應有的效果",
            },
            {
              img: "/img/Page 7-4.png",
              alt: "客製流程",
              label: "客製流程",
              icon: <LuFlaskConical size={18} />,
              text: "採用顧問式概念，依不同膚質與護理階段，量身設計分區客製化流程，真正做到每個細節都符合肌膚需求",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-reveal
              data-reveal-delay={i + 1}
              className="flex gap-4 py-5"
              style={{ borderBottom: "1px solid rgba(56,50,42,0.1)" }}
            >
              {/* Thumbnail */}
              <div className="relative shrink-0 overflow-hidden rounded-sm" style={{ width: 92, height: 122 }}>
                <Image src={item.img} alt={item.alt} fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,24,18,0.45) 0%, transparent 55%)" }} />
                <p className="absolute bottom-1.5 left-2 text-white text-[10px] font-light tracking-wider">{item.label}</p>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col gap-2 pt-0.5">
                <span style={{ color: "var(--brand-gold)" }}>{item.icon}</span>
                <p className="text-sm font-light leading-[1.85]" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SM+: 4-column grid ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 px-8 sm:px-12 lg:px-14" style={{ gap: 0 }}>
          {[
            {
              img: "/img/Page 7-1.png",
              alt: "諮詢照顧",
              label: "專屬諮詢",
              icon: <LuClipboardList size={20} />,
              text: "專屬美容師一對一諮詢照顧，為你設計客製化護膚流程",
            },
            {
              img: "/img/Page 7-2.jpg",
              alt: "舒適空間",
              label: "舒適環境",
              icon: <LuLeaf size={20} />,
              text: "溫馨舒適且乾淨的空間，用心服務讓肌膚與心情一起放鬆",
            },
            {
              img: "/img/Page 7-3.png",
              alt: "專業手法",
              label: "專業手法",
              icon: <LuSparkles size={20} />,
              text: "搭配進口院線保養品與專業儀器輔助，透過美容師細膩的手法，讓每一次保養都發揮應有的效果",
            },
            {
              img: "/img/Page 7-4.png",
              alt: "客製流程",
              label: "客製流程",
              icon: <LuFlaskConical size={20} />,
              text: "採用顧問式概念，依不同膚質與護理階段，量身設計分區客製化流程，真正做到每個細節都符合肌膚需求",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-reveal
              data-reveal-delay={i + 1}
              className="flex flex-col"
              style={{ borderLeft: i % 2 === 0 ? "none" : "1px solid rgba(56,50,42,0.12)" }}
            >
              {/* Image */}
              <div className="card-wrap relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.alt} fill className="card-img object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,24,18,0.35) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 pb-4">
                  <p className="text-white text-sm lg:text-base font-light tracking-widest">{item.label}</p>
                </div>
              </div>
              {/* Icon + text */}
              <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-7 pt-6 pb-8">
                <span style={{ color: "var(--brand-gold)" }}>{item.icon}</span>
                <p className="text-sm lg:text-[17px] font-light leading-[1.9]" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px mt-4" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />

      </section>

      {/* ══════════════════════════════════════
          SECTION 8 — Our Mission / Founder
      ══════════════════════════════════════ */}
      <section id="s8" className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Left: content */}
        <div className="flex-1 flex flex-col px-8 sm:px-12 lg:px-14 pt-14 lg:pt-16 pb-0">

          {/* Eyebrow */}
          <p className="text-sm font-light mb-5 italic" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>
            Let you meet the best version of yourself
          </p>

          {/* Main heading */}
          <div data-reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8">
            <span className="text-[1.5rem] lg:text-[1.8rem] font-light tracking-wider" style={{ fontFamily: "Georgia, serif" }}>
              9skin<span className="text-xs lg:text-sm ml-1 tracking-[0.16em]" style={{ color: "var(--brand-gold)" }}>玖膚</span>
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold leading-tight" style={{ letterSpacing: "0.03em" }}>
              讓你遇見最好的自己
            </h2>
          </div>

          {/* Sub-heading */}
          <h3 className="text-xl lg:text-2xl font-bold mb-5" style={{ letterSpacing: "0.04em" }}>
            我們的使命
          </h3>

          {/* Rule */}
          <div className="w-full h-px mb-7" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />

          {/* Body */}
          <div className="space-y-4 mb-10">
            <p data-reveal data-reveal-delay="1" className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.03em" }}>
              9skin成立於2021年，在台北與高雄皆有分店，以改善2000個以上從問題肌膚到健康肌，再邁向變成細緻的光澤肌
            </p>
            <p data-reveal data-reveal-delay="2" className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.03em" }}>
              我們提供8種護膚課程，其中以『韓式深層保養』最受歡迎，許多客人第一次體驗後就成為長期回購的忠實顧客
            </p>
            <p data-reveal data-reveal-delay="3" className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.03em" }}>
              創立玖膚，只為了一個使命：幫助每個人提升顏值、增加價值，讓你遇見最好的自己
            </p>
          </div>

          {/* Salon image + Founder story — side by side */}
          <div data-reveal className="flex flex-col sm:flex-row gap-0 flex-1">

            {/* Salon image */}
            <div className="relative sm:w-[42%] shrink-0 overflow-hidden" style={{ minHeight: 200, borderRadius: "2px 0 0 0" }}>
              <Image src="/img/Page 8-2.jpg" alt="玖膚空間" fill className="object-cover object-center" />
            </div>

            {/* Founder story */}
            <div className="flex-1 px-6 sm:px-8 pt-6 pb-10 sm:pt-8 flex flex-col gap-5" style={{ backgroundColor: "rgba(56,50,42,0.04)" }}>
              {/* Label row */}
              <div className="flex items-center justify-between">
                <span
                  className="px-4 py-1.5 rounded-full text-[13px] font-light tracking-widest"
                  style={{ backgroundColor: "var(--brand-footer)", color: "var(--brand-footer-text)" }}
                >
                  創辦人的故事
                </span>
                <span className="text-xs font-light tracking-[0.16em]" style={{ color: "var(--brand-muted)" }}>
                  The founder&apos;s story
                </span>
              </div>
              {/* Story */}
              <div className="space-y-4">
                <p className="text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  小時候的我，是同學眼中的「小黑妹」，因外在曾在學校被取笑。那段經歷讓我深刻感受到自信的重要，也激發我投入保養研究。
                </p>
                <p className="text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  經過努力與學習，我找到了屬於自己的美，也下定決心：把這項專業技術傳承下去，幫助更多人看見自己最美的一面。
                </p>
                <p className="text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  正是曾經的低谷，造就了現在的玖膚。因為這段經歷，我知道如何改變自己，也希望每一位走進玖膚的人，都能看見肌膚的改變、重拾自信，活出最美好的自己。
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: full-height studio photo */}
        <div className="lg:hidden w-full px-5 pt-2 pb-8">
          <div className="overflow-hidden rounded-3xl" style={{ boxShadow: "0 8px 32px rgba(30,24,18,0.13)" }}>
            <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" width={900} height={1200} className="w-full h-auto" />
          </div>
        </div>
        <div className="hidden lg:block relative lg:w-[34%] xl:w-[36%]" style={{ minHeight: 640 }}>
          <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" fill className="object-cover object-center" />
        </div>

      </section>


      {/* ══════════════════════════════════════
          SECTION 9 — Skin Care Management System
      ══════════════════════════════════════ */}
      <section className="py-8 sm:py-20 lg:py-24 px-8 sm:px-12 lg:px-14" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Eyebrow with lines */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
          <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>
            Skin Care Management System
          </p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
        </div>

        {/* Olive card */}
        <div data-reveal className="rounded-sm px-8 sm:px-10 lg:px-14 py-10 lg:py-12 mb-16 lg:mb-20" style={{ backgroundColor: "#404338" }}>
          <h2 className="text-[1.7rem] sm:text-[2.2rem] lg:text-[2.8rem] font-bold text-center text-white mb-5" style={{ letterSpacing: "0.04em" }}>
            不只是保養・而是肌膚管理系統
          </h2>
          <p className="text-sm lg:text-[17px] font-light text-center leading-loose mb-10 lg:mb-12 max-w-3xl mx-auto" style={{ color: "rgba(230,225,205,0.88)", letterSpacing: "0.03em" }}>
            我們相信，好的肌膚管理，不是一昧塗抹，而是建立肌膚的管理系統，是一個可以走一輩子的保養計畫。我們的每一堂課，都是一份顏值計畫書
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "從膚況分析開始，不憑感覺保養",
                lines: ["透過【數據分析】與經驗判讀", "找出你真正的膚況問題", "專業儀器檢測配合美容師的經驗判讀", "給你最精準的肌膚診斷"],
              },
              {
                title: "客製搭配課程內容",
                lines: ["非制式化流程", "而是每次都為你調整出精準有效的課程", "根據當下膚況靈活調整步驟", "細到我們會分區域管理", "確保每次都獲得最適合的照護"],
              },
              {
                title: "養膚邏輯清晰",
                lines: ["不走極端課程路線", "不追求立即效果而犧牲肌膚健康", "我們重視的是長期穩定的美麗", "而非短暫的表面改善"],
              },
            ].map((col, i) => (
              <div key={i} data-reveal data-reveal-delay={i + 1}>
                <div className="pb-2.5 mb-4" style={{ borderBottom: "1px solid rgba(230,225,205,0.28)" }}>
                  <p className="text-[14px] lg:text-[17px] font-normal text-white" style={{ letterSpacing: "0.04em" }}>
                    {col.title}
                  </p>
                </div>
                <div className="space-y-2">
                  {col.lines.map((line, j) => (
                    <p key={j} className="text-sm font-light leading-relaxed" style={{ color: "rgba(230,225,205,0.78)", letterSpacing: "0.02em" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6" style={{ borderTop: "1px solid rgba(230,225,205,0.16)" }}>
            <p className="text-sm lg:text-[17px] font-light leading-loose" style={{ color: "rgba(230,225,205,0.92)", letterSpacing: "0.03em" }}>
              顏值，不只是皮膚好，而是你狀態穩定的證明。在9skin，我們不追求一次性的表面改變，而是用系統化的皮膚管理，陪你長期經營顏值資產，讓穩定狀態成為你最好的外在名片
            </p>
          </div>
        </div>

        {/* ── Circle diagram ── */}

        {/* Mobile: stacked steps */}
        <div className="lg:hidden flex flex-col gap-8">
          {[
            { label: "STEP 1–2", title: "美容師專業肌膚檢測", desc: "深度分析膚況，了解肌膚耐受度與潛在問題，搭配溫和洗卸，徹底清潔表面贓汙，保護肌膚屏障，不造成刺激" },
            { label: "STEP 3–4", title: "毛孔軟化 → 水飛梭深層清潔", desc: "軟化角質與毛孔，搭配水飛梭去除深層贓污與老廢角質，改善毛孔塞塞，使肌膚呼吸更順暢" },
            { label: "STEP 5–6", title: "專業手工針清 → 韓國醫美級護膚", desc: "溫柔無痛清除粉刺與塞塞毛孔，搭配高濃度營養護理，立即補充肌膚所需，提升水潤與光澤感" },
            { label: "STEP 7–8", title: "冰導舒緩 → 兩道修護面膜", desc: "使用冰導舒緩精華，鎮靜、降低泛紅；接著兩道修護面膜深度保濕、修復肌膚屏障，使肌膚穩定、柔嫩有彈性" },
            { label: "STEP 9–10", title: "PDT照光 → 韓國醫美級護膚 → 完成", desc: "專業光療促進修護，搭配最後一輪醫美級護膚精華加強肌膚吸收與修護。療程結束後，肌膚即刻展現健康光澤，平滑透亮、穩定有彈性" },
          ].map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#404338" }} />
              <div>
                <p className="inline-block text-[11px] tracking-widest font-light mb-1 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>{s.label}</p>
                <p className="text-base font-normal mb-1.5" style={{ letterSpacing: "0.03em" }}>{s.title}</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.86 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: circle layout */}
        <div className="hidden lg:block">

          {/* STEP 1-2: top center */}
          <div className="flex justify-center mb-6">
            <div className="text-center max-w-[260px]">
              <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 1–2</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>美容師專業肌膚檢測</p>
              <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>深度分析膚況，了解肌膚耐受度與潛在問題，搭配溫和洗卸，徹底清潔表面贓汙，保護肌膚屏障，不造成刺激</p>
              <div className="w-2.5 h-2.5 rounded-full mx-auto mt-5" style={{ backgroundColor: "#404338" }} />
            </div>
          </div>

          {/* Middle: STEP 5-6 | circle | STEP 3-4 */}
          <div className="flex items-center gap-10 max-w-5xl mx-auto">
            <div className="flex-1 text-right">
              <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 5–6</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>專業手工針清</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 韓國醫美級護膚</p>
              <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>溫柔無痛清除粉刺與塞塞毛孔，搭配高濃度營養護理，立即補充肌膚所需，提升水潤與光澤感</p>
            </div>

            {/* Circle */}
            <div className="shrink-0 relative" style={{ width: 300, height: 300 }}>
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ border: "1.5px solid rgba(80,80,56,0.4)" }}>
                <div className="text-center px-10">
                  <p className="text-lg font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>韓式完整11步驟</p>
                  <p className="text-lg font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>120分鐘極致呵護</p>
                  <p className="text-[11px] font-light mt-3 tracking-widest" style={{ color: "var(--brand-muted)" }}>120 minutes of ultimate care</p>
                </div>
              </div>
              {/* Dots at step connection points */}
              <div className="absolute w-3 h-3 rounded-full" style={{ top: -6, left: "calc(50% - 6px)", backgroundColor: "#404338" }} />
              <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(50% - 6px)", right: -6, backgroundColor: "#404338" }} />
              <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(50% - 6px)", left: -6, backgroundColor: "#404338" }} />
              <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(79% - 6px)", backgroundColor: "#404338" }} />
              <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(23% - 6px)", backgroundColor: "#404338" }} />
            </div>

            <div className="flex-1">
              <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 3–4</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>毛孔軟化</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 水飛梭深層清潔</p>
              <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>軟化角質與毛孔，搭配水飛梭去除深層贓污與老廢角質，改善毛孔塞塞，使肌膚呼吸更順暢</p>
            </div>
          </div>

          {/* Bottom: STEP 7-8 | spacer | STEP 9-10 */}
          <div className="flex gap-10 max-w-5xl mx-auto mt-6">
            <div className="flex-1 text-right">
              <div className="w-2.5 h-2.5 rounded-full ml-auto mb-5" style={{ backgroundColor: "#404338" }} />
              <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 7–8</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>冰導舒緩</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 兩道修護面膜</p>
              <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>使用冰導舒緩精華，鎮靜、降低泛紅；接著兩道修護面膜深度保濕、修復肌膚屏障，使肌膚穩定、柔嫩有彈性</p>
            </div>
            <div className="shrink-0" style={{ width: 300 }} />
            <div className="flex-1">
              <div className="w-2.5 h-2.5 rounded-full mb-5" style={{ backgroundColor: "#404338" }} />
              <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>STEP 9–10</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>PDT照光 → 完成</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 韓國醫美級護膚</p>
              <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>專業光療促進修護，搭配最後一輪醫美級護膚精華加強肌膚吸收與修護。療程結束後，肌膚即刻展現健康光澤，平滑透亮、穩定有彈性</p>
            </div>
          </div>

        </div>

      </section>


      {/* ══════════════════════════════════════
          SECTION 10 — Before & After Results
      ══════════════════════════════════════ */}
      <section id="s10" className="py-8 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-9xl mx-auto px-6 sm:px-10">

          {/* Eyebrow with lines */}
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
            <p className="text-[11px] lg:text-[13px] font-light tracking-[0.28em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>
              Before &amp; After
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
          </div>

          {/* Heading */}
          <div data-reveal="fade" className="text-center mb-6 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-4" style={{ letterSpacing: "0.04em" }}>
              顧客真實成效見證
            </h2>
            <p className="text-sm lg:text-[17px] font-light" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.05em" }}>
              每一張照片，都是一段蛻變的故事
            </p>
          </div>

          {/* Grid — 2 cols mobile / 4 cols tablet / 5 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {baReviews.map((item, i) => (
              <div
                key={i}
                data-reveal="fade"
                data-reveal-delay={Math.min(i + 1, 5)}
                className="card-wrap flex flex-col group cursor-zoom-in"
                onClick={() => { setLightboxImages(baReviews.map(r => r.img)); setLightboxIndex(i); }}
              >
                <div
                  className="overflow-hidden rounded-sm"
                  style={{ aspectRatio: "1 / 1", backgroundColor: "#F0EBE0", padding: "3px" }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="card-img w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-14 sm:mt-16 flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
            <p className="md:text-[18px] text-xs font-light tracking-[0.15em] shrink-0" style={{ color: "var(--brand-dark)", opacity: 0.62 }}>
              以上均為顧客真實案例，效果因個人膚況而異
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════
          BOOK NOW CTA
      ══════════════════════════════════════ */}
      <section className="py-8 sm:py-20" style={{ backgroundColor: "var(--brand-footer)" }}>
        <div className="flex flex-col items-center gap-6 px-6 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase font-light" style={{ color: "var(--brand-footer-text)", opacity: 0.6 }}>
            開始你的肌膚之旅
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug" style={{ color: "var(--brand-footer-text)", letterSpacing: "0.04em" }}>
            立即預約，讓肌膚遇見改變
          </h2>
          <p className="text-[15px] lg:text-[17px] font-light max-w-md leading-loose" style={{ color: "rgba(197,186,176,0.8)", letterSpacing: "0.03em" }}>
            專屬美容師為你量身規劃，打造屬於你的水煮蛋肌
          </p>
          <a
            href="https://line.me/R/ti/p/@9skin"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-3 px-8 py-4 rounded-full font-light text-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#06C755", color: "white", letterSpacing: "0.12em" }}
          >
            <SiLine size={20} />
            LINE 立即預約 · Book Now
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 11 — KOL Reviews
      ══════════════════════════════════════ */}
      <section id="s11" className="py-8 sm:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-6 sm:mb-20">

          {/* Big heading */}
          <div data-reveal className="text-center mb-6 sm:mb-20">
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
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left: 2 phone cards */}
            <div className="flex gap-3 sm:gap-6 shrink-0">
              {[kolRow2[5], kolRow2[6]].map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl shadow-md cursor-zoom-in"
                  onClick={() => { setLightboxImages(kolRow2.map(r => r.src)); setLightboxIndex(5 + i); }}
                  style={{
                    width: "clamp(120px, 38vw, 160px)",
                    height: "clamp(212px, 67vw, 284px)",
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
            <div data-reveal data-reveal-delay="1" className="flex-1 text-center lg:text-left">
              <p className="text-base tracking-[0.4em] mb-5" style={{ color: "var(--brand-muted)", letterSpacing: "0.3em" }}>
                · · · · · · ·
              </p>
              <h3
                className="text-xl sm:text-2xl lg:text-[1.7rem] font-light mb-4"
                style={{ letterSpacing: "0.05em" }}
              >
                KOL與顧客一致好評
              </h3>
              <div className="w-12 h-px mb-6 mx-auto lg:mx-0" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
              <div className="space-y-4 mb-8">
                <p className="text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  許多美容部落客與KOL體驗後都給予高度評價，不只是因為立即的效果，更重視的是玖膚對肌膚健康的長期關注
                </p>
                <p className="text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
                  超過5000位顧客的信任，來自於我們對每一位客人的用心照護。每一則好評都是我們持續進步的動力
                </p>
              </div>
              <p className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: "var(--brand-muted)" }}>
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
                onClick={() => { setLightboxImages(kolRow1.map(r => r.src)); setLightboxIndex(i % kolRow1.length); }}
              >
                <Image src={img.src} alt={img.alt} width={236} height={420} className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
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
                onClick={() => { setLightboxImages(kolRow2.map(r => r.src)); setLightboxIndex(i % kolRow2.length); }}
              >
                <Image src={img.src} alt={img.alt} width={236} height={420} className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ── S12 · LINE Customer Reviews ── */}
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
              onClick={() => { setLightboxImages(lineReviewSrcs); setLightboxIndex(i); }}
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
                onClick={() => { setLightboxImages(lineReviewDesktopSrcs); setLightboxIndex(i); }}
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

      {/* ── S13 · Environmental Introduction ── */}
      <section style={{ backgroundColor: "var(--brand-cream)" }}>

        {/* Mobile layout */}
        <div className="sm:hidden px-5 py-12">
          <div className="text-center mb-7" data-reveal="fade">
            <h2 className="text-3xl font-medium" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>環境介紹</h2>
            <p className="mt-2 text-sm italic" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em", fontFamily: "serif" }}>Environmental Introduction</p>
          </div>
          {/* Top: 2 equal photos */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
              <Image src="/img/Page 12-1.jpg" alt="歡迎茶飲" width={400} height={533}
                className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
              <Image src="/img/Page 12-2.jpg" alt="護膚床" width={400} height={533}
                className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Bottom: narrow + wide */}
          <div className="grid gap-2" style={{ gridTemplateColumns: "2fr 3fr", height: 240 }}>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/img/Page 12-3.jpg" alt="肌膚檢測儀器" width={300} height={450}
                className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/img/Page 12-4.jpg" alt="舒適候診空間" width={500} height={450}
                className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div
          className="hidden sm:grid"
          data-reveal="fade"
          style={{
            gridTemplateColumns: "3fr 3fr 4fr",
            gridTemplateRows: "1fr 1fr",
            gridTemplateAreas: `"text tea  bed" "mach lounge lounge"`,
            height: "100vh",
            gap: 2,
          }}
        >
          {/* Text panel */}
          <div
            className="flex flex-col justify-center px-10 lg:px-12"
            style={{ gridArea: "text", backgroundColor: "var(--brand-cream)" }}
          >
            <h2 className="text-3xl lg:text-6xl font-medium" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>
              環境介紹
            </h2>
            <p className="mt-3 text-sm md:text-2xl italic" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em", fontFamily: "serif" }}>
              Environmental Introduction
            </p>
          </div>

          {/* Tea photo */}
          <div className="overflow-hidden" style={{ gridArea: "tea" }}>
            <Image src="/img/Page 12-1.jpg" alt="歡迎茶飲" width={640} height={640}
              className="w-full h-full object-cover" />
          </div>

          {/* Treatment bed photo */}
          <div className="overflow-hidden" style={{ gridArea: "bed" }}>
            <Image src="/img/Page 12-2.jpg" alt="護膚床" width={800} height={640}
              className="w-full h-full object-cover" />
          </div>

          {/* Skin analysis machine */}
          <div className="overflow-hidden" style={{ gridArea: "mach" }}>
            <Image src="/img/Page 12-3.jpg" alt="肌膚檢測儀器" width={480} height={640}
              className="w-full h-full object-cover object-bottom" />
          </div>

          {/* Lounge */}
          <div className="overflow-hidden" style={{ gridArea: "lounge" }}>
            <Image src="/img/Page 12-4.jpg" alt="舒適候診空間" width={1200} height={640}
              className="w-full h-full object-cover object-center" />
          </div>
        </div>

      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(10,8,6,0.82)", cursor: "zoom-out" }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImages[lightboxIndex]}
            alt=""
            style={{ width: "70vw", height: "70vh", objectFit: "contain", cursor: "default" }}
            onClick={e => e.stopPropagation()}
          />
          {/* Close */}
          <button
            className="absolute top-4 right-5 text-white/60 hover:text-white text-5xl font-extralight leading-none"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            onClick={() => setLightboxIndex(null)}
          >
            ×
          </button>
          {/* Desktop side arrows */}
          {lightboxIndex > 0 && (
            <button
              className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl font-extralight leading-none"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              onClick={e => { e.stopPropagation(); setLightboxIndex(i => Math.max(0, i! - 1)); }}
            >
              ‹
            </button>
          )}
          {lightboxIndex < lightboxImages.length - 1 && (
            <button
              className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl font-extralight leading-none"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              onClick={e => { e.stopPropagation(); setLightboxIndex(i => Math.min(lightboxImages.length - 1, i! + 1)); }}
            >
              ›
            </button>
          )}
          {/* Desktop counter */}
          <span className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-light tracking-widest">
            {lightboxIndex + 1} / {lightboxImages.length}
          </span>
          {/* Mobile bottom nav */}
          <div
            className="sm:hidden absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4"
            style={{ backgroundColor: "rgba(10,8,6,0.6)" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="w-12 h-12 flex items-center justify-center text-3xl font-extralight rounded-full transition-opacity"
              style={{ color: "white", opacity: lightboxIndex === 0 ? 0.2 : 0.8 }}
              disabled={lightboxIndex === 0}
              onClick={() => setLightboxIndex(i => Math.max(0, i! - 1))}
            >
              ‹
            </button>
            <span className="text-white/50 text-sm font-light tracking-widest">
              {lightboxIndex + 1} / {lightboxImages.length}
            </span>
            <button
              className="w-12 h-12 flex items-center justify-center text-3xl font-extralight rounded-full transition-opacity"
              style={{ color: "white", opacity: lightboxIndex === lightboxImages.length - 1 ? 0.2 : 0.8 }}
              disabled={lightboxIndex === lightboxImages.length - 1}
              onClick={() => setLightboxIndex(i => Math.min(lightboxImages.length - 1, i! + 1))}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "var(--brand-footer)" }}>

        {/* ── Hero brand statement ── */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
          <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "var(--brand-footer-text)", opacity: 0.45 }}>
            Since 2021 · Taipei · Kaohsiung
          </p>
          <h2
            className="text-5xl sm:text-7xl lg:text-8xl font-extralight"
            style={{ color: "#E8E2DA", letterSpacing: "0.12em", lineHeight: 1.1 }}
          >
            玖膚工作室
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light italic tracking-widest" style={{ color: "var(--brand-footer-text)", opacity: 0.55, fontFamily: "serif" }}>
            幫助每個人提升顏值 · 增加價值 · 讓你遇見最好的自己
          </p>
        </div>

        {/* ── Thin divider ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* ── 3-col info grid ── */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">

          {/* Taipei */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: "#E8E2DA", opacity: 0.4 }}>
              台北店 · Taipei
            </p>
            <ul className="space-y-2.5 text-sm font-light" style={{ color: "var(--brand-footer-text)", opacity: 0.75, lineHeight: 1.7 }}>
              <li>松江南京站步行 3 分鐘</li>
              <li>週一至週日 10:00 – 20:00</li>
            </ul>
          </div>

          {/* Kaohsiung */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: "#E8E2DA", opacity: 0.4 }}>
              高雄店 · Kaohsiung
            </p>
            <ul className="space-y-2.5 text-sm font-light" style={{ color: "var(--brand-footer-text)", opacity: 0.75, lineHeight: 1.7 }}>
              <li>巨蛋站步行 6 分鐘</li>
              <li>週一至週日 10:00 – 20:00</li>
            </ul>
          </div>

          {/* Book Now */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#E8E2DA", opacity: 0.4 }}>
              立即預約 · Book Now
            </p>
            <a
              href="https://line.me/R/ti/p/@9skin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 self-start px-6 py-3 text-sm font-light tracking-wider transition-all hover:opacity-80"
              style={{
                border: "1px solid rgba(232,226,218,0.35)",
                color: "#E8E2DA",
                letterSpacing: "0.12em",
              }}
            >
              <SiLine size={14} />
              LINE 預約
            </a>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://line.me/R/ti/p/@9skin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--brand-footer-text)", opacity: 0.55 }}
              >
                <SiLine size={18} />
              </a>
              <a
                href="https://www.instagram.com/9skin_999/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--brand-footer-text)", opacity: 0.55 }}
              >
                <SiInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.07)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] tracking-wider" style={{ color: "var(--brand-footer-text)", opacity: 0.35 }}>
            © {new Date().getFullYear()} 玖膚工作室 9skin Studio. All rights reserved.
          </span>
          <span className="text-[11px] tracking-[0.2em]" style={{ color: "var(--brand-footer-text)", opacity: 0.3 }}>
            台北 · 高雄
          </span>
        </div>

      </footer>

      {/* ── Section nav dots ── */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {navSections.map((s, i) => (
          <button
            key={i}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center justify-end"
            aria-label={s.label}
          >
            <span
              className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap px-2 py-1 rounded"
              style={{ backgroundColor: "var(--brand-footer)", color: "#E8E2DA" }}
            >
              {s.label}
            </span>
            <span
              className="block rounded-full transition-all"
              style={{
                width: activeSection === i ? 8 : 6,
                height: activeSection === i ? 8 : 6,
                backgroundColor: activeSection === i ? "var(--brand-dark)" : "transparent",
                border: `1.5px solid ${activeSection === i ? "var(--brand-dark)" : "rgba(56,50,42,0.35)"}`,
              }}
            />
          </button>
        ))}
      </nav>

      {/* ── Floating LINE button ── */}
      <a
        href="https://line.me/R/ti/p/@9skin"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105"
        style={{ backgroundColor: "#06C755", boxShadow: "0 6px 24px rgba(6,199,85,0.4)" }}
        aria-label="LINE 預約"
      >
        <SiLine size={28} color="white" />
      </a>

      {/* ── Back to top ── */}
      {scrollPct > 8 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
          style={{ backgroundColor: "var(--brand-footer)", opacity: 0.85 }}
          aria-label="Back to top"
        >
          <LuChevronUp size={18} color="#E8E2DA" />
        </button>
      )}

    </div>
  );
}
