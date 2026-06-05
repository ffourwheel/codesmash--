'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.reveal-item').forEach((item, i) => {
            setTimeout(() => {
              item.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
              item.style.opacity = '1'
              item.style.transform = 'translateY(0)'
            }, i * 200)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.querySelectorAll<HTMLElement>('.reveal-item').forEach((item) => {
      item.style.opacity = '0'
      item.style.transform = 'translateY(32px)'
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Vision */}
          <div className="reveal-item relative overflow-hidden rounded-lg bg-[#111111] border border-white/8 p-10 lg:p-14 group hover:border-[#e63329]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#e63329]" />
            <p className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium mb-6 pl-6">
              Vision
            </p>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-snug pl-6">
              ธุรกิจบ้านเรา จะต้องเติบโต มั่นคง และยั่งยืนด้วยเทคโนโลยีข้อมูลที่ทันสมัย
            </h3>
            <div className="pl-6 mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[#e63329] hover:text-white transition-colors group/btn"
              >
                View Services
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#e63329]/3 rounded-full blur-2xl" />
          </div>

          {/* Mission */}
          <div className="reveal-item relative overflow-hidden rounded-lg bg-[#e63329] p-10 lg:p-14 group">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium mb-6">
              Mission
            </p>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-snug">
              เราจะขอเป็นส่วนหนึ่ง ในการขับเคลื่อนธุรกิจ ของคุณอย่างมั่นคง
            </h3>
            <div className="mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group/btn"
              >
                View Projects
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-white/10 rounded-full" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 border border-white/5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
