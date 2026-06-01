'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import styles from './FamilyGallery.module.css'

const images = [
  '0N3A0311.jpg',
  '0N3A0398.jpg',
  '0N3A0462.jpg',
  '0N3A0557.jpg',
  '0N3A0641.jpg',
  '0N3A0651.jpg',
  '0N3A0674.jpg',
  '0N3A0732.jpg',
  '0N3A0739.jpg',
  '0N3A0772.jpg',
  '0N3A0877.jpg',
  '0N3A0901.jpg',
  '2N6A0297.jpg',
  '2N6A0316.jpg',
  '2N6A0331.jpg',
  '2N6A0563.jpg',
  '2N6A0567.jpg',
  '2N6A0639.jpg',
  '2N6A0640.jpg',
  '2N6A0722.jpg',
  '2N6A9688.jpg',
  '2N6A9752.jpg',
]

export default function FamilyGallery() {
  const [index, setIndex] = useState(0)

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <div className={styles.page}>

      <button className={styles.zone} onClick={prev} aria-label="Previous">
        <span className={styles.arrow}>&#9664;</span>
      </button>

      <div className={styles.frame}>
        {images.map((img, i) => {
          const distance = Math.min(
            Math.abs(i - index),
            images.length - Math.abs(i - index)
          )
          return (
            <Image
              key={img}
              src={`/family-gallery/${img}`}
              alt={`Family photo ${i + 1}`}
              fill
              sizes="52vw"
              className={`${styles.photo} ${i === index ? styles.photoActive : styles.photoInactive}`}
              priority={distance <= 1}
            />
          )
        })}
      </div>

      <button className={styles.zone} onClick={next} aria-label="Next">
        <span className={styles.arrow}>&#9654;</span>
      </button>

      <div className={styles.title}>
        <p className={styles.titleMain}>Family</p>
        <p className={styles.titleSub}>by Calvin Thomas &amp; Gabriella Pirraglia</p>
      </div>

    </div>
  )
}
