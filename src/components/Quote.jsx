import { motion } from 'framer-motion'
import { Quote as QuoteIcon } from 'lucide-react'

export default function Quote() {
  return (
    <section className="py-40 relative overflow-hidden flex items-center justify-center">
      {/* Cinematic background effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl h-full absolute">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <QuoteIcon className="w-16 h-16 mx-auto text-white/20 mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light leading-tight tracking-wide text-white text-glow">
            "I may not master only one thing, but I <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">never stop learning</span> everything."
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
