'use client'

import { useEffect, useRef } from 'react'
import styles from './Mission.module.css'

const SENTENCES = [
  'Calvin Thomas Studio is a Toronto-based headshot and portrait studio independently owned by Calvin and Gabi. With 17 years of experience, we\'ve photographed thousands of faces and our sessions are designed to feel effortless.',
]

export default function Mission() {
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
    <section ref={ref} className={styles.mission}>
      <div className={styles.labelWrap}>
        <p className={styles.label}>Our Studio</p>
      </div>
      {SENTENCES.map((sentence, i) => (
        <div key={i} className={styles.lineOuter}>
          <p
            className={styles.statement}
            style={{ animationDelay: `${0.15 + i * 0.2}s` }}
          >
            {sentence}
          </p>
        </div>
      ))}
    </section>
  )
}
