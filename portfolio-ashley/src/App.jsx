import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Test from './components/Test.jsx'
import Experience from './components/Experience.jsx'
import Projet from './components/Projet.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Test />
      <About />
      <Experience />
      <Projet />
    </>
  )
}

export default App