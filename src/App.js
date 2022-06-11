import React from 'react'
import Navbar from './components/Navbar'
import SeccionI from './components/SeccionI'
import SeccionII from './components/SeccionII'

const App = () => {
  return (
    <>
      <Navbar />
    <div className="container">
      <SeccionI />
      <SeccionII />
    </div>
    </>
    
  )
}

export default App
