import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx';
import { Honey } from './App.jsx'; //named import
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Honey />
  </StrictMode>,
)

