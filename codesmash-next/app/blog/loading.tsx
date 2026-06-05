export default function BlogLoading() {
  return (
    <div className="w-full bg-[#f8f8f8] dark:bg-[#0f172a] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Header Skeleton */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="h-12 w-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-sm">
              <div className="w-full h-[240px] bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
