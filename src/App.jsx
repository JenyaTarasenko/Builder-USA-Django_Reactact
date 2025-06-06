import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Стили Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// JS для интерактивных компонентов: dropdowns, modals, tooltips и т.д.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Detail from './pages/Detail/Detail'
import Index from './pages/Index/Index'
// import './App.css'

function App() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:slug" element={< Detail/>} />
        </Routes>
      </Router>
  )
}

export default App
