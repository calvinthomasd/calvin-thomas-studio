import ProfessionalHero from '@/components/ProfessionalHero'
import ProfessionalGallery from '@/components/ProfessionalGallery'

export const metadata = {
  title: 'Professional Headshots Toronto | Calvin Thomas Studio',
  description: 'Modern, polished headshots for business professionals, executives, and corporate teams in Toronto.',
  openGraph: {
    title: 'Professional Headshots Toronto | Calvin Thomas Studio',
    description: 'Modern, polished headshots for business professionals, executives, and corporate teams in Toronto.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots Toronto | Calvin Thomas Studio',
    description: 'Modern, polished headshots for business professionals, executives, and corporate teams in Toronto.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/professionals',
  },
}

export default function ProfessionalsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://calvinthomas.ca/professionals',
    name: 'Professional Headshots Toronto',
    description: 'Modern, polished headshots for business professionals, executives, and corporate teams in Toronto.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://calvinthomas.ca',
      name: 'Calvin Thomas Studio',
    },
    areaServed: { '@type': 'City', name: 'Toronto' },
    serviceType: 'Photography',
    url: 'https://calvinthomas.ca/professionals',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ProfessionalHero />
        <ProfessionalGallery />
      </main>
    </>
  )
}
