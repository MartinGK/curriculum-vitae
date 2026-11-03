import type { Lang } from "@/data/cv";
import { Career } from "./Career";
import { Closing } from "./Closing";
import { Header } from "./Header";
import { Hero } from "./Hero";

export function CvPage({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} />
      <main id="top">
        <Hero lang={lang} />
        <Career lang={lang} />
        <Closing lang={lang} />
      </main>
    </>
  );
}
