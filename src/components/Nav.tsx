'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Professionals', href: '#professionals' },
  { label: 'Actors', href: '#actors' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Bookings', href: '#bookings' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.brand}>
        CTS
      </Link>
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
          className={styles.instagram}
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </nav>
    </header>
  )
}
