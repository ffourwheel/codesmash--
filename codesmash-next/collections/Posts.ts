import { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'author', 'status', 'publishedDate'],
  },
  access: {
    read: () => true, // Frontend needs to read posts
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
            },
            {
              name: 'slug',
              type: 'text',
              unique: true,
              admin: {
                description: 'Used for the URL path. E.g., /blog/my-post',
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
              name: 'excerpt',
              type: 'textarea',
              admin: {
                description: 'Short summary displayed on the blog list page.',
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              admin: {
                description: 'The main body content of the blog post.',
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
                description: 'The main image for the post.',
              },
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              admin: {
                description: 'SEO Title (max 60 characters recommended).',
              },
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              admin: {
                description: 'SEO Description (max 160 characters recommended).',
              },
            },
          ],
        },
      ],
    },
    // Sidebar fields
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData.status === 'published' && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
