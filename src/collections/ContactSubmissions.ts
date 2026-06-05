import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    group: 'Submissions',
    defaultColumns: ['name', 'email', 'status', 'createdAt'],
  },
  access: {
    // Public — allow anyone to submit the contact form
    create: () => true,
    // Authenticated users only
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Unread', value: 'unread' },
        { label: 'Read', value: 'read' },
      ],
      defaultValue: 'unread',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
