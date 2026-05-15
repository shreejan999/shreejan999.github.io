import { motion } from 'framer-motion'
import { Cpu, Factory, Activity, Headphones, PenTool, Lightbulb, Code2, Cloud, Sparkles, Globe, Video, Mic } from 'lucide-react'

const skillCategories = [
  {
    title: "Technical & Industrial",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Electronics Enthusiast", icon: <Cpu className="w-5 h-5" /> },
      { name: "Production Management", icon: <Factory className="w-5 h-5" /> },
      { name: "Manufacturing Operations", icon: <Activity className="w-5 h-5" /> },
      { name: "Team Leadership", icon: <Globe className="w-5 h-5" /> },
      { name: "Quality Control", icon: <Sparkles className="w-5 h-5" /> },
    ]
  },
  {
    title: "Creative Arts",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Music Production", icon: <Headphones className="w-5 h-5" /> },
      { name: "Instrument Playing", icon: <Activity className="w-5 h-5" /> },
      { name: "Writing", icon: <PenTool className="w-5 h-5" /> },
      { name: "Creative Thinking", icon: <Lightbulb className="w-5 h-5" /> },
    ]
  },
  {
    title: "Digital Technologies",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Desiging", icon: <Activity className="w-5 h-5" /> },
      { name: "Video Editing", icon: <Video className="w-5 h-5" /> },
      { name: "AI Tools", icon: <Sparkles className="w-5 h-5" /> },
      { name: "Audio Editing", icon: <Mic className="w-5 h-5" /> },
    ]
  }
]

export default function Skills() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Arsenal of Skills</h2>
          <p className="text-gray-400 font-light tracking-widest uppercase text-sm">Industrial Precision Meets Creative Freedom</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors group"
            >
              <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
              <h3 className="text-2xl font-semibold mb-8 font-heading">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-light text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
