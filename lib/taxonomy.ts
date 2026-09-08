// Taxonomy v0.1 — see data/TAXONOMY.md for the reasoning and the caveats.

export type TypeSlug =
  | "advocacy"
  | "community"
  | "arts"
  | "research"
  | "education"
  | "work"
  | "care"
  | "media";

export interface TypeDef {
  slug: TypeSlug;
  label: string;
  short: string; // one line, shown in the key
  glyph: "triangle" | "ring" | "asterisk" | "square" | "diamond" | "half" | "cross" | "bar";
}

// Order matters: it is the order of the key and of the filters.
export const TYPES: TypeDef[] = [
  { slug: "community", label: "Peer community", short: "Networks run by and for neurodivergent people", glyph: "ring" },
  { slug: "advocacy", label: "Advocacy and rights", short: "Political, legal, and policy work", glyph: "triangle" },
  { slug: "arts", label: "Arts and culture", short: "Collectives, studios, theatre, festivals", glyph: "asterisk" },
  { slug: "research", label: "Research", short: "Labs, centres, participatory inquiry", glyph: "square" },
  { slug: "education", label: "Education", short: "Schools, learning projects, training", glyph: "diamond" },
  { slug: "work", label: "Work and livelihood", short: "Employment, cooperatives, enterprise", glyph: "half" },
  { slug: "care", label: "Care and clinical", short: "Therapeutic and health services", glyph: "cross" },
  { slug: "media", label: "Media and publishing", short: "Magazines, podcasts, archives", glyph: "bar" },
];

export const TYPE_BY_SLUG: Record<string, TypeDef> = Object.fromEntries(TYPES.map((t) => [t.slug, t]));

export type FocusSlug =
  | "autism"
  | "adhd"
  | "dyslexia"
  | "dyspraxia"
  | "dyscalculia"
  | "tourette"
  | "ocd"
  | "bipolar"
  | "psychosis"
  | "intellectual-disability"
  | "down-syndrome"
  | "learning-disabilities"
  | "mad-pride"
  | "hearing-voices"
  | "neurodiversity-general";

export const FOCUS_LABELS: Record<FocusSlug, string> = {
  "neurodiversity-general": "Neurodiversity, cross-neurotype",
  autism: "Autism",
  adhd: "ADHD",
  dyslexia: "Dyslexia",
  dyspraxia: "Dyspraxia",
  dyscalculia: "Dyscalculia",
  tourette: "Tourette",
  ocd: "OCD",
  bipolar: "Bipolar",
  psychosis: "Psychosis and schizophrenia",
  "intellectual-disability": "Intellectual disability",
  "down-syndrome": "Down syndrome",
  "learning-disabilities": "Learning disabilities",
  "mad-pride": "Mad Pride and psychiatric survivors",
  "hearing-voices": "Hearing voices",
};

export const FOCUS_ORDER = Object.keys(FOCUS_LABELS) as FocusSlug[];

export type Leadership = "nd-led" | "mixed" | "ally-led" | "unknown";
export const LEADERSHIP_LABELS: Record<Leadership, string> = {
  "nd-led": "Neurodivergent-led",
  mixed: "Mixed leadership",
  "ally-led": "Family- or professional-led",
  unknown: "Leadership not stated",
};

export type Mode = "physical" | "online" | "hybrid";
export const MODE_LABELS: Record<Mode, string> = {
  physical: "In person",
  online: "Online",
  hybrid: "In person and online",
};

export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English", pt: "Portuguese", es: "Spanish", fr: "French", de: "German", it: "Italian",
  nl: "Dutch", da: "Danish", sv: "Swedish", no: "Norwegian", fi: "Finnish", pl: "Polish",
  cs: "Czech", el: "Greek", tr: "Turkish", he: "Hebrew", ar: "Arabic", hi: "Hindi",
  bn: "Bengali", ur: "Urdu", ja: "Japanese", ko: "Korean", zh: "Chinese", ms: "Malay",
  tl: "Filipino", id: "Indonesian", vi: "Vietnamese", th: "Thai", sw: "Swahili",
  yo: "Yoruba", ha: "Hausa", af: "Afrikaans", zu: "Zulu", am: "Amharic", ru: "Russian",
  uk: "Ukrainian", ro: "Romanian", hu: "Hungarian", ca: "Catalan", eu: "Basque", gl: "Galician",
  mi: "Māori", ta: "Tamil", si: "Sinhala", ne: "Nepali", fa: "Persian", ga: "Irish", hr: "Croatian",
  sr: "Serbian", sl: "Slovenian", sk: "Slovak", bg: "Bulgarian", et: "Estonian", lv: "Latvian", lt: "Lithuanian",
  is: "Icelandic", lb: "Luxembourgish", mt: "Maltese", sq: "Albanian", mk: "Macedonian", ka: "Georgian", hy: "Armenian",
  gu: "Gujarati", mr: "Marathi", te: "Telugu", kn: "Kannada", ml: "Malayalam", pa: "Punjabi", my: "Burmese", km: "Khmer",
  lo: "Lao", mn: "Mongolian", uz: "Uzbek", kk: "Kazakh", qu: "Quechua", ay: "Aymara", gn: "Guarani",
};

export function languageName(code: string): string {
  return LANGUAGE_NAMES[code] || code.toUpperCase();
}
