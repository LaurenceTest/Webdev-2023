import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainDisplay from './components/MainDisplay.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <MainDisplay/>
  </React.StrictMode>,
)
