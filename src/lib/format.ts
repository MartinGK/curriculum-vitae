import type { Entry, Lang } from "@/data/cv";

const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
};

/** Month count since year 0, so ranges can be compared and measured. */
export function monthIndex(value: string): number {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month - 1);
}

export function nowIndex(): number {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

export function endIndex(entry: Entry): number {
  return entry.end ? monthIndex(entry.end) : nowIndex();
}

function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split("-").map(Number);
  return `${MONTHS[lang][month - 1]} ${year}`;
}

export function formatPeriod(entry: Entry, lang: Lang): string {
  if (entry.periodLabel) return entry.periodLabel[lang];
  const end = entry.end ? formatMonth(entry.end, lang) : lang === "en" ? "Present" : "Actualidad";
  return `${formatMonth(entry.start, lang)} – ${end}`;
}

export function formatDuration(entry: Entry, lang: Lang): string {
  const total = endIndex(entry) - monthIndex(entry.start) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (lang === "en") {
    if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  } else {
    if (years) parts.push(`${years} año${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} mes${months > 1 ? "es" : ""}`);
  }
  return parts.join(" ");
}
