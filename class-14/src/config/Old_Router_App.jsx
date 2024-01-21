import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

export const Old_Router_App = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
       {/* <Footer /> */}
    </Router>
    
  )
}
