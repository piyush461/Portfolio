/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import ScrollAnimation from './Components/ScrollAnimation'
import Page2 from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='h-auto bg-slate-700 w-full'>
        <ScrollAnimation />
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <Page2 />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact/>
        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
