'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between py-4">
        {/* Left - Name or Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-purple-400 tracking-tight hover:text-purple-300 transition"
        >
          Cesar.dev
        </Link>

        {/* Right - Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}
