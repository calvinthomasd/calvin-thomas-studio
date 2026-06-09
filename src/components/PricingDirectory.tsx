import Image from 'next/image'
import Link from 'next/link'
import styles from './PricingDirectory.module.css'

const items = [
  {
    index: '01',
    label: 'Professionals',
    description: 'Corporate, LinkedIn & business headshots.',
    href: '/professionals/pricing',
    photo: '/professional-gallery/business-headshot-woman-warm-smile-studio-light.jpg',
    alt: 'Professional headshot of a woman with long blonde hair wearing an olive brown blazer, smiling warmly against a soft warm beige background',
  },
  {
    index: '02',
    label: 'Actors',
    description: 'Theatrical headshots for casting, agents & auditions.',
    href: '/actors/pricing',
    photo: '/actor-gallery/actor-commercial-headshot-friendly-smile-toronto.jpg',
    alt: 'Toronto actor headshot of a young man with curly dark hair and blue eyes, resting his hand against his cheek with a thoughtful, cinematic expression against a rich warm amber background',
  },
  {
    index: '03',
    label: 'Teams',
    description: 'Group sessions for corporate & creative teams.',
    href: '/teams',
    photo: '/landing-images/linkedin-headshot-professional-toronto.jpg',
    alt: 'Toronto corporate headshot of a man in a navy suit, white dress shirt, black tie, and rectangular glasses, smiling warmly with hands clasped against a dark grey studio background',
  },
]

export default function PricingDirectory() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>Pricing</p>
        <h1 className={styles.heading}>
          CHOOSE YOUR SESSION<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.subheading}>Every headshot session is a little different. Below you&apos;ll find pricing and packages for actors, professionals, and corporate teams. Each one designed around the kind of photos you need and the experience you want.</p>
      </div>

      <div className={styles.grid}>
        {items.map(({ index, label, description, href, photo, alt }) => (
          <Link key={index} href={href} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={photo}
                alt={alt}
                fill
                sizes="(max-width: 768px) 95vw, 30vw"
                className={styles.image}
              />
              <div className={styles.scrim} />
              <div className={styles.meta}>
                <span className={styles.index}>[{index}]</span>
                <div className={styles.labelRow}>
                  <span className={styles.cardLabel}>{label.toUpperCase()}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
                <span className={styles.description}>{description}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
