import ProfessionalHero from '@/components/ProfessionalHero'
import ProfessionalGallery from '@/components/ProfessionalGallery'

export const metadata = {
  title: 'Professional Headshots Toronto | Calvin Thomas Studio',
  description: 'Modern, polished headshots for business professionals, executives, and corporate teams in Toronto.',
}

export default function ProfessionalsPage() {
  return (
    <main>
      <ProfessionalHero />
      <ProfessionalGallery />
    </main>
  )
}
