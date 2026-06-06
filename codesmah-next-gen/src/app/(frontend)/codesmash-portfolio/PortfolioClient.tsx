'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Span } from 'next/dist/trace'
import { Square } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────
type Project = {
  id: number
  title: string
  category: string
  image: string
  imageType: string
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
    title: 'dtac Sustainability',
    category: 'Web Development',
    image: '/image/codesmash-portfolio/dtac Sustainability.jpg',
    imageType: 'squre',
  },
  {
    id: 2,
    title: 'Learning Center Management System',
    category: 'Web Development',
    image: '/image/codesmash-portfolio/learning center management system.jpg',
    imageType: 'rectangle',
  },
  {
    id: 3,
    title: 'SF Cinema Game Development',
    category: 'Gamification',
    image: '/image/codesmash-portfolio/SF Cinema Game Development .jpg',
    imageType: 'rectangle',
  },
  {
    id: 4,
    title: 'dtac Matching',
    category: 'Gamification',
    image: '/image/codesmash-portfolio/dtac Matching .jpg',
    imageType: 'squre',
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

  const getContainerStyle = (type: string) => {
    const baseClass = 'group relative overflow-hidden bg-gray-100 h-64 cursor-pointer rounded-md'

    if (type === 'squre') {
      // return `${baseClass} w-[424px] h-[424px]`
      return `${baseClass} col-span-1 h-[424px]`
    } else if (type === 'rectangle') {
      // return `${baseClass} w-[871px] h-[423px] md:col-span-2`
      return `${baseClass} col-span-2 h-[424px]`
    } else {
      return 'baseClass'
    }
  }

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <>
      {/* Filter Bar */}
      <div className="flex items-center">
        <p className="py-2 text-black text-base font-medium mr-3">Filter by :</p>
        <div className="flex flex-wrap  text-black text-base font-medium gap-4 ">
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
      </div>

      {/* Project Grid */}

      <div className="mt-10 grid grid-cols-3 gap-6 ">
        {visible.map((project) => (
          <div key={project.id} className={getContainerStyle(project.imageType)}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
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
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-black transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}
