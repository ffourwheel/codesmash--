'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Real client logos downloaded from the original site
const clientLogos = [
  '/images/04fB4bdBM5k3aaZzaBcZaHjtm_hU4sy9dZoz.png',
  '/images/1UEODtkP1FZakkSdAo96Me1L-rv7_kMQupcQ.png',
  '/images/3Kc7-dgUivDCkL_mag1z9jZLlGhSYADZ7ttS.png',
  '/images/8Li8R1pXE65-H_aU9YRJHiHJsuajLPekGm2q.png',
  '/images/8yNXZXJd1i1QC_ganhqvpGECk4ql4ueluozC.png',
  '/images/AoJMTfiDCyr-fBt1GD1DolrdJ82sRm9vjrpm.png',
  '/images/LX_kWL9zFfLTBZirRecI05o3I8UQqDQ4OL86.png',
  '/images/PZ3B6nHOpr_KSMzq1RnrHFSBAhYC7KtSv51n.png',
  '/images/S674mcFpcJGG3_O-rirFl2i1DmW29Z2ZwqZF.png',
  '/images/WmwHFufst59ZuAvnOT1jIz5SKq5QicpRgYLF.png',
  '/images/aF5SWb2a-fENWC4vyZ2AZF08qUcEBGi1idhF.png',
  '/images/cabTPU_XJvHKly6b-Mn_ZRl61QycviaN9baw.png',
  '/images/dYIFRwhBUS1G58ETTM5iT4wVjMKPp_LNUgZF.png',
  '/images/ddwx9t0AKKujIb1Yre_PJnnyqfwDsNerTvIu.png',
  '/images/fj6Otj3l64FWb8s48dJipNYBB9Itl5yVMp96.png',
  '/images/lFuddeVThSXUnF0RS0nZcX5q1lAG3jQ7hQnG.png',
  '/images/vrXsuwOj1aPQCbfkBhykXvpMv5Cx2rtDG9wo.png',
  '/images/vv6sag-OjQjGxoY79i-JvivqwdCA9XZR3ETr.png'
];

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

function CoreValues() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className="w-full bg-white py-24"
      id="capabilities"
      aria-label="Capabilities"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="lg:w-[45%] flex flex-col w-full">
            <p className="text-[#4b5563] text-[12px] font-bold tracking-widest uppercase mb-6">
              CAPABILITIES
            </p>
            <h2 className="text-[40px] md:text-[50px] font-extrabold leading-[1.1] tracking-tight mb-16 text-black">
              ความเชี่ยวชาญของเรา
            </h2>

            <div className="w-full mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[14px] font-bold text-black">Work in process</span>
                <div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-sm">
                  86%
                </div>
              </div>
              <div className="w-full h-[4px] bg-[#f1f5f9] rounded-full overflow-hidden">
                <div className="h-full bg-[#d90a2c] w-[86%]" />
              </div>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:w-[55%] flex flex-col w-full pt-4">
            {CAPABILITIES.map((cap, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d90a2c] focus-visible:ring-offset-2 rounded-sm"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[18px] font-bold transition-colors duration-200 ${
                        isOpen ? 'text-[#d90a2c]' : 'text-black'
                      }`}
                    >
                      {cap.title}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#6b7280] text-[15px] leading-[1.8] font-light">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export function AboutStats() {
  return (
    <section className="w-full bg-white pb-32">
      {/* Full-width split images edge-to-edge */}
      <div className="flex w-full mb-24 h-[400px] lg:h-[600px]">
         <div className="w-full relative h-full">
           <Image 
              src="/images/nH81VxoQjBQ-IWNQT-uTsuehkWZHyY3bIEbX.jpg" 
              alt="Woman on phone" 
              fill 
              className="object-cover object-center" 
           />
         </div>
         <div className="w-full relative h-full">
           <Image 
              src="/images/2OqvYRk26WKTRxnbkVwuFc3RGBPgpmdMY5UD.jpg" 
              alt="Cafe scene" 
              fill 
              className="object-cover object-center" 
           />
         </div>
      </div>
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Stats Row */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 px-[2%]">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
               <div className="grid grid-cols-3 gap-1">
                 {[...Array(9)].map((_, i) => (
                   <div key={i} className="w-[6px] h-[6px] rounded-full bg-[#d90a2c]" />
                 ))}
               </div>
               <h3 className="text-[44px] font-extrabold text-black leading-none tracking-tighter">222+</h3>
            </div>
            <h4 className="font-extrabold text-[15px] text-black mb-4">Succeeded<br/>Projects</h4>
            <p className="text-black text-[14px] font-light leading-[1.8] max-w-md">
              กว่า 200 โครงการ ที่ CODESMASH ได้รับความไว้วางใจจากบริษัทชั้นนำมากมาย และเรามุ่งมั่นที่จะพัฒนาเทคโนโลยีต่างๆ เพื่อสนับสนุนก้าวที่สำคัญของท่านอย่างสุดความสามารถ
            </p>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
               <div className="grid grid-cols-3 gap-1">
                 {[...Array(9)].map((_, i) => (
                   <div key={i} className="w-[6px] h-[6px] rounded-full bg-[#d90a2c]" />
                 ))}
               </div>
               <h3 className="text-[44px] font-extrabold text-black leading-none tracking-tighter">58+</h3>
            </div>
            <h4 className="font-extrabold text-[15px] text-black mb-4">Our Customers</h4>
            <p className="text-black text-[14px] font-light leading-[1.8] max-w-md">
              ขอขอบพระคุณลูกค้าทุกท่านที่สนับสนุน และเป็นกำลังสำคัญที่ทำให้พวกเราสร้างสรรค์สิ่งดีๆขึ้นมาใหม่อย่างไม่หยุดยั้ง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MediaGallery() {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 md:py-24" id="our-clients">
      <div className="container mx-auto px-6">
        {/* Logo Grid (Corresponds to component-34 through component-51) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="w-[123px] h-[51px] relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <Image 
                src={logo} 
                alt={`Client Logo ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageMid() {
  return (
        <section className="w-full bg-white">
          <div className="w-full h-[500px] relative">
            <Image 
              src="/images/VWuYYI3q0f7xtVckO9r8jlSm_fW0kZysNogD.jpg"
              alt="Mid Image"
              fill
              className="object-cover object-center"
            />
          </div>
        </section>
  );
}

export default function CoreValuesPage() {
  return (
    <main>
      <CoreValues />
      <AboutStats />
      <MediaGallery />
      <ImageMid />
    </main>
  );
}