# North America — seed batch report

14 entries, spanning the United States and Canada. Cities: Washington DC, Lincoln NE, Toronto ON,
New York NY (2 entries), Eugene OR, Portland OR, Oakland CA, Stanford CA, Cincinnati OH, Chicago IL,
Detroit/Beverly Hills MI, Lanham MD, and Plano TX. Types cover advocacy (ASAN, A4A Ontario,
MindFreedom International), community/peer-support (AWN, Fireweed Collective, Color of Autism
Foundation), arts (Creative Growth, Visionaries + Voices, Arts of Life), research (AASPIRE, Stanford
Neurodiversity Project), and education (CHADD, The Neurodiversity Alliance, Foundations for
Divergent Minds). Every `url` returned 2xx on `curl -sIL` with a browser user agent; every
`source_url` page was fetched and read directly.

**Uncertain or worth a second look:**
- CHADD's 1987 founding and parent-led status are widely repeated elsewhere but the site's own
  pages rendered mostly CSS/JS when fetched, so `founded`/`leadership` are left null/unknown.
- AASPIRE's `/about-us/` page 404'd; verified via the homepage and third-party coverage instead.
  Founding year unconfirmed.
- Color of Autism Foundation's registered address is Beverly Hills, MI (a Detroit suburb); used
  "Detroit, MI" since the org describes its service base that way, flagged in `notes`.
- Eye to Eye has rebranded to The Neurodiversity Alliance (eyetoeyenational.org now redirects to
  thendalliance.org). Sources disagree on age (~20 vs ~25 years), so `founded` is null.
- Creative Growth's founding year appears as both 1973 and 1974 across reliable sources; used 1973.
- Of four arts studios named in the brief (Creative Growth, NIAD, Visionaries + Voices, Arts of
  Life), NIAD was cut from the final 14 for geographic/type balance, not for any verification
  problem — it's an easy add later.

**Promising leads not verified in time:**
- **NeuroClastic** — confirmed real and autistic-led (200 OK), but no verifiable HQ city found.
- **Hearing Voices Network USA** — real (per Wikipedia's Hearing Voices Movement article), but
  hearingvoicesusa.org returned HTTP 429 on every automated check, and no HQ city was confirmed.
- **Autism in Black** (autisminblack.org, 200 OK, self-describes as neurodivergent-led) — no HQ
  city found on-site during this pass.
- **NIAD Art Center** (niadart.org, 200 OK, Richmond, CA) — fully verifiable, just cut for balance.
- **William & Mary Neurodiversity Initiative** — verified real, but founding year and leadership
  structure unconfirmed on-site; cut in favor of entries with fuller data.
