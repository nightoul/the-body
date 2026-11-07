import { Link } from 'react-router'
import './page.css'

// The page every quiz and path is shown on: a header with the way home and
// the title, and the content filling the rest of the screen.
function Page({ title, children }) {
  return (
    <div className="page">
      <header className="page-header">
        <Link to="/" className="back-link">
          ← Home
        </Link>
        <h1 className="page-title">{title}</h1>
      </header>
      <main className="page-main">{children}</main>
    </div>
  )
}

// A short centred message instead of content (loading, coming soon, nothing yet).
export function PageMessage({ children }) {
  return (
    <div className="page-message">
      <p className="subtitle">{children}</p>
    </div>
  )
}

export default Page
