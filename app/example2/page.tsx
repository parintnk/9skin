"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical, LuMapPin } from "react-icons/lu";

/* ─── Design tokens ────────────────────────────────────────────── */
const C = {
  bg:          "#F8F7F4",
  white:       "#FFFFFF",
  sage:        "#8BAF9C",
  sageDark:    "#1C2B25",
  sageDeep:    "#243B2F",
  sageLight:   "#EEF3F0",
  sageMid:     "#D8E6DE",
  text:        "#2D3530",
  muted:       "#6B7F75",
  gold:        "#B5956E",
  border:      "rgba(45,53,48,0.12)",
  borderLight: "rgba(45,53,48,0.06)",
};

/* ─── Data ─────────────────────────────────────────────────────── */
const concerns = [
  {
    img: "/img/Page 2-1.png",
    no: "01",
    title: "痘痘反覆出現",
    subtitle: "Persistent Acne",
    desc: "出油、發炎、細菌、角質代謝——肌膚屏障只要一個環節失衡，痘痘就難以真正穩定。與其反覆「處理痘痘」，不如把皮膚的整體狀態調回健康。",
  },
  {
    img: "/img/Page 2-2.png",
    no: "02",
    title: "保養品買再多也沒用",
    subtitle: "Skincare Shopping, Skin Unchanged",
    desc: "用的是專櫃、醫美等級保養，肌膚卻怎麼都不透亮？角質太厚吸收進不去，角質太薄水留不住。先把皮膚養回健康，才能讓保養品發揮效用。",
  },
  {
    img: "/img/Page 2-3.png",
    no: "03",
    title: "越保養越敏感",
    subtitle: "More Skincare, More Sensitive",
    desc: "做臉、煥膚、雷射都嘗試過，皮膚卻越來越紅、越來越薄？真正有效的保養是從肌膚生理出發，選對現在「適合你」的照護方式。",
  },
  {
    img: "/img/Page 2-4.png",
    no: "04",
    title: "想瘦小臉，不想忍痛",
    subtitle: "Face Slimming Without Pain",
    desc: "透過非侵入式的儀器護理，科技加持，安全溫和又看得見效果。從表層到深層喚醒肌膚支撐力，感受更緊緻、輪廓更立體。",
  },
];

const steps = [
  {
    num: "01",
    title: "評估你的肌膚屬性",
    desc: "透過專業檢測與分析找出真正的膚況問題，同時評估肌膚耐受度、當下不穩定狀態，再為每位顧客量身規劃最適合的客製化照護方案。",
  },
  {
    num: "02",
    title: "以調理・養護為前提",
    desc: "不追求立即見效的激進手段，而是建立肌膚的健康基礎，從根本強化肌膚屏障，讓皮膚自然恢復平衡狀態。",
  },
  {
    num: "03",
    title: "守護肌膚・讓好狀態常在",
    desc: "肌膚達到理想狀態後，我們專注守護，維持最佳膚況，讓亮澤與彈性長久可見。",
  },
];

const skinCareItems = [
  { num: "01", title: "水飛梭",       desc: "深層清潔毛孔，去除老廢角質與髒汙" },
  { num: "02", title: "手工針清",     desc: "無痛感手法細膩，針對粉刺與痘痘清除，溫和不傷肌膚" },
  { num: "03", title: "水楊酸煥膚",   desc: "促進肌膚更新，調理粉刺，細緻膚質" },
  { num: "04", title: "保濕導入",     desc: "舒緩肌膚，加強保濕" },
  { num: "05", title: "調理式面膜",   desc: "針對不同肌膚狀態進行深層修護" },
  { num: "06", title: "功能性軟膜",   desc: "高包覆調理，協助補水、提升吸收，讓肌膚穩定" },
  { num: "07", title: "PDT照光修護", desc: "減緩泛紅與不穩定感，促進修護" },
];

const commitments = [
  { img: "/img/Page 7-1.png", icon: <LuClipboardList size={22} />, title: "專業肌膚檢測", desc: "每次療程前完整評估膚況，確保護理方向精準有效" },
  { img: "/img/Page 7-2.jpg", icon: <LuLeaf size={22} />,          title: "溫和成分配方", desc: "精選安全有效成分，減低刺激，適合敏感肌使用" },
  { img: "/img/Page 7-3.png", icon: <LuSparkles size={22} />,      title: "客製化方案",   desc: "依照個人膚質與需求量身打造，沒有千篇一律的流程" },
  { img: "/img/Page 7-4.png", icon: <LuFlaskConical size={22} />,  title: "科技儀器輔助", desc: "結合先進醫美儀器與手技，效果加乘且安全可靠" },
];

const baReviews = [
  { img: "/img/BAreview/Page 10-1.png",  title: "韓式深層保養" },
  { img: "/img/BAreview/Page 10-2.png",  title: "再生光" },
  { img: "/img/BAreview/Page 10-3.png",  title: "草藥煥膚" },
  { img: "/img/BAreview/Page 10-4.png",  title: "玖式微針" },
  { img: "/img/BAreview/Page 10-5.png",  title: "韓式深層保養＋再生光" },
  { img: "/img/BAreview/Page 10-6.png",  title: "韓式深層保養＋草藥煥膚" },
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

/* ─── Shared small components ──────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[10px] tracking-[0.28em] uppercase font-light px-3 py-1 rounded-full mb-5"
      style={{ backgroundColor: C.sageLight, color: C.sage, letterSpacing: "0.28em" }}
    >
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-7">
      <div className="flex-1 h-px" style={{ backgroundColor: C.border }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.sage }} />
      <div className="flex-1 h-px" style={{ backgroundColor: C.border }} />
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: "var(--font-noto-serif-tc), Noto Serif TC, Georgia, serif" }}>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — Hero
      ══════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col" style={{ backgroundColor: C.white }}>
        <main className="flex-1 flex flex-col lg:flex-row">

          {/* Left panel */}
          <div className="flex flex-col px-8 sm:px-12 lg:px-16 pt-10 pb-12 lg:pt-16 lg:pb-16 lg:w-[58%]">

            {/* Nav bar */}
            <div className="flex items-center justify-between mb-16 lg:mb-24">
              <div className="flex items-center">
                <Image src="/img/9skin logo.png" alt="9skin 玖膚" width={160} height={60} className="h-12 w-auto object-contain" style={{ filter: "brightness(0) opacity(0.75)" }} />
              </div>
              <div className="hidden sm:flex items-center gap-6">
                {["服務項目", "療程說明", "成效見證", "聯絡我們"].map(item => (
                  <span key={item} className="text-xs font-light cursor-pointer hover:opacity-60 transition-opacity" style={{ color: C.muted, letterSpacing: "0.08em" }}>{item}</span>
                ))}
              </div>
            </div>

            {/* Hero headline */}
            <div className="flex-1 flex flex-col justify-center">
              <Tag>Brand Introduction · 品牌介紹</Tag>

              <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] font-light leading-[1.15] mb-8" style={{ letterSpacing: "0.02em", color: C.text }}>
                養膚，是一件<br />
                <em className="not-italic" style={{ color: C.sage }}>更深、更長遠</em><br />
                的事
              </h1>

              <p className="text-base lg:text-[17px] font-light leading-loose mb-4 max-w-lg" style={{ color: C.muted }}>
                我們像管理資產一樣，陪你管理「顏值」，替你規劃專屬保養計畫，成為你風格與生活的顏值資產管理顧問。
              </p>
              <p className="text-base lg:text-[17px] font-light leading-loose max-w-lg" style={{ color: C.muted }}>
                打造溫馨、寬敞的開放式諮詢空間，以暖色調營造放鬆有溫度的環境，讓每位顧客享有專屬的私密與安心感。
              </p>

              <div className="flex items-center gap-4 mt-10">
                <button
                  className="px-8 py-3.5 text-sm font-light tracking-wider text-white rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: C.sageDark, letterSpacing: "0.12em" }}
                >
                  立即諮詢
                </button>
                <button
                  className="px-8 py-3.5 text-sm font-light tracking-wider rounded-full border transition-colors hover:bg-opacity-5"
                  style={{ color: C.text, borderColor: C.border, letterSpacing: "0.12em" }}
                >
                  了解更多
                </button>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:hidden w-full">
            <Image src="/img/Page 1.JPG" alt="9skin" width={1206} height={2130} className="w-full h-auto" priority />
          </div>
          <div className="hidden lg:block relative lg:flex-1" style={{ backgroundColor: C.sageLight }}>
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_15%]" priority />
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 rounded-2xl px-5 py-4" style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
              <p className="text-[10px] tracking-[0.22em] uppercase mb-1 font-light" style={{ color: C.sage }}>Established</p>
              <p className="text-sm font-light" style={{ color: C.text }}>台北 · 高雄 雙店服務</p>
            </div>
          </div>
        </main>

        {/* Footer bar */}
        <footer className="py-4 px-8 sm:px-12" style={{ backgroundColor: C.sageDark }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-20">
            {[
              "台北店：位於松江南京站步行 3 分鐘",
              "高雄店：位於巨蛋站步行 6 分鐘",
            ].map((loc) => (
              <div key={loc} className="flex items-center gap-2.5">
                <LuMapPin size={13} color="rgba(139,175,156,0.8)" />
                <span className="text-sm font-light" style={{ color: "rgba(238,243,240,0.75)", letterSpacing: "0.06em" }}>{loc}</span>
              </div>
            ))}
          </div>
        </footer>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — Skin Concerns
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <Tag>Skin Concerns · 肌膚困擾</Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-4" style={{ letterSpacing: "0.03em" }}>
              常見的肌膚困擾，你中了幾項？
            </h2>
            <p className="text-sm lg:text-[15px] font-light max-w-md" style={{ color: C.muted }}>
              How many of these common skin concerns do you struggle with?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {concerns.map((c) => (
              <div key={c.no} className="group rounded-2xl overflow-hidden" style={{ backgroundColor: C.white, boxShadow: "0 2px 20px rgba(45,53,48,0.06)" }}>
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "543/209" }}>
                  <Image src={c.img} alt={c.title} fill className="card-img object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, rgba(28,43,37,0.08) 0%, rgba(28,43,37,0.6) 100%)` }} />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: C.sage }}>
                    <span className="text-[10px] font-light text-white tracking-wide">{c.no}</span>
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <p className="text-white text-base font-light mb-0.5" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                    <p className="text-white/60 text-[10px] tracking-widest font-light">{c.subtitle}</p>
                  </div>
                </div>
                {/* Text */}
                <div className="px-6 py-5">
                  <p className="text-sm lg:text-[15px] font-light leading-[1.9]" style={{ color: C.muted }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-12 rounded-2xl px-8 sm:px-12 py-6 text-center" style={{ backgroundColor: C.sageDark }}>
            <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: "rgba(238,243,240,0.82)", letterSpacing: "0.05em" }}>
              這些問題看似獨立，實際上都指向同一個核心：
              <span style={{ color: C.sage }}> 肌膚缺乏正確的深層調理與系統化管理</span>
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — Skin Problems / Empathy
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.sageLight }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">

            {/* Left heading */}
            <div className="lg:w-[42%] shrink-0 mb-12 lg:mb-0 lg:sticky lg:top-16">
              <Tag>Skin Problems · 常見疑問</Tag>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug mb-6" style={{ letterSpacing: "0.03em" }}>
                變美的路上，<br />你也正在<br />
                <em className="not-italic" style={{ color: C.sage }}>經歷這些嗎？</em>
              </h2>
              <Divider />
              <div className="space-y-4">
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: C.muted }}>
                  問題的核心不在於你不夠努力，而是缺少對肌膚的正確理解與專業指引。
                </p>
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: C.muted }}>
                  真正的改變，從了解肌膚狀態、回到皮膚本身的節奏開始。
                </p>
              </div>
            </div>

            {/* Right bubbles */}
            <div className="flex-1 flex flex-col gap-4">
              {[
                { text: "保養品越買越多，毛孔卻沒有變細，反而更明顯", dark: false },
                { text: "一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心", dark: true },
                { text: "痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定", dark: false },
                { text: "明明用的是高價保養，肌膚卻還是黯淡、沒精神", dark: true },
                { text: "不適合自己的課程與產品，讓皮膚越照顧越敏感", dark: false },
              ].map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-6 py-4 text-sm font-light leading-relaxed"
                  style={{
                    backgroundColor: b.dark ? C.sageDark : C.white,
                    color: b.dark ? "rgba(238,243,240,0.85)" : C.text,
                    letterSpacing: "0.04em",
                    boxShadow: b.dark
                      ? "0 4px 20px rgba(28,43,37,0.18)"
                      : "0 2px 12px rgba(45,53,48,0.06)",
                    marginLeft: i % 2 === 0 ? 0 : "auto",
                    maxWidth: "85%",
                  }}
                >
                  <span className="mr-2" style={{ color: C.sage }}>「</span>
                  {b.text}
                  <span className="ml-1" style={{ color: C.sage }}>」</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — Three Keys Process
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white }}>

        <div className="px-8 sm:px-12 lg:px-16 pt-16 pb-10">
          <div className="max-w-6xl mx-auto">
            <Tag>Our Method · 三大關鍵</Tag>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug" style={{ letterSpacing: "0.03em" }}>
                想要彈潤透亮的水煮蛋肌？<br />
                <span style={{ color: C.sage }}>從這三個關鍵開始</span>
              </h2>
              <p className="text-sm lg:text-[15px] font-light max-w-xs text-right hidden lg:block" style={{ color: C.muted }}>
                我們先為你完整評估肌膚狀況，了解當下真正需要的是什麼
              </p>
            </div>
            <div className="w-full h-px mt-10" style={{ backgroundColor: C.border }} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-none">
          {/* Image */}
          <div className="lg:hidden w-full">
            <Image src="/img/Page 4.png" alt="水煮蛋肌" width={564} height={439} className="w-full h-auto" />
          </div>
          <div className="hidden lg:block relative lg:w-[46%]" style={{ minHeight: 540 }}>
            <Image src="/img/Page 4.png" alt="水煮蛋肌" fill className="object-cover object-center" />
            {/* Green overlay badge */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 70%, rgba(255,255,255,0.04) 100%)" }} />
          </div>

          {/* Steps */}
          <div className="flex-1 flex flex-col justify-center gap-0 px-8 sm:px-12 lg:px-14 py-12 lg:py-16 max-w-xl lg:max-w-none">
            {steps.map((step, i) => (
              <div key={step.num}>
                <div className="flex gap-5 py-8">
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: C.sageDark }}>
                      <span className="text-[11px] font-light tracking-wider text-white">{step.num}</span>
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1" style={{ backgroundColor: C.sageMid, minHeight: 24 }} />}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-lg lg:text-xl font-light mb-3" style={{ letterSpacing: "0.04em" }}>{step.title}</h3>
                    <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: C.muted }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="ml-[3.75rem] h-px" style={{ backgroundColor: C.borderLight }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — Why Choose Us (Comparison)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">

          <div className="text-center mb-14">
            <Tag>Comparison · 為什麼選擇我們</Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-light" style={{ letterSpacing: "0.04em" }}>
              為什麼選擇玖膚？
            </h2>
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-4 sm:hidden">
            {[
              {
                label: "玖膚皮膚管理",
                featured: true,
                rows: [
                  { label: "費用", val: "$ 2,000 ~ 3,000" },
                  { label: "時間", val: "1～2 月一次，60～120 分 / 次" },
                  { label: "特色", val: "專業肌膚檢測 · 客製化皮膚分區管理 · 科技手法並用，真正看得到改變" },
                  { label: "成效", val: "膚質真正被改善，達到穩定、透亮、有彈性的水煮蛋肌" },
                ],
              },
              {
                label: "醫美療程",
                featured: false,
                rows: [
                  { label: "費用", val: "$ 5,000 以上" },
                  { label: "時間", val: "1～2 月一次，約 1 小時 / 次" },
                  { label: "特色", val: "以雷射為主要治療手段，對敏感肌或需手工針清的痘痘肌非最佳首選" },
                  { label: "成效", val: "快速立即見效，但長期施作肌膚容易敏感且需承擔操作風險" },
                ],
              },
              {
                label: "傳統美容",
                featured: false,
                rows: [
                  { label: "費用", val: "$ 2,000 左右" },
                  { label: "時間", val: "1～2 月一次，60～120 分 / 次" },
                  { label: "特色", val: "以粉刺清潔與基礎保濕為核心，流程固定，較少結合科技化輔助" },
                  { label: "成效", val: "基礎清潔保濕為主，皮膚質地改善較為有限" },
                ],
              },
            ].map((col) => (
              <div key={col.label} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${col.featured ? C.sage : C.border}`, boxShadow: col.featured ? `0 4px 28px rgba(28,43,37,0.12)` : "none" }}>
                <div className="py-4 px-5 text-center" style={{ backgroundColor: col.featured ? C.sageDark : C.sageLight }}>
                  <p className="text-base font-light tracking-widest" style={{ color: col.featured ? "rgba(238,243,240,0.9)" : C.text }}>
                    {col.featured && <span className="text-xs mr-2 px-2 py-0.5 rounded-full" style={{ backgroundColor: C.sage, color: C.white }}>推薦</span>}
                    {col.label}
                  </p>
                </div>
                <div className="divide-y" style={{ backgroundColor: col.featured ? "rgba(28,43,37,0.02)" : C.white }}>
                  {col.rows.map((row) => (
                    <div key={row.label} className="px-5 py-4">
                      <p className="text-[10px] tracking-[0.22em] uppercase mb-1.5 font-light" style={{ color: C.sage }}>{row.label}</p>
                      <p className="text-sm font-light leading-relaxed" style={{ color: col.featured ? C.text : C.muted }}>{row.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.border}`, boxShadow: "0 4px 32px rgba(45,53,48,0.06)" }}>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-5 px-6 text-left font-light text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: C.sageLight, color: C.muted, width: "18%" }}>比較項目</th>
                  {[
                    { label: "醫美療程", featured: false },
                    { label: "玖膚皮膚管理", featured: true },
                    { label: "傳統美容", featured: false },
                  ].map((col) => (
                    <th key={col.label} className="py-5 px-6 text-center font-light text-base" style={{ backgroundColor: col.featured ? C.sageDark : C.sageLight, color: col.featured ? "rgba(238,243,240,0.9)" : C.text, width: "27.33%" }}>
                      {col.featured && (
                        <div className="flex justify-center mb-1">
                          <span className="text-[9px] tracking-widest px-2.5 py-0.5 rounded-full" style={{ backgroundColor: C.sage, color: C.white }}>推薦選擇</span>
                        </div>
                      )}
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "費用",
                    vals: ["$ 5,000 以上", "$ 2,000 ~ 3,000", "$ 2,000 左右"],
                  },
                  {
                    label: "時間",
                    vals: ["1～2 月一次\n約 1hr", "1～2 月一次\n60～120 分", "1～2 月一次\n60～120 分"],
                  },
                  {
                    label: "特色",
                    vals: [
                      "以雷射為主，對敏感肌或需手工針清的痘痘肌非最佳首選",
                      "專業肌膚檢測 · 依膚質、耐受度與問題區域客製化規劃 · 科技儀器與手法並用",
                      "粉刺清潔與基礎保濕為核心，流程固定，較少科技化輔助",
                    ],
                  },
                  {
                    label: "成效",
                    vals: [
                      "快速立即見效，長期施作肌膚易敏感",
                      "膚質真正改善，達到穩定、透亮、有彈性的水煮蛋肌",
                      "基礎清潔保濕為主，質地改善有限",
                    ],
                  },
                ].map((row, ri) => (
                  <tr key={row.label} style={{ borderTop: `1px solid ${C.borderLight}` }}>
                    <td className="py-5 px-6 text-xs font-light tracking-[0.18em] uppercase" style={{ backgroundColor: C.sageLight, color: C.muted }}>{row.label}</td>
                    {row.vals.map((val, ci) => (
                      <td key={ci} className="py-5 px-6 text-sm font-light leading-relaxed text-center align-top"
                        style={{
                          backgroundColor: ci === 1
                            ? ri % 2 === 0 ? "rgba(28,43,37,0.03)" : "rgba(28,43,37,0.01)"
                            : ri % 2 === 0 ? C.white : C.bg,
                          color: ci === 1 ? C.text : C.muted,
                          borderLeft: ci === 1 ? `2px solid ${C.sage}` : "none",
                          fontWeight: ci === 1 ? 400 : 300,
                        }}
                      >
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

      {/* ══════════════════════════════════════════════════════════
          SECTION 6 — Korean Deep Care Program
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.sageDark }}>
        <div className="flex flex-col lg:flex-row">

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <span className="inline-block text-[10px] tracking-[0.28em] uppercase font-light px-3 py-1 rounded-full mb-6 self-start"
              style={{ backgroundColor: "rgba(139,175,156,0.18)", color: C.sage }}>
              Korean Deep Care · 韓式深層保養
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-3 text-white" style={{ letterSpacing: "0.03em" }}>
              7 步驟韓式深層護理
            </h2>
            <p className="text-sm font-light mb-10" style={{ color: "rgba(238,243,240,0.55)", letterSpacing: "0.06em" }}>
              Step-by-step Professional Skin Care
            </p>

            <div className="space-y-0">
              {skinCareItems.map((item, i) => (
                <div key={item.num}>
                  <div className="flex items-start gap-5 py-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(139,175,156,0.15)", border: `1px solid rgba(139,175,156,0.3)` }}>
                      <span className="text-[10px] font-light" style={{ color: C.sage }}>{item.num}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-base font-light text-white" style={{ letterSpacing: "0.06em" }}>{item.title}</span>
                      </div>
                      <p className="text-sm font-light" style={{ color: "rgba(238,243,240,0.55)" }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < skinCareItems.length - 1 && (
                    <div className="ml-13 h-px" style={{ backgroundColor: "rgba(139,175,156,0.1)", marginLeft: "3.25rem" }} />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl px-6 py-5" style={{ backgroundColor: "rgba(139,175,156,0.1)", border: "1px solid rgba(139,175,156,0.2)" }}>
              <p className="text-sm font-light text-center" style={{ color: "rgba(238,243,240,0.7)", letterSpacing: "0.06em" }}>
                完整 7 步驟 · 每次療程約 90～120 分鐘 · 依膚況客製調整
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:hidden w-full" style={{ aspectRatio: "16/9", position: "relative" }}>
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover object-center" />
          </div>
          <div className="hidden lg:block relative lg:w-[44%]">
            <Image src="/img/Page 6.JPG" alt="韓式深層保養" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,43,37,0.3) 0%, transparent 50%)" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7 — Four Commitments
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col items-center text-center mb-14">
            <Tag>Our Promise · 玖膚承諾</Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light" style={{ letterSpacing: "0.04em" }}>
              玖膚水煮蛋肌養成術
            </h2>
            <p className="text-sm font-light mt-2" style={{ color: C.muted }}>Four Core Commitments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commitments.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1.2" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,43,37,0.88) 0%, rgba(28,43,37,0.2) 60%, transparent 100%)" }} />
                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(139,175,156,0.25)", backdropFilter: "blur(4px)", border: "1px solid rgba(139,175,156,0.35)", color: C.sage }}>
                  {item.icon}
                </div>
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-base font-light mb-2" style={{ letterSpacing: "0.06em" }}>{item.title}</p>
                  <p className="text-white/65 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8 — Our Mission / Founder
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.sageLight }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Text */}
            <div className="flex-1">
              <Tag>Our Mission · 品牌理念</Tag>
              <div className="flex items-baseline gap-2.5 mb-6">
                <span className="text-xl font-light tracking-wider" style={{ fontFamily: "Georgia, serif", color: C.text }}>9skin</span>
                <span className="text-xs font-light tracking-[0.18em]" style={{ color: C.sage }}>玖膚</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug mb-8" style={{ letterSpacing: "0.03em" }}>
                美麗不只是外表，<br />
                <em className="not-italic" style={{ color: C.sage }}>是一種長期投資</em>
              </h2>
              <Divider />
              <div className="space-y-4 mb-10">
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: C.muted }}>
                  9skin 玖膚由一群對皮膚科學充滿熱忱的專業美容師共同創立，深信每一位顧客的肌膚都值得被認真對待。
                </p>
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: C.muted }}>
                  我們打破傳統美容院模式，融合韓式皮膚管理哲學與現代科技儀器，為台灣顧客提供真正系統化、個人化的肌膚照護體驗。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: `1px solid ${C.sageMid}` }}>
                {[
                  { num: "2", unit: "間門市", label: "台北 · 高雄" },
                  { num: "500+", unit: "", label: "滿意顧客" },
                  { num: "7", unit: "步驟", label: "韓式護理" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-baseline justify-center gap-0.5 mb-1">
                      <span className="text-2xl font-light" style={{ color: C.sageDark }}>{stat.num}</span>
                      <span className="text-sm font-light" style={{ color: C.muted }}>{stat.unit}</span>
                    </div>
                    <p className="text-[11px] font-light tracking-wider" style={{ color: C.muted }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="lg:w-[46%] flex flex-col gap-4 px-6 sm:px-10 lg:px-0">
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

      {/* ══════════════════════════════════════════════════════════
          SECTION 9 — Skin Care Management System
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.sageDark }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          <div className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.28em] uppercase font-light px-3 py-1 rounded-full mb-6"
              style={{ backgroundColor: "rgba(139,175,156,0.18)", color: C.sage }}>
              System · 皮膚管理系統
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light text-white mb-4" style={{ letterSpacing: "0.03em" }}>
              科學化肌膚管理系統
            </h2>
            <p className="text-sm font-light" style={{ color: "rgba(238,243,240,0.5)" }}>
              A Systematic Approach to Skin Health
            </p>
          </div>

          {/* Process steps — mobile: vertical timeline / desktop: horizontal circles */}
          {/* Mobile */}
          <div className="flex flex-col sm:hidden gap-0">
            {[
              { num: "01", title: "肌膚檢測",  desc: "全面評估膚況" },
              { num: "02", title: "方案規劃",  desc: "客製化護理計畫" },
              { num: "03", title: "專業療程",  desc: "精準執行護理" },
              { num: "04", title: "追蹤評估",  desc: "記錄改善進程" },
              { num: "05", title: "居家維護",  desc: "延續療程效果" },
            ].map((step, i, arr) => (
              <div key={step.num} className="flex gap-4">
                {/* Left: dot + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: i === 0 ? C.sage : "rgba(139,175,156,0.12)", border: `1px solid ${i === 0 ? C.sage : "rgba(139,175,156,0.3)"}` }}>
                    <span className="text-[10px] font-light" style={{ color: i === 0 ? C.white : "rgba(139,175,156,0.7)" }}>{step.num}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ backgroundColor: "rgba(139,175,156,0.2)", minHeight: 24 }} />
                  )}
                </div>
                {/* Right: text */}
                <div className="pb-6 pt-1">
                  <p className="text-sm font-light text-white mb-0.5" style={{ letterSpacing: "0.06em" }}>{step.title}</p>
                  <p className="text-[12px] font-light" style={{ color: "rgba(238,243,240,0.45)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-5 gap-3">
            {[
              { num: "01", title: "肌膚檢測",  desc: "全面評估膚況" },
              { num: "02", title: "方案規劃",  desc: "客製化護理計畫" },
              { num: "03", title: "專業療程",  desc: "精準執行護理" },
              { num: "04", title: "追蹤評估",  desc: "記錄改善進程" },
              { num: "05", title: "居家維護",  desc: "延續療程效果" },
            ].map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center">
                {i < 4 && (
                  <div className="absolute top-8 left-[60%] right-[-10%] h-px" style={{ backgroundColor: "rgba(139,175,156,0.25)" }} />
                )}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10"
                  style={{ backgroundColor: i === 0 ? C.sage : "rgba(139,175,156,0.12)", border: `1px solid ${i === 0 ? C.sage : "rgba(139,175,156,0.25)"}` }}>
                  <span className="text-[10px] font-light" style={{ color: i === 0 ? C.white : "rgba(139,175,156,0.6)" }}>{step.num}</span>
                </div>
                <p className="text-sm font-light text-center text-white mb-1" style={{ letterSpacing: "0.06em" }}>{step.title}</p>
                <p className="text-[11px] font-light text-center" style={{ color: "rgba(238,243,240,0.45)" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
            {[
              { title: "個人化檔案管理", desc: "建立每位顧客的完整肌膚檔案，記錄每次變化，確保護理方向持續優化" },
              { title: "精準分區護理", desc: "不同肌膚區域有不同問題，我們針對各區域制定最適合的護理方式" },
              { title: "長期膚況追蹤", desc: "定期回訪評估，確保肌膚改善效果持久，並隨膚況調整護理計畫" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(139,175,156,0.08)", border: "1px solid rgba(139,175,156,0.15)" }}>
                <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: C.sage }} />
                <h3 className="text-base font-light text-white mb-3" style={{ letterSpacing: "0.06em" }}>{item.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(238,243,240,0.55)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 10 — Before & After
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col items-center text-center mb-14">
            <Tag>Results · 成效見證</Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light mb-4" style={{ letterSpacing: "0.04em" }}>
              真實顧客 · Before & After
            </h2>
            <p className="text-sm font-light" style={{ color: C.muted }}>Real customers, real results. No filters.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {baReviews.map((item) => (
              <div key={item.img} className="group relative rounded-xl overflow-hidden card-wrap" style={{ aspectRatio: "3/4" }}>
                <Image src={item.img} alt={item.title} fill className="card-img object-cover" />
                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-3 transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                  style={{ background: "linear-gradient(to top, rgba(28,43,37,0.85) 0%, transparent 100%)" }}>
                  <p className="text-white text-[11px] font-light text-center tracking-wider">{item.title}</p>
                </div>
                {/* Always visible label on non-hover */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 transition-opacity duration-300 group-hover:opacity-0"
                  style={{ background: "linear-gradient(to top, rgba(28,43,37,0.55) 0%, transparent 80%)" }}>
                  <p className="text-white text-[10px] font-light text-center tracking-wider opacity-80">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs font-light mt-8" style={{ color: C.muted, letterSpacing: "0.06em" }}>
            * 以上成效因個人膚況而異，實際效果因人而異
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 11 — KOL Reviews
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: C.sageLight }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <Tag>Reviews · 口碑見證</Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light mb-3" style={{ letterSpacing: "0.04em" }}>
              KOL 親身體驗
            </h2>
            <p className="text-sm font-light" style={{ color: C.muted }}>Real reviews from influencers who experienced 9skin</p>
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee-outer overflow-hidden">
          <div className="marquee-track-left flex gap-4" style={{ width: "max-content" }}>
            {[...kolRow1, ...kolRow1].map((item, i) => (
              <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden" style={{ width: 200, height: 360 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-outer overflow-hidden mt-4">
          <div className="marquee-track-right flex gap-4" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((item, i) => (
              <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden" style={{ width: 200, height: 360 }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER / CTA
      ══════════════════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: C.sageDark }}>

        {/* CTA banner */}
        <div className="py-16 px-6 sm:px-8 text-center border-b" style={{ borderColor: "rgba(139,175,156,0.15)" }}>
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4" style={{ letterSpacing: "0.04em" }}>
            準備好開始你的肌膚管理之旅了嗎？
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: "rgba(238,243,240,0.55)" }}>
            立即預約免費肌膚諮詢，讓我們為你量身打造專屬護理計畫
          </p>
          <button
            className="px-10 py-4 text-sm font-light tracking-wider rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: C.sage, color: C.white, letterSpacing: "0.14em" }}
          >
            立即預約諮詢
          </button>
        </div>

        {/* Locations */}
        <div className="py-8 px-8 sm:px-12">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-light tracking-wider" style={{ fontFamily: "Georgia, serif", color: "rgba(238,243,240,0.75)" }}>9skin</span>
              <span className="text-xs font-light tracking-[0.15em]" style={{ color: C.sage }}>玖膚</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {[
                "台北店：松江南京站步行 3 分鐘",
                "高雄店：巨蛋站步行 6 分鐘",
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <LuMapPin size={12} color={C.sage} />
                  <span className="text-xs font-light" style={{ color: "rgba(238,243,240,0.55)", letterSpacing: "0.06em" }}>{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}
