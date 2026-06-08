'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  // Using anchor links to prevent 404 errors since it's mostly a single page layout
  const navLinks = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'งานของเรา', href: '/portfolio' },
    { name: 'ข่าวสาร', href: '/blog' },
    { name: 'ร่วมงานกับเรา', href: '/careers' },
  ];

  return (
    <nav className="w-full bg-white z-50 sticky top-0 border-b border-gray-100 transition-colors duration-300">
      <div className="mx-auto px-4 xl:px-6 h-[100px] flex items-center justify-between max-w-[1600px]">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 -ml-4 md:-ml-8">
          <Link href="/" className="text-[24px] font-extrabold text-black uppercase tracking-wider">
            <img src="/images/tUltZ_aAWG4k6Eu4nnWlxWjhNjigycWh2o1X.png" alt="CODESMASH Logo" className="h-20 w-auto mr-2 inline-block" />
            CODESMASH
          </Link>
        </div>

        {/* Right Side: Navigation Links & Search */}
        <div className="hidden xl:flex items-center gap-[40px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  isActive 
                    ? 'text-black font-bold' 
                    : 'text-black hover:text-[red]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-black hover:text-[#d90a2c] transition-colors ml-4"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Search Dropdown Panel */}
      <div 
        className={`w-full bg-white overflow-hidden transition-all duration-400 ease-out absolute left-0 top-full ${
          isSearchOpen ? 'h-auto py-10 opacity-100 border-b border-gray-200' : 'h-0 opacity-0 pointer-events-none'
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
