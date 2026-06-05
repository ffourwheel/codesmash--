'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#e63329]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 border border-[#e63329]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63329] animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium">
            Digital Solution Consultant
          </span>
        </div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
        >
          <span className="block text-white">CODESMASH</span>
          <span className="block text-[#e63329] mt-1">DIGITAL</span>
          <span className="block text-white mt-1">SOLUTION</span>
          <span className="block text-[#737373] mt-1">CONSULTANT</span>
        </h1>

        {/* Description */}
        <p
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-[#a3a3a3] leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          ให้คำปรึกษาด้านไอที และเทคโนโลยี ครบวงจร ด้วยทีมงานมืออาชีพ
          และมีประสบการณ์กว่า 10 ปี
        </p>

        {/* CTA */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#e63329] hover:bg-[#c42b22] text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 text-sm tracking-wide"
          >
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-[#a3a3a3] hover:text-white px-8 py-3.5 rounded transition-all duration-200 text-sm tracking-wide"
          >
            ดูงานของเรา
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          {[
            { num: '10+', label: 'ปีประสบการณ์' },
            { num: '222+', label: 'โครงการสำเร็จ' },
            { num: '58+', label: 'ลูกค้า' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-white">{num}</div>
              <div className="text-xs text-[#525252] mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase text-[#525252]">Scroll</span>
        <ChevronDown size={16} className="text-[#525252]" />
      </div>
    </section>
  )
}
