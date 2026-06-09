import Image from 'next/image'
import styles from './HeroTitle.module.css'

const strip = [
  { n: '01', src: '/landing-images/actor-headshot-soft-light-clean-backdrop.jpg',        alt: 'Toronto actor headshot photographed in soft studio light against a clean neutral backdrop' },
  { n: '02', src: '/landing-images/lawyer-corporate-headshot-confident.jpg',             alt: 'Confident Toronto lawyer corporate headshot with a professional and authoritative expression' },
  { n: '03', src: '/landing-images/business-headshot-neutral-background.jpg',            alt: 'Toronto professional business headshot against a clean neutral studio background' },
  { n: '04', src: '/landing-images/business-headshot-woman-warm-smile-studio-light.jpg', alt: 'Toronto business headshot of a woman with a warm natural smile under soft studio lighting' },
  { n: '05', src: '/landing-images/actress-headshot-hand-to-face-contemplative.jpg',     alt: 'Toronto actress headshot with hand to face in a contemplative and thoughtful pose' },
  { n: '06', src: '/landing-images/toronto-business-portrait-modern-studio-light.jpg',   alt: 'Toronto business portrait photographed in a clean modern studio with professional lighting' },
  { n: '07', src: '/landing-images/toronto-actress-headshot-studio-portrait.jpg',        alt: 'Toronto actress studio portrait of a woman with short wavy brown hair in a sheer houndstooth blouse with a direct self-assured look' },
  { n: '08', src: '/landing-images/toronto-artist-portrait-editorial-style-hype.jpg',    alt: 'Toronto editorial portrait of a young woman with straight black hair in a textured green lace knit sweater and gold ear cuffs against a raw concrete wall' },
  { n: '09', src: '/landing-images/toronto-corporate-headshot-professional.jpg',         alt: 'Toronto corporate professional headshot with a polished and confident approachable expression' },
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
