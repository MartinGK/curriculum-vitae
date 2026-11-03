# Design

## World

A printed career ledger brought to life: warm paper, near-black ink and a single burnt-orange accent. Big, confident type carries the identity; motion reveals the story once and then gets out of the way.

## Tokens (`src/app/globals.css`)

- Paper `#f4f1ea`, paper-2 `#ebe6db`, line `#d8d1c3`.
- Ink `#17150f`, ink-2 `#4f4a41`, ink-3 `#6f695e` (AA on paper).
- Accent `#c2410c` (CTAs, metrics, timeline progress), accent-ink `#9a3412` (accent text), accent-soft `#f8dccd` (own projects, matched chips).
- Night `#17150f` for the closing contact band.

## Type

- Schibsted Grotesk for everything: display 800 with -0.04em tracking, body 400.
- JetBrains Mono only for dates, durations, year ticks and small section labels (data, not costume).

## Components

- Timeline: hairline with an accent line that draws on scroll; filled dot for roles, ring for own projects, small ring for client projects.
- Metrics: large accent numbers that count up once when they come into view.
- Tech chips: buttons that filter the timeline; non-matching entries fade to 28% and grayscale.

## Motion

- One authored moment: the name rises line by line in the opening.
- Elsewhere: soft rise from an already legible state, counters, and the filter's fade.
- Expo ease-out `cubic-bezier(0.16, 1, 0.3, 1)`. `prefers-reduced-motion` shows everything static.

## Print

Header, filter and contact band are hidden; all content prints at full opacity.
