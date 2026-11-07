// Paths are practical: step-by-step exercises toward an ideal. What matters is
// the path, not whether the ideal is ever reached. They're listed in the order
// shown on the homepage (foundations first, then the ideals); `id` is the
// path's address (#/path/<id>).
//
// A path without a `component` shows a "coming soon" page. When a path gets
// one, give it its own folder here, like the quizzes in src/quizzes/, and add
// `component: lazy(() => import('./<folder>/<Path>.jsx'))`.
export const paths = [
  {
    id: 'relaxation',
    title: 'Relaxation',
    description: 'Release tight muscles.',
  },
  {
    id: 'stability-dns',
    title: 'Stability & DNS',
    description: 'Deep stabilization and DNS positions.',
  },
  {
    id: 'feet',
    title: 'Feet',
    description: 'The muscles and arches that carry you.',
  },
  {
    id: 'core',
    title: 'Core',
    description: 'Trunk strength on deep stabilization.',
  },
  {
    id: 'pull-up',
    title: 'Pull-up',
    description: 'From hangs and rows to clean pull-ups.',
  },
  {
    id: 'push-up',
    title: 'Push-up',
    description: 'From planks to full push-ups.',
  },
  {
    id: 'pistol-dragon-squat',
    title: 'Pistol & Dragon squat',
    description: 'From split squats to single-leg squats.',
  },
  {
    id: 'nordic-curl',
    title: 'Nordic hamstring curl',
    description: 'From bridges to the Nordic curl.',
  },
]
