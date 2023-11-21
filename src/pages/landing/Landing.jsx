import React from 'react'
import Hero from '../../components/landing/Hero'
import Skills from "../../components/landing/Skills"
import Premium from "../../components/landing/Premium"
import Why from "../../components/landing/Why"
import Demo from "../../components/landing/Demo"
import Reviews from "../../components/landing/Reviews"
import Subscribe from "../../components/landing/Subscribe"
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
