# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

**History Adventure** — a static browser-only quiz app for a Portuguese 5th-grade student (10-11 years old) learning HGP (História e Geografia de Portugal). No build step, no dependencies, no server. Everything runs from plain HTML/CSS/JS files.

The curriculum follows the manual **"HGP em Ação 5"** (Porto Editora, Eliseu Alves · Elisabete Jesus), structured in lettered/numbered units:

| Unit | Title |
|------|-------|
| A1 | A Península Ibérica — Localização |
| A2 | A Península Ibérica — Quadro Natural |
| B1 | As primeiras comunidades humanas da Península Ibérica |
| B2 | Os Romanos na Península Ibérica |
| B3 | Os Muçulmanos na Península Ibérica |
| B4 | A formação do Reino de Portugal |
| C1 | Portugal nos séculos XIII e XIV |
| C2 | Portugal nos séculos XV e XVI |
| C3 | Portugal: da União Ibérica à Restauração da Independência |

Real course dates seen so far (`Fontes do Conhecimento/`): **Aula 1** covers course logistics (normas, critérios de avaliação) plus the full-year summary PPT (source for the unit table above and for all of `data.js`'s current content). **Aulas 2-3** cover unit A2 in depth (formas de representação da Terra, planisfério, globo). More `Aula N` folders will be added over the school year — always re-check `Fontes do Conhecimento/` for new material before extending `data.js`, since it is the source of truth for what's actually being taught and in what order.

## Status

**Fully implemented and live** — all 9 units have real content (match/quiz/unscramble/complete-sentence for every unit, plus Linha do Tempo for B1-C3 and Legendar o Mapa for A1-A2), the app is responsive from ~320px phones to large desktops, and it's deployed and verified working at the URL above. Data structure and UI flows were validated with a Node script and Playwright (no console errors, no horizontal overflow at 320/375/768/1440px). Future work is adding units from new `Aula N` sources as the school year progresses (see [Adding new content](#adding-new-content)).

Mirrors the architecture of the sibling project **English Adventure** (`C:\projetos\English Adventure`) — same file layout, same `td()` topic-switching pattern, same localStorage scoring. Keep both apps structurally consistent so fixes/patterns can be ported between them.

Published at: **https://nodeflow.pt/History-Adventure/** (GitHub Pages, custom domain)

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
  peninsulaLocalizacao:  { name, translations, matchWords, quizQuestions, unscrambleWords, completeSentences },              // A1 — Geografia
  peninsulaQuadroNatural:{ ... },                                                                                            // A2 — Geografia
  primeirasComunidades:  { name, translations, matchWords, quizQuestions, unscrambleWords, completeSentences, timelineEvents }, // B1
  romanos:                { ... },  // B2
  muculmanos:             { ... },  // B3
  formacaoPortugal:       { ... },  // B4
  portugalXIII_XIV:       { ... },  // C1
  expansaoMaritima:       { ... },  // C2
  uniaoIberica:           { ... },  // C3
};
```

Unit keys follow the manual's letter/number codes (see the table above) — `timelineEvents` only applies to History units (B1-C3); Geography units (A1-A2) skip it since they're not chronological.

**Per topic (unidade):**
- `matchWords` — `{ 'conceito': '🏺' }` — used by the Match game
- `translations` — `{ 'termo difícil': 'explicação simples em PT' }` — vocabulary glosses for a 10-year-old, looked up by `explica(termo)` in app.js
- `quizQuestions` — array of `{ question, img?, options[], correct, emoji, hint }`
- `unscrambleWords` — array of `{ scrambled, answer, emoji, hint }`
- `completeSentences` — array of `{ sentence, blank, options[], emoji, hint }`
- `timelineEvents` — array of `{ event, year, sortYear, emoji }` — **History units only (B1-C3)**; `year` is the display string (e.g. `'218 a.C.'`), `sortYear` is a plain number used to check ordering (negative for a.C., positive for d.C.). Timeline game shuffles the cards and asks the student to reorder them chronologically against a mini ruler. Before/after-Christ date reading is conceptually hard at this age — always show both, don't assume it's obvious.
- `mapLabels` — array of `{ term, definition }` (e.g. `{ term: 'Legenda', definition: 'Explica o que significam as cores e os símbolos do mapa' }`) — **Geography units only (A1-A2)**; used by the Legendar o Mapa game (see below)

**Key fields:**
- `img` on quiz questions → key into `quizImages` in `images.js`; renders a visual map/timeline/scene above the options
- `hint` on every question → gives the student a scaffold before revealing the answer, always available without a score penalty (never gate it behind losing points — that turns the game into an exam)
- On a wrong answer, reformulate rather than flatly reject: nudge toward the right place to look (e.g. "quase — repara na legenda 🔍") instead of a bare red ✗

### How topic switching works (`app.js`)

```js
let currentTopic = 'peninsulaLocalizacao'; // global
function td() { return gameData[currentTopic]; }   // shorthand used everywhere
```

`selectTopic(topic, btn)` updates `currentTopic`, re-styles the topic buttons, and re-initialises whichever game tab is currently active.

Each game (`initMatchGame`, `initQuizGame`, `initUnscrambleGame`, `initCompleteGame`, `initTimelineGame`, `initMapLabelGame`) reads exclusively from `td()` — no hardcoded topic references. `initTimelineGame` only runs for units with `timelineEvents`; `initMapLabelGame` only for units with `mapLabels`. `updateTabVisibility()` (called from `selectTopic()` and on page load) sets `hidden` on the `.tab` buttons that don't apply to the current unit, and `selectTopic()` falls back to the Match tab if the currently active tab just became hidden.

### Visual images (`images.js`)

```js
const quizImages = {
  mapaContinentes,     // A1 — continents grid highlighting the Península Ibérica in Europe
  mapaRelevoEsquema,   // A2 — schematic relief regions (montanhas/meseta/planícies)
  mapaReconquista,     // B4 — Condado Portucalense → Kingdom of Portugal → + Algarve
  mapaExpansaoMaritima,// C2 — African coast exploration stages, 1415-1500
};
```

Each is a plain HTML/CSS string (no external image files, no network requests) — keeps the app a true zero-dependency static site. Add a new one here and reference it with `img: 'keyName'` on any quiz question; not every question needs an image, use them where a visual genuinely helps (maps, sequences).

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

## Responsive design

`styles.css` has breakpoints at 420px (small phones), 768px (tablets), and 1400px+ (large desktops) — tightening padding, font sizes, tab labels and grid column counts as the screen shrinks. `body` uses `align-items: flex-start` (not `center`) so tall game content isn't clipped above the viewport on short screens. When adding new UI, check it at both ends: a 320px-wide phone and a 1440px+ desktop, and verify there's no horizontal scroll (`document.documentElement.scrollWidth > clientWidth`).

## Audience & tone

- 10-11-year-old, 5º ano, Portuguese student — first year of "História e Geografia de Portugal" as a standalone subject
- UI is entirely in Portuguese (no bilingual layer needed, unlike English Adventure)
- Language must be simple, concrete, and age-appropriate: short sentences, explain any technical term (e.g. "a.C.", "Neolítico", "hieróglifos") the first time it's used
- Tone is encouraging and game-like, never exam-like — mistakes should feel low-stakes with a hint offered, not a harsh "errado"
- Page references (📖 p.XX) appear on quiz images once real textbook sources are available, so the student can cross-check with the manual
- Avoid overwhelming detail — 5º ano curriculum favors broad narrative understanding (who, when, why it mattered) over dense factual lists
