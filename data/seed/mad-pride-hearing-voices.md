# Mad Pride / Hearing Voices — seed report

42 entries across 26 countries: Bosnia and Herzegovina, Belgium, Canada, Switzerland, Czechia, Germany, Denmark, Spain, Finland, France, United Kingdom, Greece, Ireland, India, Iceland, Italy, Malta, Netherlands, Norway, New Zealand, Puerto Rico, Portugal, Serbia, Sweden, Slovenia, United States.

Harvested by walking Intervoice's national-networks directory (intervoiceonline.org/national-networks) and Mad in America's Mad in the World network page, cross-checked against `data/initiatives.json` for domain collisions before writing. Every URL was curl-verified with a full browser user agent; a handful needed a second pass (http:// instead of https://, or a redirect target) because the plain https request failed at the TLS layer or timed out.

## Doubts and judgment calls

- **Mad in South Asia**: regional (India, Pakistan, Bangladesh, Sri Lanka, Bhutan, Nepal), no stated HQ. Anchored to Pune as an approximate map point because of its documented ties to Bapu Trust, already in the atlas — flagged clearly in `notes` as an approximation, not a confirmed office.
- **WNUSP**: its own domains are gone — wnusp.net refuses connections, and wnusp.org now resolves to an unrelated retail site (this matters: don't reuse wnusp.org for anything). Used the Wikipedia article as both `url` and `source_url`, matching how MNLA is already handled in the main dataset for a movement with no fixed web presence.
- **ENUSP**: confirmed live and clearly survivor-led by its own text, but no current registered-office city is stated anywhere on the site. Located at its 1990 founding country (Netherlands) only, flagged in notes.
- **Prostor (Serbia)** and **Hearing Voices Network USA**: cities are best-effort placements from general knowledge, not confirmed on the organizations' own pages. Both flagged for a moderator to verify.
- **Balkan Voices Network**: genuinely a four-country regional network (Bosnia, Croatia, Serbia, Slovenia); filed under Bosnia and Herzegovina only because its Bosnian member is listed first on its own "about" page, not because that's a confirmed host country.
- Leadership calls were kept conservative: most Mad in [Country] editorial sites are marked `unknown` because their teams' composition isn't stated, even though the parent Mad in the World network is broadly critical-psychiatry aligned. Where a site explicitly named survivor board members (Mad in Italy, Mad in South Asia) or called itself lived-experience-led (NSUN, WNUSP, ENUSP, TCI Global, Recovery in the Bin, Hugarafl), that's reflected as `mixed` or `nd-led`.

## Leads found but not verified in time

- **Mad Pride Cork**, **Mad Pride London/UK**, and a distinct **Mad Pride Berlin/Hamburg** ("Mad and Disability Pride Parade") — Wikipedia's Mad Pride article confirms recurring events in these cities but no dedicated, currently-live organizational site could be found (madpride.org.uk returned 403 to automated checks; madpridecork.ie/.com and several Berlin-specific domain guesses didn't resolve).
- **Mad Pride Korea** and **Mad Pride Japan** — no verifiable dedicated site found; may exist only as periodic events without a persistent web presence.
- **PANUSP / PANPPD** (Pan-African Network) — no working official domain found (panusp.org and panafricanusp.org don't resolve); Wikipedia has no dedicated article either. Dropped rather than invented.
- **TCI Asia Pacific**'s original domain (tci-asia.org) is now a squatted gambling site — used the parent **TCI Global** (tci-global.org) instead, which still centers Asia-Pacific origins.
- **Réseau Québécois / Le Pavois** (Quebec hearing-voices support) — Le Pavois runs an "Entendeurs de voix" programme, but it reads as one service line of a broader professional mental-health rehab nonprofit rather than a dedicated peer-run hearing-voices network, so it was left out for weak fit.
