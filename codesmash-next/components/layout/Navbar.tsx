'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy navigation links based on original HTML
  const navLinks = [
    { name: 'หน้าหลัก', href: '/th/codesmash', active: true },
    { name: 'งานของเรา', href: '/th/codesmash-portfolio', active: false },
    { name: 'ข่าวสาร', href: '/th/codesmash-blog', active: false },
    { name: 'ร่วมงานกับเรา', href: '/th/page/work-with-us', active: false },
  ];

  return (
    <nav className="w-full bg-white z-50 sticky top-0 border-b border-gray-100 dark:bg-[#0f172a] dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-[100px] flex items-center justify-between">
        
        {/* Left Side Navigation Links */}
        <div className="hidden xl:flex items-center gap-[50px]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold transition-colors ${
                link.active 
                  ? 'text-[#d90a2c] dark:text-[#ff3b5c]' 
                  : 'text-black hover:text-[#d90a2c] dark:text-white dark:hover:text-[#ff3b5c]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl xl:text-[22.4px] font-bold text-black dark:text-white uppercase tracking-wider">
            CODESMASH
          </Link>
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-[50px]">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-black dark:text-white hover:text-[#d90a2c] transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

      </div>

      {/* Search Dropdown Panel */}
      <div 
        className={`w-full bg-white dark:bg-[#161617] overflow-hidden transition-all duration-400 ease-out absolute left-0 top-full ${
          isSearchOpen ? 'h-auto py-10 opacity-100 border-b border-gray-200 dark:border-gray-800' : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-4">
            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="search"
              placeholder="ค้นหา"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-2xl outline-none text-black dark:text-white placeholder-gray-400"
              autoFocus={isSearchOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
