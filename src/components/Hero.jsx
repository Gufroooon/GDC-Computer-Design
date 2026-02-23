import { motion } from 'framer-motion'

function Hero({ onExploreCourses, onSeeWorks }) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
          Established Excellence
        </p>
        <h1 className="text-5xl font-bold leading-tight text-white xl:text-6xl">
          Global Design 
          <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Computer
          </span>
        </h1>
        <p className="max-w-xl text-lg text-slate-300">
          Master your creativity in the heart of Bogor. Professional training
          for architecture, visual communication, and digital design.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onExploreCourses}
            className="rounded-xl border border-blue-300/35 bg-blue-500 px-6 py-3 font-semibold text-white shadow-[0_0_22px_rgba(59,130,246,0.45)] transition hover:bg-blue-400"
          >
            Explore Courses
          </button>
          <button
            onClick={onSeeWorks}
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
          >
            See Works
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute -inset-8 rounded-3xl bg-blue-500/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-800/50 p-2 backdrop-blur-md">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1280&q=80"
            alt="Workspace mockup"
            className="h-[340px] w-full rounded-2xl object-cover md:h-[420px]"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
