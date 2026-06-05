import { fetchPosts } from '@/lib/payload-api';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | CODESMASH',
  description: 'Read our latest articles and updates.',
};

export default async function BlogPage() {
  const data = await fetchPosts();
  const posts = data.docs;

  return (
    <div className="w-full bg-[#f8f8f8] dark:bg-[#0f172a] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[40px] md:text-[54px] font-extrabold tracking-tight text-black dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            บทความ เทคนิค และข่าวสารล่าสุดจากทีมงาน CODESMASH
          </p>
        </div>

        {/* Dynamic Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  
                  {/* Featured Image */}
                  <div className="relative w-full h-[240px] overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                    {post.featuredImage && typeof post.featuredImage !== 'string' ? (
                      <img 
                        src={post.featuredImage.url} 
                        alt={post.featuredImage.alt || post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[#d90a2c] text-sm font-semibold mb-2 tracking-wide">
                      {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date'}
                    </p>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6 flex-grow">
                      {post.excerpt || 'อ่านบทความฉบับเต็มคลิก...'}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[#d90a2c] text-sm font-semibold flex items-center group-hover:underline">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No posts found. Please add some in the Payload Admin panel.
          </div>
        )}

      </div>
    </div>
  );
}
