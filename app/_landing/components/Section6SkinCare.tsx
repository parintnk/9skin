"use client";

import Image from "next/image";
import { img } from "@/lib/img";
import type { S6SkinCare } from "@/lib/content/types";

export default function Section6SkinCare({ data }: { data: S6SkinCare }) {
  return (
    <section id="s6" className="flex flex-col lg:flex-row" style={{ backgroundColor: "var(--brand-lighter)" }}>
      <div className="hidden lg:block relative lg:w-[38%] xl:w-[40%]" style={{ minHeight: 700 }}>
        <Image src={img(data.image)} alt={data.subtitleZh} fill className="object-cover object-[center_15%]" />
      </div>
      <div className="flex-1 flex flex-col px-6 sm:px-12 lg:px-14 py-6 sm:py-14 lg:py-16">
        <div className="flex items-center gap-4 mb-4 sm:mb-8">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
          <p className="text-xs lg:text-[13px] tracking-[0.28em] uppercase font-light shrink-0" style={{ color: "var(--brand-gold)" }}>{data.eyebrow}</p>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
        </div>
        <h2 data-reveal className="text-[1.8rem] sm:text-[3.4rem] lg:text-[4rem] font-light mb-2 sm:mb-3" style={{ letterSpacing: "0.08em" }}>{data.heading}</h2>
        <div data-reveal data-reveal-delay="1" className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1 sm:mb-2">
          <span className="text-lg sm:text-[1.8rem] lg:text-[2.1rem] font-normal" style={{ letterSpacing: "0.04em" }}>{data.subtitleZh}</span>
          <span className="text-sm sm:text-lg lg:text-xl font-light" style={{ color: "rgba(56,50,42,0.35)" }}>·</span>
          <span className="text-sm sm:text-base lg:text-[20px] font-light" style={{ color: "var(--brand-muted)", letterSpacing: "0.04em" }}>{data.subtitleTag}</span>
        </div>
        <div className="w-12 h-0.5 mt-3 sm:mt-5 mb-4 sm:mb-7" style={{ backgroundColor: "var(--brand-gold)", opacity: 0.5 }} />
        <p className="text-[13px] sm:text-base lg:text-[17px] font-light leading-relaxed sm:leading-loose mb-4 sm:mb-10" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>
          {data.description}
        </p>
        <div className="flex items-center gap-4 mb-4 sm:mb-8">
          <h3 className="text-base sm:text-lg lg:text-[1.3rem] font-light shrink-0" style={{ letterSpacing: "0.06em" }}>{data.itemsHeading}</h3>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.16)" }} />
        </div>
        <div className="flex flex-col flex-1">
          {data.items.map((item, i) => (
            <div key={item.num} data-reveal data-reveal-delay={Math.min(i + 1, 5)} className="flex gap-3 sm:gap-5 items-start py-2 sm:py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(56,50,42,0.1)" }}>
              <span className="text-[11px] sm:text-[13px] font-light tracking-wider shrink-0 pt-0.75" style={{ color: "var(--brand-gold)", minWidth: "2.2rem" }}>{item.num}</span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <p className="text-sm sm:text-base lg:text-[20px] font-normal shrink-0" style={{ letterSpacing: "0.04em" }}>{item.title}</p>
                <p className="text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85, letterSpacing: "0.02em" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-8 pt-4 sm:pt-7 space-y-1.5" style={{ borderTop: "1px solid rgba(56,50,42,0.14)" }}>
          {data.footer.map((line, i) => (
            <p key={i} className="text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed sm:leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.86, letterSpacing: "0.03em" }}>{line}</p>
          ))}
        </div>
      </div>
      <div className="lg:hidden w-full px-5 pt-2 pb-4">
        <div className="overflow-hidden rounded-3xl max-h-[35vh]" style={{ boxShadow: "0 8px 32px rgba(30,24,18,0.13)" }}>
          <Image src={img(data.image)} alt={data.subtitleZh} width={900} height={1200} className="w-full h-full object-cover object-[center_12%]" />
        </div>
      </div>
    </section>
  );
}
