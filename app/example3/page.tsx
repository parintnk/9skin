"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin } from "react-icons/lu";

/* ─── Dark Luxury — La Mer / SK-II inspired ──────────────────── */
const C = {
  bg:       "#0B0B09",
  bgCard:   "#111110",
  bgMid:    "#161614",
  text:     "#EDE8DE",
  muted:    "rgba(237,232,222,0.45)",
  gold:     "#C4A46B",
  goldSoft: "rgba(196,164,107,0.15)",
  goldBord: "rgba(196,164,107,0.25)",
  line:     "rgba(237,232,222,0.08)",
  lineMd:   "rgba(237,232,222,0.13)",
};

const concerns = [
  { img: "/img/Page 2-1.png", no: "01", title: "痘痘反覆出現",       en: "Persistent Acne",              desc: "出油、發炎、細菌、角質代謝——肌膚屏障只要一個環節失衡，痘痘就難以真正穩定。與其反覆「處理痘痘」，不如把皮膚的整體狀態調回健康。" },
  { img: "/img/Page 2-2.png", no: "02", title: "保養品買再多也沒用",  en: "Skincare Shopping, No Results", desc: "用的是專櫃、醫美等級保養，肌膚卻不透亮？角質太厚吸收進不去，角質太薄水留不住。先把皮膚養回健康，才能讓保養品發揮效用。" },
  { img: "/img/Page 2-3.png", no: "03", title: "越保養越敏感",        en: "More Skincare, More Sensitive", desc: "做臉、煥膚、雷射都嘗試過，皮膚卻越來越紅、越來越薄？真正有效的保養是從肌膚生理出發，選對現在「適合你」的照護方式。" },
  { img: "/img/Page 2-4.png", no: "04", title: "想瘦小臉、不想忍痛", en: "Face Slimming Without Pain",    desc: "透過非侵入式的儀器護理，科技加持，安全溫和又看得見效果。從表層到深層喚醒肌膚支撐力，輪廓更立體。" },
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
  { img: "/img/Page 7-1.png", icon: <LuClipboardList size={18} />, title: "專業肌膚檢測", desc: "每次療程前完整評估膚況，確保方向精準有效" },
  { img: "/img/Page 7-2.jpg", icon: <LuLeaf size={18} />,          title: "溫和成分配方", desc: "精選安全有效成分，減低刺激，適合敏感肌" },
  { img: "/img/Page 7-3.png", icon: <LuSparkles size={18} />,      title: "客製化方案",   desc: "依照個人膚質量身打造，無千篇一律的流程" },
  { img: "/img/Page 7-4.png", icon: <LuFlaskConical size={18} />,  title: "科技儀器輔助", desc: "結合先進儀器與手技，效果加乘且安全可靠" },
];

const baReviews = [
  { img: "/img/BAreview/Page 10-1.png", title: "韓式深層保養" },
  { img: "/img/BAreview/Page 10-2.png", title: "再生光" },
  { img: "/img/BAreview/Page 10-3.png", title: "草藥煥膚" },
  { img: "/img/BAreview/Page 10-4.png", title: "玖式微針" },
  { img: "/img/BAreview/Page 10-5.png", title: "韓式+再生光" },
  { img: "/img/BAreview/Page 10-6.png", title: "韓式+草藥煥膚" },
  { img: "/img/BAreview/Page 10-7.png", title: "無痕水光" },
  { img: "/img/BAreview/Page 10-8.png", title: "童顏外泌體" },
  { img: "/img/BAreview/Page 10-9.png", title: "脂肪神器" },
  { img: "/img/BAreview/Page 10-10.png", title: "緊緻神槍" },
];

const kolRow1 = [
  { src: "/img/Page 11 KOL Reviews/Page ‍11-1-1.png", alt: "KOL 1" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-2.png", alt: "KOL 2" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-3.png", alt: "KOL 3" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-4.png", alt: "KOL 4" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-1.png", alt: "KOL 5" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-2.png", alt: "KOL 6" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-3.png", alt: "KOL 7" },
];
const kolRow2 = [
  { src: "/img/Page 11 KOL Reviews/Page 11-2-4.png", alt: "KOL 8" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-1.png", alt: "KOL 9" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-2.png", alt: "KOL 10" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-3.png", alt: "KOL 11" },
  { src: "/img/Page 11 KOL Reviews/Page 11-3-4.png", alt: "KOL 12" },
  { src: "/img/Page 11 KOL Reviews/Page 11-4-1.png", alt: "KOL 13" },
  { src: "/img/Page 11 KOL Reviews/Page 11-4-2.png", alt: "KOL 14" },
];

export default function Page() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: "var(--font-noto-serif-tc), Noto Serif TC, Georgia, serif" }}>

      {/* ══ 01 HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        {/* Left — text panel */}
        <div className="relative z-10 flex flex-col px-8 sm:px-12 lg:px-16 pt-10 pb-14 lg:pt-14 lg:pb-16 lg:w-[52%] justify-between"
          style={{ backgroundColor: C.bg }}>

          {/* Nav */}
          <div className="flex items-center justify-between mb-16 lg:mb-0">
            <Image src="/img/9skin logo.png" alt="9skin" width={130} height={48} className="h-9 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1) opacity(0.8)" }} />
            <div className="hidden sm:flex gap-7">
              {["服務項目", "療程說明", "成效見證", "預約"].map(i => (
                <span key={i} className="text-xs font-light cursor-pointer transition-opacity hover:opacity-100"
                  style={{ color: C.muted, letterSpacing: "0.1em" }}>{i}</span>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center py-8 lg:py-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: C.gold }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ color: C.gold }}>
                Skin Management Clinic
              </span>
            </div>

            <h1 className="font-light leading-[1.1] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: "0.01em" }}>
              養膚，是一件<br />
              <em className="not-italic" style={{ color: C.gold }}>更深、更長遠</em><br />
              的事
            </h1>

            <p className="text-[15px] font-light leading-[2] max-w-sm mb-10" style={{ color: C.muted }}>
              我們像管理資產一樣，陪你管理「顏值」。替你規劃專屬保養計畫，成為你風格與生活的顏值資產管理顧問。
            </p>

            <div className="flex items-center gap-4">
              <button className="px-8 py-4 text-xs font-light tracking-[0.18em] rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: C.gold, color: C.bg }}>
                立即諮詢
              </button>
              <button className="px-8 py-4 text-xs font-light tracking-[0.18em] rounded-full border transition-opacity hover:opacity-60"
                style={{ borderColor: C.lineMd, color: C.muted }}>
                了解更多
              </button>
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8" style={{ borderTop: `1px solid ${C.line}` }}>
            {["台北 · 松江南京站步行 3 分鐘", "高雄 · 巨蛋站步行 6 分鐘"].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <LuMapPin size={11} color={C.gold} />
                <span className="text-xs font-light" style={{ color: C.muted, letterSpacing: "0.06em" }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative lg:flex-1">
          {/* Mobile: rounded card */}
          <div className="lg:hidden mx-6 mb-10 relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_12%]" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,9,0.55) 0%, transparent 55%)" }} />
          </div>
          {/* Desktop: full bleed */}
          <div className="hidden lg:block absolute inset-0">
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_12%]" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(11,11,9,0.35) 0%, transparent 40%)" }} />
            <div className="absolute left-0 top-[15%] bottom-[15%] w-px" style={{ backgroundColor: C.goldBord }} />
          </div>
        </div>
      </section>

      {/* ══ 02 SKIN CONCERNS ═════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bgMid }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">

          {/* Header */}
          <div className="flex items-end justify-between mb-14" style={{ borderBottom: `1px solid ${C.line}`, paddingBottom: "2rem" }}>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.gold }}>Skin Concerns</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light" style={{ letterSpacing: "0.03em" }}>
                常見的肌膚困擾
              </h2>
            </div>
            <p className="hidden sm:block text-sm font-light text-right" style={{ color: C.muted }}>你中了幾項？</p>
          </div>

          {/* 4 concern cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {concerns.map((c) => (
              <div key={c.no} className="group overflow-hidden" style={{ borderRadius: 4 }}>
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,9,0.9) 0%, rgba(11,11,9,0.2) 60%, transparent 100%)" }} />
                  {/* Gold number */}
                  <div className="absolute top-4 left-5">
                    <span className="text-xs font-light" style={{ color: C.gold, letterSpacing: "0.2em" }}>{c.no}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] tracking-[0.25em] uppercase mb-1.5 font-light" style={{ color: C.gold }}>{c.en}</p>
                    <p className="text-lg font-light" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                  </div>
                </div>
                {/* Description */}
                <div className="px-5 py-5" style={{ backgroundColor: C.bgCard }}>
                  <p className="text-xs font-light leading-[2]" style={{ color: C.muted }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Insight bar */}
          <div className="mt-10 flex items-center gap-5 px-6 py-5 rounded-sm"
            style={{ backgroundColor: C.goldSoft, border: `1px solid ${C.goldBord}` }}>
            <div className="w-px h-8 shrink-0" style={{ backgroundColor: C.gold }} />
            <p className="text-sm font-light" style={{ color: C.muted, letterSpacing: "0.04em" }}>
              這些問題看似獨立，實際上都指向同一個核心：
              <em className="not-italic" style={{ color: C.text }}> 肌膚缺乏正確的深層調理與系統化管理</em>
            </p>
          </div>
        </div>
      </section>

      {/* ══ 03 EMPATHY ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-10 font-light" style={{ color: C.gold }}>
            Skin Problems · 你也正在經歷這些嗎
          </p>

          <div className="space-y-5 mb-14">
            {[
              "保養品越買越多，毛孔卻沒有變細，反而更明顯",
              "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心",
              "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定",
              "明明用的是高價保養，肌膚卻還是黯淡、沒精神",
            ].map((text, i) => (
              <div key={i} className="inline-block w-full px-6 py-4 rounded-full"
                style={{ backgroundColor: i % 2 === 0 ? C.bgCard : C.bgMid, border: `1px solid ${C.line}` }}>
                <p className="text-sm font-light" style={{ color: C.muted, letterSpacing: "0.04em" }}>「{text}」</p>
              </div>
            ))}
          </div>

          <div className="w-px h-12 mx-auto mb-8" style={{ backgroundColor: C.goldBord }} />
          <p className="text-base sm:text-lg font-light leading-[2]" style={{ color: C.muted }}>
            問題的核心不在於你不夠努力，<br />
            而是缺少對肌膚的正確理解與
            <em className="not-italic" style={{ color: C.text }}> 專業指引</em>
          </p>
        </div>
      </section>

      {/* ══ 04 THREE KEYS ════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bgMid }}>
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative lg:w-[46%]">
            <div className="lg:hidden mx-6 mt-6 mb-0 relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover" />
            </div>
            <div className="hidden lg:block absolute inset-0">
              <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(22,22,20,0.4) 100%)" }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.gold }}>Our Method · 三大關鍵</p>
            <h2 className="text-2xl sm:text-3xl font-light mb-12" style={{ letterSpacing: "0.04em" }}>
              想要彈潤透亮的水煮蛋肌？
            </h2>

            {[
              { num: "01", title: "評估你的肌膚屬性", desc: "透過專業檢測與分析，評估肌膚耐受度與當下狀態，再量身規劃最適合的客製化照護方案。" },
              { num: "02", title: "以調理・養護為前提", desc: "不追求激進手段，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。" },
              { num: "03", title: "守護肌膚・讓好狀態常在", desc: "肌膚達到理想狀態後，我們專注守護，讓亮澤與彈性長久可見。" },
            ].map((step, i) => (
              <div key={step.num} className="flex gap-5 mb-8 last:mb-0">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ border: `1px solid ${C.goldBord}`, backgroundColor: C.goldSoft }}>
                  <span className="text-[10px] font-light" style={{ color: C.gold }}>{step.num}</span>
                </div>
                <div className="flex-1 pt-1.5" style={{ borderBottom: i < 2 ? `1px solid ${C.line}` : "none", paddingBottom: i < 2 ? "2rem" : 0 }}>
                  <p className="text-base font-light mb-2" style={{ letterSpacing: "0.04em" }}>{step.title}</p>
                  <p className="text-xs font-light leading-[2]" style={{ color: C.muted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 05 WHY CHOOSE US ═════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.gold }}>Comparison</p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light" style={{ letterSpacing: "0.04em" }}>為什麼選擇玖膚？</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "醫美療程",     f: false, cost: "$5,000 以上",   time: "約 1hr / 次",      feat: "以雷射為主，對敏感肌非最佳首選",           result: "快速見效，長期施作易敏感" },
              { label: "玖膚皮膚管理", f: true,  cost: "$2,000～3,000", time: "60～120 分 / 次",   feat: "專業肌膚檢測・客製化護理・科技手法並用",    result: "膚質真正改善，達到透亮水煮蛋肌" },
              { label: "傳統美容",     f: false, cost: "$2,000 左右",   time: "60～120 分 / 次",   feat: "粉刺清潔與基礎保濕為核心",                 result: "基礎清潔保濕，質地改善有限" },
            ].map((col) => (
              <div key={col.label} className="rounded-sm overflow-hidden"
                style={{ backgroundColor: col.f ? C.goldSoft : C.bgCard, border: `1px solid ${col.f ? C.goldBord : C.line}` }}>
                <div className="py-5 px-6 text-center" style={{ borderBottom: `1px solid ${col.f ? C.goldBord : C.line}` }}>
                  {col.f && <p className="text-[9px] tracking-[0.3em] uppercase mb-2 font-light" style={{ color: C.gold }}>推薦選擇</p>}
                  <p className="text-base font-light tracking-wider" style={{ color: col.f ? C.gold : C.muted }}>{col.label}</p>
                </div>
                <div className="p-6 space-y-5">
                  {[{ k: "費用", v: col.cost }, { k: "時間", v: col.time }, { k: "特色", v: col.feat }, { k: "成效", v: col.result }].map(row => (
                    <div key={row.k}>
                      <p className="text-[10px] tracking-[0.2em] uppercase mb-1.5 font-light" style={{ color: C.gold }}>{row.k}</p>
                      <p className="text-xs font-light leading-relaxed" style={{ color: col.f ? C.text : C.muted }}>{row.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 KOREAN CARE ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bgMid }}>
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="relative lg:w-[44%]">
            <div className="lg:hidden mx-6 mt-6 mb-0 relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
            </div>
            <div className="hidden lg:block absolute inset-0">
              <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,22,20,0.5) 0%, transparent 50%)" }} />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-14 lg:py-16">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.gold }}>Korean Deep Care</p>
            <h2 className="text-2xl sm:text-3xl font-light mb-2" style={{ letterSpacing: "0.04em" }}>7 步驟韓式深層護理</h2>
            <p className="text-xs font-light mb-10" style={{ color: C.muted, letterSpacing: "0.1em" }}>Step-by-step Professional Skin Care</p>

            <div>
              {skinCareItems.map((item, i) => (
                <div key={item.num} className="flex items-baseline gap-5 py-3.5" style={{ borderBottom: `1px solid ${C.line}` }}>
                  <span className="text-xs font-light shrink-0 w-7" style={{ color: C.gold }}>{item.num}</span>
                  <span className="text-sm font-light" style={{ color: C.text, letterSpacing: "0.05em" }}>{item.title}</span>
                  <span className="hidden sm:block text-xs font-light ml-auto text-right" style={{ color: C.muted }}>{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-light mt-6" style={{ color: C.muted, letterSpacing: "0.08em" }}>
              完整 7 步驟 · 約 90～120 分鐘 · 依膚況客製調整
            </p>
          </div>
        </div>
      </section>

      {/* ══ 07 FOUR COMMITMENTS ══════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.gold }}>Our Promise · 玖膚承諾</p>
            <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>玖膚水煮蛋肌養成術</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {commitments.map((item, i) => (
              <div key={i} className="group relative overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: 4 }}>
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,9,0.92) 0%, rgba(11,11,9,0.1) 55%, transparent 100%)" }} />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: C.goldSoft, border: `1px solid ${C.goldBord}`, color: C.gold }}>{item.icon}</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-6 h-px mb-3" style={{ backgroundColor: C.gold }} />
                  <p className="text-sm font-light" style={{ letterSpacing: "0.06em" }}>{item.title}</p>
                  <p className="text-[11px] font-light mt-1" style={{ color: C.muted }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 08 MISSION ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bgMid }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-6 font-light" style={{ color: C.gold }}>Our Mission</p>
              <Image src="/img/9skin logo.png" alt="9skin" width={110} height={42} className="h-8 w-auto object-contain mb-6"
                style={{ filter: "brightness(0) invert(1) opacity(0.6)" }} />
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-6" style={{ letterSpacing: "0.03em" }}>
                美麗不只是外表，<br />
                <em className="not-italic" style={{ color: C.gold }}>是一種長期投資</em>
              </h2>
              <div className="w-10 h-px mb-7" style={{ backgroundColor: C.goldBord }} />
              <div className="space-y-4 mb-10">
                <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。</p>
                <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>我們融合韓式皮膚管理哲學與現代科技儀器，為台灣顧客提供真正系統化、個人化的肌膚照護體驗。</p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8" style={{ borderTop: `1px solid ${C.line}` }}>
                {[{ n: "2", l: "間門市" }, { n: "500+", l: "滿意顧客" }, { n: "7", l: "護理步驟" }].map(s => (
                  <div key={s.l} className="text-center">
                    <p className="text-2xl font-light mb-1" style={{ color: C.gold }}>{s.n}</p>
                    <p className="text-[10px] font-light tracking-widest uppercase" style={{ color: C.muted }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-[46%] flex flex-col gap-3 px-4 sm:px-10 lg:px-0">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: 4 }}>
                <Image src="/img/Page 8-1.JPG" alt="9skin 空間" fill className="object-cover" />
              </div>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7", borderRadius: 4 }}>
                <Image src="/img/Page 8-2.jpg" alt="9skin 創辦人" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 09 SYSTEM ════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.gold }}>System · 皮膚管理系統</p>
            <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.03em" }}>科學化肌膚管理系統</h2>
          </div>

          {/* Mobile timeline */}
          <div className="flex flex-col sm:hidden gap-0 mb-12">
            {["肌膚檢測","方案規劃","專業療程","追蹤評估","居家維護"].map((t, i, arr) => (
              <div key={t} className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-light shrink-0"
                    style={{ backgroundColor: i === 0 ? C.goldSoft : "transparent", border: `1px solid ${i === 0 ? C.gold : C.line}`, color: i === 0 ? C.gold : C.muted }}>
                    {String(i+1).padStart(2,"0")}
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 my-1" style={{ backgroundColor: C.line, minHeight: 24 }} />}
                </div>
                <p className="pb-6 pt-2 text-sm font-light" style={{ color: i === 0 ? C.text : C.muted }}>{t}</p>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden sm:flex justify-between mb-12">
            {["肌膚檢測","方案規劃","專業療程","追蹤評估","居家維護"].map((t, i) => (
              <div key={t} className="relative flex flex-col items-center flex-1">
                {i < 4 && <div className="absolute top-[1.1rem] left-[55%] right-[-5%] h-px z-0" style={{ backgroundColor: C.goldBord }} />}
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-light relative z-10 mb-3"
                  style={{ backgroundColor: i === 0 ? C.goldSoft : "transparent", border: `1px solid ${i === 0 ? C.gold : C.line}`, color: i === 0 ? C.gold : C.muted }}>
                  {String(i+1).padStart(2,"0")}
                </div>
                <p className="text-xs font-light text-center" style={{ color: i === 0 ? C.text : C.muted }}>{t}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
              { title: "精準分區護理", desc: "不同肌膚區域有不同問題，針對各區域制定最適合的護理方式" },
              { title: "長期膚況追蹤", desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-sm" style={{ backgroundColor: C.bgCard, border: `1px solid ${C.line}` }}>
                <div className="w-5 h-px mb-5" style={{ backgroundColor: C.gold }} />
                <p className="text-sm font-light mb-2" style={{ color: C.text, letterSpacing: "0.05em" }}>{item.title}</p>
                <p className="text-xs font-light leading-[2]" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10 BEFORE & AFTER ════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bgMid }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex items-end justify-between mb-10" style={{ borderBottom: `1px solid ${C.line}`, paddingBottom: "1.5rem" }}>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase mb-3 font-light" style={{ color: C.gold }}>Results · 成效見證</p>
              <h2 className="text-2xl font-light" style={{ letterSpacing: "0.04em" }}>Before &amp; After</h2>
            </div>
            <p className="hidden sm:block text-xs font-light" style={{ color: C.muted }}>Real customers · No filters</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {baReviews.map(item => (
              <div key={item.img} className="group relative overflow-hidden card-wrap" style={{ aspectRatio: "3/4", borderRadius: 3 }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(11,11,9,0.8) 0%, transparent 55%)" }}>
                  <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] font-light tracking-wider" style={{ color: C.gold }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11 KOL ═══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 mb-12 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: C.gold }}>KOL Reviews · 口碑見證</p>
          <h2 className="text-2xl font-light" style={{ letterSpacing: "0.04em" }}>KOL 親身體驗</h2>
        </div>
        <div className="marquee-outer overflow-hidden mb-3">
          <div className="marquee-track-left flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow1,...kolRow1].map((item,i) => (
              <div key={i} className="relative shrink-0 overflow-hidden" style={{ width: 188, height: 336, borderRadius: 4 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-right flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow2,...kolRow2].map((item,i) => (
              <div key={i} className="relative shrink-0 overflow-hidden" style={{ width: 188, height: 336, borderRadius: 4 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: C.bgCard }}>
        <div className="py-16 px-6 sm:px-10 text-center" style={{ borderBottom: `1px solid ${C.line}` }}>
          <h2 className="text-xl sm:text-2xl font-light mb-3" style={{ letterSpacing: "0.04em" }}>
            準備好開始你的肌膚管理之旅了嗎？
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: C.muted }}>立即預約免費肌膚諮詢，讓我們為你量身打造護理計畫</p>
          <button className="px-10 py-4 text-xs font-light tracking-[0.16em] rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: C.gold, color: C.bg }}>
            立即預約諮詢
          </button>
        </div>
        <div className="py-8 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Image src="/img/9skin logo.png" alt="9skin" width={90} height={34} className="h-7 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1) opacity(0.35)" }} />
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {["台北 · 松江南京站步行 3 分鐘", "高雄 · 巨蛋站步行 6 分鐘"].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <LuMapPin size={10} color={C.gold} />
                <span className="text-xs font-light" style={{ color: C.muted }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
