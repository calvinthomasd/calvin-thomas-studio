import type { Metadata } from 'next'
import HeroV2 from '@/components/HeroV2'
import Tagline from '@/components/Tagline'
import Gallery from '@/components/Gallery'
import ReviewBanner from '@/components/ReviewBanner'
import Mission from '@/components/Mission'
import About from '@/components/About'
import Portfolios from '@/components/Portfolios'
import BookingCTA from '@/components/BookingCTA'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: {
    absolute: 'Calvin Thomas Studio — Toronto Headshot Photographer',
  },
  description:
    'Premium headshot and portrait photography in Toronto for actors, business professionals, and corporate teams. Relaxed sessions, real results.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Calvin Thomas Studio — Toronto Headshot Photographer',
    description:
      'Headshots that feel real. Photos that get you noticed. Premium portrait photography in Toronto.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calvin Thomas Studio — Toronto Headshot Photographer',
    description:
      'Headshots that feel real. Photos that get you noticed. Premium portrait photography in Toronto.',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://calvinthomas.ca',
    name: 'Calvin Thomas Studio',
    description:
      'Premium headshot and portrait photography in Toronto for actors, business professionals, and corporate teams.',
    url: 'https://calvinthomas.ca',
    email: 'info@calvinthomas.ca',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    image: 'https://calvinthomas.ca/og-image.jpg',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://instagram.com/calvinthomasstudio',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroV2 />
        <Tagline />
        <Gallery />
        <Mission />
        <ReviewBanner />
        <Testimonials />
        <About />
        <Portfolios />
        <BookingCTA />
      </main>
    </>
  )
}
