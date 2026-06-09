import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Col 1: studio name */}
      <h1 className={styles.headline}>
        <span className={styles.headlineWord}>Calvin</span>
        <span className={styles.headlineWord}>Thomas</span>
        <span className={styles.headlineWord}>Studio</span>
      </h1>

      {/* Col 2: three offset crossfading photos */}
      <div className={styles.photoStrip}>
        <div className={styles.photo}>
          <Image src="/landing-images/toronto-film-actor-headshot-cinematic.jpg" alt="Toronto film actor headshot of a middle-aged man with short sandy hair and blue eyes wearing a dark teal button-up shirt, with a strong direct gaze against a gradient blue-grey background" fill sizes="(max-width: 1024px) 50vw, 18vw" className={styles.photoImage} priority />
          <Image src="/landing-images/actor-headshot-dark-background-toronto.jpg" alt="Toronto actor headshot of a young woman with long dark brown hair and green eyes in a black V-neck top, gazing directly at the camera against a deep dark teal background" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeA}`} />
          <Image src="/landing-images/business-headshot-woman-studio-portrait.jpg" alt="Business headshot of a woman with wavy blonde hair wearing a white ruffled blouse, resting her chin on her hand with a warm smile against a soft grey studio background" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeD}`} />
        </div>
        <div className={styles.photo}>
          <Image src="/landing-images/toronto-actress-headshot-studio-portrait.jpg" alt="Toronto actress studio portrait of a woman with short wavy brown hair and a nose ring, wearing a sheer white houndstooth blouse, leaning forward with a direct self-assured look against a warm glowing grey backdrop" fill sizes="(max-width: 1024px) 50vw, 18vw" className={styles.photoImage} priority />
          <Image src="/landing-images/actress-headshot-natural-makeup-studio.jpg" alt="Studio actress headshot of a young woman with long straight dark hair and striking blue-grey eyes wearing small gold hoop earrings and a black square-neck top, with a confident expression against a clean light grey backdrop" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeB}`} />
          <Image src="/landing-images/toronto-musician-headshot-studio-portrait.jpg" alt="Toronto musician studio headshot of a woman with short blonde natural hair, wearing a bold green chunky knit cardigan and a delicate gold necklace, arms folded with a calm, self-assured gaze against a textured grey-green background" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeD}`} />
        </div>
        <div className={styles.photo}>
          <Image src="/landing-images/toronto-artist-portrait-editorial-style-hype.jpg" alt="Toronto editorial-style portrait of a young woman with straight black hair wearing a textured green lace knit sweater and layered gold ear cuffs, seated against a raw concrete wall" fill sizes="(max-width: 1024px) 50vw, 18vw" className={styles.photoImage} priority />
          <Image src="/landing-images/performing-artist-headshot-toronto-studio.jpg" alt="Toronto performing artist headshot of a young woman with long dark wavy hair, wearing a terracotta button-up shirt over a white top, beaming with a wide natural smile against a soft warm grey studio background" fill sizes="(max-width: 1024px) 50vw, 18vw" className={`${styles.photoImage} ${styles.crossfadeC}`} />
        </div>
      </div>

      {/* Full-width tagline */}
      <p className={styles.tagline}>
        We make you look good. Headshots that feel real,
        photos that get you noticed.
      </p>

      <p className={styles.location}>Made in Toronto</p>

    </section>
  )
}
