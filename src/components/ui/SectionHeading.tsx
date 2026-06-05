'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  accentColor?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  accentColor = 'brand-red',
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {/* Accent line */}
      <div
        className={`
          mb-4 h-1 w-12 rounded-full bg-${accentColor}
          ${align === 'center' ? 'mx-auto' : ''}
        `}
      />

      <h2
        className={`
          text-3xl font-bold tracking-tight md:text-4xl
          ${light ? 'text-white' : 'text-brand-dark'}
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            mt-4 text-lg
            ${light ? 'text-white/70' : 'text-gray-500'}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
