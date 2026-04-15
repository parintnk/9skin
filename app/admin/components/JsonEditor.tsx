"use client";

import { useState } from "react";
import { uploadImage } from "../actions";
import { img } from "@/lib/img";
import type { SectionKey } from "@/lib/content/types";

type Value = unknown;
type Path = (string | number)[];

function isImageKey(key: string): boolean {
  return /^(img|src|logo|image|heroImage|desktopImage|mobileBg|salonImage|studioImage)$/i.test(key)
    || key.toLowerCase().endsWith("image");
}

function getAt(obj: Value, path: Path): Value {
  let cur: Value = obj;
  for (const p of path) cur = (cur as Record<string, Value>)?.[p as string];
  return cur;
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
    <div className="flex flex-col gap-3 text-sm">
      <Node sectionKey={sectionKey} path={[]} value={value} root={value} onChange={onChange} label="" />
    </div>
  );
}

function Node({
  sectionKey, path, value, root, onChange, label,
}: {
  sectionKey: SectionKey;
  path: Path;
  value: Value;
  root: Value;
  onChange: (next: Value) => void;
  label: string;
}) {
  const set = (v: Value) => onChange(setAt(root, path, v));
  const key = String(path[path.length - 1] ?? "");

  if (value === null || value === undefined) {
    return <StringField label={label} value="" onChange={set} />;
  }
  if (typeof value === "string") {
    if (isImageKey(key) || isImageKey(label)) {
      return <ImageField sectionKey={sectionKey} label={label || key} value={value} onChange={(v) => set(v)} />;
    }
    const multiline = value.length > 60 || value.includes("\n");
    return <StringField label={label || key} value={value} onChange={set} multiline={multiline} />;
  }
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={value} onChange={(e) => set(e.target.checked)} />
        <span className="text-xs text-neutral-700">{label || key}</span>
      </label>
    );
  }
  if (typeof value === "number") {
    return (
      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">{label || key}</span>
        <input type="number" value={value} onChange={(e) => set(Number(e.target.value))} className="border rounded px-2 py-1" />
      </label>
    );
  }
  if (Array.isArray(value)) {
    return (
      <fieldset className="border rounded-lg p-3 bg-white">
        <legend className="text-xs font-medium px-1">{label || key} ({value.length})</legend>
        <div className="flex flex-col gap-3">
          {value.map((item, i) => (
            <div key={i} className="relative border border-neutral-200 rounded-md p-3 bg-neutral-50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-neutral-500">#{i + 1}</span>
                <div className="flex gap-1">
                  {i > 0 && <button type="button" onClick={() => { const a = [...value]; [a[i-1], a[i]] = [a[i], a[i-1]]; set(a); }} className="text-[11px] px-1.5 py-0.5 border rounded">↑</button>}
                  {i < value.length - 1 && <button type="button" onClick={() => { const a = [...value]; [a[i+1], a[i]] = [a[i], a[i+1]]; set(a); }} className="text-[11px] px-1.5 py-0.5 border rounded">↓</button>}
                  <button type="button" onClick={() => { const a = [...value]; a.splice(i, 1); set(a); }} className="text-[11px] px-1.5 py-0.5 border rounded text-red-600">✕</button>
                </div>
              </div>
              <Node sectionKey={sectionKey} path={[...path, i]} value={item} root={root} onChange={onChange} label="" />
            </div>
          ))}
          <button type="button"
            onClick={() => {
              const template = value[0] !== undefined ? structuredClone(value[0]) : "";
              const cleared = clearStrings(template);
              set([...value, cleared]);
            }}
            className="text-xs px-3 py-1.5 border rounded-md hover:bg-neutral-100 self-start">
            + Add item
          </button>
        </div>
      </fieldset>
    );
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, Value>);
    return (
      <div className={path.length === 0 ? "flex flex-col gap-3" : "border-l-2 border-neutral-200 pl-3 flex flex-col gap-3"}>
        {label && <span className="text-xs font-medium text-neutral-700">{label}</span>}
        {entries.map(([k, v]) => (
          <Node key={k} sectionKey={sectionKey} path={[...path, k]} value={v} root={root} onChange={onChange} label={k} />
        ))}
      </div>
    );
  }
  return null;
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

function StringField({ label, value, onChange, multiline }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-neutral-500">{label}</span>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="border rounded px-2 py-1.5 font-mono text-[13px]" />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1.5" />
      )}
    </label>
  );
}

function ImageField({ sectionKey, label, value, onChange }: { sectionKey: SectionKey; label: string; value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const resolved = value ? img(value) : "";
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs text-neutral-500">{label}</span>
      <div className="flex items-start gap-3">
        {resolved ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolved} alt="" className="w-20 h-20 object-cover rounded border bg-neutral-100" />
        ) : (
          <div className="w-20 h-20 rounded border bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-400">no image</div>
        )}
        <div className="flex-1 flex flex-col gap-1.5">
          <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="/img/... or path" className="border rounded px-2 py-1.5 text-[12px] font-mono" />
          <label className="inline-flex items-center gap-2 text-[12px] cursor-pointer">
            <input type="file" accept="image/*" className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setUploading(true);
                setErr(null);
                try {
                  const fd = new FormData();
                  fd.set("file", file);
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
            <span className="px-2 py-1 border rounded hover:bg-neutral-100">{uploading ? "Uploading..." : "Upload"}</span>
          </label>
          {err && <span className="text-[11px] text-red-600">{err}</span>}
        </div>
      </div>
    </div>
  );
}
