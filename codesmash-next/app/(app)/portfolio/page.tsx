import { Metadata } from 'next'
import PortfolioClient from '@/components/portfolio/PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio | CODESMASH',
  description: 'ผลงานของเรา — เว็บไซต์, แอปมือถือ, และการออกแบบ',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-[90rem] mx-auto px-6 py-20 ">
        <header className="mb-16 ">
          <h1 className="text-8xl font-black mb-6 tracking-tighter">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8 font-medium">
            We have a lot of <span className="font-bold text-black">interesting projects. </span>
            Let's talk with us
          </p>
          <button className="bg-black text-white px-6 py-5 rounded-lg font-black hover:bg-red-600 transition text-lg ">
            Contact
          </button>
        </header>

        <section className="max-w-[90rem] mx-auto px-6 py-16">
          <PortfolioClient />
        </section>
      </main>
    </div>
  )
}
