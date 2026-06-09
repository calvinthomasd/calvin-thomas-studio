'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Professionals', href: '/professionals' },
  { label: 'Actors', href: '/actors' },
  { label: 'Teams', href: '/teams' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
