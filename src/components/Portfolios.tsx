import Image from 'next/image'
import Link from 'next/link'
import styles from './Portfolios.module.css'

const items = [
  {
    index: '01',
    label: 'Professionals',
    description: 'Corporate, LinkedIn & business headshots.',
    href: '#professionals',
    photo: '/landing-images/actress-headshot-natural-makeup-studio.jpg',
    alt: 'Studio actress headshot of a young woman with long straight dark hair and blue-grey eyes wearing gold hoop earrings and a black square-neck top, looking directly at camera against a clean light grey backdrop',
    overlay: true,
  },
  {
    index: '02',
    label: 'Actors',
    description: 'Theatrical headshots for casting, agents & auditions.',
    href: '#actors',
    photo: '/landing-images/toronto-actor-headshot-natural-light.jpg',
    alt: 'Toronto actor headshot of a woman with long dark wavy hair in a soft grey oversized sweater, one hand lightly touching her collarbone, with a quietly intense gaze against a moody dark green-grey background',
    overlay: true,
  },
  {
    index: '03',
    label: 'Teams',
    description: 'Group sessions for corporate & creative teams.',
    href: '#teams',
    photo: '/landing-images/toronto-corporate-headshot-professional.jpg',
    alt: 'Toronto corporate headshot of a man in a navy suit, white dress shirt, black tie, and rectangular glasses, smiling warmly with hands clasped against a dark grey studio background',
    overlay: true,
  },
]

export default function Portfolios() {
  return (
    <section className={styles.section}>
      <p className={styles.intro}>Which best describes you?</p>

      <div className={styles.grid}>
        {items.map(({ index, label, description, href, photo, alt, overlay }) => (
          <Link key={index} href={href} className={`${styles.card} ${overlay ? styles.cardOverlay : ''}`}>
            <div className={styles.imageWrap}>
              <Image
                src={photo}
                alt={alt}
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className={styles.image}
              />
              {overlay && (
                <div className={styles.meta}>
                  <span className={styles.index}>[{index}]</span>
                  <div className={styles.labelRow}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.arrow} aria-hidden="true">→</span>
                  </div>
                  <span className={styles.description}>{description}</span>
                </div>
              )}
            </div>
            {!overlay && (
              <div className={styles.meta}>
                <span className={styles.index}>[{index}]</span>
                <div className={styles.labelRow}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
                <span className={styles.description}>{description}</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
