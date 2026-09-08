# Arts worldwide — seed data report

42 entries across 14 countries: United States (6), United Kingdom (11), Germany (4), Australia (4), Belgium (3), Japan (2), Netherlands, Spain, Switzerland (2), France, Peru, Brazil, Argentina, Austria (1 each).

All entries are `type: arts` — supported studios, theatre/dance companies, art brut museums and collections, festivals, a magazine, and community/advocacy networks. By leadership: ally-led (20), mixed (15), unknown (4), nd-led (3, all UK-based: DaDaFest, Oska Bright Film Festival, Neuk Collective). The low nd-led count reflects the field itself — most supported-studio and disability-theatre models pair a non-disabled director/founder with a disabled ensemble or artist cohort, which the source agents correctly coded "mixed" or "ally-led" rather than guessing upward.

## Editorial changes made to the raw research

- Dropped **candoco-dance-company** (London): a genuine, well-documented company, but its disability focus is physical/sensory rather than neurodivergence, which is out of scope for this atlas.
- **cia-teatral-ueinzz** (São Paulo): its only working link was `x.com/ueinzz`, a social-media profile. Per instruction, replaced `url` with the already-verified `source_url` (atelierpaulista.com's page on the company) and left a note documenting the swap.
- No duplicate hostnames against `data/initiatives.json` or any file already in `data/seed/`, and no id collisions within the new batch or against existing seed files.
- Added `added`/`verified: 2026-09-09` and `added_by: editorial` to every record; all other fields passed through as researched.

## What the source agents flagged as uncertain

- **Passion Works Studio** and **Studio A (Sydney)**: founding years not stated on official pages, left `null`.
- **Kunstwerkstatt der Lebenshilfe Berlin**: exact founding year unconfirmed; earliest documented activity is a 1999 exhibition. Site only resolves over plain HTTP.
- **La "S" Grand Atelier**: official site is live but shows only a placeholder; facts sourced from a museum partner's page instead.
- **Back to Back Theatre, Restless Dance Theatre, Mind the Gap, Theater HORA, Hijinx Theatre**: all self-describe their ensembles as disabled/neurodivergent but stop short of claiming disabled institutional leadership, so kept as "mixed" rather than upgraded to "nd-led."
- **Superfest** and **ReelAbilities: New York**: leadership marked unknown — sources confirm disabled people as judges/participants but not as staff leadership.
- **Dr. Guislain Museum** and **Neuk Collective**: exact founding/opening years not confirmable from primary sources.

## Leads found but not included

- **Atelier CORNERS** (Osaka) — described in secondary sources (Raw Vision, gallery write-ups) but no live official domain found; dropped for failing the working-site bar.
- **galerie gugging** (galeriegugging.com), the artist-owned gallery adjacent to Museum Gugging — flagged by the research agent as a more nd-led alternative worth a dedicated entry in a future pass.
- **Autistas Brasil**, **Coletivo Autista** chapters at UFRJ/Unicamp, and Recife's **Festival "Viva As Diferenças"** were surfaced in adjacent Brazil research but belong to a different batch's scope.
