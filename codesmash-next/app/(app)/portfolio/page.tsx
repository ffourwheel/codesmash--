import { fetchPortfolios } from '@/lib/payload-api';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio | CODESMASH',
  description: 'Our recent projects and case studies.',
};

export default async function PortfolioPage() {
  // Fetch data from Payload CMS API (handles cache/revalidation internally)
  const data = await fetchPortfolios();
  const portfolios = data.docs;

  return (
    <div className="w-full bg-[#f8f8f8] dark:bg-[#0f172a] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[40px] md:text-[54px] font-extrabold tracking-tight text-black dark:text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            ผลงานที่ผ่านมาของเราที่เราภาคภูมิใจ ในการเป็นส่วนหนึ่งของความสำเร็จ
          </p>
        </div>

        {/* Dynamic Grid */}
        {portfolios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((item) => (
              <Link href={`/portfolio/${item.slug}`} key={item.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  
                  {/* Featured Image */}
                  <div className="relative w-full h-[240px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {item.featuredImage && typeof item.featuredImage !== 'string' ? (
                      <img 
                        src={item.featuredImage.url} 
                        alt={item.featuredImage.alt || item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-[#d90a2c] text-sm font-semibold mb-2 uppercase tracking-wide">
                      {item.client || 'Client'}
                    </p>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                      {item.excerpt || 'Read more about this case study...'}
                    </p>

                    {/* Services Tags */}
                    {item.services && item.services.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.services.slice(0, 2).map((service) => (
                          <span key={service} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                            {service.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No portfolios found. Please add some in the Payload Admin panel.
          </div>
        )}

      </div>
    </div>
  );
}
