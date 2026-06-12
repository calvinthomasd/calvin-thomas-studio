import Link from 'next/link'
import styles from './Nav.module.css'
import { MobileMenuToggle } from './MobileMenuToggle'
import { NavScrollWatcher } from './NavScrollWatcher'

const links = [
  { label: 'Professionals', href: '/professionals' },
  { label: 'Actors', href: '/actors' },
  { label: 'Teams', href: '/teams' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
]

export default function Nav() {
  return (
    <>
      <header id="site-nav" className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Calvin Thomas Studio, home">
          CTS<span className={styles.brandSquare} aria-hidden="true" />
        </Link>

        <nav className={styles.navCenter}>
          {links.map(({ label, href }) => (
            <Link key={label} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.navRight}>
          <Link href="/bookings" className={styles.cta}>
            Book Now
          </Link>
          <a
            href="https://instagram.com/calvinthomasstudio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <MobileMenuToggle links={links} />
        </div>
      </header>
      <NavScrollWatcher />
    </>
  )
}
