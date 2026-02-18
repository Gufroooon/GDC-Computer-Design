import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  CircleUserRound,
  Contact2,
  FolderOpen,
  House,
  LogIn,
  LogOut,
  Menu,
  PenTool,
  Ruler,
  SquareCode,
  Waypoints,
  X,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const courses = [
  {
    name: 'SketchUp',
    icon: Waypoints,
    submenu: ['Dasar', 'Menengah', 'Lanjutan'],
  },
  {
    name: 'AutoCAD',
    icon: Ruler,
    submenu: ['Dasar', 'Menengah', 'Lanjutan'],
  },
  {
    name: '3D Studio Max',
    icon: FolderOpen,
    submenu: ['Dasar', 'Menengah', 'Lanjutan'],
  },
  {
    name: 'Graphic Design',
    icon: PenTool,
    submenu: ['Dasar', 'Menengah', 'Lanjutan'],
  },
  {
    name: 'DTP',
    icon: Contact2,
    submenu: ['Dasar', 'Menengah', 'Lanjutan'],
  },
  {
    name: 'Web Design',
    icon: SquareCode,
    submenu: ['Dasar', 'Menengah', 'Lanjutan'],
  },
]

function SidebarContent({ onNavigate, onClose, onSelectMenu, activeMenu }) {
  const [openCourse, setOpenCourse] = useState(null)
  const { isAuthenticated, logout } = useAuth()

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout()
      onSelectMenu?.({ type: 'home' })
      onClose?.()
      return
    }
    onNavigate('login')
    onClose?.()
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 px-5">
        <div className="inline-flex items-center gap-3">
          <div className="grid h-9 w-9 place-content-center rounded-xl bg-blue-500 font-bold text-white shadow-[0_0_16px_rgba(59,130,246,0.55)]">
            G
          </div>
          <div>
            <p className="text-lg font-semibold text-white">GDC</p>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
              Computer Design
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-2 px-4">
        <button
          onClick={() => {
            onSelectMenu?.({ type: 'home' })
            onClose?.()
          }}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left font-medium transition ${
            activeMenu?.type === 'home'
              ? 'bg-blue-500/20 text-blue-100'
              : 'text-slate-200 hover:bg-white/5'
          }`}
        >
          <House className="h-4 w-4" />
          Home
        </button>

        <div className="pt-2">
          <p className="mb-2 px-3 text-xs uppercase tracking-[0.2em] text-slate-400">
            Courses
          </p>
          <div className="space-y-1">
            {courses.map((course) => {
              const Icon = course.icon
              const isOpen = openCourse === course.name

              return (
                <div key={course.name}>
                  <button
                    onClick={() => {
                      setOpenCourse((prev) =>
                        prev === course.name ? null : course.name,
                      )
                      onSelectMenu?.({
                        type: 'course',
                        course: course.name,
                        section: 'Dasar',
                      })
                    }}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-slate-200 transition hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <Icon className="h-4 w-4" />
                      {course.name}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 pb-1 pl-9">
                          {course.submenu.map((item) => (
                            <button
                              key={`${course.name}-${item}`}
                              onClick={() => {
                                onSelectMenu?.({
                                  type: 'course',
                                  course: course.name,
                                  section: item,
                                })
                                onClose?.()
                              }}
                              className={`block w-full rounded-lg px-2 py-1.5 text-left text-xs transition ${
                                activeMenu?.type === 'course' &&
                                activeMenu?.course === course.name &&
                                activeMenu?.section === item
                                  ? 'bg-blue-500/15 text-blue-200'
                                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </nav>

      <div className="mt-6 border-t border-white/10 px-4 pt-4">
        <p className="mb-2 px-3 text-xs uppercase tracking-[0.2em] text-slate-400">
          General
        </p>
        <div className="space-y-1">
          {isAuthenticated ? (
            <button
              onClick={() => {
                onSelectMenu?.({ type: 'profile' })
                onClose?.()
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                activeMenu?.type === 'profile'
                  ? 'bg-blue-500/20 text-blue-100'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <CircleUserRound className="h-4 w-4" />
              GDC Profile
            </button>
          ) : null}
          <button
            onClick={() => {
              onSelectMenu?.({ type: 'contact' })
              onClose?.()
            }}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
              activeMenu?.type === 'contact'
                ? 'bg-blue-500/20 text-blue-100'
                : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <Contact2 className="h-4 w-4" />
            Contact Us
          </button>
        </div>
      </div>

      <div className="mt-auto p-4">
        <button
          onClick={handleAuthAction}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300/30 bg-blue-500 px-4 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition hover:bg-blue-400"
        >
          {isAuthenticated ? (
            <>
              <LogOut className="h-4 w-4" />
              Logout
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              Login Portal
            </>
          )}
        </button>
      </div>
    </div>
  )
}

function Sidebar({ onNavigate, onSelectMenu, activeMenu }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/80 p-4 backdrop-blur lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100"
        >
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </div>

      <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-lg lg:block">
        <SidebarContent
          onNavigate={onNavigate}
          onSelectMenu={onSelectMenu}
          activeMenu={activeMenu}
        />
      </aside>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/55 lg:hidden"
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-white/10 bg-slate-950/95 backdrop-blur lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-4 top-4 rounded-md bg-white/5 p-2 text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
              <SidebarContent
                onNavigate={onNavigate}
                onClose={() => setMobileOpen(false)}
                onSelectMenu={onSelectMenu}
                activeMenu={activeMenu}
              />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
