import { motion } from 'framer-motion'
import { ArrowLeft, KeyRound } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

function Login({ onNavigate }) {
  const { login } = useAuth()

  const handleLogin = () => {
    login()
    onNavigate('home')
  }

  return (
    <div className="grid min-h-screen place-content-center bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0f172a_42%,_#020617_100%)] p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/65 p-7 shadow-[0_30px_60px_-30px_rgba(59,130,246,0.55)] backdrop-blur-xl"
      >
        <button
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>
        <h1 className="text-3xl font-bold text-white">Login Portal</h1>
        <p className="mt-2 text-slate-300">
          Simulate authentication to access the GDC Profile menu.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none ring-blue-300/40 transition focus:ring-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none ring-blue-300/40 transition focus:ring-2"
          />
          <button
            onClick={handleLogin}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300/30 bg-blue-500 px-4 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition hover:bg-blue-400"
          >
            <KeyRound className="h-4 w-4" />
            Login
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
