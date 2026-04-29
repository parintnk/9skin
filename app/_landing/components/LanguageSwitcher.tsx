"use client";

import { useEffect, useState } from "react";

type Lang = "ZH" | "EN";

function detectLang(): Lang {
  if (typeof window === "undefined") return "ZH";
  const cookies = document.cookie.split(";");
  for (const c of cookies) {
    const [k, v] = c.trim().split("=");
    if (k === "googtrans" && (v?.includes("/en") || decodeURIComponent(v || "").includes("/en"))) return "EN";
  }
  if ((document.documentElement.className || "").includes("translated-ltr")) return "EN";
  return "ZH";
}

function deleteCookie(name: string) {
  const host = window.location.hostname;
  const root = host.split(".").slice(-2).join(".");
  ["", host, "." + host, root, "." + root].forEach(d => {
    let s = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    if (d) s += `; domain=${d}`;
    document.cookie = s;
  });
}

function setCookie(name: string, value: string) {
  const expires = new Date(Date.now() + 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  const host = window.location.hostname;
  if (host !== "localhost") {
    const root = host.split(".").slice(-2).join(".");
    document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${root}`;
  }
}

export default function LanguageSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [lang, setLang] = useState<Lang>("ZH");

  useEffect(() => {
    setLang(detectLang());
    const t = setInterval(() => setLang(prev => {
      const d = detectLang();
      return d !== prev ? d : prev;
    }), 1200);
    return () => clearInterval(t);
  }, []);

  const pick = (next: Lang) => {
    if (next === lang) return;
    if (next === "ZH") deleteCookie("googtrans");
    else setCookie("googtrans", "/zh-TW/en");
    setTimeout(() => {
      window.location.href = window.location.pathname + `?lang=${next.toLowerCase()}&t=${Date.now()}`;
    }, 80);
  };

  const onLight = tone === "light";
  const base = onLight ? "rgba(245,239,228,0.78)" : "rgba(56,50,42,0.55)";
  const active = onLight ? "#F5EFE4" : "#38322A";
  const divider = onLight ? "rgba(245,239,228,0.35)" : "rgba(56,50,42,0.25)";

  return (
    <div
      translate="no"
      className="notranslate inline-flex items-center gap-2.5 text-[11px] tracking-[0.28em] font-light select-none"
    >
      <button
        onClick={() => pick("ZH")}
        aria-label="繁體中文"
        style={{ color: lang === "ZH" ? active : base, fontWeight: lang === "ZH" ? 500 : 300 }}
        className="transition-colors hover:opacity-100"
      >
        <span suppressHydrationWarning>中</span>
      </button>
      <span aria-hidden style={{ width: 1, height: 10, backgroundColor: divider }} />
      <button
        onClick={() => pick("EN")}
        aria-label="English"
        style={{ color: lang === "EN" ? active : base, fontWeight: lang === "EN" ? 500 : 300 }}
        className="transition-colors hover:opacity-100"
      >
        <span suppressHydrationWarning>EN</span>
      </button>
    </div>
  );
}
