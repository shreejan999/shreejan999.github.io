import { motion } from 'framer-motion'
import { Music, Guitar, Mountain, Plane, PenTool, BookOpen, Cpu, MessageCircle } from 'lucide-react'

const hobbies = [
  { name: "Creating Music", icon: <Music className="w-8 h-8" /> },
  { name: "Playing Instruments", icon: <Guitar className="w-8 h-8" /> },
  { name: "Trekking", icon: <Mountain className="w-8 h-8" /> },
  { name: "Traveling", icon: <Plane className="w-8 h-8" /> },
  { name: "Writing", icon: <PenTool className="w-8 h-8" /> },
  { name: "Learning New Things", icon: <BookOpen className="w-8 h-8" /> },
  { name: "Exploring Technology", icon: <Cpu className="w-8 h-8" /> },
  { name: "Talking with People", icon: <MessageCircle className="w-8 h-8" /> }
]

export default function Hobbies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Beyond The Work</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass aspect-square flex flex-col items-center justify-center p-6 rounded-3xl text-center group hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-cyan-500/50 cursor-pointer"
            >
              <div className="text-gray-500 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 mb-4">
                {hobby.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">{hobby.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
