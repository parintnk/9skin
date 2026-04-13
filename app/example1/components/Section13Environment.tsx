"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/img/Page 12-2.jpg", alt: "護膚床" },
  { src: "/img/Page 12-1.jpg", alt: "歡迎茶飲" },
  { src: "/img/Page 12-3.jpg", alt: "肌膚檢測儀器" },
  { src: "/img/Page 12-4.jpg", alt: "舒適候診空間" },
];

export default function Section13Environment() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section style={{ backgroundColor: "var(--brand-cream)" }}>
      {/* Mobile layout — gallery with thumbnails */}
      <div className="sm:hidden flex flex-col px-4 py-10">
        <div className="text-center mb-4" data-reveal="fade">
          <p className="text-[10px] uppercase font-light mb-1" style={{ color: "var(--brand-gold)", letterSpacing: "0.26em" }}>
            Environmental Introduction
          </p>
          <h2 className="text-3xl font-medium" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>環境介紹</h2>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "16 / 9", backgroundColor: "rgba(255,255,255,0.4)" }}>
          {images.map((item, i) => (
            <Image
              key={i}
              src={item.src}
              alt={item.alt}
              width={800}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: index === i ? 1 : 0 }}
            />
          ))}

          <div
            className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[11px] font-medium"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#fff", letterSpacing: "0.08em" }}
          >
            {index + 1} / {images.length}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-3">
          {images.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={item.alt}
              className="aspect-[4/3] overflow-hidden rounded-xl transition-all"
              style={{
                outline: index === i ? "2px solid #F5EFE4" : "2px solid transparent",
                outlineOffset: 2,
                boxShadow: index === i ? "0 0 0 4px rgba(245,239,228,0.35)" : "none",
                opacity: index === i ? 1 : 0.7,
              }}
            >
              <Image src={item.src} alt={item.alt} width={200} height={150}
                className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div
        className="hidden sm:grid"
        data-reveal="fade"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1.15fr 0.85fr",
          gridTemplateAreas: `"text bed bed" "tea mach lounge"`,
          height: "100vh",
          gap: 14,
          padding: 14,
        }}
      >
        <div
          className="flex flex-col justify-center rounded-[34px] px-10 lg:px-12"
          style={{ gridArea: "text", backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <p className="text-[11px] uppercase font-light mb-5" style={{ color: "var(--brand-gold)", letterSpacing: "0.28em" }}>
            Environmental Introduction
          </p>
          <h2 className="text-3xl lg:text-6xl font-medium" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>
            環境介紹
          </h2>
          <p className="mt-4 text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.78, letterSpacing: "0.03em" }}>
            以安定、乾淨、柔和的空間語彙，讓顧客從入店開始就能慢下來，專心感受每一次護理。
          </p>
        </div>

        <div className="overflow-hidden rounded-[34px]" style={{ gridArea: "tea" }}>
          <Image src="/img/Page 12-1.jpg" alt="歡迎茶飲" width={640} height={640}
            className="w-full h-full object-cover" />
        </div>

        <div className="overflow-hidden rounded-[34px]" style={{ gridArea: "bed" }}>
          <Image src="/img/Page 12-2.jpg" alt="護膚床" width={800} height={640}
            className="w-full h-full object-cover" />
        </div>

        <div className="overflow-hidden rounded-[34px]" style={{ gridArea: "mach" }}>
          <Image src="/img/Page 12-3.jpg" alt="肌膚檢測儀器" width={480} height={640}
            className="w-full h-full object-cover object-bottom" />
        </div>

        <div className="overflow-hidden rounded-[34px]" style={{ gridArea: "lounge" }}>
          <Image src="/img/Page 12-4.jpg" alt="舒適候診空間" width={1200} height={640}
            className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
