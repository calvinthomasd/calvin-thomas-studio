import ActorPricing from '@/components/ActorPricing'

export const metadata = {
  title: 'Actor Headshot Pricing | Calvin Thomas Studio',
  description: 'Actor headshot session pricing at Calvin Thomas Studio in Toronto. Classic and mini session packages for casting, agents, and auditions.',
  openGraph: {
    title: 'Actor Headshot Pricing | Calvin Thomas Studio',
    description: 'Actor headshot session pricing at Calvin Thomas Studio in Toronto. Classic and mini session packages for casting, agents, and auditions.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Actor Headshot Pricing | Calvin Thomas Studio',
    description: 'Actor headshot session pricing at Calvin Thomas Studio in Toronto. Classic and mini session packages for casting, agents, and auditions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/actors/pricing',
  },
}

export default function ActorPricingPage() {
  return <ActorPricing />
}
