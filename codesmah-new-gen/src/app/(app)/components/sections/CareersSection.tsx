import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CareersSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-[#e63329] p-12 lg:p-20">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full" />
          <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] border border-white/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium mb-6">
              Careers
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              ร่วมเป็นส่วนหนึ่งกับเรา
            </h2>
            <p className="text-white/80 leading-relaxed mb-10 text-base lg:text-lg">
              เราเฟ้นหาทีมงานมืออาชีพ พวกเราสนว่าคุณจะชำนาญอาวุธชนิดไหน
              เราสนแค่คุณหยิบอาวุธได้เหมาะสมกับสถานการณ์หรือเปล่า? ถ้าคุณคือคนคนนั้น…
            </p>
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-3 bg-white text-[#e63329] font-bold px-8 py-4 rounded hover:bg-[#f8f8f8] transition-colors text-sm tracking-wide group"
            >
              สมัครร่วมงาน
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
