import { education, languages, profile, softSkills, tr, ui, type Lang } from "@/data/cv";
import { PrimaryCta, SecondaryLinks } from "./Ctas";
import { Reveal } from "./Reveal";

export function Closing({ lang }: { lang: Lang }) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-12 border-t border-line pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal>
            <h2 className="font-mono text-xs tracking-wide text-ink-3 uppercase">{tr(ui.about, lang)}</h2>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-ink-2">{tr(profile.about, lang)}</p>
          </Reveal>
          <Reveal delay={0.08} className="space-y-10">
            <div>
              <h2 className="font-mono text-xs tracking-wide text-ink-3 uppercase">{tr(ui.languages, lang)}</h2>
              <dl className="mt-4 space-y-2">
                {languages.map(({ name, level }) => (
                  <div key={name.en} className="flex justify-between gap-4 border-b border-line/70 pb-2">
                    <dt className="font-medium">{tr(name, lang)}</dt>
                    <dd className="text-ink-2">{tr(level, lang)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="font-mono text-xs tracking-wide text-ink-3 uppercase">{tr(ui.education, lang)}</h2>
              <p className="mt-4 font-medium">{tr(education.degree, lang)}</p>
              <p className="text-ink-2">
                {education.school} · <span className="tabular">{education.period}</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <h2 className="font-mono text-xs tracking-wide text-ink-3 uppercase">{tr(ui.softSkills, lang)}</h2>
            <ul className="mt-4 space-y-2">
              {softSkills.map((skill) => (
                <li key={skill.en} className="border-b border-line/70 pb-2 font-medium">
                  {tr(skill, lang)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="no-print bg-night text-night-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <Reveal>
            <h2 className="max-w-[16ch] text-5xl leading-[0.95] font-extrabold tracking-[-0.035em] text-balance sm:text-7xl">
              {tr(ui.closingTitle, lang)}
            </h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-night-ink-2 sm:text-xl">
              {tr(ui.closingBody, lang)}
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <PrimaryCta lang={lang} size="lg" inverted />
              <SecondaryLinks tone="dark" />
            </div>
          </Reveal>
        </div>
        <footer className="mx-auto flex max-w-6xl justify-between gap-4 border-t border-night-ink/10 px-4 py-6 text-xs text-night-ink-2 sm:px-6">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>martin-gk.com</span>
        </footer>
      </section>
    </>
  );
}
