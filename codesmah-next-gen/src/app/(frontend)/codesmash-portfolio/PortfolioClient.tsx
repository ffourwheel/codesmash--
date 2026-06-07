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
    imageType: 'square',
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
    imageType: 'square',
  },
  {
    id: 5,
    title: 'dtac Migration',
    category: 'Software Development',
    image: '/image/codesmash-portfolio/data migration.jpg',
    imageType: 'rectangle',
  },
  {
    id: 6,
    title: 'dtac Work From Home',
    category: 'Gamification',
    image: '/image/codesmash-portfolio/dtac Work From Home.jpg',
    imageType: 'square',
  },
  {
    id: 7,
    title: 'ใจดีแจกสุข',
    category: 'Mobile App',
    image: '/image/codesmash-portfolio/jai dee jak suk.png',
    imageType: 'square',
  },
  {
    id: 8,
    title: 'Human Recognition',
    category: 'A.I.',
    image: '/image/codesmash-portfolio/Human Recognition.jpg',
    imageType: 'rectangle',
  },
  {
    id: 9,
    title: 'SNAKE LADDER [AirAsia x True]',
    category: 'Gamification',
    image: '/image/codesmash-portfolio/SNAKE LADDER [AirAsia x True].png',
    imageType: 'square',
  },
  {
    id: 10,
    title: 'dtac Gamification',
    category: 'Gamification',
    image: '/image/codesmash-portfolio/dtac Gamification.jpg',
    imageType: 'rectangle',
  },
  {
    id: 11,
    title: 'TMB Interactive Screen Interactive',
    category: 'Interactive',
    image: '/image/codesmash-portfolio/TMB Interactive Screen Interactive.jpg',
    imageType: 'rectangle',
  },
  {
    id: 12,
    title: 'Mercedes TROPHY Web Development',
    category: 'Web Development',
    image: '/image/codesmash-portfolio/Mercedes TROPHY Web Development.jpg',
    imageType: 'square',
  },
  {
    id: 13,
    title: 'ระบบติดตามและเฝ้าระวังการแพร่ระบาดเชื้อไวรัส COVID-19',
    category: 'Web Development',
    image: '/image/codesmash-portfolio/covid.png',
    imageType: 'rectangle',
  },
  {
    id: 14,
    title: 'Queue Reservation Systems',
    category: 'Web Development',
    image: '/image/codesmash-portfolio/Queue Reservation Systems .jpg',
    imageType: 'rectangle',
  },
]

const PAGE_SIZE = 8

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
    const baseClass =
      'relative overflow-hidden bg-gray-100 cursor-pointer rounded-md h-[424px] group'
    return baseClass // h-[424px] ทุก type เหมือนกัน
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

      <div className="mt-10 grid grid-cols-3 gap-8 ">
        {visible.map((project) => (
          <div
            key={project.id}
            className={project.imageType === 'square' ? 'col-span-1' : 'col-span-2'}
          >
            {/* Image */}
            <div className={getContainerStyle(project.imageType)}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="mt-3">
              <p className="text-base text-black font-bold">{project.title}</p>
              <h3 className="text-base font-lg text-gray-900 mt-1">{project.category}</h3>
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
            className="mt-20 px-30 py-3 border-1 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-red-600 hover:text-white transition-colors"
          >
            more
          </button>
        </div>
      )}
    </>
  )
}
