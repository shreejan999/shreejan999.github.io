import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const timelineStages = [
  { id: 1, title: "Early Creative Curiosity", desc: "Developing a foundational interest in how things work and how they sound." },
  { id: 2, title: "Music & Artistic Exploration", desc: "Diving deep into music creation, instrument playing, and finding a voice." },
  { id: 3, title: "Teaching & Knowledge Sharing", desc: "Instructing others in music, discovering the joy of helping people grow." },
  { id: 4, title: "Small Business Ventures", desc: "Learning the basics of operations, customer relations, and business management." },
  { id: 5, title: "Bakery Industry Experience", desc: "Understanding process, timing, and quality in a fast-paced environment." },
  { id: 6, title: "Electronics Repair Training", desc: "Learning electronics repair, bridging the gap between theory and practical fixes." },
  { id: 7, title: "Manufacturing Industry Career", desc: "Entering the manufacturing world as a Technician in 2022, eager to learn." },
  { id: 8, title: "Leadership & Production Management", desc: "Rising to Production Supervisor, then Head of Production Department." },
  { id: 9, title: "Future Vision & Global Growth", desc: "Continuing to learn, integrate technology with creativity, and lead with empathy." }
]

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="journey" className="py-32 relative bg-[#030303]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Journey</h2>
          <p className="text-gray-400 font-light tracking-widest uppercase text-sm">Evolution of a Lifelong Learner</p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-orange-500 -translate-x-1/2 origin-top glow-blue"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {timelineStages.map((stage, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div 
                  key={stage.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-400 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,229,255,0.8)]" />

                  {/* Content Box */}
                  <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 border border-white/5 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-cyan-400 font-bold text-5xl absolute -top-4 -right-2 opacity-10 font-heading">
                        0{stage.id}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">{stage.title}</h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">{stage.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
