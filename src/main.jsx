import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



// должен быть первее App.jsx
import './index.css';
import './media.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
