"use client";

import Image from "next/image";
import PinIcon from "./PinIcon";
import { img } from "@/lib/img";
import type { S1Hero } from "@/lib/content/types";

export default function Section1Hero({ data }: { data: S1Hero }) {
  return (
    <section id="s1" className="sm:min-h-screen flex flex-col">

      {/* Mobile */}
      <div className="lg:hidden relative flex flex-col" style={{ minHeight: "100svh" }}>
        <Image src={img(data.heroImage)} alt="9skin" fill className="object-cover object-[center_15%] pb-12" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.12) 25%, rgba(20,16,12,0.55) 100%, rgba(20,16,12,0.88) 100%)" }} />

        <div className="relative z-10 flex flex-col flex-1 px-7 pt-12 pb-5">
          <div className="flex items-center justify-center mt-[80px]">
            <Image src={img(data.logo)} alt="9skin 玖膚" width={160} height={58} className="w-[200px] h-auto object-cover" style={{ filter: "brightness(0) invert(1)", opacity: 0.90 }} priority />
          </div>
          <div className="mt-5">
            <h1 className="text-[2.25rem] font-medium text-center leading-snug mb-10" style={{ color: "#F0EBE2", letterSpacing: "0.04em" }}>
              {data.heading}
            </h1>
          </div>
          <div className="mt-auto flex items-center justify-center">
            <div>
              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-[12px] font-light leading-loose" style={{ color: "rgba(232,226,218,0.85)", letterSpacing: "0.03em" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-0" style={{ backgroundColor: "var(--brand-footer)" }}>
          <div className="flex-1 flex items-center gap-2.5 px-5 py-4">
            <PinIcon />
            <span className="text-xs font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>{data.locationTaipei}</span>
          </div>
          <div className="w-px h-4" style={{ backgroundColor: "rgba(197,186,176,0.2)" }} />
          <div className="flex-1 flex items-center gap-2.5 px-5 py-4">
            <PinIcon />
            <span className="text-xs font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>{data.locationKaohsiung}</span>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <main className="hidden lg:flex flex-1 flex-row">
        <div className="flex flex-col px-6 sm:px-12 lg:px-14 pt-5 pb-5 sm:pt-8 sm:pb-10 lg:pt-14 lg:pb-14 flex-1">
          <div className="mb-4 lg:mb-20">
            <Image src={img(data.logo)} alt="9skin 玖膚" width={220} height={80} className="w-[160px] lg:w-[200px] h-auto" style={{ mixBlendMode: "multiply", filter: "brightness(0.40)" }} />
          </div>
          <div className="mb-5 sm:mb-12">
            <h1 data-reveal data-reveal-delay="2" className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-light leading-tight mb-8" style={{ letterSpacing: "0.04em" }}>
              {data.heading}
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(56,50,42,0.3)" }} />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-10 lg:flex-1 lg:justify-center">
            <div data-reveal data-reveal-delay="3" className="space-y-3">
              {data.paragraphs.slice(0, 3).map((p, i) => (
                <p key={i} className="text-base lg:text-[20px] font-light leading-loose">{p}</p>
              ))}
            </div>
            <div data-reveal data-reveal-delay="4" className="space-y-3">
              <div className="w-20 h-px" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
              {data.paragraphs.slice(3).map((p, i) => (
                <p key={i} className="text-base lg:text-[20px] font-light leading-loose">{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative lg:w-[32%] xl:w-[34%]">
          <Image src={img(data.heroImage)} alt="9skin" fill className="object-cover object-[center_15%]" priority />
        </div>
      </main>

      <footer className="hidden lg:block py-5 px-8 sm:px-12" style={{ backgroundColor: "var(--brand-footer)" }}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-20">
          <div className="flex items-center gap-3">
            <PinIcon />
            <span className="text-sm lg:text-[17px] font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
              {data.locationTaipeiDesktop}
            </span>
          </div>
          <div className="w-px h-4" style={{ backgroundColor: "rgba(197,186,176,0.2)" }} />
          <div className="flex items-center gap-3">
            <PinIcon />
            <span className="text-sm lg:text-[17px] font-light tracking-wide" style={{ color: "var(--brand-footer-text)" }}>
              {data.locationKaohsiungDesktop}
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
