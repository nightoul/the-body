import { lazy } from 'react'

// Quizzes test the theory. They're listed in the order shown on the homepage;
// `id` is the quiz's address (#/quiz/<id>). Each quiz lives in its own folder
// and is loaded only when it's opened.
export const quizzes = [
  {
    id: 'muscles',
    title: 'Muscle properties',
    description: 'Name a muscle and its properties.',
    component: lazy(() => import('./muscles/MuscleQuiz.jsx')),
  },
  {
    id: 'movements',
    title: 'Basic movements',
    description: 'Name the muscles behind a movement.',
    component: lazy(() => import('./movements/MovementQuiz.jsx')),
  },
]
