import Image from 'next/image'
import styles from './ProfessionalHero.module.css'

export default function ProfessionalHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.label}>Professional Headshots &middot; Toronto</p>
        <h1 className={styles.heading}>
          <span className={styles.headingLight}>PROFESSIONAL </span><span className={styles.headingBold}>HEADSHOTS<span className={styles.dot}>.</span></span>
        </h1>
        <p className={styles.statement}>
          Modern, polished headshots for business professionals, executives, and teams that make a lasting first impression.
        </p>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src="/professional-gallery/corporate-team-headshot-toronto-studio-group.jpg"
          alt="Toronto professional headshot of a woman with long dark hair wearing a black top, resting her chin on her hand with gold rings and red nails, with a composed and confident expression against a dark teal studio background"
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className={styles.image}
          priority
        />
      </div>
    </section>
  )
}
