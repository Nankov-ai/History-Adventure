# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

**History Adventure** — a static browser-only quiz app for a Portuguese 5th-grade student (10-11 years old) learning História (Portuguese national curriculum: Pré-História → Antigo Egito → Antiga Grécia → Roma Antiga → Península Ibérica → Formação de Portugal). No build step, no dependencies, no server. Everything runs from plain HTML/CSS/JS files.

Mirrors the architecture of the sibling project **English Adventure** (`C:\projetos\English Adventure`) — same file layout, same `td()` topic-switching pattern, same localStorage scoring. Keep both apps structurally consistent so fixes/patterns can be ported between them.

Published at: **https://nankov-ai.github.io/History-Adventure/** (to be created)

## Content source

All factual content (dates, names, events, images) must come from the files placed by the user in **`Fontes do Conhecimento/`** — this is the single source of truth for historical accuracy. That folder is currently empty; **do not invent historical content or dates from memory alone**. When it's empty or a topic isn't covered yet:
- Flag it to the user instead of guessing at curriculum-specific facts (dates, exam wording, textbook page numbers).
- General, well-established historical facts (e.g. "a Roma foi fundada por volta de 753 a.C., segundo a tradição") are fine as placeholders, but mark them clearly for the user to verify against the actual textbook once sources are shared.
- Once PDFs/manual pages are added to `Fontes do Conhecimento/`, extract vocabulary, dates, and page references (📖 p.XX) from them the same way English Adventure references its textbook.

## Running locally

```bash
# Quickest — just open the file
start index.html          # Windows
open index.html           # macOS

# With live reload (recommended when editing CSS/JS)
npm run dev                # uses live-server on port 8000

# Static server without reload
npm start                  # uses http-server on port 8000
```

## Deploy

Push to `main` — GitHub Pages auto-deploys within ~2 minutes. No CI needed.

```bash
git add <files>
git commit -m "..."
git push origin main
```

## Architecture

See [`architecture.mmd`](architecture.mmd) for the full diagram. Same five-file pattern as English Adventure:

| File | Role |
|------|------|
| `data.js` | All historical content, questions and timelines — the single source of truth |
| `images.js` | HTML strings for in-quiz visuals (timelines, maps, scenes) |
| `app.js` | All game logic; reads `gameData[currentTopic]` via the `td()` helper |
| `styles.css` | All styling; no preprocessor |
| `index.html` | Static shell — topic (época) selector + game tabs + score board |

### Data model (`data.js`)

```js
const gameData = {
  preHistoria: { name, translations, matchWords, quizQuestions, unscrambleWords, completeSentences, timelineEvents },
  egito:       { ... },
  grecia:      { ... },
  roma:        { ... },
  peninsula:   { ... },
  portugal:    { ... },
};
```

**Per topic (época):**
- `matchWords` — `{ 'conceito': '🏺' }` — used by the Match game
- `translations` — `{ 'termo difícil': 'explicação simples em PT' }` — vocabulary glosses for a 10-year-old, looked up by `explica(termo)` in app.js
- `quizQuestions` — array of `{ question, img?, options[], correct, emoji, hint }`
- `unscrambleWords` — array of `{ scrambled, answer, emoji, hint }`
- `completeSentences` — array of `{ sentence, blank, options[], emoji, hint }`
- `timelineEvents` — array of `{ event, year, emoji }` — for the Timeline (Linha do Tempo) game, ordering events chronologically

**Key fields:**
- `img` on quiz questions → key into `quizImages` in `images.js`; renders a visual map/timeline/scene above the options
- `hint` on every question → gives the student a scaffold before revealing the answer (5th grade needs more scaffolding than 4th grade English vocab drilling)

### How topic switching works (`app.js`)

```js
let currentTopic = 'preHistoria';          // global
function td() { return gameData[currentTopic]; }   // shorthand used everywhere
```

`selectTopic(topic, btn)` updates `currentTopic`, re-styles the topic buttons, and re-initialises whichever game tab is currently active.

Each game (`initMatchGame`, `initQuizGame`, `initUnscrambleGame`, `initCompleteGame`, `initTimelineGame`) reads exclusively from `td()` — no hardcoded topic references.

### Visual images (`images.js`)

```js
const quizImages = {
  timelinePreHistoria,   // horizontal timeline strip
  mapaEgito,             // Nile map with labeled locations
  mapaGrecia,            // Greek city-states map
  imperioRomano,         // Roman Empire extent map
  mapaPeninsula,         // Iberian Peninsula peoples map
};
```

Add a new image here and reference it with `img: 'keyName'` on any quiz question.

## Adding new content

### New época (topic)
1. Add an entry to `gameData` in `data.js` following the existing shape
2. Add a `<button class="topic-btn" onclick="selectTopic('key', this)">` in `index.html`

### New quiz question with a visual
1. Create the HTML string in `images.js` under a new key
2. Add `img: 'yourKey'` to the question object in `data.js`

### New timeline event
Add to `timelineEvents` for the topic — the Timeline game shuffles these and asks the student to reorder them chronologically.

## Score persistence

`highScore` is saved to `localStorage` under key `ha_highScore`. Everything else resets on page load.

## Audience & tone

- 10-11-year-old, 5º ano, Portuguese student — first year of "História e Geografia de Portugal" as a standalone subject
- UI is entirely in Portuguese (no bilingual layer needed, unlike English Adventure)
- Language must be simple, concrete, and age-appropriate: short sentences, explain any technical term (e.g. "a.C.", "Neolítico", "hieróglifos") the first time it's used
- Tone is encouraging and game-like, never exam-like — mistakes should feel low-stakes with a hint offered, not a harsh "errado"
- Page references (📖 p.XX) appear on quiz images once real textbook sources are available, so the student can cross-check with the manual
- Avoid overwhelming detail — 5º ano curriculum favors broad narrative understanding (who, when, why it mattered) over dense factual lists
