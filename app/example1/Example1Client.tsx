"use client";

import { useCallback, useEffect, useState } from "react";
import type { AllContent } from "@/lib/content/types";
import ScrollProgress from "./components/ScrollProgress";
import SectionNav from "./components/SectionNav";
import Lightbox from "./components/Lightbox";
import Section1Hero from "./components/Section1Hero";
import Section2Concerns from "./components/Section2Concerns";
import Section3Problems from "./components/Section3Problems";
import Section4ThreeKeys from "./components/Section4ThreeKeys";
import Section5WhyChoose from "./components/Section5WhyChoose";
import Section6SkinCare from "./components/Section6SkinCare";
import Section7Transformation from "./components/Section7Transformation";
import Section8Mission from "./components/Section8Mission";
import Section9System from "./components/Section9System";
import Section10Results from "./components/Section10Results";
import Section11KOL from "./components/Section11KOL";
import Section12LineReviews from "./components/Section12LineReviews";
import Section13Environment from "./components/Section13Environment";
import Footer from "./components/Footer";

type PreviewMessage = {
  type: "preview";
  section: keyof AllContent;
  data: unknown;
};

export default function Example1Client({ content: initial, previewMode }: { content: AllContent; previewMode: boolean }) {
  const [content, setContent] = useState<AllContent>(initial);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const apply = () => {
      const els = document.querySelectorAll("[data-reveal]");
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-revealed"); obs.unobserve(e.target); } }),
        { threshold: 0.12 },
      );
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          obs.observe(el);
        }
      });
      return () => obs.disconnect();
    };
    return apply();
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          const idx = content.nav.sections.findIndex(s => s.id === e.target.id);
          if (e.isIntersecting && idx !== -1) setActiveSection(idx);
        });
      },
      { threshold: 0.3 },
    );
    content.nav.sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [content]);

  useEffect(() => {
    if (!previewMode) return;
    const onMsg = (ev: MessageEvent<PreviewMessage>) => {
      const m = ev.data;
      if (!m || m.type !== "preview" || !m.section) return;
      setContent(c => ({ ...c, [m.section]: { ...((c as Record<string, unknown>)[m.section] as object), ...(m.data as object) } } as AllContent));
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "preview-ready" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, [previewMode]);

  return (
    <div style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand-dark)" }}>
      <ScrollProgress scrollPct={scrollPct} />
      <Section1Hero data={content.s1_hero} />
      <Section2Concerns data={content.s2_concerns} />
      <Section3Problems data={content.s3_problems} />
      <Section4ThreeKeys data={content.s4_three_keys} />
      <Section5WhyChoose data={content.s5_why_choose} />
      <Section6SkinCare data={content.s6_skin_care} />
      <Section7Transformation data={content.s7_transformation} />
      <Section8Mission data={content.s8_mission} />
      <Section9System data={content.s9_system} />
      <Section10Results data={content.s10_results} s10bData={content.s10b_cta} onOpenLightbox={openLightbox} />
      <Section11KOL data={content.s11_kol} onOpenLightbox={openLightbox} />
      <Section12LineReviews onOpenLightbox={openLightbox} />
      <Section13Environment data={content.s13_environment} />
      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} images={lightboxImages} setIndex={setLightboxIndex} />
      )}
      <Footer data={content.footer} />
      <SectionNav activeSection={activeSection} scrollPct={scrollPct} sections={content.nav.sections} />
    </div>
  );
}
