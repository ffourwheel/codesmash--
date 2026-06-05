import config from '@/payload.config'
import '@payloadcms/next/css'
import { RootPage } from '@payloadcms/next/views'
import { generatePageMetadata } from '@payloadcms/next/views'

export const generateMetadata = generatePageMetadata({ config })

export default function Page(props: any) {
  return <RootPage config={config} importMap={{} as any} {...props} />
}
