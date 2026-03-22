import Link from 'next/link'
import styles from './ReviewBanner.module.css'

export default function ReviewBanner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.heading}>
        <span>450+&nbsp;<span className={styles.accent}>5-Star</span></span>
        <span className={styles.bottomRow}>
          <span>Reviews</span>
          <Link href="#testimonials" className={styles.cta}>
            <span className={styles.dot} />
            View Reviews
          </Link>
        </span>
      </h2>
    </section>
  )
}
