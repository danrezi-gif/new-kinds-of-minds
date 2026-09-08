Research complete. Web search budget was exhausted mid-task, so I verified via WebFetch + curl for the remaining checks. Findings below.

## VERIFIED ENTRIES

---

**1. Bizchut – The Israel Human Rights Center for People with Disabilities**
- Local name: בזכות (Bizchut)
- Summary: Independent legal-advocacy and watchdog organization advancing the rights of people with all disability types in Israel, through litigation, policy work, and a public inquiries hotline.
- Type: advocacy
- Focus areas: intellectual-disability, mad-pride-adjacent (mental health/legal capacity work), neurodiversity-general, learning-disabilities (cross-disability, not category-specific)
- Leadership: mixed (board combines people with disabilities, parents, professionals, academics, activists)
- Mode: physical (Jerusalem + Tel Aviv offices), hybrid outreach
- City/Region: Jerusalem (HQ), also Tel Aviv
- Country: Israel
- Founded: 1992 (spun out of the Association for Civil Rights in Israel)
- Languages: Hebrew, English, Arabic
- Official URL: https://www.bizchut.org.il/bizchut-english
- Source: same (self-reported); cross-referenced against New Israel Fund and Ruderman Family Foundation grant listings
- curl status: `HTTP/1.1 200 OK`

---

**2. Beit Issie Shapiro**
- Local name: בית איזי שפירא
- Summary: Israeli nonprofit that develops, researches, and scales disability service models (early intervention, hydrotherapy, assistive technology, inclusive education) and shares them internationally; holds UN ECOSOC consultative status.
- Type: research (with service delivery arm)
- Focus areas: intellectual-disability, learning-disabilities, autism, neurodiversity-general
- Leadership: ally-led (founded by family/professionals in memory of Issie Shapiro; board/executive-run)
- Mode: physical (Ra'anana campus), some hybrid/training content
- City/Region: Ra'anana
- Country: Israel
- Founded: 1980
- Languages: Hebrew, English, Arabic
- Official URL: https://beitissie.org.il/en/
- Source: same site (about-us, contact-us, research-unit pages)
- curl status: `HTTP/1.1 200 OK`

---

**3. Shutaf Inclusion Programs**
- Summary: Jerusalem-based "reverse inclusion" nonprofit running year-round camps and youth-leadership programs where children/teens with disabilities (autism, Down syndrome, ADHD, behavioral/emotional disabilities) and non-disabled peers participate together.
- Type: community/education
- Focus areas: autism, adhd, intellectual-disability, down-syndrome
- Leadership: ally-led (professionally run inclusion nonprofit, not self-advocate-led)
- Mode: physical
- City/Region: Jerusalem
- Country: Israel
- Founded: 2007
- Languages: Hebrew, English
- Official URL: https://shutafinclusionprograms.org/
- Source: LinkedIn org page + Jewish Chronicle (2022 grant coverage) — direct WebFetch of the site was blocked by a bot filter (403) despite the server itself returning 200 to curl, so content is corroborated via secondary sources rather than the raw page text.
- curl status: `HTTP/1.1 200 OK` (site is live; WebFetch's bot-check blocked content extraction)

---

**4. Lebanese Autism Society (LAS)**
- Summary: Beirut-based membership NGO founded by parents and professionals, running specialized educational, vocational (a Technical School for Adolescents with Autism), and consultancy programs for autistic children and teens.
- Type: education/care
- Focus areas: autism
- Leadership: ally-led (parent- and professional-founded)
- Mode: physical
- City/Region: Beirut (Gemmayzeh and Baabda locations)
- Country: Lebanon
- Founded: 1999
- Languages: English, French/Arabic implied
- Official URL: https://www.autismlebanon.org/
- Source: same site; cross-referenced with Disability Hub Lebanon and arab.org directory listings
- curl status: `HTTP/1.1 200 OK`

---

**5. Dubai Autism Center**
- Local name: مركز دبي للتوحد
- Summary: UAE nonprofit established by government decree providing assessment, intervention, rehabilitation, professional training, and community-awareness programs for children with autism spectrum disorder.
- Type: care/education
- Focus areas: autism
- Leadership: ally-led (director-general/professional leadership)
- Mode: physical
- City/Region: Garhoud, Dubai
- Country: UAE
- Founded: 2001
- Languages: English, Arabic
- Official URL: https://www.dubaiautismcenter.ae/
- Source: same site — news section shows an item current to April 2026
- curl status: `HTTP/1.1 200 OK`

---

**6. Tohum Otizm Vakfı (Tohum Autism Foundation)**
- Summary: Istanbul-based public-benefit foundation focused on early diagnosis and special education for autistic children, and on national-scale autism screening and awareness campaigns (including a 2006 EU/Ministry of Health screening project).
- Type: education/advocacy
- Focus areas: autism
- Leadership: ally-led (professional/foundation-run)
- Mode: physical + online educational platforms
- City/Region: Istanbul (Şişli/Beyoğlu)
- Country: Turkey
- Founded: 2003
- Languages: Turkish, English
- Official URL: https://tohumotizm.org.tr/
- Source: same site's "who-we-are" and project pages (content pulled via search cache; direct WebFetch of the who-we-are subpage 404'd, but the domain root itself is verified live)
- curl status: `HTTP/1.1 200 OK` (root domain; specific subpage returned 404 on fetch)

---

### Additional candidate with a live site, not fully written up (time/search-budget ran out)
**Enosh – The Israeli Mental Health Association** (אנוש) — Israel's largest mental-health rehabilitation network (96 centers), founded 1978, explicitly builds "peer specialists and lived-experience practitioners" into service delivery (recovery model), though governance is professional-run rather than consumer-led. Closest regional analogue to a Mad Pride/peer-support entry found. URL: https://www.enosh.org.il/english/ — curl: `HTTP/1.1 200 OK`.

## UNVERIFIED / DROPPED LEADS
- **Alut (אלו"ט) – Israel National Autism Association**: real, well-documented 1974 parent-founded org (50+ years, 40,000 families served) per multiple third-party sources (JPost, UN ESANGO, Anglo-List), but its own site (`https://en.alut.org.il/`) returned `HTTP/1.1 403 Forbidden` on both curl and WebFetch — likely bot-blocking rather than the org not existing, but I could not independently confirm current liveness of the primary URL, so I'm flagging rather than including it as verified.
- **SESOBEL (Lebanon)**: real, active since 1976, official site `http://sesobel.org/` verified live (curl 200) with content current to 2025 (solar panel install, drama therapy). Care/education-focused (not self-advocate-led); dropped from the main 6 only to keep the list from being Lebanon-and-clinical-heavy, but it's a solid backup entry if a 7th is wanted.
- **Jordan**: no verifiable official website found for any candidate. "Jordanian Society for Autism" (Amman, founded 2005, per a civil-society directory) has no working site (attempted URL 404'd) — only a phone/email in a third-party directory. "Jasmine Association for Down Syndrome" (Down Syndrome International's Jordan contact) and "Autism Academy of Jordan" exist only as Facebook pages in the search results, not independently verified. I could not produce a solid Jordan entry.
- **UAE "People of Determination" neurodiversity employment programs**: this is a government policy framework/terminology (Federal Resolution 43/2018, National Policy for Empowering People of Determination), not a discrete community organization — not an entry candidate itself, though it's useful context for why UAE orgs use "People of Determination" language instead of "disability."
- **Mad Pride / Hearing Voices Turkey**: no organization found. A Turkish mental-health human-rights initiative, "RUSİHAK" (Ruh Sağlığında İnsan Hakları Girişimi), surfaced in search results as advocacy-oriented but wasn't independently fetched/verified before the search budget ran out — worth a follow-up look.
- **Hearing Voices Network Israel**: Wikipedia's HVN article lists Israel among countries with a national network, but no Israeli-specific site or contact was found in search results — could not verify.
- **DiVE (Israel)**: an autistic-led AI recruiting platform co-founded by an autistic former IDF officer (Udi Heller), mentioned in a NoCamels article — potentially the single closest true "autistic-led" organization found in this whole search, but I could not locate or verify an official site/URL for it.
- **Istanbul Association of Autistic Volunteers** (mentioned in a Borgen Magazine piece) — no official site found; unverified.
- **ARTXV**: a global neurodivergent-artist NFT collective, not Middle-East-specific — out of scope, dropped.

Note on the brief's premise: across all six countries, I found essentially no organizations that are explicitly self-advocate-led/by-and-for autistic or psychiatric-survivor people (the ASAN model) with a verifiable web presence — every solid, fetchable entry is ally-led (parent-founded, professional-run, or government-chartered). That absence is itself a finding worth flagging to whoever is assembling the atlas.