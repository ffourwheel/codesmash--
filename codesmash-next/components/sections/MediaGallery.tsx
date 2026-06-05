'use client';

import Image from 'next/image';

// In a real application, this data could come from Payload CMS
const clientLogos = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  // Using placeholder logic since original images were split across 18 components
  src: `/images/client-logo-${i + 1}.png`,
  alt: `Client Logo ${i + 1}`,
}));

export function MediaGallery() {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 md:py-24" id="our-clients">
      <div className="container mx-auto px-6">
        
        {/* Title Section (Corresponds to component-33) */}
        <div className="text-center mb-12">
          <h2 className="text-[#17161a] text-[32px] md:text-[40px] font-extrabold tracking-tight">
            Our Clients
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            ความไว้วางใจจากพาร์ทเนอร์ของเรา
          </p>
        </div>

        {/* Logo Grid (Corresponds to component-34 through component-51) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <div 
              key={logo.id} 
              className="w-[123px] h-[51px] relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              {/* Note: src should map to your actual logo filenames. 
                  Placeholder styling used to mimic HTML behavior */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded text-xs text-gray-500">
                Logo {logo.id}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
