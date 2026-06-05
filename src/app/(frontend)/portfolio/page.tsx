import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | CODESMASH",
  description: "ผลงานที่ผ่านมาของ CODESMASH - Web App, Mobile App, E-Commerce และอื่นๆ",
};

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function PortfolioPage() {
  const payload = await getPayload({ config: configPromise });
  const portfoliosRes = await payload.find({
    collection: "portfolios",
  });
  const projects = portfoliosRes.docs;

  return (
    <div className="pt-[14vh]">
      <section className="bg-[#17161a] section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <AnimateOnScroll animation="animate-fade-in-up">
            <p className="text-white/75 text-[0.9em] font-semibold mb-4">PORTFOLIO</p>
            <h1 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              ผลงานของเรา
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const imageUrl = typeof project.thumbnail === 'object' && project.thumbnail?.url ? project.thumbnail.url : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
              const technologies = project.technologies?.map((t: any) => t.name).join(", ") || "Web App";
              return (
                <AnimateOnScroll key={project.id || index} animation="animate-fade-in-up" delay={index * 100}>
                  <a href={`/portfolio/${project.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute top-4 left-4 bg-[#d90a2c] text-white text-xs px-3 py-1 rounded-full font-medium">
                        {technologies}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-[#d90a2c] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </a>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
