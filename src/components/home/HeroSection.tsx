"use client";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function HeroSection({ data }: { data?: any }) {
  const bgImage = data?.backgroundImage?.url || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop";
  
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Image with grayscale */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bgImage}')`,
          filter: "grayscale(100%)",
        }}
      />

      {/* Red Circle Overlay */}
      <div
        className="absolute top-0 z-[1] w-[800px] h-[780px] rounded-full hidden xl:block"
        style={{
          backgroundColor: "#d90a2c",
          mixBlendMode: "multiply",
          left: "42%",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] h-full flex items-center">
        <div className="w-full max-w-[1300px] mx-auto px-[22px]">
          <div className="w-full xl:w-[50%] xl:pl-[10%]">
            <AnimateOnScroll animation="animate-fade-in-up" delay={0}>
              <p className="text-white/75 text-[17px] font-light leading-[1.65] mb-8">
                CODESMASH - Digital Agency
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
              <h1 className="text-white text-[40px] md:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-8"
                  dangerouslySetInnerHTML={{ __html: data?.title?.replace(/\n/g, '<br />') || 'SMASH YOUR<br />LIMITS !!' }} />
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={400}>
              <p className="text-white/80 text-[17px] font-light leading-[1.65] mb-8 max-w-[500px]">
                {data?.subtitle || 'เราคือทีมพัฒนาซอฟต์แวร์มืออาชีพ พร้อมขับเคลื่อนธุรกิจของคุณด้วยเทคโนโลยีที่ทันสมัย'}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={600}>
              <a
                href={data?.ctaUrl || "#services"}
                className="btn-primary inline-block text-lg"
              >
                {data?.ctaText || 'Explore Services'}
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Social Links Sidebar */}
      <div className="absolute left-[100px] bottom-[140px] z-[5] hidden xl:flex flex-col items-center gap-4 text-white">
        <div className="w-[1px] h-[120px] bg-white/30" />
        <a href="#" className="hover:text-[#d90a2c] transition-colors" aria-label="Facebook">
          <FacebookIcon size={20} />
        </a>
        <a href="#" className="hover:text-[#d90a2c] transition-colors" aria-label="Instagram">
          <InstagramIcon size={20} />
        </a>
        <a href="#" className="hover:text-[#d90a2c] transition-colors" aria-label="LinkedIn">
          <LinkedinIcon size={20} />
        </a>
      </div>
    </section>
  );
}
