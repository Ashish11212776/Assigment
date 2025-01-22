import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TickTac from './Tick-Tac.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TickTac/>
  </StrictMode>,
)
