import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import Play from './components/Play/Play'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route exact path='/play' element={<Play />}></Route>
    </Routes>
  </BrowserRouter>
)
