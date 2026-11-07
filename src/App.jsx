import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import ItemPage from './pages/ItemPage.jsx'
import { paths } from './paths/index.js'
import { quizzes } from './quizzes/index.js'

// HashRouter keeps routes working on GitHub Pages, which has no SPA fallback.
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<ItemPage items={quizzes} kind="quiz" />} />
        <Route path="/path/:id" element={<ItemPage items={paths} kind="path" />} />
      </Routes>
    </HashRouter>
  )
}

export default App
