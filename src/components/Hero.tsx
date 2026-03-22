import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Photo — crossfading pair */}
      <div className={styles.photoCluster}>
        <div className={styles.photo}>
          <Image
            src="/photo1.jpg"
            alt="Professional headshot portrait"
            fill
            sizes="(max-width: 600px) 75vw, (max-width: 1024px) 46vw, 30vw"
            className={styles.photoImage}
            priority
          />
          <Image
            src="/photo11.jpg"
            alt="Professional headshot portrait"
            fill
            sizes="(max-width: 600px) 75vw, (max-width: 1024px) 46vw, 30vw"
            className={`${styles.photoImage} ${styles.photoB}`}
            priority
          />
        </div>
      </div>

      {/* Headline */}
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

    </section>
  )
}
