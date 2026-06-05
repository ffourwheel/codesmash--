import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const blogsRes = await payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const post = blogsRes.docs[0];
  const date = post?.publishedDate 
    ? new Date(post.publishedDate).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) 
    : "ไม่ระบุวันที่";

  if (!post) {
    return (
      <div className="pt-[14vh] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">404</h1>
          <p className="text-gray-600 mb-6">ไม่พบบทความที่ค้นหา</p>
          <Link href="/blog" className="btn-primary inline-block">กลับไปหน้า Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[14vh]">
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto px-[22px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#d90a2c] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            กลับไปหน้า Blog
          </Link>

          <AnimateOnScroll animation="animate-fade-in-up">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Calendar size={14} />
              {date}
            </div>
            <h1 className="text-[32px] xl:text-[42px] font-extrabold leading-[1.15] mb-8">
              {post.title}
            </h1>
            <div className="w-16 h-1 bg-[#d90a2c] mb-8" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
            <article className="space-y-6 prose max-w-none text-gray-700 text-[15px] leading-[1.9]">
              {post.content ? (
                <RichText data={post.content} />
              ) : (
                <p>ไม่มีเนื้อหา</p>
              )}
            </article>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
