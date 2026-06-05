import { Code, Smartphone, ShoppingCart, Database, Palette, Server } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | CODESMASH",
  description: "บริการพัฒนาซอฟต์แวร์ครบวงจร - Web App, Mobile App, E-Commerce, Enterprise System",
};

const services = [
  {
    icon: Code,
    title: "Web Application",
    description: "พัฒนาเว็บแอปพลิเคชันที่ตอบโจทย์ธุรกิจ ด้วยเทคโนโลยีที่ทันสมัย รองรับการใช้งานหลากหลายแพลตฟอร์ม",
    features: ["React / Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "สร้างแอปมือถือทั้ง iOS และ Android ด้วย React Native หรือ Flutter ใช้งานง่าย ประสิทธิภาพสูง",
    features: ["React Native", "Flutter", "Cross-Platform", "Push Notifications"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "ระบบ E-Commerce ครบวงจร พร้อมระบบจัดการสินค้า ชำระเงิน และรายงานการขาย",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
  },
  {
    icon: Database,
    title: "Enterprise System",
    description: "พัฒนาระบบสำหรับองค์กรขนาดใหญ่ เช่น ERP, CRM, HRM ที่ปรับแต่งได้ตามความต้องการ",
    features: ["ERP System", "CRM Solution", "HRM Platform", "Custom Workflow"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "ออกแบบ UI/UX ที่สวยงามและใช้งานง่าย เน้นประสบการณ์ผู้ใช้เป็นหลัก",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "บริการ Cloud Infrastructure และ DevOps ดูแลระบบให้มีความเสถียรและปลอดภัย",
    features: ["AWS / GCP / Azure", "CI/CD Pipeline", "Docker & Kubernetes", "24/7 Monitoring"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[14vh]">
      {/* Hero */}
      <section className="bg-[#17161a] section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <AnimateOnScroll animation="animate-fade-in-up">
            <p className="text-white/75 text-[0.9em] font-semibold mb-4">SERVICES</p>
            <h1 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
              บริการของเรา
            </h1>
            <p className="text-white/60 text-[17px] leading-[1.65] max-w-[600px]">
              เราให้บริการพัฒนาซอฟต์แวร์ครบวงจร ตั้งแต่การวิเคราะห์ ออกแบบ พัฒนา ไปจนถึงดูแลระบบ
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} animation="animate-fade-in-up" delay={index * 100}>
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-[#d90a2c]/20 hover:shadow-xl transition-all duration-400 h-full bg-white">
                  <div className="w-16 h-16 bg-[#d90a2c]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d90a2c] transition-colors duration-400">
                    <service.icon size={32} className="text-[#d90a2c] group-hover:text-white transition-colors duration-400" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#d90a2c] rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
