"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay?: boolean },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

function shouldLoadTranslate(): boolean {
  if (typeof document === "undefined") return false;
  const cookie = document.cookie || "";
  if (cookie.includes("googtrans")) return true;
  if ((document.documentElement.className || "").includes("translated-ltr")) return true;
  return false;
}

export default function GoogleTranslateProvider() {
  useEffect(() => {
    let cancelled = false;
    let injected = false;

    const inject = () => {
      if (injected || cancelled) return;
      injected = true;

      if (typeof Node === "function" && Node.prototype) {
        const originalRemoveChild = Node.prototype.removeChild;
        Node.prototype.removeChild = function <T extends Node>(child: T): T {
          if (child.parentNode !== this) return child;
          return originalRemoveChild.apply(this, [child]) as T;
        };
        const originalInsertBefore = Node.prototype.insertBefore;
        Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
          if (referenceNode && referenceNode.parentNode !== this) return newNode;
          return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
        };
      }

      window.googleTranslateElementInit = function () {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "zh-TW", includedLanguages: "en,zh-TW", autoDisplay: false },
            "google_translate_element",
          );
        }
      };

      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    if (shouldLoadTranslate()) {
      inject();
      return () => {
        cancelled = true;
        document.querySelectorAll('script[src*="translate.google.com"]').forEach(s => s.remove());
      };
    }

    const onInteract = () => inject();
    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("pointerdown", onInteract, opts);
    window.addEventListener("keydown", onInteract, opts);
    window.addEventListener("scroll", onInteract, opts);

    type IdleWin = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    const w = window as IdleWin;
    const usingIdle = typeof w.requestIdleCallback === "function";
    const idleHandle = usingIdle
      ? (w.requestIdleCallback as NonNullable<IdleWin["requestIdleCallback"]>)(inject, { timeout: 6000 })
      : window.setTimeout(inject, 4000);

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      if (usingIdle && typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(idleHandle as number);
      else window.clearTimeout(idleHandle as number);
      document.querySelectorAll('script[src*="translate.google.com"]').forEach(s => s.remove());
    };
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
