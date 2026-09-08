# Taxonomy, version 0.1

The atlas classifies each initiative on three axes. All three are provisional, and this file is where the argument about them is kept.

## Kind (`type`): what the initiative mostly does

One value per record. Choose the primary activity, not every activity.

| slug | label | includes |
|---|---|---|
| `community` | Peer community | self-advocacy groups, peer networks, mutual support, social clubs, membership networks run by and for neurodivergent people |
| `advocacy` | Advocacy and rights | political, legal, policy, and public-awareness work; national federations |
| `arts` | Arts and culture | collectives, studios, theatre and dance companies, festivals, galleries, music projects |
| `research` | Research | university centres, labs, participatory and survivor research, think tanks |
| `education` | Education | schools, alternative learning projects, mentoring, training programmes |
| `work` | Work and livelihood | employment programmes, cooperatives, social enterprises, entrepreneurship support |
| `care` | Care and clinical | therapeutic, diagnostic, and health services; peer-run crisis and respite services |
| `media` | Media and publishing | magazines, podcasts, publishers, archives, radio, online platforms whose main output is content |

Why these eight and not the original directory categories (Support Groups, Education, Employment, Healthcare, Arts & Culture, Research, Advocacy, Social): the earlier list mixed a service logic (what can I get here) with a movement logic (what form does the movement take here). The revised list is built for the second question, and it distinguishes community from advocacy because the difference between a peer network and a rights organization is one of the things the map is for. `media` is separate from `arts` because publishing is how vocabularies travel, and the atlas wants to see where they travel from.

Known problems: many initiatives do several things (an autistic-led organization that runs peer groups, lobbies, and publishes a magazine). The primary-activity rule loses information. A multi-valued `activities` field may replace this in a later version, with `type` kept as the map mark.

## Focus (`focus`): which forms of neurodivergence the initiative names

Several values per record.

`autism`, `adhd`, `dyslexia`, `dyspraxia`, `dyscalculia`, `tourette`, `ocd`, `bipolar`, `psychosis`, `intellectual-disability`, `down-syndrome`, `learning-disabilities`, `mad-pride`, `hearing-voices`, `neurodiversity-general`.

Notes:

- `mad-pride` covers psychiatric survivor, users-and-survivors-of-psychiatry, antimanicomial, and Mad Pride initiatives. Many of these reject the word neurodiversity. They are here because they share its central move (difference rather than defect) and because in much of Latin America they are the older and larger tradition.
- `hearing-voices` is kept separate from `psychosis` because the Hearing Voices movement defines itself by the experience, not the diagnosis.
- `neurodiversity-general` is the honest tag for cross-neurotype initiatives and for initiatives whose own language does not map onto any of the others.
- Missing and debated: giftedness and twice-exceptionality; epilepsy; acquired brain injury; synaesthesia; sensory processing; highly sensitive person; dissociative experience; the many culturally specific descriptions that do not use diagnostic language at all. The list will change. Changes are logged in this file with dates.

## Leadership (`leadership`): who runs it

| slug | rule |
|---|---|
| `nd-led` | the initiative itself states it is run by neurodivergent, autistic, disabled, or survivor people ("by and for", "autistic-led", "self-advocacy", "survivor-led") |
| `ally-led` | clearly run by parents, families, or professionals |
| `mixed` | states a mixed leadership |
| `unknown` | nothing stated; the default |

This is the axis the movement itself argues about most, so the atlas records it without ranking it and without guessing.

## Changelog

- 2026-09-08: version 0.1. Eight kinds replace the eight original directory categories. Focus list extended with `mad-pride`, `hearing-voices`, `intellectual-disability`, `learning-disabilities`, `neurodiversity-general`; `anxiety`, `depression`, `ptsd` dropped as focus values (they were diagnoses, not movements, and every initiative touched them). Leadership axis added.
