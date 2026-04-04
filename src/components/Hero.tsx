import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Left: text */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className={styles.headlineWord}>Calvin</span>
          <span className={styles.headlineWord}>Thomas</span>
          <span className={styles.headlineWord}>Studio</span>
        </h1>
        <p className={styles.tagline}>
          We make you look good. Headshots that feel real,
          photos that get you noticed.
        </p>
        <p className={styles.location}>Made in Toronto</p>
        <div className={styles.divider} />
      </div>

      {/* Right: three offset crossfading photos */}
      <div className={styles.photoStrip}>

        <div className={styles.photo}>
          <Image src="/landing%20images/toronto-film-actor-headshot-cinematic.jpg.jpg" alt="Professional headshot" fill sizes="(max-width: 1024px) 50vw, 18vw" className={styles.photoImage} priority />
          <Image src="/landing%20images/actor-headshot-dark-background-toronto.jpg.jpg" alt="Professional headshot" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeA}`} priority />
        </div>

        <div className={styles.photo}>
          <Image src="/landing%20images/toronto-actress-headshot-studio-portrait.jpg.jpg" alt="Professional headshot" fill sizes="(max-width: 1024px) 50vw, 18vw" className={styles.photoImage} priority />
          <Image src="/landing%20images/actress-headshot-natural-makeup-studio.jpg.jpg" alt="Professional headshot" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeB}`} priority />
        </div>

        <div className={styles.photo}>
          <Image src="/landing%20images/toronto-artist-portrait-editorial-style.jpg.jpg" alt="Professional headshot" fill sizes="(max-width: 1024px) 50vw, 18vw" className={styles.photoImage} priority />
          <Image src="/landing%20images/theatrical-headshot-dramatic-lighting.jpg.jpg" alt="Professional headshot" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeC}`} priority />
        </div>

      </div>

    </section>
  )
}
