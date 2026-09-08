# Asia and Pacific, depth pass 2

41 entries across 20 countries/territories: Japan (4), South Korea (2), China (1), Hong Kong (3),
Taiwan (1), Singapore (1), Malaysia (2), Indonesia (1), Nepal (2), Bangladesh (2), Sri Lanka (1),
India (6), Turkey (1), Israel (2), Qatar (1), Iran (1), Egypt (1), Kazakhstan (1), Australia (5),
New Zealand (3).

Two of the entries I researched first — Kaien (Japan) and Neurodiversity Hub (Australia) — were
dropped after `research-work-education.json` turned out to already carry both; Atelier Incurve
was dropped for the same reason against `arts-worldwide.json`, per the coordinator's note.

## Notable finds

United Voice (Malaysia) is the country's first self-advocacy society run by people with learning
disabilities themselves (nd-led, 2005). estas (Korea) is a comparable autistic self-advocacy
group, though it has no independent website — only Facebook, corroborated via Korean Wikipedia
and Ablenews. Sethu (Goa) explicitly frames its child-development work as neurodiversity-affirming.
Autism BD (Bangladesh) and Autism in Kazakhstan are informational/media portals rather than
service providers, included under `type: media` for the same reason a magazine or podcast would
qualify. JDDA (Japan, 2015) is a peer-led policy-advocacy body distinct from the larger
professional umbrella JDDnet already in the dataset.

## Uncertain / lower-confidence entries

- **Autism Society of Korea** and **Shuchona Foundation** (Bangladesh) both return HTTP 403 to
  automated checks (bot-blocking); existence and current activity were confirmed via third-party
  pages (a government welfare directory, Wikipedia) rather than the sites themselves.
- **ALUT** (Israel) blocked all automated content extraction; I could only confirm the site is
  live (HTTP 200), not its founding year or specific programme details, so `founded` and most
  facts beyond its name/mission are left minimal.
- Several Australian and New Zealand entries (Australian Dyslexia Association, Tourette's
  Australia, Tourette's Association of NZ, Dyslexia Foundation of NZ) don't state a headquarters
  city; I used a national placeholder city and flagged this in `notes`.
- FACT (Taiwan) and Autism Society West Bengal give only relative founding clues ("35th
  anniversary", "20 years") rather than an exact year, so `founded` is null.

## Leads found but not verified in time

- **Down Syndrome Korea**, **Mad Pride Korea / Antica** (안티카): real per Korean press coverage
  (Antica organized Korea's first Mad Pride in 2019) but no working independent website found.
- **Pakistan Down Syndrome Association**, **Autism Sri Lanka**: Facebook-only presence; the pages
  returned HTTP 400 to automated fetch/curl and couldn't be independently confirmed this session.
- **Myanmar Autism Association**: founded 2011, government-recognized 2014 per secondary sources,
  but no working domain located.
- Cambodia: only commercial therapy/ABA-style centers turned up, which the brief asks to exclude.
- Mongolia, Uzbekistan, most Gulf states beyond Qatar: no verifiable organisation-specific website
  found via direct-domain guessing (WebSearch quota was exhausted mid-task, so this relied on
  curl/WebFetch guessing rather than search).

Every URL was checked live via `curl -sIL` with a full browser user agent, or content-verified via
WebFetch when curl was blocked by bot-detection; `node scripts/build-dataset.mjs` ran clean with
this file in place (440 initiatives, 87 countries total).
