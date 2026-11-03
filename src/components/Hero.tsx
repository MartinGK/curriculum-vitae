"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile, tr, type Lang } from "@/data/cv";
import { PrimaryCta, SecondaryLinks } from "./Ctas";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ lang }: { lang: Lang }) {
  const reduce = useReducedMotion();
  const [first, last] = profile.name.split(" ");

  const line = (text: string, delay: number) =>
    reduce ? (
      <span className="block">{text}</span>
    ) : (
      <span className="block overflow-hidden pb-[0.08em]">
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, delay, ease: EASE }}
        >
          {text}
        </motion.span>
      </span>
    );

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 md:pt-28">
      <motion.p
        {...fade(0.5)}
        className="no-print mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper-2 px-3 py-1 text-sm text-ink-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {tr(profile.status, lang)}
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
      <h1 className="text-[clamp(3.5rem,13vw,9.5rem)] leading-[0.86] font-extrabold tracking-[-0.04em] text-ink">
        {line(first, 0.05)}
        {line(last, 0.17)}
      </h1>

      <div className="grid gap-8 lg:pb-3">
        <motion.div {...fade(0.45)}>
          <p className="text-xl font-semibold text-accent-ink sm:text-2xl">{tr(profile.role, lang)}</p>
          <p className="mt-3 max-w-[44ch] text-lg leading-relaxed text-pretty text-ink-2 sm:text-xl">
            {tr(profile.headline, lang)}
          </p>
        </motion.div>
        <motion.div {...fade(0.6)} className="no-print flex flex-col items-start gap-4">
          <PrimaryCta lang={lang} size="lg" />
          <SecondaryLinks />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
