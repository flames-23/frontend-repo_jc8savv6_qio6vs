import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Freelance Full Stack Developer',
    period: '2024–Present',
    details: 'Food-sharing app, corporate sites, automation tools. 30% faster delivery, 35% better UX.',
  },
  {
    title: 'KDD Educations',
    period: '2025–Present',
    details: 'Angular + Spring Boot + PostgreSQL full-stack apps.',
  },
  {
    title: 'Orionix Systems Intern',
    period: '2024',
    details: 'Built 15+ responsive pages, 20% faster backend performance.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0a0f21] py-24 text-cyan-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 opacity-40 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_75%_80%,rgba(217,70,239,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Experience</h2>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/40 via-fuchsia-400/40 to-violet-400/40" />
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative w-full md:w-[46%] ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
              >
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] hover:shadow-[0_0_60px_rgba(217,70,239,0.2)] transition-shadow">
                  <h3 className="text-lg font-semibold text-cyan-100">{exp.title}</h3>
                  <p className="text-sm text-cyan-200/70">{exp.period}</p>
                  <p className="mt-2 text-cyan-100/80">{exp.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
