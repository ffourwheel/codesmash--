"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket, Clock, Award, Users } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  {
    icon: Rocket,
    number: 222,
    suffix: "+",
    label: "Succeeded\nProjects",
    description:
      "กว่า 200 โครงการ ที่ CODESMASH ได้รับความไว้วางใจจากบริษัทชั้นนำมากมาย และเรามุ่งมั่นที่จะพัฒนาเทคโนโลยีต่างๆ เพื่อสนับสนุนก้าวที่สำคัญของท่านอย่างสุดความสามารถ",
  },
  {
    icon: Clock,
    number: 15,
    suffix: "+",
    label: "Years of\nExperience",
    description:
      "ด้วยประสบการณ์กว่า 15 ปี ในวงการพัฒนาซอฟต์แวร์ CODESMASH เข้าใจถึงความต้องการที่แท้จริงขององค์กร และพร้อมตอบโจทย์ทุกความท้าทาย",
  },
  {
    icon: Award,
    number: 100,
    suffix: "%",
    label: "Quality\nResults",
    description:
      "เราให้ความสำคัญกับคุณภาพในทุกขั้นตอน ตั้งแต่การวิเคราะห์ ออกแบบ พัฒนา ไปจนถึงการส่งมอบงานที่สมบูรณ์แบบ เพื่อความพึงพอใจสูงสุดของลูกค้า",
  },
  {
    icon: Users,
    number: 24,
    suffix: "+",
    label: "Team\nMembers",
    description:
      "ทีมงานมืออาชีพกว่า 24 คน ที่พร้อมด้วยทักษะและความเชี่ยวชาญในหลากหลายสาขา พร้อมสร้างสรรค์ผลงานที่มีคุณภาพ",
  },
];

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-[40px] font-extrabold">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="section-padding">
      <div className="max-w-[1300px] mx-auto px-[22px]">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4">
          {stats.map((stat, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-fade-in-up"
              delay={index * 150}
            >
              <div className="max-w-[270px]">
                <div className="flex items-center gap-3 mb-1">
                  <stat.icon
                    size={28}
                    className="text-[#d90a2c]"
                    strokeWidth={2}
                  />
                  <CountUpNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-[1.05em] font-semibold leading-[1.3] mb-2 whitespace-pre-line">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
