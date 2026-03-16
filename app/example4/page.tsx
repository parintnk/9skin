"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin, LuChevronRight } from "react-icons/lu";

/* ─── Design tokens — K-Beauty Warm ────────────────────────────── */
const C = {
  bg:       "#FEF9F7",
  white:    "#FFFFFF",
  blush:    "#FDF2EE",
  rose:     "#F5DDD7",
  coral:    "#D97B6C",
  coralDim: "rgba(217,123,108,0.1)",
  dark:     "#2E1F1A",
  text:     "#3D2820",
  muted:    "#9B7B72",
  warm:     "#C4967A",
  border:   "rgba(61,40,32,0.1)",
  borderLt: "rgba(61,40,32,0.06)",
  footer:   "#2E1F1A",
};

const concerns = [
  { img: "/img/Page 2-1.png", no: "01", title: "痘痘反覆出現",       en: "Persistent Acne",              desc: "出油、發炎、細菌、角質代謝——肌膚屏障只要一個環節失衡，痘痘就難以真正穩定。" },
  { img: "/img/Page 2-2.png", no: "02", title: "保養品買再多也沒用",  en: "Skincare Shopping, No Results", desc: "先把皮膚養回健康，才能讓保養品發揮效用。角質厚薄均衡才是吸收的關鍵。" },
  { img: "/img/Page 2-3.png", no: "03", title: "越保養越敏感",        en: "More Skincare, More Sensitive", desc: "做臉、煥膚、雷射都嘗試過，真正有效的保養是從肌膚生理出發。" },
  { img: "/img/Page 2-4.png", no: "04", title: "想瘦小臉、不想忍痛", en: "Slimming Without Pain",         desc: "透過非侵入式的儀器護理，科技加持，安全溫和又看得見效果。" },
];

const steps = [
  { num: "01", title: "評估你的肌膚屬性",    desc: "透過專業檢測與分析，同時評估肌膚耐受度與當下狀態，再量身規劃最適合的客製化照護方案。" },
  { num: "02", title: "以調理・養護為前提",  desc: "不追求激進手段，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。" },
  { num: "03", title: "守護肌膚・讓好狀態常在", desc: "肌膚達到理想狀態後，我們專注守護，讓亮澤與彈性長久可見。" },
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
  { img: "/img/Page 7-1.png", icon: <LuClipboardList size={20} />, title: "專業肌膚檢測", desc: "每次療程前完整評估膚況" },
  { img: "/img/Page 7-2.jpg", icon: <LuLeaf size={20} />,          title: "溫和成分配方", desc: "精選安全有效成分，低刺激" },
  { img: "/img/Page 7-3.png", icon: <LuSparkles size={20} />,      title: "客製化方案",   desc: "沒有千篇一律的護理流程" },
  { img: "/img/Page 7-4.png", icon: <LuFlaskConical size={20} />,  title: "科技儀器輔助", desc: "效果加乘且安全可靠" },
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

function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-light px-4 py-1.5 rounded-full mb-5"
      style={{ backgroundColor: C.coralDim, color: C.coral, border: `1px solid rgba(217,123,108,0.2)` }}>
      <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: C.coral }} />
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: "var(--font-noto-serif-tc), Noto Serif TC, Georgia, serif" }}>

      {/* ══ SECTION 1 — Hero ══ */}
      <section className="min-h-screen flex flex-col" style={{ backgroundColor: C.white }}>
        <main className="flex-1 flex flex-col lg:flex-row">

          {/* Left */}
          <div className="flex flex-col px-8 sm:px-12 lg:px-16 pt-10 pb-12 lg:pt-14 lg:pb-14 lg:w-[56%]">

            {/* Nav */}
            <div className="flex items-center justify-between mb-14 lg:mb-20">
              <Image src="/img/9skin logo.png" alt="9skin 玖膚" width={140} height={52} className="h-11 w-auto object-contain"
                style={{ filter: `sepia(1) saturate(1.2) hue-rotate(320deg) brightness(0.65)` }} />
              <div className="hidden sm:flex items-center gap-6">
                {["服務項目", "療程說明", "成效見證", "聯絡我們"].map(item => (
                  <span key={item} className="text-xs font-light cursor-pointer transition-opacity hover:opacity-100"
                    style={{ color: C.muted, letterSpacing: "0.08em" }}>{item}</span>
                ))}
              </div>
            </div>

            {/* Hero content */}
            <div className="flex-1 flex flex-col justify-center">
              <PillTag>Brand Introduction · 品牌介紹</PillTag>

              <h1 className="font-light leading-[1.2] mb-6"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", letterSpacing: "0.02em", color: C.dark }}>
                養膚，是一件<br />
                <em className="not-italic" style={{ color: C.coral }}>更深、更長遠</em><br />
                的事
              </h1>

              <p className="text-base lg:text-[17px] font-light leading-loose mb-3 max-w-lg" style={{ color: C.muted }}>
                我們像管理資產一樣，陪你管理「顏值」，替你規劃專屬保養計畫。
              </p>
              <p className="text-base lg:text-[17px] font-light leading-loose max-w-lg" style={{ color: C.muted }}>
                打造溫馨、寬敞的開放式諮詢空間，讓每位顧客享有專屬的私密與安心感。
              </p>

              <div className="flex items-center gap-3 mt-10">
                <button className="px-8 py-3.5 text-sm font-light tracking-wider text-white rounded-full transition-opacity hover:opacity-85"
                  style={{ backgroundColor: C.coral, letterSpacing: "0.1em" }}>
                  立即諮詢
                </button>
                <button className="flex items-center gap-1.5 px-6 py-3.5 text-sm font-light tracking-wider rounded-full border transition-colors"
                  style={{ color: C.coral, borderColor: "rgba(217,123,108,0.3)", letterSpacing: "0.1em" }}>
                  了解更多 <LuChevronRight size={13} />
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 mt-10 pt-8" style={{ borderTop: `1px solid ${C.border}` }}>
                {[
                  { num: "500+", label: "滿意顧客" },
                  { num: "2", label: "門市據點" },
                  { num: "7", label: "護理步驟" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-light mb-0.5" style={{ color: C.coral }}>{s.num}</p>
                    <p className="text-[11px] font-light" style={{ color: C.muted }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:hidden w-full" style={{ maxHeight: 440, overflow: "hidden" }}>
            <Image src="/img/Page 1.JPG" alt="9skin" width={1206} height={2130} className="w-full h-full object-cover object-top" priority />
          </div>
          <div className="hidden lg:block relative flex-1" style={{ borderRadius: "40px 0 0 40px", overflow: "hidden", margin: "24px 0 24px 0" }}>
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_15%]" priority />
            {/* Floating tag */}
            <div className="absolute bottom-8 left-8 rounded-2xl px-5 py-3.5"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)" }}>
              <p className="text-[10px] tracking-[0.18em] uppercase mb-0.5 font-light" style={{ color: C.coral }}>Locations</p>
              <p className="text-sm font-light" style={{ color: C.dark }}>台北 · 高雄 雙店服務</p>
            </div>
          </div>
        </main>

        {/* Location footer */}
        <footer className="py-4 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-16"
          style={{ backgroundColor: C.blush, borderTop: `1px solid ${C.border}` }}>
          {["台北店：位於松江南京站步行 3 分鐘", "高雄店：位於巨蛋站步行 6 分鐘"].map(loc => (
            <div key={loc} className="flex items-center gap-2">
              <LuMapPin size={12} color={C.coral} />
              <span className="text-xs font-light" style={{ color: C.muted, letterSpacing: "0.06em" }}>{loc}</span>
            </div>
          ))}
        </footer>
      </section>

      {/* ══ SECTION 2 — Skin Concerns ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="text-center mb-14">
            <PillTag>Skin Concerns · 肌膚困擾</PillTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light mb-3" style={{ letterSpacing: "0.03em" }}>
              常見的肌膚困擾，你中了幾項？
            </h2>
            <p className="text-sm font-light" style={{ color: C.muted }}>
              How many of these common skin concerns do you struggle with?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {concerns.map((c) => (
              <div key={c.no} className="group rounded-3xl overflow-hidden"
                style={{ backgroundColor: C.white, boxShadow: "0 4px 24px rgba(61,40,32,0.07)" }}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
                  <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, transparent 30%, rgba(46,31,26,0.65) 100%)" }} />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: C.coral }}>
                    <span className="text-[10px] font-light text-white">{c.no}</span>
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <p className="text-[10px] tracking-[0.22em] uppercase mb-1 font-light" style={{ color: "rgba(253,242,238,0.7)" }}>{c.en}</p>
                    <p className="text-base font-light text-white" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm font-light leading-[1.95]" style={{ color: C.muted }}>{c.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4" style={{ color: C.coral }}>
                    <span className="text-xs font-light" style={{ letterSpacing: "0.1em" }}>了解更多</span>
                    <LuChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-8 rounded-3xl px-8 sm:px-12 py-6 text-center"
            style={{ background: `linear-gradient(135deg, ${C.coral} 0%, #C4614F 100%)` }}>
            <p className="text-sm font-light leading-relaxed text-white" style={{ letterSpacing: "0.04em" }}>
              這些問題看似獨立，實際上都指向同一個核心：
              <span style={{ color: "rgba(255,255,255,0.75)" }}> 肌膚缺乏正確的深層調理與系統化管理</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — Empathy ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.blush }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-20 lg:items-start">

            <div className="lg:w-[42%] shrink-0 mb-12 lg:mb-0">
              <PillTag>Skin Problems · 常見疑問</PillTag>
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-5" style={{ letterSpacing: "0.03em" }}>
                變美的路上，<br />你也正在<br />
                <em className="not-italic" style={{ color: C.coral }}>經歷這些嗎？</em>
              </h2>
              <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: C.rose }} />
              <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>
                問題的核心不在於你不夠努力，而是缺少對肌膚的正確理解與專業指引。真正的改變，從了解肌膚狀態開始。
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {[
                { text: "保養品越買越多，毛孔卻沒有變細，反而更明顯", coral: false },
                { text: "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心", coral: true },
                { text: "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定", coral: false },
                { text: "明明用的是高價保養，肌膚卻還是黯淡、沒精神", coral: true },
                { text: "不適合自己的課程與產品，讓皮膚越照顧越敏感", coral: false },
              ].map((b, i) => (
                <div key={i} className="rounded-2xl px-5 py-4 text-sm font-light leading-relaxed"
                  style={{
                    backgroundColor: b.coral ? C.coral : C.white,
                    color: b.coral ? "rgba(255,255,255,0.95)" : C.text,
                    boxShadow: b.coral ? "0 4px 20px rgba(217,123,108,0.25)" : "0 2px 12px rgba(61,40,32,0.06)",
                    letterSpacing: "0.03em",
                    marginLeft: i % 2 === 1 ? "auto" : 0,
                    maxWidth: "88%",
                  }}>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — Three Keys ══ */}
      <section style={{ backgroundColor: C.white }}>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:hidden w-full" style={{ aspectRatio: "16/9", position: "relative" }}>
            <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative lg:w-[46%]" style={{ minHeight: 560 }}>
            <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover object-center" />
          </div>

          <div className="flex-1 px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <PillTag>Our Method · 三大關鍵</PillTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug mb-10"
              style={{ letterSpacing: "0.03em" }}>
              想要彈潤透亮的水煮蛋肌？<br />
              <em className="not-italic" style={{ color: C.coral }}>從這三個關鍵開始</em>
            </h2>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={step.num} className="rounded-2xl p-5 flex gap-4"
                  style={{ backgroundColor: i === 0 ? C.coralDim : C.bg, border: `1px solid ${i === 0 ? "rgba(217,123,108,0.2)" : C.borderLt}` }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: i === 0 ? C.coral : C.white, border: `1px solid ${i === 0 ? C.coral : C.border}` }}>
                    <span className="text-[10px] font-light" style={{ color: i === 0 ? C.white : C.muted }}>{step.num}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-light mb-1.5" style={{ color: i === 0 ? C.coral : C.dark, letterSpacing: "0.04em" }}>{step.title}</h3>
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
            <PillTag>Comparison · 為什麼選擇我們</PillTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-light" style={{ letterSpacing: "0.04em" }}>為什麼選擇玖膚？</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "醫美療程", featured: false,
                cost: "$ 5,000 以上", time: "約 1hr / 次",
                feature: "以雷射為主，對敏感肌或需手工針清的痘痘肌非最佳首選",
                result: "快速立即見效，但長期施作易敏感",
              },
              {
                label: "玖膚皮膚管理", featured: true,
                cost: "$ 2,000 ~ 3,000", time: "60～120 分 / 次",
                feature: "專業肌膚檢測・客製化護理・科技儀器與手法並用",
                result: "膚質真正改善，達到透亮水煮蛋肌",
              },
              {
                label: "傳統美容", featured: false,
                cost: "$ 2,000 左右", time: "60～120 分 / 次",
                feature: "粉刺清潔與基礎保濕為核心，流程固定",
                result: "基礎清潔保濕，質地改善有限",
              },
            ].map((col) => (
              <div key={col.label} className="rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: col.featured ? C.coral : C.white,
                  boxShadow: col.featured ? "0 8px 40px rgba(217,123,108,0.25)" : "0 2px 16px rgba(61,40,32,0.06)",
                  transform: col.featured ? "scale(1.02)" : "scale(1)",
                }}>
                <div className="py-5 px-6 text-center" style={{ borderBottom: `1px solid ${col.featured ? "rgba(255,255,255,0.2)" : C.borderLt}` }}>
                  {col.featured && (
                    <div className="flex justify-center mb-2">
                      <span className="text-[9px] tracking-widest px-2.5 py-0.5 rounded-full font-light bg-white" style={{ color: C.coral }}>
                        推薦選擇
                      </span>
                    </div>
                  )}
                  <p className="text-base font-light tracking-wider" style={{ color: col.featured ? "white" : C.text }}>{col.label}</p>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "費用", val: col.cost },
                    { label: "時間", val: col.time },
                    { label: "特色", val: col.feature },
                    { label: "成效", val: col.result },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="text-[10px] tracking-[0.22em] uppercase mb-1 font-light"
                        style={{ color: col.featured ? "rgba(255,255,255,0.6)" : C.coral }}>{row.label}</p>
                      <p className="text-sm font-light leading-relaxed"
                        style={{ color: col.featured ? "rgba(255,255,255,0.9)" : C.muted }}>{row.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — Korean Care ══ */}
      <section style={{ backgroundColor: C.blush }}>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:hidden w-full" style={{ aspectRatio: "16/9", position: "relative" }}>
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative lg:w-[42%]" style={{ minHeight: 560 }}>
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover object-center" />
          </div>

          <div className="flex-1 px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <PillTag>Korean Deep Care · 韓式深層保養</PillTag>
            <h2 className="text-2xl sm:text-3xl font-light mb-2" style={{ letterSpacing: "0.04em", color: C.dark }}>
              7 步驟韓式深層護理
            </h2>
            <p className="text-sm font-light mb-10" style={{ color: C.muted }}>Step-by-step Professional Skin Care</p>

            <div className="space-y-0">
              {skinCareItems.map((item, i) => (
                <div key={item.num}>
                  <div className="flex items-start gap-4 py-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: C.white, border: `1px solid ${C.border}` }}>
                      <span className="text-[10px] font-light" style={{ color: C.coral }}>{item.num}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-light mb-0.5" style={{ color: C.dark, letterSpacing: "0.06em" }}>{item.title}</p>
                      <p className="text-xs font-light" style={{ color: C.muted }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < skinCareItems.length - 1 && <div className="ml-12 h-px" style={{ backgroundColor: C.border }} />}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl px-6 py-4 text-center"
              style={{ backgroundColor: C.white, border: `1px solid ${C.border}` }}>
              <p className="text-xs font-light" style={{ color: C.muted, letterSpacing: "0.06em" }}>
                完整 7 步驟 · 每次療程約 90～120 分鐘 · 依膚況客製調整
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 7 — Four Commitments ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center text-center mb-14">
            <PillTag>Our Promise · 玖膚承諾</PillTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light" style={{ letterSpacing: "0.04em" }}>
              玖膚水煮蛋肌養成術
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {commitments.map((item, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden"
                style={{ backgroundColor: C.bg, boxShadow: "0 2px 16px rgba(61,40,32,0.07)" }}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,31,26,0.7) 0%, transparent 55%)" }} />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-white"
                    style={{ color: C.coral }}>
                    {item.icon}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-light mb-1" style={{ color: C.dark, letterSpacing: "0.05em" }}>{item.title}</p>
                  <p className="text-xs font-light leading-relaxed" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 8 — Mission ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.blush }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            <div className="flex-1">
              <PillTag>Our Mission · 品牌理念</PillTag>
              <Image src="/img/9skin logo.png" alt="9skin" width={120} height={45} className="h-10 w-auto object-contain mb-5"
                style={{ filter: `sepia(1) saturate(1.2) hue-rotate(320deg) brightness(0.65)` }} />
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-5" style={{ letterSpacing: "0.03em" }}>
                美麗不只是外表，<br />
                <em className="not-italic" style={{ color: C.coral }}>是一種長期投資</em>
              </h2>
              <div className="w-12 h-1.5 rounded-full mb-6" style={{ backgroundColor: C.rose }} />
              <div className="space-y-4 mb-8">
                <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。</p>
                <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>我們融合韓式皮膚管理哲學與現代科技儀器，提供真正系統化、個人化的肌膚照護體驗。</p>
              </div>
              <div className="flex gap-8">
                {[
                  { num: "2", label: "間門市" },
                  { num: "500+", label: "滿意顧客" },
                  { num: "7", label: "護理步驟" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-light mb-0.5" style={{ color: C.coral }}>{s.num}</p>
                    <p className="text-[11px] font-light" style={{ color: C.muted }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[46%] flex flex-col gap-3 px-4 sm:px-8 lg:px-0">
              <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src="/img/Page 8-1.JPG" alt="9skin 空間" fill className="object-cover" />
              </div>
              <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
                <Image src="/img/Page 8-2.jpg" alt="9skin 創辦人" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 9 — Management System ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.white }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <PillTag>System · 皮膚管理系統</PillTag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light mb-2" style={{ letterSpacing: "0.03em" }}>科學化肌膚管理系統</h2>
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
                    style={{ backgroundColor: i === 0 ? C.coral : C.bg, border: `1px solid ${i === 0 ? C.coral : C.border}` }}>
                    <span className="text-[10px] font-light" style={{ color: i === 0 ? C.white : C.coral }}>{step.num}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 my-1" style={{ backgroundColor: C.border, minHeight: 24 }} />}
                </div>
                <div className="pb-6 pt-1">
                  <p className="text-sm font-light mb-0.5" style={{ color: C.dark }}>{step.title}</p>
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
                {i < 4 && <div className="absolute top-5 left-[55%] right-[-5%] h-px z-0" style={{ backgroundColor: C.border }} />}
                <div className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 mb-3"
                  style={{ backgroundColor: i === 0 ? C.coral : C.bg, border: `1px solid ${i === 0 ? C.coral : C.border}` }}>
                  <span className="text-[10px] font-light" style={{ color: i === 0 ? C.white : C.coral }}>{step.num}</span>
                </div>
                <p className="text-xs font-light text-center mb-0.5" style={{ color: C.dark }}>{step.title}</p>
                <p className="text-[10px] font-light text-center" style={{ color: C.muted }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
              { title: "精準分區護理", desc: "不同肌膚區域有不同問題，針對各區域制定最適合的護理方式" },
              { title: "長期膚況追蹤", desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
            ].map((item, i) => (
              <div key={item.title} className="rounded-2xl p-6"
                style={{
                  backgroundColor: i === 1 ? C.coral : C.bg,
                  border: `1px solid ${i === 1 ? C.coral : C.border}`,
                }}>
                <div className="w-8 h-1 rounded-full mb-4"
                  style={{ backgroundColor: i === 1 ? "rgba(255,255,255,0.5)" : C.coral }} />
                <h3 className="text-sm font-light mb-2" style={{ color: i === 1 ? "white" : C.dark, letterSpacing: "0.06em" }}>{item.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: i === 1 ? "rgba(255,255,255,0.8)" : C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 10 — Before & After ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <PillTag>Results · 成效見證</PillTag>
            <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>真實顧客 · Before &amp; After</h2>
            <p className="text-sm font-light mt-2" style={{ color: C.muted }}>Real customers, real results. No filters.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {baReviews.map((item) => (
              <div key={item.img} className="group relative rounded-2xl overflow-hidden card-wrap" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,31,26,0.7) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
                  <p className="text-[10px] font-light text-center text-white tracking-wider opacity-80">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-light mt-6" style={{ color: C.muted }}>
            * 以上成效因個人膚況而異
          </p>
        </div>
      </section>

      {/* ══ SECTION 11 — KOL Reviews ══ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.blush }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-12 text-center">
          <PillTag>Reviews · 口碑見證</PillTag>
          <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>KOL 親身體驗</h2>
          <p className="text-sm font-light mt-2" style={{ color: C.muted }}>Real reviews from influencers who experienced 9skin</p>
        </div>

        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-left flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow1, ...kolRow1].map((item, i) => (
              <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden" style={{ width: 180, height: 320 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer overflow-hidden mt-3">
          <div className="marquee-track-right flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((item, i) => (
              <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden" style={{ width: 180, height: 320 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ backgroundColor: C.footer }}>
        <div className="py-14 px-6 sm:px-8 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 className="text-xl sm:text-2xl font-light mb-3 text-white" style={{ letterSpacing: "0.04em" }}>
            準備好開始你的肌膚管理之旅了嗎？
          </h2>
          <p className="text-sm font-light mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>立即預約免費肌膚諮詢</p>
          <button className="px-10 py-4 text-sm font-light tracking-wider rounded-full transition-opacity hover:opacity-85"
            style={{ backgroundColor: C.coral, color: C.white, letterSpacing: "0.12em" }}>
            立即預約諮詢
          </button>
        </div>
        <div className="py-7 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/img/9skin logo.png" alt="9skin" width={100} height={38} className="h-8 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1) opacity(0.4)" }} />
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {["台北店：松江南京站步行 3 分鐘", "高雄店：巨蛋站步行 6 分鐘"].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <LuMapPin size={11} color={C.coral} />
                <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.4)" }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
