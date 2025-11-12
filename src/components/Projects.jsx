import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Food Sharing Platform',
    stack: 'React, Node, Tailwind',
    role: 'Frontend & UX',
    link: '#',
    tags: ['#ReactJS', '#UIUX']
  },
  {
    title: 'Automation Toolkit',
    stack: 'Python, REST, CLI',
    role: 'Backend & DevOps',
    link: '#',
    tags: ['#PythonAutomation']
  },
  {
    title: 'Corporate Website',
    stack: 'Next.js, Tailwind',
    role: 'Full Stack',
    link: '#',
    tags: ['#ReactJS', '#UIUX']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0b1022] py-24 text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.12),transparent_55%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Projects</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/10 p-5 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(217,70,239,0.25),transparent_45%)] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-cyan-100">{p.title}</h3>
                <p className="text-sm text-cyan-200/70">{p.stack}</p>
                <p className="mt-1 text-cyan-100/80">Role: {p.role}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-cyan-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
