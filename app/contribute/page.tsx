import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContributeForm from "@/components/ContributeForm";

export const metadata: Metadata = {
  title: "Add an initiative",
  description: "Add an organization, collective, research group, or community to the atlas, or correct an existing entry.",
};

export default function ContributePage() {
  return (
    <>
      <SiteNav current="/contribute/" />
      <main id="main" className="px-4 sm:px-6 py-10 sm:py-14 max-w-5xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <h1 className="!text-[clamp(2rem,4.5vw,3.4rem)] mb-4">Add an initiative</h1>
          <p className="prose m-0 mb-8">
            The atlas grows by contribution. If you run, belong to, or know of an initiative that belongs here, describe it below. Entries
            are checked against their source before publication, and the person who submitted them is credited only if they ask to be.
          </p>
          <ContributeForm />
        </div>
        <aside className="prose text-[0.9375rem]">
          <h2 className="!text-[1.1rem] !mt-0">What gets included</h2>
          <p>
            Organizations, communities, collectives, research groups, schools, festivals, media, cooperatives, and services whose work is
            about neurodivergent people, and which exist somewhere: a city, a region, or a clearly based online network.
          </p>
          <p>
            Initiatives led by neurodivergent people are a priority, and family-led or professional-led ones are welcome. The atlas records
            which is which, without ranking them.
          </p>
          <p>
            Not included: individual practitioners advertising services, products, and projects with no public trace beyond a social media
            account. The <Link href="/about/">About page</Link> explains the reasoning and its limits.
          </p>
          <h2 className="!text-[1.1rem]">Other ways in</h2>
          <p>
            Open a pull request against <code>data/seed/</code> in the <a href="https://github.com/danrezi-gif/new-kinds-of-minds">repository</a>,
            following <a href="https://github.com/danrezi-gif/new-kinds-of-minds/blob/main/data/SCHEMA.md">the schema</a>. Or send a list by
            email; a spreadsheet is fine.
          </p>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
