import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
    <Navbar/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
