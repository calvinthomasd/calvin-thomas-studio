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
}

export default function ProfessionalsPage() {
  return (
    <main>
      <ProfessionalHero />
      <ProfessionalGallery />
    </main>
  )
}
