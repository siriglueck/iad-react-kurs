import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import React from 'react'
import ReactDOM from 'react-dom/client'

const app = 
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hallo Frontend!</h1>
    <p className="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

ReactDOM.createRoot(document.getElementById('app')).render(app)

