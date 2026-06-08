import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import App from './App.jsx'

const anotherElement=(
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">google</a>
)

const newElement=React.createElement('h1',null,'Hello World')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
       <App />
       {anotherElement}
       {newElement}
    </div>
   
  </StrictMode>,
)
