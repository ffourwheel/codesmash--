'use client';

import Link from 'next/link';
import Image from 'next/image';

// ─── Types ──────────────────────────────────────────────────────────────────

interface Capability {
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CAPABILITIES: Capability[] = [
  {
    title: 'Understanding of Customers',
    description:
      'จุดเด่นของ CODESMASH คือ ความเข้าใจในตัวลูกค้า ธุรกิจ และองค์กรของเขาเหล่านั้น เพราะเรามองว่า หากเราไม่เข้าใจธุรกิจของลูกค้าแล้ว ก็ยากที่จะส่งเสริมเขาเหล่านั้นให้ประสบความสำเร็จได้ และนี่คือสิ่งที่เรายึดถือ',
  },
  {
    title: 'Services Mind',
    description:
      'พวกเราให้ความสำคัญกับความสบายใจในการทำงานร่วมกัน เราถึงระลึกอยู่เสมอว่า ลูกค้าคือเพื่อนที่ต้องการความช่วยเหลือ และเราไม่เคยหยุดที่จะบริการเขาเหล่านั้น อีกทั้ง เราได้พัฒนาระบบการบริการให้ดีขึ้นอย่างต่อเนื่อง เพื่อตอบสนองความต้องการของลูกค้าให้ได้อย่างเต็มที่',
  },
  {
    title: 'User Experience',
    description:
      'สิ่งสำคัญที่ทำให้องค์กรมหาชนหลายแห่งในประเทศไทย รับบริการจากเราอย่างต่อเนื่องมาหลายปี ก็คือ ความรวดเร็วในการติดต่อประสานงาน การดูแลหลังการขายที่ทันท่วงที ทีมงานที่พร้อมอยู่ตลอดเวลา นั่นเพราะว่า เรามีระบบงานในการบริหารจัดการงานที่เป็นขั้นตอนชัดเจน เพื่อรองรับการดูแลลูกค้าอย่างสุดความสามารถ',
  },
];

const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Digital Transformation',
    description:
      'ทุกองค์กรที่ต้องการนำพาระบบไอทีเข้าไปใช้ในธุรกิจเพื่อรองรับการเปลี่ยนแปลงของยุคสมัย เราคือทีมงานคุณภาพที่ตอบโจทย์ความต้องการของคุณได้ทุกมิติ',
    icon: '/images/demo23_icon1-2.png',
  },
  {
    id: 2,
    title: 'Media Planning',
    description:
      'ธุรกิจที่มีการแข่งขันสูงบนโลกออนไลน์ หากไม่มีการวางแผนกลยุทธ์ที่แยบยล ก็ยากที่จะยืนหยัดอยู่ได้ และนี่คือสิ่งสำคัญที่ทุกองค์กรต้องมี',
    icon: '/images/demo23_icon2.png',
  },
  {
    id: 3,
    title: 'Management System',
    description:
      'สำหรับผู้บริหารแล้ว ไม่มีอะไรสำคัญไปกว่าการได้รับการขับเคลื่อนของทั้งองค์กร และเราคือทีมงานที่สามารถรังสรรค์ระบบที่ท่านต้องการได้อย่างเป็นมืออาชีพ',
    icon: '/images/demo23_icon3.png',
  },
  {
    id: 4,
    title: 'Website / App Design',
    description:
      'เว็บไซต์คืออาวุธที่มีอานุภาพที่สุดในยุคนี้ เพราะเข้าถึงได้ง่าย กระจายตัวได้เร็ว รองรับทุกอุปกรณ์ และยังเป็นเครื่องประดับองค์กรชั้นเยี่ยมอีกด้วย',
    icon: '/images/demo23_icon4.png',
  },
];

// ─── ChevronIcon ─────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 text-gray-400 ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative w-full h-[760px] md:h-[760px] sm:h-[500px] flex items-center overflow-hidden grayscale"
      aria-label="Hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale mt-[-450px]"
        style={{
          backgroundImage: "url('/images/GNoAGw_q-61JFKPXO7AiYQOH4XFZ4Kh9sdIC.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-end max-w-[1400px]">
        <div className="w-[820px] h-[800px] rounded-full bg-black flex flex-col justify-center items-start pl-[140px] pr-[60px] text-white opacity-80">

          <div className="flex flex-col items-start w-[450px]">
            <h1 className="text-[40px] md:text-[54px] lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="block">CODESMASH</span>
              <span className="block">DIGITAL</span>
              <span className="block">SOLUTION</span>
              <span className="block">CONSULTANT</span>
            </h1>

            <p className="text-[14px] font-light leading-[1.65] mb-8 text-gray-300">
              ให้คำปรึกษาด้านไอที และเทคโนโลยี ครบวงจร ด้วยทีมงานมืออาชีพ และมีประสบการณ์กว่า 10 ปี
            </p>

            <Link
              href="/#what-we-do"
              className="inline-block bg-black border border-[#333] text-white px-6 py-3 text-sm font-bold hover:bg-[#d90a2c] hover:border-[#d90a2c] transition-colors duration-300 rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FeatureGrid ──────────────────────────────────────────────────────────────

function FeatureGrid() {
  return (
    <section
      className="w-full bg-[#161617] text-white py-12"
      id="what-we-do"
      aria-label="What We Do"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:w-[45%] flex flex-col pt-2">
            <p className="text-[#a1a1aa] text-[12px] tracking-widest uppercase mb-6 font-bold">
              WHAT WE DO
            </p>
            <h2 className="text-[44px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight">
              กว่า 10 ปี ที่เราได้เป็นส่วนหนึ่งในความสำเร็จของธุรกิจมากมาย
            </h2>
          </div>

          {/* Right */}
          <div className="lg:w-[55%] flex flex-col">
            <p className="text-[#d4d4d8] text-[18px] leading-[1.8] mb-16 font-light max-w-xl">
              ในยุคสมัยที่ธุรกิจจำเป็นต้องขับเคลื่อนด้วยเทคโนโลยี สิ่งเหล่านี้คืออาวุธที่ CODESMASH
              ติดให้กับลูกค้า เพื่อความสำเร็จในทุกวันนี้
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {SERVICES.map((service) => (
                <div key={service.id} className="flex flex-col">
                  <div className="w-[48px] h-[48px] relative mb-6 brightness-0 invert">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-[14px] leading-[1.8] font-light">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── CoreValues ───────────────────────────────────────────────────────────────

export function VisionMission() {
  return (
    <section className="w-full" id="vision-mission">
      <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[700px]">
        
        {/* Vision Section */}
        <div className="w-full md:w-1/2 h-full relative group overflow-hidden">
          {/* Background Image - Hardcoded for demo, replace with exact image from public/images/ */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/G30AChD-M3yz_82WKClEMYoAD45hyPLG1ozB.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20 z-10 text-white">
            <h4 className="text-[12px] font-bold tracking-widest uppercase mb-4 text-[#e4e4e7]">
              VISION
            </h4>
            <h2 className="text-[32px] md:text-[42px] font-extrabold leading-[1.1] tracking-tight mb-8">
              ธุรกิจบ้านเรา จะต้องเติบโต มั่นคง และยั่งยืนด้วยเทคโนโลยีข้อมูลที่ทันสมัย
            </h2>
            <div>
              <Link 
                href="/#what-we-do" 
                className="inline-block bg-[#161617] border border-transparent text-white px-[20px] py-[12px] text-sm font-extrabold hover:bg-transparent hover:border-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="w-full md:w-1/2 h-full relative group overflow-hidden">
          <div className="absolute inset-0 bg-[#8b0020]" />

          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50"
            style={{ backgroundImage: "url('/images/riy3wgmcjWLnVYXwO6no0NFhpdDcI3AbfsV3.jpg')" }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20 z-10 text-white">
            <h4 className="text-[12px] font-bold tracking-widest uppercase mb-4 text-[#fecaca]">
              MISSION
            </h4>
            <h2 className="text-[32px] md:text-[42px] font-extrabold leading-[1.1] tracking-tight mb-8 pr-12">
              เราจะขอเป็นที่ส่วนหนึ่งในการขับเคลื่อนธุรกิจของคุณอย่างมั่นคง
            </h2>
            <div>
              <Link
                href="/portfolio"
                className="inline-block bg-[#161617] border border-transparent text-white px-[20px] py-[12px] text-sm font-extrabold hover:bg-transparent hover:border-white transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── HeroFeaturePage (default export) ──────────────────────────────────────────

export default function HeroFeaturePage() {
  return (
    <main>
      <HeroSection />
      <FeatureGrid />
      <VisionMission />
    </main>
  );
}