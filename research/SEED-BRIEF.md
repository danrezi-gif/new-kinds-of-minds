# Seed-data brief — New Kinds of Minds: A Global Atlas of Neurodiversity

You are compiling verified entries for a public, research-quality atlas of neurodiversity initiatives.
Every entry must be a REAL organisation, community, collective, festival, research group or project that you have
confirmed exists on its own website or a reliable third-party page. Never invent. Never embellish. If you cannot
verify something, leave the field null or drop the entry.

## Required output

Write a JSON array to the file path given in your task, using EXACTLY this schema per entry:

```json
{
  "id": "kebab-case-slug-unique",
  "name": "Name in English (or as used internationally)",
  "name_local": "Name in the original language, or null if same",
  "summary": "One or two plain factual sentences, max 300 characters, in English, in your own words. What it is, who runs it, what it does. No adjectives like 'innovative' or 'leading'.",
  "type": "advocacy | community | arts | research | education | work | care | media",
  "focus": ["autism", "adhd", "dyslexia", "dyspraxia", "dyscalculia", "tourette", "ocd", "bipolar", "psychosis", "intellectual-disability", "down-syndrome", "learning-disabilities", "mad-pride", "hearing-voices", "neurodiversity-general"],
  "leadership": "nd-led | mixed | ally-led | unknown",
  "mode": "physical | online | hybrid",
  "country": "ISO 3166-1 alpha-2, e.g. BR",
  "country_name": "Brazil",
  "region": "City, State/Province (as specific as verifiable; for national online orgs use the HQ city)",
  "lat": -23.55,
  "lng": -46.63,
  "languages": ["pt"],
  "url": "https://official-site",
  "source_url": "https://page-where-you-verified-the-facts (may equal url)",
  "founded": 2015,
  "added": "2026-09-08",
  "verified": "2026-09-08",
  "added_by": "editorial",
  "notes": "Optional. Anything a moderator should know, e.g. 'website last updated 2023', 'parent-led', 'part of X network'."
}
```

Field rules:
- `type` is the PRIMARY activity. advocacy = rights/political/policy; community = peer networks, mutual support, self-advocacy groups; arts = collectives, theatre, festivals, galleries, music, creative studios; research = university centres, labs, participatory research groups; education = schools, alternative learning, training programmes; work = employment, entrepreneurship, cooperatives; care = clinical, therapeutic, health services; media = magazines, podcasts, publishers, archives, radio.
- `focus`: use only the listed slugs; use "neurodiversity-general" for cross-neurotype initiatives. Several allowed.
- `leadership`: "nd-led" ONLY if the organisation itself states it is run by neurodivergent/autistic/disabled people (e.g. "autistic-led", "by and for", "self-advocacy", "survivor-led"). "ally-led" if clearly run by parents/professionals. "mixed" if it says so. Otherwise "unknown". This field matters for research; do not guess.
- `lat`/`lng`: coordinates of the city/region. Use your knowledge of city coordinates (to 2 decimals is fine). Do not place two entries on the exact same coordinate — add small offsets (±0.02) for entries in the same city.
- `languages`: ISO 639-1 codes of the languages the initiative works in.
- Verify each `url` with `curl -sIL --max-time 20 -A "Mozilla/5.0" URL | head -1` and only keep entries whose site responds 2xx/3xx (or whose existence is confirmed on a reliable third-party page — then put that page as source_url and add a note).
- Prefer entries with clear geography. Online-only initiatives are welcome but set mode "online" and locate them at their base city.

## What we want (diversity over quantity)

Prioritise: neurodivergent-led organisations; arts collectives, festivals and cultural projects; peer communities; research centres doing participatory or critical work; alternative education; employment cooperatives; Mad Pride / Hearing Voices / psychiatric-survivor networks; Global South and non-English initiatives described in their own language contexts. Include a few large well-known organisations for anchoring, but do not fill the list with the same ten international names. Avoid: for-profit clinics, ABA providers, pure fundraising charities with no community dimension, defunct projects (check the site was updated in the last ~2 years, note if uncertain).

## Also write a short markdown report

Next to the JSON, write `<same-name>.md` with: how many entries, which countries, which entries you were unsure about and why, and 3-5 promising leads you found but could not verify in time. Keep it under 400 words.

Work efficiently: search, open the site, extract facts, write the entry. Do not write long summaries in chat; the files are the deliverable. Your final chat message should be: the file paths, the entry count, and the countries covered.
