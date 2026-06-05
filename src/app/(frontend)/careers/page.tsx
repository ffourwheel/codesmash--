import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const metadata: Metadata = {
  title: "Careers | CODESMASH",
  description: "ร่วมเป็นส่วนหนึ่งของทีม CODESMASH",
};

export default async function CareersPage() {
  const payload = await getPayload({ config: configPromise });
  const careersRes = await payload.find({
    collection: "careers",
    where: {
      isActive: {
        equals: true,
      },
    },
  });

  const jobs = careersRes.docs;

  return (
    <div className="pt-[14vh]">
      <section className="bg-[#17161a] section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <AnimateOnScroll animation="animate-fade-in-up">
            <p className="text-white/75 text-[0.9em] font-semibold mb-4">CAREERS</p>
            <h1 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              ร่วมงานกับเรา
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job, index) => (
                <AnimateOnScroll key={job.id || index} animation="animate-fade-in-up" delay={index * 100}>
                  <div className="bg-[rgba(136,136,136,0.05)] rounded-2xl p-8 border border-gray-100 hover:border-[#d90a2c] transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-[#17161a]">{job.jobTitle}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      {job.department && (
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} className="text-[#d90a2c]" />
                          {job.department}
                        </div>
                      )}
                      {job.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={16} className="text-[#d90a2c]" />
                          {job.location}
                        </div>
                      )}
                      {job.employmentType && (
                        <div className="flex items-center gap-1">
                          <Clock size={16} className="text-[#d90a2c]" />
                          {job.employmentType === 'full-time' ? 'Full-time' : 'Part-time'}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-gray-600 text-sm mb-6 prose max-w-none line-clamp-4">
                      {job.description ? <RichText data={job.description} /> : null}
                    </div>

                    <a href="/contact" className="btn-primary inline-block text-sm">
                      สมัครตำแหน่งนี้
                    </a>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[rgba(136,136,136,0.05)] rounded-2xl">
              <h3 className="text-xl font-bold text-gray-500 mb-2">ยังไม่มีตำแหน่งงานเปิดรับในขณะนี้</h3>
              <p className="text-gray-400">กรุณาติดตามอัพเดทตำแหน่งงานว่างในภายหลัง</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
