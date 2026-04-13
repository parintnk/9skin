"use client";

import Image from "next/image";
import { LuClipboardList, LuLeaf, LuSparkles, LuFlaskConical } from "react-icons/lu";

const transformationCards = [
  {
    img: "/img/Page 7-1.png",
    alt: "諮詢照顧",
    label: "專屬諮詢",
    icon: <LuClipboardList size={14} />,
    text: "專屬美容師一對一諮詢照顧，為你設計客製化護膚流程",
  },
  {
    img: "/img/Page 7-2.jpg",
    alt: "舒適空間",
    label: "舒適環境",
    icon: <LuLeaf size={14} />,
    text: "溫馨舒適且乾淨的空間，用心服務讓肌膚與心情一起放鬆",
  },
  {
    img: "/img/Page 7-3.png",
    alt: "專業手法",
    label: "專業手法",
    icon: <LuSparkles size={14} />,
    text: "搭配進口院線保養品與專業儀器輔助，透過美容師細膩的手法，讓每一次保養都發揮應有的效果",
  },
  {
    img: "/img/Page 7-4.png",
    alt: "客製流程",
    label: "客製流程",
    icon: <LuFlaskConical size={14} />,
    text: "採用顧問式概念，依不同膚質與護理階段，量身設計分區客製化流程，真正做到每個細節都符合肌膚需求",
  },
];

export default function Section7Transformation() {
  return (
    <section id="s7" className="py-8 sm:py-20 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>

      {/* Header block */}
      <div className="px-8 sm:px-12 lg:px-14 mb-8 lg:mb-18">
        <div className="flex items-center gap-4 mb-5">
          <div className="hidden sm:block h-px w-8" style={{ backgroundColor: "rgba(56,50,42,0.25)" }} />
          <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase" style={{ color: "var(--brand-gold)" }}>
            Skin Transformation Method
          </p>
        </div>
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h2 className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-tight" style={{ letterSpacing: "0.03em" }}>
            玖膚水煮蛋肌養成術
          </h2>
          <p className="text-sm lg:text-[17px] font-light shrink-0 pb-1" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
            Our 4 Commitments
          </p>
        </div>
      </div>

      {/* Full-width rule */}
      <div className="hidden sm:block w-full h-px mb-12 lg:mb-16" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />

      {/* ── Mobile: 2×2 card grid ── */}
      <div className="sm:hidden grid grid-cols-2 gap-3 px-5">
        {transformationCards.map((item, i) => (
          <div
            key={i}
            data-reveal
            data-reveal-delay={i + 1}
            className="flex flex-col rounded-[28px] p-2"
            style={{
              backgroundColor: "rgba(216, 211, 211, 0.72)",
              border: "1px solid rgba(56,50,42,0.08)",
              boxShadow: "0 10px 30px rgba(56,50,42,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="card-wrap relative w-full overflow-hidden rounded-[22px]" style={{ aspectRatio: "0.84 / 1" }}>
              <Image src={item.img} alt={item.alt} fill className="card-img object-cover object-center" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(56,50,42,0.18) 0%, rgba(56,50,42,0) 45%)" }} />
            </div>

            <div className="px-2 pt-3 pb-2">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[15px] font-medium leading-none truncate" style={{ color: "var(--brand-dark)", letterSpacing: "0.01em" }}>
                      {item.label}
                    </p>
                    <span
                      className="inline-flex h-4 w-6 shrink-0 p-1 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--brand-footer)", color: "var(--brand-footer-text)" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] font-light leading-[1.55]" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.01em" }}>
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
      <div className="hidden sm:block w-full h-px mt-4" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />

    </section>
  );
}
