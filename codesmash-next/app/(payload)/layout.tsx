import configPromise from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from './importMap.js'

type Args = Parameters<typeof handleServerFunctions>[0]

const serverFunction = async function (args: Args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  })
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout 
    config={configPromise} 
    importMap={importMap} 
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
)

export default Layout
