import Image from 'next/image'
import Link from 'next/link'
import styles from './Portfolios.module.css'

const items = [
  {
    index: '01',
    label: 'Professionals',
    description: 'Corporate, LinkedIn & business headshots.',
    href: '#professionals',
    photo: '/landing%20images/actress-headshot-natural-makeup-studio.jpg.jpg',
    overlay: true,
  },
  {
    index: '02',
    label: 'Actors',
    description: 'Theatrical headshots for casting, agents & auditions.',
    href: '#actors',
    photo: '/landing%20images/toronto-actor-headshot-natural-light.jpg.jpg',
    overlay: true,
  },
  {
    index: '03',
    label: 'Teams',
    description: 'Group sessions for corporate & creative teams.',
    href: '#teams',
    photo: '/landing%20images/toronto-corporate-headshot-professional.jpg.jpg',
    overlay: true,
  },
]

export default function Portfolios() {
  return (
    <section className={styles.section}>
      <p className={styles.intro}>Which best describes you?</p>

      <div className={styles.grid}>
        {items.map(({ index, label, description, href, photo, overlay }) => (
          <Link key={index} href={href} className={`${styles.card} ${overlay ? styles.cardOverlay : ''}`}>
            <div className={styles.imageWrap}>
              <Image
                src={photo}
                alt={label}
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
