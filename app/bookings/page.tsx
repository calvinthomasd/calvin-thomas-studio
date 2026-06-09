import BookingsPage from '@/components/BookingsPage'

export const metadata = {
  title: 'Bookings | Calvin Thomas Studio',
  description: 'Book your headshot or portrait session at Calvin Thomas Studio in Toronto. View our calendar or get in touch.',
  openGraph: {
    title: 'Bookings | Calvin Thomas Studio',
    description: 'Book your headshot or portrait session at Calvin Thomas Studio in Toronto. View our calendar or get in touch.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calvin Thomas Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookings | Calvin Thomas Studio',
    description: 'Book your headshot or portrait session at Calvin Thomas Studio in Toronto. View our calendar or get in touch.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/bookings',
  },
}

export default function Bookings() {
  return <BookingsPage />
}
