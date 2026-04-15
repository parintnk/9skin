"use client";

import { useState } from "react";
import { uploadImage } from "../actions";
import { img } from "@/lib/img";
import type { SectionKey } from "@/lib/content/types";

type Value = unknown;
type Path = (string | number)[];

function isImageKey(key: string): boolean {
  if (!key) return false;
  const k = key.toLowerCase();
  return /^(img|src|logo|image|photo|picture|thumbnail|cover|banner|avatar|bg|background)$/.test(k)
    || k.endsWith("image") || k.endsWith("images") || k.endsWith("photo") || k.endsWith("photos")
    || k.endsWith("src") || k.endsWith("img") || k.endsWith("bg");
}

function humanizeKey(key: string): string {
  return key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function viewportFor(key: string): "desktop" | "mobile" | null {
  const k = key.toLowerCase();
  if (/desktop$|^desktop|desktop[a-z]/i.test(k)) return "desktop";
  if (/mobile$|^mobile|mobile[a-z]/i.test(k)) return "mobile";
  return null;
}

function ViewportPill({ viewport }: { viewport: "desktop" | "mobile" }) {
  const isDesktop = viewport === "desktop";
  return (
    <span className="a-badge" style={{
      background: isDesktop ? "#E6EEF5" : "#F1E8F0",
      color: isDesktop ? "#3F5C73" : "#7B4F76",
      fontSize: 9.5, padding: "1.5px 6px",
    }}>
      {isDesktop ? "🖥 Desktop" : "📱 Mobile"}
    </span>
  );
}

function setAt(obj: Value, path: Path, value: Value): Value {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  if (typeof head === "number") {
    const arr = Array.isArray(obj) ? [...obj] : [];
    arr[head] = setAt(arr[head], rest, value);
    return arr;
  }
  const copy = { ...(obj as Record<string, Value>) };
  copy[head as string] = setAt(copy[head as string], rest, value);
  return copy;
}

export default function JsonEditor({
  sectionKey,
  value,
  onChange,
}: {
  sectionKey: SectionKey;
  value: Value;
  onChange: (next: Value) => void;
}) {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <Node sectionKey={sectionKey} path={[]} value={value} root={value} onChange={onChange} label="" depth={0} />
    </div>
  );
}

function Node({
  sectionKey, path, value, root, onChange, label, depth, parentKey,
}: {
  sectionKey: SectionKey;
  path: Path;
  value: Value;
  root: Value;
  onChange: (next: Value) => void;
  label: string;
  depth: number;
  parentKey?: string;
}) {
  const set = (v: Value) => onChange(setAt(root, path, v));
  const rawKey = path[path.length - 1];
  const key = String(rawKey ?? "");
  const displayLabel = label || humanizeKey(key);
  const vp = viewportFor(key) ?? (typeof rawKey === "number" && parentKey ? viewportFor(parentKey) : null);

  if (value === null || value === undefined) {
    return <StringField label={displayLabel} viewport={vp} value="" onChange={set} />;
  }
  if (typeof value === "string") {
    const treatAsImage = isImageKey(key) || isImageKey(label) || (typeof rawKey === "number" && !!parentKey && isImageKey(parentKey));
    if (treatAsImage) {
      const imgLabel = typeof rawKey === "number" && parentKey ? `${humanizeKey(parentKey)} ${(rawKey as number) + 1}` : displayLabel;
      return <ImageField sectionKey={sectionKey} label={imgLabel} viewport={vp} value={value} onChange={(v) => set(v)} />;
    }
    const multiline = value.length > 80 || value.includes("\n");
    return <StringField label={displayLabel} value={value} onChange={set} multiline={multiline} />;
  }
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2 py-1 cursor-pointer select-none">
        <input type="checkbox" checked={value} onChange={(e) => set(e.target.checked)} />
        <span className="a-label-text" style={{ textTransform: "none" }}>{displayLabel}</span>
      </label>
    );
  }
  if (typeof value === "number") {
    return (
      <label className="a-label">
        <span className="a-label-text">{displayLabel}</span>
        <input type="number" value={value} onChange={(e) => set(Number(e.target.value))} className="a-input" />
      </label>
    );
  }
  if (Array.isArray(value)) {
    return (
      <div className="a-field-group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[12px] font-medium">{displayLabel}</span>
            <span className="a-badge a-badge-muted">{value.length}</span>
            {vp && <ViewportPill viewport={vp} />}
          </div>
          <button type="button"
            onClick={() => {
              const template = value[0] !== undefined ? structuredClone(value[0]) : "";
              set([...value, clearStrings(template)]);
            }}
            className="a-btn" style={{ fontSize: 11, padding: "4px 10px" }}>
            + Add
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          {value.map((item, i) => (
            <div key={i} className="a-array-item relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10.5px] font-medium tracking-wide" style={{ color: "var(--a-text-muted)" }}>
                  Item {i + 1}
                </span>
                <div className="flex gap-1 opacity-70 hover:opacity-100 transition">
                  {i > 0 && <IconBtn onClick={() => { const a = [...value]; [a[i-1], a[i]] = [a[i], a[i-1]]; set(a); }} label="Move up">↑</IconBtn>}
                  {i < value.length - 1 && <IconBtn onClick={() => { const a = [...value]; [a[i+1], a[i]] = [a[i], a[i+1]]; set(a); }} label="Move down">↓</IconBtn>}
                  <IconBtn onClick={() => { const a = [...value]; a.splice(i, 1); set(a); }} label="Remove" danger>✕</IconBtn>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Node sectionKey={sectionKey} path={[...path, i]} value={item} root={root} onChange={onChange} label="" depth={depth + 1} parentKey={key} />
              </div>
            </div>
          ))}
          {value.length === 0 && (
            <div className="text-[12px] italic py-3 text-center rounded-md" style={{ color: "var(--a-text-muted)", background: "var(--a-surface)" }}>
              No items — click “+ Add” to create one
            </div>
          )}
        </div>
      </div>
    );
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, Value>);
    if (depth === 0) {
      return (
        <div className="flex flex-col gap-4">
          {entries.map(([k, v]) => (
            <Node key={k} sectionKey={sectionKey} path={[...path, k]} value={v} root={root} onChange={onChange} label={humanizeKey(k)} depth={depth + 1} />
          ))}
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-3">
        {label && <span className="a-label-text">{displayLabel}</span>}
        <div className="flex flex-col gap-3 pl-3" style={{ borderLeft: "2px solid var(--a-border)" }}>
          {entries.map(([k, v]) => (
            <Node key={k} sectionKey={sectionKey} path={[...path, k]} value={v} root={root} onChange={onChange} label={humanizeKey(k)} depth={depth + 1} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

function IconBtn({ children, onClick, label, danger }: { children: React.ReactNode; onClick: () => void; label: string; danger?: boolean }) {
  return (
    <button type="button" onClick={onClick} aria-label={label}
      className="text-[11px] w-6 h-6 rounded flex items-center justify-center transition"
      style={{
        border: "1px solid var(--a-border)",
        background: "var(--a-surface)",
        color: danger ? "var(--a-danger)" : "var(--a-text-muted)",
      }}>
      {children}
    </button>
  );
}

function clearStrings(v: Value): Value {
  if (typeof v === "string") return "";
  if (Array.isArray(v)) return v.map(clearStrings);
  if (v && typeof v === "object") {
    const o: Record<string, Value> = {};
    for (const [k, val] of Object.entries(v)) o[k] = clearStrings(val);
    return o;
  }
  return v;
}

function StringField({ label, value, onChange, multiline, viewport }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean; viewport?: "desktop" | "mobile" | null }) {
  return (
    <label className="a-label">
      <span className="a-label-text flex items-center gap-2">{label}{viewport && <ViewportPill viewport={viewport} />}</span>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="a-textarea" />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="a-input" />
      )}
    </label>
  );
}

function ImageField({ sectionKey, label, value, onChange, viewport }: { sectionKey: SectionKey; label: string; value: string; onChange: (v: string) => void; viewport?: "desktop" | "mobile" | null }) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const resolved = value ? img(value) : "";
  return (
    <div className="a-label">
      <span className="a-label-text flex items-center gap-2">{label}{viewport && <ViewportPill viewport={viewport} />}</span>
      <div className="flex items-start gap-3 p-2.5 rounded-lg" style={{ background: "var(--a-surface)", border: "1px solid var(--a-border)" }}>
        {resolved ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolved} alt="" className="rounded-md object-cover" style={{ width: 72, height: 72, background: "var(--a-accent-soft)" }} />
        ) : (
          <div className="rounded-md flex items-center justify-center text-[10px]" style={{ width: 72, height: 72, background: "var(--a-accent-soft)", color: "var(--a-text-muted)" }}>
            no image
          </div>
        )}
        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="/img/... or upload below"
            className="a-input" style={{ fontSize: 11.5, fontFamily: "SF Mono, ui-monospace, monospace", padding: "6px 9px" }} />
          <label className="inline-flex">
            <input type="file" accept="image/*" className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setUploading(true);
                setErr(null);
                try {
                  const { path } = await uploadImage(sectionKey, file);
                  onChange(path);
                } catch (ex) {
                  setErr(ex instanceof Error ? ex.message : "Upload failed");
                } finally {
                  setUploading(false);
                  e.target.value = "";
                }
              }}
            />
            <span className="a-btn" style={{ fontSize: 11.5, padding: "4px 10px", cursor: "pointer" }}>
              {uploading ? "Uploading…" : "↑ Upload"}
            </span>
          </label>
          {err && <span className="text-[11px]" style={{ color: "var(--a-danger)" }}>{err}</span>}
        </div>
      </div>
    </div>
  );
}
