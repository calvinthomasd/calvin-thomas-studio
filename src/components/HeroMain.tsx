import Image from 'next/image'
import styles from './HeroMain.module.css'

export default function HeroMain() {
  return (
    <section className={styles.section}>

      {/* Full-width title row */}
      <div className={styles.titleRow}>
        <h1 className={styles.title}>CALVIN THOMAS STUDIO</h1>
      </div>

      {/* Content: left text column, right dissolving photo */}
      <div className={styles.content}>

        <div className={styles.left}>
          <p className={styles.topLabel}>Headshots &amp; Portraits</p>

          <p className={styles.tagline}>We make<br />you look<br />good.</p>

          <p className={styles.bottomLabel}>Made in Toronto</p>
        </div>

        <div className={styles.photoFrame}>
          <Image src="/landing-images/toronto-film-actor-headshot-cinematic.jpg"        alt="Toronto film actor headshot"  fill sizes="(max-width: 768px) 100vw, 58vw" className={styles.photoImg} priority />
          <Image src="/landing-images/toronto-actress-headshot-studio-portrait.jpg"     alt="Toronto actress headshot"     fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d1}`} priority />
          <Image src="/landing-images/actress-headshot-natural-makeup-studio.jpg"       alt="Actress headshot"             fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d2}`} priority />
          <Image src="/landing-images/actor-headshot-dark-background-toronto.jpg"       alt="Actor headshot"               fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d3}`} />
          <Image src="/landing-images/toronto-artist-portrait-editorial-style-hype.jpg" alt="Toronto artist portrait"      fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d4}`} />
          <Image src="/landing-images/performing-artist-headshot-toronto-studio.jpg"    alt="Toronto performing artist"    fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d5}`} />
          <Image src="/landing-images/business-headshot-woman-studio-portrait.jpg"      alt="Business headshot"            fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d6}`} />
        </div>

      </div>

    </section>
  )
}
