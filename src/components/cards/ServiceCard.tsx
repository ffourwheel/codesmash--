import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  service: {
    title: string
    slug: string
    shortDescription?: string
    icon?: { url: string; alt?: string }
    coverImage?: { url: string; alt?: string }
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="
        group relative flex flex-col overflow-hidden
        rounded-2xl border border-gray-100
        bg-white p-8 shadow-sm
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-red/5
        hover:border-brand-red/20
      "
    >
      {/* Icon */}
      {service.icon && (
        <div className="
          mb-6 flex h-16 w-16 items-center justify-center
          rounded-xl bg-gray-50
          transition-colors duration-300
          group-hover:bg-brand-red/10
        ">
          <Image
            src={service.icon.url}
            alt={service.icon.alt || service.title}
            width={40}
            height={40}
            className="
              object-contain
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>
      )}

      {/* Title */}
      <h3 className="
        mb-3 text-xl font-bold text-brand-dark
        transition-colors duration-300
        group-hover:text-brand-red
      ">
        {service.title}
      </h3>

      {/* Description */}
      {service.shortDescription && (
        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
          {service.shortDescription}
        </p>
      )}

      {/* Arrow indicator */}
      <div className="
        flex items-center gap-2 text-sm font-semibold
        text-brand-red opacity-0
        transition-all duration-300
        group-hover:opacity-100 group-hover:translate-x-1
      ">
        Learn More
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Bottom accent line */}
      <div className="
        absolute bottom-0 left-0 h-1 w-0
        bg-gradient-to-r from-brand-red to-brand-blue
        transition-all duration-500
        group-hover:w-full
      " />
    </Link>
  )
}
