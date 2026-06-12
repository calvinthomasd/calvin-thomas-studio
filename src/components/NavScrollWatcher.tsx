'use client'

import { useEffect } from 'react'
import styles from './Nav.module.css'

export function NavScrollWatcher() {
  useEffect(() => {
    const header = document.getElementById('site-nav') as HTMLElement | null
    if (!header) return
    const onScroll = () => header.classList.toggle(styles.scrolled, window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return null
}
