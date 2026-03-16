"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin } from "react-icons/lu";

/* ─── Design tokens — Dark Luxury ──────────────────────────────── */
const C = {
  bg:       "#0D1410",
  bgAlt:    "#111916",
  bgCard:   "#141F1A",
  bgLight:  "#1A2820",
  text:     "#EDE8DF",
  muted:    "rgba(237,232,223,0.45)",
  gold:     "#C9A96E",
  goldDim:  "rgba(201,169,110,0.18)",
  goldBord: "rgba(201,169,110,0.28)",
  sage:     "#6B9B82",
  border:   "rgba(237,232,223,0.08)",
  borderMd: "rgba(237,232,223,0.14)",
};

const concerns = [
  { img: "/img/Page 2-1.png", no: "01", title: "痘痘反覆出現",        en: "Persistent Acne",               desc: "出油、發炎、細菌、角質代謝——肌膚屏障只要一個環節失衡，痘痘就難以真正穩定。" },
  { img: "/img/Page 2-2.png", no: "02", title: "保養品買再多也沒用",   en: "Skincare Shopping, No Results",  desc: "角質太厚吸收進不去，角質太薄水留不住。先把皮膚養回健康，才能讓保養品發揮效用。" },
  { img: "/img/Page 2-3.png", no: "03", title: "越保養越敏感",         en: "More Skincare, More Sensitive",  desc: "做臉、煥膚、雷射都嘗試過，皮膚卻越來越紅。真正有效的保養是從肌膚生理出發。" },
  { img: "/img/Page 2-4.png", no: "04", title: "想瘦小臉，不想忍痛",  en: "Slimming Without Pain",          desc: "透過非侵入式的儀器護理，科技加持，安全溫和又看得見效果。" },
];

const steps = [
  { num: "01", title: "評估你的肌膚屬性", desc: "透過專業檢測與分析找出真正的膚況問題，同時評估肌膚耐受度、當下不穩定狀態，再量身規劃最適合的客製化照護方案。" },
  { num: "02", title: "以調理・養護為前提", desc: "不追求立即見效的激進手段，而是建立肌膚的健康基礎，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。" },
  { num: "03", title: "守護肌膚・讓好狀態常在", desc: "肌膚達到理想狀態後，我們專注守護，維持最佳膚況，讓亮澤與彈性長久可見。" },
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
  { img: "/img/Page 7-1.png", icon: <LuClipboardList size={18} />, title: "專業肌膚檢測", desc: "每次療程前完整評估膚況" },
  { img: "/img/Page 7-2.jpg", icon: <LuLeaf size={18} />,          title: "溫和成分配方", desc: "精選安全有效成分，低刺激" },
  { img: "/img/Page 7-3.png", icon: <LuSparkles size={18} />,      title: "客製化方案",   desc: "沒有千篇一律的護理流程" },
  { img: "/img/Page 7-4.png", icon: <LuFlaskConical size={18} />,  title: "科技儀器輔助", desc: "效果加乘且安全可靠" },
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

function GoldTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-light px-3 py-1 rounded-full mb-5"
      style={{ backgroundColor: C.goldDim, color: C.gold, border: `1px solid ${C.goldBord}` }}>
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: "var(--font-noto-serif-tc), Noto Serif TC, Georgia, serif" }}>

      {/* ══ SECTION 1 — Hero ══ */}
      <section className="min-h-screen flex flex-col" style={{ backgroundColor: C.bg }}>
        <main className="flex-1 flex flex-col lg:flex-row">

          {/* Left */}
          <div className="flex flex-col px-8 sm:px-12 lg:px-16 pt-10 pb-12 lg:pt-16 lg:pb-16 lg:w-[55%]">

            {/* Nav */}
            <div className="flex items-center justify-between mb-14 lg:mb-20">
              <Image src="/img/9skin logo.png" alt="9skin 玖膚" width={140} height={52} className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1) opacity(0.85)" }} />
              <div className="hidden sm:flex items-center gap-6">
                {["服務項目", "療程說明", "成效見證", "聯絡我們"].map(item => (
                  <span key={item} className="text-xs font-light cursor-pointer transition-opacity hover:opacity-100"
                    style={{ color: C.muted, letterSpacing: "0.1em" }}>{item}</span>
                ))}
              </div>
            </div>

            {/* Headline */}
            <div className="flex-1 flex flex-col justify-center">
              <GoldTag>Brand Introduction · 品牌介紹</GoldTag>

              <h1 className="font-light leading-[1.1] mb-8"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", letterSpacing: "0.02em" }}>
                養膚，<br />
                是一件<br />
                <em className="not-italic" style={{ color: C.gold }}>更深、更長遠</em><br />
                的事
              </h1>

              <div className="w-12 h-px mb-8" style={{ backgroundColor: C.goldBord }} />

              <p className="text-base lg:text-[17px] font-light leading-loose mb-3 max-w-md" style={{ color: C.muted }}>
                我們像管理資產一樣，陪你管理「顏值」，替你規劃專屬保養計畫。
              </p>
              <p className="text-base lg:text-[17px] font-light leading-loose max-w-md" style={{ color: C.muted }}>
                溫馨、寬敞的開放式諮詢空間，讓每位顧客享有專屬的私密與安心感。
              </p>

              <div className="flex items-center gap-4 mt-10">
                <button className="px-8 py-3.5 text-sm font-light tracking-wider rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: C.gold, color: C.bg, letterSpacing: "0.12em" }}>
                  立即諮詢
                </button>
                <button className="px-8 py-3.5 text-sm font-light tracking-wider rounded-full border transition-opacity hover:opacity-60"
                  style={{ color: C.text, borderColor: C.borderMd, letterSpacing: "0.12em" }}>
                  了解更多
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:hidden w-full" style={{ maxHeight: 480, overflow: "hidden" }}>
            <Image src="/img/Page 1.JPG" alt="9skin" width={1206} height={2130} className="w-full h-full object-cover object-top" priority />
          </div>
          <div className="hidden lg:block relative flex-1">
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_15%]" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,20,16,0.5) 0%, transparent 40%)" }} />
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-1 h-32" style={{ backgroundColor: C.gold }} />
          </div>
        </main>

        {/* Footer bar */}
        <footer className="py-4 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-16"
          style={{ backgroundColor: C.bgCard, borderTop: `1px solid ${C.border}` }}>
          {["台北店：位於松江南京站步行 3 分鐘", "高雄店：位於巨蛋站步行 6 分鐘"].map(loc => (
            <div key={loc} className="flex items-center gap-2">
              <LuMapPin size={11} color={C.gold} />
              <span className="text-xs font-light" style={{ color: C.muted, letterSpacing: "0.07em" }}>{loc}</span>
            </div>
          ))}
        </footer>
      </section>

      {/* ══ SECTION 2 — Skin Concerns ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <GoldTag>Skin Concerns · 肌膚困擾</GoldTag>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-light leading-snug" style={{ letterSpacing: "0.03em" }}>
                常見的肌膚困擾，<br className="hidden sm:block" />你中了幾項？
              </h2>
            </div>
            <p className="text-sm font-light lg:text-right max-w-xs" style={{ color: C.muted }}>
              How many of these common skin concerns do you struggle with?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: C.border }}>
            {concerns.map((c) => (
              <div key={c.no} className="group relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: C.bg }}>
                <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,20,16,0.95) 0%, rgba(13,20,16,0.3) 55%, transparent 100%)" }} />
                {/* Number */}
                <div className="absolute top-5 left-5 text-5xl font-light leading-none select-none pointer-events-none"
                  style={{ color: "rgba(201,169,110,0.2)", fontFamily: "Georgia, serif" }}>{c.no}</div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] tracking-[0.28em] uppercase mb-2 font-light" style={{ color: C.gold }}>{c.en}</p>
                  <p className="text-lg font-light mb-3" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                  <p className="text-xs font-light leading-relaxed max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20"
                    style={{ color: C.muted }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-8 px-6 sm:px-10 py-5 rounded-xl flex items-center gap-4"
            style={{ backgroundColor: C.bgCard, border: `1px solid ${C.goldBord}` }}>
            <div className="w-px h-10 shrink-0" style={{ backgroundColor: C.gold }} />
            <p className="text-sm font-light leading-relaxed" style={{ color: C.muted, letterSpacing: "0.04em" }}>
              這些問題看似獨立，實際上都指向同一個核心：
              <span style={{ color: C.text }}> 肌膚缺乏正確的深層調理與系統化管理</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — Empathy Bubbles ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col lg:flex-row lg:gap-20 lg:items-start">
            <div className="lg:w-[40%] shrink-0 mb-12 lg:mb-0">
              <GoldTag>Skin Problems · 常見疑問</GoldTag>
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-6" style={{ letterSpacing: "0.03em" }}>
                變美的路上，<br />你也正在<br />
                <em className="not-italic" style={{ color: C.gold }}>經歷這些嗎？</em>
              </h2>
              <div className="w-8 h-px my-6" style={{ backgroundColor: C.goldBord }} />
              <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>
                問題的核心不在於你不夠努力，而是缺少對肌膚的正確理解與專業指引。真正的改變，從了解肌膚狀態、回到皮膚本身的節奏開始。
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {[
                { text: "保養品越買越多，毛孔卻沒有變細，反而更明顯", gold: false },
                { text: "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心", gold: true },
                { text: "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定", gold: false },
                { text: "明明用的是高價保養，肌膚卻還是黯淡、沒精神", gold: true },
                { text: "不適合自己的課程與產品，讓皮膚越照顧越敏感", gold: false },
              ].map((b, i) => (
                <div key={i} className="rounded-xl px-5 py-4 text-sm font-light leading-relaxed"
                  style={{
                    backgroundColor: b.gold ? C.bgLight : C.bgCard,
                    color: b.gold ? C.text : C.muted,
                    border: `1px solid ${b.gold ? C.goldBord : C.border}`,
                    letterSpacing: "0.03em",
                    marginLeft: i % 2 === 1 ? "auto" : 0,
                    maxWidth: "88%",
                  }}>
                  {b.gold && <span className="mr-2" style={{ color: C.gold }}>✦</span>}
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — Three Keys ══ */}
      <section style={{ backgroundColor: C.bgAlt }}>
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:hidden w-full" style={{ aspectRatio: "16/9", position: "relative" }}>
            <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative lg:w-[44%]" style={{ minHeight: 560 }}>
            <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(17,25,22,0.5) 100%)" }} />
          </div>

          {/* Content */}
          <div className="flex-1 px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <GoldTag>Our Method · 三大關鍵</GoldTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug mb-10"
              style={{ letterSpacing: "0.03em" }}>
              想要彈潤透亮的水煮蛋肌？<br />
              <em className="not-italic" style={{ color: C.gold }}>從這三個關鍵開始</em>
            </h2>

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-5">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ border: `1px solid ${C.goldBord}`, backgroundColor: C.goldDim }}>
                      <span className="text-[10px] font-light" style={{ color: C.gold }}>{step.num}</span>
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1" style={{ backgroundColor: C.border, minHeight: 20 }} />}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base lg:text-lg font-light mb-2" style={{ letterSpacing: "0.05em", color: C.text }}>{step.title}</h3>
                    <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — Why Choose Us ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <GoldTag>Comparison · 為什麼選擇我們</GoldTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-light" style={{ letterSpacing: "0.04em" }}>
              為什麼選擇玖膚？
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "醫美療程",
                featured: false,
                cost: "$ 5,000 以上",
                time: "1～2 月一次，約 1hr",
                feature: "以雷射為主，對敏感肌或需手工針清的痘痘肌非最佳首選",
                result: "快速立即見效，長期施作肌膚易敏感",
              },
              {
                label: "玖膚皮膚管理",
                featured: true,
                cost: "$ 2,000 ~ 3,000",
                time: "1～2 月一次，60～120 分",
                feature: "專業肌膚檢測・客製化護理・科技儀器與手法並用",
                result: "膚質真正改善，達到穩定、透亮、有彈性的水煮蛋肌",
              },
              {
                label: "傳統美容",
                featured: false,
                cost: "$ 2,000 左右",
                time: "1～2 月一次，60～120 分",
                feature: "粉刺清潔與基礎保濕為核心，流程固定",
                result: "基礎清潔保濕為主，質地改善有限",
              },
            ].map((col) => (
              <div key={col.label} className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: col.featured ? C.bgLight : C.bgCard,
                  border: `1px solid ${col.featured ? C.goldBord : C.border}`,
                  boxShadow: col.featured ? `0 0 40px rgba(201,169,110,0.08)` : "none",
                }}>
                <div className="py-5 px-6 text-center" style={{ borderBottom: `1px solid ${col.featured ? C.goldBord : C.border}` }}>
                  {col.featured && (
                    <div className="flex justify-center mb-2">
                      <span className="text-[9px] tracking-widest px-2.5 py-0.5 rounded-full font-light"
                        style={{ backgroundColor: C.gold, color: C.bg }}>推薦選擇</span>
                    </div>
                  )}
                  <p className="text-base font-light tracking-wider" style={{ color: col.featured ? C.gold : C.muted }}>{col.label}</p>
                </div>
                <div className="p-6 space-y-5">
                  {[
                    { label: "費用", val: col.cost },
                    { label: "時間", val: col.time },
                    { label: "特色", val: col.feature },
                    { label: "成效", val: col.result },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="text-[10px] tracking-[0.22em] uppercase mb-1.5 font-light" style={{ color: C.gold }}>{row.label}</p>
                      <p className="text-sm font-light leading-relaxed" style={{ color: col.featured ? C.text : C.muted }}>{row.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — Korean Care Program ══ */}
      <section style={{ backgroundColor: C.bgAlt }}>
        <div className="flex flex-col lg:flex-row-reverse">
          {/* Image */}
          <div className="lg:hidden w-full" style={{ aspectRatio: "16/9", position: "relative" }}>
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative lg:w-[42%]">
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 50%, rgba(17,25,22,0.4) 100%)" }} />
          </div>

          {/* Content */}
          <div className="flex-1 px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <GoldTag>Korean Deep Care · 韓式深層保養</GoldTag>
            <h2 className="text-2xl sm:text-3xl font-light mb-2" style={{ letterSpacing: "0.04em" }}>7 步驟韓式深層護理</h2>
            <p className="text-sm font-light mb-10" style={{ color: C.muted }}>Step-by-step Professional Skin Care</p>

            <div className="grid grid-cols-1 gap-0">
              {skinCareItems.map((item, i) => (
                <div key={item.num}>
                  <div className="flex items-baseline gap-4 py-4">
                    <span className="text-xs font-light shrink-0" style={{ color: C.gold, minWidth: 28 }}>{item.num}</span>
                    <div className="flex-1 flex items-baseline justify-between gap-4">
                      <span className="text-sm font-light" style={{ color: C.text, letterSpacing: "0.06em" }}>{item.title}</span>
                      <span className="text-xs font-light text-right shrink-0 hidden sm:block" style={{ color: C.muted }}>{item.desc}</span>
                    </div>
                  </div>
                  {i < skinCareItems.length - 1 && <div className="h-px" style={{ backgroundColor: C.border }} />}
                </div>
              ))}
            </div>

            <div className="mt-8 px-5 py-4 rounded-xl" style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
              <p className="text-xs font-light text-center" style={{ color: C.muted, letterSpacing: "0.06em" }}>
                完整 7 步驟 · 每次療程約 90～120 分鐘 · 依膚況客製調整
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 7 — Four Commitments ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center text-center mb-14">
            <GoldTag>Our Promise · 玖膚承諾</GoldTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light" style={{ letterSpacing: "0.04em" }}>玖膚水煮蛋肌養成術</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {commitments.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,20,16,0.92) 0%, rgba(13,20,16,0.1) 60%, transparent 100%)" }} />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: C.goldDim, border: `1px solid ${C.goldBord}`, color: C.gold }}>
                  {item.icon}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-light text-white mb-1" style={{ letterSpacing: "0.06em" }}>{item.title}</p>
                  <p className="text-[11px] font-light hidden sm:block" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 8 — Mission ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            <div className="flex-1">
              <GoldTag>Our Mission · 品牌理念</GoldTag>
              <Image src="/img/9skin logo.png" alt="9skin" width={120} height={45} className="h-9 w-auto object-contain mb-6"
                style={{ filter: "brightness(0) invert(1) opacity(0.7)" }} />
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-6" style={{ letterSpacing: "0.03em" }}>
                美麗不只是外表，<br />
                <em className="not-italic" style={{ color: C.gold }}>是一種長期投資</em>
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: C.goldBord }} />
              <div className="space-y-4 mb-10">
                <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。</p>
                <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>我們融合韓式皮膚管理哲學與現代科技儀器，為台灣顧客提供真正系統化、個人化的肌膚照護體驗。</p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: `1px solid ${C.border}` }}>
                {[
                  { num: "2", label: "間門市" },
                  { num: "500+", label: "滿意顧客" },
                  { num: "7", label: "護理步驟" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-light mb-1" style={{ color: C.gold }}>{s.num}</p>
                    <p className="text-[11px] font-light tracking-wider" style={{ color: C.muted }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[46%] flex flex-col gap-3 px-4 sm:px-8 lg:px-0">
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src="/img/Page 8-1.JPG" alt="9skin 空間" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,20,16,0.3) 0%, transparent 50%)" }} />
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <Image src="/img/Page 8-2.jpg" alt="9skin 創辦人" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 9 — Management System ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <GoldTag>System · 皮膚管理系統</GoldTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light mb-3" style={{ letterSpacing: "0.03em" }}>科學化肌膚管理系統</h2>
          </div>

          {/* Mobile timeline */}
          <div className="flex flex-col sm:hidden gap-0 mb-12">
            {[
              { num: "01", title: "肌膚檢測", desc: "全面評估膚況" },
              { num: "02", title: "方案規劃", desc: "客製化護理計畫" },
              { num: "03", title: "專業療程", desc: "精準執行護理" },
              { num: "04", title: "追蹤評估", desc: "記錄改善進程" },
              { num: "05", title: "居家維護", desc: "延續療程效果" },
            ].map((step, i, arr) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: i === 0 ? C.gold : C.bgCard, border: `1px solid ${i === 0 ? C.gold : C.goldBord}` }}>
                    <span className="text-[10px] font-light" style={{ color: i === 0 ? C.bg : C.gold }}>{step.num}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 my-1" style={{ backgroundColor: C.goldBord, minHeight: 24 }} />}
                </div>
                <div className="pb-6 pt-1">
                  <p className="text-sm font-light mb-0.5" style={{ color: C.text, letterSpacing: "0.06em" }}>{step.title}</p>
                  <p className="text-xs font-light" style={{ color: C.muted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop horizontal */}
          <div className="hidden sm:flex items-start justify-between gap-0 mb-12">
            {[
              { num: "01", title: "肌膚檢測", desc: "全面評估膚況" },
              { num: "02", title: "方案規劃", desc: "客製化護理計畫" },
              { num: "03", title: "專業療程", desc: "精準執行護理" },
              { num: "04", title: "追蹤評估", desc: "記錄改善進程" },
              { num: "05", title: "居家維護", desc: "延續療程效果" },
            ].map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center flex-1">
                {i < 4 && <div className="absolute top-5 left-[55%] right-[-5%] h-px z-0" style={{ backgroundColor: C.goldBord }} />}
                <div className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 mb-3"
                  style={{ backgroundColor: i === 0 ? C.gold : C.bgCard, border: `1px solid ${i === 0 ? C.gold : C.goldBord}` }}>
                  <span className="text-[10px] font-light" style={{ color: i === 0 ? C.bg : C.gold }}>{step.num}</span>
                </div>
                <p className="text-xs font-light text-center mb-1" style={{ color: C.text }}>{step.title}</p>
                <p className="text-[10px] font-light text-center" style={{ color: C.muted }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
              { title: "精準分區護理", desc: "不同肌膚區域有不同問題，針對各區域制定最適合的護理方式" },
              { title: "長期膚況追蹤", desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
                <div className="w-6 h-0.5 mb-4" style={{ backgroundColor: C.gold }} />
                <h3 className="text-sm font-light mb-3" style={{ color: C.text, letterSpacing: "0.06em" }}>{item.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 10 — Before & After ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <GoldTag>Results · 成效見證</GoldTag>
            <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>真實顧客 · Before &amp; After</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {baReviews.map((item) => (
              <div key={item.img} className="group relative rounded-xl overflow-hidden card-wrap" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover" />
                <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(13,20,16,0.8) 0%, transparent 55%)", opacity: 0.8 }} />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
                  <p className="text-[10px] font-light text-center tracking-wider" style={{ color: "rgba(201,169,110,0.8)" }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 11 — KOL Reviews ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-12 text-center">
          <GoldTag>Reviews · 口碑見證</GoldTag>
          <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>KOL 親身體驗</h2>
        </div>

        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-left flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow1, ...kolRow1].map((item, i) => (
              <div key={i} className="relative shrink-0 rounded-xl overflow-hidden" style={{ width: 180, height: 320 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer overflow-hidden mt-3">
          <div className="marquee-track-right flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((item, i) => (
              <div key={i} className="relative shrink-0 rounded-xl overflow-hidden" style={{ width: 180, height: 320 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ backgroundColor: C.bgCard, borderTop: `1px solid ${C.border}` }}>
        <div className="py-14 px-6 sm:px-8 text-center" style={{ borderBottom: `1px solid ${C.border}` }}>
          <h2 className="text-xl sm:text-2xl font-light mb-4" style={{ letterSpacing: "0.04em" }}>
            準備好開始你的肌膚管理之旅了嗎？
          </h2>
          <p className="text-sm font-light mb-7" style={{ color: C.muted }}>立即預約免費肌膚諮詢，讓我們為你量身打造護理計畫</p>
          <button className="px-10 py-4 text-sm font-light tracking-wider rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: C.gold, color: C.bg, letterSpacing: "0.14em" }}>
            立即預約諮詢
          </button>
        </div>
        <div className="py-7 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/img/9skin logo.png" alt="9skin" width={100} height={38} className="h-8 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1) opacity(0.4)" }} />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {["台北店：松江南京站步行 3 分鐘", "高雄店：巨蛋站步行 6 分鐘"].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <LuMapPin size={11} color={C.gold} />
                <span className="text-xs font-light" style={{ color: C.muted }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
