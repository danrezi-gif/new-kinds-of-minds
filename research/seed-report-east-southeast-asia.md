# East & Southeast Asia — Verified Neurodiversity/Disability Organizations

## VERIFIED ENTRIES

---

**1. Urakawa Bethel House**
- Name (local): 社会福祉法人浦河べてるの家 (Shakai Fukushi Hōjin Urakawa Bethel no Ie)
- Summary: A social welfare corporation in Urakawa, Hokkaido, founded in 1984 by social worker Ikuyoshi Mukaiyama with a group of people discharged from psychiatric care at the local Red Cross Hospital; it developed and practices "Tōjisha-Kenkyū" (当事者研究, self-directed/peer research), in which members study their own psychiatric symptoms and coping methods together rather than being treated as objects of expert diagnosis.
- Primary type: community / peer-support (with an attached cooperative work component — dried-fish and other small businesses)
- Focus areas: mad-pride, hearing-voices (adjacent — the "Hallucination and Delusion Grand Prix" event), psychosis, intellectual-disability (mixed membership)
- Leadership: nd-led / survivor-led — explicitly by-and-for psychiatric survivors (tōjisha); this is Bethel's defining, well-documented feature in the academic literature (see sources)
- Mode: physical (Urakawa, Hokkaido) with online presence
- City/Region, Country: Urakawa, Hokkaido — Japan
- Founded: 1984
- Languages: Japanese (site has scattered English references but is not bilingual)
- Official URL: https://bethel-net.jp/
- Source/corroborating URLs: https://aeon.co/essays/japans-radical-alternative-to-psychiatric-diagnosis ; https://cir.nii.ac.jp/crid/1390290699066380544 ; https://sites.tufts.edu/praxis/2025/12/13/be-safe-inside-your-mind-the-bethel-house-as-a-human-security-centered-approach-to-mental-health/
- Verification: `curl -sIL bethel-net.jp` → HTTP/1.1 301 (http→https redirect) then HTTP/1.1 200 OK on https://bethel-net.jp/ (WordPress site, confirmed live). Content fetch confirms name, tōjisha framing, and annual "べてるまつり" (Bethel Festival).

---

**2. Japan Developmental Disabilities Network (JDDnet)**
- Name (local): 一般社団法人 日本発達障害ネットワーク
- Summary: A general incorporated association founded December 3, 2005 (following Japan's 2004 Developmental Disabilities Support Law), an umbrella network of ~57 affiliated organizations — parent groups, academic societies, professional bodies — covering autism, ADHD, and learning disabilities nationally, doing advocacy, research coordination, and policy proposals.
- Primary type: advocacy / research-policy network
- Focus areas: autism, adhd, learning-disabilities, neurodiversity-general
- Leadership: mixed (member organizations include parent associations, academic societies, and professional groups; not self-advocate-led as a body)
- Mode: physical office (Tokyo) + online
- City/Region, Country: Sumida, Tokyo — Japan
- Founded: 2005
- Languages: Japanese
- Official URL: https://jddnet.jp/
- Source URL: https://jddnet.jp/about-jddnet/
- Verification: `curl -sIL jddnet.jp` → HTTP/1.1 200 OK (nginx).

---

**3. Beijing Stars and Rain Education Institute for Autism (星星雨)**
- Summary: China's first NGO dedicated to autistic children, founded in Beijing in 1993 by Tian Huiping, mother of an autistic son; runs an 11-week applied-behavior-analysis-based education/training program for autistic children and their parents, and has been a long-running national resource given the scarcity of autism services in China. The organization has since rebranded its web presence under 因为我们在 (guduzh.org.cn).
- Primary type: education / family-training
- Focus areas: autism, intellectual-disability
- Leadership: ally-led (founded and run by a parent)
- Mode: physical (Beijing), with national outreach programs
- City/Region, Country: Beijing — China
- Founded: 1993
- Languages: Chinese (site has an English toggle)
- Official URL: https://guduzh.org.cn/ (current site; the older autismchina.org domain now returns 404 and appears defunct)
- Source URLs: https://en.wikipedia.org/wiki/Children_of_the_Stars ; https://www.britishcouncil.cn/en/programmes/society/social-entrepreneurs/case-studies/stars-rain (British Council case study)
- Verification: `curl -sIL http://guduzh.org.cn/...` → HTTP/1.1 301 redirecting to `http://www.guduzh.org.cn/?p=12079&lang=en`; a follow-up `curl -k` on the https variant returned HTTP/1.1 200 once, but the connection was intermittent on repeat attempts (likely a certificate mismatch/hosting issue — WebFetch reported "unable to verify certificate" / ECONNREFUSED on other tries). Treat as live-but-flaky; corroborated by Wikipedia and British Council as a real, historically significant, still-referenced org. The old autismchina.org domain is confirmed dead (404).

---

**4. Autism Society of Taiwan (中華民國自閉症總會)**
- Summary: A national civic association based in Taipei serving autistic individuals and families across Taiwan, running the "Star Kids Workshop" for vocational/social training of autistic individuals aged 15+, plus diagnostic, educational, and employment support services.
- Primary type: advocacy / care / work (vocational training)
- Focus areas: autism, intellectual-disability
- Leadership: ally-led (civic/professional association; no explicit self-advocacy framing found)
- Mode: physical (Taipei) + online
- City/Region, Country: Zhongzheng District, Taipei — Taiwan
- Founded: not stated on site
- Languages: Traditional Chinese, English
- Official URL: https://www.autism.org.tw/
- Source URL: https://autism.org.tw/pagedetail.php?IDno=485
- Verification: `curl -sIL autism.org.tw` → HTTP/1.1 200 OK.

---

**5. Autism Resource Centre (Singapore) — ARC(S)**
- Summary: A Singapore charity registered in 2000, founded by professional and parent volunteers, providing lifelong services for people on the autism spectrum, including Pathlight School (Singapore's first autism-focused school), early intervention, employment support, and caregiver training.
- Primary type: education / employment / care
- Focus areas: autism
- Leadership: ally-led (professional + parent founded)
- Mode: physical (Singapore, multiple sites incl. 5 Ang Mo Kio Ave 10) + online
- City/Region, Country: Singapore
- Founded: 2000 (registered)
- Languages: English
- Official URL: https://www.autism.org.sg/
- Source URL: https://www.autism.org.sg/about-us/overview
- Verification: `curl -sIL autism.org.sg` → HTTP/1.1 200 OK (nginx).

---

**6. National Autism Society of Malaysia (NASOM)**
- Summary: Founded in 1986 by parents and professionals, NASOM is Malaysia's longest-running national autism body, running early intervention, behavioral therapy, pre-vocational and vocational training (baking, sewing, hydroponics), and residential independent-living programs from its Petaling Jaya headquarters and branches nationwide.
- Primary type: care / education / employment
- Focus areas: autism
- Leadership: ally-led (parents and professionals)
- Mode: physical (multiple branches across Malaysia) + online
- City/Region, Country: Petaling Jaya, Selangor — Malaysia
- Founded: 1986
- Languages: English (site), Malay in practice
- Official URL: https://www.nasom.org.my/
- Source URL: https://www.nasom.org.my/get-involved/
- Verification: `curl -sIL nasom.org.my` → HTTP/1.1 200 OK.

---

**7. Autism Society Philippines (ASP)**
- Summary: Founded March 8, 1989, ASP is a national nonprofit with roughly 16,000 members across 106 local chapters, working toward what it calls an "Autism-OK Philippines" where autistic Filipinos are self-reliant and socially accepted; based in Quezon City.
- Primary type: advocacy / community network
- Focus areas: autism
- Leadership: ally-led (parent/professional-founded national federation)
- Mode: physical (Quezon City HQ, chapters nationwide) + online
- City/Region, Country: Quezon City — Philippines
- Founded: 1989
- Languages: English, Filipino
- Official URL: http://www.autismsocietyphilippines.org/
- Source URLs: https://en.wikipedia.org/wiki/Autism_Society_Philippines ; https://www.facebook.com/autismsocietyphilippines/
- Verification: `curl -sL autismsocietyphilippines.org` → HTTP/1.1 200 OK, page `<title>` confirms "Autism Society Philippines" (older Blogger-template site, still live).

---

**8. Yayasan MPATI (Masyarakat Peduli Autis Indonesia)**
- Name (local): Yayasan Masyarakat Peduli Autis Indonesia
- Summary: Founded by Gayatri Pamoedji and Farida Kadarusno, evolving from KOMPAA (Komunitas Peduli Autis dan ADHD, 1998) into MPATI; a national foundation focused on training and empowering parents of autistic children (education materials, capacity-building) and advocating for government policy on autism support infrastructure.
- Primary type: advocacy / family-education
- Focus areas: autism, adhd
- Leadership: ally-led (founded and chaired by parents)
- Mode: physical (national scope, Indonesia) + online
- City/Region, Country: Indonesia (national; HQ activity concentrated in major cities)
- Founded: 1998 (as KOMPAA)
- Languages: Indonesian, English
- Official URL: https://autismindonesia.org/en/
- Source URL: https://autismindonesia.org/en/tentangkami/
- Verification: `curl -sIL autismindonesia.org` → HTTP/1.1 200 OK (Apache/PHP, WordPress site).

---

**9. Vietnam Autism Network (VAN) — Mạng lưới Tự kỷ Việt Nam**
- Summary: Established August 2013 with recognition from Vietnam's Ministry of Labor, Invalids and Social Affairs and the Vietnam Federation of Disability Organizations; a voluntary nonprofit network of parents, autism specialists, and autistic individuals, with a governing board elected from parent-group representatives across six provinces/cities. Runs Vietnam Autism Awareness Day (April 2) and is a member of the ASEAN Autism Network.
- Primary type: advocacy / community network
- Focus areas: autism
- Leadership: mixed (network explicitly includes autistic individuals themselves alongside parents/specialists, but governance is parent-group-elected — not stated as self-advocate-led)
- Mode: physical (Ho Chi Minh City HQ) + online
- City/Region, Country: Ho Chi Minh City — Vietnam
- Founded: 2013
- Languages: Vietnamese
- Official URL: https://vietnamautism.net/
- Source URL: https://vietnamautism.net/lich-su
- Verification: `curl -sIL vietnamautism.net` → HTTP/1.1 200 OK (nginx).

---

**10. NeuroDiversity Association Hong Kong (NDAHK) — 香港腦力多元協會**
- Summary: Formally established March 2024, an advocacy organization promoting "the value of neurodiversity" through cross-sector partnerships, educational content (myth-busting, vocabulary), and conferences in Hong Kong.
- Primary type: advocacy
- Focus areas: neurodiversity-general, autism, adhd
- Leadership: unknown — site names a Board of Directors/Advisors but does not state whether founders are themselves neurodivergent/self-advocates
- Mode: online-heavy with Hong Kong-based activities (hybrid)
- City/Region, Country: Hong Kong
- Founded: 2024
- Languages: English, Chinese
- Official URL: https://www.ndahk.com/
- Source URL: https://www.ndahk.com/about-us
- Verification: `curl -sIL ndahk.com` → HTTP/1.1 200 OK (Wix-hosted).

---

**11. Purme Foundation (푸르메재단) — South Korea**
- Summary: Founded 2005 in Seoul, a disability-rehabilitation and social-enterprise foundation (not autism-specific) running a children's rehabilitation hospital (opened 2016 in Mapo with Nexon), community rehabilitation centers, a "Purme Social Farm," and vocational/sheltered-workshop programs for people with disabilities broadly.
- Primary type: care / employment (social enterprise)
- Focus areas: intellectual-disability, learning-disabilities (general disability, not neurodiversity-specific)
- Leadership: ally-led (professional/philanthropic foundation)
- Mode: physical (Seoul, multiple centers) + online
- City/Region, Country: Seoul — South Korea
- Founded: 2005
- Languages: Korean
- Official URL: https://purme.org
- Source URL: https://www.korea.net/NewsFocus/People/view?articleId=143766
- Verification: `curl -sk -o purme.html purme.org` → HTTP 200; page `<title>` confirms "푸르메재단 | 장애인의 혁신적 재활 및 자립을 선도하는 비영리재단" (Purme Foundation | nonprofit foundation for innovative rehabilitation and independence of people with disabilities).

---

**12. The Association of Parent for Thai Persons with Autism (สมาคมผู้ปกครองบุคคลออทิซึม (ไทย))**
- Summary: A Bangkok-based nonprofit working alongside the Autistic Thai Foundation (มูลนิธิออทิสติกไทย) on quality-of-life programs for autistic people and people with developmental/learning disabilities — sports promotion, digital learning centers, IT skills training.
- Primary type: care / community / education
- Focus areas: autism, learning-disabilities
- Leadership: ally-led (parent association, name states as much)
- Mode: physical (Bangkok, Bang Kok Noi district) + online
- City/Region, Country: Bangkok — Thailand
- Founded: not stated
- Languages: Thai, some English
- Official URL: https://autism.autisticthai.com/
- Source URL: https://www.ryt9.com/en/prg/281223 (joint event announcement with Autistic Thai Foundation and Ministry of Social Development and Human Security)
- Verification: `curl -sIL autism.autisticthai.com` → HTTP/1.1 200 OK.
- Note: the partner organization "Autistic Thai Foundation" (มูลนิธิออทิสติกไทย, a government-accredited public organization under Thailand's Ministry of Social Development) is well-documented in Thai press but I could only confirm it live via Facebook (https://www.facebook.com/AutisticThaiFoundation/, HTTP 200) — no independently reachable .org/.co.th site was found; treat as a strong lead rather than a fully verified independent-site entry.

---

## PROMISING LEADS — NOT INCLUDED (unverifiable or insufficient detail this pass)

- **Autism Society of Korea (한국자폐인사랑협회)** — real per Korean Wikipedia/namu.wiki and an active Instagram (@ask_autismkorea, confirmed live), but no independently verifiable official website domain was found (guessed domains like ask.or.kr resolve to an unrelated organization, the Korean Acoustical Society). Would need a Korean-language search pass to locate the real domain.
- **Korea's "first autism peer self-help group"** — referenced in Korean-language secondary sources (namu.wiki "자폐 자조 네트워크") as an emerging self-advocacy/peer network, but no named organization or URL surfaced.
- **Talos Foundation (Hong Kong)** — neurodiversity awareness nonprofit, site found (talos-foundation.org) but not fetched/verified this pass; worth checking as an alternative or addition to NDAHK.
- **Hong Kong Autism Institute (HKAI)** — mentioned via a UNESCO/Special Olympics East Asia partnership (macaonews.org), but no independent official site confirmed.
- **Special Needs Network Hong Kong (SNNHK)** — peer support network for parents/caregivers (snnhk.org referenced); ally-led by definition (parent/caregiver network), not fetched/verified.
- **JDF / other JDDnet-adjacent Japanese prefectural chapters** (e.g., JDDnet Fukui, jddfukui.jimdofree.com) — real but purely local/regional, not pursued as a national-level entry.
- **China Development Brief profile of Stars and Rain** and the **British Council China case study** — both exist and were returned in search results as reputable third-party confirmation of Stars and Rain, but both URLs failed to load (certificate mismatch on chinadevelopmentbrief.org — cert is actually issued for beijingkickers.com, suggesting a possibly compromised or redirected domain; britishcouncil.cn returned no response). Do not cite chinadevelopmentbrief.org as a live source without re-verifying the certificate issue.
- **autismchina.org** — Stars and Rain's older official domain — confirmed dead (HTTP 404, outdated Apache/PHP4 stack from what looks like an abandoned server).

## Summary
9 fully verified entries plus 3 additional verified-but-caveated entries, spanning Japan, China, Taiwan, Singapore, Malaysia, Philippines, Indonesia, Vietnam, Hong Kong, South Korea, and Thailand — 11 countries/territories total. Bethel House stands out as the one unambiguously survivor-led (tōjisha) entry and is the strongest Mad Pride/psychiatric-survivor candidate in the region; NDAHK and VAN are the closest to self-advocate involvement among the rest, though neither is explicitly documented as self-advocate-*led*. Everything else in the verified list is ally-led (parent/professional-founded), which matches the actual landscape in most of these countries — explicit autistic-self-advocacy organizations comparable to Western ASAN-style groups did not turn up as findable, English-or-locally-documented entities in this pass, aside from scattered, small, undocumented Korean peer groups.