"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { img } from "@/lib/img";
import type { S13Environment } from "@/lib/content/types";

export default function Section13Environment({ data }: { data: S13Environment }) {
  const images = data.images;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => setIndex(i => (i + 1) % images.length), 3500);
    return () => window.clearInterval(id);
  }, [images.length]);

  // Desktop grid areas — always 4 images: bed, tea, mach, lounge (in data order: 0=bed,1=tea,2=mach,3=lounge by default)
  const bed = images[0];
  const tea = images[1];
  const mach = images[2];
  const lounge = images[3];

  return (
    <section id="s13" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="sm:hidden flex flex-col px-4 py-10">
        <div className="text-center mb-4" data-reveal="fade">
          <p className="text-[10px] uppercase font-light mb-1" style={{ color: "var(--brand-gold)", letterSpacing: "0.26em" }}>{data.eyebrow}</p>
          <h2 className="text-3xl font-medium" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>{data.heading}</h2>
        </div>
        <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "16 / 9", backgroundColor: "rgba(255,255,255,0.4)" }}>
          {images.map((item, i) => (
            <Image key={i} src={img(item.src)} alt={item.alt} width={800} height={1000} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: index === i ? 1 : 0 }} />
          ))}
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[11px] font-medium" style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#fff", letterSpacing: "0.08em" }}>{index + 1} / {images.length}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {images.map((item, i) => (
            <button key={i} type="button" onClick={() => setIndex(i)} aria-label={item.alt} className="aspect-[4/3] overflow-hidden rounded-xl transition-all" style={{ outline: index === i ? "2px solid #F5EFE4" : "2px solid transparent", outlineOffset: 2, boxShadow: index === i ? "0 0 0 4px rgba(245,239,228,0.35)" : "none", opacity: index === i ? 1 : 0.7 }}>
              <Image src={img(item.src)} alt={item.alt} width={200} height={150} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="hidden sm:grid" data-reveal="fade" style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1.15fr 0.85fr", gridTemplateAreas: `"text bed bed" "tea mach lounge"`, height: "100vh", gap: 14, padding: 14 }}>
        <div className="flex flex-col justify-center rounded-[34px] px-10 lg:px-12" style={{ gridArea: "text", backgroundColor: "rgba(255,255,255,0.5)" }}>
          <p className="text-[11px] uppercase font-light mb-5" style={{ color: "var(--brand-gold)", letterSpacing: "0.28em" }}>{data.eyebrow}</p>
          <h2 className="text-3xl lg:text-6xl font-medium" style={{ color: "var(--brand-dark)", letterSpacing: "0.04em" }}>{data.heading}</h2>
          <p className="mt-4 text-sm lg:text-[17px] font-light leading-loose" style={{ color: "var(--brand-dark)", opacity: 0.78, letterSpacing: "0.03em" }}>{data.description}</p>
        </div>
        {tea && (<div className="overflow-hidden rounded-[34px]" style={{ gridArea: "tea" }}><Image src={img(tea.src)} alt={tea.alt} width={640} height={640} className="w-full h-full object-cover" /></div>)}
        {bed && (<div className="overflow-hidden rounded-[34px]" style={{ gridArea: "bed" }}><Image src={img(bed.src)} alt={bed.alt} width={800} height={640} className="w-full h-full object-cover" /></div>)}
        {mach && (<div className="overflow-hidden rounded-[34px]" style={{ gridArea: "mach" }}><Image src={img(mach.src)} alt={mach.alt} width={480} height={640} className="w-full h-full object-cover object-bottom" /></div>)}
        {lounge && (<div className="overflow-hidden rounded-[34px]" style={{ gridArea: "lounge" }}><Image src={img(lounge.src)} alt={lounge.alt} width={1200} height={640} className="w-full h-full object-cover object-center" /></div>)}
      </div>
    </section>
  );
}
