"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WP39DXVH";
const GA_ID = "G-6FL7Q6B68M";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

let injected = false;

function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtm);

  const ga = document.createElement("script");
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(ga);

  ga.addEventListener("load", () => {
    const init = document.createElement("script");
    init.text = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`;
    document.head.appendChild(init);
  });
}

export default function Analytics() {
  useEffect(() => {
    if (injected) return;

    const idleWin = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };

    const onInteract = () => inject();
    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("pointerdown", onInteract, opts);
    window.addEventListener("keydown", onInteract, opts);
    window.addEventListener("scroll", onInteract, opts);
    window.addEventListener("touchstart", onInteract, opts);

    const usingIdle = typeof idleWin.requestIdleCallback === "function";
    const handle = usingIdle
      ? idleWin.requestIdleCallback!(inject, { timeout: 8000 })
      : window.setTimeout(inject, 6000);

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("touchstart", onInteract);
      if (usingIdle && typeof idleWin.cancelIdleCallback === "function") {
        idleWin.cancelIdleCallback(handle as number);
      } else {
        window.clearTimeout(handle as number);
      }
    };
  }, []);

  return null;
}
