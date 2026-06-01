import Image from 'next/image'
import styles from './AboutHero.module.css'

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.label}>About Us</p>
        <h1 className={styles.heading}>
          CALVIN &amp; GABRIELLA<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.statement}>
          We are Toronto-based photographers specializing in headshots and portraits. Whether it&rsquo;s for your professional profile, LinkedIn avatar, next audition, or book cover, you deserve photos that authentically capture who you are. Our studio sessions are designed to put you at ease, turning what can feel intimidating into a relaxed and fun experience.
        </p>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src="/additional-images/toronto-headshot-photographer-team-calvin-gabi.jpg"
          alt="Calvin and Gabriella, Toronto headshot photographers and founders of Calvin Thomas Studio, photographed together in black and white against a soft grey background"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className={styles.image}
          priority
        />
      </div>
    </section>
  )
}
