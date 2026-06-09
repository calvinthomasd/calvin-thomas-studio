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
          <Image src="/professional-gallery/corporate-headshot-man-beard-modern-studio.jpg" alt="Toronto corporate headshot of a bearded man photographed in a clean modern studio with a polished and confident expression" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d1}`} priority />
          <Image src="/landing-images/toronto-actress-headshot-studio-portrait.jpg" alt="Toronto actress studio portrait of a woman with short wavy brown hair and a nose ring in a sheer houndstooth blouse, with a direct self-assured look" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d2}`} priority />
          <Image src="/actor-gallery/theatrical-headshot-actor-arms-crossed-studio.jpg" alt="Toronto theatrical actor headshot of a man with arms crossed and an intense, commanding expression against a studio backdrop" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d3}`} priority />
          <Image src="/landing-images/business-headshot-woman-studio-portrait.jpg" alt="Toronto business headshot of a woman with wavy blonde hair in a white ruffled blouse, resting her chin on her hand with a warm smile against a soft grey studio background" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d4}`} />
          <Image src="/landing-images/actor-headshot-dark-background-toronto.jpg" alt="Toronto actor headshot of a young woman with long dark brown hair in a black V-neck top, gazing directly at the camera against a deep dark teal background" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d5}`} />
          <Image src="/professional-gallery/corporate-headshot-woman-layered-blazer-warm.jpg" alt="Toronto professional headshot of a woman in a layered warm-toned blazer with a composed and confident expression against a studio backdrop" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d6}`} />
          <Image src="/landing-images/toronto-film-actor-headshot-cinematic.jpg" alt="Cinematic Toronto film actor headshot of a man with short sandy hair and blue eyes, with a strong direct gaze against a gradient blue-grey background" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d7}`} />
          <Image src="/landing-images/performing-artist-headshot-toronto-studio.jpg" alt="Toronto performing artist headshot of a young woman with long dark wavy hair in a terracotta button-up shirt, smiling warmly against a soft grey studio background" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d8}`} />
          <Image src="/landing-images/actress-headshot-natural-makeup-studio.jpg" alt="Toronto actress headshot with natural makeup — a young woman with long straight dark hair and blue-grey eyes in a black square-neck top against a clean light grey backdrop" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d9}`} />
          <Image src="/landing-images/toronto-artist-portrait-editorial-style-hype.jpg" alt="Toronto editorial portrait of a young woman with straight black hair in a textured green lace knit sweater and gold ear cuffs, seated against a raw concrete wall" fill sizes="(max-width: 768px) 100vw, 42vw" className={`${styles.photoImg} ${styles.d10}`} />
        </div>
      </div>

    </section>
  )
}
