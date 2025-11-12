import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glowButton =
  'relative inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold tracking-wide transition transform hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.35)]'

export default function Hero({ onHireClick, onProjectsClick }) {
  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden bg-[#070917] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays to amplify neon feel (don't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.20),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.18),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative mx-auto mb-6 h-36 w-36">
            <img
              src="https://avatars.githubusercontent.com/u/13426682?v=4"
              alt="Sheekha Mahapatro"
              className="h-36 w-36 rounded-full object-cover ring-2 ring-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/40 animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.20)]">
              Sheekha Mahapatro
            </span>
          </h1>
          <p className="mt-3 text-cyan-100/90">Full Stack Developer | React.js | Python | UI/UX Designer</p>
          <motion.p
            className="mt-4 text-lg text-cyan-100/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="[text-shadow:0_0_18px_rgba(34,211,238,0.55)]">
              Designing Tomorrow’s Interfaces, Today.
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={onHireClick} className={`${glowButton} bg-cyan-500/80 hover:bg-cyan-400/90`}>Hire Me</button>
          <button onClick={onProjectsClick} className={`${glowButton} bg-fuchsia-500/80 hover:bg-fuchsia-400/90`}>View Projects</button>
        </motion.div>
      </div>
    </section>
  )
}
