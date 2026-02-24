import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import CourseCard from '../components/CourseCard'
import Updates from '../components/Updates'
import Footer from '../components/Footer'
import MenuContent from '../components/MenuContent'
import sketchupImage from '../assets/images/sketchup.avif'
import autocadImage from '../assets/images/autocad.avif'
import graphicDesignImage from '../assets/images/graphic-design.jpg'

const courses = [
  {
    courseName: 'SketchUp',
    title: 'SketchUp Master',
    badge: 'Bestseller',
    rating: '4.9 (120 Reviews)',
    description: 'Learn to build professional 3D models and high-quality scenes.',
    image: sketchupImage,
  },
  {
    courseName: 'AutoCAD',
    title: 'Advanced AutoCAD',
    badge: 'Professional',
    rating: '4.8 (85 Reviews)',
    description: 'Industry standard 2D drafting and technical documentation skills.',
    image: autocadImage,
  },
  {
    courseName: 'Graphic Design',
    title: 'Graphic Design & Branding',
    badge: 'Creative',
    rating: '5.0 (42 Reviews)',
    description: 'Build complete visual identity with Adobe Creative workflows.',
    image: graphicDesignImage,
  },
]

function Home({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState({ type: 'home' })
  const isHomeView = activeMenu.type === 'home'
  const getDefaultSection = (courseName) =>
    courseName === 'Graphic Design'
      ? 'Program'
      : ['SketchUp', 'AutoCAD', '3D Studio Max'].includes(courseName)
      ? 'Level 1'
      : 'Dasar'
  const openCourseOverview = (courseName) =>
    setActiveMenu({
      type: 'course',
      course: courseName,
      section: getDefaultSection(courseName),
    })

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0f172a_45%,_#020617_100%)] text-white">
      <Sidebar
        onNavigate={onNavigate}
        onSelectMenu={setActiveMenu}
        activeMenu={activeMenu}
      />

      <main className="px-4 pb-8 pt-6 lg:ml-72 lg:px-10 lg:pt-10">
        <div className="mx-auto max-w-7xl space-y-16">
          {isHomeView ? (
            <>
              <Hero
                onExploreCourses={() => setActiveMenu({ type: 'courses' })}
                onSeeWorks={() => setActiveMenu({ type: 'works' })}
              />

              <section className="space-y-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-3xl font-bold text-white">Favorite Courses</h2>
                    <p className="mt-1 text-slate-300">
                      Our most popular training programs this month.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveMenu({ type: 'courses' })}
                    className="text-sm font-medium text-blue-300 transition hover:text-blue-200"
                  >
                    View All Programs
                  </button>
                </div>
                <div className="grid gap-5 xl:grid-cols-3">
                  {courses.map((course) => (
                    <CourseCard
                      key={course.title}
                      course={course}
                      onEnroll={openCourseOverview}
                    />
                  ))}
                </div>
              </section>

              <Updates
                onOpenUpdate={(updateId) => setActiveMenu({ type: 'update', updateId })}
              />

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
              >
                <Footer />
              </motion.div>
            </>
          ) : (
            <>
              <MenuContent selection={activeMenu} onSelectCourse={openCourseOverview} />
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
              >
                <Footer />
              </motion.div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
