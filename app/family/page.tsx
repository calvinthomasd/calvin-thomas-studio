import type { Metadata } from 'next'
import FamilyGallery from '@/components/FamilyGallery'

export const metadata: Metadata = {
  title: 'Family | Calvin Thomas Studio',
  description: 'Family portrait photography by Calvin Thomas Studio in Toronto.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/family',
  },
}

export default function FamilyPage() {
  return <FamilyGallery />
}
