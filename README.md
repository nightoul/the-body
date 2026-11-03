# the-body

A quiz app for learning muscles and how they work together in movement.
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

The list of quizzes shown on the homepage is `src/quizzes/index.js`. Quizzes
without a component yet show a "coming soon" page.

## Project structure

```
src/
  main.jsx, App.jsx    entry point and routes
  pages/               the homepage and the quiz page
  quizzes/
    index.js           the list of quizzes (title, description, component)
    muscles/           one folder per quiz: its component, the questions it
    movements/           asks (questions.js) and its own CSS
  shared/              everything used by more than one quiz
    components/        building blocks of the quizzes, each with its CSS
    hooks/             useQuizProgress (moving through the items, score)
    helpers/           plain functions: answer matching, shuffling, chip layout
    data/              the anatomy content (see below)
  styles/base.css      global styles: colours, buttons, animations
  assets/              images, one folder per kind of entry
```

Every component, page and quiz imports its own CSS file. Each quiz is loaded
only when it's opened, so adding quizzes doesn't slow down the homepage.

### Adding a quiz

1. Create a folder in `src/quizzes/` with the quiz component (and its
   `questions.js` and CSS, if it needs them).
2. Point the quiz's entry in `src/quizzes/index.js` to it with
   `component: lazy(() => import('./<folder>/<Quiz>.jsx'))`.

## Data

Content shared between quizzes lives in `src/shared/data/`:

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
