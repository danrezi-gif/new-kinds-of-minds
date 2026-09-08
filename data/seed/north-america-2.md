# North America seed, second pass

**44 entries** across the United States (39) and Canada (5), spanning **26 distinct states/provinces**: OH, VT, MA, NH, RI, CA, IL, PA, NJ, NY, CO, VA, DC, MN, NC, FL, WA, TX, MO, IN, KS, WI (US) and ON, AB, QC, NS (Canada).

Four entries drafted for this file (Hearing Voices Network USA, Creativity Explored, NIAD Art Center, Project Onward) were dropped after `build-dataset.mjs` flagged them as duplicate ids/urls against `mad-pride-hearing-voices.json` and `arts-worldwide.json`, written concurrently by other agents on this same brief. State/province coverage is unaffected since other entries already cover MA, CA and IL.

WebSearch was unavailable for almost this entire pass (session budget exhausted), so verification leaned on `curl -sIL` with a full browser user agent plus WebFetch against each site directly, per the brief's fallback instructions. All URLs returned 2xx, or a 403/406/429 consistent with bot-filtering on a site otherwise confirmed live (a pattern already used elsewhere in this dataset).

Priorities covered: peer-run mad-pride/hearing-voices organizations in western Massachusetts (Wildflower Alliance, Hearing Voices Network USA, National Empowerment Center), intellectual-disability self-advocacy (SABE, Green Mountain Self-Advocates, People First of California/Washington), disability arts studios (Creativity Explored, NIAD, Project Onward, Zeno Mountain Farm, Sins Invalid), OCD/Tourette/dyspraxia/LD national and local bodies, three Decoding Dyslexia state chapters, three university disability-research centers (Indiana, Kansas, William & Mary), and a Canada cluster (Sinneave, Autism Canada, CADDRA, Fédération québécoise de l'autisme, Autism Nova Scotia).

**Uncertain / flagged in notes:**
- Several online-only or JS-rendered sites (NeuroClastic, Thinking Person's Guide to Autism, Stimpunks, Neurodiversity Podcast, Autism in Black) have no stated physical HQ; region/coordinates are approximations based on founders' known public locations, flagged explicitly in each `notes` field.
- Autism Canada's current HQ city is uncertain (a Toronto-area phone number contradicts its Guelph legacy registration); Camphill Association of North America has no single HQ (it's a ~15-community network) and Kimberton, PA was used as a representative anchor.
- CADDRA and IOCDF and TASH: leadership composition (whether people with lived experience sit in governance) is not disclosed on-site, so marked `mixed`/`unknown` rather than guessed.
- GRASP is notable: it appears to have quietly renamed from "Global and Regional **Asperger** Syndrome Partnership" to "...**Autism** Spectrum Partnership" and now explicitly states it is autistic/neurodivergent-led.

**Dropped after failing verification** (candidates from the brief that could not be confirmed):
- Autistic People of Color Fund — no domain resolved (apocfund.org and variants all DNS-failed).
- Autistics United Canada — its only findable site (a WordPress subdomain) now shows a WordPress "domain not found" error page; likely defunct.
- Autism Acceptance Project's near-namesake "Autism Acceptance Project" candidates aside, **Speaking for Ourselves (PA)** — the guessed domain (sfopa.org) turned out to belong to an unrelated French orthodontics society; no correct domain found.
- Autistic Hoya — confirmed via WebFetch to be explicitly inactive since 2020 ("no longer active, updated, or maintained"), excluded per the brief's defunct-project rule.
- Ollibean, Autism Level UP!, and Autistic Doctors International — real and likely legitimate, but I could not confirm a specific HQ location (Ollibean's site 403'd every fetch attempt) or, for Autistic Doctors International, any single-country anchor (it's explicitly a global membership), so they were left out rather than guessed.
- ndworkplace.org ("Neurodiversity in the Workplace") resolved to a parked redirect stub, not a live organization site.

**Leads worth a future pass:** Aut'Créatifs (Québec, autistic-led arts collective per the brief) — no verifiable domain found without search; Autisme Québec (distinct from the Fédération québécoise de l'autisme, which I did verify) — domain guesses all failed; an Indigenous-led autism/neurodiversity initiative in the US or Canada — none surfaced through directory-style browsing; a confirmed Latino-led (not just Latino-serving) autistic self-advocacy group.
