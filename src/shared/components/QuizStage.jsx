import './quiz-stage.css'

// The area a quiz lays itself out in; `onKeyDown` lets the quiz handle Esc.
function QuizStage({ onKeyDown, children }) {
  return (
    <div className="quiz-stage" onKeyDown={onKeyDown}>
      {children}
    </div>
  )
}

export default QuizStage
