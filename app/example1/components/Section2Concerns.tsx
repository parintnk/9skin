"use client";

import Image from "next/image";
import { concerns } from "../data";

export default function Section2Concerns() {
  return (
    <section className="h-auto min-h-[600px] py-8 sm:h-auto sm:min-h-0 sm:py-16 lg:py-20 flex flex-col justify-center overflow-hidden" style={{ backgroundColor: "var(--brand-lighter)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center sm:block">

        <div data-reveal className="text-center mb-4 sm:mb-8">
          <h2 className="text-xl sm:text-3xl lg:text-[2.6rem] font-light leading-snug mb-1 sm:mb-2" style={{ letterSpacing: "0.04em" }}>
            常見的肌膚困擾，你中了幾項？
          </h2>
          <p className="text-[12px] sm:text-sm lg:text-[17px] font-light mt-1 sm:mt-0" style={{ color: "var(--brand-muted)", letterSpacing: "0.06em" }}>
            How many of these common skin concerns do you struggle with?
          </p>
          <div className="hidden sm:flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--brand-gold)" }} />
            <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-10 w-full">
          {concerns.map((c, i) => (
            <div key={i} data-reveal data-reveal-delay={i + 1} className="flex flex-col gap-3">
              <div className="card-wrap relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "543/280", boxShadow: "0 4px 20px rgba(56,50,42,0.10)" }}>
                <Image src={c.img} alt={c.title} fill className="card-img object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,24,18,0.45) 0%, rgba(30,24,18,0) 55%)" }} />
                <div className="absolute inset-0 flex flex-col justify-end px-5 pb-4">
                  <p className="text-white font-normal text-base lg:text-lg leading-snug mb-1" style={{ letterSpacing: "0.04em" }}>{c.title}</p>
                  <p className="text-white/65 text-[11px] tracking-widest font-light">{c.subtitle}</p>
                </div>
              </div>
              <p className="text-[13px] lg:text-[15px] font-light leading-[1.8] line-clamp-3" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 sm:hidden mt-2 pt-2 pb-2 w-full max-w-[340px]">
          {concerns.map((c, i) => (
            <div key={i} data-reveal data-reveal-delay={i + 1} className="relative">
              {/* The Box */}
              <div
                className="relative ml-5 mr-6 border pt-5 pb-3 px-3"
                style={{ borderColor: "rgba(56,50,42,0.3)" }}
              >
                {/* The top-left oversized number */}
                <span
                  className="absolute z-10 flex items-center justify-center font-serif italic"
                  style={{
                    top: "-1.4rem",
                    left: "-1.2rem",
                    fontSize: "3.0rem",
                    color: "var(--brand-dark)",
                    backgroundColor: "var(--brand-lighter)",
                    padding: "0 6px",
                    lineHeight: "1"
                  }}
                >
                  {i + 1}
                </span>

                {/* The top-right circular image */}
                <div
                  className="absolute z-10 rounded-full overflow-hidden"
                  style={{
                    top: "-16px",
                    right: "-10px",
                    width: "60px",
                    height: "60px",
                    border: "3px solid var(--brand-lighter)"
                  }}
                >
                  <Image src={c.img} alt={c.title} fill className="object-cover object-center" />
                </div>

                <div className="text-center mb-2 px-2 relative z-0">
                  <h3 className="text-[13px] font-medium leading-[1.4] tracking-widest" style={{ color: "var(--brand-dark)", opacity: 0.9 }}>
                    {c.title}
                  </h3>
                </div>
                <p className="text-[10px] leading-[1.6] font-light text-justify relative z-0" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex justify-center mt-6 lg:mt-8">
          <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(56,50,42,0.25)", backgroundColor: "rgba(56,50,42,0.04)" }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2.5 9.5l5.5 5 5.5-5" stroke="var(--brand-dark)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="hidden sm:block mt-6">
          <div className="rounded-full px-8 py-3 lg:py-4 text-center mx-auto" style={{ backgroundColor: "var(--brand-footer)", boxShadow: "0 4px 24px rgba(30,24,18,0.12)", maxWidth: "80%" }}>
            <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-footer-text)", letterSpacing: "0.05em" }}>
              這些問題看似獨立,實際上都指向同一個核心:肌膚缺乏正確的深層調理與系統化管理
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
