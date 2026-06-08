import Link from 'next/link';

export const metadata = {
  title: 'Work With Us | CODESMASH',
  description: 'Join the CODESMASH team.',
};

export default function CareersPage() {
  return (
    <div className="w-full bg-[#f8f8f8] dark:bg-[#0f172a] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[40px] md:text-[54px] font-extrabold tracking-tight text-black dark:text-white mb-4">
            Work With Us
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            มาร่วมสร้างสรรค์และพัฒนาไปด้วยกันกับเรา CODESMASH กำลังมองหาคนรุ่นใหม่ไฟแรงที่พร้อมจะทลายขีดจำกัด
          </p>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-[#0055FF] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Open Positions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            ขณะนี้เรายังไม่มีตำแหน่งที่เปิดรับสมัครอย่างเป็นทางการ แต่คุณสามารถส่ง Resume ของคุณมาให้เราพิจารณาได้ตลอดเวลา!
          </p>
          
          <Link 
            href="mailto:contact@codesmash.co.th" 
            className="inline-block bg-[#17161a] hover:bg-[#d90a2c] text-white px-8 py-4 rounded-md font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Send your Resume
          </Link>
        </div>

      </div>
    </div>
  );
}
