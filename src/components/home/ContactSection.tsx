import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {/* Map Image */}
        <AnimateOnScroll animation="animate-slide-in-left">
          <a
            href="https://www.google.com/maps/place/CODESMASH+CO.,+LTD./"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative h-[300px] xl:h-full min-h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="CODESMASH Office Location Map"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <MapPin size={16} className="text-[#d90a2c]" />
                  ดูแผนที่บน Google Maps
                </p>
              </div>
            </div>
          </a>
        </AnimateOnScroll>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Office Contact */}
          <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
            <div className="p-[50px_20px] xl:p-[100px_64px] h-full">
              <div className="mb-6">
                <div className="w-[63px] h-[63px] bg-[#d90a2c]/10 rounded-2xl flex items-center justify-center mb-4">
                  <Phone size={28} className="text-[#d90a2c]" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-4 leading-[1.3]">
                Office Contact
              </h3>
              <div className="space-y-3 text-[15px] leading-[1.65]">
                <p>
                  <strong>ติดต่องาน</strong>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-[#d90a2c] shrink-0" />
                  contact@codesmash.co.th
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-[#d90a2c] shrink-0" />
                  +66(0)64-928-7914
                </p>
                <div className="pt-2">
                  <p className="flex items-start gap-2">
                    <Clock size={14} className="text-[#d90a2c] shrink-0 mt-1" />
                    <span>
                      <strong>เวลาทำการ</strong>
                      <br />
                      จันทร์ – ศุกร์
                      <br />
                      9.00 – 17.00
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Office Location */}
          <AnimateOnScroll animation="animate-fade-in-up" delay={400}>
            <div className="p-[50px_20px] xl:p-[100px_64px] h-full bg-[rgba(136,136,136,0.05)]">
              <div className="mb-6">
                <div className="w-[38px] h-[38px] bg-[#d90a2c]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={20} className="text-[#d90a2c]" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-4 leading-[1.3]">
                Office Location
              </h3>
              <p className="text-[15px] leading-[1.65]">
                96 ชั้นที่ 1 หมู่ 1 ตำบลคลองหนึ่ง อำเภอคลองหลวง
                จังหวัดปทุมธานี 12120
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
