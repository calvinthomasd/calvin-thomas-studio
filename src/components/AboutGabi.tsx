import Image from 'next/image'
import styles from './AboutGabi.module.css'

export default function AboutGabi() {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2 className={styles.name}>
          GABRIELLA PIRRAGLIA<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.bio}>
          After 15 years working in advertising and high-growth startups, Gabriella Pirraglia brought her deep expertise in client relationships and creative execution to the world of professional photography. Now the associate photographer at the studio, she combines a strong understanding of brand, presentation, and communication with modern and timeless photography.
        </p>
        <p className={styles.bio}>
          With an instinct for connection and a sharp eye for detail, Gabriella helps clients show up as their best selves and leave with images that feel authentic, confident, and elevated.
        </p>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src="/additional-images/gabi-pirraglia-professional-headshots.jpg"
          alt="Gabriella Pirraglia, associate photographer at Calvin Thomas Studio, wearing a black top with arms crossed and a warm expression against a moody grey-green studio background"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className={styles.image}
        />
      </div>
    </section>
  )
}
