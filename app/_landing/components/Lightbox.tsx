"use client";

import { useEffect } from "react";

type Props = {
  index: number;
  images: string[];
  setIndex: (updater: number | null | ((i: number | null) => number | null)) => void;
};

export default function Lightbox({ index, images, setIndex }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex(i => Math.max(0, (i as number) - 1));
      else if (e.key === "ArrowRight") setIndex(i => Math.min(images.length - 1, (i as number) + 1));
      else if (e.key === "Escape") setIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, setIndex]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(10,8,6,0.82)", cursor: "zoom-out" }}
      onClick={() => setIndex(null)}
      role="dialog"
      aria-modal="true"
      aria-label="圖片預覽"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={`圖片 ${index + 1} / ${images.length}`}
        loading="eager"
        decoding="async"
        style={{ width: "70vw", height: "70vh", objectFit: "contain", cursor: "default" }}
        onClick={e => e.stopPropagation()}
      />
      {/* Close */}
      <button
        type="button"
        aria-label="關閉預覽"
        className="absolute top-4 right-5 text-white/60 hover:text-white text-5xl font-extralight leading-none"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
        onClick={() => setIndex(null)}
      >
        ×
      </button>
      {/* Desktop side arrows */}
      {index > 0 && (
        <button
          type="button"
          aria-label="上一張"
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl font-extralight leading-none"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          onClick={e => { e.stopPropagation(); setIndex(i => Math.max(0, (i as number) - 1)); }}
        >
          ‹
        </button>
      )}
      {index < images.length - 1 && (
        <button
          type="button"
          aria-label="下一張"
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-6xl font-extralight leading-none"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          onClick={e => { e.stopPropagation(); setIndex(i => Math.min(images.length - 1, (i as number) + 1)); }}
        >
          ›
        </button>
      )}
      {/* Desktop counter */}
      <span className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-light tracking-widest">
        {index + 1} / {images.length}
      </span>
      {/* Mobile bottom nav */}
      <div
        className="sm:hidden absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "rgba(10,8,6,0.6)" }}
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="上一張"
          className="w-12 h-12 flex items-center justify-center text-3xl font-extralight rounded-full transition-opacity"
          style={{ color: "white", opacity: index === 0 ? 0.2 : 0.8 }}
          disabled={index === 0}
          onClick={() => setIndex(i => Math.max(0, (i as number) - 1))}
        >
          ‹
        </button>
        <span className="text-white/50 text-sm font-light tracking-widest">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          aria-label="下一張"
          className="w-12 h-12 flex items-center justify-center text-3xl font-extralight rounded-full transition-opacity"
          style={{ color: "white", opacity: index === images.length - 1 ? 0.2 : 0.8 }}
          disabled={index === images.length - 1}
          onClick={() => setIndex(i => Math.min(images.length - 1, (i as number) + 1))}
        >
          ›
        </button>
      </div>
    </div>
  );
}
