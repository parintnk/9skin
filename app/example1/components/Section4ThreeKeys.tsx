"use client";

import Image from "next/image";
import { img } from "@/lib/img";
import type { S4ThreeKeys } from "@/lib/content/types";

export default function Section4ThreeKeys({ data }: { data: S4ThreeKeys }) {
  const steps = data.steps;
  return (
    <>
      <section id="s4" className="hidden lg:flex flex-col" style={{ backgroundColor: "var(--brand-light)" }}>
        <div className="px-14 pt-16 pb-10">
          <div className="flex flex-row items-start gap-20">
            <h2 data-reveal className="text-[2.6rem] font-light leading-snug w-[44%] shrink-0" style={{ letterSpacing: "0.03em" }}>
              {data.heading}
            </h2>
            <div className="flex flex-col justify-center gap-2">
              {data.intro.map((line, i) => (
                <p key={i} className="text-[20px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>{line}</p>
              ))}
            </div>
          </div>
          <div className="w-full h-px mt-10" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
        </div>
        <div className="flex flex-row flex-1">
          <div className="relative w-[44%] xl:w-[46%]" style={{ minHeight: 520 }}>
            <Image src={img(data.desktopImage)} alt="水煮蛋肌" fill className="object-cover object-center" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-12 px-14 py-16">
            {steps.map((step, i) => (
              <div key={step.num} data-reveal data-reveal-delay={i + 1}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--brand-footer)" }}>
                    <span className="text-xs font-light tracking-wider" style={{ color: "var(--brand-footer-text)" }}>{step.num}</span>
                  </div>
                  <h3 className="text-[1.4rem] font-light" style={{ letterSpacing: "0.04em" }}>{step.title}</h3>
                </div>
                <div className="w-full h-px mb-5" style={{ backgroundColor: "rgba(56,50,42,0.15)" }} />
                <div className="space-y-2">
                  {step.lines.map((line, li) => (
                    <p key={li} className="text-base font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.82, letterSpacing: "0.03em" }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="s4-mobile" className="lg:hidden relative min-h-screen flex flex-col overflow-hidden">
        <Image src={img(data.mobileBg)} style={{ mixBlendMode: "multiply", filter: "brightness(0.70)", opacity: 0.4 }} alt="水煮蛋肌" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255,252,247,0.55) 0%, rgba(255,252,247,0.40) 40%, rgba(255,252,247,0.60) 100%)" }} />
        <div className="relative z-10 flex flex-col flex-1 px-6 sm:px-10 py-10 sm:py-14">
          <div data-reveal className="mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-light leading-snug mb-3" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>{data.heading}</h2>
            <div className="h-px w-16" style={{ backgroundColor: "rgba(56,50,42,0.2)" }} />
          </div>
          <div className="mb-6 sm:mb-8">
            <p className="text-[13px] sm:text-base font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.8, letterSpacing: "0.03em" }}>
              {data.intro.join("")}
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:gap-8 flex-1">
            {steps.map((step, i) => (
              <div key={step.num} data-reveal data-reveal-delay={i + 1} className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6" style={{ backgroundColor: "rgba(228, 227, 227, 0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(56,50,42,0.08)", boxShadow: "0 4px 20px rgba(56,50,42,0.06)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--brand-footer)" }}>
                    <span className="text-[10px] font-light tracking-wider" style={{ color: "var(--brand-footer-text)" }}>{step.num}</span>
                  </div>
                  <h3 className="text-[15px] sm:text-lg font-light" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>{step.title}</h3>
                </div>
                <div className="h-px mb-3" style={{ backgroundColor: "rgba(56,50,42,0.1)" }} />
                <div className="space-y-1">
                  {step.lines.map((line, li) => (
                    <p key={li} className="text-[12px] sm:text-[14px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.78, letterSpacing: "0.03em" }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
