import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Portfolios } from './collections/Portfolios'
import { Blogs } from './collections/Blogs'
import { Careers } from './collections/Careers'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Partners } from './collections/Partners'
import { Services } from './collections/Services'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { Homepage } from './globals/Homepage'

import { Logo } from './components/admin/Logo'
import { Icon } from './components/admin/Icon'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Image processing
  sharp,

  // Admin panel config
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    meta: {
      titleSuffix: ' | CODESMASH CMS',
    },
  },

  // Rich text editor
  editor: lexicalEditor(),

  // Database
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // Collections
  collections: [Users, Media, Pages, Portfolios, Blogs, Careers, ContactSubmissions, Partners, Services],

  // Globals
  globals: [SiteSettings, Navigation, Homepage],

  // Auth secret
  secret: process.env.PAYLOAD_SECRET || '',

  // TypeScript type generation
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
