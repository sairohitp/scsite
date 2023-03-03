import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'

const App = () => {
  return (
    <div>

      <BrowserRouter basename = "/scsite">
        <Routes>
          <Route exact path = "/scsite" element = {<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App