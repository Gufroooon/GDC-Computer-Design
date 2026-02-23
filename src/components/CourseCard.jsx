import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'

function CourseCard({ course, onEnroll }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-900/80 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.9)] backdrop-blur-md"
    >
      <div className="relative h-44 overflow-hidden">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 px-4 text-center text-sm font-medium text-slate-200">
            {course.title}
          </div>
        ) : (
          <img
            src={course.image}
            alt={course.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full border border-blue-300/40 bg-blue-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
          {course.badge}
        </span>
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
        <p className="text-sm text-slate-300">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-slate-200">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>{course.rating}</span>
          </div>
          <button
            onClick={() => onEnroll?.(course.courseName)}
            className="rounded-xl border border-blue-400/30 bg-blue-500/20 px-3 py-1.5 text-sm font-medium text-blue-100 transition hover:bg-blue-500/30"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default CourseCard
