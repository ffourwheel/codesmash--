'use client'

import { useEffect, useRef, useState } from 'react'

const capabilities = [
  {
    title: 'Understanding of Customers',
    description:
      'จุดเด่นของ CODESMASH คือ ความเข้าใจในตัวลูกค้า ธุรกิจ และองค์กรของเขาเหล่านั้น เพราะเรามองว่า หากเราไม่เข้าใจธุรกิจของลูกค้าแล้ว ก็ยากที่จะส่งเสริมเขาเหล่านั้นให้ประสบความสำเร็จได้',
  },
  {
    title: 'Services Mind',
    description:
      'พวกเราให้ความสำคัญกับความสบายใจในการทำงานร่วมกัน เราระลึกอยู่เสมอว่า ลูกค้าคือเพื่อนที่ต้องการความช่วยเหลือ และเราได้พัฒนาระบบการบริการให้ดีขึ้นอย่างต่อเนื่อง',
  },
  {
    title: 'User Experience',
    description:
      'สิ่งสำคัญที่ทำให้องค์กรมหาชนหลายแห่งในประเทศไทย รับบริการจากเราอย่างต่อเนื่องมาหลายปี คือ ความรวดเร็วในการติดต่อประสานงาน การดูแลหลังการขายที่ทันท่วงที ทีมงานที่พร้อมอยู่ตลอดเวลา',
  },
]

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          el.querySelectorAll<HTMLElement>('.reveal-cap').forEach((item, i) => {
            setTimeout(() => {
              item.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
              item.style.opacity = '1'
              item.style.transform = 'translateX(0)'
            }, i * 150)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.querySelectorAll<HTMLElement>('.reveal-cap').forEach((item) => {
      item.style.opacity = '0'
      item.style.transform = 'translateX(-20px)'
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: capabilities label + progress */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium mb-4">
              Capabilities
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-10">
              ความเชี่ยวชาญของเรา
            </h2>

            {/* Progress */}
            <div className="space-y-6">
              {[
                { label: 'Digital Solutions', pct: 92 },
                { label: 'Web & App Development', pct: 86 },
                { label: 'Media Planning', pct: 78 },
                { label: 'Management Systems', pct: 83 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs text-[#737373] mb-2">
                    <span>{label}</span>
                    <span className="font-mono">{pct}%</span>
                  </div>
                  <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#e63329] rounded-full transition-all duration-1500 ease-out"
                      style={{
                        width: animated ? `${pct}%` : '0%',
                        transitionDelay: '0.3s',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: capability cards */}
          <div className="space-y-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="reveal-cap border border-white/8 bg-[#111111] rounded-lg p-6 hover:border-[#e63329]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#e63329] mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-2">{cap.title}</h3>
                    <p className="text-sm text-[#737373] leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              number: '222+',
              label: 'Succeeded Projects',
              desc: 'กว่า 200 โครงการที่ CODESMASH ได้รับความไว้วางใจจากบริษัทชั้นนำมากมาย',
            },
            {
              number: '58+',
              label: 'Our Customers',
              desc: 'ขอขอบพระคุณลูกค้าทุกท่านที่สนับสนุนและเป็นกำลังสำคัญของเรา',
            },
            {
              number: '10+',
              label: 'Years Experience',
              desc: 'ด้วยประสบการณ์กว่า 10 ปี เราพร้อมขับเคลื่อนธุรกิจของคุณ',
            },
          ].map(({ number, label, desc }) => (
            <div
              key={label}
              className="border border-white/8 bg-[#111111] rounded-lg p-8 text-center hover:border-[#e63329]/20 transition-all duration-300"
            >
              <div className="font-display font-bold text-4xl text-[#e63329] mb-2">{number}</div>
              <div className="font-semibold text-white text-sm mb-3">{label}</div>
              <p className="text-xs text-[#525252] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
