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
  const [confirmDiscard, setConfirmDiscard] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const previewContainerRef = useRef<HTMLDivElement | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previewReady = useRef(false);
  const isDirty = status === "saving";

  // Warn before leaving with unsaved changes (debounced save still pending)
  useEffect(() => {
    if (!isDirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);

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

  const pendingValueRef = useRef<unknown>(initialValue);

  const flushSave = useCallback(async () => {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    try {
      await saveDraft(sectionKey, pendingValueRef.current);
      setStatus("saved");
      setHasDraft(true);
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Save failed");
    }
  }, [sectionKey]);

  const onChange = useCallback((next: unknown) => {
    setValue(next);
    pendingValueRef.current = next;
    if (previewReady.current) postToPreview(next);
    setStatus("saving");
    setErrorMsg(null);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => { flushSave(); }, 800);
  }, [postToPreview, flushSave]);

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
    if (saveTimer.current) clearTimeout(saveTimer.current);
    await discardDraft(sectionKey);
    setHasDraft(false);
    setConfirmDiscard(false);
    iframeRef.current?.contentWindow?.location.reload();
    // Reload editor to fetch the published value
    window.location.reload();
  };

  const statusDot = status === "saving" ? "#C48A2B" : status === "error" ? "#B44B3A" : status === "saved" ? "#3F6640" : "#A8A090";
  const statusText = status === "saving" ? "Saving…" : status === "error" ? "Error" : status === "saved" ? (hasDraft ? "Draft saved" : "Saved") : "Ready";

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between px-5 py-3 border-b" style={{ background: "var(--a-surface)", borderColor: "var(--a-border)" }}>
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/admin" className="a-btn a-btn-ghost text-xs" style={{ padding: "5px 8px" }} aria-label="Back">
            <span aria-hidden>←</span>
          </Link>
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--a-text-muted)" }}>
            <Link href="/admin" className="hover:underline">Sections</Link>
            <span>/</span>
          </div>
          <h1 className="text-sm font-medium truncate">{title}</h1>
          <span className="text-[10.5px] font-mono px-1.5 py-0.5 rounded" style={{ background: "var(--a-accent-soft)", color: "var(--a-text-muted)" }}>{sectionKey}</span>
          {hasDraft && <span className="a-badge a-badge-draft">● draft</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[11.5px]" style={{ color: "var(--a-text-muted)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: statusDot, display: "inline-block" }} />
            {statusText}
          </span>
          <div className="a-segment">
            <button onClick={() => setViewport("desktop")} className={viewport === "desktop" ? "is-active" : ""} aria-label="Desktop">
              <span aria-hidden>🖥</span> Desktop
            </button>
            <button onClick={() => setViewport("mobile")} className={viewport === "mobile" ? "is-active" : ""} aria-label="Mobile">
              <span aria-hidden>📱</span> Mobile
            </button>
          </div>
          <button onClick={() => setConfirmDiscard(true)} disabled={!hasDraft} className="a-btn a-btn-danger" style={{ fontSize: 12 }}>Discard</button>
          <button onClick={onPublish} disabled={!hasDraft} className="a-btn a-btn-primary" style={{ fontSize: 12 }}>
            Publish{hasDraft ? " draft" : ""}
          </button>
        </div>
      </header>
      {errorMsg && (
        <div className="border-b px-5 py-2 text-[12px]" style={{ background: "#FAEAE7", borderColor: "#EED3CF", color: "var(--a-danger)" }}>
          {errorMsg}
        </div>
      )}
      <div className="flex-1 grid overflow-hidden" style={{ gridTemplateColumns: "minmax(380px, 42%) 1fr" }}>
        <div className="overflow-y-auto" style={{ background: "var(--a-bg)" }}>
          <div className="px-5 py-5 max-w-xl">
            <div className="mb-5 pb-4 border-b" style={{ borderColor: "var(--a-border)" }}>
              <div className="text-[11px] tracking-[0.18em] uppercase mb-1" style={{ color: "var(--a-text-muted)" }}>Editing</div>
              <div className="text-lg font-medium">{title}</div>
              <div className="text-[12px] mt-1" style={{ color: "var(--a-text-muted)" }}>
                Changes autosave after a brief pause. The preview on the right updates live.
              </div>
            </div>
            <JsonEditor sectionKey={sectionKey} value={value} onChange={onChange} />
          </div>
        </div>
        <div ref={previewContainerRef} className="flex items-start justify-center overflow-hidden relative" style={{ background: "#ECE6DA", borderLeft: "1px solid var(--a-border)" }}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 text-[10.5px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.85)", color: "var(--a-text-muted)", backdropFilter: "blur(6px)" }}>
            {viewport === "mobile" ? "390 × auto" : `1280 × scaled ${Math.round(previewScale * 100)}%`}
          </div>
          <iframe
            ref={iframeRef}
            src={`/preview${anchorFor(sectionKey)}`}
            className="bg-white"
            style={{
              width: viewport === "mobile" ? 390 : 1280,
              height: viewport === "mobile" ? "100%" : `${100 / (previewScale || 1)}%`,
              transform: viewport === "desktop" ? `scale(${previewScale})` : "none",
              transformOrigin: "top left",
              position: viewport === "desktop" ? "absolute" : "static",
              top: 0,
              left: 0,
              border: "none",
              boxShadow: viewport === "mobile" ? "0 10px 40px rgba(42,38,32,0.18)" : "none",
              borderRadius: viewport === "mobile" ? 28 : 0,
            }}
          />
        </div>
      </div>
      {confirmDiscard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ background: "rgba(42,38,32,0.45)", backdropFilter: "blur(2px)" }} onClick={() => setConfirmDiscard(false)}>
          <div onClick={(e) => e.stopPropagation()} className="a-card p-6 max-w-sm w-full" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            <h3 className="text-base font-medium mb-1">Discard draft?</h3>
            <p className="text-[13px] mb-5" style={{ color: "var(--a-text-muted)" }}>
              Unsaved changes will be lost and the section will revert to the published version. This can&apos;t be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setConfirmDiscard(false)} className="a-btn">Cancel</button>
              <button onClick={onDiscard} className="a-btn a-btn-primary" style={{ background: "var(--a-danger)", borderColor: "var(--a-danger)" }}>
                Discard draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
