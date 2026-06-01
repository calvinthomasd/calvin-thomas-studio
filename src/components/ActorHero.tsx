import Image from 'next/image'
import styles from './ActorHero.module.css'

export default function ActorHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.label}>Actor Headshots &middot; Toronto</p>
        <h1 className={styles.heading}>
          <span className={styles.headingLight}>ACTOR </span><span className={styles.headingBold}>HEADSHOTS<span className={styles.dot}>.</span></span>
        </h1>
        <p className={styles.statement}>
          Creative, cinematic headshots and portraits for actors and performers. Photos that feel like you.
        </p>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src="/actor-gallery/toronto-actor-headshot-confident-expression.jpg"
          alt="Toronto actor headshot of a young man with curly dark hair and blue eyes, resting his hand against his cheek with a thoughtful, cinematic expression against a rich warm amber background"
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className={styles.image}
          priority
        />
      </div>
    </section>
  )
}
