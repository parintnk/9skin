"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import JsonEditor from "./JsonEditor";
import { saveDraft, publishDraft, discardDraft } from "../actions";
import type { SectionKey } from "@/lib/content/types";

type Status = "idle" | "saving" | "saved" | "error";

const ANCHOR_MAP: Partial<Record<SectionKey, string>> = {
  s1_hero: "s1", s2_concerns: "s2", s3_problems: "s3", s4_three_keys: "s4",
  s5_why_choose: "s5", s6_skin_care: "s6", s7_transformation: "s7",
  s8_mission: "s8", s9_system: "s9", s10_results: "s10", s10b_cta: "s10",
  s11_kol: "s11", s13_environment: "s13",
};
function anchorFor(key: SectionKey): string {
  const id = ANCHOR_MAP[key];
  return id ? `#${id}` : "";
}

export default function SectionEditor({
  sectionKey,
  title,
  initialValue,
  hasDraft: initialHasDraft,
}: {
  sectionKey: SectionKey;
  title: string;
  initialValue: unknown;
  hasDraft: boolean;
}) {
  const [value, setValue] = useState<unknown>(initialValue);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasDraft, setHasDraft] = useState(initialHasDraft);
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [previewScale, setPreviewScale] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const previewContainerRef = useRef<HTMLDivElement | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previewReady = useRef(false);

  // Listen for iframe ready, then send initial state.
  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      if (ev.data?.type === "preview-ready") {
        previewReady.current = true;
        postToPreview(value);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = previewContainerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      setPreviewScale(viewport === "desktop" ? Math.min(1, w / 1280) : 1);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [viewport]);

  const postToPreview = useCallback((data: unknown) => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage({ type: "preview", section: sectionKey, data }, "*");
  }, [sectionKey]);

  const onChange = useCallback((next: unknown) => {
    setValue(next);
    if (previewReady.current) postToPreview(next);
    setStatus("saving");
    setErrorMsg(null);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      try {
        await saveDraft(sectionKey, next);
        setStatus("saved");
        setHasDraft(true);
      } catch (e) {
        setStatus("error");
        setErrorMsg(e instanceof Error ? e.message : "Save failed");
      }
    }, 800);
  }, [sectionKey, postToPreview]);

  const onPublish = async () => {
    setStatus("saving");
    try {
      await publishDraft(sectionKey);
      setHasDraft(false);
      setStatus("saved");
      iframeRef.current?.contentWindow?.location.reload();
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Publish failed");
    }
  };

  const onDiscard = async () => {
    if (!confirm("Discard draft and revert to published?")) return;
    await discardDraft(sectionKey);
    setHasDraft(false);
    iframeRef.current?.contentWindow?.location.reload();
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 border-b bg-white">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-sm text-neutral-500 hover:text-neutral-900">← Back</Link>
          <h1 className="text-sm font-medium">{title}</h1>
          <span className="text-[11px] text-neutral-400">{sectionKey}</span>
          {hasDraft && <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">draft</span>}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-neutral-500 min-w-16 text-right">
            {status === "saving" && "Saving..."}
            {status === "saved" && "Saved"}
            {status === "error" && <span className="text-red-600">Error</span>}
          </span>
          <div className="flex rounded-md border overflow-hidden text-xs">
            <button onClick={() => setViewport("desktop")} className={`px-3 py-1 ${viewport === "desktop" ? "bg-neutral-900 text-white" : "bg-white"}`}>Desktop</button>
            <button onClick={() => setViewport("mobile")} className={`px-3 py-1 ${viewport === "mobile" ? "bg-neutral-900 text-white" : "bg-white"}`}>Mobile</button>
          </div>
          <button onClick={onDiscard} disabled={!hasDraft} className="text-xs px-3 py-1.5 border rounded hover:bg-neutral-100 disabled:opacity-40">Discard</button>
          <button onClick={onPublish} disabled={!hasDraft} className="text-xs px-3 py-1.5 rounded text-white disabled:opacity-40" style={{ backgroundColor: "var(--brand-footer)" }}>Publish</button>
        </div>
      </header>
      {errorMsg && <div className="bg-red-50 border-b border-red-200 text-red-700 text-xs px-4 py-2">{errorMsg}</div>}
      <div className="flex-1 grid grid-cols-2 overflow-hidden">
        <div className="overflow-y-auto p-4 bg-neutral-50">
          <JsonEditor sectionKey={sectionKey} value={value} onChange={onChange} />
        </div>
        <div ref={previewContainerRef} className="border-l bg-neutral-200 flex items-center justify-center overflow-hidden relative">
          <iframe
            ref={iframeRef}
            src={`/example1?preview=1${anchorFor(sectionKey)}`}
            className="bg-white shadow"
            style={{
              width: viewport === "mobile" ? 390 : 1280,
              height: viewport === "mobile" ? "100%" : `${100 / (previewScale || 1)}%`,
              transform: viewport === "desktop" ? `scale(${previewScale})` : "none",
              transformOrigin: "top left",
              position: viewport === "desktop" ? "absolute" : "static",
              top: 0,
              left: 0,
              border: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
