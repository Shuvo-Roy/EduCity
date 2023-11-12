import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Premium from './components/Premium'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Premium/>
    </React.Fragment>
  )
}

export default App
