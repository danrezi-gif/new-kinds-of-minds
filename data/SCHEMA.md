# Dataset schema

One record per initiative. The canonical file is `data/initiatives.json` (generated); the editable sources are the files in `data/seed/`. Run `npm run data` to regenerate and validate. A record that fails validation stops the build, on purpose.

Published copies: `public/data/initiatives.json` and `public/data/initiatives.csv` (in CSV, list fields are joined with `|`). Data license: CC BY 4.0.

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string, kebab-case | yes | Stable identifier. Never reuse; never change once published. |
| `name` | string | yes | Name as used internationally (often English). |
| `name_local` | string or null | no | Name in the initiative's own language, when different. |
| `summary` | string, ≤ 320 chars | yes | One or two plain factual sentences in the atlas's own words: what it is, who runs it, what it does. No promotional adjectives. |
| `type` | enum | yes | Main activity: `advocacy`, `community`, `arts`, `research`, `education`, `work`, `care`, `media`. See TAXONOMY.md. |
| `focus` | array of enum | yes | Forms of neurodivergence the initiative names. Slugs in TAXONOMY.md. |
| `leadership` | enum | yes | `nd-led` only if the initiative states it is run by neurodivergent people; `ally-led` if clearly run by families or professionals; `mixed` if stated; otherwise `unknown`. Do not infer. |
| `mode` | enum | yes | `physical`, `online`, `hybrid`. |
| `country` | ISO 3166-1 alpha-2 | yes | |
| `country_name` | string | yes | English name, for display and CSV readers. |
| `region` | string | yes | City and region, as specific as verifiable. Online initiatives use their base city. |
| `lat`, `lng` | number | yes | WGS84, city-level precision. The build nudges exact collisions apart by a few hundred metres so marks do not hide each other. |
| `languages` | array of ISO 639-1 | yes | Languages the initiative works in. |
| `url` | absolute URL | yes | Official site or main public page. Unique across the dataset. |
| `source_url` | absolute URL | yes | Page the facts were verified against. May equal `url`. |
| `founded` | integer or null | no | Year. |
| `added` | YYYY-MM-DD | yes | Date the record entered the atlas. |
| `verified` | YYYY-MM-DD | yes | Date the record was last checked against its source. |
| `added_by` | enum | yes | `editorial` or `community`. |
| `notes` | string or null | no | Moderator notes shown on the entry page: caveats, network membership, site quirks. |

## Provenance rules

- Every fact in `summary` must be checkable at `source_url`.
- `verified` is updated only by a person who actually re-checked the source.
- Corrections change the seed file through a pull request or a reviewed submission; the git history is the record of changes until per-record history is built.
- A dead official site does not delete a record. Set `notes` to say so and keep `source_url` pointing at a live third-party confirmation.

## Planned fields

`network` (ids of federations the initiative belongs to), `summary_i18n` (summaries by language), `status` (`active`, `dormant`, `closed`), `claimed_by` (verified contact from the initiative).
