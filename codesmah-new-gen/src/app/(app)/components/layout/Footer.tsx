import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display font-bold text-2xl tracking-widest text-white">
              CODESMASH
            </span>
            <p className="mt-4 text-sm text-[#737373] leading-relaxed max-w-sm">
              ให้คำปรึกษาด้านไอที และเทคโนโลยี ครบวงจร ด้วยทีมงานมืออาชีพ
              และมีประสบการณ์กว่า 10 ปี เพื่อขับเคลื่อนธุรกิจของคุณ
            </p>
            <div className="mt-6 flex gap-3">
              {['FB', 'IG', 'LI', 'TW'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/10 rounded flex items-center justify-center text-xs text-[#737373] hover:border-[#e63329] hover:text-white transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Office Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#e63329] mb-6">
              Office Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#737373] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@codesmash.co.th"
                  className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
                >
                  info@codesmash.co.th
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#737373] mt-0.5 shrink-0" />
                <span className="text-sm text-[#a3a3a3]">+66(0)64-928-7914</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-[#737373] mt-0.5 shrink-0" />
                <span className="text-sm text-[#a3a3a3]">
                  จันทร์ – ศุกร์<br />9.00 – 17.00
                </span>
              </li>
            </ul>
          </div>

          {/* Office Location */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#e63329] mb-6">
              Office Location
            </h3>
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-[#737373] mt-0.5 shrink-0" />
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                96 ชั้นที่ 1 หมู่ 1<br />
                ตำบลคลองหนึ่ง อำเภอคลองหลวง<br />
                จังหวัดปทุมธานี 12120
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/CODESMASH+CO.,+LTD."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs text-[#e63329] hover:text-white transition-colors border border-[#e63329]/30 hover:border-[#e63329] px-3 py-1.5 rounded"
            >
              <MapPin size={12} />
              ดูแผนที่
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#525252]">
            © {new Date().getFullYear()} CODESMASH CO., LTD. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {[
              { label: 'หน้าหลัก', href: '/' },
              { label: 'งานของเรา', href: '/portfolio' },
              { label: 'ข่าวสาร', href: '/blog' },
              { label: 'ร่วมงานกับเรา', href: '/work-with-us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#525252] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
