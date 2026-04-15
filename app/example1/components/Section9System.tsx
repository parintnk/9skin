"use client";

import type { S9System, S9Step } from "@/lib/content/types";

function StepBlock({ step, align = "left", showArrow = true }: { step: S9Step; align?: "left" | "right" | "center"; showArrow?: boolean }) {
  return (
    <>
      <p className="inline-block text-[11px] tracking-[0.28em] font-light mb-1.5 px-2.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>{step.label}</p>
      <p className="text-[17px] font-normal mb-2" style={{ letterSpacing: "0.03em" }}>{step.title}</p>
      {showArrow && step.arrow && (
        <p className="text-[15px] font-light mb-2" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>{step.arrow}</p>
      )}
      <p className="text-[13px] lg:text-[15px] font-light leading-relaxed" style={{ color: "var(--brand-dark)", opacity: 0.85 }}>{step.desc}</p>
    </>
  );
}

function StepBlockMobile({ step, showArrow = true }: { step: S9Step; showArrow?: boolean }) {
  return (
    <>
      <p className="inline-block text-[8px] tracking-[0.24em] font-light mb-1 px-1.5 py-0.5 rounded-full" style={{ color: "var(--brand-footer-text)", backgroundColor: "#404338" }}>{step.label}</p>
      <p className="text-[11px] font-normal mb-0.5" style={{ letterSpacing: "0.03em" }}>{step.title}</p>
      {showArrow && step.arrow && (
        <p className="text-[10px] font-light mb-1 whitespace-nowrap" style={{ letterSpacing: "0.03em", color: "var(--brand-muted)" }}>{step.arrow}</p>
      )}
      <p className="text-[9.5px] font-light leading-[1.6]" style={{ color: "var(--brand-dark)", opacity: 0.82 }}>{step.desc}</p>
    </>
  );
}

export default function Section9System({ data }: { data: S9System }) {
  return (
    <section id="s9" className="py-8 sm:py-20 lg:py-24 px-8 sm:px-12 lg:px-14" style={{ backgroundColor: "var(--brand-lighter)" }}>
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
        <p className="text-xs lg:text-[13px] font-light tracking-[0.22em] uppercase shrink-0" style={{ color: "var(--brand-muted)" }}>{data.eyebrow}</p>
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(56,50,42,0.18)" }} />
      </div>

      <div data-reveal className="flex flex-col justify-center w-full rounded-2xl sm:rounded-[32px] px-6 sm:px-10 lg:px-14 py-8 lg:py-12 mb-14 lg:mb-20 min-h-[94svh] sm:min-h-0" style={{ backgroundColor: "#404338" }}>
        <h2 className="text-[1.35rem] sm:text-[2.2rem] lg:text-[2.8rem] font-medium text-center text-white mb-4 sm:mb-5 shrink-0" style={{ letterSpacing: "0.04em" }}>{data.cardHeading}</h2>
        <p className="text-[13px] lg:text-[17px] font-light text-center leading-[1.8] sm:leading-loose mb-7 sm:mb-10 lg:mb-12 max-w-3xl mx-auto shrink-0" style={{ color: "rgba(230,225,205,0.88)", letterSpacing: "0.03em" }}>{data.cardSubheading}</p>
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-10 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {data.pillars.map((col, i) => (
            <div key={i} data-reveal data-reveal-delay={i + 1} className="w-[85%] sm:w-auto shrink-0 snap-center bg-white/5 sm:bg-transparent p-5 sm:p-0 rounded-xl sm:rounded-none">
              <div className="pb-3 sm:pb-2.5 mb-4 border-b border-white/20 sm:border-[rgba(230,225,205,0.28)]">
                <p className="text-[14px] lg:text-[17px] font-medium sm:font-normal text-white" style={{ letterSpacing: "0.04em" }}>{col.title}</p>
              </div>
              <div className="space-y-2.5 sm:space-y-2">
                {col.lines.map((line, j) => (
                  <p key={j} className="text-[13px] lg:text-sm font-light leading-relaxed" style={{ color: "rgba(230,225,205,0.78)", letterSpacing: "0.02em" }}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 sm:pt-6 border-t border-white/10 sm:border-[rgba(230,225,205,0.16)] shrink-0">
          <p className="text-[12.5px] lg:text-[17px] font-light leading-[1.8] sm:leading-loose text-center sm:text-left" style={{ color: "rgba(230,225,205,0.92)", letterSpacing: "0.03em" }}>{data.cardFooter}</p>
        </div>
      </div>

      {/* Mobile diagram */}
      <div className="lg:hidden">
        <div className="flex justify-center mb-5" data-reveal>
          <div className="text-center max-w-[260px] px-2">
            <StepBlockMobile step={data.step12} showArrow={false} />
            <div className="w-2 h-2 rounded-full mx-auto mt-3" style={{ backgroundColor: "#404338" }} />
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="flex-1 text-right" data-reveal data-reveal-delay={1}><StepBlockMobile step={data.step56} /></div>
          <div className="shrink-0 relative" style={{ width: 120, height: 120 }} data-reveal>
            <div className="w-full h-full rounded-full flex items-center justify-center" style={{ border: "1.5px solid rgba(80,80,56,0.4)" }}>
              <div className="text-center px-2">
                <p className="text-[11px] font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>{data.circleTitle1}</p>
                <p className="text-[11px] font-bold leading-snug mt-0.5" style={{ letterSpacing: "0.04em" }}>{data.circleTitle2}</p>
              </div>
            </div>
            <div className="absolute w-2 h-2 rounded-full" style={{ top: -4, left: "calc(50% - 4px)", backgroundColor: "#404338" }} />
            <div className="absolute w-2 h-2 rounded-full" style={{ top: "calc(50% - 4px)", right: -4, backgroundColor: "#404338" }} />
            <div className="absolute w-2 h-2 rounded-full" style={{ top: "calc(50% - 4px)", left: -4, backgroundColor: "#404338" }} />
            <div className="absolute w-2 h-2 rounded-full" style={{ top: "calc(91% - 4px)", left: "calc(79% - 4px)", backgroundColor: "#404338" }} />
            <div className="absolute w-2 h-2 rounded-full" style={{ top: "calc(91% - 4px)", left: "calc(23% - 4px)", backgroundColor: "#404338" }} />
          </div>
          <div className="flex-1" data-reveal data-reveal-delay={2}><StepBlockMobile step={data.step34} /></div>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          <div className="flex-1 text-right" data-reveal data-reveal-delay={3}>
            <div className="w-2 h-2 rounded-full ml-auto mb-3" style={{ backgroundColor: "#404338" }} />
            <StepBlockMobile step={data.step78} />
          </div>
          <div className="shrink-0" style={{ width: 40 }} />
          <div className="flex-1" data-reveal data-reveal-delay={4}>
            <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: "#404338" }} />
            <StepBlockMobile step={data.step910} />
          </div>
        </div>
      </div>

      {/* Desktop diagram */}
      <div className="hidden lg:block">
        <div className="flex justify-center mb-6">
          <div className="text-center max-w-[260px]">
            <StepBlock step={data.step12} showArrow={false} />
            <div className="w-2.5 h-2.5 rounded-full mx-auto mt-5" style={{ backgroundColor: "#404338" }} />
          </div>
        </div>
        <div className="flex items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-right"><StepBlock step={data.step56} /></div>
          <div className="shrink-0 relative" style={{ width: 300, height: 300 }}>
            <div className="w-full h-full rounded-full flex items-center justify-center" style={{ border: "1.5px solid rgba(80,80,56,0.4)" }}>
              <div className="text-center px-10">
                <p className="text-lg font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>{data.circleTitle1}</p>
                <p className="text-lg font-bold leading-snug" style={{ letterSpacing: "0.04em" }}>{data.circleTitle2}</p>
                <p className="text-[11px] font-light mt-3 tracking-widest" style={{ color: "var(--brand-muted)" }}>{data.circleSubtitle}</p>
              </div>
            </div>
            <div className="absolute w-3 h-3 rounded-full" style={{ top: -6, left: "calc(50% - 6px)", backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(50% - 6px)", right: -6, backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(50% - 6px)", left: -6, backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(79% - 6px)", backgroundColor: "#404338" }} />
            <div className="absolute w-3 h-3 rounded-full" style={{ top: "calc(91% - 6px)", left: "calc(23% - 6px)", backgroundColor: "#404338" }} />
          </div>
          <div className="flex-1"><StepBlock step={data.step34} /></div>
        </div>
        <div className="flex gap-10 max-w-5xl mx-auto mt-6">
          <div className="flex-1 text-right">
            <div className="w-2.5 h-2.5 rounded-full ml-auto mb-5" style={{ backgroundColor: "#404338" }} />
            <StepBlock step={data.step78} />
          </div>
          <div className="shrink-0" style={{ width: 300 }} />
          <div className="flex-1">
            <div className="w-2.5 h-2.5 rounded-full mb-5" style={{ backgroundColor: "#404338" }} />
            <StepBlock step={data.step910} />
          </div>
        </div>
      </div>
    </section>
  );
}
