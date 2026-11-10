import Link from 'next/link'
import styles from './ReviewBanner.module.css'

export default function ReviewBanner() {
  return (
    <section className={styles.banner}>
      <p className={styles.label}>Toronto&apos;s best rated headshot studio</p>
      <h2 className={styles.heading}>
        <span>500+&nbsp;<span className={styles.accent}>5-Star</span></span>
        <span className={styles.bottomRow}>
          <span className={styles.reviewsWord}>Reviews</span>
          <Link href="https://search.google.com/local/reviews?placeid=ChIJJx1neAA1K4gRJd1JgeToF-I" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            View Reviews
          </Link>
        </span>
      </h2>
    </section>
  )
}
