import Image from 'next/image'
import styles from './About.module.css'

const items = [
  {
    index: '01',
    label: 'The Process.',
    text: "If the thought of being in front of a camera makes you nervous — you're in good company. Almost every client starts off feeling the same way. No experience needed, no stiff poses. Just show up as yourself and we'll take care of the rest.",
    photo: '/landing-images/toronto-lawyer-headshot-professional.jpg',
    alt: 'Toronto professional headshot of a woman with long wavy dark brown hair wearing a beige blazer over a white top and layered gold necklaces, smiling broadly and confidently against a warm taupe studio background',
  },
  {
    index: '02',
    label: 'The Photos.',
    text: "The goal is to capture your actual personality. Different expressions, different energy, plenty of options to choose from. No artificial poses or heavy editing — just images that genuinely look like you on your best day.",
    photo: '/landing-images/theatrical-headshot-dramatic-lighting.jpg',
    alt: 'Theatrical headshot of a young man with tousled curly brown hair and green eyes, cradling his face in both hands to reveal dark-painted nails, wearing a blue tie-dye shirt with an introspective expression against a pale grey background',
  },
  {
    index: '03',
    label: 'The Studio.',
    text: "Soft lighting and a wide range of backdrops give us the flexibility to create multiple looks in a single session. Whether you need a sharp LinkedIn photo or something warmer and more personal, we'll get both.",
    photo: '/landing-images/toronto-artist-portrait-editorial-style.jpg',
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
