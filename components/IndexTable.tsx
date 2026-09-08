"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Initiative } from "@/lib/types";
import { TYPE_BY_SLUG, FOCUS_LABELS, LEADERSHIP_LABELS, TYPES } from "@/lib/taxonomy";
import Glyph from "./Glyph";

type Key = "name" | "country_name" | "type" | "leadership" | "founded" | "verified";

export default function IndexTable({ items }: { items: Initiative[] }) {
  const [sort, setSort] = useState<{ key: Key; dir: 1 | -1 }>({ key: "country_name", dir: 1 });
  const [q, setQ] = useState("");
  const [type, setType] = useState("");

  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = items.filter((i) => {
      if (type && i.type !== type) return false;
      if (!s) return true;
      return `${i.name} ${i.name_local || ""} ${i.region} ${i.country_name} ${i.summary} ${i.focus.join(" ")}`.toLowerCase().includes(s);
    });
    return list.sort((a, b) => {
      const av = (a[sort.key] ?? "") as string | number;
      const bv = (b[sort.key] ?? "") as string | number;
      if (av === bv) return a.name.localeCompare(b.name);
      return (av > bv ? 1 : -1) * sort.dir;
    });
  }, [items, q, type, sort]);

  const th = (key: Key, label: string) => (
    <th scope="col" aria-sort={sort.key === key ? (sort.dir === 1 ? "ascending" : "descending") : "none"}>
      <button type="button" onClick={() => setSort((s) => ({ key, dir: s.key === key ? ((s.dir * -1) as 1 | -1) : 1 }))}>
        {label}
        {sort.key === key ? (sort.dir === 1 ? " ↑" : " ↓") : ""}
      </button>
    </th>
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-end mb-6">
        <div className="grow max-w-md">
          <label htmlFor="iq" className="label">
            Search
          </label>
          <input id="iq" type="search" className="field" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, city, country, focus" />
        </div>
        <div>
          <label htmlFor="itype" className="label">
            Kind
          </label>
          <select id="itype" className="field" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All kinds</option>
            {TYPES.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <p className="m-0 mist text-[0.9375rem] pb-3" aria-live="polite">
          {rows.length} of {items.length}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="index">
          <thead>
            <tr>
              {th("name", "Initiative")}
              {th("country_name", "Place")}
              {th("type", "Kind")}
              <th scope="col">Focus</th>
              {th("leadership", "Led by")}
              {th("founded", "Since")}
              {th("verified", "Verified")}
            </tr>
          </thead>
          <tbody>
            {rows.map((i) => (
              <tr key={i.id}>
                <td>
                  <Link href={`/entry/${i.id}/`} className="no-underline hover:underline font-medium">
                    {i.name}
                  </Link>
                  {i.name_local && i.name_local !== i.name && (
                    <span className="block text-[0.8125rem] mist" lang={i.languages[0]}>
                      {i.name_local}
                    </span>
                  )}
                </td>
                <td>
                  {i.region}
                  <span className="block text-[0.8125rem] mist">{i.country_name}</span>
                </td>
                <td>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <Glyph type={i.type} size={14} color="#a8821f" />
                    {TYPE_BY_SLUG[i.type].label}
                  </span>
                </td>
                <td className="text-[0.875rem]">{i.focus.map((f) => FOCUS_LABELS[f]).join(", ")}</td>
                <td className="text-[0.875rem]">{LEADERSHIP_LABELS[i.leadership]}</td>
                <td className="mono">{i.founded ?? ""}</td>
                <td className="mono">{i.verified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
