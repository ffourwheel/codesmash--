import { CollectionConfig } from 'payload';

export const Portfolios: CollectionConfig = {
  slug: 'portfolios',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'client', 'publishedDate'],
  },
  access: {
    read: () => true, // Frontend needs to read portfolios
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                description: 'The title of the portfolio piece or case study.',
              },
            },
            {
              name: 'slug',
              type: 'text',
              unique: true,
              admin: {
                description: 'Used for the URL path. E.g., /portfolio/my-project',
                position: 'sidebar',
              },
              hooks: {
                beforeValidate: [
                  ({ value, data }) => {
                    if (!value && data?.title) {
                      return data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                    }
                    return value;
                  },
                ],
              },
            },
            {
              name: 'client',
              type: 'text',
              admin: {
                description: 'The name of the client.',
              },
            },
            {
              name: 'excerpt',
              type: 'textarea',
              admin: {
                description: 'Short summary displayed on the portfolio grid.',
              },
            },
            {
              name: 'content',
              type: 'richText',
              admin: {
                description: 'The full case study details.',
              },
            },
            {
              name: 'projectUrl',
              type: 'text',
              admin: {
                description: 'Link to the live project (optional).',
              },
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'The main cover image for the portfolio item.',
              },
            },
            {
              name: 'gallery',
              type: 'array',
              admin: {
                description: 'Additional images for the case study.',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // Sidebar fields
    {
      name: 'services',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Digital Transformation', value: 'digital-transformation' },
        { label: 'Media Planning', value: 'media-planning' },
        { label: 'Management System', value: 'management-system' },
        { label: 'Website/App Design', value: 'website-app-design' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Select the services provided in this project.',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
