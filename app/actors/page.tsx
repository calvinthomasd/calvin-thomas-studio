import ActorHero from '@/components/ActorHero'
import ActorGallery from '@/components/ActorGallery'

export const metadata = {
  title: 'Actor Headshots Toronto | Calvin Thomas Studio',
  description: 'Creative, cinematic headshots and portraits for actors and performers in Toronto that feel like you.',
}

export default function ActorsPage() {
  return (
    <main>
      <ActorHero />
      <ActorGallery />
    </main>
  )
}
