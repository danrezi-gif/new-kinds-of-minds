import SiteNav from "@/components/SiteNav";
import Atlas from "@/components/Atlas";
import { INITIATIVES, META } from "@/lib/data";

export default function Home() {
  return (
    <main id="main" className="relative">
      <SiteNav current="/" floating />
      <h1 className="sr-only">New Kinds of Minds: a global atlas of neurodiversity</h1>
      <Atlas items={INITIATIVES} meta={{ count: META.count, countries: META.countries, generated: META.generated }} />
    </main>
  );
}
