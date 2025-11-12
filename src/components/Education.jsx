import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { degree: 'MCA — Lovely Professional University', period: '2022–2024' },
  { degree: 'B.Sc. — Computer Science', period: '2019–2022' },
]

export default function Education() {
  return (
    <section id="education" className="relative bg-[#0c1126] py-24 text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.12),transparent_55%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Education</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((it, idx) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)]"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/80 to-fuchsia-500/80 shadow-[0_0_18px_rgba(167,139,250,0.35)]" />
                <div>
                  <h3 className="font-semibold text-cyan-100">{it.degree}</h3>
                  <p className="text-sm text-cyan-200/70">{it.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
