# Seed data: Spanish-speaking Latin America

18 entries across 9 countries: Argentina (4), Uruguay (3), Chile (3), Colombia (2), Mexico (2), Paraguay (1), Peru (1), Costa Rica (1), Dominican Republic (1). No Bolivia, Ecuador, Cuba entries — nothing found there cleared the verification bar (see leads below). Every URL in the JSON was independently checked with `curl -sIL` at write time and returned HTTP 200.

Mad Pride / psychiatric-survivor collectives turned out to be the strongest thread in this region: Orgullo Loco Buenos Aires, Radio Vilardevoz / Orgullo Loco Uruguay, Orgullo Loco Chile, and Colectivo Chuhcan (Mexico City) are all nd-led and independently corroborated by academic or journalistic sources, not just self-description. Autistas de México and AUTISCOL (Colombia) both explicitly state they are run by and for autistic people. Uruguay, despite its small size, has real depth here — Vilardevoz predates the term "neurodiversity" by a decade, running since 1997.

**Uncertain calls:**
- FUAN (Chile) and Aletea (Uruguay) are marked "mixed"/"ally-led" respectively; both explicitly invoke the neurodiversity paradigm but aren't self-advocacy organizations in the strict sense.
- BarrileTEA (Costa Rica): leadership marked "unknown" rather than guessed — no source stated the founder's own neurodivergent status. Its own domain (barriletea.org) was intermittently unresolvable, so the entry points to its Facebook page and a news article instead.
- Fundación Dominicana de Autismo (1999) returns HTTP 406 to bare requests lacking browser headers — a bot-filter quirk, not a dead site; confirmed live with full headers and lists 2026 training dates.
- AUTISCOL and APEAU (Peru) have no fixed office; both are placed at their national capital as a placeholder for what are effectively online/hybrid national organizations.

**Promising leads found but not verified in time:**
1. **Adultos TDAH Uruguay** — a self-managed adult-ADHD collective that petitioned Uruguay's official citizen-participation platform for recognition; no independent site or social account located.
2. **Asociación Tajibo / Centro Tierra** (Santa Cruz, Bolivia) — Spain-linked autism center with an explicit "Neurodiversidad" course; domain returned `ECONNREFUSED` on every attempt.
3. **Casa Plástica / Festival Neuro Universos** (Bogotá) — a recurring neurodivergent-artist festival covered by Señal Colombia and Infobae in 2024-2025; no organizational site found to confirm its leadership model.
4. **SinColectivo** and **Delicias La Gloria** (Mexico City) — an explicitly user-led psychosocial-disability collective and a labor-inclusion cooperative, both documented only in academic/news coverage of the Marcha del Orgullo Loco, no independent web presence found.
5. **EITA** (Peru) — an autism practice explicitly working from a neurodiversity/anti-ABA framework; excluded as likely a single-founder paid-services practice rather than a community organization, and its site blocked automated fetches.
