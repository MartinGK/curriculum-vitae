import type { Metadata } from "next";
import { profile, tr, type Lang } from "@/data/cv";

export function buildMetadata(lang: Lang): Metadata {
  const title = `${profile.name} — ${tr(profile.role, lang)}`;
  const description = tr(profile.headline, lang);
  return {
    metadataBase: new URL("https://www.martin-gk.com"),
    title,
    description,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: lang === "en" ? "/" : "/es",
      languages: { en: "/", es: "/es" },
    },
    openGraph: { title, description, type: "profile", locale: lang === "en" ? "en_US" : "es_AR" },
  };
}
