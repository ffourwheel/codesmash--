'use client';

import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full h-[760px] md:h-[760px] sm:h-[500px] flex items-center overflow-hidden grayscale">
      {/* Background Image with Parallax effect simulation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://www.codesmash.co.th/storage/attachments/GNoAGw_q-61JFKPXO7AiYQOH4XFZ4Kh9sdIC.jpg')",
          backgroundAttachment: 'fixed' // Simulates Jarallax
        }}
      />
      
      {/* Overlay Filter equivalent to .background-filter */}
      <div className="absolute inset-0 z-0 bg-[#001434] opacity-0" />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        
        {/* Red Circle overlay blend mode via pseudo-element simulation or direct div */}
        <div className="absolute right-0 top-0 w-full h-full xl:w-[800px] xl:h-[780px] xl:left-[42%] xl:rounded-full bg-[#d90a2c] mix-blend-multiply md:rounded-tr-full z-[-1]" />

        <div className="w-full md:w-full xl:w-1/2 xl:pl-[10%] text-white">
          <h1 className="text-[40px] md:text-[54px] font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block">CODESMASH</span>
            <span className="block">DIGITAL</span>
            <span className="block">SOLUTION</span>
            <span className="block">CONSULTANT</span>
          </h1>
          
          <p className="text-[17px] font-light leading-[1.65] mb-8">
            ให้คำปรึกษาด้านไอที และเทคโนโลยี ครบวงจร ด้วยทีมงานมืออาชีพ และมีประสบการณ์กว่า 10 ปี
          </p>
          
          <Link 
            href="/th/codesmash#"
            className="inline-block bg-[#17161a] border border-[#17161a] text-white px-[18px] py-[14px] text-base font-extrabold hover:bg-[#d90a2c] hover:border-[#d90a2c] transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
