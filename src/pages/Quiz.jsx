import { Suspense } from 'react'
import { useParams } from 'react-router'
import QuizPage, { QuizEmpty } from '../shared/components/QuizPage.jsx'
import { quizzes } from '../quizzes/index.js'

function Quiz() {
  const { quizId } = useParams()
  const quiz = quizzes.find((q) => q.id === quizId)
  const QuizComponent = quiz?.component

  return (
    <QuizPage title={quiz ? quiz.title : 'Quiz not found'}>
      {QuizComponent ? (
        <Suspense fallback={<QuizEmpty>Loading…</QuizEmpty>}>
          <QuizComponent />
        </Suspense>
      ) : (
        <QuizEmpty>{quiz ? 'Coming soon.' : 'This quiz does not exist.'}</QuizEmpty>
      )}
    </QuizPage>
  )
}

export default Quiz
