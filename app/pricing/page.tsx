import PricingDirectory from '@/components/PricingDirectory'

export const metadata = {
  title: 'Pricing | Calvin Thomas Studio',
  description: 'Browse headshot session pricing for professionals, actors, and corporate teams at Calvin Thomas Studio in Toronto.',
}

export default function PricingPage() {
  return (
    <main>
      <PricingDirectory />
    </main>
  )
}
