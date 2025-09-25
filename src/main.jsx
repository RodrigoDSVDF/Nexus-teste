// O CÓDIGO DEVE FICAR ASSIM (CORRETO)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- REMOVA O BASENAME DAQUI */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
