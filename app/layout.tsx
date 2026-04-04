import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  display: 'swap',
})


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e9e6dd',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://calvinthomas.studio'), // ← update to your real domain
  title: {
    default: 'Calvin Thomas Studio — Toronto Headshot Photographer',
    template: '%s | Calvin Thomas Studio',
  },
  description:
    'Premium headshot and portrait photography in Toronto for actors, business professionals, and corporate teams. Relaxed sessions, real results.',
  keywords: [
    'Toronto headshot photographer',
    'professional headshots Toronto',
    'actor headshots Toronto',
    'corporate headshots',
    'business portrait photography',
    'LinkedIn headshots Toronto',
    'Calvin Thomas Studio',
  ],
  authors: [{ name: 'Calvin Thomas Studio' }],
  creator: 'Calvin Thomas Studio',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Calvin Thomas Studio',
    title: 'Calvin Thomas Studio — Toronto Headshot Photographer',
    description:
      'Headshots that feel real. Photos that get you noticed. Premium portrait photography in Toronto.',
    // Add your OG image path once you have one:
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calvin Thomas Studio — Toronto Headshot Photographer',
    description:
      'Headshots that feel real. Photos that get you noticed. Premium portrait photography in Toronto.',
    // image: '/og-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  )
}
