# Daniel Rezinovsky — public creative / technical / research project inventory

Compiled 2026-09-08 from: `gh` CLI against GitHub user `danrezi-gif` (repo metadata, commit
timestamps, languages, README/HTML source), live fetches of danielrezinovsky.com,
monkadelic.me, iching.monkadelic.me, mindlamp.monkadelic.me, and local READMEs on this
machine. Every date below is sourced from a specific artifact (repo `created_at`, first/last
commit timestamp, a citation string, or a copyright/label on a live page) — the source is named
inline. Where no date evidence exists, this says "date not found" rather than guessing.

A caveat on dates: GitHub's API returned 2026 timestamps for every repo in this account
(created_at, commit author dates) — that is simply what the account's commit history contains;
this document reports it as found, without adjustment.

Known publications (2018 book, 2017 MEQ30 validation, 2023 mediumship paper, 2021 book chapter)
were excluded from re-research per instructions and are not repeated here except where they are
quoted verbatim inside a project's own copy (e.g., the Entrementes site citing the 2018 book).

---

## 1. Entrementes / New Kinds of Minds

This is one initiative with at least three distinct artifacts: a clinical/research site
(Entrementes), a philosophical sub-program inside it ("Novas Mentes"), and a separate interactive
map webapp that shares the "New Kinds of Minds" name.

### 1a. Entrementes (clinical + research site, current build)

- **Year(s):** Local working copy at `C:\Users\danre\OneDrive\Desktop\AI\entrementes-hub` carries
  a project note dated "Copy pass done 2026-09-02" (its own `CLAUDE.md`). A related but distinct
  GitHub repo `danrezi-gif/Entrementes` (private) was created 2026-01-27T07:25:03Z and last
  pushed 2026-03-31T07:36:37Z (126 commits total, earliest 2026-03-09T19:12:05Z, latest
  2026-03-31T07:36:36Z, per `gh api repos/danrezi-gif/Entrementes/commits --paginate`). It is
  live (200 OK) at https://danrezi-gif.github.io/Entrementes/. The local `entrementes-hub`
  working copy has not been found in the `danrezi-gif` GitHub account — it appears to be a newer,
  not-yet-published iteration of the same site.
- **Description:** A Portuguese-language (pt-BR) site presenting Daniel's clinical psychology
  practice and research together: a hero ("Entrementes — Atendimento clínico e o estudo do
  despertar espiritual"), a YouTube channel embed (Olhar Desperto), a "works already written"
  section linking his 2022 PUC-SP master's dissertation and a poetry project, a page for the 2018
  book *Encontro com o Absoluto*, an 8-session paid workshop ("A Poética da Travessia"), and a
  first-person "Sobre" section drawn from his own MA-thesis account of his path from applied
  math/neurophysiology at UFRJ into clinical psychology and then into the study of spiritual
  awakening. Built with React + TypeScript + Vite (per `package.json`/`vite.config.ts` in both
  the GitHub repo and the local copy). The GitHub repo's own README is the unedited Vite/React
  scaffold template — the actual site copy lives in `src/content.ts`, read directly for this
  inventory.
- **Role:** Sole author/developer; the clinical content is his own licensed practice (CRP-08/18731
  is stated on the site).
- **URL(s):** https://danrezi-gif.github.io/Entrementes/ (public GitHub Pages deployment of the
  private repo); local working copy not yet deployed.
- **Festival/showings:** No evidence found. This is a service/practice site, not exhibited work.
- **Image candidates:** None found in the repo or local folder at the top two levels — the site's
  only photo is referenced externally (`https://danielrezinovsky.com/photo.jpg`). If images are
  needed for the PDF, a screenshot of the live site would need to be taken separately.

### 1b. "Novas Mentes" (Entrementes sub-program)

- **Year(s):** Same build as 1a (local copy note dated 2026-09-02); intellectually based on the
  2022 PUC-SP dissertation *Transições Ontológicas*, quoted directly in the page copy.
- **Description:** A page/program (`/novas-mentes` route, `NewMinds.tsx`) titled "Novas Mentes —
  IA, Neurodivergência e Libertação Existencial," built around four stated pillars: non-duality
  and consciousness, neurodivergence as a distinct ontology (ADHD, autism, bipolarity framed as
  "alternative ontologies" rather than deficits), AI and the problem of consciousness, and radical
  skepticism as existential liberation. It presents dialogue-style Q&A quoting his own
  dissertation, and ends with a call to join workshops/study groups. This is a written/curatorial
  piece, not a technical build in itself — it consumes the same Entrementes codebase as 1a.
- **Role:** Sole author.
- **URL(s):** part of https://danrezi-gif.github.io/Entrementes/ (route `/novas-mentes`) once
  deployed; not separately hosted.
- **Festival/showings:** No evidence found.
- **Image candidates:** None found.

### 1c. New Kinds of Minds (interactive neurodiversity map webapp)

- **Year(s):** Repo `danrezi-gif/new-kinds-of-minds` created 2026-02-16T02:13:00Z; all 11 commits
  fall on 2026-02-16 (02:12–04:38), i.e. a single-day build (per `gh api
  repos/danrezi-gif/new-kinds-of-minds/commits`). A companion deployment repo,
  `new-kinds-of-minds-hub` (private), was created the same day (2026-02-16T03:19:26Z).
- **Description:** "An interactive world map of neurodiversity projects and initiatives," per the
  repo description and README, explicitly framed as "Part of the Entrementes initiative." Built
  with Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Leaflet/react-leaflet for the
  map, and Supabase (Postgres + Auth + Row-Level Security) for a moderated community-submission
  form ("Submit a Project," approved entries shown as color-coded markers, filterable by
  category). This is the closest existing precedent to the atlas project this grant folder is
  currently building (`new-kinds-of-minds/research/`).
- **Role:** Sole author/developer.
- **URL(s):** Live deployment at https://new-kinds-of-minds-hub.vercel.app (200 OK, checked
  2026-09-08); source repo https://github.com/danrezi-gif/new-kinds-of-minds (public) and
  https://github.com/danrezi-gif/new-kinds-of-minds-hub (private, deployment-only).
- **Festival/showings:** No evidence found.
- **Image candidates:** No screenshots or photos in either repo (only stock Next.js SVG icons:
  `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`). A live screenshot of
  https://new-kinds-of-minds-hub.vercel.app would be the only way to get a usable image.

---

## 2. Ontik (VR Shader Experience)

- **Year(s):** GitHub repo `danrezi-gif/Ontik-vr-shader-experience` created
  2026-01-26T05:16:22Z. Full commit history (307 commits, paginated) runs
  2026-01-26T05:25:47Z → 2026-07-02T22:32:49Z — the longest-running and most-committed project in
  the account. Separately, the project's own suggested academic citation (in both the GitHub
  README and the local `Readme.md` at `C:\Users\danre\Ontik-vr-shader-experience\README.md`)
  reads: `Rezinovsky, D. (2025). VR Shader Experience: Experimental WebXR environments for
  consciousness phenomenology.` — i.e., the author's own citation labels the work 2025, a year
  earlier than the repo's creation timestamp; both figures are reported here as found, unreconciled.
- **Description:** A WebXR project — live at https://ontik.app — of "experimental WebXR
  experiences exploring consciousness states through shader-based environments," built with
  Three.js and custom GLSL shaders, playable in VR headsets (Quest, PSVR, PC VR) or desktop
  browser. Per its README it comprises "a complete 9-minute contemplative experience" plus four
  shorter experimental pieces, with spatial audio design. The README frames it explicitly as
  research-adjacent work: "developed by Daniel Rezinovsky, PhD candidate in Religious Studies at
  Rice University, working at the intersection of consciousness research, spirituality, and
  creative technology," and solicits feedback specifically from people with "direct experience of
  altered states, mystical encounters, or psychedelic experiences." It is far and away the
  largest codebase of the projects reviewed (322,231 bytes of TypeScript per
  `gh api .../languages`).
- **Role:** Sole creator/developer, per the README's own attribution.
- **URL(s):** Live: https://ontik.app (200 OK). Source:
  https://github.com/danrezi-gif/Ontik-vr-shader-experience (public). Homepage field on the repo
  also lists https://ontik.app.
- **Festival/showings:** No evidence found in the repo, README, or live site of any festival
  submission or public exhibition. The README's "Support this work" section mentions an itch.io
  listing as "(coming soon)" — not yet live.
- **Image candidates (best available):**
  - `https://raw.githubusercontent.com/danrezi-gif/Ontik-vr-shader-experience/main/img/ontik-main.jpg`
  - `https://raw.githubusercontent.com/danrezi-gif/Ontik-vr-shader-experience/main/img/ontik-cosmic-attractor.jpg`
  - `https://raw.githubusercontent.com/danrezi-gif/Ontik-vr-shader-experience/main/img/ontik-the-ascension.jpg`
  - (also in the same folder: `ontik-alpha-and-omega.jpg`, `ontik-infinite-gateway.jpg`,
    `ontik-transcendent-domain.jpg`, `ontik-alien-womb.jpg` — these six stills are what
    danielrezinovsky.com itself pulls into its Ontik gallery via raw GitHub URLs, confirmed in
    that page's source.)
  - Local: `C:\Users\danre\Ontik-vr-shader-experience\attached_assets\IMG_0413_1769389680532.png`
    (a photo, not a screenshot — unclear content, worth checking before use).

---

## 3. Encontro

- **Year(s):** Repo `danrezi-gif/encontro` created 2026-02-13T10:32:36Z. Full commit history: 51
  commits, 2026-02-13T10:34:03Z → 2026-03-08T05:35:44Z.
- **Description:** "A WebXR ceremony of encounter — where you become a field of light," per the
  README. Built for Meta Quest with hand tracking and no avatars/usernames/profiles: the user
  becomes "a flowing field of iridescent energy" that responds to movement (ripples trail the
  arms; stillness makes the field contract; fast movement scatters it into fragments). Technically
  Three.js + custom GLSL shaders (raymarched iridescent volume + bokeh gradient orbs) served via
  Vite, with a Node.js/Socket.IO server for a planned but not-yet-built multi-user layer. The
  README states its own phase status explicitly: "Phase 1: Energy field presence — you are light
  (current)"; Phase 2 (AI energy fields) and Phase 3 (networked multi-user encounters) are stated
  as future, not built.
- **Role:** Sole creator/developer.
- **URL(s):** Live (single-user, current phase only): https://danrezi-gif.github.io/encontro/
  (200 OK). Source: https://github.com/danrezi-gif/encontro (public).
- **Festival/showings:** No evidence found. The monkadelic.me portfolio page itself labels it
  "early beta" ("Still a draft, still a promise: a place for people to meet as light").
- **Image candidates:** None found in the repo (no image files at any depth via a full recursive
  tree search). A live screenshot of https://danrezi-gif.github.io/encontro/ would be the only
  way to get a usable image, and would show only the single-user Phase 1 state, not the
  multi-user "encounter" concept the name refers to.

---

## 4. Quantum Sphere / MindLamp

- **Year(s):** Repo `danrezi-gif/Quantum-Sphere` created 2026-03-26T05:23:44Z (per repo list;
  note repo-view timestamp differs slightly from commit-derived `created_at` above by a few
  seconds across two separate API calls — both point to the same day). Commit history: 25
  commits, 2026-03-26T05:47:38Z → 2026-04-08T00:12:33Z.
- **Description:** "A real-time quantum consciousness visualizer inspired by the Princeton
  Engineering Anomalies Research (PEAR) Lab and Psyleron's MindLamp" (README's own framing). A
  raymarched GLSL sphere (shader adapted from Shadertoy `t3ySzG`) "breathes" at rest; its
  size/color are driven by a live stream of quantum random bytes fetched every second from the
  LfD Laboratory QRNG (an ID Quantique photon-detection device at a German lab). The app computes
  a cumulative Z-score against the PEAR statistical protocol and visibly changes the sphere's
  state at the p≈0.05 and p<0.001 thresholds — explicitly testing, per the README, "whether
  focused intention can nudge quantum randomness beyond what chance alone predicts." Stack: React
  + Three.js (react-three-fiber) frontend, Express + Server-Sent-Events backend; each session logs
  trial data to CSV.
- **Role:** Sole creator/developer.
- **URL(s):** Live: https://mindlamp.monkadelic.me (200 OK). Source:
  https://github.com/danrezi-gif/Quantum-Sphere (public).
- **Festival/showings:** No evidence found.
- **Image candidates:** None found in the repo (no image files at any tree depth). A live
  screenshot of https://mindlamp.monkadelic.me is the only path to a usable image — the visual is
  a single glowing raymarched sphere against a dark background.

---

## 5. Quantum I Ching

- **Year(s):** Repo `danrezi-gif/quantum-iching` created 2026-04-02T05:23:44Z (repo-list field;
  the repo's own `created_at` via direct lookup lands within the same minute). Commit history: 10
  commits, 2026-04-02T05:23:32Z → 2026-04-04T22:19:24Z — a three-day build, the shortest and most
  recent of the technical projects reviewed.
- **Description:** "An I Ching divination app that uses hardware quantum random number
  generation for coin casting, and a Claude-powered interpretation layer. Available in English
  and Portuguese" (README). Users optionally enter a question, then cast six lines one at a time;
  each coin flip draws 3 bits from the same LfD/ID Quantique hardware QRNG used in Quantum
  Sphere. The resulting hexagram is looked up via the King Wen sequence and interpreted by
  streaming Claude output (model pinned as `claude-sonnet-4-6` in the README) using the Richard
  Wilhelm translation as source text; a Portuguese translation of all 64 hexagrams was itself
  generated by Claude from the Wilhelm text (`src/data/generate_pt.mjs`). Stack: React 19 +
  TypeScript + Vite, Tailwind CSS v4, Express (API proxy + SSE).
- **Role:** Sole creator/developer.
- **URL(s):** Live: https://iching.monkadelic.me (200 OK). Source:
  https://github.com/danrezi-gif/quantum-iching (public).
- **Festival/showings:** No evidence found.
- **Image candidates:**
  - `https://raw.githubusercontent.com/danrezi-gif/quantum-iching/main/src/assets/hero.png`
  - `https://raw.githubusercontent.com/danrezi-gif/quantum-iching/main/public/zen-background.png`
  (Both unverified for visual content in this pass — file names suggest a hero image and a
  background texture; open before use.)

---

## 6. Sangha

- **Year(s):** Repo `danrezi-gif/sangha` created 2026-02-18T18:53:16Z. It has exactly **one**
  commit, 2026-02-18T18:50:01Z (per `gh api repos/danrezi-gif/sangha/commits`), on default branch
  `master` rather than `main` — i.e., a single initial scaffold push, not iterated since.
- **Description:** "A swarm intelligence artwork" (README's own framing): "100+ LLM agents, each
  initialized with a distinct contemplative tradition, inhabit a persistent digital environment
  where they dialogue, form affinities, and produce emergent inter-tradition texts. The artwork
  is the living process itself." Ten starter agent "traditions" are named in the README (Sufi/
  Rumi, Zen/Dogen, Advaita Vedanta/Ramana Maharshi, Christian mysticism/Meister Eckhart, Tibetan
  Buddhism/Milarepa, Taoism/Zhuangzi, Kabbalah/Abulafia, Nagarjuna/Madhyamaka philosophy,
  Shipibo-Conibo indigenous/shamanic, and a "hybrid/liminal" agent), with 12 tradition families
  total planned. Technically a Python package (LiteLLM routing across Groq Llama models and
  Claude, tiered by cost — the README gives an explicit cost model, ~$8.34/month for 100 agents),
  SQLite persistence, and a FastAPI + WebSocket + D3.js live dashboard visualizing the swarm as a
  force-directed graph.
- **Role:** Sole creator/developer. Given the single-commit history, this reads as a designed and
  scaffolded concept rather than a run or exhibited experiment — no evidence was found of the
  experiment having actually been executed (no data files, dashboard screenshots, or generated
  texts in the repo).
- **URL(s):** No live/hosted URL found (`homepageUrl` empty on the repo). Source:
  https://github.com/danrezi-gif/sangha (public).
- **Festival/showings:** No evidence found.
- **Image candidates:** None — no image files in the repo.

---

## 7. Monkadelic (portfolio / brand site)

- **Year(s):** Repo `danrezi-gif/monkadelic` created 2026-02-22T08:36:29Z. Commit history: 6
  commits, 2026-02-22T08:36:29Z → 2026-08-09T19:05:55Z (longest calendar span of any repo by
  first/last-commit gap, though very low commit count — a page revisited occasionally rather than
  actively developed).
- **Description:** Daniel's project-portfolio landing page, live at https://monkadelic.me. Its
  own HTML (read directly, since the repo's README is a one-line stub, "# monkadelic page") lists
  seven numbered project cards, each with a one-line tagline and a status badge:
  1. **Ontik** — immersive · live — "Immersive worlds made from light, code, and movement."
  2. **Quantum Sphere** — generative · live — "A glowing universe built with a raymarcher and quantum randomness."
  3. **Quantum I Ching** — experiment · in progress — "An old book, a photon detector, and a browser trying to have a conversation."
  4. **Encontro** — webxr · early beta — "Still a draft, still a promise: a place for people to meet as light."
  5. **New Kinds of Minds** — notes · in progress — "Notes toward a map of neurodiversity and other ways of being."
  6. **Entrementes** — people · forming — "A community for neurodivergent creatives, artists, and therapists."
  7. **Mu** — conversation · live — "A small, quiet AI chat with a Zen mood and a voice."

  It also has an "About" section (quoted verbatim below) and a "Music for Alien Voyages" section
  linking an electronic album on Bandcamp (`monkadelic.bandcamp.com/album/music-for-alien-voyages`
  — note this is a different Bandcamp handle than `theosisproject.bandcamp.com`, which
  danielrezinovsky.com links for the same-titled 2023 album *Music for Alien Voyages*; both exist
  and are reported here as found, unreconciled).
- **Role:** Sole author. This is the umbrella/index page for the "Monkadelic" creative identity
  under which Ontik, the quantum pieces, Encontro, and Mu are presented.
- **URL(s):** Live: https://monkadelic.me (200 OK). Source:
  https://github.com/danrezi-gif/monkadelic (public).
- **Festival/showings:** No evidence found.
- **Image candidates:** None — no image files anywhere in the repo (confirmed via full recursive
  tree search); the page's visual interest (an "orb" element on the Ontik card) is CSS/JS-driven,
  not an image asset.

---

## 8. Mu (mu-chat)

- **Year(s):** Repo `danrezi-gif/mu-chat` created 2026-01-27T07:25:03Z (repo-list field shows
  2026-01-27T07:25:03Z under a different repo — correcting: `mu-chat`'s own `created_at` is
  2026-01-27T07:05:03Z per the repo list). All 6 commits fall on 2026-01-27 (07:05:27–07:05:30Z),
  a same-minute initial push; `updatedAt` shows a later metadata touch on 2026-02-10 with no new
  commits.
- **Description:** "Mu — A minimalist AI chat with zen aesthetic and voice capabilities," per the
  repo description; presented on monkadelic.me as project 07, "live," tagline "A small, quiet AI
  chat with a Zen mood and a voice." Plain HTML/JavaScript (17.9KB HTML, 4.3KB JS per
  `gh api .../languages` — no framework).
- **Role:** Sole creator/developer.
- **URL(s):** No dedicated live URL found in repo metadata (`homepageUrl` empty); linked from
  danielrezinovsky.com's projects list directly to the GitHub source:
  https://github.com/danrezi-gif/mu-chat (public).
- **Festival/showings:** No evidence found.
- **Image candidates:**
  `https://raw.githubusercontent.com/danrezi-gif/mu-chat/main/images/zen-background.png`

---

## 9. Other technical/creative work (lower relevance to this grant, listed for CV completeness)

- **sacred-text-variation-llm** — This is a **fork** of `artvandelay/sacred-text-llm` (confirmed
  via `gh api repos/danrezi-gif/sacred-text-variation-llm --jq '.fork, .parent.full_name'` →
  `true`, `artvandelay/sacred-text-llm`). Of all 58 commits in the fork's history, 56 are
  authored by "artvandelay" and 2 by "Jigar" — **none by Daniel/danrezi-gif**. It should not be
  presented as his own authored work; at most it can be listed as "explored/forked" a RAG system
  over 30M+ words from 353 spiritual traditions. Excluded from the main inventory above for that
  reason.
- **The Singing Plate (Chladni)** — `D:\AI\chladni`, no GitHub repo found under `danrezi-gif`.
  Per its own README: "Built 2026-08-29," a playable Chladni-plate/Faraday-water-dish simulator
  (sound → FFT → physically modeled vibration modes → sand-grain or light-ray rendering, WebGL2).
  Published privately as a Claude.ai artifact
  (`https://claude.ai/code/artifact/e0e91122-11d6-4674-bff6-c163449675cb`) and folded into a
  larger "Visual Music" essay/page (`D:\AI\lattice-library\site\visual-music.html`). Detailed,
  technically substantial physics work but not neurodiversity/participatory-art focused; relevant
  mainly as evidence of shader/audio-visual technical range.
- **Hermes Voice** — `D:\AI\hermes`, no GitHub repo found under `danrezi-gif`. Per its README: a
  realtime, duplex, audiovisual conversational-agent PWA (STT→LLM→TTS pipeline, LiveKit + a
  self-hosted Hermes-4-14B model + ElevenLabs/Kokoro TTS + Moondream2 vision), explicitly labeled
  "personal prototype." No date given in the README; not otherwise dated in this pass.
- **Lattice Library** — `D:\AI\lattice-library`, no GitHub repo found under `danrezi-gif`. A
  research/tooling library mapping "lattice-based shader art" across mathematics, art history
  (cites Kusama, Islamic girih, Shipibo kené patterns), and psychedelic phenomenology (cites
  Klüver's form constants), built to feed Ontik and other shader work. No date given in its
  README.
- **Somnium** — `D:\AI\somnium`, no README found at the top level (checked; none present). A
  Vite/TypeScript project (per `package.json`/`vite.config.ts` present) with screenshot-like
  assets at `D:\AI\somnium\shots\FORM-bridges.png`, `FORM-colonnades.png`, `FORM-great-works.png`,
  `FORM-rings.png`, `FORM-towers.png`, `FORM-walls.png`, `FORM-ziggurats.png`, and generated stills
  under `D:\AI\somnium\h3\seed-360*.png`. Per the user's own memory notes this is a walking-sim
  art project; not independently verified against a README in this pass since none exists.
- **autonomy-engine**, **new-kinds-of-minds-hub** (as a bare repo, distinct from its live
  deployment already covered in §1c) — private repos present on the account but outside the set
  of sources named for this inventory; not researched further here.

---

## Bio facts found on danielrezinovsky.com

danielrezinovsky.com is a static single-page site (source: GitHub repo `danrezi-gif/danrezi`,
description field "Personal Page," created 2026-01-27T19:20:55Z per repo metadata; 41 commits,
2026-02-08T02:41:48Z → 2026-03-30T20:11:16Z). It renders bilingually (EN/PT) from a JS content
object in `index.html`, read directly from the repository source. The English text is quoted
verbatim below.

**Opening statement:**
> "Art, science, and spirituality in service of consciousness transformation"

**Bio (verbatim):**
> "I am a researcher, artist, and psychotherapist whose work explores the terrain where
> consciousness, spirituality, and creative expression converge. My path began in neuroscience at
> UFRJ in Rio de Janeiro, moved through clinical psychology, and was transformed by a spontaneous
> spiritual awakening that redirected the course of my life and inquiry.
>
> I am currently a PhD student at Rice University's Department of Religion in Houston, where I
> investigate the broad implications of religious and mystical experiences for our understanding
> of reality. My master's dissertation at PUC-SP, *Ontological Shifts*, examined spiritual
> awakening through transdisciplinary perspectives spanning phenomenology, philosophy of mind, and
> contemplative traditions.
>
> In 2018, I published *Encontro com o Absoluto* ("Encounter with the Absolute"), a
> philosophical-contemplative work exploring the encounter between human consciousness and the
> ground of being. I am also a painter working in oil, acrylic, and watercolor; the ambient
> musician behind Theosis Project; and the creator of Ontik, a WebXR platform for immersive
> contemplative experiences. With over 12 years of clinical experience, I also work as a
> psychotherapist specializing in consciousness-informed approaches.
>
> My interests sit at the intersection of mysticism, psychedelics, neurodivergence, idealism,
> phenomenology, art, and AI. From Brazil, currently in Houston."

**Research areas (verbatim, "Research & Writing" area):**
> "Philosophy of Religion · Psychology of Religion · Mysticism · Psychedelic Research · Idealism ·
> Phenomenology · Ontology"

**Publications listed on the site (verbatim):**
> "*Encounter with the Absolute: A journey beyond the frontiers of consciousness* — Book (Editora
> Coffeer's, 2018). A philosophical-contemplative exploration of the encounter between human
> consciousness and the Absolute."
>
> "*Ontological Shifts: Transdisciplinary Perspectives on the Study of Spiritual Awakening* — M.A.
> Dissertation (PUC-SP, 2022). Examines spiritual awakening through phenomenology, philosophy of
> mind, idealism, and contemplative traditions."

**Award (verbatim):**
> "John Templeton Prize — The Cognitive Psychology of Religion in Brazil (2020)"

**Education (verbatim, "Education" area):**
- Ph.D., Religion (in progress) — Rice University, Houston, TX — Current
- M.A., Religious Studies — Pontifical Catholic University of São Paulo (PUC-SP) — 2022
- B.Sc., Psychology — Pontifical Catholic University of Paraná (PUC-PR) — 2010
- Neuroscience Research — Instituto de Biofísica Carlos Chagas Filho, UFRJ — 2005–2006

**Practice (verbatim, "Practice" area):**
> "Licensed clinical psychologist (CRP-08/18731) with 12+ years of experience. Specializing in
> consciousness-informed therapeutic approaches, psychedelic-assisted therapy, and facilitating
> study groups on non-dual spirituality and contemplative traditions. Background in neuroscience
> (UFRJ) and formal contemplative practice."

**Art (verbatim excerpts, "Art" area):**
> Painting: "Abstract and figurative work in oil, acrylic, and watercolor, exploring themes of
> consciousness, spiritual emergence, and the invisible forces beneath surface reality. Available
> on Saatchi Art." Seven named paintings are listed with medium/size/Saatchi Art links: *Message
> from the Depths* (Oil on Canvas, 100×100cm), *Resurrection* (Oil on Canvas, 100×60cm), *Dance of
> Light* (Oil on Canvas, 100×100cm), *Spirits #2* (Acrylic on Canvas, 60×100cm), *Spirits #3*
> (Acrylic on Canvas, 50×70cm), *Spirits #1* (Acrylic on Canvas, 40×50cm), *Improvisation 1*
> (Watercolor on Paper, 30×42cm).
>
> Music: "Theosis Project — Ambient and experimental electronic music. *Music for Alien Voyages*
> (2023): an exploration of otherworldly musical textures, psychic travel into mystical alien
> realms. Eight contemplative tracks spanning space ambient, drone, and experimental electronics.
> Cover art by Karina Busnardo."
>
> Immersive VR: "Creator of immersive digital art under the name Monkadelic. Current focus on
> WebXR contemplative experiences through Ontik — sacred geometry, psychedelic aesthetics, and
> meditation in virtual reality."

**Projects listed on the site (verbatim descriptions):**
- Ontik — "Immersive WebXR contemplative experiences — sacred geometry, psychedelic aesthetics,
  and meditation in virtual reality" — tech: "WebXR · React Three Fiber · Three.js · GLSL Shaders"
- Entrementes — "Digital platform exploring consciousness, spirituality, and neurodiversity
  content" — status: "early stage"
- Mu — "A minimalist AI chat with zen aesthetic and voice capabilities"
- Quantum Sphere — "Live quantum random number stream driving a raymarched sphere — an
  interactive mind-matter experiment in the PEAR Lab tradition"

**Image on the site:** `photo.jpg` (portrait), raw URL:
`https://raw.githubusercontent.com/danrezi-gif/danrezi/main/photo.jpg`

**About text on monkadelic.me (verbatim, separate site, same repo family as project 7 above):**
> "I'm Daniel Rezinovsky. I make art, music, software, and trouble for the boundaries between
> them."
> "PhD candidate, Religious Studies — Rice University / Author, Encontro com o Absoluto /
> Clinical psychologist — 12+ years / Based between Brazil and the world"
> "I keep moving between generative art, VR, painting, electronic music, psychology, religious
> study, and AI because I haven't found a reason to separate them. They give me different ways to
> look at the same questions: what is a mind, and what happens when two minds meet?"
