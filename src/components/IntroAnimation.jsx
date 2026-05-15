import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function IntroAnimation({ onComplete }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 3000)
    const timer2 = setTimeout(() => setStep(2), 6500)
    const timer3 = setTimeout(() => onComplete(), 10000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  const subtitles = [
    "Explorer",
    "Learner",
    "Creator",
  ]

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Ambient particles background */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {step === 0 && (
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-light tracking-widest text-white/90 text-glow"
          >
            Welcome To My World
          </motion.h1>
        )}

        {step >= 1 && (
          <motion.div className="flex flex-col items-center w-full px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-8xl font-heading font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white glow-blue text-center leading-tight"
            >
              Shreejan Tamang
            </motion.h1>

            {step >= 2 && (
              <motion.div 
                className="mt-8 h-8 overflow-hidden relative w-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  animate={{ y: [0, -40, -80, -120, -160] }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                  className="flex flex-col gap-4 text-xl md:text-2xl font-light text-cyan-400 tracking-wide"
                >
                  {subtitles.map((sub, i) => (
                    <div key={i} className="h-8 flex items-center justify-center">
                      {sub}
                    </div>
                  ))}
                  {/* Duplicate first item for seamless loop */}
                  <div className="h-8 flex items-center justify-center">
                    {subtitles[0]}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={onComplete}
        className="absolute bottom-10 px-6 py-2 text-sm font-light tracking-widest text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-300 hover:bg-white/5"
      >
        SKIP INTRO
      </motion.button>
    </motion.div>
  )
}
