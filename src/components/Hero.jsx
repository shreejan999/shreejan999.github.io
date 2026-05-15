import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/10 via-transparent to-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="px-4 py-1.5 rounded-full border border-white/10 glass text-xs font-medium tracking-widest text-cyan-300 uppercase">
              Portfolio Experience
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Shreejan Tamang
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            "A journey shaped by <span className="text-white">creativity</span>, curiosity, <span className="text-cyan-400">technology</span>, and continuous growth."
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#about" className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 font-medium">
              <span className="relative z-10">Explore My Journey</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a href="#works" className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors font-medium">
              View My Works
            </a>
            
            <a href="#contact" className="text-sm font-medium tracking-widest text-gray-400 hover:text-white uppercase transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
