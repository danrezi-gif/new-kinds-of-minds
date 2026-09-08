// Pulls the pending submissions queue from the droplet and prints each one as a draft seed record.
// Usage: node scripts/pull-submissions.mjs > data/seed/community-YYYY-MM-DD.json  (then review by hand)
import { execSync } from "node:child_process";

const HOST = process.env.NKM_HOST || "root@209.38.156.244";
const KEY = process.env.NKM_KEY || `${process.env.HOME || process.env.USERPROFILE}/.ssh/do_zeroclaw`;
const raw = execSync(`ssh -i "${KEY}" ${HOST} "cat /opt/nkm-submissions/pending.jsonl 2>/dev/null || true"`, { encoding: "utf8" });
const today = new Date().toISOString().slice(0, 10);
const recs = raw
  .split("\n")
  .filter(Boolean)
  .map((l) => JSON.parse(l));

const slug = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const drafts = recs.map((r) => ({
  _submission: { id: r.id, received: r.received, correction_of: r.correction_of || null, email: r.email || null, relationship: r.relationship || null, notes: r.notes || null },
  id: slug(r.name || "untitled"),
  name: r.name,
  name_local: r.name_local || null,
  summary: r.summary,
  type: r.type,
  focus: r.focus,
  leadership: r.leadership || "unknown",
  mode: r.mode || "physical",
  country: "??",
  country_name: r.country,
  region: r.region,
  lat: 0,
  lng: 0,
  languages: r.languages ? r.languages.split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [],
  url: r.url,
  source_url: r.source_url || r.url,
  founded: null,
  added: today,
  verified: today,
  added_by: "community",
  notes: null,
}));

process.stdout.write(JSON.stringify(drafts, null, 2) + "\n");
console.error(`${drafts.length} pending submission(s). Fill in country code, coordinates, verify, then move into data/seed/.`);
