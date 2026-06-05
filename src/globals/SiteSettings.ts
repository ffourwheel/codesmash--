import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'CODESMASH',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'SMASH YOUR LIMITS !!',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'contact@codesmash.co.th',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '+66(0)64-928-7914',
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: '96 ชั้นที่ 1 หมู่ 1 ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี 12120',
    },
    {
      name: 'workingHours',
      type: 'text',
      defaultValue: 'จันทร์ – ศุกร์ 9.00 – 17.00',
    },
    {
      name: 'googleMapsUrl',
      type: 'text',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Line', value: 'line' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
