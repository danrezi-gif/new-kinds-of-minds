"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Initiative } from "@/lib/types";
import { TYPES, FOCUS_LABELS, FOCUS_ORDER, LEADERSHIP_LABELS } from "@/lib/taxonomy";
import Glyph from "./Glyph";
import EntryDetail from "./EntryDetail";
import type { Region } from "./AtlasMap";

const AtlasMap = dynamic(() => import("./AtlasMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" role="status">
      <p className="mist m-0">Drawing the map.</p>
    </div>
  ),
});

const REGIONS: { key: Region; label: string }[] = [
  { key: "world", label: "World" },
  { key: "latam", label: "Latin America" },
  { key: "north-america", label: "North America" },
  { key: "europe", label: "Europe" },
  { key: "africa", label: "Africa" },
  { key: "asia", label: "Asia" },
  { key: "oceania", label: "Oceania" },
];

export default function Atlas({ items, meta }: { items: Initiative[]; meta: { count: number; countries: number; generated: string } }) {
  const [types, setTypes] = useState<Set<string>>(new Set());
  const [focus, setFocus] = useState("");
  const [leadership, setLeadership] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>("world");
  const [regionNonce, setRegionNonce] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const read = () => {
      const h = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      setSelectedId(h && items.some((i) => i.id === h) ? h : null);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [items]);

  const select = useCallback((id: string | null) => {
    setSelectedId(id);
    const url = id ? `#${id}` : window.location.pathname;
    history.replaceState(null, "", url);
    if (id) setPanelOpen(false);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      if (types.size && !types.has(i.type)) return false;
      if (focus && !i.focus.includes(focus as never)) return false;
      if (leadership && i.leadership !== leadership) return false;
      if (q) {
        const hay = `${i.name} ${i.name_local || ""} ${i.region} ${i.country_name} ${i.summary}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [items, types, focus, leadership, query]);

  const selected = selectedId ? items.find((i) => i.id === selectedId) || null : null;
  const filtering = types.size > 0 || focus || leadership || query.trim();

  const toggleType = (slug: string) => {
    setTypes((prev) => {
      const n = new Set(prev);
      if (n.has(slug)) n.delete(slug);
      else n.add(slug);
      return n;
    });
  };

  const goRegion = (r: Region) => {
    setRegion(r);
    setRegionNonce((n) => n + 1);
  };

  const countriesShown = new Set(filtered.map((i) => i.country)).size;

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      <div className="absolute inset-0" aria-label="Map of initiatives" role="region">
        <AtlasMap items={filtered} selectedId={selectedId} onSelect={select} region={region} regionNonce={regionNonce} />
      </div>

      {/* Mobile toggle */}
      <button
        type="button"
        className="pill pill-primary lg:hidden absolute left-3 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[600]"
        aria-expanded={panelOpen}
        aria-controls="atlas-panel"
        onClick={() => setPanelOpen((v) => !v)}
      >
        {panelOpen ? "Show map" : `Browse ${filtered.length} initiatives`}
      </button>

      {/* Panel */}
      <aside
        id="atlas-panel"
        className={`absolute z-[550] left-0 top-0 bottom-0 w-full lg:w-[400px] lg:top-[68px] lg:bottom-4 lg:left-4 lg:rounded-[6px] lg:border hair bg-[rgba(247,244,237,0.97)] backdrop-blur-sm flex flex-col shadow-[0_8px_30px_rgba(33,30,38,0.08)] transition-transform duration-300 ${
          panelOpen ? "translate-y-0" : "translate-y-full lg:translate-y-0"
        } pt-[68px] lg:pt-0`}
        aria-label="Filters and list of initiatives"
      >
        <div className="px-5 pt-5 pb-3">
          <p className="display m-0 text-[2.2rem] leading-none" aria-live="polite">
            {filtered.length}
            <span className="text-[1rem] ml-2 mist" style={{ fontFamily: "var(--font-body)" }}>
              {filtering ? `of ${meta.count}` : "initiatives"} in {countriesShown} {countriesShown === 1 ? "country" : "countries"}
            </span>
          </p>
          <p className="m-0 mt-2 text-[0.9375rem] mist max-w-[36ch]">
            A participatory atlas of the forms the neurodiversity movement is taking.{" "}
            <Link href="/about/">Why map it.</Link>
          </p>
        </div>

        <div className="px-5 pb-3 flex flex-wrap gap-1.5" role="group" aria-label="Zoom to a region">
          {REGIONS.map((r) => (
            <button
              key={r.key}
              type="button"
              className="pill pill-small"
              aria-pressed={region === r.key}
              onClick={() => goRegion(r.key)}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="px-5 pb-3">
          <label htmlFor="q" className="sr-only">
            Search by name, city, or country
          </label>
          <input
            id="q"
            type="search"
            className="field"
            placeholder="Search a name, city, or country"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <fieldset className="px-5 pb-3 border-0 m-0 p-0">
          <legend className="label mb-1.5">Kind of initiative</legend>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {TYPES.map((t) => {
              const on = types.has(t.slug);
              return (
                <button
                  key={t.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleType(t.slug)}
                  title={t.short}
                  className={`flex items-center gap-2 text-left text-[0.9rem] min-h-[36px] rounded-full px-2 -mx-2 ${
                    on ? "bg-[var(--ink)] text-[var(--paper)]" : "hover:bg-[var(--paper-2)]"
                  }`}
                >
                  <Glyph type={t.slug} size={16} color={on ? "#d9c48a" : "#a8821f"} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="px-5 pb-3 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="focus" className="label">
              Focus
            </label>
            <select id="focus" className="field" value={focus} onChange={(e) => setFocus(e.target.value)}>
              <option value="">Any</option>
              {FOCUS_ORDER.map((f) => (
                <option key={f} value={f}>
                  {FOCUS_LABELS[f]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="lead" className="label">
              Led by
            </label>
            <select id="lead" className="field" value={leadership} onChange={(e) => setLeadership(e.target.value)}>
              <option value="">Anyone</option>
              {Object.entries(LEADERSHIP_LABELS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtering && (
          <div className="px-5 pb-2">
            <button
              type="button"
              className="text-[0.875rem] underline"
              onClick={() => {
                setTypes(new Set());
                setFocus("");
                setLeadership("");
                setQuery("");
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        <ul className="m-0 p-0 list-none overflow-y-auto flex-1 border-t hair" aria-label="Initiatives matching the filters">
          {filtered.length === 0 && (
            <li className="px-5 py-6 mist text-[0.9375rem]">No initiatives match these filters. Clear them, or add the one you know about.</li>
          )}
          {filtered.map((i) => (
            <li key={i.id} className="border-b hair">
              <button
                type="button"
                onClick={() => select(i.id)}
                aria-current={i.id === selectedId ? "true" : undefined}
                className={`w-full text-left px-5 py-3 flex gap-3 items-start hover:bg-[var(--paper-2)] ${
                  i.id === selectedId ? "bg-[var(--paper-2)]" : ""
                }`}
              >
                <Glyph type={i.type} size={16} color={i.id === selectedId ? "#17877a" : "#a8821f"} className="mt-1.5" />
                <span>
                  <span className="block leading-snug">{i.name}</span>
                  <span className="block text-[0.8125rem] mist">
                    {i.region}, {i.country_name}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="m-0 px-5 py-2 text-[0.75rem] mist border-t hair">
          Prefer a table? <Link href="/list/">Open the index.</Link>
        </p>
      </aside>

      {/* Detail drawer */}
      {selected && (
        <section
          className="absolute z-[560] right-0 bottom-0 left-0 lg:left-auto lg:top-[68px] lg:bottom-4 lg:right-4 lg:w-[420px] max-h-[70dvh] lg:max-h-none overflow-y-auto bg-[var(--paper)] border-t lg:border hair lg:rounded-[6px] shadow-[0_8px_30px_rgba(33,30,38,0.10)] rise"
          aria-label="Selected initiative"
        >
          <div className="sticky top-0 bg-[rgba(247,244,237,0.97)] backdrop-blur px-5 pt-3 pb-2 flex justify-end">
            <button type="button" className="pill pill-small" onClick={() => select(null)} aria-label="Close details">
              Close
            </button>
          </div>
          <div className="px-5 pb-6">
            <EntryDetail item={selected} />
          </div>
        </section>
      )}
    </div>
  );
}
