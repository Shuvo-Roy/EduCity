import React from 'react'
import Hero from '../components/Hero'
import Skills from "../components/Skills"
import Premium from "../components/Premium"
import Why from "../components/Why"
import Demo from "../components/Demo"
import Reviews from "../components/Reviews"
import Subscribe from "../components/Subscribe"
export default function Landing() {
  return (
    <React.Fragment>
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
