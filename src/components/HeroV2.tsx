import Image from 'next/image'
import styles from './HeroV2.module.css'

export default function HeroV2() {
  return (
    <section className={styles.hero}>

      <div className={styles.text}>
        <p className={styles.label}>Headshots &amp; Portraits</p>
        <h1 className={styles.headline}>
          <span className={styles.headlineWord}>CALVIN</span>
          <span className={`${styles.headlineWord} ${styles.headlineWordThomas}`}>THOMAS</span>
          <span className={styles.headlineWord}>STUDIO<span className={styles.dot}>.</span></span>
        </h1>
        <p className={styles.label}>Made in Toronto</p>
      </div>

      <div className={styles.photoFrame}>
        <div className={styles.photoInner}>
          <Image src="/professional-gallery/corporate-headshot-man-beard-modern-studio.jpg" alt="Corporate headshot man beard" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d1}`} priority />
          <Image src="/landing-images/toronto-actress-headshot-studio-portrait.jpg" alt="Toronto actress headshot" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d2}`} priority />
          <Image src="/actor-gallery/theatrical-headshot-actor-arms-crossed-studio.jpg" alt="Theatrical headshot actor arms crossed" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d3}`} priority />
          <Image src="/landing-images/business-headshot-woman-studio-portrait.jpg" alt="Business headshot woman" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d4}`} />
          <Image src="/landing-images/actor-headshot-dark-background-toronto.jpg" alt="Toronto actor headshot" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d5}`} />
          <Image src="/professional-gallery/corporate-headshot-woman-layered-blazer-warm.jpg" alt="Corporate headshot woman blazer" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d6}`} />
          <Image src="/landing-images/toronto-film-actor-headshot-cinematic.jpg" alt="Toronto film actor headshot" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d7}`} />
          <Image src="/landing-images/performing-artist-headshot-toronto-studio.jpg" alt="Toronto performing artist" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d8}`} />
          <Image src="/landing-images/actress-headshot-natural-makeup-studio.jpg" alt="Actress headshot natural makeup" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d9}`} />
          <Image src="/landing-images/toronto-artist-portrait-editorial-style-hype.jpg" alt="Toronto artist portrait" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d10}`} />
        </div>
      </div>

    </section>
  )
}
