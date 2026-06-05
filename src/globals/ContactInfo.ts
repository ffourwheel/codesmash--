import type { GlobalConfig } from 'payload'

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  label: 'Contact Information',
  admin: { group: 'Layout' },
  access: { read: () => true },
  fields: [
    {
      name: 'address',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'googleMapsEmbed',
      type: 'text',
      admin: { description: 'Google Maps embed iframe URL' },
    },
    {
      name: 'workingHours',
      type: 'text',
      localized: true,
    },
  ],
}
