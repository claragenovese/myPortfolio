import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IdContextProvider } from './Context'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdContextProvider>
      <App />    
    </IdContextProvider>
  </React.StrictMode>
)
