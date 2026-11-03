"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { entryStack, techStack, timeline, tr, ui, type Entry, type Lang } from "@/data/cv";
import { formatDuration, formatPeriod } from "@/lib/format";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type FilterProps = {
  lang: Lang;
  active: string | null;
  onToggle: (tech: string) => void;
  usage: Map<string, string[]>;
};

function TechChip({
  tech,
  active,
  matched,
  count,
  onToggle,
  tone = "panel",
}: {
  tech: string;
  active: boolean;
  matched?: boolean;
  count?: number;
  onToggle: (tech: string) => void;
  tone?: "panel" | "entry";
}) {
  const idle =
    tone === "panel"
      ? "border-line bg-paper text-ink-2 hover:border-ink-3 hover:text-ink"
      : "border-line bg-paper-2/60 text-ink-2 hover:border-ink-3 hover:text-ink";
  const highlighted = matched ? "border-accent bg-accent-soft text-accent-ink" : idle;
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onToggle(tech)}
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors duration-200 ${
        active ? "border-accent bg-accent text-paper" : highlighted
      }`}
    >
      {tech}
      {count !== undefined && count > 0 && (
        <span className={`font-mono text-[0.65rem] tabular ${active ? "text-paper/80" : "text-ink-3"}`}>{count}</span>
      )}
    </button>
  );
}

function StackFilter({ lang, active, onToggle, usage }: FilterProps) {
  return (
    <div className="space-y-5">
      {techStack.map(({ group, items }) => (
        <div key={group.en}>
          <h3 className="mb-2 font-mono text-[0.7rem] tracking-wide text-ink-3 uppercase">{tr(group, lang)}</h3>
          <div className="flex flex-wrap gap-1.5">
            {items.map((tech) => (
              <TechChip
                key={tech}
                tech={tech}
                active={active === tech}
                count={usage.get(tech)?.length ?? 0}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TimelineEntry({
  entry,
  lang,
  active,
  onToggle,
  nested = false,
}: {
  entry: Entry;
  lang: Lang;
  active: string | null;
  onToggle: (tech: string) => void;
  nested?: boolean;
}) {
  const reduce = useReducedMotion();
  const matches = active === null || entryStack(entry).has(active);
  const isProject = entry.kind === "project";

  return (
    <motion.article
      id={entry.id}
      animate={{ opacity: matches ? 1 : 0.28, filter: matches ? "grayscale(0)" : "grayscale(1)" }}
      transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
      className={`print-break-avoid relative ${nested ? "pl-6 sm:pl-8" : "pl-10 sm:pl-14"}`}
    >
      <span
        aria-hidden="true"
        className={`absolute rounded-full ${
          nested
            ? "top-2 left-0 h-2.5 w-2.5 border-2 border-ink-3 bg-paper"
            : `top-2.5 left-[3px] h-3.5 w-3.5 -translate-x-1/2 ring-4 ring-paper ${isProject ? "border-2 border-accent bg-paper" : "bg-ink"} sm:left-[5px]`
        }`}
        style={nested ? undefined : { left: 8 }}
      />

      <Reveal>
        <p className="font-mono text-xs text-ink-3 tabular">
          {formatPeriod(entry, lang)}
          {!entry.periodLabel && <span className="text-ink-3/80"> · {formatDuration(entry, lang)}</span>}
        </p>

        <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3
            className={`font-bold tracking-tight text-ink ${nested ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"}`}
          >
            {entry.org}
          </h3>
          {entry.status && (
            <span
              className={`rounded-full border px-2 py-0.5 text-xs ${
                entry.end === null ? "border-accent/50 text-accent-ink" : "border-line text-ink-3"
              }`}
            >
              {tr(entry.status, lang)}
            </span>
          )}
        </div>
        <p className="mt-1 text-ink-2">
          <span className="font-medium text-ink">{tr(entry.role, lang)}</span>
          {entry.context && <span> · {tr(entry.context, lang)}</span>}
          {entry.url && (
            <>
              {" · "}
              <a href={entry.url} target="_blank" rel="noopener noreferrer" className="text-accent-ink underline hover:text-accent">
                {entry.url.replace("https://", "")}
              </a>
            </>
          )}
        </p>

        {entry.metrics && (
          <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
            {entry.metrics.map((metric) => (
              <div key={metric.label.en} className="max-w-[16rem]">
                <dt className="sr-only">{tr(metric.label, lang)}</dt>
                <dd className="text-5xl leading-none font-extrabold tracking-[-0.03em] text-accent sm:text-6xl">
                  <Counter value={metric.value} from={metric.from} prefix={metric.prefix} suffix={metric.suffix} />
                </dd>
                <dd aria-hidden="true" className="mt-2 text-sm leading-snug text-ink-2">
                  {tr(metric.label, lang)}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {entry.bullets.length > 0 && (
          <ul className="mt-5 max-w-[68ch] space-y-2.5 leading-relaxed text-ink-2">
            {entry.bullets.map((bullet) => (
              <li key={bullet.en} className="relative pl-5">
                <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
                {tr(bullet, lang)}
              </li>
            ))}
          </ul>
        )}

        {entry.stack.length > 0 && (
          <div className="no-print mt-4 flex flex-wrap gap-1.5">
            {entry.stack.map((tech) => (
              <TechChip
                key={tech}
                tech={tech}
                tone="entry"
                active={active === tech}
                matched={active === tech}
                onToggle={onToggle}
              />
            ))}
          </div>
        )}
      </Reveal>

      {entry.children && (
        <div className="mt-6 space-y-10 border-l border-line pt-2 pl-0">
          {entry.children.map((child) => (
            <div key={child.id} className="relative -ml-[5px]">
              <TimelineEntry entry={child} lang={lang} active={active} onToggle={onToggle} nested />
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export function Career({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const usage = useMemo(() => {
    const map = new Map<string, string[]>();
    const add = (entry: Entry) =>
      entry.stack.forEach((tech) => map.set(tech, [...(map.get(tech) ?? []), entry.org]));
    timeline.forEach((entry) => {
      add(entry);
      entry.children?.forEach(add);
    });
    return map;
  }, []);

  const toggle = (tech: string) => setActive((current) => (current === tech ? null : tech));
  const activeUsage = active ? usage.get(active) ?? [] : [];

  const status = active && (
    <motion.div
      key={active}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: 8 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="flex items-center justify-between gap-3 rounded-xl bg-ink px-4 py-3 text-sm text-paper shadow-[0_10px_30px_-10px_rgb(23_21_15/0.5)]"
      role="status"
    >
      <span className="min-w-0">
        <span className="text-paper/70">{tr(ui.showing, lang)}: </span>
        <strong className="font-semibold">{active}</strong>
        <span className="block truncate text-xs text-paper/70">
          {activeUsage.length > 0 ? `${tr(ui.usedIn, lang)} ${activeUsage.join(", ")}` : tr(ui.notInTimeline, lang)}
        </span>
      </span>
      <button
        type="button"
        onClick={() => setActive(null)}
        className="shrink-0 rounded-full border border-paper/30 px-3 py-1 text-xs transition-colors duration-200 hover:bg-paper hover:text-ink"
      >
        {tr(ui.clear, lang)}
      </button>
    </motion.div>
  );

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal className="max-w-3xl">
        <h2 className="text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] text-balance sm:text-6xl">
          {tr(ui.timelineTitle, lang)}
        </h2>
        <p className="no-print mt-4 text-lg text-ink-2">{tr(ui.timelineIntro, lang)}</p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[19rem_1fr] lg:gap-16">
        <aside id="stack" className="no-print lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:pr-2">
          <details className="group rounded-xl border border-line p-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              {tr(ui.filterLabel, lang)}
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-open:rotate-180">
                <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="mt-4">
              <StackFilter lang={lang} active={active} onToggle={toggle} usage={usage} />
            </div>
          </details>
          <div className="hidden lg:block">
            <p className="mb-4 font-semibold">{tr(ui.filterLabel, lang)}</p>
            <StackFilter lang={lang} active={active} onToggle={toggle} usage={usage} />
            <div className="mt-5 min-h-[4.5rem]">
              <AnimatePresence mode="wait">{status}</AnimatePresence>
            </div>
          </div>
        </aside>

        <div ref={listRef} className="relative">
          <div aria-hidden="true" className="absolute top-3 bottom-0 left-2 w-px bg-line" />
          <motion.div
            aria-hidden="true"
            className="no-print absolute top-3 bottom-0 left-2 w-px origin-top bg-accent"
            style={{ scaleY: reduce ? 1 : progress }}
          />
          <div className="space-y-20">
            {timeline.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} lang={lang} active={active} onToggle={toggle} />
            ))}
          </div>
        </div>
      </div>

      <div className="no-print fixed inset-x-4 bottom-4 z-30 lg:hidden">
        <AnimatePresence>{status}</AnimatePresence>
      </div>
    </section>
  );
}
