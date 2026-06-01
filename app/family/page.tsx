import type { Metadata } from 'next'
import FamilyGallery from '@/components/FamilyGallery'

export const metadata: Metadata = {
  title: 'Family | Calvin Thomas Studio',
}

export default function FamilyPage() {
  return <FamilyGallery />
}
