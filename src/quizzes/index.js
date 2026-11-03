import { lazy } from 'react'

// All quizzes, in the order shown on the homepage. `id` is the quiz's address
// (#/quiz/<id>); a quiz without a `component` shows a "coming soon" page.
// Each quiz lives in its own folder and is loaded only when it's opened.
export const quizzes = [
  {
    id: 'muscles',
    title: 'Muscle properties',
    description: 'See a muscle and name it, its shape, region, depth and more.',
    component: lazy(() => import('./muscles/MuscleQuiz.jsx')),
  },
  {
    id: 'movements',
    title: 'Basic movements',
    description: 'See a movement and name the muscles behind it and how they work.',
    component: lazy(() => import('./movements/MovementQuiz.jsx')),
  },
  {
    id: 'relaxation',
    title: 'Relaxation',
    description: 'Learn how to release tight muscles.',
  },
  {
    id: 'stability-dns',
    title: 'Stability & DNS',
    description: 'Deep stabilization and the developmental positions behind it.',
  },
  {
    id: 'feet',
    title: 'Feet',
    description: 'The muscles and arches that carry you.',
  },
  { id: 'quiz-6', title: 'Quiz 6', description: 'Coming soon' },
  { id: 'quiz-7', title: 'Quiz 7', description: 'Coming soon' },
  { id: 'quiz-8', title: 'Quiz 8', description: 'Coming soon' },
  { id: 'quiz-9', title: 'Quiz 9', description: 'Coming soon' },
  {
    id: 'joint-strength',
    title: 'Joint-specific strength training',
    description: 'Strengthen the muscles around each joint.',
  },
]
