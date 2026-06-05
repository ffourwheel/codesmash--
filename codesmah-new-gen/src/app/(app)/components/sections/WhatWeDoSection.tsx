'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Digital Transformation',
    description:
      'ทุกองค์กรที่ต้องการนำพาระบบไอทีเข้าไปใช้ในธุรกิจเพื่อรองรับการเปลี่ยนแปลงของยุคสมัย เราคือทีมงานคุณภาพที่ตอบโจทย์ความต้องการของคุณได้ทุกมิติ',
    icon: 'https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-23/demo23_icon1-2.png',
  },
  {
    id: 2,
    title: 'Media Planning',
    description:
      'ธุรกิจที่มีการแข่งขันสูงบนโลกออนไลน์ หากไม่มีการวางแผนกลยุทธ์ที่แยบยล ก็ยากที่จะยืนหยัดอยู่ได้ และนี่คือสิ่งสำคัญที่ทุกองค์กรต้องมี',
    icon: 'https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-23/demo23_icon2.png',
  },
  {
    id: 3,
    title: 'Management System',
    description:
      'สำหรับผู้บริหารแล้ว ไม่มีอะไรสำคัญไปกว่าการได้รับรู้การเคลื่อนไหวของทั้งองค์กร และเราคือทีมงานที่สามารถรังสรรค์ระบบที่ท่านต้องการได้อย่างเป็นมืออาชีพ',
    icon: 'https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-23/demo23_icon3.png',
  },
  {
    id: 4,
    title: 'Website/App Design',
    description:
      'เว็บไซต์อาวุธที่มีอานุภาพที่สุดในยุคนี้ เพราะเข้าถึงได้ง่าย กระจายตัวได้เร็ว รองรับทุกอุปกรณ์ และยังเป็นเครื่องประดับองค์กรชั้นเยี่ยมอีกด้วย',
    icon: 'https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-demo-23/demo23_icon4.png',
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 120)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative border border-white/8 bg-[#111111] hover:bg-[#161616] hover:border-[#e63329]/30 rounded-lg p-8 transition-all duration-300 cursor-default"
    >
      {/* Red top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e63329]/0 to-transparent group-hover:via-[#e63329]/60 transition-all duration-500" />

      <div className="w-12 h-12 mb-6 flex items-center justify-center rounded bg-white/5 group-hover:bg-[#e63329]/10 transition-colors">
        <Image
          src={service.icon}
          alt={service.title}
          width={28}
          height={28}
          className="object-contain"
          unoptimized
        />
      </div>

      <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-[#e63329] transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-[#737373] leading-relaxed">{service.description}</p>
    </div>
  )
}

export default function WhatWeDoSection() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            กว่า 10 ปี ที่เราได้เป็นส่วนหนึ่งในความสำเร็จของธุรกิจมากมาย
          </h2>
          <p className="mt-6 max-w-2xl text-[#737373] leading-relaxed">
            ในยุคสมัยที่ธุรกิจจำเป็นต้องขับเคลื่อนด้วยเทคโนโลยี สิ่งเหล่านี้คืออาวุธที่
            CODESMASH ติดให้กับลูกค้า เพื่อความสำเร็จในทุกวันนี้
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
