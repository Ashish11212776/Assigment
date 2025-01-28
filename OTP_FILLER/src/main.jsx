import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreateOtp from './components/CreateOtp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateOtp/>
    <App />
  </StrictMode>,
)
