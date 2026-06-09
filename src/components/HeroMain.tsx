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
          <Image src="/landing-images/toronto-film-actor-headshot-cinematic.jpg"        alt="Toronto film actor headshot of a middle-aged man with short sandy hair and blue eyes in a dark teal shirt, with a direct gaze against a gradient blue-grey background"  fill sizes="(max-width: 768px) 100vw, 58vw" className={styles.photoImg} priority />
          <Image src="/landing-images/toronto-actress-headshot-studio-portrait.jpg"     alt="Toronto actress studio portrait of a woman with short wavy brown hair and a nose ring in a sheer houndstooth blouse, leaning forward with a direct self-assured look"     fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d1}`} priority />
          <Image src="/landing-images/actress-headshot-natural-makeup-studio.jpg"       alt="Toronto actress headshot with natural makeup — a young woman with long straight dark hair and blue-grey eyes in a black square-neck top, confident expression against a light grey backdrop"             fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d2}`} priority />
          <Image src="/landing-images/actor-headshot-dark-background-toronto.jpg"       alt="Toronto actor headshot of a young woman with long dark brown hair and green eyes in a black V-neck top, gazing at the camera against a deep dark teal background"               fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d3}`} />
          <Image src="/landing-images/toronto-artist-portrait-editorial-style-hype.jpg" alt="Toronto editorial portrait of a young woman with straight black hair in a textured green lace knit sweater and layered gold ear cuffs, seated against a raw concrete wall"      fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d4}`} />
          <Image src="/landing-images/performing-artist-headshot-toronto-studio.jpg"    alt="Toronto performing artist headshot of a young woman with long dark wavy hair in a terracotta button-up shirt, beaming with a wide natural smile against a soft grey studio background"    fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d5}`} />
          <Image src="/landing-images/business-headshot-woman-studio-portrait.jpg"      alt="Toronto business headshot of a woman with wavy blonde hair in a white ruffled blouse, resting her chin on her hand with a warm smile against a soft grey studio background"            fill sizes="(max-width: 768px) 100vw, 58vw" className={`${styles.photoImg} ${styles.d6}`} />
        </div>

      </div>

    </section>
  )
}
