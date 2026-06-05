import type { GlobalConfig } from 'payload'

export const CompanyStats: GlobalConfig = {
  slug: 'company-stats',
  label: 'Company Statistics',
  admin: { group: 'Layout' },
  access: { read: () => true },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'value', type: 'number', required: true },
        { name: 'suffix', type: 'text', admin: { description: 'e.g., "+", "%", "M"' } },
        { name: 'label', type: 'text', required: true, localized: true },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Projects', value: 'projects' },
            { label: 'Clients', value: 'clients' },
            { label: 'Team', value: 'team' },
            { label: 'Awards', value: 'awards' },
          ],
        },
      ],
    },
    {
      name: 'backgroundStyle',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
        { label: 'Brand Red', value: 'red' },
      ],
    },
  ],
}
