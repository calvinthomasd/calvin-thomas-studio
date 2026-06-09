import CorporatePricing from '@/components/CorporatePricing'

export const metadata = {
  title: 'Corporate & Team Headshots | Calvin Thomas Studio',
  description: 'On-location company headshot photography for teams and companies throughout Toronto and the GTA.',
  openGraph: {
    title: 'Corporate & Team Headshots | Calvin Thomas Studio',
    description: 'On-location company headshot photography for teams and companies throughout Toronto and the GTA.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate & Team Headshots | Calvin Thomas Studio',
    description: 'On-location company headshot photography for teams and companies throughout Toronto and the GTA.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/teams',
  },
}

export default function TeamsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://calvinthomas.ca/teams',
    name: 'Corporate & Team Headshots Toronto',
    description: 'On-location corporate headshot photography for teams and companies throughout Toronto and the GTA.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://calvinthomas.ca',
      name: 'Calvin Thomas Studio',
    },
    areaServed: { '@type': 'City', name: 'Toronto' },
    serviceType: 'Photography',
    url: 'https://calvinthomas.ca/teams',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CorporatePricing />
    </>
  )
}
