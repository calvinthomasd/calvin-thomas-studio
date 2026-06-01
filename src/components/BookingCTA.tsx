import Link from 'next/link'
import styles from './BookingCTA.module.css'

export default function BookingCTA() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Book a Session</p>
      <h2 className={styles.heading}>WE&rsquo;D LOVE TO <span className={styles.headingBold}>WORK WITH YOU<span className={styles.dot}>.</span></span></h2>
      <p className={styles.sub}>
        Browse our packages and check availability below — sessions are relaxed, fun, and built around you.
      </p>
      <Link href="https://calvin-thomas-studio-ltd.square.site" target="_blank" rel="noopener noreferrer" className={styles.cta}>
        View Calendar &amp; Book <span className={styles.ctaArrow}>↗</span>
      </Link>
    </section>
  )
}
