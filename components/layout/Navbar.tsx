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
          Cesarpaublini
        </Link>

        {/* Right - Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
