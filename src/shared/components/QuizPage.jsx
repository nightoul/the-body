import { Link } from 'react-router'
import './quiz-page.css'

// The page every quiz is shown on: a header with the way back and the quiz's
// title, and the quiz filling the rest of the screen.
function QuizPage({ title, children }) {
  return (
    <div className="quiz-page">
      <header className="quiz-header">
        <Link to="/" className="back-link">
          ← All quizzes
        </Link>
        <h1 className="quiz-page-title">{title}</h1>
      </header>
      <main className="quiz-main">{children}</main>
    </div>
  )
}

// The area a quiz lays itself out in; `onKeyDown` lets the quiz handle Esc.
export function QuizStage({ onKeyDown, children }) {
  return (
    <div className="quiz-stage" onKeyDown={onKeyDown}>
      {children}
    </div>
  )
}

// Shown instead of a quiz that has nothing to ask yet.
export function QuizEmpty({ children }) {
  return (
    <div className="quiz-empty">
      <p className="subtitle">{children}</p>
    </div>
  )
}

export default QuizPage
