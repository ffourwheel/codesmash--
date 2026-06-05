import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

// Mock data — in production fetched from Payload CMS API
const mockPosts = [
  {
    id: 1,
    slug: 'digital-transformation-2024',
    title: 'Digital Transformation ในยุค AI ปี 2024',
    excerpt: 'เทคโนโลยี AI กำลังเปลี่ยนแปลงโลกธุรกิจอย่างรวดเร็ว องค์กรที่ปรับตัวได้เร็วคือผู้ชนะ',
    date: '15 มีนาคม 2567',
    tag: 'Digital Transformation',
  },
  {
    id: 2,
    slug: 'web-app-trends',
    title: 'เทรนด์การพัฒนา Web & Mobile App ที่ธุรกิจต้องรู้',
    excerpt:
      'ในปี 2024 การพัฒนาแอปพลิเคชันมีการเปลี่ยนแปลงอย่างมาก ทั้ง Progressive Web Apps และ Cross-platform development',
    date: '28 กุมภาพันธ์ 2567',
    tag: 'Development',
  },
  {
    id: 3,
    slug: 'media-planning-guide',
    title: 'คู่มือ Media Planning สำหรับ SME ในยุคดิจิทัล',
    excerpt: 'การวางแผนสื่อออนไลน์สำหรับธุรกิจขนาดกลางและเล็กต้องใส่ใจในทุกรายละเอียด',
    date: '10 กุมภาพันธ์ 2567',
    tag: 'Media Planning',
  },
]

export default function NewsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium mb-4">
              News and Articles
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              สิ่งที่น่าสนใจ
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-white transition-colors group shrink-0"
          >
            ดูทั้งหมด
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group border border-white/8 bg-[#111111] rounded-lg overflow-hidden hover:border-[#e63329]/20 transition-all duration-300"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Placeholder image */}
              <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e63329]/5 to-transparent" />
                <div className="absolute inset-0 grid-bg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-4xl text-white/5 group-hover:text-white/10 transition-colors">
                    CS
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block text-xs text-[#e63329] border border-[#e63329]/30 px-2 py-0.5 rounded mb-3">
                  {post.tag}
                </span>
                <h3 className="font-display font-semibold text-white leading-snug mb-3 group-hover:text-[#e63329] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#737373] leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#525252]">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
