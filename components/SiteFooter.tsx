import Link from "next/link";
import { META, REPO_URL } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t hair px-4 sm:px-6 py-10 text-[0.9375rem] mist">
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-[1fr_auto]">
        <p className="max-w-[60ch] m-0">
          New Kinds of Minds is an open atlas. Code under the MIT license, data under CC BY 4.0. Version {META.version},
          dataset regenerated {META.generated}. A project by <a href="https://danielrezinovsky.com">Daniel Rezinovsky</a>,
          grown out of <a href="https://danrezi-gif.github.io/Entrementes/">Entrementes</a>.
        </p>
        <p className="m-0 flex flex-wrap gap-x-5 gap-y-2">
          <a href={REPO_URL}>Source on GitHub</a>
          <Link href="/data/">Download the dataset</Link>
          <Link href="/contribute/">Correct an entry</Link>
        </p>
      </div>
    </footer>
  );
}
