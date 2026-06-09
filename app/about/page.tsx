import AboutHero from '@/components/AboutHero'
import AboutCalvin from '@/components/AboutCalvin'
import AboutGabi from '@/components/AboutGabi'

export const metadata = {
  title: 'About | Calvin Thomas Studio',
  description: 'Meet Calvin and Gabriella — Toronto-based photographers behind Calvin Thomas Studio, specializing in natural, modern headshots and portraits.',
  openGraph: {
    title: 'About | Calvin Thomas Studio',
    description: 'Meet Calvin and Gabriella — Toronto-based photographers behind Calvin Thomas Studio, specializing in natural, modern headshots and portraits.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Calvin Thomas Studio',
    description: 'Meet Calvin and Gabriella — Toronto-based photographers behind Calvin Thomas Studio, specializing in natural, modern headshots and portraits.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
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
