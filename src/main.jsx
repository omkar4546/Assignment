import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Practic } from './practic'
 import App from './App.jsx'
import "./i18next.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
