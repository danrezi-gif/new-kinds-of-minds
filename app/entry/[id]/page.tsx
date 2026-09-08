import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import EntryDetail from "@/components/EntryDetail";
import { INITIATIVES, getInitiative } from "@/lib/data";
import { TYPE_BY_SLUG } from "@/lib/taxonomy";

export function generateStaticParams() {
  return INITIATIVES.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const item = getInitiative(id);
  if (!item) return {};
  return {
    title: `${item.name}, ${item.country_name}`,
    description: item.summary,
  };
}

export default async function EntryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getInitiative(id);
  if (!item) notFound();
  const siblings = INITIATIVES.filter((i) => i.country === item.country && i.id !== item.id).slice(0, 6);
  return (
    <>
      <SiteNav current="/entry" />
      <main id="main" className="px-4 sm:px-6 py-10 sm:py-16 max-w-5xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="max-w-[62ch]">
          <p className="m-0 mb-6 text-[0.875rem]">
            <Link href={`/#${item.id}`}>Show on the atlas</Link>
          </p>
          <EntryDetail item={item} full />
        </div>
        <aside className="text-[0.9375rem]">
          <h2 className="!text-[1.1rem] mb-3">Also in {item.country_name}</h2>
          {siblings.length === 0 ? (
            <p className="mist m-0">
              This is the only initiative recorded here so far. <Link href="/contribute/">Add another.</Link>
            </p>
          ) : (
            <ul className="m-0 p-0 list-none">
              {siblings.map((s) => (
                <li key={s.id} className="py-2 border-b hair">
                  <Link href={`/entry/${s.id}/`} className="no-underline hover:underline">
                    {s.name}
                  </Link>
                  <span className="block text-[0.8125rem] mist">
                    {TYPE_BY_SLUG[s.type].label} · {s.region}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
