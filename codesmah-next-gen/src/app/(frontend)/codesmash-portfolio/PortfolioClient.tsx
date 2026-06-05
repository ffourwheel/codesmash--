'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Span } from 'next/dist/trace'

// ── Types ──────────────────────────────────────────────────
type Project = {
  id: number
  title: string
  category: string
  image: string
}

// ── Data ───────────────────────────────────────────────────
const CATEGORIES = [
  'All',
  'Web Development',
  'A.I.',
  'Gamification',
  'interactive',
  'Machine Learning',
  'Mobile App',
  'Software Development',
  'UX/UI',
]

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: '/image/codesmash-portfolio/dtac Sustainability.jpg',
  },
  {
    id: 2,
    title: 'Food Delivery App',
    category: 'Mobile',
    image: '/image/codesmash-portfolio/learning center management system.jpg',
  },
]

const PAGE_SIZE = 6

// ── PortfolioClient ────────────────────────────────────────
export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(
    () =>
      activeCategory === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory],
  )

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(PAGE_SIZE)
  }

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center text-black text-base  font-medium">
        <p className="py-2">Filter by :</p>
        {CATEGORIES.map((cat, index) => (
          <div key={cat} className="flex items-center">
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-2 py-2 transition-all duration-200 cursor-pointer 
                ${activeCategory === cat ? 'text-red-400' : ''}`}
            >
              {cat}
            </button>
            {index < CATEGORIES.length - 1 && <span className="px-1">/</span>}
          </div>
        ))}
      </div>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={100}
              height={100}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-xs font-medium text-white/70 uppercase tracking-widest mb-1">
                {project.category}
              </span>
              <h3 className="text-white font-semibold text-lg">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-20">ยังไม่มีผลงานในหมวดนี้</p>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}
