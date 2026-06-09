import TestimonialsPage from '@/components/TestimonialsPage'

export const metadata = {
  title: 'Testimonials | Calvin Thomas Studio',
  description: "Hear from clients who've worked with Calvin Thomas Studio for professional and actor headshots in Toronto.",
  openGraph: {
    title: 'Testimonials | Calvin Thomas Studio',
    description: "Hear from clients who've worked with Calvin Thomas Studio for professional and actor headshots in Toronto.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | Calvin Thomas Studio',
    description: "Hear from clients who've worked with Calvin Thomas Studio for professional and actor headshots in Toronto.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/testimonials',
  },
}

export default function Testimonials() {
  return (
    <main>
      <TestimonialsPage />
    </main>
  )
}
