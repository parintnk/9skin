"use client";

import { useCallback, useEffect, useState } from "react";
import { navSections } from "./data";
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

export default function Page() {
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
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
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
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = navSections.findIndex(s => s.id === e.target.id);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    navSections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "var(--brand-cream)", color: "var(--brand-dark)" }}>
      <ScrollProgress scrollPct={scrollPct} />
      <Section1Hero />
      <Section2Concerns />
      <Section3Problems />
      <Section4ThreeKeys />
      <Section5WhyChoose />
      <Section6SkinCare />
      <Section7Transformation />
      <Section8Mission />
      <Section9System />
      <Section10Results onOpenLightbox={openLightbox} />
      <Section11KOL onOpenLightbox={openLightbox} />
      <Section12LineReviews onOpenLightbox={openLightbox} />
      <Section13Environment />
      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} images={lightboxImages} setIndex={setLightboxIndex} />
      )}
      <Footer />
      <SectionNav activeSection={activeSection} scrollPct={scrollPct} />
    </div>
  );
}
