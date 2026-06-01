import Image from 'next/image'
import styles from './About.module.css'

const items = [
  {
    index: '01',
    label: 'The Process.',
    text: "If the thought of being in front of a camera makes you nervous, you're in good company. Almost every client starts off feeling the same way. No experience needed, no stiff poses. Just show up as yourself and we'll take care of the rest.",
    photo: '/landing-images/corporate-headshot-team-lead-confident-toronto-business.jpg',
    alt: 'Confident Toronto corporate headshot of a team lead in a professional studio setting',
  },
  {
    index: '02',
    label: 'The Photos.',
    text: "We're always pushing our style forward, experimenting with lighting, composition, and mood to create headshots that actually stand out. Our goal is to find the version of you that feels honest and confident, then capture it in a way that looks modern and unmistakably yours.",
    photo: '/actor-gallery/film-actor-headshot-moody-cinematic-portrait.jpg',
    alt: 'Film actor headshot with a moody and cinematic portrait style',
  },
  {
    index: '03',
    label: 'The Studio.',
    text: "A wide range of lighting setups and backdrops gives us the flexibility to build multiple looks in a single session. A sharp, polished portrait for LinkedIn and something warmer for your personal brand can come from the same afternoon.",
    photo: '/landing-images/toronto-artist-portrait-editorial-style-hype.jpg',
    alt: 'Toronto editorial-style portrait of a young woman with straight black hair wearing a textured green lace knit sweater and layered gold ear cuffs, seated with a quietly assured expression against a raw concrete wall',
  },
]

export default function About() {
  return (
    <section className={styles.about}>
      {items.map((item) => (
        <div key={item.index} className={styles.row}>
          <div className={styles.meta}>
            <span className={styles.index}>[{item.index}]</span>
            <span className={styles.label}>{item.label}</span>
          </div>
          <p className={styles.text}>{item.text}</p>
          <div className={styles.imageWrap}>
            <Image
              src={item.photo}
              alt={item.alt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 28vw"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
