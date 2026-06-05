import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {/* Vision */}
        <AnimateOnScroll animation="animate-slide-in-left">
          <div
            className="relative h-[400px] xl:h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-end"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop')",
            }}
          >
            <div className="relative z-10 w-full xl:w-[650px] p-[50px_20px] xl:p-0 xl:pr-16">
              <p className="text-white/75 text-[0.9em] font-semibold mb-4">
                VISION
              </p>
              <h2 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-10">
                ธุรกิจบ้านเรา จะต้องเติบโต มั่นคง
                และยั่งยืนด้วยเทคโนโลยีข้อมูลที่ทันสมัย
              </h2>
              <a href="/services" className="btn-primary inline-block">
                View Services&nbsp;
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Mission */}
        <AnimateOnScroll animation="animate-slide-in-right">
          <div
            className="relative h-[400px] xl:h-[650px] bg-cover bg-no-repeat flex items-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')",
            }}
          >
            <div className="relative z-10 w-full p-[50px_20px] xl:p-0 xl:ml-[100px] xl:w-[560px]">
              <p className="text-white/75 text-[0.9em] font-semibold mb-4">
                MISSION
              </p>
              <h2 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-10">
                เราจะขอเป็นที่ส่วนหนึ่ง ในการขับเคลื่อนธุรกิจ ของคุณอย่างมั่นคง
              </h2>
              <a href="/portfolio" className="btn-primary inline-block">
                View Projects
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
