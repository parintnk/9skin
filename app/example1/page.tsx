"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical } from "react-icons/lu";

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

function Bubble({ text, dark = false }: { text: string; dark?: boolean }) {
  const bg = dark ? "var(--brand-footer)" : "var(--brand-light)";
  const color = dark ? "var(--brand-footer-text)" : "var(--brand-dark)";
  return (
    <div
      className="rounded-full px-6 sm:px-7 py-3 sm:py-[14px] max-w-[88vw] sm:max-w-none"
      style={{
        backgroundColor: bg,
        color,
        boxShadow: dark
          ? "0 6px 28px rgba(30,24,18,0.22), 0 1px 4px rgba(30,24,18,0.1)"
          : "0 2px 16px rgba(30,24,18,0.08)",
      }}
    >
      <p className="text-sm sm:text-[15px] lg:text-base font-light" style={{ letterSpacing: "0.04em" }}>
        {text}
      </p>
    </div>
  );
}

const kolRow1 = [
  { src: "/img/Page 11 KOL Reviews/Page \u200d11-1-1.png", alt: "KOL review 1" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-2.png",       alt: "KOL review 2" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-3.png",       alt: "KOL review 3" },
  { src: "/img/Page 11 KOL Reviews/Page 11-1-4.png",       alt: "KOL review 4" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-1.png",       alt: "KOL review 5" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-2.png",       alt: "KOL review 6" },
  { src: "/img/Page 11 KOL Reviews/Page 11-2-3.png",       alt: "KOL review 7" },
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
  { img: "/img/BAreview/Page 10-9.png", title: "脂肪神器" },
  { img: "/img/BAreview/Page 10-10.png", title: "緊緻神槍" },
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

export default function Page() {
  return (
    <div style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand-dark)" }}>

      {/* ══════════════════════════════════════
          SECTION 1 — Hero / About
      ══════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col lg:flex-row">

          {/* Left */}
          <div className="flex flex-col px-6 sm:px-12 lg:px-14 pt-8 pb-10 lg:pt-14 lg:pb-14 flex-1">

            {/* Logo */}
            <div className="mb-8 lg:mb-20">
              <div className="flex items-baseline gap-2.5">
                <span className="text-[1.6rem] lg:text-[1.9rem] font-light tracking-wider" style={{ fontFamily: "Georgia, serif" }}>
                  9skin
                </span>
                <span className="text-xs lg:text-sm font-light tracking-[0.18em]" style={{ color: "var(--brand-gold)" }}>
                  玖膚
                </span>
              </div>
            </div>

            {/* Heading block */}
            <div className="mb-10 sm:mb-12">
              <p className="text-[11px] lg:text-xs tracking-[0.3em] uppercase mb-4 font-light" style={{ color: "var(--brand-gold)" }}>
                Brand Introduction
              </p>
              <h1 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-light leading-tight mb-8" style={{ letterSpacing: "0.04em" }}>
                「关于我们」
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(56,50,42,0.3)" }} />
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-8 lg:gap-10 lg:flex-1 lg:justify-center">
              <div className="space-y-3">
                <p className="text-base lg:text-[17px] font-light leading-loose">養膚，是一件更深、更長遠的事</p>
                <p className="text-base lg:text-[17px] font-light leading-loose">我們像管理資產一樣，陪你管理『顏值』</p>
                <p className="text-base lg:text-[17px] font-light leading-loose">替你規劃專屬保養計畫，成為風格與生活的顏值資產管理顧問</p>
              </div>
              <div className="w-8 h-px" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
              <div className="space-y-3">
                <p className="text-base lg:text-[17px] font-light leading-loose">我們打造溫馨、寬敞且舒適的開放式諮詢空間</p>
                <p className="text-base lg:text-[17px] font-light leading-loose">以暖色調營造放鬆有溫度的環境</p>
                <p className="text-base lg:text-[17px] font-light leading-loose">讓每位顧客都能享有專屬的私密與安心感</p>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:hidden w-full">
            <Image src="/img/Page 1.JPG" alt="9skin" width={1206} height={2130} className="w-full h-auto" priority />
          </div>
          <div className="hidden lg:block relative lg:w-[32%] xl:w-[34%]">
            <Image src="/img/Page 1.JPG" alt="9skin" fill className="object-cover object-[center_15%]" priority />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-5 px-8 sm:px-12" style={{ backgroundColor: "var(--brand-footer)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-20">
            <div className="flex items-center gap-3">
              <PinIcon />
              <span className="text-sm lg:text-[15px] font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
                台北店：位於松江南京站步行3分鐘
              </span>
            </div>
            <div className="hidden sm:block w-px h-4" style={{ backgroundColor: "rgba(197,186,176,0.2)" }} />
            <div className="flex items-center gap-3">
              <PinIcon />
              <span className="text-sm lg:text-[15px] font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
                高雄店：位於巨蛋站步行6分鐘
              </span>
            </div>
          </div>
        </footer>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Skin Concerns
      ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-lighter)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[11px] lg:text-xs tracking-[0.3em] uppercase mb-5 font-light" style={{ color: "var(--brand-gold)" }}>
              Skin Concerns
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-4" style={{ letterSpacing: "0.04em" }}>
              常見的肌膚困擾，你中了幾項？
            </h2>
            <p className="text-sm lg:text-[15px] font-light" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
              How many of these common skin concerns do you struggle with?
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
              <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-16">
            {concerns.map((c, i) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="card-wrap relative w-full overflow-hidden" style={{ aspectRatio: "543/209", borderRadius: "2px" }}>
                  <Image src={c.img} alt={c.title} fill className="card-img object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(20,16,12,0.1) 0%, rgba(20,16,12,0.55) 100%)" }} />
                  <div className="absolute inset-0 flex flex-col justify-end px-6 pb-5">
                    <p className="text-white font-light text-base lg:text-lg leading-snug mb-1" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                    <p className="text-white/60 text-[11px] tracking-widest font-light">{c.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm lg:text-[15px] font-light leading-[1.95]" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>
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
              <p className="text-sm lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-footer-text)", letterSpacing: "0.05em" }}>
                這些問題看似獨立，實際上都指向同一個核心：肌膚缺乏正確的深層調理與系統化管理
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Skin Problems / Chat Bubbles
      ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug" style={{ letterSpacing: "0.03em" }}>
              變美的路上，你也正在經歷這些嗎？
            </h2>
            <span className="text-sm lg:text-[15px] font-light shrink-0" style={{ color: "var(--brand-gold)", letterSpacing: "0.18em" }}>
              Skin Problems
            </span>
          </div>
          <div className="w-full h-px mb-16" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />

          <div className="flex flex-col gap-4 sm:gap-7 mb-16 sm:mb-20">
            <div className="flex justify-start sm:justify-start sm:pl-[12%]">
              <Bubble text="保養品越買越多，毛孔卻沒有變細，反而更明顯" />
            </div>
            <div className="flex justify-end sm:hidden">
              <Bubble dark text="痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定" />
            </div>
            <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-5">
              <Bubble text="一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心" />
              <Bubble dark text="痘痘藥、A 酸都試過，皮膚卻始終反覆、不穩定" />
            </div>
            <div className="flex justify-start sm:hidden">
              <Bubble text="一到換季就泛紅、刺癢、脫皮，怎麼保養都不安心" />
            </div>
            <div className="flex justify-end sm:hidden">
              <Bubble dark text="明明用的是高價保養，肌膚卻還是黯淡、沒精神" />
            </div>
            <div className="flex justify-start sm:hidden">
              <Bubble text="不適合自己的課程與產品，讓皮膚越照顧越敏感" />
            </div>
            <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-5">
              <Bubble dark text="明明用的是高價保養，肌膚卻還是黯淡、沒精神" />
              <Bubble text="不適合自己的課程與產品，讓皮膚越照顧越敏感" />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.12)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.12)" }} />
          </div>

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-base lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>
              問題的核心不在於你不夠努力，而是缺少對肌膚的正確理解與專業指引
            </p>
            <p className="text-base lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>
              如果你也在想「我只是想要一個穩定、透亮、不再折騰的肌膚，到底該從哪裡開始？」
            </p>
            <p className="text-base lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>
              真正的改變，從了解肌膚狀態、回到皮膚本身的節奏開始！
            </p>
            <p className="text-sm tracking-[0.4em] font-light pt-2" style={{ color: "var(--brand-gold)" }}>· · ·</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — Three Keys
      ══════════════════════════════════════ */}
      <section className="flex flex-col" style={{ backgroundColor: "var(--brand-light)" }}>

        {/* Header */}
        <div className="px-8 sm:px-12 lg:px-14 pt-14 sm:pt-16 pb-8 sm:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug lg:w-[44%] shrink-0 mb-5 lg:mb-0"
              style={{ letterSpacing: "0.03em" }}
            >
              想要彈潤透亮的水煮蛋肌？
            </h2>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-base lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
                我們先為你完整評估肌膚狀況，了解當下真正需要的是什麼
              </p>
              <p className="text-base lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
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
            {steps.map((step) => (
              <div key={step.num}>
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
                    <p key={i} className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
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
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="px-6 sm:px-10 lg:px-14">

          {/* Heading */}
          <div className="text-center mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light mb-3" style={{ letterSpacing: "0.04em" }}>
              為什麼選擇玖膚？
            </h2>
            <p className="text-sm lg:text-[15px] font-light tracking-widest" style={{ color: "var(--brand-gold)" }}>
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
            ].map((col) => (
              <div key={col.label} className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(56,50,42,0.12)" }}>
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
                        <p key={i} className="text-sm font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: col.featured ? 0.88 : 0.65 }}>
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
          <div className="hidden sm:block overflow-x-auto">
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
                                  opacity: isCenter ? 0.88 : 0.62,
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
      <section className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Image — mobile top, desktop left */}
        <div className="lg:hidden w-full">
          <Image src="/img/Page 6.JPG" alt="韓式深層保養" width={900} height={1200} className="w-full h-auto" />
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
          <h2 className="text-[2.8rem] sm:text-[3.4rem] lg:text-[4rem] font-light mb-3" style={{ fontFamily: "Georgia, serif", letterSpacing: "0.08em" }}>
            SKIN CARE
          </h2>

          {/* Subtitle row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <span className="text-2xl sm:text-[1.8rem] lg:text-[2.1rem] font-normal" style={{ letterSpacing: "0.04em" }}>
              韓式深層保養
            </span>
            <span className="text-lg lg:text-xl font-light" style={{ color: "rgba(56,50,42,0.35)" }}>·</span>
            <span className="text-base lg:text-[18px] font-light" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>
              不只表面，更深入肌底
            </span>
          </div>

          {/* Thin accent under subtitle */}
          <div className="w-12 h-[2px] mt-5 mb-7" style={{ backgroundColor: "var(--brand-gold)", opacity: 0.5 }} />

          {/* Description */}
          <p className="text-base lg:text-[16px] font-light leading-loose mb-10" style={{ color: "var(--brand-dark)", opacity: 0.7, letterSpacing: "0.03em" }}>
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
                  <p className="text-base lg:text-[17px] font-normal shrink-0" style={{ letterSpacing: "0.04em" }}>
                    {item.title}
                  </p>
                  <p className="text-sm lg:text-[14px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75, letterSpacing: "0.02em" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer summary */}
          <div className="mt-8 pt-7 space-y-1.5" style={{ borderTop: "1px solid rgba(56,50,42,0.14)" }}>
            <p className="text-sm lg:text-[14px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.78, letterSpacing: "0.03em" }}>
              全程使用頂級院線保養品，確保肌膚得到最完整、最精準的照護
            </p>
            <p className="text-sm lg:text-[14px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.78, letterSpacing: "0.03em" }}>
              每次課程都不只是表面保養而是從根本調理肌膚，幫助肌膚恢復健康、穩定與透亮，真正看得見的效果
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7 — 玖膚水煮蛋肌養成術
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>

        {/* Header block */}
        <div className="px-8 sm:px-12 lg:px-14 mb-14 lg:mb-18">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgba(56,50,42,0.25)" }} />
            <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase" style={{ color: "var(--brand-gold)" }}>
              Skin Transformation Method
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-tight" style={{ letterSpacing: "0.03em" }}>
              玖膚水煮蛋肌養成術
            </h2>
            <p className="text-sm lg:text-[15px] font-light shrink-0 pb-1" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
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
                <p className="text-sm font-light leading-[1.85]" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
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
                <p className="text-sm lg:text-[15px] font-light leading-[1.9]" style={{ color: "var(--brand-dark)", opacity: 0.7, letterSpacing: "0.03em" }}>
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
      <section className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Left: content */}
        <div className="flex-1 flex flex-col px-8 sm:px-12 lg:px-14 pt-14 lg:pt-16 pb-0">

          {/* Eyebrow */}
          <p className="text-sm font-light mb-5 italic" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>
            Let you meet the best version of yourself
          </p>

          {/* Main heading */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8">
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
            <p className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.75, letterSpacing: "0.03em" }}>
              9skin成立於2021年，在台北與高雄皆有分店，以改善2000個以上從問題肌膚到健康肌，再邁向變成細緻的光澤肌
            </p>
            <p className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.75, letterSpacing: "0.03em" }}>
              我們提供8種護膚課程，其中以『韓式深層保養』最受歡迎，許多客人第一次體驗後就成為長期回購的忠實顧客
            </p>
            <p className="text-[15px] lg:text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.75, letterSpacing: "0.03em" }}>
              創立玖膚，只為了一個使命：幫助每個人提升顏值、增加價值，讓你遇見最好的自己
            </p>
          </div>

          {/* Salon image + Founder story — side by side */}
          <div className="flex flex-col sm:flex-row gap-0 flex-1">

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
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
                  小時候的我，是同學眼中的「小黑妹」，因外在曾在學校被取笑。那段經歷讓我深刻感受到自信的重要，也激發我投入保養研究。
                </p>
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
                  經過努力與學習，我找到了屬於自己的美，也下定決心：把這項專業技術傳承下去，幫助更多人看見自己最美的一面。
                </p>
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
                  正是曾經的低谷，造就了現在的玖膚。因為這段經歷，我知道如何改變自己，也希望每一位走進玖膚的人，都能看見肌膚的改變、重拾自信，活出最美好的自己。
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: full-height studio photo */}
        <div className="lg:hidden w-full mt-8">
          <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" width={900} height={1200} className="w-full h-auto" />
        </div>
        <div className="hidden lg:block relative lg:w-[34%] xl:w-[36%]" style={{ minHeight: 640 }}>
          <Image src="/img/Page 8-1.JPG" alt="玖膚工作室" fill className="object-cover object-center" />
        </div>

      </section>


      {/* ══════════════════════════════════════
          SECTION 9 — Skin Care Management System
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 px-8 sm:px-12 lg:px-14" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Eyebrow with lines */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
          <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>
            Skin Care Management System
          </p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
        </div>

        {/* Olive card */}
        <div className="rounded-sm px-8 sm:px-10 lg:px-14 py-10 lg:py-12 mb-16 lg:mb-20" style={{ backgroundColor: "#404338" }}>
          <h2 className="text-[1.7rem] sm:text-[2.2rem] lg:text-[2.8rem] font-bold text-center text-white mb-5" style={{ letterSpacing: "0.04em" }}>
            不只是保養・而是肌膚管理系統
          </h2>
          <p className="text-sm lg:text-[15px] font-light text-center leading-loose mb-10 lg:mb-12 max-w-3xl mx-auto" style={{ color: "rgba(230,225,205,0.75)", letterSpacing: "0.03em" }}>
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
              <div key={i}>
                <div className="pb-2.5 mb-4" style={{ borderBottom: "1px solid rgba(230,225,205,0.28)" }}>
                  <p className="text-[14px] lg:text-[15px] font-normal text-white" style={{ letterSpacing: "0.04em" }}>
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
            <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "rgba(230,225,205,0.80)", letterSpacing: "0.03em" }}>
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
                <p className="text-[11px] tracking-widest font-light mb-1" style={{ color: "var(--brand-gold)" }}>{s.label}</p>
                <p className="text-base font-normal mb-1.5" style={{ letterSpacing: "0.03em" }}>{s.title}</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.78 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: circle layout */}
        <div className="hidden lg:block">

          {/* STEP 1-2: top center */}
          <div className="flex justify-center mb-6">
            <div className="text-center max-w-[260px]">
              <p className="text-[11px] tracking-[0.28em] font-light mb-1.5" style={{ color: "var(--brand-gold)" }}>STEP 1–2</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>美容師專業肌膚檢測</p>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>深度分析膚況，了解肌膚耐受度與潛在問題，搭配溫和洗卸，徹底清潔表面贓汙，保護肌膚屏障，不造成刺激</p>
              <div className="w-2.5 h-2.5 rounded-full mx-auto mt-5" style={{ backgroundColor: "#404338" }} />
            </div>
          </div>

          {/* Middle: STEP 5-6 | circle | STEP 3-4 */}
          <div className="flex items-center gap-10 max-w-5xl mx-auto">
            <div className="flex-1 text-right">
              <p className="text-[11px] tracking-[0.28em] font-light mb-1.5" style={{ color: "var(--brand-gold)" }}>STEP 5–6</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>專業手工針清</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 韓國醫美級護膚</p>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>溫柔無痛清除粉刺與塞塞毛孔，搭配高濃度營養護理，立即補充肌膚所需，提升水潤與光澤感</p>
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
              <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(73% - 6px)", backgroundColor: "#404338" }} />
              <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(23% - 6px)", backgroundColor: "#404338" }} />
            </div>

            <div className="flex-1">
              <p className="text-[11px] tracking-[0.28em] font-light mb-1.5" style={{ color: "var(--brand-gold)" }}>STEP 3–4</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>毛孔軟化</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 水飛梭深層清潔</p>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>軟化角質與毛孔，搭配水飛梭去除深層贓污與老廢角質，改善毛孔塞塞，使肌膚呼吸更順暢</p>
            </div>
          </div>

          {/* Bottom: STEP 7-8 | spacer | STEP 9-10 */}
          <div className="flex gap-10 max-w-5xl mx-auto mt-6">
            <div className="flex-1 text-right">
              <div className="w-2.5 h-2.5 rounded-full ml-auto mb-5" style={{ backgroundColor: "#404338" }} />
              <p className="text-[11px] tracking-[0.28em] font-light mb-1.5" style={{ color: "var(--brand-gold)" }}>STEP 7–8</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>冰導舒緩</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 兩道修護面膜</p>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>使用冰導舒緩精華，鎮靜、降低泛紅；接著兩道修護面膜深度保濕、修復肌膚屏障，使肌膚穩定、柔嫩有彈性</p>
            </div>
            <div className="shrink-0" style={{ width: 300 }} />
            <div className="flex-1">
              <div className="w-2.5 h-2.5 rounded-full mb-5" style={{ backgroundColor: "#404338" }} />
              <p className="text-[11px] tracking-[0.28em] font-light mb-1.5" style={{ color: "var(--brand-gold)" }}>STEP 9–10</p>
              <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>PDT照光 → 完成</p>
              <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>→ 韓國醫美級護膚</p>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.75 }}>專業光療促進修護，搭配最後一輪醫美級護膚精華加強肌膚吸收與修護。療程結束後，肌膚即刻展現健康光澤，平滑透亮、穩定有彈性</p>
            </div>
          </div>

        </div>

      </section>


      {/* ══════════════════════════════════════
          SECTION 10 — Before & After Results
      ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-9xl mx-auto px-6 sm:px-10">

          {/* Eyebrow with lines */}
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
            <p className="text-[11px] lg:text-xs font-light tracking-[0.28em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>
              Before &amp; After
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
          </div>

          {/* Heading */}
          <div className="text-center mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-4" style={{ letterSpacing: "0.04em" }}>
              顧客真實成效見證
            </h2>
            <p className="text-sm lg:text-[15px] font-light" style={{ color: "var(--brand-dark)", opacity: 0.55, letterSpacing: "0.05em" }}>
              每一張照片，都是一段蛻變的故事
            </p>
          </div>

          {/* Grid — 2 cols mobile / 4 cols tablet / 5 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {baReviews.map((item, i) => (
              <div key={i} className="card-wrap flex flex-col group">
                <div
                  className="overflow-hidden rounded-sm"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="card-img w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-14 sm:mt-16 flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
            <p className="md:text-[18px] text-xs font-light tracking-[0.15em] shrink-0" style={{ color: "var(--brand-dark)", opacity: 0.4 }}>
              以上均為顧客真實案例，效果因個人膚況而異
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════
          SECTION 11 — KOL Reviews
      ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: "var(--brand-lighter)" }}>

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-16 sm:mb-20">

          {/* Big heading */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[11px] lg:text-xs font-light tracking-[0.28em] uppercase mb-6" style={{ color: "var(--brand-muted)" }}>
              KOL Reviews
            </p>
            <h2
              className="text-[2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-light leading-tight mb-4"
              style={{ letterSpacing: "0.04em", fontFamily: "Georgia, serif" }}
            >
              眞實口碑・看得見的改變
            </h2>
            <p className="text-sm lg:text-base font-light tracking-widest" style={{ color: "var(--brand-dark)", opacity: 0.45, letterSpacing: "0.18em" }}>
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
                  className="overflow-hidden rounded-2xl shadow-md"
                  style={{
                    width: "clamp(120px, 38vw, 160px)",
                    height: "clamp(212px, 67vw, 284px)",
                    border: "1px solid rgba(56,50,42,0.08)",
                    boxShadow: "0 8px 32px rgba(56,50,42,0.12)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={160}
                    height={284}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right: text */}
            <div className="flex-1 text-center lg:text-left">
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
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
                  許多美容部落客與KOL體驗後都給予高度評價，不只是因為立即的效果，更重視的是玖膚對肌膚健康的長期關注
                </p>
                <p className="text-sm lg:text-[15px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.03em" }}>
                  超過5000位顧客的信任，來自於我們對每一位客人的用心照護。每一則好評都是我們持續進步的動力
                </p>
              </div>
              <p className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: "var(--brand-muted)", opacity: 0.7 }}>
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
                className="shrink-0 overflow-hidden rounded-xl"
                style={{ height: "clamp(260px, 55vw, 420px)", width: "clamp(146px, 31vw, 236px)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={236}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex gap-3 sm:gap-4 marquee-track-right" style={{ width: "max-content" }}>
            {[...kolRow2, ...kolRow2].map((img, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-xl"
                style={{ height: "clamp(260px, 55vw, 420px)", width: "clamp(146px, 31vw, 236px)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={236}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
}
