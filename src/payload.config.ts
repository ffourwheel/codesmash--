import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Blogs } from './collections/Blogs'
import { BlogCategories } from './collections/BlogCategories'
import { Services } from './collections/Services'
import { Portfolios } from './collections/Portfolios'
import { PortfolioCategories } from './collections/PortfolioCategories'
import { Customers } from './collections/Customers'
import { TeamMembers } from './collections/TeamMembers'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { HeroSlider } from './globals/HeroSlider'
import { CompanyStats } from './globals/CompanyStats'
import { VisionMission } from './globals/VisionMission'
import { Capabilities } from './globals/Capabilities'
import { ContactInfo } from './globals/ContactInfo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Admin panel config
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — CODESMASH CMS',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Database
  db: postgresAdapter({
    pool: {
      connectionString: .env.DATABASE_URI,
    },
  }),

  // Rich text editor
  editor: lexicalEditor(),

  // Collections
  collections: [
    Users,
    Media,
    Blogs,
    BlogCategories,
    Services,
    Portfolios,
    PortfolioCategories,
    Customers,
    TeamMembers,
  ],

  // Globals
  globals: [
    SiteSettings,
    Header,
    Footer,
    HeroSlider,
    CompanyStats,
    VisionMission,
    Capabilities,
    ContactInfo,
  ],

  // Plugins
  plugins: [
    seoPlugin({
      collections: ['blogs', 'services', 'portfolios'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} — CODESMASH`,
      generateDescription: ({ doc }) => doc.excerpt || doc.shortDescription || '',
    }),
  ],

  // TypeScript output
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Secret
  secret: process.env.PAYLOAD_SECRET,
})
