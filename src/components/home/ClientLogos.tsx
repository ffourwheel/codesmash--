import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

const partners = [
  { name: "Partner 1", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+1" },
  { name: "Partner 2", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+2" },
  { name: "Partner 3", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+3" },
  { name: "Partner 4", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+4" },
  { name: "Partner 5", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+5" },
  { name: "Partner 6", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+6" },
  { name: "Partner 7", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+7" },
  { name: "Partner 8", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+8" },
  { name: "Partner 9", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+9" },
  { name: "Partner 10", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+10" },
  { name: "Partner 11", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+11" },
  { name: "Partner 12", logo: "https://via.placeholder.com/123x51/f5f5f5/999?text=Partner+12" },
];

export default function ClientLogos() {
  return (
    <section
      id="clients"
      className="section-padding bg-[rgba(136,136,136,0.05)]"
    >
      <div className="max-w-[1300px] mx-auto px-[22px]">
        <AnimateOnScroll animation="animate-fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[14px] text-[rgba(35,34,38,0.8)] font-semibold mb-2">
              TRUSTED BY
            </p>
            <h2 className="text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              พันธมิตรของเรา
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-y-16 gap-x-4 items-center justify-items-center">
          {partners.map((partner, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-scale-in"
              delay={index * 50}
            >
              <div className="img-hover-zoom cursor-pointer">
                <div className="w-[123px] h-[51px] relative flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={123}
                    height={51}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    unoptimized
                  />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
