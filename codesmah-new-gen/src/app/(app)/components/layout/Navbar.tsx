'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'หน้าหลัก', href: '/' },
  { label: 'งานของเรา', href: '/portfolio' },
  { label: 'ข่าวสาร', href: '/blog' },
  { label: 'ร่วมงานกับเรา', href: '/work-with-us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-widest text-white hover:text-[#e63329] transition-colors duration-200"
          >
            CODESMASH
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#a3a3a3] hover:text-white transition-colors duration-200 tracking-wide font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#a3a3a3] hover:text-white transition-colors p-1"
              aria-label="ค้นหา"
            >
              <Search size={18} />
            </button>

            {/* Mobile burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#a3a3a3] hover:text-white transition-colors p-1"
              aria-label="เมนู"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-20 pb-4' : 'max-h-0'
          }`}
        >
          <input
            type="text"
            placeholder="การค้นหาแนะนำ..."
            className="w-full bg-[#1a1a1a] border border-white/10 rounded px-4 py-2 text-sm text-white placeholder-[#525252] focus:outline-none focus:border-[#e63329] transition-colors"
          />
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2 border-t border-white/5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-2 text-[#a3a3a3] hover:text-white hover:bg-white/5 transition-colors text-sm tracking-wide rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
