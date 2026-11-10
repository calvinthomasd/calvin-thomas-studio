import styles from './BookingsPage.module.css'

export default function BookingsPage() {
  return (
    <main className={styles.page}>

      {/* Book your headshot */}
      <section className={styles.altSection}>
        <h1 className={styles.altHeading}>
          BOOK YOUR HEADSHOT<span className={styles.dot}>.</span>
        </h1>
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
            <p>Located at 1520 Dundas St W, Toronto, ON M6K 1T5. Sessions are by appointment only.</p>
            <div className={styles.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5773.833259285922!2d-79.43538312355273!3d43.64990287110228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34516ed65b31%3A0xa56c6ae237a1780!2s1520%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M6K%201T5!5e0!3m2!1sen!2sca!4v1794352308526!5m2!1sen!2sca"
                width="100%"
                height="100%"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Calvin Thomas Studio location"
              />
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
