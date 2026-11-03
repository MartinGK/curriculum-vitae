import { profile, tr, ui, type Lang } from "@/data/cv";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PrimaryCta({
  lang,
  size = "md",
  inverted = false,
  short = false,
}: {
  lang: Lang;
  size?: "md" | "lg";
  inverted?: boolean;
  short?: boolean;
}) {
  const href = profile.links.calendly || `mailto:${profile.email}`;
  const label = profile.links.calendly ? tr(short ? ui.bookCallShort : ui.bookCall, lang) : tr(ui.emailMe, lang);
  const sizing = size === "lg" ? "px-6 py-3.5 text-base" : "px-4 py-2 text-sm";
  const colors = inverted
    ? "bg-paper text-ink hover:bg-accent-soft"
    : "bg-accent text-paper hover:bg-accent-ink";
  return (
    <a
      href={href}
      {...(profile.links.calendly ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex shrink-0 items-center whitespace-nowrap justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${sizing} ${colors}`}
    >
      {label}
      <span className={short ? "max-sm:hidden" : undefined}>
        <ArrowIcon />
      </span>
    </a>
  );
}

export function SecondaryLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "light"
      ? "text-ink-2 hover:text-accent-ink decoration-line hover:decoration-accent"
      : "text-night-ink-2 hover:text-night-ink decoration-night-ink-2/40 hover:decoration-night-ink";
  const link = `inline-flex items-center gap-1.5 underline transition-colors duration-200 ${base}`;
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {profile.links.linkedin && (
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
            LinkedIn
          </a>
        </li>
      )}
      <li>
        <a href={`mailto:${profile.email}`} className={link}>
          {profile.email}
        </a>
      </li>
    </ul>
  );
}
