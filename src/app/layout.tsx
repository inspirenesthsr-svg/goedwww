import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Goed Travels | The Complete Travel Co.',
  description: 'Discover extraordinary destinations with Goed Travels - The Complete Travel Co. Premium travel packages, curated experiences, and unforgettable journeys across the globe.',
  keywords: 'travel, tours, vacation packages, India travel, international tours, Goed Travels, premium travel, complete travel company',
  openGraph: {
    title: 'Goed Travels | The Complete Travel Co.',
    description: 'Discover extraordinary destinations with Goed Travels',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
