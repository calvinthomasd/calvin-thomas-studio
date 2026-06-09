import PricingDirectory from '@/components/PricingDirectory'

export const metadata = {
  title: 'Pricing | Calvin Thomas Studio',
  description: 'Browse headshot session pricing for professionals, actors, and corporate teams at Calvin Thomas Studio in Toronto.',
  openGraph: {
    title: 'Pricing | Calvin Thomas Studio',
    description: 'Browse headshot session pricing for professionals, actors, and corporate teams at Calvin Thomas Studio in Toronto.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Calvin Thomas Studio',
    description: 'Browse headshot session pricing for professionals, actors, and corporate teams at Calvin Thomas Studio in Toronto.',
    images: ['/og-image.jpg'],
  },
}

export default function PricingPage() {
  return (
    <main>
      <PricingDirectory />
    </main>
  )
}
