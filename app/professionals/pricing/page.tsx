import ProfessionalPricing from '@/components/ProfessionalPricing'

export const metadata = {
  title: 'Professional Headshot Pricing | Calvin Thomas Studio',
  description: 'Professional headshot session pricing at Calvin Thomas Studio in Toronto. Packages for LinkedIn, corporate, and business portraits.',
  openGraph: {
    title: 'Professional Headshot Pricing | Calvin Thomas Studio',
    description: 'Professional headshot session pricing at Calvin Thomas Studio in Toronto. Packages for LinkedIn, corporate, and business portraits.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshot Pricing | Calvin Thomas Studio',
    description: 'Professional headshot session pricing at Calvin Thomas Studio in Toronto. Packages for LinkedIn, corporate, and business portraits.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/professionals/pricing',
  },
}

export default function ProfessionalPricingPage() {
  return <ProfessionalPricing />
}
