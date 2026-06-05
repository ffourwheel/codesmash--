import type { GlobalConfig } from 'payload'

export const HeroSlider: GlobalConfig = {
  slug: 'hero-slider',
  label: 'Hero Slider',
  admin: {
    group: 'Layout',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'ctaText',
          type: 'text',
          admin: { description: 'Call-to-action button label.' },
        },
        {
          name: 'ctaLink',
          type: 'text',
          admin: { description: 'Button destination URL.' },
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'backgroundVideo',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Optional video background (mp4). Overrides image on desktop.',
          },
        },
        {
          name: 'overlayOpacity',
          type: 'number',
          min: 0,
          max: 100,
          defaultValue: 60,
          admin: {
            description: 'Dark overlay opacity (0–100%).',
          },
        },
      ],
    },
    {
      name: 'autoplayDelay',
      type: 'number',
      defaultValue: 5000,
      admin: {
        description: 'Autoplay delay in milliseconds.',
        position: 'sidebar',
      },
    },
    {
      name: 'enableGrayscale',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Apply grayscale filter to background images (legacy style).',
        position: 'sidebar',
      },
    },
  ],
}
