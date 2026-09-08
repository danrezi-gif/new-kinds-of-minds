import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import IndexTable from "@/components/IndexTable";
import { INITIATIVES, META } from "@/lib/data";

export const metadata: Metadata = {
  title: "Index of initiatives",
  description: "Every initiative in the atlas as a sortable table, with country, kind, focus, leadership, and verification date.",
};

export default function IndexPage() {
  return (
    <>
      <SiteNav current="/list/" />
      <main id="main" className="px-4 sm:px-6 py-10 sm:py-14 max-w-6xl mx-auto">
        <h1 className="!text-[clamp(2rem,4.5vw,3.4rem)] mb-3">Index</h1>
        <p className="prose mist m-0 mb-8">
          Everything on the map, as a table. {META.count} initiatives in {META.countries} countries, sortable by column. Each row links to a
          permanent page with sources. The same data is <Link href="/data/">available for download</Link>.
        </p>
        <IndexTable items={INITIATIVES} />
      </main>
      <SiteFooter />
    </>
  );
}
