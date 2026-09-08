# Europe (local/grassroots) — seed report

**26 entries** across 10 countries: Italy (8), Spain (4), France (4), United Kingdom (4, within the 10 cap), Netherlands (1), Portugal (1), Finland (1), Norway (1), Sweden (1), Austria (1). Build passes clean (`node scripts/build-dataset.mjs` → 471 initiatives, 87 countries, no errors in this file).

## Context and a hard constraint

This session's WebSearch budget (200 calls) was exhausted early, mostly by other agents working the same atlas in parallel. Every entry here was built from WebFetch + curl verification against known directories (Wikipedia categories, the Inclusion Europe/EPSA self-advocate member list, and the Intervoice hearing-voices national-networks page) instead of open search, which sharply limited discovery. I also lost a first draft of 9 entries (REV France, REV Belgium, Autisme Centraal, Stichting Weerklank, Netzwerk Stimmenhören Germany/Switzerland, Hearing Voices Network Ireland, Stemmehørernetværket Denmark, Moniaaniset) to a `mad-pride-hearing-voices.json` sibling agent that claimed the same organisations concurrently — removed per the duplicate-url rule after the first build run. Net effect: Belgium, Germany, Ireland, Switzerland and Denmark now have zero entries from this file (they may still appear via the sibling's file). The 45–55 target was not reached; 26 verified, non-duplicate entries is what remained after that collision. Dozens of guessed domains (Spanish regional Asperger associations, "Il Posto delle Fragole," GADIR Cádiz, French GEM directories, Vienna's self-advocacy centre) resolved to nothing and were dropped rather than reported.

Italy is heavy (8) because the Basaglia-lineage Trieste/Gorizia cluster (Radio Fragola x2, La Collina) and four separate "Gruppo Asperger" regional associations (Milan, Verona, Rome/Lazio, Naples) were all independently verifiable and none collided with sibling files. The remaining volume is EPSA self-advocacy members for people with intellectual disabilities (France, Netherlands, Norway, Sweden, Finland) — a genre outside both sibling agents' territory (autism federations; EUCAP/ADHD/dyslexia networks).

## Entries I was unsure about

- **Gruppo Asperger Lazio / Campania / Veneto**: leadership composition (autistic-led vs. parent-led) not stated on any of the three sites, marked "unknown."
- **Autismo Diario**: no physical base confirmed on-site; likely Salamanca from background knowledge but not verified, so left as an online-anchor entry at a generic Spain point rather than asserting a city.
- **Nous Aussi (France)**: no single confirmed HQ city (Paris used, from a 2025 general assembly location); a same-named but unrelated service provider exists at nousaussi.fr in Haute-Savoie — do not confuse the two.
- **NFU (Norway)**: Inclusion Europe lists an internal self-advocacy group as the EPSA member, but only the parent federation's page could be confirmed, so leadership is marked "mixed" rather than "nd-led."
- **Asperansa**: site blocked automated fetches (Anubis bot screen); existence and details confirmed only via the Brittany regional autism resource centre's directory listing.

## Promising leads not verified in time

- **Il Posto delle Fragole** and other Trieste-cooperative-network members named in the task brief — no live domain found under several guessed spellings.
- **GADIR**, a Cádiz self-advocacy group listed as a Plena Inclusión España EPSA member — could not find its own site.
- Vienna's **Selbstvertretungszentrum** self-advocacy centre — domain did not resolve (may have moved or lapsed).
- UK university neurodiversity societies at Edinburgh, Lancaster and York — real per secondary sources, but their current society pages could not be located to verify independently (only Bristol and UWE Bristol were confirmed directly).
- Spanish "empresas de inserción" specifically employing autistic/neurodivergent workers (e.g. Specialisterne España) — plausible but the domains tried did not resolve.
