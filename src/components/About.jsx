import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0d1f] text-cyan-50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 opacity-40 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.15),transparent_50%),radial-gradient(circle_at_90%_80%,rgba(217,70,239,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop" alt="Profile" className="h-full w-full object-cover opacity-90 mix-blend-luminosity" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">About Me</h2>
          <p className="mt-4 text-cyan-100/80 leading-relaxed">
            Passionate full‑stack developer specializing in React Hooks, TailwindCSS and user‑centric web solutions. I love crafting sleek, performant apps with intuitive UX and polished motion.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['React', 'Angular', 'Figma', 'Tailwind', 'Python'].map((s, i) => (
              <span key={s} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10 text-cyan-100 text-sm shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <div className="relative border-l-2 border-cyan-400/40 pl-6">
              {[
                { role: 'Freelance Full Stack Developer', years: '2024–Present' },
                { role: 'KDD Educations', years: '2025–Present' },
                { role: 'Orionix Systems Intern', years: '2024' },
              ].map((item, idx) => (
                <div key={idx} className="group relative pb-6">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  <h3 className="font-semibold text-cyan-100 group-hover:text-white transition-colors">{item.role}</h3>
                  <p className="text-sm text-cyan-200/70">{item.years}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
