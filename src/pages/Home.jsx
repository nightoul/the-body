import { Link } from 'react-router'
import { paths } from '../paths/index.js'
import { quizzes } from '../quizzes/index.js'
import './home.css'

// Quizzes first (marked with a badge), then paths.
const cards = [
  ...quizzes.map((quiz) => ({ ...quiz, isQuiz: true, to: `/quiz/${quiz.id}` })),
  ...paths.map((path) => ({ ...path, isQuiz: false, to: `/path/${path.id}` })),
]

function Home() {
  return (
    <main className="home">
      <header>
        <h1>The Body</h1>
      </header>

      <ul className="card-list">
        {cards.map((card) => (
          <li key={card.to}>
            <Link to={card.to} className="card">
              <span className="card-top">
                <span className="card-title">{card.title}</span>
                {card.isQuiz && <span className="badge">Quiz</span>}
              </span>
              <span className="card-description">{card.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
