import type { GlobalConfig } from 'payload'

export const VisionMission: GlobalConfig = {
  slug: 'vision-mission',
  label: 'Vision & Mission',
  admin: { group: 'Layout' },
  access: { read: () => true },
  fields: [
    {
      name: 'vision',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'mission',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
