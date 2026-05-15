import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

              <div className="w-full h-full bg-[#111] rounded-2xl relative overflow-hidden">

                {/* Profile Image */}
                <img
                  src="/profile.JPG"
                  alt="My Profile"
                  className="w-full h-full object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    Shreejan Tamang
                  </h3>

                  <p className="text-cyan-400 font-light tracking-widest text-sm uppercase">
                    The curious guy.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 md:-right-20 glass p-6 rounded-2xl border border-white/5 backdrop-blur-xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-5 h-5 text-orange-400" />

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Based In
                  </p>

                  <p className="font-medium text-white">
                    Pokhara, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-cyan-400" />

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Born In
                  </p>

                  <p className="font-medium text-white">
                    1998
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >

            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                More Than Just <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  One Path
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
            </div>

            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">

              <p>
                I am a multi-skilled and intensely curious individual,
                deeply passionate about the intersection of
                <span className="text-white font-medium">
                  {" "}music, creativity, technology, learning,
                  and human connection
                </span>.
              </p>

              <p>
                My journey hasn't been a straight line.
                It is built from many different experiences—from
                running small businesses, learning and teaching music,
                to working in a bakery, learning electronics repair,
                and diving into electronics manufacturing.
              </p>

              <p>
                Since 2022, I found a powerful avenue for growth
                within the manufacturing industry. Starting as a Technician,
                my drive to understand the 'how' and 'why'
                quickly propelled me to Production Supervisor,
                and eventually to Head of the Production Department.
              </p>

              <div className="p-6 mt-8 border-l-2 border-orange-500 bg-gradient-to-r from-orange-500/5 to-transparent rounded-r-xl">
                <p className="italic text-gray-400">
                  "Every role I've taken has been a masterclass
                  in problem-solving and leadership. I bring the
                  precision of an electronics technician, the creativity
                  of a musician, and the strategic vision of a production
                  head to everything I do."
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}