// Compresses public/img/**/*.{jpg,jpeg,png,JPG} in place.
// - Downscales any image whose longer edge > MAX_EDGE
// - Re-encodes JPEG at quality 80, PNG at quality 90 (palette PNG when smaller)
// - Skips already-small files unless --force
// - Skips files ending in `_` (manual backups)
// Run: node scripts/optimize-images.mjs

import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/img");
const MAX_EDGE = 1920;
const JPEG_Q = 80;
const PNG_Q = 90;
const SKIP_UNDER_BYTES = 200 * 1024;
const FORCE = process.argv.includes("--force");

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function isImage(p) {
  return /\.(jpe?g|png)$/i.test(p);
}

async function optimize(file) {
  if (file.endsWith("_")) return null;
  if (!isImage(file)) return null;

  const stat = await fs.stat(file);
  const ext = path.extname(file).toLowerCase();

  const img = sharp(file, { failOn: "none" });
  const meta = await img.metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);
  const needsResize = longest > MAX_EDGE;

  if (!FORCE && !needsResize && stat.size < SKIP_UNDER_BYTES) return { skipped: true, file };

  const pipeline = sharp(file, { failOn: "none" }).rotate();
  if (needsResize) pipeline.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true });

  let buf;
  if (ext === ".png") {
    buf = await pipeline.png({ quality: PNG_Q, compressionLevel: 9, palette: true }).toBuffer();
  } else {
    buf = await pipeline.jpeg({ quality: JPEG_Q, mozjpeg: true, progressive: true }).toBuffer();
  }

  if (buf.length >= stat.size && !needsResize) return { skipped: true, file };

  await fs.writeFile(file, buf);
  return { file, before: stat.size, after: buf.length };
}

async function main() {
  let totalBefore = 0, totalAfter = 0, count = 0, skipped = 0;
  for await (const f of walk(ROOT)) {
    try {
      const r = await optimize(f);
      if (!r) continue;
      if (r.skipped) { skipped++; continue; }
      totalBefore += r.before;
      totalAfter += r.after;
      count++;
      const pct = ((1 - r.after / r.before) * 100).toFixed(1);
      const rel = path.relative(ROOT, r.file);
      console.log(`${rel.padEnd(60)} ${(r.before/1024).toFixed(0)}KB -> ${(r.after/1024).toFixed(0)}KB (-${pct}%)`);
    } catch (err) {
      console.error(`failed ${f}:`, err.message);
    }
  }
  console.log("");
  console.log(`Optimized ${count} files, skipped ${skipped}.`);
  console.log(`Total: ${(totalBefore/1024/1024).toFixed(2)}MB -> ${(totalAfter/1024/1024).toFixed(2)}MB`);
}

main();
