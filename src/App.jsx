import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Premium from './components/Premium'
import Why from './components/Why'
import Demo from './components/Demo'
import Reviews from './components/Reviews'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Premium/>
      <Why/>
      <Demo/>
      <Reviews/>
      <Subscribe/>
    </React.Fragment>
  )
}

export default App
