import type { GlobalConfig } from 'payload'

export const Capabilities: GlobalConfig = {
  slug: 'capabilities',
  label: 'Capabilities',
  admin: { group: 'Layout' },
  access: { read: () => true },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'percentage', type: 'number', required: true, min: 0, max: 100 },
        {
          name: 'color',
          type: 'text',
          admin: { description: 'Hex code for the progress bar color, e.g., #d90a2c' },
        },
      ],
    },
  ],
}
