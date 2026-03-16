"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin } from "react-icons/lu";

/* ─── Design tokens — Editorial Magazine ───────────────────────── */
const C = {
  bg:      "#F2EDE6",
  white:   "#FAFAF7",
  dark:    "#141210",
  muted:   "#7A7168",
  red:     "#C13B2A",
  redDim:  "rgba(193,59,42,0.08)",
  border:  "rgba(20,18,16,0.12)",
};

const concerns = [
  { img: "/img/Page 2-1.png", no: "01", title: "痘痘反覆出現",       en: "Persistent Acne" },
  { img: "/img/Page 2-2.png", no: "02", title: "保養品買再多也沒用",  en: "No Results" },
  { img: "/img/Page 2-3.png", no: "03", title: "越保養越敏感",        en: "More Sensitive" },
  { img: "/img/Page 2-4.png", no: "04", title: "想瘦小臉、不想忍痛", en: "No Pain Slimming" },
];

const steps = [
  { num: "01", title: "評估肌膚屬性", desc: "透過專業檢測與分析，同時評估肌膚耐受度與當下狀態，再量身規劃最適合的客製化照護方案。" },
  { num: "02", title: "調理・養護", desc: "不追求激進手段，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。" },
  { num: "03", title: "守護・常在", desc: "肌膚達到理想狀態後，我們專注守護，讓亮澤與彈性長久可見。" },
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
  { img: "/img/Page 7-1.png", icon: <LuClipboardList size={20} />, title: "專業肌膚檢測" },
  { img: "/img/Page 7-2.jpg", icon: <LuLeaf size={20} />,          title: "溫和成分配方" },
  { img: "/img/Page 7-3.png", icon: <LuSparkles size={20} />,      title: "客製化方案" },
  { img: "/img/Page 7-4.png", icon: <LuFlaskConical size={20} />,  title: "科技儀器輔助" },
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
    <div style={{ backgroundColor: C.bg, color: C.dark, fontFamily: "var(--font-noto-serif-tc), Noto Serif TC, Georgia, serif" }}>

      {/* ══ SECTION 1 — Full-bleed Hero ══ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Full background image */}
        <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_15%]" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,18,16,0.55) 0%, rgba(20,18,16,0.2) 40%, rgba(20,18,16,0.75) 100%)" }} />

        {/* Nav */}
        <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 pt-8">
          <Image src="/img/9skin logo.png" alt="9skin" width={130} height={48} className="h-9 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1) opacity(0.9)" }} />
          <div className="hidden sm:flex items-center gap-7">
            {["服務項目", "療程說明", "成效見證", "聯絡"].map(item => (
              <span key={item} className="text-xs font-light cursor-pointer text-white/70 hover:text-white transition-colors" style={{ letterSpacing: "0.1em" }}>{item}</span>
            ))}
          </div>
        </div>

        {/* Hero text — bottom of screen */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 sm:px-10 pb-14 sm:pb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-light mb-4 text-white/50">Brand Introduction</p>
              <h1 className="font-light leading-[1.05] text-white"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "0.01em" }}>
                養膚，是一件<br />
                <em className="not-italic" style={{ color: C.red }}>更深、更長遠</em><br />
                的事
              </h1>
            </div>
            <div className="sm:max-w-xs pb-1">
              <p className="text-sm font-light leading-loose text-white/60 mb-6">
                我們像管理資產一樣，陪你管理「顏值」，替你規劃專屬保養計畫，成為你的顏值資產管理顧問。
              </p>
              <button className="px-7 py-3 text-xs font-light tracking-[0.14em] border border-white/40 text-white/80 hover:bg-white/10 transition-colors rounded-full">
                立即諮詢
              </button>
            </div>
          </div>

          {/* Location strip */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {["台北店：松江南京站步行 3 分鐘", "高雄店：巨蛋站步行 6 分鐘"].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <LuMapPin size={11} color="rgba(255,255,255,0.4)" />
                <span className="text-[11px] font-light text-white/40" style={{ letterSpacing: "0.07em" }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — Concerns: Editorial Grid ══ */}
      <section style={{ backgroundColor: C.white }}>
        {/* Section header */}
        <div className="flex items-baseline justify-between px-6 sm:px-10 pt-14 pb-8" style={{ borderBottom: `1px solid ${C.border}` }}>
          <div className="flex items-baseline gap-5">
            <span className="font-light text-[3.5rem] sm:text-[5rem] leading-none select-none" style={{ color: "rgba(20,18,16,0.06)", fontFamily: "Georgia, serif" }}>02</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-light" style={{ letterSpacing: "0.04em" }}>常見的肌膚困擾</h2>
              <p className="text-xs font-light mt-0.5" style={{ color: C.muted, letterSpacing: "0.2em" }}>SKIN CONCERNS</p>
            </div>
          </div>
          <p className="hidden sm:block text-xs font-light" style={{ color: C.muted }}>你中了幾項？</p>
        </div>

        {/* 4 concerns — alternating image/text layout */}
        {concerns.map((c, i) => (
          <div key={c.no} className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            style={{ borderBottom: `1px solid ${C.border}` }}>
            {/* Image — extends full on mobile, half on desktop */}
            <div className="relative w-full sm:w-1/2 overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={c.img} alt={c.title} fill className="object-cover card-img transition-transform duration-700 hover:scale-105" />
              {/* Big number over image */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[5rem] sm:text-[7rem] font-light leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.18)", fontFamily: "Georgia, serif" }}>
                {c.no}
              </div>
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 sm:py-14">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-3 font-light" style={{ color: C.red }}>{c.en}</p>
              <h3 className="text-2xl sm:text-3xl font-light leading-snug mb-5" style={{ letterSpacing: "0.04em" }}>{c.title}</h3>
              <div className="w-10 h-px" style={{ backgroundColor: C.red }} />
            </div>
          </div>
        ))}

        {/* Callout bar */}
        <div className="px-6 sm:px-10 py-6 flex items-center gap-4" style={{ backgroundColor: C.dark }}>
          <div className="w-1 h-12 shrink-0" style={{ backgroundColor: C.red }} />
          <p className="text-sm font-light leading-relaxed text-white/65" style={{ letterSpacing: "0.04em" }}>
            這些問題看似獨立，實際上都指向同一個核心：
            <em className="not-italic text-white/90"> 肌膚缺乏正確的深層調理與系統化管理</em>
          </p>
        </div>
      </section>

      {/* ══ SECTION 3 — Empathy: Large Quotes ══ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10">

          <div className="flex items-baseline justify-between mb-14" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: "1.5rem" }}>
            <div className="flex items-baseline gap-4">
              <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(20,18,16,0.07)", fontFamily: "Georgia, serif" }}>03</span>
              <h2 className="text-xl font-light" style={{ letterSpacing: "0.04em" }}>變美的路上，你也正在經歷這些嗎？</h2>
            </div>
          </div>

          <div className="space-y-6">
            {[
              "保養品越買越多，毛孔卻沒有變細，反而更明顯",
              "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心",
              "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定",
              "明明用的是高價保養，肌膚卻還是黯淡、沒精神",
              "不適合自己的課程與產品，讓皮膚越照顧越敏感",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-5 group py-4" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="text-[11px] font-light shrink-0 pt-1.5 transition-colors group-hover:text-red-500"
                  style={{ color: C.red, letterSpacing: "0.1em", minWidth: "2rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base sm:text-lg font-light leading-snug transition-opacity group-hover:opacity-100 opacity-75"
                  style={{ letterSpacing: "0.03em" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base sm:text-lg font-light leading-loose" style={{ color: C.muted }}>
              問題的核心不在於你不夠努力，<br />而是缺少對肌膚的正確理解與<em className="not-italic" style={{ color: C.dark }}>專業指引</em>
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — Three Keys: Full-width Bands ══ */}
      <section style={{ backgroundColor: C.white }}>
        <div className="px-6 sm:px-10 pt-14 pb-8 flex items-baseline gap-5" style={{ borderBottom: `1px solid ${C.border}` }}>
          <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(20,18,16,0.07)", fontFamily: "Georgia, serif" }}>04</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-light" style={{ letterSpacing: "0.04em" }}>想要水煮蛋肌？從三個關鍵開始</h2>
            <p className="text-xs font-light mt-0.5" style={{ color: C.muted, letterSpacing: "0.2em" }}>THREE KEYS</p>
          </div>
        </div>

        {steps.map((step, i) => (
          <div key={step.num} className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} min-h-[280px] sm:min-h-[320px]`}
            style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: i === 1 ? C.dark : "transparent" }}>
            {/* Big number panel */}
            <div className="w-full sm:w-[220px] lg:w-[280px] flex items-center justify-center py-8 sm:py-0 shrink-0"
              style={{ backgroundColor: i === 0 ? C.red : i === 1 ? "rgba(255,255,255,0.04)" : C.bg }}>
              <span className="text-[6rem] sm:text-[8rem] font-light leading-none" style={{ color: i === 0 ? "rgba(255,255,255,0.4)" : i === 1 ? "rgba(255,255,255,0.08)" : "rgba(20,18,16,0.1)", fontFamily: "Georgia, serif" }}>
                {step.num}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10">
              <h3 className={`text-2xl sm:text-3xl font-light mb-4 ${i === 1 ? "text-white" : ""}`} style={{ letterSpacing: "0.04em" }}>{step.title}</h3>
              <p className={`text-sm font-light leading-loose max-w-lg ${i === 1 ? "" : ""}`} style={{ color: i === 1 ? "rgba(255,255,255,0.55)" : C.muted }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ══ SECTION 5 — Why Choose Us ══ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.bg }}>
        <div className="px-6 sm:px-10">
          <div className="flex items-baseline gap-5 mb-12" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: "1.5rem" }}>
            <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(20,18,16,0.07)", fontFamily: "Georgia, serif" }}>05</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-light" style={{ letterSpacing: "0.04em" }}>為什麼選擇玖膚？</h2>
              <p className="text-xs font-light mt-0.5" style={{ color: C.muted, letterSpacing: "0.2em" }}>WHY CHOOSE US</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ minWidth: 560, borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-xs font-light tracking-[0.2em] uppercase w-[160px]" style={{ color: C.muted, borderBottom: `2px solid ${C.dark}` }}>比較</th>
                  {[{ l: "醫美療程", f: false }, { l: "玖膚皮膚管理", f: true }, { l: "傳統美容", f: false }].map(col => (
                    <th key={col.l} className="py-4 px-4 text-center font-light text-base" style={{ color: col.f ? C.white : C.dark, backgroundColor: col.f ? C.dark : "transparent", borderBottom: `2px solid ${C.dark}` }}>
                      {col.f && <div className="text-[9px] tracking-widest mb-1" style={{ color: C.red }}>▶ 推薦選擇</div>}
                      {col.l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "費用", vals: ["$5,000 以上", "$2,000～3,000", "$2,000 左右"] },
                  { label: "時間", vals: ["1～2月一次，約1hr", "1～2月一次，60～120分", "1～2月一次，60～120分"] },
                  { label: "特色", vals: ["以雷射為主，對敏感肌非最佳首選", "專業肌膚檢測・客製化護理・科技手法並用", "粉刺清潔與基礎保濕為核心"] },
                  { label: "成效", vals: ["快速見效，長期施作易敏感", "膚質真正改善，達到透亮水煮蛋肌", "基礎清潔，質地改善有限"] },
                ].map((row, ri) => (
                  <tr key={row.label} style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td className="py-5 px-4 text-xs font-light tracking-[0.15em] uppercase" style={{ color: C.muted }}>{row.label}</td>
                    {row.vals.map((val, ci) => (
                      <td key={ci} className="py-5 px-4 text-sm font-light text-center align-top"
                        style={{ backgroundColor: ci === 1 ? (ri % 2 === 0 ? "rgba(20,18,16,0.03)" : "transparent") : "transparent", color: ci === 1 ? C.dark : C.muted }}>
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

      {/* ══ SECTION 6 — Korean Care: Bold List ══ */}
      <section style={{ backgroundColor: C.dark }}>
        <div className="flex flex-col lg:flex-row">
          {/* Content */}
          <div className="flex-1 px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <p className="text-[10px] tracking-[0.35em] uppercase mb-2 font-light" style={{ color: C.red }}>Korean Deep Care</p>
            <h2 className="text-2xl sm:text-3xl font-light mb-12 text-white" style={{ letterSpacing: "0.04em" }}>7 步驟韓式深層護理</h2>

            <div className="space-y-0">
              {skinCareItems.map((item, i) => (
                <div key={item.num} className="flex items-baseline gap-6 group" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1rem 0" }}>
                  <span className="text-xs font-light shrink-0 w-7" style={{ color: C.red }}>{item.num}</span>
                  <span className="text-base font-light text-white/85 transition-colors group-hover:text-white" style={{ letterSpacing: "0.05em" }}>{item.title}</span>
                  <span className="text-xs font-light text-white/35 hidden sm:block ml-auto text-right">{item.desc}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-light mt-8 text-white/30" style={{ letterSpacing: "0.08em" }}>
              完整 7 步驟 · 約 90～120 分鐘 · 依膚況客製調整
            </p>
          </div>

          {/* Image */}
          <div className="lg:hidden w-full" style={{ aspectRatio: "16/9", position: "relative" }}>
            <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative lg:w-[42%]">
            <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,18,16,0.5) 0%, transparent 40%)" }} />
          </div>
        </div>
      </section>

      {/* ══ SECTION 7 — Commitments: 4-up Image Grid ══ */}
      <section style={{ backgroundColor: C.white }}>
        <div className="px-6 sm:px-10 pt-14 pb-8 flex items-baseline gap-5" style={{ borderBottom: `1px solid ${C.border}` }}>
          <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(20,18,16,0.07)", fontFamily: "Georgia, serif" }}>07</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-light" style={{ letterSpacing: "0.04em" }}>玖膚水煮蛋肌養成術</h2>
            <p className="text-xs font-light mt-0.5" style={{ color: C.muted, letterSpacing: "0.2em" }}>FOUR COMMITMENTS</p>
          </div>
        </div>

        {/* Full-bleed image grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, i) => (
            <div key={i} className="group relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={item.img} alt={item.title} fill className="object-cover card-img transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,18,16,0.85) 0%, transparent 55%)" }} />
              {/* Icon */}
              <div className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center" style={{ color: "rgba(255,255,255,0.6)" }}>
                {item.icon}
              </div>
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-6 h-px mb-3" style={{ backgroundColor: C.red }} />
                <p className="text-sm font-light text-white" style={{ letterSpacing: "0.06em" }}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 8 — Mission: Text-Heavy ══ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

            {/* Left — big quote */}
            <div className="lg:w-[55%]">
              <p className="text-[10px] tracking-[0.35em] uppercase mb-6 font-light" style={{ color: C.red }}>Our Mission</p>
              <blockquote className="font-light leading-[1.3] mb-8"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.02em" }}>
                「美麗不只是外表，是一種長期投資」
              </blockquote>
              <div className="w-12 h-px mb-8" style={{ backgroundColor: C.dark }} />
              <div className="space-y-4">
                <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。</p>
                <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>我們融合韓式皮膚管理哲學與現代科技儀器，為台灣顧客提供真正系統化、個人化的肌膚照護體驗。</p>
              </div>

              <div className="flex gap-10 mt-10 pt-8" style={{ borderTop: `1px solid ${C.border}` }}>
                {[{ n: "2", l: "間門市" }, { n: "500+", l: "滿意顧客" }, { n: "7", l: "護理步驟" }].map(s => (
                  <div key={s.l}>
                    <p className="text-3xl font-light mb-0.5">{s.n}</p>
                    <p className="text-xs font-light" style={{ color: C.muted }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stacked images */}
            <div className="flex-1 flex flex-col gap-3 px-4 sm:px-8 lg:px-0">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src="/img/Page 8-1.JPG" alt="9skin 空間" fill className="object-cover" />
              </div>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <Image src="/img/Page 8-2.jpg" alt="9skin 創辦人" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 9 — System ══ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.dark }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="flex items-baseline gap-5 mb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem" }}>
            <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(255,255,255,0.05)", fontFamily: "Georgia, serif" }}>09</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-white" style={{ letterSpacing: "0.04em" }}>科學化肌膚管理系統</h2>
              <p className="text-xs font-light mt-0.5" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em" }}>SKIN CARE SYSTEM</p>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="flex flex-col sm:hidden gap-0 mb-12">
            {["肌膚檢測", "方案規劃", "專業療程", "追蹤評估", "居家維護"].map((title, i, arr) => (
              <div key={title} className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[10px] font-light"
                    style={{ backgroundColor: i === 0 ? C.red : "transparent", border: `1px solid ${i === 0 ? C.red : "rgba(255,255,255,0.15)"}`, color: i === 0 ? C.white : "rgba(255,255,255,0.4)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 my-1" style={{ backgroundColor: "rgba(255,255,255,0.08)", minHeight: 24 }} />}
                </div>
                <p className="pb-6 pt-1.5 text-sm font-light" style={{ color: "rgba(255,255,255,0.7)" }}>{title}</p>
              </div>
            ))}
          </div>

          {/* Desktop horizontal */}
          <div className="hidden sm:flex items-start gap-0 mb-12">
            {["肌膚檢測", "方案規劃", "專業療程", "追蹤評估", "居家維護"].map((title, i) => (
              <div key={title} className="flex-1 flex flex-col items-center relative">
                {i < 4 && <div className="absolute top-4 left-[55%] right-[-5%] h-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />}
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-[10px] font-light relative z-10"
                  style={{ backgroundColor: i === 0 ? C.red : "transparent", border: `1px solid ${i === 0 ? C.red : "rgba(255,255,255,0.15)"}`, color: i === 0 ? C.white : "rgba(255,255,255,0.4)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs font-light text-center" style={{ color: "rgba(255,255,255,0.6)" }}>{title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
              { title: "精準分區護理", desc: "不同肌膚區域有不同問題，針對各區域制定最適合的護理方式" },
              { title: "長期膚況追蹤", desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
            ].map((item) => (
              <div key={item.title} className="p-6" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-5 h-px mb-4" style={{ backgroundColor: C.red }} />
                <p className="text-sm font-light text-white mb-2" style={{ letterSpacing: "0.05em" }}>{item.title}</p>
                <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 10 — Before & After ══ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex items-baseline justify-between mb-10" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: "1.5rem" }}>
            <div className="flex items-baseline gap-5">
              <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(20,18,16,0.07)", fontFamily: "Georgia, serif" }}>10</span>
              <h2 className="text-xl sm:text-2xl font-light" style={{ letterSpacing: "0.04em" }}>Before &amp; After</h2>
            </div>
            <p className="hidden sm:block text-xs font-light" style={{ color: C.muted }}>Real customers · No filters</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
            {baReviews.map((item) => (
              <div key={item.img} className="group relative overflow-hidden card-wrap" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(20,18,16,0.75) 0%, transparent 50%)" }}>
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <p className="text-[10px] font-light text-white/80 tracking-wider">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 11 — KOL ══ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.bg }}>
        <div className="px-6 sm:px-10 mb-10 flex items-baseline justify-between" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: "1.5rem" }}>
          <div className="flex items-baseline gap-5">
            <span className="text-[3rem] font-light leading-none select-none" style={{ color: "rgba(20,18,16,0.07)", fontFamily: "Georgia, serif" }}>11</span>
            <h2 className="text-xl sm:text-2xl font-light" style={{ letterSpacing: "0.04em" }}>KOL 口碑見證</h2>
          </div>
        </div>
        <div className="marquee-outer overflow-hidden mb-2">
          <div className="marquee-track-left flex gap-2" style={{ width: "max-content" }}>
            {[...kolRow1, ...kolRow1].map((item, i) => (
              <div key={i} className="relative shrink-0 overflow-hidden" style={{ width: 170, height: 300 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-right flex gap-2" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((item, i) => (
              <div key={i} className="relative shrink-0 overflow-hidden" style={{ width: 170, height: 300 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ backgroundColor: C.dark }}>
        <div className="flex flex-col sm:flex-row items-center justify-between px-8 sm:px-12 py-10 gap-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <Image src="/img/9skin logo.png" alt="9skin" width={110} height={42} className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1) opacity(0.5)" }} />
            <p className="text-xs font-light mt-1" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }}>準備好開始你的肌膚管理之旅了嗎？</p>
          </div>
          <button className="px-8 py-3.5 text-xs font-light tracking-[0.14em] rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: C.red, color: C.white }}>
            立即預約諮詢
          </button>
        </div>
        <div className="px-8 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {["台北店：松江南京站步行 3 分鐘", "高雄店：巨蛋站步行 6 分鐘"].map(loc => (
            <div key={loc} className="flex items-center gap-2">
              <LuMapPin size={10} color="rgba(255,255,255,0.25)" />
              <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.25)" }}>{loc}</span>
            </div>
          ))}
        </div>
      </footer>

    </div>
  );
}
