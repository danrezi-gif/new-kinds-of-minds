import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Glyph from "@/components/Glyph";
import { META, REPO_URL } from "@/lib/data";
import { TYPES } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why map neurodiversity, why geography matters, how the atlas is made, what it includes, and where its categories fail.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav current="/about/" />
      <main id="main" className="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] items-start">
          <div className="prose">
            <h1 className="mb-8">A map of how people are learning to recognize other kinds of minds</h1>
            <p className="lede">
              Somewhere in Fortaleza there is a collective of autistic adults who write their own manifesto. In Urakawa, on the coast of
              Hokkaido, people discharged from a psychiatric ward have spent forty years studying their own hallucinations together and
              publishing the results. In Montevideo a small association meets in a borrowed room. None of these places know about each other.
            </p>
            <p>
              That is the problem this atlas starts from. The neurodiversity movement, if it is one movement at all, is dispersed across
              countries, diagnoses, disciplines, and languages. An autistic-led network in Chile, a dyslexia foundation in Lisbon, a
              Hearing Voices group in Ribeirão Preto, a neurodivergent theatre company in Melbourne and a research lab in Portland are all
              working on a version of the same question: what happens when a society stops treating a way of thinking as a defect and
              starts treating it as a difference. They rarely appear in the same list. Most of them are invisible beyond their own city, or
              their own language, or their own diagnostic label.
            </p>
            <p>
              I am a psychologist. For twelve years I sat with people whose minds did not fit the categories I had been trained to apply
              to them, and I slowly stopped believing that the categories were the interesting part. The interesting part was what people
              built around the difference: the groups, the vocabularies, the arguments with their doctors, the festivals, the small
              institutions that appear when enough people refuse to be alone with a diagnosis. Those things have addresses. They can be
              mapped. Once mapped, they can be compared.
            </p>

            <h2>Why geography</h2>
            <p>
              The word neurodiversity is usually traced to the Australian sociologist Judy Singer, writing in the late 1990s, and to the
              autistic self-advocacy communities that took it up online. The idea travelled, but it did not travel evenly. In some places it
              arrived as a political claim about rights. In others it stayed inside the clinic and became a gentler word for the same
              diagnoses. In Brazil it met a much older movement, the Luta Antimanicomial, which had been closing asylums since the 1980s
              under the influence of Franco Basaglia, and the two vocabularies still circle each other. In Japan the founders of Bethel House
              coined tōjisha kenkyū, research by the people concerned, before anyone there was saying neurodiversity at all.
            </p>
            <p>
              So the map is not only a directory. Put enough verified initiatives on it and patterns appear that no single organization can
              see from inside. Where is neurodiversity chiefly a matter for advocacy, and where is it chiefly a matter for care? Which forms
              of neurodivergence have built institutions, and which have only a hashtag? Where are the initiatives led by neurodivergent
              people themselves, and where are they led on their behalf? Which concepts cross borders, and which stay home? Where is nothing
              recorded at all, and is that because nothing is there or because no one has looked? These are research questions, and the
              atlas is an instrument for asking them. It is also, I think, a portrait: of a species in the middle of changing its mind about
              what a mind is allowed to be.
            </p>

            <h2>How it is made</h2>
            <p>
              Every entry is a real initiative that someone checked. Each record carries the page it was verified against and the date, so
              that a reader can go and look rather than trust the map. The first {META.count} entries were researched editorially, region by
              region, from the initiatives&apos; own websites and from the press and academic literature around them, and they were chosen
              for range rather than volume: many countries, many kinds of activity, many forms of neurodivergence, and as many initiatives
              led by neurodivergent people as could be confirmed. Summaries are written in plain terms, in the atlas&apos;s own words, because
              an organization&apos;s self-description is a source and not a caption.
            </p>
            <p>
              Each initiative is classified three ways. Its <em>kind</em> is what it mostly does, one of eight, drawn on the map with its
              own mark so that a region reads as a pattern of shapes rather than a scatter of colors. Its <em>focus</em> is the forms of
              neurodivergence it names. And its <em>leadership</em> records whether it says it is run by neurodivergent people, by families
              and professionals, or by a mix. That last field is the one the movement argues about most, and it is the one the atlas refuses
              to guess: unless an initiative says so, the value is simply unknown.
            </p>
            <ul className="!pl-0 list-none grid sm:grid-cols-2 gap-x-6 !my-6">
              {TYPES.map((t) => (
                <li key={t.slug} className="flex gap-3 items-start !my-1">
                  <Glyph type={t.slug} size={18} color="#a8821f" className="mt-[5px]" />
                  <span>
                    {t.label}
                    <span className="block text-[0.875rem] mist">{t.short}</span>
                  </span>
                </li>
              ))}
            </ul>

            <h2>What belongs here</h2>
            <p>
              Organizations, communities, collectives, research groups, schools, festivals, media, cooperatives, and services whose work
              concerns neurodivergent people and which exist somewhere: a city, a region, or an online network with a clear base. Autism,
              ADHD, dyslexia, dyspraxia, Tourette, and the other familiar categories are here. So are the Mad Pride, psychiatric survivor,
              and Hearing Voices movements, which share the neurodiversity argument even where they refuse the word, and which in much of
              Latin America are the older and larger tradition. Family-led and professional-led initiatives are included alongside
              neurodivergent-led ones, and the atlas says which is which. What it leaves out is the individual practitioner advertising a
              service, the product, and the project that has no public trace beyond a social media account.
            </p>
            <p>
              Anyone can <Link href="/contribute/">add an initiative</Link> or correct one. Entries are reviewed by hand against their sources
              before they appear. Initiatives can claim and rewrite their own records, which is how the atlas should eventually be written:
              by the people in it, in the languages they work in.
            </p>

            <h2>Where the categories fail</h2>
            <p>
              A map like this pretends to a stability its subject does not have. The philosopher Ian Hacking called it the looping effect:
              when a human kind is named and classified, the people so classified change, and the category changes with them. Autism in 1943
              was not autism in 1994 and is not autism now; ADHD did not exist as a diagnosis for adults until recently; dyslexia depends on
              which writing system you are failing at. The categories in this atlas are the ones in circulation in 2026, mostly in English,
              and they are borrowed rather than endorsed. Some initiatives here would reject them. Some cultures represented here have never
              used them, and describe the same people through kinship, spirit, temperament, or simply as neighbors. A tag such as
              &ldquo;neurodiversity, cross-neurotype&rdquo; is an admission that the tag system does not fit.
            </p>
            <p>
              The atlas therefore makes no claim to define neurodivergence or to enumerate its forms. It records what initiatives say about
              themselves, in a scheme that is published, versioned, and open to argument. The taxonomy will be revised in public, with the
              communities it describes, and the revisions will be kept in the record, because a history of classifications is itself part
              of what the atlas is trying to show.
            </p>

            <h2>Where it is going</h2>
            <p>
              The data is already a file you can download and cite. The next steps are a read-only API, per-record history so that
              corrections are visible, a field for network membership so that federations and their members can be drawn as links, and
              summaries in the languages the initiatives actually use. The first concentrated mapping effort is Latin America, where
              neurodiversity work is abundant, mostly in Portuguese and Spanish, and largely absent from the maps and lists that circulate
              in English. After that, wherever the gaps are.
            </p>
            <p>
              New Kinds of Minds is the name I have used since 2019 for a body of work on unusual minds, from a video series on the psychology
              of artists to a book in progress; the atlas is its first public instrument, and grew out of Entrementes, a bilingual project for
              neurodivergent people, artists, and therapists in Brazil. The code is open, the data is open, and the{" "}
              <a href={REPO_URL}>repository</a> is where the arguments should happen.
            </p>
          </div>

          <aside className="lg:sticky lg:top-6 text-[0.9375rem] mist">
            <p className="m-0 mb-4 display text-[1.4rem] text-[var(--ink)]">Reading further</p>
            <ul className="m-0 p-0 list-none grid gap-3">
              <li>
                Judy Singer, <em>NeuroDiversity: The Birth of an Idea</em> (1998 thesis; 2017 edition).
              </li>
              <li>
                Ian Hacking, &ldquo;Making Up People,&rdquo; <em>London Review of Books</em>, 17 August 2006.
              </li>
              <li>
                Nick Walker, <em>Neuroqueer Heresies</em> (Autonomous Press, 2021).
              </li>
              <li>
                Paulo Amarante, <em>Loucos pela vida: a trajetória da reforma psiquiátrica no Brasil</em> (Fiocruz, 1995).
              </li>
              <li>
                Karen Nakamura, <em>A Disability of the Soul: An Ethnography of Schizophrenia and Mental Illness in Contemporary Japan</em>{" "}
                (Cornell, 2013), on Bethel House.
              </li>
              <li>
                Georges Canguilhem, <em>The Normal and the Pathological</em> (1943/1966).
              </li>
            </ul>
            <p className="m-0 mt-6">
              <Link href="/data/">The dataset and its schema.</Link>
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
