"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin, LuArrowRight } from "react-icons/lu";

/* ─── Design tokens — Japanese Minimal / Aesop ─────────────────── */
const C = {
  bg:      "#FAFAF8",
  white:   "#FFFFFF",
  dark:    "#1A1A18",
  text:    "#2A2A27",
  muted:   "#888882",
  subtle:  "#BDBDB8",
  forest:  "#3A5A4A",
  fLight:  "rgba(58,90,74,0.08)",
  fBorder: "rgba(58,90,74,0.2)",
  border:  "rgba(26,26,24,0.1)",
  borderLt:"rgba(26,26,24,0.05)",
};

const concerns = [
  { img: "/img/Page 2-1.png", no: "01", title: "痘痘反覆出現",       en: "Persistent acne that won't resolve" },
  { img: "/img/Page 2-2.png", no: "02", title: "保養品買再多也沒用",  en: "Products that don't seem to work" },
  { img: "/img/Page 2-3.png", no: "03", title: "越保養越敏感",        en: "Sensitivity that worsens with care" },
  { img: "/img/Page 2-4.png", no: "04", title: "想瘦小臉、不想忍痛", en: "Contouring without discomfort" },
];

const steps = [
  { num: "I",   title: "評估", sub: "Assess", desc: "透過專業檢測與分析，同時評估肌膚耐受度與當下狀態，再量身規劃最適合的客製化照護方案。" },
  { num: "II",  title: "調理", sub: "Nurture", desc: "不追求激進手段，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。" },
  { num: "III", title: "守護", sub: "Protect", desc: "肌膚達到理想狀態後，我們專注守護，讓亮澤與彈性長久可見。" },
];

const skinCareItems = [
  { num: "01", title: "水飛梭",      desc: "深層清潔毛孔，去除老廢角質與髒汙" },
  { num: "02", title: "手工針清",    desc: "無痛感手法細膩，溫和不傷肌膚" },
  { num: "03", title: "水楊酸煥膚",  desc: "促進肌膚更新，調理粉刺，細緻膚質" },
  { num: "04", title: "保濕導入",    desc: "舒緩肌膚，加強保濕" },
  { num: "05", title: "調理式面膜",  desc: "針對不同肌膚狀態進行深層修護" },
  { num: "06", title: "功能性軟膜",  desc: "高包覆調理，協助補水、提升吸收" },
  { num: "07", title: "PDT照光修護", desc: "減緩泛紅與不穩定感，促進修護" },
];

const commitments = [
  { icon: <LuClipboardList size={22} />, title: "專業肌膚檢測", desc: "每次療程前完整評估膚況，確保護理方向精準有效，而非靠直覺判斷。" },
  { icon: <LuLeaf size={22} />,          title: "溫和成分配方", desc: "精選安全有效成分，減低刺激，適合各種膚質，包含敏感肌使用。" },
  { icon: <LuSparkles size={22} />,      title: "客製化方案",   desc: "依照個人膚質與需求量身打造，沒有千篇一律的護理流程。" },
  { icon: <LuFlaskConical size={22} />,  title: "科技儀器輔助", desc: "結合先進醫美儀器與手技，效果加乘且安全可靠，可視性高。" },
];

const baReviews = [
  { img: "/img/BAreview/Page 10-1.png",  title: "韓式深層保養" },
  { img: "/img/BAreview/Page 10-2.png",  title: "再生光" },
  { img: "/img/BAreview/Page 10-3.png",  title: "草藥煥膚" },
  { img: "/img/BAreview/Page 10-4.png",  title: "玖式微針" },
  { img: "/img/BAreview/Page 10-5.png",  title: "韓式+再生光" },
  { img: "/img/BAreview/Page 10-6.png",  title: "韓式+草藥煥膚" },
  { img: "/img/BAreview/Page 10-7.png",  title: "無痕水光" },
  { img: "/img/BAreview/Page 10-8.png",  title: "童顏外泌體" },
  { img: "/img/BAreview/Page 10-9.png",  title: "脂肪神器" },
  { img: "/img/BAreview/Page 10-10.png", title: "緊緻神槍" },
];

const kolRow1 = [
  { src: "/img/Page 11 KOL Reviews/Page ‍11-1-1.png", alt: "KOL 1" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-2.png",  alt: "KOL 2" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-3.png",  alt: "KOL 3" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-4.png",  alt: "KOL 4" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-1.png",  alt: "KOL 5" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-2.png",  alt: "KOL 6" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-3.png",  alt: "KOL 7" },
];

const kolRow2 = [
  { src: "/img/Page 11 KOL Reviews/Page 11-2-4.png",  alt: "KOL 8" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-1.png",  alt: "KOL 9" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-2.png",  alt: "KOL 10" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-3.png",  alt: "KOL 11" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-4.png",  alt: "KOL 12" },
  { src: "/img/Page 11 KOL Reviews/Page 11-4-1.png",  alt: "KOL 13" },
  { src: "/img/Page 11 KOL Reviews/Page 11-4-2.png",  alt: "KOL 14" },
];

export default function Page() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: "var(--font-noto-serif-tc), Noto Serif TC, Georgia, serif" }}>

      {/* ══ SECTION 1 — Minimal Hero ══ */}
      <section style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}` }}>

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 sm:px-14 lg:px-20 py-6" style={{ borderBottom: `1px solid ${C.border}` }}>
          <Image src="/img/9skin logo.png" alt="9skin" width={120} height={44} className="h-8 w-auto object-contain"
            style={{ filter: "brightness(0) opacity(0.75)" }} />
          <div className="hidden sm:flex items-center gap-8">
            {["服務項目", "療程說明", "成效見證", "預約"].map(item => (
              <span key={item} className="text-xs font-light cursor-pointer hover:opacity-50 transition-opacity" style={{ color: C.muted, letterSpacing: "0.12em" }}>{item}</span>
            ))}
          </div>
        </div>

        {/* Hero body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">

          {/* Left — full text content */}
          <div className="lg:col-span-7 flex flex-col justify-between px-8 sm:px-14 lg:px-20 pt-14 pb-12 lg:py-16" style={{ borderRight: `1px solid ${C.border}` }}>
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase font-light mb-10" style={{ color: C.subtle }}>
                Skin Management Clinic — 玖膚
              </p>
              <h1 className="font-light leading-[1.1] mb-10"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", letterSpacing: "-0.01em", color: C.dark }}>
                養膚，<br />是一件更深、<br />更長遠的事
              </h1>
              <div className="flex items-start gap-6 max-w-lg">
                <div className="w-px h-14 shrink-0 mt-1" style={{ backgroundColor: C.forest }} />
                <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>
                  我們像管理資產一樣，陪你管理「顏值」，替你規劃專屬保養計畫，成為你風格與生活的顏值資產管理顧問。
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-6 mb-8" style={{ borderTop: `1px solid ${C.border}`, paddingTop: "2rem" }}>
                {[{ n: "500+", l: "滿意顧客" }, { n: "2", l: "門市據點" }, { n: "7", l: "護理步驟" }].map(s => (
                  <div key={s.l} className="text-center" style={{ paddingRight: "1.5rem", borderRight: `1px solid ${C.borderLt}` }}>
                    <p className="text-2xl font-light mb-0.5" style={{ color: C.forest }}>{s.n}</p>
                    <p className="text-[10px] font-light tracking-widest uppercase" style={{ color: C.subtle }}>{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 text-xs font-light tracking-[0.12em] rounded-none border transition-colors hover:bg-gray-50"
                  style={{ borderColor: C.dark, color: C.dark }}>
                  立即諮詢 <LuArrowRight size={12} />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 text-xs font-light tracking-[0.12em] transition-colors hover:opacity-60"
                  style={{ color: C.muted }}>
                  了解更多
                </button>
              </div>
            </div>
          </div>

          {/* Right — image with location tag */}
          <div className="lg:col-span-5 relative min-h-[50vw] lg:min-h-0">
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_10%]" priority />
            {/* Overlay caption */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ backgroundColor: "rgba(250,250,248,0.92)", backdropFilter: "blur(4px)", borderTop: `1px solid ${C.border}` }}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                {["台北 · 松江南京站步行 3 分鐘", "高雄 · 巨蛋站步行 6 分鐘"].map(loc => (
                  <div key={loc} className="flex items-center gap-2">
                    <LuMapPin size={10} color={C.forest} />
                    <span className="text-[11px] font-light" style={{ color: C.muted, letterSpacing: "0.06em" }}>{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — Concerns: Clean List with images ══ */}
      <section style={{ backgroundColor: C.bg }}>
        <div className="px-8 sm:px-14 lg:px-20 pt-14 pb-6 flex items-center justify-between" style={{ borderBottom: `1px solid ${C.border}` }}>
          <h2 className="text-xs font-light tracking-[0.4em] uppercase" style={{ color: C.subtle }}>Skin Concerns · 肌膚困擾</h2>
          <p className="text-xs font-light" style={{ color: C.subtle }}>常見的肌膚困擾，你中了幾項？</p>
        </div>

        <div className="divide-y" style={{ borderColor: C.border }}>
          {concerns.map((c, i) => (
            <div key={c.no} className="grid grid-cols-12 group cursor-default hover:bg-white/60 transition-colors" style={{ minHeight: 120 }}>
              {/* Number */}
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center px-4 py-6" style={{ borderRight: `1px solid ${C.border}` }}>
                <span className="text-xs font-light" style={{ color: C.subtle, letterSpacing: "0.15em" }}>{c.no}</span>
              </div>
              {/* Title */}
              <div className="col-span-7 sm:col-span-8 lg:col-span-6 flex flex-col justify-center px-6 sm:px-10 py-6">
                <p className="text-base sm:text-lg font-light mb-1.5" style={{ letterSpacing: "0.03em" }}>{c.title}</p>
                <p className="text-xs font-light" style={{ color: C.subtle, letterSpacing: "0.1em" }}>{c.en}</p>
              </div>
              {/* Image — right side, hidden on small */}
              <div className="col-span-3 sm:col-span-3 lg:col-span-5 hidden sm:block relative overflow-hidden">
                <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(250,250,248,0.6) 0%, transparent 30%)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="px-8 sm:px-14 lg:px-20 py-8 flex items-start gap-6">
          <div className="w-px h-10 shrink-0 mt-1" style={{ backgroundColor: C.forest }} />
          <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>
            這些問題看似獨立，實際上都指向同一個核心：<em className="not-italic" style={{ color: C.text }}>肌膚缺乏正確的深層調理與系統化管理</em>
          </p>
        </div>
      </section>

      {/* ══ SECTION 3 — Problems: Centered typographic ══ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.white, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-3xl mx-auto px-8 sm:px-14">
          <p className="text-[10px] tracking-[0.5em] uppercase font-light mb-12 text-center" style={{ color: C.subtle }}>
            Common Concerns · 你也正在經歷這些嗎
          </p>

          <div className="space-y-8">
            {[
              "保養品越買越多，毛孔卻沒有變細，反而更明顯",
              "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心",
              "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定",
              "明明用的是高價保養，肌膚卻還是黯淡、沒精神",
              "不適合自己的課程與產品，讓皮膚越照顧越敏感",
            ].map((text, i) => (
              <p key={i} className={`font-light leading-relaxed text-center transition-opacity ${i % 2 === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}
                style={{ color: i % 2 === 0 ? C.text : C.muted, letterSpacing: "0.04em", opacity: 1 - i * 0.08 }}>
                「{text}」
              </p>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-block w-px h-10 mb-8" style={{ backgroundColor: C.border }} />
            <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>
              問題的核心不在於你不夠努力，<br />而是缺少對肌膚的正確理解與
              <em className="not-italic" style={{ color: C.forest }}> 專業指引</em>
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — Three Steps: Roman numeral grid ══ */}
      <section style={{ backgroundColor: C.bg }}>
        <div className="px-8 sm:px-14 lg:px-20 pt-14 pb-6" style={{ borderBottom: `1px solid ${C.border}` }}>
          <h2 className="text-xs font-light tracking-[0.4em] uppercase" style={{ color: C.subtle }}>Our Method · 三大關鍵</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x" style={{ borderBottom: `1px solid ${C.border}`, borderColor: C.border }}>
          {steps.map((step, i) => (
            <div key={step.num} className="px-8 sm:px-12 lg:px-14 py-12 lg:py-16"
              style={{ backgroundColor: i === 0 ? C.forest : "transparent" }}>
              <div className="flex items-start justify-between mb-8">
                <span className="font-light text-4xl sm:text-5xl leading-none" style={{ color: i === 0 ? "rgba(255,255,255,0.25)" : C.subtle, fontFamily: "Georgia, serif" }}>
                  {step.num}
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase mt-2 font-light" style={{ color: i === 0 ? "rgba(255,255,255,0.45)" : C.subtle }}>
                  {step.sub}
                </span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-light mb-4 ${i === 0 ? "text-white" : ""}`} style={{ letterSpacing: "0.05em" }}>{step.title}</h3>
              <p className="text-sm font-light leading-[1.9]" style={{ color: i === 0 ? "rgba(255,255,255,0.55)" : C.muted }}>{step.desc}</p>

              {/* Image at bottom */}
              {i === 0 && (
                <div className="relative mt-10 overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                  <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover opacity-60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 5 — Why Choose Us: Minimal table ══ */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: C.white, borderTop: `1px solid ${C.border}` }}>
        <div className="px-8 sm:px-14 lg:px-20">
          <div className="flex items-center justify-between mb-10" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: "1.5rem" }}>
            <h2 className="text-xs font-light tracking-[0.4em] uppercase" style={{ color: C.subtle }}>Why Choose Us · 為什麼選擇玖膚</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-light" style={{ minWidth: 520, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  <th className="text-left py-4 text-[10px] tracking-[0.3em] uppercase font-light" style={{ color: C.subtle, width: "15%" }}></th>
                  {[
                    { l: "醫美療程", f: false },
                    { l: "玖膚皮膚管理", f: true },
                    { l: "傳統美容", f: false },
                  ].map(col => (
                    <th key={col.l} className="py-4 px-3 text-center font-light" style={{ color: col.f ? C.forest : C.muted, width: "28.33%" }}>
                      {col.f && <div className="text-[9px] tracking-[0.25em] uppercase mb-1 font-light" style={{ color: C.forest }}>推薦</div>}
                      {col.l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: C.borderLt }}>
                {[
                  { label: "費用", vals: ["$5,000+", "$2,000～3,000", "$2,000 左右"] },
                  { label: "時間", vals: ["約 1hr / 次", "60～120 分 / 次", "60～120 分 / 次"] },
                  { label: "特色", vals: ["雷射為主", "客製化・系統化管理", "基礎清潔保濕"] },
                  { label: "成效", vals: ["快速見效，長期易敏", "膚質真正改善，透亮持久", "基礎改善，有限"] },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-5 text-[10px] tracking-[0.25em] uppercase font-light" style={{ color: C.subtle }}>{row.label}</td>
                    {row.vals.map((val, ci) => (
                      <td key={ci} className="py-5 px-3 text-center align-top" style={{ color: ci === 1 ? C.forest : C.muted, fontWeight: ci === 1 ? 400 : 300 }}>
                        {ci === 1 && <div className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 mb-0.5 align-middle" style={{ backgroundColor: C.forest }} />}
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — Korean Care: Zen list ══ */}
      <section style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — content */}
          <div className="px-8 sm:px-14 lg:px-20 py-14 lg:py-16" style={{ borderRight: `1px solid ${C.border}` }}>
            <p className="text-[10px] tracking-[0.4em] uppercase font-light mb-8" style={{ color: C.subtle }}>
              Korean Deep Care · 韓式深層保養
            </p>
            <h2 className="text-2xl sm:text-3xl font-light mb-2" style={{ color: C.dark, letterSpacing: "0.04em" }}>7 步驟韓式深層護理</h2>
            <p className="text-xs font-light mb-10" style={{ color: C.subtle, letterSpacing: "0.12em" }}>Step-by-step Professional Care</p>

            {skinCareItems.map((item, i) => (
              <div key={item.num} className="grid grid-cols-12 items-baseline py-4" style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderBottom: `1px solid ${C.borderLt}` }}>
                <span className="col-span-2 text-[10px] font-light" style={{ color: C.forest, letterSpacing: "0.15em" }}>{item.num}</span>
                <span className="col-span-4 text-sm font-light" style={{ color: C.text, letterSpacing: "0.06em" }}>{item.title}</span>
                <span className="col-span-6 text-xs font-light" style={{ color: C.subtle }}>{item.desc}</span>
              </div>
            ))}

            <p className="text-[11px] font-light mt-8" style={{ color: C.subtle, letterSpacing: "0.08em" }}>
              完整 7 步驟 · 約 90～120 分鐘 · 依膚況客製調整
            </p>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[50vw] lg:min-h-0">
            <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(250,250,248,0.4) 100%)" }} />
          </div>
        </div>
      </section>

      {/* ══ SECTION 7 — Commitments: Text-forward cards ══ */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: C.white, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-8 sm:px-14 lg:px-20">
          <p className="text-[10px] tracking-[0.4em] uppercase font-light mb-12" style={{ color: C.subtle }}>
            Our Promise · 玖膚承諾
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {commitments.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-5 text-[1.4rem]" style={{ color: C.forest }}>{item.icon}</div>
                <div className="w-8 h-px mb-5" style={{ backgroundColor: C.border }} />
                <h3 className="text-sm font-light mb-3" style={{ letterSpacing: "0.08em", color: C.dark }}>{item.title}</h3>
                <p className="text-xs font-light leading-[1.9]" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 8 — Mission: Full-bleed + caption ══ */}
      <section style={{ borderTop: `1px solid ${C.border}` }}>
        {/* Full-width image */}
        <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
          <Image src="/img/Page 8-1.JPG" alt="9skin 空間" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(250,250,248,0.8) 100%)" }} />
        </div>

        {/* Text below image */}
        <div className="px-8 sm:px-14 lg:px-20 py-14 lg:py-16" style={{ backgroundColor: C.bg, borderBottom: `1px solid ${C.border}` }}>
          <div className="max-w-4xl">
            <p className="text-[10px] tracking-[0.4em] uppercase font-light mb-6" style={{ color: C.subtle }}>Our Mission · 品牌理念</p>
            <Image src="/img/9skin logo.png" alt="9skin" width={100} height={38} className="h-7 w-auto object-contain mb-6"
              style={{ filter: "brightness(0) opacity(0.6)" }} />
            <blockquote className="font-light leading-[1.2] mb-8"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: C.dark, letterSpacing: "0.02em" }}>
              「美麗不只是外表，是一種長期投資」
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 pt-10" style={{ borderTop: `1px solid ${C.border}` }}>
              <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>
                9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。
              </p>
              <div>
                <p className="text-sm font-light leading-loose mb-6" style={{ color: C.muted }}>
                  我們融合韓式皮膚管理哲學與現代科技儀器，為台灣顧客提供真正系統化、個人化的肌膚照護體驗。
                </p>
                <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image src="/img/Page 8-2.jpg" alt="9skin 創辦人" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 9 — System ══ */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-20">
          <p className="text-[10px] tracking-[0.4em] uppercase font-light mb-12" style={{ color: C.subtle }}>
            Skin Care System · 科學化肌膚管理系統
          </p>

          {/* Mobile timeline */}
          <div className="flex flex-col sm:hidden gap-0 mb-12">
            {["肌膚檢測", "方案規劃", "專業療程", "追蹤評估", "居家維護"].map((title, i, arr) => (
              <div key={title} className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[10px] font-light"
                    style={{ border: `1px solid ${i === 0 ? C.forest : C.border}`, color: i === 0 ? C.forest : C.subtle }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 my-1" style={{ backgroundColor: C.borderLt, minHeight: 24 }} />}
                </div>
                <p className="pb-6 pt-1.5 text-sm font-light" style={{ color: i === 0 ? C.forest : C.muted }}>{title}</p>
              </div>
            ))}
          </div>

          {/* Desktop steps */}
          <div className="hidden sm:grid sm:grid-cols-5 gap-0 mb-12" style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
            {["肌膚檢測", "方案規劃", "專業療程", "追蹤評估", "居家維護"].map((title, i) => (
              <div key={title} className="py-6 px-4 text-center" style={{ borderRight: i < 4 ? `1px solid ${C.border}` : "none" }}>
                <p className="text-[10px] font-light mb-2" style={{ color: i === 0 ? C.forest : C.subtle, letterSpacing: "0.2em" }}>{String(i + 1).padStart(2, "0")}</p>
                <p className="text-xs font-light" style={{ color: i === 0 ? C.forest : C.muted }}>{title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
              { title: "精準分區護理", desc: "不同肌膚區域有不同問題，針對各區域制定最適合的護理方式" },
              { title: "長期膚況追蹤", desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-6 h-px mb-5" style={{ backgroundColor: C.forest }} />
                <h3 className="text-sm font-light mb-2" style={{ letterSpacing: "0.06em" }}>{item.title}</h3>
                <p className="text-xs font-light leading-[1.9]" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 10 — Before & After ══ */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-8 sm:px-14 lg:px-20">
          <div className="flex items-center justify-between mb-10">
            <p className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ color: C.subtle }}>Before &amp; After · 成效見證</p>
            <p className="text-xs font-light" style={{ color: C.subtle }}>Real customers · No filters</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {baReviews.map((item) => (
              <div key={item.img} className="group relative overflow-hidden card-wrap" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(to top, rgba(26,26,24,0.7) 0%, transparent 100%)" }}>
                  <p className="text-[9px] font-light text-center text-white/80 tracking-wider">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] font-light mt-6 text-center" style={{ color: C.subtle }}>* 以上成效因個人膚況而異</p>
        </div>
      </section>

      {/* ══ SECTION 11 — KOL ══ */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div className="px-8 sm:px-14 lg:px-20 mb-10 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ color: C.subtle }}>KOL Reviews · 口碑見證</p>
        </div>
        <div className="marquee-outer overflow-hidden mb-2">
          <div className="marquee-track-left flex gap-2" style={{ width: "max-content" }}>
            {[...kolRow1, ...kolRow1].map((item, i) => (
              <div key={i} className="relative shrink-0" style={{ width: 160, height: 285 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-right flex gap-2" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((item, i) => (
              <div key={i} className="relative shrink-0" style={{ width: 160, height: 285 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ backgroundColor: C.dark }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 px-8 sm:px-14 lg:px-20 py-12 gap-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <Image src="/img/9skin logo.png" alt="9skin" width={100} height={38} className="h-7 w-auto object-contain mb-4"
              style={{ filter: "brightness(0) invert(1) opacity(0.45)" }} />
            <p className="text-xs font-light leading-loose" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>
              養膚，是一件更深、更長遠的事
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase font-light mb-4" style={{ color: "rgba(255,255,255,0.2)" }}>Locations</p>
            <div className="space-y-2">
              {["台北 · 松江南京站步行 3 分鐘", "高雄 · 巨蛋站步行 6 分鐘"].map(loc => (
                <div key={loc} className="flex items-center gap-2">
                  <LuMapPin size={10} color="rgba(255,255,255,0.25)" />
                  <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.3)" }}>{loc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-xs font-light mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>準備好開始你的肌膚管理之旅？</p>
            <button className="px-7 py-3 text-xs font-light tracking-[0.14em] border transition-opacity hover:opacity-60"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.5)" }}>
              立即預約諮詢 →
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
