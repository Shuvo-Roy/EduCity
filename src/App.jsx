import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Premium from './components/Premium'
import Why from './components/Why'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Premium/>
      <Why/>
    </React.Fragment>
  )
}

export default App
