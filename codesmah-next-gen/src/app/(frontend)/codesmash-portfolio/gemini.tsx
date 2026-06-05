'use client'

import React, { useState } from 'react'

// Define Types
type Project = {
  id: number
  title: string
  category: string
}

const allProjects: Project[] = [
  { id: 1, title: 'dtac Sustainability', category: 'Web Development' },
  { id: 2, title: 'Learning Center Management System', category: 'Web Development' },
  { id: 3, title: 'SF Cinema Game Development', category: 'Gamification' },
  { id: 4, title: 'AI Recognition Tool', category: 'A.I.' },
  { id: 5, title: 'Corporate Intranet', category: 'Software Development' },
]

const categories = ['All', 'Web Development', 'A.I.', 'Gamification', 'Software Development']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6) // สำหรับปุ่ม More

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tighter">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            We have a lot of <span className="font-semibold text-black">interesting projects</span>.
            Let's talk with us
          </p>
          <button className="bg-black text-white px-10 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Contact
          </button>
        </header>

        {/* Filter Section */}
        <section className="mb-12">
          <p className="text-6xl font-bold uppercase tracking-widest mb-4 text-gray-400">
            Filter by : ssssss
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-6xl transition-all border-b-2 ${
                  selectedCategory === cat
                    ? 'text-black border-black font-semibold'
                    : 'text-gray-400 border-transparent hover:text-black'
                }`}
              >
                / {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <article key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-6 overflow-hidden transition-transform group-hover:scale-[1.02]">
                {/* Place Next/Image here */}
              </div>
              <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
              <p className="text-gray-500 font-medium">{project.category}</p>
            </article>
          ))}
        </section>

        {/* More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mb-20">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="text-lg font-bold border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition"
            >
              More
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-400 flex justify-between">
          <p>© 2026 CODESMASH CO., LTD.</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </footer>
    </div>
  )
}
