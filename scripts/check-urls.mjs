// Checks every initiative url with a browser user agent and reports the ones that do not answer 2xx/3xx.
// Usage: node scripts/check-urls.mjs [--all] (default: only records verified more than 90 days ago, or all with --all)
import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("../data/initiatives.json", import.meta.url), "utf8"));
const all = process.argv.includes("--all");
const cutoff = Date.now() - 90 * 24 * 3600 * 1000;
const items = data.initiatives.filter((i) => all || new Date(i.verified).getTime() < cutoff);
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

async function probe(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 25000);
  try {
    let r = await fetch(url, { method: "HEAD", redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": UA, Accept: "text/html,*/*" } });
    if (r.status >= 400 || r.status === 0) {
      r = await fetch(url, { method: "GET", redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": UA, Accept: "text/html,*/*" } });
    }
    return { status: r.status, final: r.url };
  } catch (e) {
    return { status: 0, error: e.name === "AbortError" ? "timeout" : e.cause?.code || e.message };
  } finally {
    clearTimeout(t);
  }
}

const results = [];
const queue = [...items];
async function worker() {
  while (queue.length) {
    const it = queue.shift();
    const r = await probe(it.url);
    results.push({ id: it.id, url: it.url, ...r });
    if (r.status === 0 || r.status >= 400) console.log(`${String(r.status).padStart(3)} ${it.id} ${it.url} ${r.error || ""}`);
  }
}
await Promise.all(Array.from({ length: 12 }, worker));
const bad = results.filter((r) => r.status === 0 || r.status >= 400);
writeFileSync(new URL("../research/url-check.json", import.meta.url), JSON.stringify({ checked: new Date().toISOString(), total: results.length, bad }, null, 2));
console.log(`\nchecked ${results.length}, ${bad.length} not answering 2xx/3xx (many are bot-blocked: check by hand before removing). Report: research/url-check.json`);
