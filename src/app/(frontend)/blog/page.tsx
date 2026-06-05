import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | CODESMASH",
  description: "บทความและข่าวสารจาก CODESMASH เกี่ยวกับเทคโนโลยีและการพัฒนาซอฟต์แวร์",
};

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });
  const blogsRes = await payload.find({
    collection: "blogs",
  });
  const posts = blogsRes.docs;

  return (
    <div className="pt-[14vh]">
      <section className="bg-[#17161a] section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <AnimateOnScroll animation="animate-fade-in-up">
            <p className="text-white/75 text-[0.9em] font-semibold mb-4">BLOG</p>
            <h1 className="text-white text-[40px] xl:text-[54px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              บทความ & ข่าวสาร
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-[1300px] mx-auto px-[22px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const imageUrl = typeof post.featuredImage === 'object' && post.featuredImage?.url ? post.featuredImage.url : "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop";
              const date = post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('th-TH') : "ไม่ระบุวันที่";
              return (
                <AnimateOnScroll key={post.id || index} animation="animate-fade-in-up" delay={index * 150}>
                  <a href={`/blog/${post.slug}`} className="group block">
                    <div
                      className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-4 bg-cover bg-center transition-transform duration-500"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-400" />
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{date}</p>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#d90a2c] transition-colors duration-300">
                      {post.title}
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
