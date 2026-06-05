import { getPayload } from 'payload'
import config from '@/payload.config'

import { HeroSlider } from '@/components/sections/HeroSlider'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CompanyStats } from '@/components/sections/CompanyStats'
import { CustomersLogos } from '@/components/sections/CustomersLogos'
import { LatestBlogPosts } from '@/components/sections/LatestBlogPosts'
import { ContactCTA } from '@/components/sections/ContactCTA'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CODESMASH — SMASH YOUR LIMITS !!',
  description:
    'Digital Solution Consultant — Digital Transformation, Media Planning, Software Development & more.',
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  // Fetch all data in parallel using Payload Local API
  const [heroData, servicesData, statsData, customersData, blogData] =
    await Promise.all([
      payload.findGlobal({ slug: 'hero-slider' }),
      payload.find({
        collection: 'services',
        where: { status: { equals: 'published' } },
        sort: 'order',
        limit: 20,
      }),
      payload.findGlobal({ slug: 'company-stats' }),
      payload.find({
        collection: 'customers',
        sort: 'order',
        limit: 50,
      }),
      payload.find({
        collection: 'blogs',
        where: { status: { equals: 'published' } },
        sort: '-publishedAt',
        limit: 6,
      }),
    ])

  return (
    <main>
      <HeroSlider
        slides={heroData.slides as any}
        autoplayDelay={heroData.autoplayDelay}
        enableGrayscale={heroData.enableGrayscale}
      />

      <ServicesGrid services={servicesData.docs as any} />

      <CompanyStats stats={statsData.stats} style={statsData.backgroundStyle} />

      <CustomersLogos customers={customersData.docs} />

      <LatestBlogPosts posts={blogData.docs} />

      <ContactCTA />
    </main>
  )
}
