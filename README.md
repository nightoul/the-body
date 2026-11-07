# the-body

An app for learning muscles and how they work together in movement, and for
putting it into practice. It has two kinds of content:

- **Quizzes** test the theory.
- **Paths** are practical: exercises step by step toward an ideal (a pull-up,
  a pistol squat, …). The way there matters more than reaching it.

Built with React + Vite and deployed to GitHub Pages by the workflow in
`.github/workflows/deploy.yml` on every push to `master`.

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

Unit tests ([Vitest](https://vitest.dev)) live in `tests/`:

| File | Checks |
|---|---|
| `data.test.js` | the content: valid values, every muscle and movement complete, no muscle referenced that doesn't exist, no name shared by two muscles |
| `answers.test.js` | answer matching: case, diacritics, optional words, short forms |
| `dataHelpers.test.js` | the data checks themselves |
| `random.test.js` | shuffling and the scattered chip layout |
| `catalog.test.js` | the lists of quizzes and paths: unique ids, titles, descriptions |

The deploy workflow runs the tests before building, so a mistake in the data
stops the deploy instead of reaching the live site.

## Quizzes

- **Muscle properties** (`src/quizzes/muscles/`, `#/quiz/muscles`) — a
  muscle image with questions scattered around it: Latin and Czech name, shape,
  region, depth, palpability and Janda type.
- **Basic movements** (`src/quizzes/movements/`, `#/quiz/movements`) — a
  movement situation: name an agonist, sort the synergists, antagonists and
  stabilizers into their roles, and answer the contraction type, plane, chain,
  sides, gravity and the main and secondary regions.

The list of quizzes shown on the homepage is `src/quizzes/index.js`.

## Paths

Listed in `src/paths/index.js` (`#/path/<id>`): first the foundations
(Relaxation, Stability & DNS, Feet, Core), then the ideals (Pull-up, Push-up,
Pistol & Dragon squat, Nordic hamstring curl).

On the homepage quizzes and paths are one list; quizzes are marked by a
badge.

None has content yet; a path without a component shows a "coming soon" page.

## Project structure

```
src/
  main.jsx, App.jsx    entry point and routes (#/quiz/<id>, #/path/<id>)
  pages/               the homepage, and ItemPage: the page of one quiz or path
  quizzes/
    index.js           the list of quizzes (title, description, component)
    muscles/           one folder per quiz: its component, the questions it
    movements/           asks (questions.js) and its own CSS
  paths/
    index.js           the list of paths (title, description, component)
                       and, later, one folder per path like the quizzes
  shared/              everything used by more than one quiz or path
    components/        building blocks of the quizzes, each with its CSS
    hooks/             useQuizProgress (moving through the items, score)
    helpers/           plain functions: answer matching, shuffling, chip layout
    data/              the anatomy content (see below)
  styles/base.css      global styles: colours, buttons, animations
  assets/              images, one folder per kind of entry
```

Every component, page, quiz and path imports its own CSS file. Each quiz and
path is loaded only when it's opened, so adding more doesn't slow down the
homepage.

### Adding a quiz or path

1. Create a folder in `src/quizzes/` or `src/paths/` with its component (and
   its own data and CSS, if it needs them).
2. Point its entry in that folder's `index.js` to it with
   `component: lazy(() => import('./<folder>/<Component>.jsx'))`.

Every page has the same frame (`shared/components/Page.jsx`: the way home and
the title). Quizzes lay themselves out in a `QuizStage`.

## Data

Content shared between quizzes and paths lives in `src/shared/data/`:

| File | Contents |
|---|---|
| `muscles.js` | every muscle and its properties |
| `movements.js` | movement situations; muscles are referenced by their `id` from `muscles.js` |
| `muscleShapes.js`, `answerValues.js` | the fixed answer values (shape, region, depth, …) with their accepted short forms |
| `dataHelpers.js` | the checks run on the data when it loads |

Which questions a quiz asks is in that quiz's own `questions.js`.

The data is checked when the app loads: an unknown value or a reference to a
muscle that doesn't exist stops the app in development (and is only logged on
the live site).

Answers ignore case, diacritics and the words *musculus* / *sval*.

## Images

Put images into `src/assets/muscles/` or `src/assets/movements/`, named exactly
as the entry's `image` field (e.g. `PsoasMajor.png`). They're picked up
automatically. The muscle quiz shows only muscles that have an image; the
movement quiz shows a placeholder until one is added. A file that no entry uses
produces a warning in the browser console.
