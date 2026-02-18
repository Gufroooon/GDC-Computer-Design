import { motion } from 'framer-motion'
import { CalendarDays, Clock3 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.35, ease: 'easeOut' },
}

function Updates({ onOpenUpdate }) {
  const updates = [
    {
      id: 'workshop',
      badge: 'Workshop',
      title: '2026 Design Trends Workshop: Embracing AI in Creativity',
      cta: 'Open Detail',
    },
    {
      id: 'tips',
      badge: 'Design Tips',
      title: 'Top 5 Rendering Shortcuts for 3ds Max Users',
      cta: 'Read More',
    },
    {
      id: 'announcement',
      badge: 'Announcement',
      title: 'New Student Enrollment for April Intake',
      cta: 'Check Schedule',
    },
  ]

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-3xl font-bold text-white">Latest Updates</h2>
        <p className="mt-1 text-slate-300">
          News, workshop schedule, and design tips from our community.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.article
          {...fadeUp}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/20 to-slate-900/70 p-6 shadow-[0_20px_40px_-20px_rgba(30,64,175,0.55)] lg:col-span-2"
        >
          <span className="rounded-full border border-blue-300/30 bg-blue-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-100">
            Workshop
          </span>
          <h3 className="mt-4 text-3xl font-semibold text-white">
            2026 Design Trends Workshop: Embracing AI in Creativity
          </h3>
          <p className="mt-3 max-w-2xl text-slate-200">
            Join an exclusive deep dive into how AI is shaping the future of
            architecture visualization and branding workflow.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-blue-300" />
              March 21, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-blue-300" />3 Hours
            </span>
          </div>
          <button
            onClick={() => onOpenUpdate?.(updates[0].id)}
            className="mt-6 rounded-xl border border-blue-300/30 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/25"
          >
            {updates[0].cta}
          </button>
        </motion.article>

        <div className="grid gap-4">
          {updates.slice(1).map((item, idx) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-blue-200">
                {item.badge}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <button
                onClick={() => onOpenUpdate?.(item.id)}
                className="mt-6 text-sm font-medium text-blue-300 transition hover:text-blue-200"
              >
                {item.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates
