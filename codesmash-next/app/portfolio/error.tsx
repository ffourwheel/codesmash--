'use client';

import { useEffect } from 'react';

export default function PortfolioError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Portfolio Fetch Error:', error);
  }, [error]);

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-[#f8f8f8] dark:bg-[#0f172a]">
      <div className="text-center px-6 max-w-lg">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Something went wrong!
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We encountered an error while trying to fetch the portfolio data. 
          Please make sure your Payload CMS local server is running.
        </p>

        <button
          onClick={() => reset()}
          className="bg-[#17161a] hover:bg-[#d90a2c] text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
