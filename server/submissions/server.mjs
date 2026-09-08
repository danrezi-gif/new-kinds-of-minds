// Minimal submissions queue for New Kinds of Minds.
// POST /submit  -> appends a JSON line to $NKM_DATA/pending.jsonl and pings Telegram.
// GET  /health  -> { ok: true, pending: n }
// No dependencies. Runs under systemd on the droplet, proxied by Caddy.
import { createServer } from "node:http";
import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

const PORT = Number(process.env.PORT || 5003);
const DATA = process.env.NKM_DATA || "/opt/nkm-submissions";
const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TG_CHAT = process.env.TELEGRAM_CHAT_ID || "";
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || "*";
const PENDING = join(DATA, "pending.jsonl");

if (!existsSync(DATA)) mkdirSync(DATA, { recursive: true });

const hits = new Map(); // ip -> timestamps
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 20;
}

function pendingCount() {
  if (!existsSync(PENDING)) return 0;
  return readFileSync(PENDING, "utf8").split("\n").filter(Boolean).length;
}

async function notify(rec) {
  if (!TG_TOKEN || !TG_CHAT) return;
  const text = [
    `New Kinds of Minds: ${rec.correction_of ? "correction to " + rec.correction_of : "new submission"}`,
    `${rec.name || "(no name)"} · ${rec.region || ""} ${rec.country || ""}`.trim(),
    rec.url || "",
    rec.summary ? rec.summary.slice(0, 280) : "",
    `id ${rec.id}`,
  ]
    .filter(Boolean)
    .join("\n");
  try {
    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TG_CHAT, text, disable_web_page_preview: true }),
    });
  } catch (e) {
    console.error("telegram notify failed", e.message);
  }
}

const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

createServer(async (req, res) => {
  const cors = {
    "Access-Control-Allow-Origin": ALLOW_ORIGIN,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (req.method === "OPTIONS") {
    res.writeHead(204, cors);
    return res.end();
  }
  const url = new URL(req.url, "http://x");
  const path = url.pathname.replace(/\/+$/, "");

  if (req.method === "GET" && (path.endsWith("/health") || path === "")) {
    res.writeHead(200, { ...cors, "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true, pending: pendingCount() }));
  }

  if (req.method === "POST" && path.endsWith("/submit")) {
    const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress;
    if (rateLimited(ip)) {
      res.writeHead(429, { ...cors, "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "Too many submissions from this address. Try again in an hour." }));
    }
    let raw = "";
    for await (const chunk of req) {
      raw += chunk;
      if (raw.length > 20000) {
        res.writeHead(413, cors);
        return res.end();
      }
    }
    let b;
    try {
      b = JSON.parse(raw);
    } catch {
      res.writeHead(400, { ...cors, "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "Body must be JSON." }));
    }
    if (typeof b.website_confirm === "string" && b.website_confirm) {
      // honeypot field
      res.writeHead(200, { ...cors, "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: true }));
    }
    const rec = {
      id: randomUUID(),
      received: new Date().toISOString(),
      ip_hash: undefined,
      correction_of: str(b.correction_of, 120),
      name: str(b.name, 200),
      name_local: str(b.name_local, 200),
      url: str(b.url, 500),
      summary: str(b.summary, 400),
      type: str(b.type, 40),
      focus: Array.isArray(b.focus) ? b.focus.map((x) => str(x, 40)).filter(Boolean).slice(0, 15) : [],
      leadership: str(b.leadership, 20),
      mode: str(b.mode, 20),
      country: str(b.country, 100),
      region: str(b.region, 200),
      languages: str(b.languages, 200),
      source_url: str(b.source_url, 500),
      relationship: str(b.relationship, 20),
      email: str(b.email, 200),
      notes: str(b.notes, 2000),
      submitted_from: str(b.submitted_from, 500),
    };
    if (!rec.name && !rec.correction_of) {
      res.writeHead(422, { ...cors, "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "A name is needed." }));
    }
    appendFileSync(PENDING, JSON.stringify(rec) + "\n");
    notify(rec);
    res.writeHead(200, { ...cors, "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true, id: rec.id }));
  }

  res.writeHead(404, { ...cors, "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "Not found" }));
}).listen(PORT, "127.0.0.1", () => console.log(`nkm-submissions listening on ${PORT}, data in ${DATA}`));
