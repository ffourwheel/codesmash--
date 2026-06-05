'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'

interface Service {
  id: string
  title: string
  slug: string
  shortDescription?: string
  icon?: { url: string; alt?: string }
  coverImage?: { url: string; alt?: string }
}

interface ServicesGridProps {
  services: Service[]
  heading?: string
  subheading?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function ServicesGrid({
  services,
  heading = 'What We Do',
  subheading = 'Digital solutions that transform your business',
}: ServicesGridProps) {
  return (
    <section
      id="services"
      className="bg-white py-[var(--spacing-section)] max-md:py-[var(--spacing-section-mobile)]"
    >
      <div className="mx-auto max-w-[1300px] px-5">
        <SectionHeading
          title={heading}
          subtitle={subheading}
          accentColor="brand-red"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service as any} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
