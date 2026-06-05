'use client';

import Image from 'next/image';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: '/images/demo23_icon1-2.png',
    title: 'Digital Transformation',
    description: 'ทุกองค์กรที่ต้องการนำพาระบบไอทีเข้าไปใช้ในธุรกิจเพื่อรองรับการเปลี่ยนแปลงของยุคสมัย เราคือทีมงานคุณภาพที่ตอบโจทย์ความต้องการของคุณได้ทุกมิติ',
  },
  {
    icon: '/images/demo23_icon2.png',
    title: 'Media Planning',
    description: 'ธุรกิจที่มีการแข่งขันสูงบนโลกออนไลน์ หากไม่มีการวางแผลกลยุทธ์ที่แยบยล ก็ยากที่จะยืนหยัดอยู่ได้ และนี่คือสิ่งสำคัญที่ทุกองค์กรต้องมี',
  },
  {
    icon: '/images/demo23_icon3.png',
    title: 'Management System',
    description: 'สำหรับผู้บริหารแล้ว ไม่มีอะไรสำคัญไปกว่าการได้รับรู้การเคลื่อนไหวของทั้งองค์กร และเราคือทีมงานที่สามารถรังสรรค์ระบบที่ท่านต้องการได้อย่างเป็นมืออาชีพ',
  },
  {
    icon: '/images/demo23_icon4.png',
    title: 'Website/App Design',
    description: 'เว็บไซต์อาวุธที่มีอานุภาพที่สุดในยุคนี้ เพราะเข้าถึงได้ง่าย กระจายตัวได้เร็ว รองรับทุกอุปกรณ์ และยังเป็นเครื่องประดับองค์กรชั้นเยี่ยมอีกด้วย',
  },
];

export function FeatureGrid() {
  return (
    <section className="w-full bg-[#17161a] py-12 md:py-24" id="what-we-do">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-24">
          
          {/* Left Column: Heading */}
          <div className="flex flex-col justify-center">
            <div data-aos="fade-up" className="max-w-[420px]">
              <p className="text-[#a4a3a6] text-[0.9em] font-semibold mb-2 tracking-wider uppercase">
                What We Do
              </p>
              <h2 className="text-white text-[40px] md:text-[54px] font-extrabold leading-[1.05] tracking-tight">
                กว่า 10 ปี ที่เราได้เป็นส่วนหนึ่งในความสำเร็จของธุรกิจมากมาย
              </h2>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="flex flex-col justify-center">
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-white text-[18px] md:text-[19px] leading-relaxed mb-10 px-0 md:px-5">
                ในยุคสมัยที่ธุรกิจจำเป็นต้องขับเคลื่อนด้วยเทคโนโลยี สิ่งเหล่านี้คืออาวุธที่ CODESMASH ติดให้กับลูกค้า เพื่อความสำเร็จในทุกวันนี้
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 px-0 md:px-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-start text-left">
                    <div className="w-[40px] h-[40px] relative mb-4">
                      <Image 
                        src={feature.icon} 
                        alt={feature.title} 
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-white text-[19px] md:text-[20px] font-semibold tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#a4a3a6] text-[15.5px] leading-[1.65]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
