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
}

export default function ActorsPage() {
  return (
    <main>
      <ActorHero />
      <ActorGallery />
    </main>
  )
}
