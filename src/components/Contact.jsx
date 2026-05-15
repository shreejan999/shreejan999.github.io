import { motion } from 'framer-motion'
import { Mail, Camera, Video, Briefcase, Code } from 'lucide-react'

const socialLinks = [
  { icon: <Mail className="w-6 h-6" />, label: "Email", href: "shreejantamang976@gmail.com" },
  { icon: <Camera className="w-6 h-6" />, label: "Instagram", href: "https://www.instagram.com/shreejantamang/" },
  { icon: <Video className="w-6 h-6" />, label: "YouTube", href: "#" },
  { icon: <Briefcase className="w-6 h-6" />, label: "LinkedIn", href: "#" },
  { icon: <Code className="w-6 h-6" />, label: "GitHub", href: "https://github.com/shreejan999" }
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass rounded-[3rem] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-gray-400 font-light text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Whether you want to collaborate on a project, talk about music, or explore the intersection of technology and creativity—my inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-colors shadow-[0_0_0_rgba(0,229,255,0)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 font-medium">
            <span className="relative z-10">Say Hello</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
