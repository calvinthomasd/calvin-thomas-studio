import Image from 'next/image'
import styles from './HeroTitle.module.css'

const strip = [
  { n: '01', src: '/landing-images/actor-headshot-soft-light-clean-backdrop.jpg',        alt: 'Actor headshot' },
  { n: '02', src: '/landing-images/lawyer-corporate-headshot-confident.jpg',             alt: 'Corporate headshot' },
  { n: '03', src: '/landing-images/business-headshot-neutral-background.jpg',            alt: 'Business headshot' },
  { n: '04', src: '/landing-images/business-headshot-woman-warm-smile-studio-light.jpg', alt: 'Business portrait' },
  { n: '05', src: '/landing-images/actress-headshot-hand-to-face-contemplative.jpg',     alt: 'Actress headshot' },
  { n: '06', src: '/landing-images/toronto-business-portrait-modern-studio-light.jpg',   alt: 'Business portrait' },
  { n: '07', src: '/landing-images/toronto-actress-headshot-studio-portrait.jpg',        alt: 'Actress headshot' },
  { n: '08', src: '/landing-images/toronto-artist-portrait-editorial-style-hype.jpg',    alt: 'Artist portrait' },
  { n: '09', src: '/landing-images/toronto-corporate-headshot-professional.jpg',         alt: 'Corporate headshot' },
]

export default function HeroTitle() {
  return (
    <section className={styles.section}>

      <div className={styles.strip}>
        {strip.map(({ n, src, alt }) => (
          <div key={n} className={styles.cell}>
            <div className={styles.thumb}>
              <Image src={src} alt={alt} fill sizes="11vw" className={styles.thumbImg} />
            </div>
            <span className={styles.num}>{n}</span>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>CALVIN THOMAS STUDIO</h1>
      </div>

    </section>
  )
}
