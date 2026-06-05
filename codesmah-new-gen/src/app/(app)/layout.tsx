import React from 'react'
import { Inter, Kanit } from 'next/font/google'
import './styles.css'
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-kanit',
})

export const metadata = {
  description: 'CODESMASH DIGITAL SOLUTION CONSULTANT - IT & Tech consulting with 10+ years experience.',
  title: 'CODESMASH | Digital Solution Consultant',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-kanit antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
