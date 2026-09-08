import type { TypeSlug, FocusSlug, Leadership, Mode } from "./taxonomy";

export interface Initiative {
  id: string;
  name: string;
  name_local: string | null;
  summary: string;
  type: TypeSlug;
  focus: FocusSlug[];
  leadership: Leadership;
  mode: Mode;
  country: string; // ISO 3166-1 alpha-2
  country_name: string;
  region: string;
  lat: number;
  lng: number;
  languages: string[];
  url: string;
  source_url: string;
  founded: number | null;
  added: string; // YYYY-MM-DD
  verified: string; // YYYY-MM-DD
  added_by: "editorial" | "community";
  notes?: string | null;
}

export interface DatasetMeta {
  version: string;
  generated: string;
  count: number;
  countries: number;
  license: string;
  schema: string;
}
