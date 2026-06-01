import AboutHero from '@/components/AboutHero'
import AboutCalvin from '@/components/AboutCalvin'
import AboutGabi from '@/components/AboutGabi'

export const metadata = {
  title: 'About | Calvin Thomas Studio',
  description: 'Meet Calvin and Gabriella — Toronto-based photographers behind Calvin Thomas Studio, specializing in natural, modern headshots and portraits.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutCalvin />
      <AboutGabi />
    </main>
  )
}
