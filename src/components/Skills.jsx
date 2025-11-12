import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Front-End',
    items: ['React.js', 'AngularJS', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Back-End',
    items: ['Python', 'REST APIs', 'SQL'],
  },
  {
    title: 'UI/UX',
    items: ['Figma', 'Prototyping', 'Responsive Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0b1022] py-24 text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_15%_30%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_85%_70%,rgba(217,70,239,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Skills & Tools</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)]"
            >
              <h3 className="text-xl font-semibold text-cyan-100">{cat.title}</h3>
              <ul className="mt-4 space-y-2 text-cyan-100/80">
                {cat.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-90">
          {['Meta Front-End Developer', 'Advanced React', 'UI/UX Foundations'].map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_16px_rgba(167,139,250,0.25)]">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
