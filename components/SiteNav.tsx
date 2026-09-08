import Link from "next/link";

const links = [
  { href: "/", label: "Atlas" },
  { href: "/list/", label: "Index" },
  { href: "/about/", label: "About" },
  { href: "/data/", label: "Data" },
  { href: "/contribute/", label: "Add an initiative" },
];

export default function SiteNav({ current, floating = false }: { current: string; floating?: boolean }) {
  return (
    <header
      className={
        floating
          ? "absolute top-0 left-0 right-0 z-[500] flex items-center justify-between gap-3 px-3 sm:px-5 py-3 pointer-events-none"
          : "flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b hair"
      }
    >
      <Link
        href="/"
        className={`display no-underline text-[1.15rem] sm:text-[1.3rem] leading-none text-[var(--ink)] hover:text-[var(--ink)] ${
          floating ? "pointer-events-auto bg-[var(--paper)]/90 backdrop-blur px-3 py-2 rounded-full border hair" : ""
        }`}
        style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"SOFT" 60, "WONK" 1, "opsz" 24' }}
      >
        New Kinds of Minds
      </Link>
      <nav
        aria-label="Site"
        className={`${
          floating ? "pointer-events-auto bg-[var(--paper)]/90 backdrop-blur rounded-full border hair px-1.5 py-1" : ""
        } flex items-center gap-0.5 sm:gap-1 overflow-x-auto max-w-[70vw]`}
      >
        {links.map((l) => {
          const active = current === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`no-underline whitespace-nowrap rounded-full px-3 py-2 text-[0.9rem] min-h-[40px] inline-flex items-center ${
                active
                  ? "bg-[var(--ink)] text-[var(--paper)] hover:text-[var(--paper)]"
                  : "text-[var(--ink)] hover:text-[var(--spectral)]"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
