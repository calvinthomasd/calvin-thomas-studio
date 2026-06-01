'use client'

import { useEffect, useRef } from 'react'
import styles from './Tagline.module.css'

const PARAGRAPH = 'We make you look good. Headshots that feel real, photos that get you noticed. We create natural, modern, photos for actors, business professionals, and corporate teams. Sessions are relaxed, easy, and genuinely fun.'

export default function Tagline() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.revealed)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.labelWrap}>
        <p className={styles.label}>What we do</p>
      </div>
      <div className={styles.lineOuter}>
        <p className={styles.main}>{PARAGRAPH}</p>
      </div>
    </section>
  )
}
