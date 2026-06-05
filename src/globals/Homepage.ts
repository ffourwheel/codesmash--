import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', defaultValue: 'SMASH YOUR LIMITS !!' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'ctaText', type: 'text', defaultValue: 'Explore Services' },
        { name: 'ctaUrl', type: 'text', defaultValue: '#services' },
      ],
    },
    // Vision Section
    {
      name: 'vision',
      type: 'group',
      fields: [
        { name: 'title', type: 'textarea', defaultValue: 'ธุรกิจบ้านเรา จะต้องเติบโต มั่นคง และยั่งยืนด้วยเทคโนโลยีข้อมูลที่ทันสมัย' },
        { name: 'description', type: 'textarea' },
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
        { name: 'ctaText', type: 'text', defaultValue: 'View Services' },
        { name: 'ctaUrl', type: 'text', defaultValue: '/services' },
      ],
    },
    // Mission Section
    {
      name: 'mission',
      type: 'group',
      fields: [
        { name: 'title', type: 'textarea', defaultValue: 'เราจะขอเป็นที่ส่วนหนึ่ง ในการขับเคลื่อนธุรกิจ ของคุณอย่างมั่นคง' },
        { name: 'description', type: 'textarea' },
        { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
        { name: 'ctaText', type: 'text', defaultValue: 'View Projects' },
        { name: 'ctaUrl', type: 'text', defaultValue: '/portfolio' },
      ],
    },
    // Capabilities Section
    {
      name: 'capabilities',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'ความเชี่ยวชาญของเรา' },
        { name: 'subtitle', type: 'text', defaultValue: 'CAPABILITIES' },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            { name: 'percentage', type: 'number', min: 0, max: 100 },
          ],
        },
      ],
    },
    // Stats Section
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text' },
        { name: 'number', type: 'number', required: true },
        { name: 'suffix', type: 'text', defaultValue: '+' },
        { name: 'label', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    // Careers Section
    {
      name: 'careers',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'ร่วมเป็นส่วนหนึ่งกับเรา' },
        { name: 'description', type: 'textarea' },
        { name: 'ctaText', type: 'text', defaultValue: 'คลิกที่นี่' },
        { name: 'ctaUrl', type: 'text', defaultValue: '/careers' },
      ],
    },
    // Featured Sections
    {
      name: 'featuredSections',
      type: 'array',
      fields: [
        { name: 'sectionTitle', type: 'text' },
        { name: 'sectionSubtitle', type: 'text' },
        { 
          name: 'sectionType', 
          type: 'select',
          options: [
            { label: 'Portfolios', value: 'portfolios' },
            { label: 'Blogs', value: 'blogs' },
            { label: 'Custom', value: 'custom' }
          ],
          defaultValue: 'portfolios',
        },
        { 
          name: 'content', 
          type: 'richText',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'custom',
          }
        },
      ],
    },
  ],
}
