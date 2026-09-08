# Fundación Ama Amoedo — Becas 2026 — "Arte y Compromiso Social" category

Research compiled 2026-09-08. Deadline for this call: **Wednesday 9 September 2026, 23:59 hs (Uruguay)** — i.e. the day after this report was compiled.

## Methodology and source status (read this first)

- The foundation's official site, `https://www.fundacionamaamoedo.org`, is a Next.js single-page app. Its HTML ships empty (`<main class="pt-32 px-6 bg-[#F1F3F4] min-h-screen"></main>`) — all page content, including `/programas/becas` and `/programas/becas/faqs`, is fetched client-side by JavaScript after load. `curl` and the WebFetch tool both retrieve only the empty shell. No embedded JSON/RSC payload with the actual copy could be found in the served HTML (checked via `self.__next_f.push` flight data — it contains only font/script manifests, not page copy). **The FAQ page's actual Q&A content could not be retrieved by any means available in this session** (no headless-browser tool was available; the Playwright MCP server failed to connect).
- The authoritative source that WAS retrieved directly is the official PDF **"Becas Fundación Ama Amoedo — Bases y Condiciones 2026"**, linked from the Becas page and reproduced by the secondary outlet hipermedula.org. It was downloaded from Google Drive (`https://drive.google.com/file/d/1uSJGbuSd5EonyNgt1Jx2Pgr9glbR0iCI/view?usp=drive_link`) and text-extracted with `pdftotext`. This is the single most reliable document in this report and is cited throughout as **[PDF-2026]**. A local copy sits at `C:\Users\danre\OneDrive\Desktop\AI\new-kinds-of-minds\research\bases-condiciones.pdf` (raw) and `...\bases-condiciones.txt` (extracted text).
- The application portal is **`https://opencallfundacionamaamoedo.vform.io/`** — a third-party form platform (vform.io). It sits behind a **login/registration wall** (Google, Facebook, or email+password with a verification code). No application-form fields, character limits, or per-question text are visible without an account; only the login screen is public. This is flagged wherever the report cannot go further.
- Secondary sources consulted and quoted below: hipermedula.org (which reproduces the bases y condiciones in full and hosts jury bios), Bogotá's official international-opportunities bulletin, Arte al Día, ArteInformado, Acromática Revista, Difusión con Causa, Recursos Culturales, Arte-Online. All URLs are given per quote.
- WebSearch quota was exhausted mid-task (session-wide cap), so from that point on research relied on WebFetch, direct `curl`, and the Wayback Machine CDX API rather than fresh search queries. This mainly limited the search for 2024/2025 grantee names (see §9).

---

## 1. Eligibility

**General rule (all categories), verbatim from the official PDF:**

> "1. CONDICIONES GENERALES Los proyectos presentados deberán poseer una conexión significativa con América Latina, sea por nacionalidad, herencia cultural y/o sitio donde se realizará el proyecto presentado en la aplicación. Solo se permite aplicar a una categoría de Beca. Cada categoría dispone de condiciones específicas para su aplicación. En todos los casos, sin excepciones, quienes apliquen deberán ser mayores de 18 años. En las categorías donde se aplique a la Beca como colectivo, institución, asociación, fundación, deberá ser designada una persona como titular/responsable legal del proyecto, sea persona física o persona jurídica representada por su autoridad legal."
> — [PDF-2026], p.2

> "Cada proyecto deberá tener un único titular, quien llevará a cabo la aplicación y será el punto de referencia en caso de necesidad de contacto por parte del Jurado o la Fundación Ama Amoedo. Asimismo, será la persona responsable de la realización del proyecto y firma de contrato con la Fundación. Para la otorgación de la Beca, será requisito excluyente poseer cuenta bancaria a nombre del/la titular de la aplicación."
> — [PDF-2026], p.2

**Category-specific eligibility, "Arte y Compromiso Social":**

> "Arte y Compromiso social Las Becas Fundación Ama Amoedo de Arte y Compromiso Social están destinadas a apoyar iniciativas específicas que, a través de las artes, contribuyan a generar un impacto positivo en la sociedad. Esta categoría está abierta a artistas, colectivos, individuos, fundaciones y organizaciones sin fines de lucro cuyos proyectos promuevan la educación, la inclusión social y la construcción de comunidad a través de prácticas artísticas y enfoques colaborativos. Se otorgarán 2 becas de US$10.000 dólares con el objetivo de acompañar prácticas sociales y colaborativas."
> — [PDF-2026], p.1
> Source: https://drive.google.com/file/d/1uSJGbuSd5EonyNgt1Jx2Pgr9glbR0iCI/view (official PDF)

**Restrictions (exclusions), verbatim:**

> "2. RESTRICCIONES La Fundación no aceptará solicitudes de instituciones, organizaciones o proyectos con fines comerciales. No se examinarán propuestas por fuera de los períodos estipulados de convocatoria. Quienes apliquen como individuos, deberán ser mayores de 18 años. No se concederán becas para fines personales, como el pago de deudas o gastos legales, como así tampoco para eventos de recaudación de fondos.
> No podrán aplicar artistas, instituciones u organizaciones que hayan recibido otro apoyo de la Fundación Ama Amoedo en el plazo de 12 meses antes de la apertura de la convocatoria. Asimismo, no podrán postularse quienes tengan relacionales funcionales, comerciales, contractuales, de carácter laboral con la Fundación Ama Amoedo o presten servicios a la misma; quienes posean vínculos de parentesco por consanguinidad o afinidad hasta el segundo grado con la Sra. Amalia Amoedo y/o personas vinculadas o involucradas en la gestión y evaluación de la convocatoria. No podrán presentar proyectos organismos, ni instituciones estatales."
> — [PDF-2026], p.2

**Direct answers to the sub-questions asked:**

- **Individuals, groups, or organizations?** All three are explicitly eligible in this category: "artistas, colectivos, individuos, fundaciones y organizaciones sin fines de lucro" [PDF-2026, p.1].
- **Latin American connection requirement:** connection can be satisfied by *any one* of three routes — nationality, cultural heritage, OR the site where the project will take place ("sea por nacionalidad, herencia cultural y/o sitio donde se realizará el proyecto") [PDF-2026, p.2]. This means an applicant physically resident outside Latin America, and even outside Uruguay specifically, can qualify if their nationality or cultural heritage is Latin American, or if the project itself will be carried out in Latin America.
- **Age:** 18+, no exceptions, stated twice (§1 and §2 of the PDF).
- **Applicants outside Uruguay:** Nothing in the bases restricts applicants to Uruguay — Uruguay is only the seat of the Foundation and the timezone used for the deadline. The "conexión significativa con América Latina" test is regional (Latin America), not national (Uruguay).
- **Can an individual apply without a legal entity?** Yes. The PDF's language for the titular/responsible party is "sea persona física o persona jurídica representada por su autoridad legal" — a natural person (persona física) applying alone is explicitly one of the two valid forms; a legal entity is only required/relevant when the applicant is a collective, institution, association, or foundation, and even then the requirement is a *designated individual* as titular, not necessarily formal incorporation (see §7d below: "Registro de certificación notarial y/o inscripción legal de la entidad (**requisito no excluyente**)" — notarized/legal registration is explicitly NOT a hard requirement, only submitted "únicamente en casos que la institución o entidad posea" one).

Secondary-source confirmation (English paraphrase, Bogotá's official bulletin):

> "Applicants must possess 'a significant connection with Latin America, whether by nationality, cultural heritage and/or where the project will be carried out.' The program welcomes artists, artistic collectives, art professionals, nonprofits, institutions, and foundations."
> Source: https://bogota.gov.co/boletin-oferta-internacional/becas-fundacion-ama-amoedo-2026-para-artistas-latinoamericanos

---

## 2. Award amount, number of grants, disbursement, period, reporting

**Amount and count (this category):**

> "Se otorgarán 2 becas de US$10.000 dólares con el objetivo de acompañar prácticas sociales y colaborativas."
> — [PDF-2026], p.1

Across the whole call: 10 grants of US$10,000 total, split 4 (Artistas) / 2 (Arte y Compromiso Social) / 2 (Organizaciones) / 2 (Publicaciones):

> "Por cuarto año consecutivo, Fundación Ama Amoedo otorgará 10 becas destinadas a diversos agentes del campo artístico latinoamericano. Las becas tienen como objetivo brindar recursos y oportunidades para el fortalecimiento del ecosistema del arte y sus instituciones. Se ofrecen en cuatro categorías: Artistas, Arte y Compromiso social, Organizaciones y Publicaciones."
> — [PDF-2026], p.1

**Award/project period — explicit start date, verbatim:**

> "El anuncio se realizará el 20 noviembre, y el plazo de concreción y realización del proyecto comenzará a partir de enero 2027."
> — [PDF-2026], p.1

No explicit end date/duration is given for Arte y Compromiso Social specifically (unlike Publicaciones, which is capped at "un plazo máximo de realización de 2 años a partir de la recepción de la beca"). The bases do not state a fixed end date or duration ceiling for this category — **flagged as not specified** in the source document.

**Disbursement mechanism, verbatim:**

> "3. COMPROMISOS. Quienes reciban la Beca deberán firmar un acuerdo con la Fundación Ama Amoedo antes de que se abone la misma. Las Becas se otorgarán de forma directa, indivisible e intransferible. Las mismas se abonarán mediante transferencia bancaria a una cuenta de titularidad del becario/a/x."
> — [PDF-2026], p.2

So: single lump-sum bank transfer, not staged/tranched disbursement per the bases text — no mention of an installment schedule.

**Reporting obligations, verbatim:**

> "La Fundación podrá, durante los 12 meses desde la otorgación de la Beca, solicitar información sobre el proceso y desarrollo del proyecto. Quienes reciban la Beca se comprometen a enviar a la Fundación Ama Amoedo informes en los que se especifiquen los usos de la misma. El incumplimiento de cualquiera de las normas establecidas permitirá a la Fundación actuar como lo estime conveniente."
> — [PDF-2026], p.2

The Foundation also reserves broad unilateral discretion:

> "La Fundación Ama Amoedo podrá a su exclusivo criterio modificar las bases y condiciones de la presente convocatoria o dejar sin efecto el programa de Becas, en formato total o parcial, como así también no asignar las Becas que se ofrecen."
> — [PDF-2026], p.2

---

## 3. Application form fields

**This could NOT be fully transcribed** — the live form lives at `https://opencallfundacionamaamoedo.vform.io/` and requires creating an account (Google, Facebook, or email + password + email verification code) before any application questions are shown. Only the login/registration screen is public. Fields visible on that public screen, in order:

1. Correo (email) — text input
2. Contraseña (password) — password input, with visibility toggle
3. Código de verificación (verification code) — text input
4. Checkbox: agreement to Privacy Policy
5. Checkbox: agreement to Terms of Service
6. Links: "Olvidé mi contraseña" (forgot password), "Reenviar correo de confirmación" (resend confirmation email), "Desbloquear mi cuenta" (unlock account), "Regístrate" (register)

Beyond the login wall, no question text, character/word limits, or field-by-field order could be retrieved. Source: https://opencallfundacionamaamoedo.vform.io/

**What the bases y condiciones DO specify** about form structure — this is the closest thing to an official field list, organized as four blocks, quoted in full:

> "7. DOCUMENTACIÓN El Formulario de aplicación requiere completar:
> a) Información personal b) Información del proyecto c) Presupuesto d) Adjuntos
> a) Información personal Se debe proveer información de quien aplica e información de contacto. Se debe adjuntar copia de documento de identidad o pasaporte de la persona física o representante (del colectivo o la organización) a cargo de la aplicación.
> b) Información del proyecto Debe incluir una descripción del proyecto para el cual se solicita la Beca, junto con sus objetivos, plan de implementación y una justificación que explique el interés en participar.
> c) Presupuesto Debe incluir una explicación sobre el destino de los fondos y el uso del monto solicitado. Asimismo, se requiere adjuntar un presupuesto estimado con el desglose de gastos por categoría, en formato Excel o PDF."
> — [PDF-2026], p.3

No character or word limits are stated anywhere in the PDF for any of these free-text sections (project description, objectives, implementation plan, justification, budget explanation). **Flagged as not published** in any source found. Given that Arte al Día's summary and the FAQ page (inaccessible) are the only other places such limits might live, and the FAQ could not be retrieved, this is a genuine gap — recommend contacting `info@fundacionamaamoedo.org` directly to confirm, or creating a vform.io account to view the live form before the 9 September 23:59 (Uruguay) deadline.

---

## 4. Required attachments

Verbatim, section (d) of the bases y condiciones, which is the fullest official statement of attachments:

> "d) Adjuntos - CV
> El CV debe detallar formación y proyectos de la persona, colectivo u organización. - Portfolio o referencia de trabajos anteriores
> En caso de aplicar a la Beca para Artistas, adjuntar portfolio artístico. Para las otras categorías, adjuntar un PDF con referencias de proyectos o trabajos anteriores (máximo 20 imágenes con epígrafes). Se puede incluir una breve descripción de cada una (optativo). En el caso de vídeos o películas, facilite enlaces dentro del portfolio.
> - Anexo del proyecto (optativo) En caso que hubiera, se puede adjuntar un PDF con imágenes o material adicional que considere relevante, por ejemplo, bocetos, referencias, documentación o información asociada, carta de institución asociada al proyecto, entre otros.
> - Registro de certificación notarial y/o inscripción legal de la entidad (requisito no excluyente)
> Únicamente en casos que la institución o entidad posea certificado notarial y/o inscripción legal."
> — [PDF-2026], p.3-4

Applied to **Arte y Compromiso Social** specifically (this is one of "las otras categorías," i.e. not Artistas):

- **CV**: no page/word limit stated; must cover "formación y proyectos de la persona, colectivo u organización."
- **Previous-work reference PDF**: **maximum 20 images with captions** ("máximo 20 imágenes con epígrafes"); a short description per image is optional; video/film links can be embedded inside the PDF portfolio rather than uploaded as files.
- **Budget**: "Excel or PDF" format, itemized by expense category ("desglose de gastos por categoría"). No template file is linked in the bases; no explicit currency instruction beyond the award itself being in US dollars.
- **ID document**: a copy of the passport or national ID of the individual applicant, or of the legal representative if applying as a collective/organization.
- **Project annex**: optional, PDF, for sketches, references, documentation, or a letter from a partner institution.
- **Legal/notarial registration**: only if the entity already has one — explicitly **not a hard requirement** ("requisito no excluyente").

No mention anywhere of letters of recommendation/reference from third parties (distinct from the applicant's own "referencias de trabajos anteriores," which is a portfolio of the applicant's own past work, not third-party endorsement letters) — **flagged: not required per the bases**, contrary to what a generic grant application might assume.

---

## 5. Eligible / ineligible expenses

The bases y condiciones are notably thin on budget-line detail; they state what the money is generally for (via the category description) and what it explicitly may NOT fund, but do **not** give an itemized eligible/ineligible expense list (no explicit ruling on artist fees/honoraria, equipment purchase, hosting costs, or administrative/contingency lines).

**What IS stated, verbatim (ineligible uses):**

> "No se concederán becas para fines personales, como el pago de deudas o gastos legales, como así tampoco para eventos de recaudación de fondos."
> — [PDF-2026], p.2 (§2 Restricciones)

Also excluded as *applicant types* (not expense categories, but functionally limits what the money can go to): commercial-purpose institutions/organizations/projects, state bodies/institutions, and anyone with an employment, contractual, commercial or family relationship (up to 2nd degree of consanguinity/affinity) with the Foundation or with Amalia Amoedo.

**What is NOT addressed anywhere found:**

- Whether the applicant's own fee/honorarium is an eligible budget line — **not specified**.
- Whether equipment purchases are eligible or must be justified as project-specific — **not specified**.
- Whether "hosting" (venue rental, workshop space, online platform costs) counts as an eligible expense — **not specified**.
- Whether administrative overhead or a contingency line is allowed, and if so at what percentage cap — **not specified**.

This is exactly the kind of granular budget guidance that would normally live in a FAQ; the Foundation's FAQ page (`https://www.fundacionamaamoedo.org/programas/becas/faqs`, linked from hipermedula.org) exists but is fully client-rendered JavaScript and could not be retrieved by any tool available in this session (see Methodology above). **This is the most consequential gap in this report** — recommend either querying `info@fundacionamaamoedo.org` directly, or loading the FAQ page in an actual browser before finalizing a budget.

---

## 6. Evaluation criteria and jury

**Jury structure, verbatim:**

> "4. JURADO La evaluación de propuestas se realizará mediante un Jurado externo a la Fundación y un miembro representante de la Fundación Ama Amoedo. Para la edición 2026, el jurado está integrado por: Igor Simões (Curador independiente), Jovanna Venegas (Curadora, Sculpture Center, Nueva York.), Maria Wills Londoño (Curadora e investigadora) y Laura Hakel (Curadora de Colección y Proyectos Artísticos, Fundación Ama Amoedo). El Jurado de las Becas Fundación Ama Amoedo tendrá autonomía de decisión y voto. La decisión sobre la elección de proyectos será inapelable. En caso se considere necesario, los jurados podrán solicitar información adicional sobre las propuestas o entrevistas. El Jurado contará con apoyo técnico, conformado por personas idóneas en el campo de la gestión cultural, pudiendo estar compuesto por integrantes de la Fundación Ama Amoedo. El apoyo técnico no tendrá voto alguno. Su objetivo será únicamente certificar el cumplimiento de los requisitos de cada aplicación presentada."
> — [PDF-2026], p.2

Jury decisions are final ("inapelable" — not subject to appeal). The jury may request additional information or interviews.

**Jury bios (2026 edition), verbatim, from hipermedula.org's reproduction of the call:**

> "Igor Simões es un curador y profesor brasileño cuyo trabajo se centra en el arte moderno y contemporáneo, con una serie de trabajos basados en las historias artísticas e intelectuales de la diáspora africana en las Américas, con especial atención al concepto de Amefricanidad. En 2023 fue curador general de Dos Brasis: Arte e Pensamento Negro (São Paulo, Brasil)... En 2024, co-curó junto a Andrea Giunta la exhibición Rosana Paulino: Atlántica y Amefricana en el Museo de Arte Latinoamericano de Buenos Aires MALBA (Argentina)."
>
> "Jovanna Venegas es curadora en SculptureCenter, Nueva York. Entre sus exposiciones recientes se incluyen Pat Oleszko: Fool Disclosure (con Sohrab Mohebbi)... De 2017 a 2023, trabajó en el Museo de Arte Moderno de San Francisco, donde culminó su período como curadora asociada de arte contemporáneo... se desempeñó como asesora curatorial para la Whitney Biennial 2022 en la región de la frontera entre Estados Unidos y México."
>
> "María Wills Londoño es curadora e historiadora del arte. Sus principales proyectos abordan la inestabilidad de la imagen contemporánea frente a los nuevos medios y la revisión de relatos históricos oficiales en el arte. Entre sus proyectos recientes se encuentran la cocuraduría de la Bienal de Bogotá Ensayos sobre la felicidad y la muestra Sembrar la duda o Wametise: propuestas para un amazofuturismo en ARCO 2025... Su ensayo El centenario de la Bauhaus: de conveniencias y conexiones ganó el Premio Simón Bolívar de Periodismo en 2019."
>
> "Laura Hakel es Curadora de la Colección y Proyectos Artísticos de Fundación Ama Amoedo. En los últimos años se desempeñó en los cargos de Curatorial Fellow en el New Museum de Nueva York (2023-2024) y Curadora en el Museo de Arte Moderno de Buenos Aires (2015-2020)... Es Licenciada en Artes por la Universidad de Buenos Aires y posee un Máster en Estudios Curatoriales por el Center for Curatorial Studies, de Bard College, Nueva York."
> Source: https://hipermedula.org/2026/07/becas-fundacion-ama-amoedo-2/

**Evaluation criteria, verbatim:**

> "5. CRITERIO Se tomará en cuenta la correlación con los objetivos del llamado vinculados a cada categoría, su aporte al desarrollo artístico y que su realización demuestre ser factible. Se evaluarán únicamente propuestas que no atenten contra los derechos humanos ni posean sesgos discriminatorios."
> — [PDF-2026], p.2

In plain terms: fit with the category's stated objectives (for this category: education, social inclusion, community-building through collaborative artistic practice), contribution to artistic development, and feasibility — plus a hard exclusionary filter against proposals violating human rights or carrying discriminatory bias.

---

## 7. Language of application

Verbatim:

> "6. MÉTODO DE APLICACIÓN La aplicación se realiza de manera online, completando el Formulario de aplicación. Puedes acceder desde el sitio web de Fundación Ama Amoedo o directamente desde el siguiente link. Se recibirán en idioma español, portugués o inglés."
> — [PDF-2026], p.3

So: **Spanish, Portuguese, or English** are all explicitly accepted, per the primary source. (Note: one secondary aggregator, Difusión con Causa, stated only "Spanish or Portuguese" — https://difusionconcausa.com/convocatoria-becas-fundacion-ama-amoedo-2026/ — but this contradicts the official PDF and should be disregarded; the PDF is authoritative.)

---

## 8. Timeline

Verbatim, 2026 edition:

> "8. PLAZOS 2026 - Apertura de convocatoria: lunes 7 de julio, 2026. - Cierre de convocatoria: miércoles 9 de septiembre, 2026 - 23:59 hs (Uruguay) - Anuncio público: 20 de Noviembre."
> — [PDF-2026], p.4

And project start, repeated from §2 above:

> "...el plazo de concreción y realización del proyecto comenzará a partir de enero 2027."
> — [PDF-2026], p.1

Summary table:

| Milestone | Date |
|---|---|
| Call opens | Monday 7 July 2026 |
| Call closes | Wednesday 9 September 2026, 23:59 (Uruguay time) |
| Public announcement of results | 20 November 2026 |
| Project execution period begins | January 2027 |

For historical comparison (from hipermedula's archived call pages, verbatim extracts, useful for understanding the Foundation's cadence):

> 2nd edition (2024): "la Fundación recibirá aplicaciones entre el 31 de mayo y el 30 de julio del 2024... Anuncio público: martes 10 de septiembre, 2024."
> Source: https://hipermedula.org/2024/06/becas-fundacion-ama-amoedo-2-edicion/

> 3rd edition (2025): "Cierre de convocatoria: Domingo 31 de agosto, 23:59 hs (Uruguay). Anuncio público de resultados: Lunes 10 de noviembre. El plazo para la concreción y realización del proyecto comenzará a partir de enero de 2026."
> Source: https://hipermedula.org/2025/07/becas-fundacion-ama-amoedo-2025/

---

## 9. Foundation mission, Amalia Amoedo, prior grantees

**Current mission statement** (footer tagline, live site, 2026):

> "La Fundación Ama Amoedo busca crear un impacto duradero en el ecosistema del arte contemporáneo latinoamericano."
> Source: https://www.fundacionamaamoedo.org (footer, retrieved 2026-09-08)

**Program-level mission statement**, verbatim, opening line of the bases y condiciones:

> "Las becas tienen como objetivo brindar recursos y oportunidades para el fortalecimiento del ecosistema del arte y sus instituciones."
> — [PDF-2026], p.1

**Amalia Amoedo, biography.** The only biographical page found is an archived (2022) snapshot via the Wayback Machine — predating the Becas program, back when the site's focus was the FAARA artist residency. It should be read as dated but still the fullest bio located:

> "Amalia Amoedo es artista, mecenas y colecciona arte desde hace más de 20 años. Su colección esta formada por obras de artistas emergentes y establecidos en Argentina, América Latina y más allá. Actualmente es miembro del Comité de adquisición del Círculo Internacional Latinoamericano del Centre Pompidou, miembro del comité de Latino Americano y del Caribe del MoMA, miembro del comité Internacional de la Fundación arteBA, de la Asociación de Amigos del Moderno (Museo de Arte Moderno de Buenos Aires), del Consejo Asesor del Presidente del Americas Society (NYC) y de la Academia Gastronómica del Uruguay. Como artista estudió pintura, escultura e historia del arte con Marcia Schvartz, Nicola Costantino, Miguel Harte, Laura Batkis y Jorge Gumier Maier. Expuso en galerías, museos e instituciones incluyendo el Centro Cultural Borges, el Centro Cultural Recoleta, Galería Belleza y Felicidad, Palais de Glace, Museo Genaro Pérez de Córdoba, Museo Provincial de Bellas Artes Rosa Galisteo de Santa Fe, entre otros. Amalia vive y trabaja en Uruguay."
> Source: https://web.archive.org/web/20220813143957/https://fundacionamaamoedo.org/ama-amoedo/ (archived snapshot, dated August 2022)

**Prior grantees in "Arte y Compromiso Social" — IMPORTANT GAP.** The task asked specifically for 2024 and 2025 edition grantees. These could **not** be located. What was found instead:

- hipermedula.org — the only outlet found that has ever published a results/winners article for this program — published results **only for the 1st edition (2023)**. Its results article is titled "Resultados de las Becas Fundación Ama Amoedo 2023" (https://hipermedula.org/2023/07/resultados-de-las-becas-fundacion-ama-amoedo-2023/). No equivalent "resultados" article exists for the 2nd (2024) or 3rd (2025) editions — confirmed by browsing hipermedula's November/December 2024 and November 2025 monthly archives directly (no matching post in either), and by the fact that both the 2024 and 2025 call-announcement articles on hipermedula link back to the *2023* results post as their only "related" results content, not to a newer one.
- The Foundation's own site cannot be checked for a results announcement because `/novedades` (News) is, like every other route, client-rendered JavaScript with no server-side content — this session's tools could not execute that JavaScript.
- Instagram (`instagram.com/fundacionamaamoedo`), which would very plausibly carry a "meet our 2024/2025 grantees" post, is not accessible to the tools available in this session.

**What WAS found — 1st edition (2023) winners, "Arte y Compromiso Social" category, verbatim:**

> "En Arte y compromiso social, Solar dos Abacaxis (Brasil), inaugurará el programa Oficina Solar, que brindará oportunidades a artistas nacionales en situación de vulnerabilidad; Ruta del Castor (México), desarrollará una iniciativa piloto que replicará las metodologías y procesos de su actual programa de residencias centrada en el intercambio entre artistas, infancias y cuidadoras en una casa hogar de la CDMX."
> Source: https://hipermedula.org/2023/07/resultados-de-las-becas-fundacion-ama-amoedo-2023/ (July 2023)

One-line-each summary (for tone, as requested):
- **Solar dos Abacaxis** (Brazil) — launching "Oficina Solar," a program creating opportunities for artists in situations of vulnerability.
- **Ruta del Castor** (Mexico) — a pilot replicating their residency's artist–child–caregiver exchange methodology inside a group home ("casa hogar") in Mexico City.

**Jury of the 2nd edition (2024)**, for context on how the Foundation's advisory circle has evolved — verbatim:

> "Para la edición 2024, el jurado está integrado por: Roxana Fabius (Curadora independiente), Pablo Lafuente (Director Artístico, Museu de Arte Moderna do Rio de Janeiro), Nancy Rojas (Curadora, MALBA, Buenos Aires), y en representación de la Fundación Ama Amoedo, Laura Hakel (Curadora de Colección y Proyectos Artísticos...)."
> Source: https://hipermedula.org/2024/06/becas-fundacion-ama-amoedo-2-edicion/

**Bottom line on this point: flagged as not found.** 2024 and 2025 "Arte y Compromiso Social" grantee names could not be verified from any indexed, non-authenticated source reachable in this session. If this is decision-relevant (e.g., for calibrating what kind of project tends to win), the most reliable next step would be to ask the Foundation directly (`info@fundacionamaamoedo.org`) for a list of past grantees, or to check Instagram/LinkedIn manually.

---

## 10. Other things an applicant must know

- **One application per person/entity, one category only**: "Solo se permite aplicar a una categoría de Beca." [PDF-2026, p.2]
- **Cannot re-apply within 12 months of a previous award**: "No podrán aplicar artistas, instituciones u organizaciones que hayan recibido otro apoyo de la Fundación Ama Amoedo en el plazo de 12 meses antes de la apertura de la convocatoria." [PDF-2026, p.2] — note this bars *previous Foundation grantees* generally (any program, not just Becas), within the 12 months before the convocatoria opens.
- **Conflict-of-interest exclusions**: no one with an employment, commercial, contractual relationship with the Foundation, nor anyone related to Amalia Amoedo by blood or marriage up to the second degree, nor anyone involved in managing/evaluating the call, may apply. [PDF-2026, p.2]
- **No state bodies or institutions may apply.** [PDF-2026, p.2]
- **Bank account requirement is "excluyente"** (an absolute precondition for payment): the account must be in the titular's own name. [PDF-2026, p.2] — this implicitly means an applicant without any bank account cannot actually receive the grant even if selected; the bases do not specify whether a Uruguayan account is required or any account will do (not specified — **flagged as unclear**).
- **Grants are "directas, indivisibles e intransferibles"** — awarded directly, cannot be split, cannot be transferred to someone else. [PDF-2026, p.2]
- **Jury decisions are final/unappealable** ("inapelable"). [PDF-2026, p.2]
- **The Foundation can change the rules or cancel the program at its sole discretion, including declining to award any grants at all**, even after the call has run: "podrá a su exclusivo criterio modificar las bases y condiciones... o dejar sin efecto el programa de Becas... como así también no asignar las Becas que se ofrecen." [PDF-2026, p.2]
- **No mention anywhere found of Uruguayan tax withholding on the award**, nor of any requirement not to be a currently-enrolled student — both are **flagged as not addressed** in any source located; do not assume either way.
- **Contact for questions**: `info@fundacionamaamoedo.org` (given consistently across the PDF, the official site, and hipermedula's reproduction).
- **A signed agreement with the Foundation is a precondition of payment**, executed by the titular before funds are transferred. [PDF-2026, p.2]

---

## Consolidated list of what could NOT be found (explicit flags)

1. Exact character/word limits on any free-text field of the application form (project description, objectives, implementation plan, justification, budget explanation) — the form itself is behind a vform.io login wall; the bases y condiciones give only the four section headings, no per-field limits.
2. The FAQ page content (`https://www.fundacionamaamoedo.org/programas/becas/faqs`) — fully client-rendered, not retrievable by this session's tools (no headless browser available; Playwright MCP failed to connect).
3. Whether applicant fees/honoraria, equipment purchases, "hosting," or administrative/contingency budget lines are eligible or ineligible — not addressed in the bases; likely FAQ-level detail that could not be reached.
4. Fixed project duration/end date for the "Arte y Compromiso Social" category specifically (unlike Publicaciones, which has an explicit 2-year cap).
5. Whether the required bank account must be Uruguayan/local or can be any country's account.
6. Whether Uruguayan tax is withheld from the US$10,000 disbursement.
7. Whether being a currently-enrolled student disqualifies an applicant.
8. Names of 2024 and 2025 "Arte y Compromiso Social" grantees — only 2023 (1st edition) grantee names could be verified from an indexed, non-authenticated source.
9. A current (2026) biography of Amalia Amoedo or a full "Misión" page from the live site — only a 2022 Wayback Machine snapshot (pre-Becas program) and the current one-line footer tagline were retrievable.

## Files saved to this research folder

- `bases-condiciones.pdf` / `bases-condiciones.txt` — official 2026 Bases y Condiciones (primary source)
- `becas-page.html`, `faqs.html`, `becas-rsc.txt` — raw fetches of the live (client-rendered, effectively empty) official pages, kept for reference/verification
- `hipermedula.html` / `hipermedula-plain.txt` — 2026 call announcement with full jury bios
- `resultados2023.html` / `resultados2023-plain.txt` — 1st-edition (2023) results/winners
- `call2024.html`, `call2025.html` (+ `-plain.txt`) — 2nd- and 3rd-edition call announcements, used for timeline and jury history cross-checks
- `amaamoedo-bio-2022.html` / `amaamoedo-bio-plain.txt` — archived Amalia Amoedo bio (Wayback Machine, 2022)
