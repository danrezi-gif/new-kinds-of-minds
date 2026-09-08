## Research findings: neurodiversity/disability-community organizations in Africa

Web search budget for this session was exhausted partway through (200/200 WebSearch calls), so later verification relied on WebFetch + curl only. This capped how deep I could go on Egypt/Morocco — noted as unverified leads below rather than solid entries.

**6 verified entries across 5 countries: South Africa, Kenya (x2), Ghana, Nigeria, Uganda.**

---

### 1. Autism South Africa (A;SA)
- **Summary:** National non-profit providing information, guidance, training, and advocacy for autistic people and their families across South Africa; registered Public Benefit Organisation subscribing to the Independent Code of Governance for NPOs in SA.
- **Type:** advocacy / care
- **Focus areas:** autism, neurodiversity-general
- **Leadership:** unknown (site references a "Meet the Team" and National Executive Committee but does not state whether autistic people themselves lead it — do not guess)
- **Mode:** hybrid (national org with regional service providers in all 9 provinces)
- **City/Region:** Parkwood, Johannesburg (HQ)
- **Country:** South Africa
- **Founding year:** not stated on site
- **Languages:** English (site content)
- **Official URL:** https://www.aut2know.co.za/
- **Source URL:** same (official site)
- **curl status:** `HTTP/1.1 200 OK`

### 2. Autism Society of Kenya (ASK)
- **Summary:** Kenyan NGO that lobbies and advocates for individuals with autism, raises community awareness, and pushes government policy on autism spectrum disorder.
- **Type:** advocacy
- **Focus areas:** autism
- **Leadership:** unknown (not stated whether autistic-led, parent-led, or professional-led)
- **Mode:** physical (Nairobi-based)
- **City/Region:** Westlands, Nairobi
- **Country:** Kenya
- **Founding year:** reported as 2003 in secondary summaries; not independently confirmed on a primary-source page
- **Languages:** English
- **Official URL:** https://www.autismkenya.org/ — **currently returns HTTP 404** (site appears dead/misconfigured, Wix-hosted domain not resolving to live content)
- **Source URL used instead:** https://www.dtsk.or.ke/support-organizations/ (Developmental Therapy Services Kenya, a live, current third-party directory listing ASK with contact info: info@autismkenya.org, +254 721 544995) — also has an active Facebook page at facebook.com/autismkenya
- **curl status:** official URL = `404 Not Found`; DTSK third-party source = `200 OK`

### 3. Users and Survivors of Psychiatry in Kenya (USPKenya)
- **Summary:** Membership organization of people with psychosocial disabilities in Kenya, established 2007, advocating for their rights through policy engagement, rights-based advocacy, peer support ("Experts-by-Experience" groups), and public education; affiliated with the World Network of Users and Survivors of Psychiatry (WNUSP) and the Pan-African Network of People with Psychosocial Disabilities.
- **Type:** advocacy / community (psychiatric-survivor network)
- **Focus areas:** mad-pride, neurodiversity-general (psychosocial disability broadly, not diagnosis-specific)
- **Leadership:** **survivor-led** — explicitly a membership organization of "people affected by mental illnesses" themselves, with "self-help" and "peer support" listed among its specialties (this is a genuine users/survivors-of-psychiatry network, not a parent/professional charity)
- **Mode:** physical/hybrid — active in Nairobi, Kiambu, Nyeri, and Laikipia counties
- **City/Region:** Nairobi (HQ, P.O. Box 10071-00100)
- **Country:** Kenya
- **Founding year:** 2007
- **Languages:** English
- **Official URL:** http://www.uspkenya.com — **domain does not resolve** (curl: `Could not resolve host`, exit code 6)
- **Source URLs used instead:** LinkedIn company page (https://ke.linkedin.com/company/usp-kenya-users-&-survivors-of-psychiatry-kenya, `200 OK`) for org facts; Facebook group (https://www.facebook.com/groups/74022154222/) shows a recruitment post dated **November 4, 2025**, confirming the group is still active
- **curl status:** official domain dead; LinkedIn page = `200 OK`

### 4. Autism Awareness Care and Training Centre (AACT)
- **Summary:** Local support/education centre for autistic children in Accra, founded 1998 by Serwah Quaynor (nurse practitioner and parent of an autistic son); provides behavior management, functional academics, music/art therapy, speech and occupational therapy, and life-skills training via individualized education plans.
- **Type:** education / care
- **Focus areas:** autism
- **Leadership:** parent-led / professional-led (founder is both a parent of an autistic child and a trained nurse practitioner; current staff includes an Educational Director, Coordinator, Administrator — professionally run)
- **Mode:** physical
- **City/Region:** Haatso, Greater Accra
- **Country:** Ghana
- **Founding year:** 1998
- **Languages:** English
- **Official URL:** https://aactgh.org/ (about page: https://aactgh.org/about.html)
- **Source URL:** official site; corroborated by https://autismawarenesscentre.com/resources/autism-awareness-care-training-aact-ghana/
- **curl status:** `200 OK` (note: a short/default `curl -A` user-agent string returns `406 Not Acceptable` from this Apache server — must send a full browser-style UA to get `200`)

### 5. Patrick Speech and Languages Centre (PSLC)
- **Summary:** Nigeria's first dedicated autism centre (opened Sept 11, 2006, Lagos), founded by Dotun Akande after her own son's autism diagnosis; offers speech/language therapy, behaviour modification, sensory integration, occupational therapy, vocational training (Gazelle Studio), parent support, and a professional training academy. First IBCCES-certified autism centre in Nigeria; runs the Pure Souls Learning Foundation for scholarships.
- **Type:** education / care
- **Focus areas:** autism
- **Leadership:** parent-founded, professionally run (founder is a parent of an autistic child; operates as a professional therapy/education centre, not a self-advocate collective)
- **Mode:** physical (two centres)
- **City/Region:** Ikeja and Lekki, Lagos
- **Country:** Nigeria
- **Founding year:** 2006
- **Languages:** English
- **Official URL:** https://pslcautism-ng.org/
- **Source URL:** official site
- **curl status:** `200 OK`

### 6. Autism Awareness Uganda
- **Summary:** Community support-network organization in Kampala, described on its own site as "a collection of passionate individuals, parents, professionals and organisations" founded by Patricia in 2020; conducts caregiver/family training, awareness campaigns, and outreach counseling/referrals. Reports reaching 500+ parents/caregivers and running 10+ events since opening.
- **Type:** advocacy / community
- **Focus areas:** autism
- **Leadership:** mixed (explicitly states it's a mix of parents, professionals, and "passionate individuals," not exclusively self-advocate or parent-led)
- **Mode:** physical/hybrid
- **City/Region:** Kamwokya, Kampala
- **Country:** Uganda
- **Founding year:** 2020
- **Languages:** English
- **Official URL:** https://autismawarenessuganda.com/
- **Source URL:** official site
- **curl status:** `200 OK`

---

## Unverified leads (found, but could not confirm well enough to include)

- **MindFreedom Ghana** (Osu Accra, Kuku Hill) — a genuine psychiatric-survivor/user organization ("improving the mental health and lives of sufferers and survivors of psychiatry in Ghana and safeguarding their human rights"), self-identifies as user-driven. But it has no independent website; the only trace found was an Idealist.org listing dating from **November 2008** with no evidence of activity in the last ~2 years. Worth chasing separately (maybe via WNUSP/PANUSP network directories) but not solid enough to include as-is.
- **The Egyptian Advance Society for Persons with Autism and Other Disabilities (ADVANCE)**, Cairo — appears in a Devex organizations directory (founded 1997 as the Egyptian Society for Developing Skills of Children with Special Needs), but the Devex profile page returned `403 Forbidden` to WebFetch and I could not locate/verify an independent live website before the search budget ran out.
- **Collective Autism Morocco** (Rabat) and **Association des Parents et Amis d'Enfants Inadaptés** (Casablanca) — both surfaced in search with addresses/phone numbers from older aggregator listings (autismspeaks.org international directory), but no live site was checked and no recency evidence was gathered.
- **Nigerian Autistic Society** (Abuja, P.O. Box 7173 Wuse) — a longstanding parent/professional/student organization mentioned in multiple secondary sources, but I did not locate or verify an official, currently-live website.
- **Autism Society of Kenya's own domain** (autismkenya.org) is technically dead (404) even though the org itself is clearly still real and active via the DTSK third-party listing and Facebook presence — flagging this distinctly in case you want to record "org active, primary URL dead" as its own state in the database rather than dropping it.
- I did not get to Egypt/Morocco Mad Pride, Hearing Voices, or arts-collective candidates at all — ran out of search calls before starting that leg. Worth a dedicated follow-up pass focused specifically on those two countries and on psychiatric-survivor/arts-collective org types, which the session budget didn't allow this time.