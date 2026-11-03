import Link from "next/link";
import { profile, tr, ui, type Lang } from "@/data/cv";
import { PrimaryCta } from "./Ctas";

export function Header({ lang }: { lang: Lang }) {
  const other = lang === "en" ? "/es" : "/";
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-bold tracking-tight whitespace-nowrap text-ink">
          {profile.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm sm:gap-5">
          <a href="#timeline" className="hidden text-ink-2 transition-colors hover:text-ink md:inline">
            {tr(ui.nav.timeline, lang)}
          </a>
          <a href="#stack" className="hidden text-ink-2 transition-colors hover:text-ink md:inline">
            {tr(ui.nav.stack, lang)}
          </a>
          <a href="#contact" className="hidden text-ink-2 transition-colors hover:text-ink md:inline">
            {tr(ui.nav.contact, lang)}
          </a>
          <Link
            href={other}
            hrefLang={lang === "en" ? "es" : "en"}
            className="rounded-full px-2 py-2 text-ink-2 sm:px-3 transition-colors hover:bg-paper-2 hover:text-ink"
          >
            {tr(ui.switchLang, lang)}
          </Link>
          <PrimaryCta lang={lang} short />
        </nav>
      </div>
    </header>
  );
}
