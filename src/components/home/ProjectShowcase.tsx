import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

export default function ProjectShowcase({ portfolios = [] }: { portfolios?: any[] }) {
  if (!portfolios.length) return null;

  return (
    <section id="projects" className="section-padding bg-[rgba(136,136,136,0.05)]">
      <div className="max-w-[1300px] mx-auto px-[22px]">
        <AnimateOnScroll animation="animate-fade-in-up">
          <div className="text-center mb-12">
            <p className="text-[14px] text-[rgba(35,34,38,0.8)] font-semibold mb-2">
              PORTFOLIO
            </p>
            <h2 className="text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              ผลงานของเรา
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolios.map((project, index) => {
            const imageUrl = project.thumbnail?.url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";
            return (
              <AnimateOnScroll
                key={project.id || index}
                animation="animate-fade-in-up"
                delay={index * 150}
              >
                <a
                  href={`/portfolio/${project.slug}`}
                  className="group block cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold group-hover:text-[#d90a2c] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll animation="animate-fade-in-up" delay={500}>
          <div className="text-center mt-12">
            <a href="/portfolio" className="btn-primary inline-block">
              ดูโปรเจกต์ทั้งหมด
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
