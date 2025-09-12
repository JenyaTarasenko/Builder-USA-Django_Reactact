import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Стили Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// JS для интерактивных компонентов: dropdowns, modals, tooltips и т.д.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Detail from './pages/Detail/Detail'
// page Index
import Index from './pages/Index/Index'
// page About
import About from './pages/About/About';
// page ProjectsPage
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
// page ContactUs
import ContactPage from './pages/ContactPage/ContactPage';
// компонент для прокрутки страницы с самого начала с навигации 
import ScrollTopTop from './components/ScrollTopTop/ScrollTopTop';
import NotFound from './pages/NotFound/NotFound';




function App() {
  return (
      <Router>
        <ScrollTopTop />  {/* компонент для прокрутки страницы с самого начала с навигации  */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects-all" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={< Detail/>} />
          <Route path="/contact" element={< ContactPage />} />
          {/* Любой другой путь → NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default App
