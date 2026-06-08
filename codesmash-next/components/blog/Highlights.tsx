'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Highlights() {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      title: 'ไอเดียน่ารัก เกาหลี ช่วยเหลือ คนท้อง ให้มีที่นั่งบนรถไฟฟ้าได้ง่ายๆ',
      image: '/images/gJ3RXUcl7p_ckhwRtC8vDzNhvDcIjQWnd72X.jpg'
    },
    {
      id: 2,
      title: 'COVID TRACKER แอปพลิเคชั่นคนไทย ที่ช่วยลดการแพร่ระบาดของโควิด',
      image: '/images/covid.png'
    },
    {
      id: 3,
      title: 'LiDAR ที่มากับ iPad Pro 2020 มันทำงานยังไงกันนะ??',
      image: '/images/QqthmeKFVIBY0Eo0fMAASauidkS0oXUEhfaw.jpg'
    }
  ];

  return (
    <>
      <section className="w-full bg-[#f8f8f8] py-24 pb-32" id="blog">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <h4 className="text-[60px] font-extrabold text-black mb-2 tracking-tight">
            Blog
          </h4>
          <h2 className="text-[#6b7280] text-[12px] font-bold tracking-widest uppercase mb-12">
            Interesting articles from CODESMASH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="flex flex-col group cursor-pointer"
                onClick={() => {
                  if (article.id === 1 || article.id === 2 || article.id === 3) setSelectedArticleId(article.id);
                }}
              >
                <div className="w-full aspect-square relative mb-6 overflow-hidden bg-gray-200">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[15px] font-extrabold text-black leading-[1.6]">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedArticleId === 1 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-6 overflow-y-auto">
          <div className="bg-white max-w-4xl w-full shadow-2xl relative my-auto flex flex-col max-h-[90vh]">
            
            <button 
              onClick={() => setSelectedArticleId(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="overflow-y-auto p-6 md:p-12">
              <div className="w-full aspect-[4/3] md:aspect-[16/9] relative mb-10 overflow-hidden shadow-sm">
                <Image 
                  src="/images/gJ3RXUcl7p_ckhwRtC8vDzNhvDcIjQWnd72X.jpg"
                  alt="ไอเดียน่ารัก เกาหลี ช่วยเหลือ คนท้อง"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-6 text-black text-[16px] md:text-[18px] leading-[1.8] max-w-3xl font-medium mx-auto">
                <p>
                  เกาหลีใต้ พัฒนาระบบง่ายๆ เพื่อช่วยให้คุณแม่มือใหม่ ที่กำลังตั้งท้องอยู่ สามารถเรียกร้องสิทธิในการนั่งที่สำหรับสตรีมีครรภ์ได้สะดวกสบายขึ้น โดยน่าจะใช้เป็นตัว Beacon ที่บ้านเรากำลังนิยมกันในหมู่นักพัฒนา
                </p>
                <p>
                  เมื่อผู้ตั้งครรภ์เดินทางมาใช้บริการรถไฟฟ้า จะได้ Tag แม่เหล็กติดตัวมาคนละชุด<br/>
                  เมื่อเดินเข้าประตูมา ระบบที่อยู่บริเวณนั้น จะเตือนขึ้นว่า มีสตรีมีครรภ์ขึ้นมาบนรถแล้ว<br/>
                  โดยให้มีสัญลักษณ์ไฟกระพริบ เพื่อให้คนที่นั่งอยู่ลุกขึ้น
                </p>
                <p>
                  ในแง่นี้ ผมมองว่า ผู้ใช้งาน จะได้รับสิทธิที่พึงได้อย่างเต็มที่<br/>
                  และอีกแง่นึง คนที่ใช้ละเมิดสิทธิของผู้อื่น ก็จะโดนแรงกดดันของสังคมไปในตัว<br/>
                  อีกทั้ง เมื่อไม่มีคนท้อง คนทั่วไปก็ยังสามารถนั่งที่ตรงนั้นได้ โดยไม่ต้องห่วงอีกด้วย<br/>
                  ว่าจะมีคนท้องแฝงตัวมารึเปล่า ^_^
                </p>
                <p>
                  ไปไอเดียที่น่ารักเลยทีเดียว
                </p>
                <p className="pt-4">
                  <a href="https://www.youtube.com/watch?v=Sald12plT-g" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline font-bold break-all">
                    https://www.youtube.com/watch?v=Sald12plT-g
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Popup for Article 2 */}
      {selectedArticleId === 2 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-6 overflow-y-auto">
          <div className="bg-white max-w-4xl w-full shadow-2xl relative my-auto mt-10 md:mt-auto flex flex-col max-h-[90vh]">
            
            <button 
              onClick={() => setSelectedArticleId(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="overflow-y-auto p-6 md:p-12">
              <div className="text-right mb-4 text-[#000080] text-sm font-bold">12/06/2023</div>
              
              <div className="w-full aspect-[4/3] md:aspect-[16/9] relative mb-10 overflow-hidden shadow-sm">
                <Image 
                  src="/images/covid.png"
                  alt="COVID TRACKER"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-6 text-black text-[15px] md:text-[16px] leading-[1.8] max-w-3xl font-light mx-auto">
                <p>
                  <strong className="font-extrabold">COVID TRACKER</strong> คือระบบที่ช่วยให้เจ้าหน้าที่สามารถติดตามผู้เข้าข่าย ลงบันทึกที่อยู่ในแผนที่ เห็นสถานะของผู้เข้าข่ายเฝ้าระวังหรือผู้มีความเสี่ยงติดเชื้อไวรัส Corona (COVID19) ได้อย่างเป็นระบบ ซึ่งระบบนี้พัฒนาออกมาเป็น Web Application ให้สามารถใช้งานได้จากทุกๆ อุปกรณ์ ซึ่ง <strong className="font-extrabold">COVID TRACKER</strong> จะมีองค์ประกอบของผู้ใช้งานอยู่ 3 ส่วน
                </p>
                <div className="space-y-5">
                  <p>
                    <strong className="font-extrabold">1. ประชาชน</strong> – สามารถเรียกให้ไปตรวจหรือไปรับตัวได้ผ่านระบบ โดยการแจ้งความจำนงผ่าน COVID TRACKER เจ้าหน้าที่จะติดต่อกลับไปเพื่อประเมินเบื้องต้น และดำเนินการตามขั้นตอนต่อไป (อยู่ในระหว่างเตรียมความพร้อมของเจ้าหน้าที่)
                  </p>
                  <p>
                    <strong className="font-extrabold">2. เจ้าหน้าที่ลงพื้นที่</strong> – สามารถลงทะเบียนผู้ที่มาจากพื้นที่เสี่ยง หรือ ผู้ที่มีอาการเข้าข่ายติดเชื้อได้ และระบบจะส่งข้อมูลไปที่ รพ. ในพื้นที่โดยอัตโนมัติ เมื่อพบผู้เข้าข่ายติดเชื้อ เจ้าหน้าที่สามารถคัดกรองผู้เข้าข่าย ด้วยกระบวนการสอบสวนโรค และยังสามารถเพิ่มข้อมูลผู้ใกล้ชิดผู้เข้าข่ายในแต่ละระดับ เพื่อลงทะเบียนผู้ใกล้ชิดได้ ในลักษณะเครือข่ายสังคม (Social Network)
                  </p>
                  <p>
                    <strong className="font-extrabold">3. เจ้าหน้าที่บริหารงานส่วนกลาง</strong> – ระบบนี้จะสามารถติดตามผู้เข้าข่าย หรือผู้ป่วยได้ผ่านเว็บไซต์ โดยจะเห็นผู้ป่วย แยกประเภทความรุนแรงของอาการ แบ่งเป็น
                  </p>
                  <ul className="list-disc pl-8 space-y-1 mt-2">
                    <li>ปลอดเชื้อ</li>
                    <li>เข้าข่าย</li>
                    <li>เฝ้าระวังเป็นพิเศษ</li>
                    <li>ติดเชื้อ</li>
                    <li>เสียชีวิต</li>
                  </ul>
                </div>

                <div className="w-full border border-gray-200 mt-10 mb-6">
                  <img src="/images/covid-tracker-1.png" alt="Flow Diagram" className="w-full h-auto block" />
                </div>
                
                <p className="font-bold">
                  ซึ่งส่วนกลางยังสามารถเห็นภาพรวมของข้อมูลทั้งหมดบนแผนที่ หากได้รับการลงข้อมูลอย่างถูกต้อง อีกทั้งยังสามารถประเมินการแพร่กระจายได้อย่างสะดวก
                </p>
                
                <div className="w-full border border-gray-200 mt-8 mb-6">
                  <img src="/images/covid-tracker-2.png" alt="Map of Thailand" className="w-full h-auto block" />
                </div>

                <div className="w-full border border-gray-200 mt-8 mb-6">
                  <img src="/images/covid-tracker-3.jpg" alt="Map with Popup Details" className="w-full h-auto block" />
                </div>
                
                <p className="font-bold">
                  เมื่อพบผู้ติดเชื้อ และผ่านกระบวนการสอบสวนโรคเรียบร้อยแล้ว เราสามารถดูหรือสืบค้นข้อมูลผู้ใกล้ชิดของผู้เข้าข่ายหรือผู้ป่วยได้ในรูปแบบ (Social Network)
                </p>

                <div className="w-full border border-gray-200 mt-8 mb-10">
                  <img src="/images/covid-tracker-4.png" alt="Social Network View" className="w-full h-auto block" />
                </div>

                <div className="pt-2 space-y-1">
                  <p className="font-bold">หากโรงพยาบาล หรือ หน่วยงานไหนสนใจ สามารถติดต่อขอใช้งานระบบได้ทาง inbox เลยครับ</p>
                  <p>
                    <span className="font-bold">ข้อมูลเพิ่มเติม</span> <a href="https://www.covidtracker.in.th/howto/" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline font-bold break-all">https://www.covidtracker.in.th/howto/</a>
                  </p>
                  <p className="text-[#0056b3] font-medium pt-1">
                    #uddev #codesmash #covidtracker #covid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Popup for Article 3 */}
      {selectedArticleId === 3 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-6 overflow-y-auto">
          <div className="bg-white max-w-4xl w-full shadow-2xl relative my-auto mt-10 md:mt-auto flex flex-col max-h-[90vh]">
            
            <button 
              onClick={() => setSelectedArticleId(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="overflow-y-auto p-6 md:p-12">
              <div className="text-right mb-4 text-[#000080] text-sm font-bold">12/06/2023</div>
              
              <div className="w-full aspect-[16/9] relative mb-4 overflow-hidden shadow-sm bg-black">
                <Image 
                  src="/images/LiDAR-header.png"
                  alt="LiDAR ที่มากับ iPad Pro 2020"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center mb-10 text-sm">
                <a href="https://www.apple.com" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline font-bold">https://www.apple.com</a>
              </p>
              
              <div className="space-y-8 text-black text-[15px] md:text-[16px] leading-[1.8] max-w-3xl font-light mx-auto">
                <p>
                  หลังจากที่ iPad Pro 2020 เปิดตัวไม่นาน ทาง Apple ก็ประกาศตัวเองว่ามีเทคโนโลยีที่ล้ำหน้าไปไกลที่สุด นั่นเพราะ iPad Pro ตัวใหม่นี้ ได้ติด Sensor ที่เรียกว่า LiDAR มากับกล้องด้วย ซึ่งวันนี้เราจะมาดูกันว่า เจ้า LiDAR Sensor นี้ มันทำงานยังไง
                </p>

                <p>
                  ก่อนจะถึงไปถึง LiDAR เรามารู้จักว่า เทคโนโลยีที่เกี่ยวข้อง มีอะไรที่ใช้กันอย่างแพร่หลายบ้าง
                </p>

                <div>
                  <div className="w-full border border-gray-200 mb-2">
                    <img src="/images/LiDAR-1.jpg" alt="Laser vs Ultrasonic vs Infrared" className="w-full h-auto block" />
                  </div>
                  <p className="text-[13px] break-all">
                    <a href="https://www.zentech.in.th/images/LASER_DISPLACEMENT/laser_displacement_sensor_lsh_series_measuring_range_wide_detection.jpg" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline">https://www.zentech.in.th/images/LASER_DISPLACEMENT/laser_displacement_sensor_lsh_series_measuring_range_wide_detection.jpg</a>
                  </p>
                </div>

                <p>
                  1. Laser ใช้ลักษณะของการยิงแสงเลเซอร์ไปตกกระทบที่วัตถุ เป็นลักษณะเส้นๆ เมื่อมีการสะท้อนกลับมาก็จะเทียบระยะเวลาตอนยิง เมื่อเราเทียบเวลาในการเริ่มยิง เทียบกับเวลาตอนรับแสงสะท้อนกลับมา เราก็จะรู้ระยะเวลาในการเดินทางของแสง แล้วเอาความเร็วแสงมาคำนวณแบบง่ายๆว่า ระยะเวลาเท่านี้ แสงเดินทางไปกลับรวมเป็นระยะทางเท่าไหร่
                </p>

                <div>
                  <div className="w-full border border-gray-200 mb-2">
                    <img src="/images/LiDAR-2.png" alt="Sender/Receiver" className="w-full h-auto block" />
                  </div>
                  <p className="text-[13px] break-all">
                    <a href="https://www.researchgate.net/profile/Constantinos_Psomopoulos/publication/299511206/figure/fig4/AS:614310762012748@1523474507814/The-Ultrasonic-sensor-function.png" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline">https://www.researchgate.net/profile/Constantinos_Psomopoulos/publication/299511206/figure/fig4/AS:614310762012748@1523474507814/The-Ultrasonic-sensor-function.png</a>
                  </p>
                </div>

                <p>
                  2. Ultrasonic ทำงานคล้ายกับ Laser แต่จะใช้คลื่นเสียง ซึ่งเป็นเทคโนโลยีหลักของเรือดำน้ำ ในการหาระยะของสิ่งกีดขวาง หรือ วัตถุต่างๆในระยะที่ไกลมากๆ และเป็นเทคโนโลยีที่ใช้งานง่าย มีประโยชน์หลากหลาย ซึ่งเราอาจจะเคยได้ยินว่า Tesla หรือ รถยนต์ที่ขับเคลื่อนด้วย AI มักจะใช้ ultrasonic ในการเป็นหูเป็นตารอบๆคัน ให้รู้ว่ามีอะไรอยู่ใกล้ๆรถเราบ้าง
                </p>

                <div>
                  <div className="w-full border border-gray-200 mb-2">
                    <img src="/images/LiDAR-3.jpg" alt="Infrared LEDs" className="w-full h-auto block" />
                  </div>
                  <p className="text-[13px] break-all">
                    <a href="https://www.scienceabc.com/wp-content/uploads/2016/06/Door-1.jpg" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline">https://www.scienceabc.com/wp-content/uploads/2016/06/Door-1.jpg</a>
                  </p>
                </div>

                <p>
                  3. Infrared เป็นลักษณะการกระจายแสงออกไปตกกระทบที่วัตถุ แล้วมีตัวรับแสงแบบพิเศษอีกตัว เพื่อใช้ในการตรวจสอบแสงที่สะท้อนกลับมา ซึ่งมีเทคโนโลยีที่น่าสนใจหลายๆตัวที่นำ infrared ไปใช้เป็นพื้นฐานในการตรวจจับวัตถุ เช่น กล้อง Microsoft Kinect เมื่อเราลองใช้กล้อง infrared ถ่ายภาพดู จะเห็นในลักษณะประมาณนี้
                </p>

                <div>
                  <div className="w-full border border-gray-200 mb-2">
                    <img src="/images/LiDAR-4.jpg" alt="Microsoft Kinect" className="w-full h-auto block" />
                  </div>
                  <p className="text-[13px] break-all">
                    <a href="https://i.ytimg.com/vi/dTKlNGSH9Po/hqdefault.jpg" target="_blank" rel="noreferrer" className="text-[#0056b3] hover:underline">https://i.ytimg.com/vi/dTKlNGSH9Po/hqdefault.jpg</a>
                  </p>
                </div>

                <p>
                  เมื่อวัตถุอยู่ใกล้ ก็จะเห็นดวงของ IR ใหญ่ อันไหนเล็กก็จะบ่งบอกว่าอยู่ไกลกว่า เพียงเท่านี้ วิศวกรของ Microsoft ก็สามารถสร้าง driver ในการแปลงสิ่งที่เห็น ให้เป็นการตรวจจับวัตถุได้แล้ว
                </p>

                <div className="pt-8">
                  <p className="mb-6">- - -<br/>โม้มานาน เข้าเรื่อง LiDAR ได้แล้วพี่ !!!</p>
                  
                  <p className="mb-6">55555 ก็ก่อนจะมารู้จัก LiDAR เราก็ต้องมารู้จักพื้นฐานก่อนสิ ไม่งั้นจะไม่เข้าใจนะ ^_^</p>
                  
                  <p className="font-extrabold mb-6">LiDAR = Light Detection And Ranging</p>
                  
                  <p className="mb-6">คือ การใช้แสงในการตรวจจับวัตถุและวัดระยะของวัตถุ จริงๆแล้ว LiDAR ไม่ใช่อะไรใหม่เลย มันถูกใช้ในโลกเรามากว่า 50 ปีแล้ว ในหมู่นักวิจัยต่างๆชาติได้นำเทคโนโลยีนี้มาใช้ในการตรวจจับวัตถุ และวัดระยะอยู่ตลอด เพียงแต่วันนี้ มันแปลกที่ มันสามารถมาอยู่บน Smart Device ได้แล้ววว !!!</p>
                  
                  <p className="mb-6 font-extrabold">แล้วมันมีมานานมากแล้ว ทำไมถึงไม่เอามาใส่มือถือตั้งนานแล้วล่ะ ??</p>
                  
                  <p className="mb-6 font-extrabold">ตอบสั้นๆเลย "ไฟไม่พอ"</p>
                  
                  <p className="mb-6">แค่นี้ก็เล่นเกมกันแทบจะไม่ได้แล้ว ถ้าเอาเทคโนโลยีพวกนี้มาใช้ ไหนจะต้อง ใช้ Processor ประมวลผลหนักขึ้น ก็ต้องใช้ไฟเยอะขึ้น แบตก็จะหมดเร็ว เป็นเราคงไม่ติดมาหรอก จริงมะ</p>
                  
                  <p>ซึ่งหลักการทำงานของ LiDAR ก็คือหลักการทำงาน จะใช้หลักการส่ง Laser ที่มีความยาวคลื่นสูง สแกนไปทั่วๆในระยะ เพื่อตรวจหาวัตถุ และแยกแยะพื้นที่ได้แม่นยำ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}