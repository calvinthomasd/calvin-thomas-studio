import Link from 'next/link'
import styles from './ReviewBanner.module.css'

export default function ReviewBanner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.heading}>
        <span>475+&nbsp;<span className={styles.accent}>5-Star</span></span>
        <span className={styles.bottomRow}>
          <span className={styles.reviewsWord}>Reviews</span>
          <Link href="https://www.google.com/search?client=safari&rls=en&q=calvin+headshots+toronto&ie=UTF-8&oe=UTF-8&sei=ykXdaZF0yMSu4Q_M9a6hDA#" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            View Reviews
          </Link>
        </span>
      </h2>
    </section>
  )
}
