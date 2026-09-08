import Link from "next/link";
import type { Initiative } from "@/lib/types";
import { TYPE_BY_SLUG, FOCUS_LABELS, LEADERSHIP_LABELS, MODE_LABELS, languageName } from "@/lib/taxonomy";
import Glyph from "./Glyph";

function host(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function EntryDetail({ item, full = false }: { item: Initiative; full?: boolean }) {
  const t = TYPE_BY_SLUG[item.type];
  return (
    <article aria-labelledby={`entry-${item.id}`}>
      <p className="m-0 mb-2 flex items-center gap-2 text-[0.875rem] mist">
        <Glyph type={item.type} size={16} color="#a8821f" />
        {t.label}
      </p>
      {full ? (
        <h1 id={`entry-${item.id}`} className="!text-[clamp(2rem,4.5vw,3.4rem)] mb-1">
          {item.name}
        </h1>
      ) : (
        <h2 id={`entry-${item.id}`} className="!text-[1.6rem] mb-1">
          {item.name}
        </h2>
      )}
      {item.name_local && item.name_local !== item.name && (
        <p className="m-0 mb-3 text-[1.05rem] mist" lang={item.languages[0]}>
          {item.name_local}
        </p>
      )}
      <p className="m-0 mb-4 mist">
        {item.region}, {item.country_name}
      </p>
      <p className={`m-0 mb-5 ${full ? "text-[1.15rem]" : ""}`}>{item.summary}</p>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.9375rem] m-0 mb-5">
        <dt className="mist">Focus</dt>
        <dd className="m-0">{item.focus.map((f) => FOCUS_LABELS[f]).join(", ")}</dd>
        <dt className="mist">Leadership</dt>
        <dd className="m-0">{LEADERSHIP_LABELS[item.leadership]}</dd>
        <dt className="mist">Where</dt>
        <dd className="m-0">{MODE_LABELS[item.mode]}</dd>
        <dt className="mist">Languages</dt>
        <dd className="m-0">{item.languages.map(languageName).join(", ")}</dd>
        {item.founded && (
          <>
            <dt className="mist">Since</dt>
            <dd className="m-0">{item.founded}</dd>
          </>
        )}
      </dl>

      <p className="m-0 mb-5">
        <a href={item.url} rel="noopener noreferrer" target="_blank" className="pill pill-small no-underline">
          Visit {host(item.url)}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>

      <div className="card-hair pt-4 text-[0.8125rem] mist">
        <p className="m-0">
          Verified {item.verified} from{" "}
          <a href={item.source_url} rel="noopener noreferrer" target="_blank">
            {host(item.source_url)}
          </a>
          . Added {item.added} by {item.added_by === "editorial" ? "the editorial team" : "a community contributor"}.
        </p>
        {item.notes && <p className="m-0 mt-2">Note: {item.notes}</p>}
        <p className="m-0 mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {!full && <Link href={`/entry/${item.id}/`}>Permanent page</Link>}
          <Link href={`/contribute/?correct=${item.id}`}>Suggest a correction</Link>
          <span className="mono">
            {item.lat.toFixed(3)}, {item.lng.toFixed(3)}
          </span>
        </p>
      </div>
    </article>
  );
}
