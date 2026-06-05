import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const portfoliosRes = await payload.find({
    collection: "portfolios",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const project = portfoliosRes.docs[0];

  if (!project) {
    return (
      <div className="pt-[14vh] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">404</h1>
          <p className="text-gray-600 mb-6">ไม่พบโปรเจกต์ที่ค้นหา</p>
          <Link href="/portfolio" className="btn-primary inline-block">
            กลับไปหน้า Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[14vh]">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={typeof project.thumbnail === 'object' && project.thumbnail?.url ? project.thumbnail.url : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-[1300px] mx-auto">
          <p className="text-white/75 text-sm font-semibold mb-2">{project.clientName}</p>
          <h1 className="text-white text-[36px] xl:text-[48px] font-extrabold leading-[1.1]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#d90a2c] transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            กลับไปหน้า Portfolio
          </Link>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
            <div className="xl:col-span-2">
              <AnimateOnScroll animation="animate-fade-in-up">
                <h2 className="text-2xl font-extrabold mb-4">รายละเอียดโปรเจกต์</h2>
                <div className="text-gray-600 text-[15px] leading-[1.8] prose max-w-none">
                  {project.content ? (
                    <RichText data={project.content} />
                  ) : (
                    <p>ไม่มีรายละเอียด</p>
                  )}
                </div>
              </AnimateOnScroll>
            </div>

            <div>
              <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
                <div className="bg-[rgba(136,136,136,0.05)] rounded-2xl p-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-2">CLIENT</h3>
                    <p className="font-semibold">{project.clientName || "-"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 mb-3">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech: any, i: number) => (
                        <span key={i} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
