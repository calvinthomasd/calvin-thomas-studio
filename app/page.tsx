import HeroV2 from '@/components/HeroV2'
import Tagline from '@/components/Tagline'
import Gallery from '@/components/Gallery'
import ReviewBanner from '@/components/ReviewBanner'
import Mission from '@/components/Mission'
import About from '@/components/About'
import Portfolios from '@/components/Portfolios'
import BookingCTA from '@/components/BookingCTA'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://calvinthomas.studio', // ← update to your real domain
    name: 'Calvin Thomas Studio',
    description:
      'Premium headshot and portrait photography in Toronto for actors, business professionals, and corporate teams.',
    url: 'https://calvinthomas.studio',
    telephone: '', // ← add your phone number
    email: '', // ← add your email
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    image: '/photo1.jpg', // ← update to your best portfolio image
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      // Add your social profiles:
      // 'https://instagram.com/calvinthomasstudio',
      // 'https://linkedin.com/company/calvinthomasstudio',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroV2 />
        <Tagline />
        <Gallery />
        <Mission />
        <ReviewBanner />
        <Testimonials />
        <About />
        <Portfolios />
        <BookingCTA />
      </main>
    </>
  )
}
