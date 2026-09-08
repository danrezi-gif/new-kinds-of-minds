import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Glyph from "@/components/Glyph";
import { META, REPO_URL, stats, countries, BASE } from "@/lib/data";
import { TYPES, LEADERSHIP_LABELS } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "Data",
  description: "Download the atlas as JSON or CSV, read the schema, and see how the taxonomy is built.",
};

export default function DataPage() {
  const s = stats();
  const cs = countries();
  return (
    <>
      <SiteNav current="/data/" />
      <main id="main" className="px-4 sm:px-6 py-10 sm:py-14 max-w-5xl mx-auto">
        <h1 className="!text-[clamp(2rem,4.5vw,3.4rem)] mb-4">The dataset</h1>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="prose">
            <p className="lede">
              Everything on the map is a row in a file you can download, cite, and correct. Version {META.version}, regenerated {META.generated}.
            </p>
            <p className="flex flex-wrap gap-3 !mt-6">
              <a className="pill pill-primary no-underline" href={`${BASE}/data/initiatives.json`} download>
                Download JSON
              </a>
              <a className="pill no-underline" href={`${BASE}/data/initiatives.csv`} download>
                Download CSV
              </a>
              <a className="pill no-underline" href={`${REPO_URL}/tree/main/data`}>
                Browse on GitHub
              </a>
            </p>
            <p>
              The data is published under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>: use it for anything, credit
              New Kinds of Minds. The code is MIT. Every record carries the page it was verified against and the date, so a reader can check
              the claim rather than trust the map.
            </p>

            <h2>How a record is built</h2>
            <p>
              A record is one initiative: a name, a place, a one-paragraph description written in plain terms, and a small set of
              classifications. Three of those classifications do most of the analytical work.
            </p>
            <p>
              <strong>Kind</strong> is the initiative&apos;s main activity. Eight values, each drawn with its own mark on the map, so that a
              region can be read at a glance as a pattern of shapes rather than a rainbow of dots.
            </p>
            <ul className="!pl-0 list-none grid sm:grid-cols-2 gap-x-6">
              {TYPES.map((t) => (
                <li key={t.slug} className="flex gap-3 items-start">
                  <Glyph type={t.slug} size={18} color="#a8821f" className="mt-[5px]" />
                  <span>
                    <span className="font-medium">{t.label}</span>
                    <span className="block text-[0.875rem] mist">{t.short}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p>
              <strong>Leadership</strong> records whether the initiative describes itself as run by neurodivergent people, by families and
              professionals, or by a mix. This is the fault line the movement itself argues about most, and the atlas will not guess it:
              the value is <code>unknown</code> unless the initiative says so.
            </p>
            <p>
              <strong>Focus</strong> lists the forms of neurodivergence the initiative names. The list includes autism, ADHD, dyslexia, and
              the other familiar categories, and also Mad Pride, psychiatric survivor, and hearing-voices movements, which share the
              neurodiversity argument even where they refuse the word. The <Link href="/about/">About page</Link> says why the list is
              provisional.
            </p>

            <h2>Fields</h2>
            <pre>
              <code>{`id             kebab-case, stable, unique
name           name as used internationally
name_local     name in the initiative's own language, or null
summary        one or two plain sentences, up to 320 characters
type           advocacy | community | arts | research | education | work | care | media
focus          list of focus slugs (see data/TAXONOMY.md)
leadership     nd-led | mixed | ally-led | unknown
mode           physical | online | hybrid
country        ISO 3166-1 alpha-2
country_name   country in English
region         city or region
lat, lng       WGS84 coordinates of the city
languages      ISO 639-1 codes
url            official website
source_url     page the facts were verified against
founded        year, or null
added          YYYY-MM-DD, date the record entered the atlas
verified       YYYY-MM-DD, date it was last checked
added_by       editorial | community
notes          moderator notes, or null`}</code>
            </pre>
            <p>
              The full schema, with the reasoning behind each field, is in{" "}
              <a href={`${REPO_URL}/blob/main/data/SCHEMA.md`}>data/SCHEMA.md</a>. The taxonomy, with its known problems, is in{" "}
              <a href={`${REPO_URL}/blob/main/data/TAXONOMY.md`}>data/TAXONOMY.md</a>.
            </p>

            <h2>What is planned</h2>
            <p>
              A read-only API with the same records; per-record history, so that corrections are visible rather than silent; a field for
              network membership, so that federations and their members can be drawn as links; and translations of summaries into the
              languages the initiatives work in. Each of these is a small change to the file, which is the point of keeping the file simple.
            </p>
          </div>

          <aside className="text-[0.9375rem]">
            <h2 className="!text-[1.1rem] !mt-0 mb-3">Right now</h2>
            <dl className="grid grid-cols-[1fr_auto] gap-y-1 m-0 mb-6">
              <dt className="mist">Initiatives</dt>
              <dd className="m-0 mono text-right">{s.total}</dd>
              <dt className="mist">Countries</dt>
              <dd className="m-0 mono text-right">{s.countries}</dd>
              <dt className="mist">Working languages</dt>
              <dd className="m-0 mono text-right">{s.languages}</dd>
              {Object.entries(LEADERSHIP_LABELS).map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="mist">{v}</dt>
                  <dd className="m-0 mono text-right">{s.byLeadership[k] || 0}</dd>
                </div>
              ))}
            </dl>
            <h2 className="!text-[1.1rem] mb-3">By country</h2>
            <ul className="m-0 p-0 list-none columns-2 gap-4 text-[0.875rem]">
              {cs.map((c) => (
                <li key={c.code} className="flex justify-between gap-2 py-0.5">
                  <span>{c.name}</span>
                  <span className="mono mist">{c.count}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
