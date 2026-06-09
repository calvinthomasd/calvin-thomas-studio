import ActorHero from '@/components/ActorHero'
import ActorGallery from '@/components/ActorGallery'

export const metadata = {
  title: 'Actor Headshots Toronto | Calvin Thomas Studio',
  description: 'Creative, cinematic headshots and portraits for actors and performers in Toronto that feel like you.',
  openGraph: {
    title: 'Actor Headshots Toronto | Calvin Thomas Studio',
    description: 'Creative, cinematic headshots and portraits for actors and performers in Toronto that feel like you.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Actor Headshots Toronto | Calvin Thomas Studio',
    description: 'Creative, cinematic headshots and portraits for actors and performers in Toronto that feel like you.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/actors',
  },
}

export default function ActorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://calvinthomas.ca/actors',
    name: 'Actor Headshots Toronto',
    description: 'Creative, cinematic headshots and portraits for actors and performers in Toronto.',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://calvinthomas.ca',
      name: 'Calvin Thomas Studio',
    },
    areaServed: { '@type': 'City', name: 'Toronto' },
    serviceType: 'Photography',
    url: 'https://calvinthomas.ca/actors',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ActorHero />
        <ActorGallery />
      </main>
    </>
  )
}
