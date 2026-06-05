import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/contact/ContactForm";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CODESMASH",
};

export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise });
  const settings = await payload.findGlobal({ slug: "site-settings" });

  return (
    <div className="pt-[14vh]">
      <section className="bg-[#17161a] section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <AnimateOnScroll animation="animate-fade-in-up">
            <p className="text-white/75 text-[0.9em] font-semibold mb-4">CONTACT</p>
            <h1 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              ติดต่อเรา
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimateOnScroll animation="animate-slide-in-left">
              <ContactForm />
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d90a2c]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-[#d90a2c]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">โทรศัพท์</h3>
                    <p className="text-gray-600">{settings.contactPhone || "+66(0)64-928-7914"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d90a2c]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-[#d90a2c]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">อีเมล</h3>
                    <p className="text-gray-600">{settings.contactEmail || "contact@codesmash.co.th"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d90a2c]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-[#d90a2c]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ที่อยู่</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {settings.address || "96 ชั้นที่ 1 หมู่ 1 ตำบลคลองหนึ่ง\nอำเภอคลองหลวง จังหวัดปทุมธานี 12120"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d90a2c]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-[#d90a2c]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">เวลาทำการ</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {settings.workingHours || "จันทร์ – ศุกร์\n9.00 – 17.00"}
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                {settings.googleMapsUrl && (
                  <div className="rounded-2xl overflow-hidden h-[250px] bg-gray-100 flex items-center justify-center mt-8">
                    <a
                      href={settings.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#d90a2c] font-semibold hover:underline"
                    >
                      <MapPin size={20} />
                      เปิดใน Google Maps
                    </a>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
