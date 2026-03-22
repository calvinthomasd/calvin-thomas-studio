import Link from 'next/link'
import styles from './Footer.module.css'

const links = [
  { label: 'Professionals', href: '#professionals' },
  { label: 'Actors', href: '#actors' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Bookings', href: '#bookings' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={styles.wordmark}>
          <span className={styles.word}>Calvin</span>
          <span className={styles.word}>Thomas</span>
          <span className={styles.word}>Studio</span>
        </div>

        <div className={styles.contact}>
          <span className={styles.contactDot} aria-hidden="true" />
          <p className={styles.contactLabel}>Contact</p>
          <a href="mailto:info@calvinthomas.ca" className={styles.contactEmail}>
            info@calvinthomas.ca
          </a>
        </div>
      </div>

      <div className={styles.bar}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Calvin Thomas Studio. Made in Toronto.
        </p>
        <nav className={styles.nav}>
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
          <a
            href="https://instagram.com/calvinthomasstudio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  )
}
