import dataset from "@/data/initiatives.json";
import type { Initiative, DatasetMeta } from "./types";

const data = dataset as unknown as { meta: DatasetMeta; initiatives: Initiative[] };

export const META: DatasetMeta = data.meta;
export const INITIATIVES: Initiative[] = data.initiatives;

export function getInitiative(id: string): Initiative | undefined {
  return INITIATIVES.find((i) => i.id === id);
}

export function countries(): { code: string; name: string; count: number }[] {
  const m = new Map<string, { code: string; name: string; count: number }>();
  for (const i of INITIATIVES) {
    const e = m.get(i.country) || { code: i.country, name: i.country_name, count: 0 };
    e.count += 1;
    m.set(i.country, e);
  }
  return [...m.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function stats() {
  const byType: Record<string, number> = {};
  const byLeadership: Record<string, number> = {};
  const langs = new Set<string>();
  for (const i of INITIATIVES) {
    byType[i.type] = (byType[i.type] || 0) + 1;
    byLeadership[i.leadership] = (byLeadership[i.leadership] || 0) + 1;
    i.languages.forEach((l) => langs.add(l));
  }
  return {
    total: INITIATIVES.length,
    countries: new Set(INITIATIVES.map((i) => i.country)).size,
    byType,
    byLeadership,
    languages: langs.size,
  };
}

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const SUBMIT_ENDPOINT = process.env.NEXT_PUBLIC_SUBMIT_ENDPOINT || "";
export const REPO_URL = "https://github.com/danrezi-gif/new-kinds-of-minds";
export const CONTACT_EMAIL = "contact@danielrezinovsky.com";
