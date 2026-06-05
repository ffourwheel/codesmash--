'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface HeroSlide {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage: {
    url: string
    alt?: string
    width: number
    height: number
  }
  overlayOpacity?: number
}

interface HeroSliderProps {
  slides: HeroSlide[]
  autoplayDelay?: number
  enableGrayscale?: boolean
}

export function HeroSlider({
  slides,
  autoplayDelay = 5000,
  enableGrayscale = true,
}: HeroSliderProps) {
  if (!slides || slides.length === 0) return null

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-white/50 !opacity-100 !inline-block !rounded-full !mx-1 cursor-pointer',
          bulletActiveClass: '!bg-[var(--color-brand-red)] !scale-125',
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative flex h-full w-full items-center">
                {/* Background Image */}
                <div
                  className={`absolute inset-0 z-0 ${
                    enableGrayscale ? 'grayscale' : ''
                  }`}
                >
                  {slide.backgroundImage?.url && (
                    <Image
                      src={slide.backgroundImage.url}
                      alt={slide.backgroundImage.alt || slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="100vw"
                    />
                  )}
                </div>

                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 z-[1] bg-[var(--color-brand-dark)]"
                  style={{
                    opacity: (slide.overlayOpacity ?? 60) / 100,
                  }}
                />

                {/* Red Accent Circle — replicates legacy ::before */}
                <div
                  className="
                    absolute right-0 top-0 z-[2]
                    hidden xl:block
                    h-[780px] w-[800px]
                    rounded-full
                    bg-[var(--color-brand-red)]
                    mix-blend-multiply
                  "
                  style={{ left: '42%' }}
                />
                {/* Mobile: full-width red overlay with rounded top-right */}
                <div
                  className="
                    absolute inset-0 z-[2]
                    block xl:hidden
                    bg-[var(--color-brand-red)]
                    mix-blend-multiply
                    rounded-tr-[100%]
                  "
                />

                {/* Text Content */}
                <div className="relative z-10 mx-auto w-full max-w-[1300px] px-5 xl:px-[10%]">
                  <div className="max-w-2xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="
                        mb-8 text-[40px] font-bold leading-[1.05]
                        tracking-tight text-white
                        xl:text-[54px]
                      "
                    >
                      {slide.title}
                    </motion.h1>

                    {slide.subtitle && (
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="
                          mb-8 text-[17px] font-light
                          leading-relaxed text-white/90
                        "
                      >
                        {slide.subtitle}
                      </motion.p>
                    )}

                    {slide.ctaText && slide.ctaLink && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <Link
                          href={slide.ctaLink}
                          className="
                            inline-block rounded-none border border-[var(--color-brand-dark)]
                            bg-[var(--color-brand-dark)] px-[18px] py-[14px]
                            text-base font-extrabold text-white
                            transition-all duration-300
                            hover:border-[var(--color-brand-red)] hover:bg-[var(--color-brand-red)]
                          "
                        >
                          {slide.ctaText}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 z-20 h-24 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
