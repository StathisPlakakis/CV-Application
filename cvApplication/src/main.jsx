import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './components/profileImage.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)
