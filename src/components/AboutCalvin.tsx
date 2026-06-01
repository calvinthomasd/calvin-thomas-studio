import Image from 'next/image'
import styles from './AboutCalvin.module.css'

export default function AboutCalvin() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrap}>
        <Image
          src="/additional-images/calvin-thomas-profession-headshots.jpg"
          alt="Calvin Thomas, Toronto headshot photographer and filmmaker, wearing an olive shirt and a relaxed smile against a soft grey background"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.name}>
          CALVIN THOMAS<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.bio}>
          Calvin Thomas is a Toronto-based photographer with over 17 years of experience creating headshots and portraits. Known for his cinematic approach to lighting and composition, Calvin has built our home studio to move effortlessly between polished professional portraits and striking, editorial-style looks in a single session.
        </p>
        <p className={styles.bio}>
          His creative vision extends beyond photography. Calvin is a filmmaker who has written and directed five feature films, including <em>White Lie</em> (2019). His most recent film, <em>The Temple</em>, wrapped principal photography in February 2026 and stars Daniel Zolghadri, Tamara Podemski, Cory Michael Smith, and Vic Carmen Sonne. It is set to be released in 2027.
        </p>
      </div>
    </section>
  )
}
