import styles from './BookingsPage.module.css'
import StudioMap from './StudioMap'

export default function BookingsPage() {
  return (
    <main className={styles.page}>

      {/* Book your headshot */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          BOOK YOUR HEADSHOT<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Reservations</p>
          <div className={styles.altBodyText}>
            <p>Ready to book your headshot or portrait session? Click the link below to view our calendar and reserve your spot. If you don&apos;t see a suitable date or time, please reach out and we&apos;ll do our best to accommodate you, or you can join our waitlist.</p>
            <a
              href="https://calvin-thomas-studio-ltd.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              View Calendar &amp; Book <span className={styles.ctaArrow}>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          WHERE WE ARE<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Location</p>
          <div className={styles.altBodyText}>
            <p>Located at Dundas St W &amp; Dufferin Ave, Toronto. Sessions are by appointment only.</p>
            <div className={styles.mapWrap}>
              <StudioMap />
            </div>
          </div>
        </div>
      </section>

      {/* Have questions */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          HAVE QUESTIONS<span className={styles.dot}>?</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Get in Touch</p>
          <div className={styles.altBodyText}>
            <p>Everyone&apos;s photography needs are unique. Send us a quick message and let us know a bit about yourself and the type of headshot you&apos;re looking for. We&apos;ll get back to you within one business day.</p>
            <a href="mailto:info@calvinthomas.ca" className={styles.email}>
              info@calvinthomas.ca
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
