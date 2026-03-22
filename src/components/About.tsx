import Image from 'next/image'
import styles from './About.module.css'

const items = [
  {
    index: '01',
    label: 'The Process.',
    text: "If the thought of being in front of a camera makes you nervous — you're in good company. Almost every client starts off feeling the same way. No experience needed, no stiff poses. Just show up as yourself and we'll take care of the rest.",
    photo: '/photo12.jpg',
  },
  {
    index: '02',
    label: 'The Photos.',
    text: "The goal is to capture your actual personality. Different expressions, different energy, plenty of options to choose from. No artificial poses or heavy editing — just images that genuinely look like you on your best day.",
    photo: '/photo6.jpg',
  },
  {
    index: '03',
    label: 'The Studio.',
    text: "Soft lighting and a wide range of backdrops give us the flexibility to create multiple looks in a single session. Whether you need a sharp LinkedIn photo or something warmer and more personal, we'll get both.",
    photo: '/photo9.jpg',
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
              alt={item.label}
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
