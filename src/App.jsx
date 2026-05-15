import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroAnimation from './components/IntroAnimation'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Quote from './components/Quote'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [introFinished, setIntroFinished] = useState(false)

  // Prevent scrolling while intro is playing
  useEffect(() => {
    if (!introFinished) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [introFinished])

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {!introFinished && (
          <IntroAnimation onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative z-10"
      >
        {introFinished && (
          <>
            <ParticleBackground />
            <div className="relative z-20">
              <Hero />
              <About />
              <Timeline />
              <Skills />
              <Hobbies />
              <Quote />
              <Works />
              <Contact />
              <Footer />
            </div>
          </>
        )}
      </motion.div>
    </>
  )
}

export default App
