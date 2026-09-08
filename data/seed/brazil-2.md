# Brazil deep dive (second pass) — report

**40 entries** across **20 states**: São Paulo, Alagoas, Santa Catarina, Mato Grosso do Sul, Paraná,
Ceará, Rio de Janeiro, Paraíba, Distrito Federal, Minas Gerais, Bahia, Espírito Santo, Pará, Sergipe,
Pernambuco, Rio Grande do Norte, Mato Grosso, Tocantins, Acre, Amazonas.

No URL domain overlaps with the 15 Brazilian entries already in `data/initiatives.json` (the AMA
network, ABDA, ABRAÇA, MOAB, ABD, Instituto ABCD, Introvertendo, Mad in Brasil, MNLA, RIOSTOC,
Specialisterne Brasil, UFSC project, USP Ribeirão Preto Hearing Voices, Festival Acessa BH, CAUSP,
Coletivo UFRGS). One entry (`instituto-rodrigo-mendes`) was dropped after `build-dataset.mjs` flagged
it as a duplicate against `research-work-education.json`, which another agent was writing concurrently.
Cia. Teatral Ueinzz was deliberately left out since `arts-worldwide.json` already covers it.

The biggest single yield was the AMA (Associação de Amigos do Autista) network: the original
1983 São Paulo association's own institution directory, cross-checked against a second parent-run
directory (autismoemdia.com.br/parceiros.html), surfaced live sites for AMA-branded associations in
Alagoas, Florianópolis, Sorocaba, Ribeirão Preto, Campo Grande, Itu, Joinville, Itajaí, Curitiba
(AAMPARA), São Paulo (AUMA) and Vitória (AMAES) — eleven working, independently verified sites in
total. A second large yield came from guessing the FEAPAES (state APAE federation) domain pattern
after finding the national Federação Nacional das APAEs: five state federations resolved live
(Pernambuco, Rio Grande do Norte, Mato Grosso, Tocantins, Acre), each confirmed by page title and
content, which is what pushed state coverage past the 18-state target. Autistic-led entries include
three university collectives (UFPB, UFPR/Stim, Vitória da Conquista) plus UFU's and UnB's, mad-culture
entries include the Museu de Imagens do Inconsciente and Bloco Loucura Suburbana (both Nise da Silveira
legacy institutions in Rio), and OCD/Tourette coverage includes ASTOC and the hospital-based PROTOC
research programme.

**Unsure about:**
- `instituto-lagarta-vira-pupa` — no single confirmed headquarters city; site references São Paulo,
  Bauru and Campinas, so the São Paulo coordinate is an approximation for what is really a national
  online network.
- `canal-autismo-revista-autismo` — the live site returns HTTP 403 to bare automated requests (bot
  filtering); existence and currency were confirmed via search-engine indexing and Wikipedia's
  `Revista_Autismo` article instead.
- `ama-manaus` and `coletivo-tea-ufu` — no independent websites, only Instagram; verified instead via
  a Manaus municipal-government news article and a UFU university news article respectively.
- `feapaes-mt` and `apae-aracaju` — marked leadership "mixed" rather than "ally-led" because their own
  sites explicitly describe self-advocacy/self-management (autogestão/autodefensoria) programmes, even
  though the federations themselves are professional/family-run.

**Leads found but not verified in time** (WebSearch quota was exhausted partway through this pass,
and DuckDuckGo/Bing blocked automated fetches with CAPTCHAs, which limited follow-up):
- ANIA/BR (Associação Nacional para Inclusão das Pessoas Autistas, founded ~2022) — no working
  domain found.
- Autistas Alvinegros, an autism-focused Corinthians supporters' group — no independent URL located.
- Coletivo Autista da Unicamp, UFRJ and Unesp — all reported to exist by secondary sources but no
  Instagram handle or site could be confirmed without search access.
- Auticon Brasil (auticon.com.br) — domain resolves but only shows a "coming soon" placeholder, so
  excluded as likely not yet live.
- Autism/neurodiversity work specific to quilombola or Indigenous communities — searched via UFPA and
  Jornal da USP but found nothing citable; this remains a real gap in the file.
