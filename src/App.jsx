import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProcessoDetalhes from './pages/ProcessoDetalhes'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processo/:id" element={<ProcessoDetalhes />} />
      </Routes>
    </Router>
  )
}

export default App

