import React from 'react'
import Navbar from './components/Navbar'
import SeccionI from './components/SeccionI'
import SeccionII from './components/SeccionII'
import SeccionIIIPortfolio from './components/SeccionIIIPortfolio'

import 'animate.css/animate.min.css'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <SeccionI />
      <SeccionII />
      <SeccionIIIPortfolio />
    </div>
    </>
    
  )
}

export default App
