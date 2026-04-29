"use client";

import Image from "next/image";
import { SiLine } from "react-icons/si";
import { img } from "@/lib/img";
import type { S10Results, S10bCTA } from "@/lib/content/types";

export default function Section10Results({ data, s10bData, onOpenLightbox }: { data: S10Results; s10bData: S10bCTA; onOpenLightbox: (images: string[], index: number) => void }) {
  return (
    <>
      <section id="s10" className="py-8 sm:py-24 lg:py-28" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-9xl mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
            <p className="text-[11px] lg:text-[13px] font-light tracking-[0.28em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>{data.eyebrow}</p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
          </div>
          <div data-reveal="fade" className="text-center mb-6 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-4" style={{ letterSpacing: "0.04em" }}>{data.heading}</h2>
            <p className="text-sm lg:text-[17px] font-light" style={{ color: "var(--brand-dark)", opacity: 0.72, letterSpacing: "0.05em" }}>{data.subheading}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {data.items.map((item, i) => (
              <div key={i} data-reveal="fade" data-reveal-delay={Math.min(i + 1, 5)} className="card-wrap flex flex-col group cursor-zoom-in" onClick={() => { onOpenLightbox(data.items.map(r => img(r.img)), i); }}>
                <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                  <Image src={img(item.img)} alt={item.title} width={400} height={400} className="card-img w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 sm:mt-16 flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
            <p className="md:text-[18px] text-xs font-light tracking-[0.15em] shrink-0" style={{ color: "var(--brand-dark)", opacity: 0.62 }}>{data.disclaimer}</p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-20" style={{ backgroundColor: "var(--brand-footer)" }}>
        <div className="flex flex-col items-center gap-6 px-6 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase font-light" style={{ color: "var(--brand-footer-text)", opacity: 0.6 }}>{s10bData.eyebrow}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-light leading-snug" style={{ color: "var(--brand-footer-text)", letterSpacing: "0.04em" }}>{s10bData.heading}</h2>
          <p className="text-[15px] lg:text-[17px] font-light max-w-md leading-loose" style={{ color: "rgba(197,186,176,0.8)", letterSpacing: "0.03em" }}>{s10bData.text}</p>
          <a href={s10bData.buttonUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-3 px-8 py-4 rounded-full font-light text-sm transition-opacity hover:opacity-85" style={{ backgroundColor: "#06C755", color: "white", letterSpacing: "0.12em" }}>
            <SiLine size={20} />
            {s10bData.buttonText}
          </a>
        </div>
      </section>
    </>
  );
}
