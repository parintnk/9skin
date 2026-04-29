"use client";

import Image from "next/image";
import { img } from "@/lib/img";
import type { S8Mission } from "@/lib/content/types";

export default function Section8Mission({ data }: { data: S8Mission }) {
  return (
    <section id="s8" className="flex flex-col lg:flex-row relative" style={{ background: "linear-gradient(180deg, var(--brand-lighter) 0%, rgba(255,255,255,0.72) 100%)" }}>
      <div className="flex-1 flex flex-col px-6 sm:px-12 lg:px-14 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-0">
        <p className="text-[10px] sm:text-sm font-light mb-3 sm:mb-5 uppercase tracking-[0.2em]" style={{ color: "var(--brand-muted)" }}>
          {data.eyebrow}
        </p>
        <div data-reveal className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-3 mb-8 sm:mb-8">
          <div className="shrink-0 pt-1 sm:pt-0">
            <Image src={img(data.logo)} alt="9skin玖膚" width={120} height={40} className="h-[22px] sm:h-8 lg:h-10 w-auto object-contain" style={{ mixBlendMode: "multiply", filter: "brightness(0.40)" }} />
          </div>
          <h2 className="text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] font-medium leading-tight tracking-[0.05em] text-[var(--brand-dark)]">
            {data.heading}
          </h2>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-[15px] sm:text-xl lg:text-2xl font-medium tracking-[0.15em] text-[var(--brand-dark)]">
            {data.subheading}
          </h3>
          <div className="flex-1 h-px bg-[var(--brand-dark)] opacity-10" />
        </div>
        <div className="space-y-4 mb-12 sm:mb-10 pl-1 sm:pl-0">
          {data.paragraphs.map((p, i) => (
            <p key={i} data-reveal data-reveal-delay={i + 1} className="text-[13.5px] sm:text-[15px] lg:text-base font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">{p}</p>
          ))}
        </div>

        <div data-reveal className="flex flex-col sm:flex-row gap-0 flex-1 relative w-full">
          <div className="hidden sm:block relative sm:w-[42%] shrink-0 overflow-hidden" style={{ minHeight: 200, borderRadius: "2px 0 0 0" }}>
            <Image src={img(data.salonImage)} alt="玖膚空間" fill className="object-cover object-center" />
          </div>
          <div className="flex-1 relative rounded-2xl sm:rounded-none overflow-hidden w-full">
            <div className="absolute inset-0 bg-white/60 sm:bg-white/72 backdrop-blur-xl border border-white/80 sm:border-0 rounded-2xl sm:rounded-none shadow-[0_8px_32px_rgba(0,0,0,0.04)] sm:shadow-[0_12px_28px_rgba(30,24,18,0.06)]" />
            <div className="relative z-10 px-6 py-8 sm:px-8 sm:pt-8 sm:pb-10 flex flex-col gap-6 w-full">
              <div className="absolute top-4 right-6 text-[5rem] text-[var(--brand-muted)] opacity-20 font-serif leading-none select-none">&quot;</div>
              <div className="flex flex-col gap-1.5 relative z-10">
                <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[var(--brand-muted)]">{data.founderStoryEyebrow}</span>
                <h4 className="text-[15px] sm:text-[15px] font-medium tracking-[0.1em] text-[var(--brand-dark)]">{data.founderStoryHeading}</h4>
              </div>
              <div className="space-y-4 relative z-10">
                {data.founderStoryParagraphs.map((p, i) => (
                  <p key={i} className="text-[13.5px] sm:text-sm lg:text-[16px] font-light leading-[1.8] sm:leading-loose text-[var(--brand-dark)] opacity-85 tracking-[0.04em]">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full px-6 pb-12 pt-2">
        <div className="relative overflow-hidden w-full rounded-[24px] h-[40vh] min-h-[320px] max-h-[480px]" style={{ boxShadow: "0 14px 40px rgba(30,24,18,0.08)" }}>
          <Image src={img(data.studioImage)} alt="玖膚工作室" fill className="object-cover object-[center_30%]" />
        </div>
      </div>
      <div className="hidden lg:block relative lg:w-[34%] xl:w-[36%]" style={{ minHeight: 640 }}>
        <Image src={img(data.studioImage)} alt="玖膚工作室" fill className="object-cover object-center" />
      </div>
    </section>
  );
}
