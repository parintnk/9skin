"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin, LuArrowRight, LuCheck } from "react-icons/lu";

/* ─── Fresh Modern Clinic — Augustinus Bader / premium Korean ─── */
const C = {
  bg:        "#F9F8F5",
  white:     "#FFFFFF",
  dark:      "#161614",
  text:      "#2A2926",
  muted:     "#8C8880",
  subtle:    "#C4C0BA",
  green:     "#2C6E52",
  greenSoft: "rgba(44,110,82,0.08)",
  greenBord: "rgba(44,110,82,0.22)",
  greenMid:  "#F0F6F3",
  border:    "rgba(22,22,20,0.09)",
  borderMd:  "rgba(22,22,20,0.14)",
};

const concerns = [
  { img: "/img/Page 2-1.png", no: "01", title: "痘痘反覆出現",       en: "Persistent acne",               desc: "出油、發炎、細菌、角質代謝——肌膚屏障只要一個環節失衡，痘痘就難以真正穩定。與其反覆「處理痘痘」，不如把皮膚的整體狀態調回健康。" },
  { img: "/img/Page 2-2.png", no: "02", title: "保養品買再多也沒用",  en: "Skincare shopping, no results", desc: "用的是專櫃、醫美等級保養，肌膚卻不透亮？角質太厚吸收進不去，角質太薄水留不住。先把皮膚養回健康才是關鍵。" },
  { img: "/img/Page 2-3.png", no: "03", title: "越保養越敏感",        en: "More skincare, more sensitive", desc: "做臉、煥膚、雷射都嘗試過，皮膚卻越來越紅、越來越薄？真正有效的保養是從肌膚生理出發，選對適合你的照護方式。" },
  { img: "/img/Page 2-4.png", no: "04", title: "想瘦小臉、不想忍痛", en: "Slimming without discomfort",   desc: "透過非侵入式的儀器護理，科技加持，安全溫和又看得見效果。從表層到深層喚醒肌膚支撐力，輪廓更立體。" },
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
  { icon: <LuClipboardList size={20} />, title: "專業肌膚檢測", desc: "每次療程前完整評估膚況，確保護理方向精準有效，而非靠直覺判斷。" },
  { icon: <LuLeaf size={20} />,          title: "溫和成分配方", desc: "精選安全有效成分，減低刺激，適合各種膚質，包含敏感肌。" },
  { icon: <LuSparkles size={20} />,      title: "客製化方案",   desc: "依照個人膚質與需求量身打造，沒有千篇一律的護理流程。" },
  { icon: <LuFlaskConical size={20} />,  title: "科技儀器輔助", desc: "結合先進醫美儀器與手技，效果加乘且安全可靠。" },
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
      <section style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}` }}>

        {/* Topbar */}
        <div className="flex items-center justify-between px-7 sm:px-12 lg:px-16 py-5" style={{ borderBottom: `1px solid ${C.border}` }}>
          <Image src="/img/9skin logo.png" alt="9skin" width={120} height={44} className="h-9 w-auto object-contain"
            style={{ filter: "sepia(1) saturate(0.8) hue-rotate(100deg) brightness(0.38)" }} />
          <div className="hidden sm:flex items-center gap-8">
            {["服務項目", "療程說明", "成效見證", "預約諮詢"].map(item => (
              <span key={item} className="text-xs font-light cursor-pointer hover:opacity-50 transition-opacity"
                style={{ color: C.muted, letterSpacing: "0.1em" }}>{item}</span>
            ))}
          </div>
          <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-xs font-light tracking-[0.12em] rounded-full"
            style={{ backgroundColor: C.green, color: C.white }}>
            立即預約 <LuArrowRight size={12} />
          </button>
        </div>

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">

          {/* Left */}
          <div className="flex flex-col justify-center px-7 sm:px-12 lg:px-16 py-14 lg:py-20"
            style={{ borderRight: `1px solid ${C.border}` }}>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8 self-start"
              style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>
                Skin Management Clinic
              </span>
            </div>

            <h1 className="font-light leading-[1.1] mb-8"
              style={{ fontSize: "clamp(2.6rem, 4.8vw, 4.6rem)", letterSpacing: "0.01em", color: C.dark }}>
              養膚，是一件<br />
              <em className="not-italic" style={{ color: C.green }}>更深、更長遠</em><br />
              的事
            </h1>

            <p className="text-[15px] font-light leading-[2] max-w-sm mb-10" style={{ color: C.muted }}>
              我們像管理資產一樣，陪你管理「顏值」，替你規劃專屬保養計畫，成為你風格與生活的顏值資產管理顧問。
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["專業肌膚檢測", "客製化護理計畫", "韓式深層保養", "雙店服務"].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-light rounded-full"
                  style={{ backgroundColor: C.greenSoft, color: C.green, border: `1px solid ${C.greenBord}` }}>
                  <LuCheck size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 text-sm font-light tracking-[0.1em] rounded-full transition-opacity hover:opacity-85"
                style={{ backgroundColor: C.green, color: C.white }}>
                立即諮詢 <LuArrowRight size={14} />
              </button>
              <button className="px-8 py-4 text-sm font-light tracking-[0.1em] rounded-full border transition-opacity hover:opacity-60"
                style={{ borderColor: C.borderMd, color: C.muted }}>
                了解更多
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Mobile: rounded card */}
            <div className="lg:hidden mx-6 mb-0 relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover" priority />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(22,22,20,0.45) 100%)" }} />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {[{ n: "500+", l: "滿意顧客" }, { n: "2", l: "門市據點" }, { n: "7", l: "護理步驟" }].map(s => (
                  <div key={s.l} className="rounded-xl px-2 py-2.5 text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)" }}>
                    <p className="text-sm font-light mb-0" style={{ color: C.green }}>{s.n}</p>
                    <p className="text-[9px] font-light" style={{ color: C.muted }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop: full bleed */}
            <div className="hidden lg:block absolute inset-0">
              <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover" priority />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(249,248,245,0.5) 100%)" }} />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[{ n: "500+", l: "滿意顧客" }, { n: "2", l: "門市據點" }, { n: "7", l: "護理步驟" }].map(s => (
                  <div key={s.l} className="rounded-2xl px-4 py-3.5 text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)" }}>
                    <p className="text-lg font-light mb-0.5" style={{ color: C.green }}>{s.n}</p>
                    <p className="text-[10px] font-light" style={{ color: C.muted }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 px-7 py-4"
          style={{ backgroundColor: C.greenMid, borderTop: `1px solid ${C.greenBord}` }}>
          {["台北 · 松江南京站步行 3 分鐘", "高雄 · 巨蛋站步行 6 分鐘"].map(loc => (
            <div key={loc} className="flex items-center gap-2">
              <LuMapPin size={12} color={C.green} />
              <span className="text-xs font-light" style={{ color: C.green, letterSpacing: "0.07em" }}>{loc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 02 SKIN CONCERNS ═════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Skin Concerns · 肌膚困擾</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light mb-3" style={{ letterSpacing: "0.03em" }}>
              常見的肌膚困擾，你中了幾項？
            </h2>
            <p className="text-sm font-light" style={{ color: C.muted }}>How many of these do you struggle with?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {concerns.map(c => (
              <div key={c.no} className="group rounded-2xl overflow-hidden bg-white"
                style={{ boxShadow: "0 2px 24px rgba(22,22,20,0.06)" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/8" }}>
                  <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(22,22,20,0.08) 0%, rgba(22,22,20,0.58) 100%)" }} />
                  <div className="absolute top-4 left-5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: C.green }}>
                      <span className="text-[9px] font-light text-white">{c.no}</span>
                    </div>
                    <span className="text-[10px] tracking-[0.2em] font-light text-white/70">{c.en}</span>
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <p className="text-lg font-light text-white" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm font-light leading-[1.95]" style={{ color: C.muted }}>{c.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4" style={{ color: C.green }}>
                    <span className="text-xs font-light" style={{ letterSpacing: "0.1em" }}>了解更多</span>
                    <LuArrowRight size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl px-7 py-5 flex items-center gap-4"
            style={{ backgroundColor: C.greenMid, border: `1px solid ${C.greenBord}` }}>
            <div className="w-1 h-8 rounded-full shrink-0" style={{ backgroundColor: C.green }} />
            <p className="text-sm font-light" style={{ color: C.text, letterSpacing: "0.04em" }}>
              這些問題看似獨立，實際上都指向同一個核心：
              <em className="not-italic" style={{ color: C.green }}> 肌膚缺乏正確的深層調理與系統化管理</em>
            </p>
          </div>
        </div>
      </section>

      {/* ══ 03 EMPATHY ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.white, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:gap-20 items-start">

            <div className="lg:w-[42%] shrink-0 mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
                <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>你也正在經歷這些嗎</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-6" style={{ letterSpacing: "0.03em" }}>
                變美的路上，<br />
                <em className="not-italic" style={{ color: C.green }}>你並不孤單</em>
              </h2>
              <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: C.greenBord }} />
              <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>
                問題的核心不在於你不夠努力，而是缺少對肌膚的正確理解與專業指引。真正的改變，從了解肌膚狀態開始。
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {[
                { t: "保養品越買越多，毛孔卻沒有變細，反而更明顯", hi: false },
                { t: "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心", hi: true },
                { t: "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定", hi: false },
                { t: "明明用的是高價保養，肌膚卻還是黯淡、沒精神", hi: true },
                { t: "不適合自己的課程與產品，讓皮膚越照顧越敏感", hi: false },
              ].map((b, i) => (
                <div key={i} className="rounded-2xl px-5 py-4 text-sm font-light leading-relaxed"
                  style={{
                    backgroundColor: b.hi ? C.greenMid : C.bg,
                    border: `1px solid ${b.hi ? C.greenBord : C.border}`,
                    color: C.text,
                    letterSpacing: "0.03em",
                    marginLeft: i % 2 === 1 ? "auto" : 0,
                    maxWidth: "88%",
                  }}>
                  {b.hi && <span className="mr-2" style={{ color: C.green }}>✦</span>}
                  {b.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 04 THREE KEYS ════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bg }}>
        <div className="flex flex-col lg:flex-row">
          <div className="relative lg:w-[46%]">
            <div className="lg:hidden mx-6 mt-6 mb-0 relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover" />
            </div>
            <div className="hidden lg:block absolute inset-0">
              <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 px-7 sm:px-12 lg:px-14 py-14 lg:py-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Our Method · 三大關鍵</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-10" style={{ letterSpacing: "0.04em" }}>
              想要彈潤透亮的水煮蛋肌？<br />
              <em className="not-italic" style={{ color: C.green }}>從這三個關鍵開始</em>
            </h2>

            {[
              { num: "01", title: "評估你的肌膚屬性",    desc: "透過專業檢測與分析，評估肌膚耐受度與當下狀態，再量身規劃最適合的客製化照護方案。" },
              { num: "02", title: "以調理・養護為前提",  desc: "不追求激進手段，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。" },
              { num: "03", title: "守護肌膚・讓好狀態常在", desc: "肌膚達到理想狀態後，我們專注守護，讓亮澤與彈性長久可見。" },
            ].map((step, i) => (
              <div key={step.num} className="rounded-2xl p-5 flex gap-4 mb-4 last:mb-0"
                style={{ backgroundColor: i === 0 ? C.greenMid : C.white, border: `1px solid ${i === 0 ? C.greenBord : C.border}` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: i === 0 ? C.green : C.bg, border: `1px solid ${i === 0 ? C.green : C.border}` }}>
                  <span className="text-[10px] font-light" style={{ color: i === 0 ? C.white : C.muted }}>{step.num}</span>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-light mb-1.5" style={{ color: i === 0 ? C.green : C.dark, letterSpacing: "0.04em" }}>{step.title}</p>
                  <p className="text-xs font-light leading-[2]" style={{ color: C.muted }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 05 WHY CHOOSE US ═════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.white, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Comparison · 為什麼選擇我們</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light" style={{ letterSpacing: "0.04em" }}>為什麼選擇玖膚？</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "醫美療程",     f: false, cost: "$5,000 以上",   time: "約 1hr / 次",     feat: "以雷射為主，對敏感肌非最佳首選",           result: "快速見效，長期施作易敏感" },
              { label: "玖膚皮膚管理", f: true,  cost: "$2,000～3,000", time: "60～120 分 / 次",  feat: "專業肌膚檢測・客製化護理・科技手法並用",    result: "膚質真正改善，達到透亮水煮蛋肌" },
              { label: "傳統美容",     f: false, cost: "$2,000 左右",   time: "60～120 分 / 次",  feat: "粉刺清潔與基礎保濕為核心",                 result: "基礎清潔保濕，質地改善有限" },
            ].map(col => (
              <div key={col.label} className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: col.f ? C.green : C.bg,
                  border: `1px solid ${col.f ? C.green : C.border}`,
                  transform: col.f ? "scale(1.02)" : "scale(1)",
                  boxShadow: col.f ? "0 8px 40px rgba(44,110,82,0.2)" : "none",
                }}>
                <div className="py-5 px-6 text-center" style={{ borderBottom: `1px solid ${col.f ? "rgba(255,255,255,0.15)" : C.border}` }}>
                  {col.f && <div className="text-[9px] tracking-widest mb-1.5 font-light" style={{ color: "rgba(255,255,255,0.6)" }}>推薦選擇</div>}
                  <p className="text-base font-light tracking-wider" style={{ color: col.f ? C.white : C.text }}>{col.label}</p>
                </div>
                <div className="p-6 space-y-5">
                  {[{ k: "費用", v: col.cost }, { k: "時間", v: col.time }, { k: "特色", v: col.feat }, { k: "成效", v: col.result }].map(row => (
                    <div key={row.k}>
                      <p className="text-[10px] tracking-[0.22em] uppercase mb-1.5 font-light"
                        style={{ color: col.f ? "rgba(255,255,255,0.5)" : C.green }}>{row.k}</p>
                      <p className="text-xs font-light leading-relaxed"
                        style={{ color: col.f ? "rgba(255,255,255,0.85)" : C.muted }}>{row.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 KOREAN CARE ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.dark }}>
        <div className="flex flex-col lg:flex-row">
          <div className="relative lg:w-[44%]">
            <div className="lg:hidden mx-6 mt-6 mb-0 relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
            </div>
            <div className="hidden lg:block absolute inset-0">
              <Image src="/img/Page 6.JPG" alt="韓式保養" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 50%, rgba(22,22,20,0.4) 100%)" }} />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center px-7 sm:px-12 lg:px-14 py-14 lg:py-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 self-start"
              style={{ backgroundColor: "rgba(44,110,82,0.2)", border: "1px solid rgba(44,110,82,0.35)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Korean Deep Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2 text-white" style={{ letterSpacing: "0.04em" }}>7 步驟韓式深層護理</h2>
            <p className="text-xs font-light mb-10" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>Step-by-step Professional Skin Care</p>

            <div>
              {skinCareItems.map((item, i) => (
                <div key={item.num} className="flex items-start gap-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(44,110,82,0.18)", border: "1px solid rgba(44,110,82,0.3)" }}>
                    <span className="text-[9px] font-light" style={{ color: C.green }}>{item.num}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-light text-white mb-0.5" style={{ letterSpacing: "0.05em" }}>{item.title}</p>
                    <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-light mt-6" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>
              完整 7 步驟 · 約 90～120 分鐘 · 依膚況客製調整
            </p>
          </div>
        </div>
      </section>

      {/* ══ 07 COMMITMENTS ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Our Promise · 玖膚承諾</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>玖膚水煮蛋肌養成術</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commitments.map((item, i) => (
              <div key={i} className="rounded-2xl p-7 flex flex-col"
                style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: C.greenSoft, color: C.green }}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-light mb-2" style={{ letterSpacing: "0.06em", color: C.dark }}>{item.title}</h3>
                <p className="text-xs font-light leading-[2]" style={{ color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 08 MISSION ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.greenMid }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
                <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Our Mission · 品牌理念</span>
              </div>
              <Image src="/img/9skin logo.png" alt="9skin" width={110} height={42} className="h-9 w-auto object-contain mb-6"
                style={{ filter: "sepia(1) saturate(0.8) hue-rotate(100deg) brightness(0.38)" }} />
              <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-6" style={{ letterSpacing: "0.03em" }}>
                美麗不只是外表，<br />
                <em className="not-italic" style={{ color: C.green }}>是一種長期投資</em>
              </h2>
              <div className="w-10 h-1 rounded-full mb-7" style={{ backgroundColor: C.greenBord }} />
              <div className="space-y-4 mb-10">
                <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。</p>
                <p className="text-sm font-light leading-[2]" style={{ color: C.muted }}>我們融合韓式皮膚管理哲學與現代科技儀器，為台灣顧客提供真正系統化、個人化的肌膚照護體驗。</p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-7" style={{ borderTop: `1px solid ${C.greenBord}` }}>
                {[{ n: "2", l: "間門市" }, { n: "500+", l: "滿意顧客" }, { n: "7", l: "護理步驟" }].map(s => (
                  <div key={s.l} className="rounded-xl px-4 py-4 text-center bg-white" style={{ border: `1px solid ${C.greenBord}` }}>
                    <p className="text-2xl font-light mb-0.5" style={{ color: C.green }}>{s.n}</p>
                    <p className="text-[10px] font-light" style={{ color: C.muted }}>{s.l}</p>
                  </div>
                ))}
              </div>

              {/* Founder story */}
              <div className="mt-8 rounded-2xl overflow-hidden" style={{ backgroundColor: C.white, border: `1px solid ${C.greenBord}` }}>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-[42%] shrink-0" style={{ minHeight: 320 }}>
                    <Image src="/img/Page 8-2.jpg" alt="玖膚創辦人" fill className="object-cover object-center" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-light tracking-widest"
                        style={{ backgroundColor: C.green, color: C.white }}>
                        創辦人的故事
                      </span>
                      <span className="text-xs font-light tracking-[0.14em]" style={{ color: C.muted }}>The founder&apos;s story</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>小時候的我，是同學眼中的「小黑妹」，因外在曾在學校被取笑。那段經歷讓我深刻感受到自信的重要，也激發我投入保養研究。</p>
                      <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>經過努力與學習，我找到了屬於自己的美，也下定決心：把這項專業技術傳承下去，幫助更多人看見自己最美的一面。</p>
                      <p className="text-sm font-light leading-loose" style={{ color: C.muted }}>正是曾經的低谷，造就了現在的玖膚。因為這段經歷，我知道如何改變自己，也希望每一位走進玖膚的人，都能看見肌膚的改變、重拾自信，活出最美好的自己。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[46%] px-4 sm:px-10 lg:px-0">
              <div className="rounded-3xl overflow-hidden">
                <Image src="/img/Page 8-1.JPG" alt="9skin 空間" width={900} height={1200} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 09 SYSTEM ════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.green }}>
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] font-light tracking-[0.22em] uppercase text-white/70">System · 皮膚管理系統</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white" style={{ letterSpacing: "0.03em" }}>
            科學化肌膚管理系統
          </h2>
        </div>

        {/* 5 step cards */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { num: "01", title: "肌膚檢測", desc: "全面評估膚況，了解真正需求" },
              { num: "02", title: "方案規劃", desc: "客製化護理計畫，精準設計" },
              { num: "03", title: "專業療程", desc: "科技手法並用，精準執行" },
              { num: "04", title: "追蹤評估", desc: "記錄改善進程，動態調整" },
              { num: "05", title: "居家維護", desc: "延續療程效果，鞏固成果" },
            ].map((step, i) => (
              <div key={step.num} className="rounded-2xl p-5 flex flex-col gap-3"
                style={{
                  backgroundColor: i === 0 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)",
                  border: `1px solid ${i === 0 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}`,
                }}>
                <span className="text-2xl font-light leading-none"
                  style={{ color: i === 0 ? C.white : "rgba(255,255,255,0.3)", fontFamily: "Georgia, serif" }}>
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-light mb-1 text-white" style={{ letterSpacing: "0.06em" }}>{step.title}</p>
                  <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 features strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          {[
            { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
            { title: "精準分區護理",   desc: "不同肌膚區域有不同問題，針對各區域制定最適合的護理方式" },
            { title: "長期膚況追蹤",   desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
          ].map((item, i) => (
            <div key={item.title} className="px-8 sm:px-10 py-8 sm:py-10"
              style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
              <div className="w-6 h-0.5 rounded-full mb-4" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />
              <p className="text-sm font-light text-white mb-2" style={{ letterSpacing: "0.06em" }}>{item.title}</p>
              <p className="text-xs font-light leading-[2]" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 10 BEFORE & AFTER ════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
              <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>Results · 成效見證</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2" style={{ letterSpacing: "0.04em" }}>真實顧客 · Before &amp; After</h2>
            <p className="text-sm font-light" style={{ color: C.muted }}>Real customers, real results. No filters.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {baReviews.map(item => (
              <div key={item.img} className="group relative rounded-2xl overflow-hidden card-wrap" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(22,22,20,0.75) 0%, transparent 50%)" }}>
                  <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] font-light text-white/80 tracking-wider">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-light mt-6" style={{ color: C.subtle }}>* 以上成效因個人膚況而異</p>
        </div>
      </section>

      {/* ══ 11 KOL ═══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: C.greenMid, borderTop: `1px solid ${C.greenBord}`, borderBottom: `1px solid ${C.greenBord}` }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: C.greenSoft, border: `1px solid ${C.greenBord}` }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} />
            <span className="text-[10px] font-light tracking-[0.22em] uppercase" style={{ color: C.green }}>KOL Reviews · 口碑見證</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light" style={{ letterSpacing: "0.04em" }}>KOL 親身體驗</h2>
        </div>
        <div className="marquee-outer overflow-hidden mb-3">
          <div className="marquee-track-left flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow1,...kolRow1].map((item,i) => (
              <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden" style={{ width: 182, height: 325 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-right flex gap-3" style={{ width: "max-content" }}>
            {[...kolRow2,...kolRow2].map((item,i) => (
              <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden" style={{ width: 182, height: 325 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: C.dark }}>
        <div className="py-16 px-6 sm:px-10 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 className="text-xl sm:text-2xl font-light mb-3 text-white" style={{ letterSpacing: "0.04em" }}>
            準備好開始你的肌膚管理之旅了嗎？
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>立即預約免費肌膚諮詢，讓我們為你量身打造護理計畫</p>
          <button className="flex items-center gap-2 mx-auto px-10 py-4 text-sm font-light tracking-[0.12em] rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: C.green, color: C.white }}>
            立即預約諮詢 <LuArrowRight size={14} />
          </button>
        </div>
        <div className="py-8 px-8 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Image src="/img/9skin logo.png" alt="9skin" width={90} height={34} className="h-7 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1) opacity(0.35)" }} />
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {["台北 · 松江南京站步行 3 分鐘", "高雄 · 巨蛋站步行 6 分鐘"].map(loc => (
              <div key={loc} className="flex items-center gap-2">
                <LuMapPin size={10} color={C.green} />
                <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.3)" }}>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
