'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

type FAQItem = { q: string; a: string | React.ReactNode }

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>FAQ<span className={styles.dot}>.</span></h2>

      <div className={styles.list}>
        {items.map(({ q, a }, i) => (
          <div key={i} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span>{q}</span>
              <span className={styles.icon} aria-hidden="true">
                {open === i ? '—' : '+'}
              </span>
            </button>
            {open === i && (
              <div className={styles.answer}>
                {typeof a === 'string' ? <p>{a}</p> : a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
