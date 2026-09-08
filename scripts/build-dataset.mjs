// Merges data/seed/*.json into data/initiatives.json and public/data/{initiatives.json,initiatives.csv}.
// Validates every record against the schema in data/SCHEMA.md. Fails loudly on bad data.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const SEED_DIR = join(ROOT, "data", "seed");
const OUT_JSON = join(ROOT, "data", "initiatives.json");
const PUB_DIR = join(ROOT, "public", "data");

const TYPES = ["advocacy", "community", "arts", "research", "education", "work", "care", "media"];
const FOCUS = ["autism","adhd","dyslexia","dyspraxia","dyscalculia","tourette","ocd","bipolar","psychosis","intellectual-disability","down-syndrome","learning-disabilities","mad-pride","hearing-voices","neurodiversity-general"];
const LEADERSHIP = ["nd-led", "mixed", "ally-led", "unknown"];
const MODE = ["physical", "online", "hybrid"];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

const errors = [];
const seen = new Map();
const byUrl = new Map();
let all = [];

for (const file of readdirSync(SEED_DIR).filter((f) => f.endsWith(".json")).sort()) {
  let arr;
  try {
    arr = JSON.parse(readFileSync(join(SEED_DIR, file), "utf8"));
  } catch (e) {
    errors.push(`${file}: invalid JSON (${e.message})`);
    continue;
  }
  if (!Array.isArray(arr)) { errors.push(`${file}: not an array`); continue; }
  for (const r of arr) {
    const where = `${file} › ${r.id || r.name || "?"}`;
    const req = ["id","name","summary","type","focus","leadership","mode","country","country_name","region","lat","lng","languages","url","source_url","added","verified","added_by"];
    for (const k of req) if (r[k] === undefined || r[k] === null || r[k] === "") errors.push(`${where}: missing ${k}`);
    if (r.id && !/^[a-z0-9-]+$/.test(r.id)) errors.push(`${where}: id must be kebab-case`);
    if (!TYPES.includes(r.type)) errors.push(`${where}: bad type "${r.type}"`);
    if (!Array.isArray(r.focus) || r.focus.length === 0) errors.push(`${where}: focus must be a non-empty array`);
    else for (const f of r.focus) if (!FOCUS.includes(f)) errors.push(`${where}: bad focus "${f}"`);
    if (!LEADERSHIP.includes(r.leadership)) errors.push(`${where}: bad leadership "${r.leadership}"`);
    if (!MODE.includes(r.mode)) errors.push(`${where}: bad mode "${r.mode}"`);
    if (typeof r.country !== "string" || !/^[A-Z]{2}$/.test(r.country)) errors.push(`${where}: country must be ISO alpha-2`);
    if (typeof r.lat !== "number" || typeof r.lng !== "number" || Math.abs(r.lat) > 90 || Math.abs(r.lng) > 180) errors.push(`${where}: bad coordinates`);
    if (!Array.isArray(r.languages) || r.languages.length === 0) errors.push(`${where}: languages must be a non-empty array`);
    if (typeof r.summary === "string" && r.summary.length > 320) errors.push(`${where}: summary over 320 chars (${r.summary.length})`);
    if (r.url && !/^https?:\/\//.test(r.url)) errors.push(`${where}: url must be absolute`);
    for (const k of ["added","verified"]) if (r[k] && !DATE.test(r[k])) errors.push(`${where}: ${k} must be YYYY-MM-DD`);
    if (r.founded !== undefined && r.founded !== null && (typeof r.founded !== "number" || r.founded < 1800 || r.founded > 2030)) errors.push(`${where}: bad founded`);
    if (r.id) {
      if (seen.has(r.id)) errors.push(`${where}: duplicate id (also in ${seen.get(r.id)})`);
      seen.set(r.id, file);
    }
    const key = (r.url || "").replace(/\/+$/, "").replace(/^https?:\/\/(www\.)?/, "").toLowerCase();
    if (key) {
      if (byUrl.has(key)) errors.push(`${where}: duplicate url (also ${byUrl.get(key)})`);
      byUrl.set(key, where);
    }
    all.push({
      id: r.id, name: r.name, name_local: r.name_local ?? null, summary: r.summary, type: r.type, focus: r.focus,
      leadership: r.leadership, mode: r.mode, country: r.country, country_name: r.country_name, region: r.region,
      lat: Number(r.lat), lng: Number(r.lng), languages: r.languages, url: r.url, source_url: r.source_url,
      founded: r.founded ?? null, added: r.added, verified: r.verified, added_by: r.added_by, notes: r.notes ?? null,
    });
  }
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s) in seed data:\n` + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}

// Nudge apart exact coordinate collisions so no two marks hide each other.
const coordSeen = new Map();
for (const r of all) {
  let k = `${r.lat.toFixed(3)},${r.lng.toFixed(3)}`;
  let n = 0;
  while (coordSeen.has(k)) {
    n += 1;
    r.lat = +(r.lat + 0.018 * Math.cos(n * 2.1)).toFixed(5);
    r.lng = +(r.lng + 0.024 * Math.sin(n * 2.1)).toFixed(5);
    k = `${r.lat.toFixed(3)},${r.lng.toFixed(3)}`;
  }
  coordSeen.set(k, r.id);
}

all.sort((a, b) => a.country_name.localeCompare(b.country_name) || a.name.localeCompare(b.name));

const countries = new Set(all.map((r) => r.country));
const meta = {
  version: "0.1.0",
  generated: new Date().toISOString().slice(0, 10),
  count: all.length,
  countries: countries.size,
  license: "CC BY 4.0",
  schema: "https://github.com/danrezi-gif/new-kinds-of-minds/blob/main/data/SCHEMA.md",
};

if (!existsSync(PUB_DIR)) mkdirSync(PUB_DIR, { recursive: true });
writeFileSync(OUT_JSON, JSON.stringify({ meta, initiatives: all }, null, 2) + "\n");
writeFileSync(join(PUB_DIR, "initiatives.json"), JSON.stringify({ meta, initiatives: all }) + "\n");

const cols = ["id","name","name_local","summary","type","focus","leadership","mode","country","country_name","region","lat","lng","languages","url","source_url","founded","added","verified","added_by","notes"];
const esc = (v) => {
  if (v === null || v === undefined) return "";
  const s = Array.isArray(v) ? v.join("|") : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = [cols.join(","), ...all.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n";
writeFileSync(join(PUB_DIR, "initiatives.csv"), "﻿" + csv);

console.log(`dataset: ${all.length} initiatives, ${countries.size} countries → data/initiatives.json, public/data/`);
