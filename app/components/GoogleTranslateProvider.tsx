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

export default function GoogleTranslateProvider() {
  useEffect(() => {
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

    return () => {
      document.querySelectorAll('script[src*="translate.google.com"]').forEach(s => s.remove());
    };
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
