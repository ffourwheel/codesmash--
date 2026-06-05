'use client'

// Placeholder client logo items — in production these come from Payload CMS
const clientLogos = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
  // Using placeholder boxes; swap with real logo <img> from Payload media API
}))

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="h-12 px-8 border border-white/8 rounded flex items-center justify-center bg-[#111111] hover:border-white/20 hover:bg-[#161616] transition-all duration-200 cursor-default shrink-0">
      <span className="text-xs font-mono text-[#525252] whitespace-nowrap tracking-wider uppercase">
        {name}
      </span>
    </div>
  )
}

export default function ClientsSection() {
  const doubled = [...clientLogos, ...clientLogos]

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#e63329] font-medium mb-4">
          Our Clients
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          58+ ลูกค้าที่ไว้วางใจเรา
        </h2>
        <p className="mt-4 text-sm text-[#737373] max-w-xl mx-auto">
          ขอขอบพระคุณลูกค้าทุกท่านที่สนับสนุน และเป็นกำลังสำคัญที่ทำให้พวกเราสร้างสรรค์สิ่งดีๆ
          ขึ้นมาใหม่อย่างไม่หยุดยั้ง
        </p>
      </div>

      {/* Marquee row 1 */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track gap-3 flex">
            {doubled.map((client, i) => (
              <LogoPlaceholder key={`a-${i}`} name={client.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee row 2 — reversed */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            className="gap-3 flex"
            style={{
              width: 'max-content',
              animation: 'marquee 35s linear infinite reverse',
            }}
          >
            {doubled.map((client, i) => (
              <LogoPlaceholder key={`b-${i}`} name={client.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
