import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium mb-4">
              Contact
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-10">
              ติดต่อเรา
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#e63329]" />
                </div>
                <div>
                  <p className="text-xs text-[#525252] uppercase tracking-wider mb-1">ติดต่องาน</p>
                  <a
                    href="mailto:info@codesmash.co.th"
                    className="text-white hover:text-[#e63329] transition-colors"
                  >
                    info@codesmash.co.th
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#e63329]" />
                </div>
                <div>
                  <p className="text-xs text-[#525252] uppercase tracking-wider mb-1">Mobile</p>
                  <a
                    href="tel:+66649287914"
                    className="text-white hover:text-[#e63329] transition-colors"
                  >
                    +66(0)64-928-7914
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#e63329]" />
                </div>
                <div>
                  <p className="text-xs text-[#525252] uppercase tracking-wider mb-1">เวลาทำการ</p>
                  <p className="text-white">จันทร์ – ศุกร์ · 9.00 – 17.00</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#e63329]" />
                </div>
                <div>
                  <p className="text-xs text-[#525252] uppercase tracking-wider mb-1">ที่ตั้งสำนักงาน</p>
                  <p className="text-white leading-relaxed">
                    96 ชั้นที่ 1 หมู่ 1 ตำบลคลองหนึ่ง<br />
                    อำเภอคลองหลวง จังหวัดปทุมธานี 12120
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-white/8 aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.1!2d100.6242501!3d14.0028337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f81a20a8521%3A0x4e001f5d7dba4bb0!2sCODESMASH+CO.%2C+LTD.!5e0!3m2!1sth!2sth!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CODESMASH Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
