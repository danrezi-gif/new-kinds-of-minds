"use client";

import { useEffect, useState } from "react";
import { TYPES, FOCUS_LABELS, FOCUS_ORDER, LEADERSHIP_LABELS, MODE_LABELS } from "@/lib/taxonomy";
import { SUBMIT_ENDPOINT, REPO_URL, CONTACT_EMAIL } from "@/lib/data";

type State = "idle" | "sending" | "sent" | "failed";

const empty = {
  correction_of: "",
  name: "",
  name_local: "",
  url: "",
  summary: "",
  type: "",
  focus: [] as string[],
  leadership: "unknown",
  mode: "physical",
  country: "",
  region: "",
  languages: "",
  source_url: "",
  relationship: "",
  email: "",
  notes: "",
};

export default function ContributeForm() {
  const [f, setF] = useState(empty);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const c = p.get("correct");
    if (c) setF((prev) => ({ ...prev, correction_of: c }));
  }, []);

  const set = (k: keyof typeof empty, v: string) => setF((prev) => ({ ...prev, [k]: v }));
  const toggleFocus = (slug: string) =>
    setF((prev) => ({ ...prev, focus: prev.focus.includes(slug) ? prev.focus.filter((s) => s !== slug) : [...prev.focus, slug] }));

  const isCorrection = Boolean(f.correction_of);

  const body = () =>
    [
      isCorrection ? `Correction to: ${f.correction_of}` : "New initiative",
      `Name: ${f.name}`,
      f.name_local && `Local name: ${f.name_local}`,
      `Website: ${f.url}`,
      `Summary: ${f.summary}`,
      `Kind: ${f.type}`,
      `Focus: ${f.focus.join(", ")}`,
      `Leadership: ${f.leadership}`,
      `Where: ${f.mode}`,
      `Country: ${f.country}`,
      `City or region: ${f.region}`,
      `Languages: ${f.languages}`,
      f.source_url && `Source: ${f.source_url}`,
      f.relationship && `Relationship: ${f.relationship}`,
      f.notes && `Notes: ${f.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

  const mailto = () =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[New Kinds of Minds] ${isCorrection ? "Correction" : "New initiative"}: ${f.name}`)}&body=${encodeURIComponent(body())}`;
  const issue = () =>
    `${REPO_URL}/issues/new?title=${encodeURIComponent(`${isCorrection ? "Correction" : "Add"}: ${f.name}`)}&body=${encodeURIComponent(body())}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isCorrection && (!f.name.trim() || !f.url.trim() || !f.summary.trim() || !f.type || !f.country.trim())) {
      setError("Name, website, summary, kind, and country are needed before this can be reviewed.");
      return;
    }
    if (!SUBMIT_ENDPOINT) {
      setState("failed");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, submitted_from: window.location.href }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("sent");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <div className="prose" role="status">
        <h2 className="!mt-0">Entry submitted</h2>
        <p>
          It goes into the review queue, where each entry is checked against its source before it appears on the map. If you left an
          email, you will hear back once it is published or if something needs clarifying.
        </p>
        <p>
          <button type="button" className="pill" onClick={() => { setF(empty); setState("idle"); }}>
            Add another
          </button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5 max-w-[62ch]" noValidate>
      {isCorrection && (
        <p className="m-0 p-3 border hair rounded-[4px] text-[0.9375rem]">
          Correcting the entry <span className="mono">{f.correction_of}</span>. Fill in only what should change, and say what is wrong in the notes.{" "}
          <button type="button" className="underline" onClick={() => set("correction_of", "")}>
            Add a new initiative instead
          </button>
        </p>
      )}

      <div>
        <label htmlFor="c-name" className="label">
          Name of the initiative
        </label>
        <input id="c-name" className="field" value={f.name} onChange={(e) => set("name", e.target.value)} required={!isCorrection} autoComplete="organization" />
      </div>
      <div>
        <label htmlFor="c-local" className="label">
          Name in its own language, if different (optional)
        </label>
        <input id="c-local" className="field" value={f.name_local} onChange={(e) => set("name_local", e.target.value)} />
      </div>
      <div>
        <label htmlFor="c-url" className="label">
          Website or main public page
        </label>
        <input id="c-url" type="url" className="field" value={f.url} onChange={(e) => set("url", e.target.value)} placeholder="https://" required={!isCorrection} />
      </div>
      <div>
        <label htmlFor="c-summary" className="label">
          What it is, in one or two sentences. Who runs it, what it does.
        </label>
        <textarea id="c-summary" className="field" rows={4} maxLength={320} value={f.summary} onChange={(e) => set("summary", e.target.value)} required={!isCorrection} />
        <p className="m-0 mt-1 text-[0.8125rem] mist">{320 - f.summary.length} characters left. Plain description reads better than promotion.</p>
      </div>

      <div>
        <label htmlFor="c-type" className="label">
          Kind of initiative (its main activity)
        </label>
        <select id="c-type" className="field" value={f.type} onChange={(e) => set("type", e.target.value)} required={!isCorrection}>
          <option value="">Choose one</option>
          {TYPES.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.label}: {t.short.toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="border-0 p-0 m-0">
        <legend className="label">Focus (choose all that apply)</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          {FOCUS_ORDER.map((s) => (
            <label key={s} className="flex items-center gap-2 min-h-[36px] text-[0.9375rem]">
              <input type="checkbox" checked={f.focus.includes(s)} onChange={() => toggleFocus(s)} className="w-4 h-4 accent-[var(--spectral)]" />
              {FOCUS_LABELS[s]}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-lead" className="label">
            Who leads it
          </label>
          <select id="c-lead" className="field" value={f.leadership} onChange={(e) => set("leadership", e.target.value)}>
            {Object.entries(LEADERSHIP_LABELS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
          <p className="m-0 mt-1 text-[0.8125rem] mist">Choose neurodivergent-led only if the initiative says so itself.</p>
        </div>
        <div>
          <label htmlFor="c-mode" className="label">
            Where it happens
          </label>
          <select id="c-mode" className="field" value={f.mode} onChange={(e) => set("mode", e.target.value)}>
            {Object.entries(MODE_LABELS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-country" className="label">
            Country
          </label>
          <input id="c-country" className="field" value={f.country} onChange={(e) => set("country", e.target.value)} required={!isCorrection} autoComplete="country-name" />
        </div>
        <div>
          <label htmlFor="c-region" className="label">
            City or region
          </label>
          <input id="c-region" className="field" value={f.region} onChange={(e) => set("region", e.target.value)} placeholder="Where it is based, even if it works online" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-lang" className="label">
            Languages it works in
          </label>
          <input id="c-lang" className="field" value={f.languages} onChange={(e) => set("languages", e.target.value)} placeholder="Portuguese, Spanish" />
        </div>
        <div>
          <label htmlFor="c-source" className="label">
            Page where these facts can be checked (optional)
          </label>
          <input id="c-source" type="url" className="field" value={f.source_url} onChange={(e) => set("source_url", e.target.value)} placeholder="https://" />
        </div>
      </div>

      <div>
        <label htmlFor="c-rel" className="label">
          Your relationship to it
        </label>
        <select id="c-rel" className="field" value={f.relationship} onChange={(e) => set("relationship", e.target.value)}>
          <option value="">Prefer not to say</option>
          <option value="runs">I run it or work there</option>
          <option value="member">I take part in it</option>
          <option value="knows">I know of it</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-email" className="label">
          Your email (optional, for questions and to tell you when it is published)
        </label>
        <input id="c-email" type="email" className="field" value={f.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
      </div>

      <div>
        <label htmlFor="c-notes" className="label">
          Anything the reviewer should know (optional)
        </label>
        <textarea id="c-notes" className="field" rows={3} value={f.notes} onChange={(e) => set("notes", e.target.value)} />
      </div>

      {error && (
        <p className="m-0 p-3 rounded-[4px] border border-[var(--gold)] text-[0.9375rem]" role="alert">
          {error}
        </p>
      )}

      {state === "failed" && (
        <div className="p-4 border hair rounded-[4px] text-[0.9375rem]" role="alert">
          <p className="m-0 mb-2">The form could not reach the review queue. Your entry is still here. Send it one of these ways instead:</p>
          <p className="m-0 flex flex-wrap gap-3">
            <a className="pill pill-small no-underline" href={mailto()}>
              Send by email
            </a>
            <a className="pill pill-small no-underline" href={issue()} target="_blank" rel="noopener noreferrer">
              Open a GitHub issue
            </a>
          </p>
        </div>
      )}

      <p className="m-0">
        <button type="submit" className="pill pill-primary" disabled={state === "sending"}>
          {state === "sending" ? "Submitting" : isCorrection ? "Submit correction" : "Submit entry"}
        </button>
      </p>
      <p className="m-0 text-[0.8125rem] mist">
        Submissions are reviewed by hand. Your email is used only to reply about this entry and is not published.
      </p>
    </form>
  );
}
