import React, { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#070917]">
      <Hero onHireClick={scrollToContact} onProjectsClick={scrollToProjects} />
      <About />
      <Skills />
      <Experience />
      <Projects ref={projectsRef} />
      <Education />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

export default App
