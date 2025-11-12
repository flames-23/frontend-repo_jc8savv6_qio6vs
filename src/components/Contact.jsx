import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0a0d1f] py-24 text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.12),transparent_55%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Get in Touch</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="space-y-4 text-cyan-100/90">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300" /> Noida, Uttar Pradesh</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> sheekhamahapatro.sm@gmail.com</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> +91 8700650140</p>
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 ring-1 ring-white/10 hover:bg-white/20 transition">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 ring-1 ring-white/10 hover:bg-white/20 transition">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="grid gap-4">
              <input placeholder="Your Name" className="rounded-lg bg-white/10 px-4 py-3 text-cyan-50 placeholder-cyan-200/50 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
              <input placeholder="Email" className="rounded-lg bg-white/10 px-4 py-3 text-cyan-50 placeholder-cyan-200/50 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
              <textarea placeholder="Message" rows={4} className="rounded-lg bg-white/10 px-4 py-3 text-cyan-50 placeholder-cyan-200/50 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
              <button type="button" className="rounded-full bg-cyan-500/80 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-400/90">Send Message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
