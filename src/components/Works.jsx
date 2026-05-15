import { motion } from 'framer-motion'

const works = [
  {
    id: 1,
    title: "Instruments Collections",
    category: "Music",
    image: "/music.png",
    aspect: "aspect-[4/3]"
  },
  {
    id: 2,
    title: "Trekking Photography",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    aspect: "aspect-[4/3]"
  },
  {
    id: 3,
    title: "Electronics Work",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
    aspect: "aspect-[4/3]"
  },
  {
    id: 4,
    title: "Travel Moments",
    category: "Life",
    image: "/me.jpg",
    aspect: "aspect-[3/4]"
  },
  {
    id: 5,
    title: "Production Environment",
    category: "Industrial",
    image: "/working.jpg",
    aspect: "aspect-[3/4]"
  },
  {
    id: 6,
    title: "Creative Projects",
    category: "Design",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop",
    aspect: "aspect-[3/4]"
  }
]

export default function Works() {
  return (
    <section id="works" className="py-32 bg-[#020202]">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Visual Archives
            </h2>

            <p className="text-gray-400 font-light tracking-widest uppercase text-sm">
              Glimpses into my world
            </p>
          </div>

          <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">
            View All Projects
          </button>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {works.map((work, idx) => (

            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}

              className={`group relative ${work.aspect} rounded-2xl overflow-hidden cursor-pointer`}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10" />

              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {work.category}
                </span>

                <h3 className="text-2xl font-heading font-semibold text-white">
                  {work.title}
                </h3>

              </div>
            </motion.div>

          ))}

        </div>
      </div>
    </section>
  )
}