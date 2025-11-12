import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#090e1c] py-10 text-cyan-100/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">“Code. Design. Innovate.”</p>
          <p className="text-xs">© {new Date().getFullYear()} Sheekha Mahapatro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
