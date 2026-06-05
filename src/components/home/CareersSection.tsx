import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CareersSection() {
  return (
    <section
      id="careers"
      className="section-padding bg-[#1a191d]"
    >
      <div className="max-w-[1300px] mx-auto px-[22px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          {/* Left - Title */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div>
              <p className="text-white/75 text-[0.9em] font-semibold mb-4">
                CAREERS
              </p>
              <h2 className="text-white text-[36px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
                ร่วมเป็นส่วนหนึ่งกับเรา
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Right - Description & CTA */}
          <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
            <div>
              <p className="text-white/80 text-[15px] leading-[1.65] mb-6">
                เราเฟ้นหาทีมงานมืออาชีพ พวกเราสนว่าคุณจะชำนาญอาวุธชนิดไหน
                เราสนแค่คุณหยิบอาวุธได้เหมาะสมกับสถานการณ์หรือเปล่า?
                ถ้าคุณคือคนคนนั้น…
              </p>
              <a href="/careers" className="btn-accent inline-block">
                คลิกที่นี่
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
