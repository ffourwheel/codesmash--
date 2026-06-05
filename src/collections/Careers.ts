import type { CollectionConfig } from 'payload'

export const Careers: CollectionConfig = {
  slug: 'careers',
  admin: {
    useAsTitle: 'jobTitle',
    group: 'Content',
    defaultColumns: ['jobTitle', 'department', 'location', 'employmentType', 'isActive'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'jobTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'employmentType',
      type: 'select',
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
