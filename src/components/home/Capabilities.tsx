"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const capabilities = [
  {
    title: "Understanding of Customers",
    description:
      "จุดเด่นของ CODESMASH คือ ความเข้าใจในตัวลูกค้า ธุรกิจ และองค์กรของเขาเหล่านั้น เพราะเรามองว่า หากเราไม่เข้าใจธุรกิจของลูกค้าแล้ว ก็ยากที่จะส่งเสริมเขาเหล่านั้นให้ประสบความสำเร็จได้ และเรานี่คือสิ่งที่เรายึดถือ",
  },
  {
    title: "Services Mind",
    description:
      "พวกเราให้ความสำคัญกับความสบายใจในการทำงานร่วมกัน เราถึงระลึกอยู่เสมอว่า ลูกค้าคือเพื่อนที่ต้องการความช่วยเหลือ และเราไม่เคยหยุดที่จะบริการเขาเหล่านั้น อีกทั้ง เราได้พัฒนาระบบการบริการให้ดีขึ้นอย่างต่อเนื่อง เพื่อตอบสนองความต้องการของลูกค้าให้ได้อย่างเต็มที่",
  },
  {
    title: "User Experience",
    description:
      "สิ่งสำคัญที่ทำให้องค์กรมหาชนหลายแห่งในประเทศไทย รับบริการจากเราอย่างต่อเนื่องมาหลายปี ก็คือ ความรวดเร็วในการติดต่อประสานงาน การดูแลหลังการขายที่ทันท่วงที ทีมงานที่พร้อมอยู่ตลอดเวลา นั่นเพราะว่า เรามีระบบงานในการบริหารจัดการงานที่เป็นขั้นตอนชัดเจน เพื่อรองรับการดูแลลูกค้าอย่างสุดความสามารถ",
  },
];

function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full">
      <div className="relative h-[6px] bg-gray-200 rounded-full overflow-visible">
        <div
          className="h-full bg-[#d90a2c] rounded-full relative transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%`, animation: "progressFill 1.5s ease-out" }}
        >
          <div className="absolute right-0 -top-[34px]">
            <span className="bg-black text-white text-xs px-2 py-1 rounded-[5px] font-medium">
              {percentage}%
            </span>
            <div className="absolute right-0 -bottom-[5px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[6px] border-t-[#17161a]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  title,
  description,
  isOpen,
  onClick,
}: {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-[1.05em] font-extrabold hover:text-[#d90a2c] transition-colors"
        onClick={onClick}
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[300px] pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="capabilities" className="section-padding">
      <div className="max-w-[1300px] mx-auto px-[22px]">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-16">
          {/* Left Column */}
          <div className="xl:col-span-7">
            <AnimateOnScroll animation="animate-fade-in-up">
              <div className="max-w-[550px]">
                <p className="text-[14px] text-[rgba(35,34,38,0.8)] font-semibold mb-2">
                  CAPABILITIES
                </p>
                <h2 className="text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-8">
                  ความเชี่ยวชาญของเรา
                </h2>
                <p className="text-[1.05em] text-[#17161a] font-semibold mb-2">
                  Work in process
                </p>
                <ProgressBar percentage={86} />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Accordion */}
          <div className="xl:col-span-5">
            <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
              <div className="xl:ml-[100px] mt-8 xl:mt-0">
                {capabilities.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
