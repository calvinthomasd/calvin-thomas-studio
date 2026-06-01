'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './Gallery.module.css'

const images = [
  { id: 1,  src: '/landing-images/actor-headshot-soft-light-clean-backdrop.jpg',      alt: 'Toronto actor headshot of a young woman with long dark brown hair and green eyes, wearing a black V-neck top, gazing directly at the camera with a calm expression against a deep dark teal background' },
  { id: 2,  src: '/landing-images/lawyer-corporate-headshot-confident.jpg',    alt: 'Actor headshot of a young woman with shoulder-length strawberry-blonde hair wearing a mustard yellow chunky knit sweater, resting her chin on her hand with a soft warm smile against a rich dark backdrop' },
  { id: 3,  src: '/landing-images/business-headshot-neutral-background.jpg',  alt: 'Toronto performing artist headshot of a young woman with long dark wavy hair, wearing a terracotta button-up shirt over a white top, beaming with a wide natural smile against a soft warm grey studio background' },
  { id: 4,  src: '/landing-images/business-headshot-woman-warm-smile-studio-light.jpg',   alt: 'Toronto artist portrait of a young woman with dark hair pulled back, wearing a cobalt blue ribbed turtleneck, arms loosely crossed, gazing thoughtfully upward against a moody dark olive-green background' },
  { id: 6,  src: '/landing-images/actress-headshot-hand-to-face-contemplative.jpg',       alt: 'Theatrical headshot of a young man with tousled curly brown hair and green eyes, cradling his face in both hands to reveal dark-painted nails, wearing a blue tie-dye shirt, with an introspective expression against a pale grey background' },
  { id: 7,  src: '/landing-images/toronto-business-portrait-modern-studio-light.jpg',        alt: 'Toronto actor headshot of a woman with long dark wavy hair wearing a soft grey oversized sweater, one hand lightly touching her collarbone, with a quietly intense gaze against a moody dark green-grey background' },
  { id: 8,  src: '/landing-images/toronto-actress-headshot-studio-portrait.jpg',    alt: 'Toronto actress studio portrait of a woman with short wavy brown hair and a nose ring, wearing a sheer white houndstooth blouse, leaning forward with a direct self-assured look against a warm glowing grey backdrop' },
  { id: 9,  src: '/landing-images/toronto-artist-portrait-editorial-style-hype.jpg',     alt: 'Toronto editorial-style portrait of a young woman with straight black hair wearing a textured green lace knit sweater and layered gold ear cuffs, seated with a quietly assured expression against a raw concrete wall' },
  { id: 10, src: '/landing-images/toronto-corporate-headshot-professional.jpg',     alt: 'Toronto corporate headshot of a man in a navy suit, white dress shirt, black tie, and rectangular glasses, smiling warmly with hands clasped and a silver watch visible against a dark grey studio background' },
  { id: 11, src: '/landing-images/actor-casting-headshot-neutral-expression.jpg',  alt: 'Actor casting headshot of a young woman with auburn hair swept back, blue-grey eyes, and gold hoop earrings, wearing a light grey plaid shirt and looking over her shoulder with a calm, neutral expression against a dark moody background' },
  { id: 12, src: '/landing-images/linkedin-headshot-professional-toronto.jpg',     alt: 'Toronto LinkedIn headshot of a young man with natural coily hair, wearing a light blue-grey plaid blazer over a white shirt, smiling broadly and confidently against a soft light grey studio background' },
  { id: 13, src: '/landing-images/theatrical-headshot-warm-tones-studio.jpg',      alt: 'Theatrical studio headshot of a young woman with long dark hair, a nose ring, and small gold hoop earrings, wearing an off-shoulder black top, gazing directly at the camera with an intense, quietly confident expression against a warm grey background' },
  { id: 14, src: '/landing-images/actress-headshot-natural-makeup-studio.jpg',      alt: 'Studio actress headshot of a young woman with long straight dark hair and striking blue-grey eyes, wearing small gold hoop earrings and a black square-neck top, with a confident neutral expression against a clean light grey backdrop' },
  { id: 15, src: '/landing-images/business-headshot-woman-studio-portrait.jpg',    alt: 'Business headshot of a woman with wavy blonde hair wearing a white ruffled blouse, resting her chin on her hand with a warm smile against a soft grey studio background' },
  { id: 16, src: '/landing-images/toronto-musician-headshot-studio-portrait.jpg', alt: 'Toronto musician studio headshot of a woman with short blonde natural hair, wearing a bold green chunky knit cardigan and a delicate gold necklace, arms folded with a calm, self-assured gaze against a textured grey-green background' },
  { id: 17, src: '/actor-gallery/actress-headshot-dark-background-editorial-toronto.jpg', alt: 'Toronto editorial actress headshot of a young woman with blonde hair swept back and gold hoop earrings, wearing a black tank top, with a calm and striking gaze against a dark teal background' },
]

function getColumns(colCount: number) {
  const cols: typeof images[] = Array.from({ length: colCount }, () => [])
  images.forEach((img, i) => { cols[i % colCount].push(img) })
  return cols
}

export default function Gallery() {
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
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className={styles.gallery}>
      <div className={styles.masonry}>
        {getColumns(4).map((columnImages, colIndex) => (
          <div key={colIndex} className={styles.col}>
            {columnImages.map((img, rowIndex) => (
              <div
                key={img.id}
                className={styles.imageWrapper}
                style={{ '--delay': `${colIndex * 0.07 + rowIndex * 0.11}s` } as React.CSSProperties}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  loading={img.id <= 4 ? 'eager' : 'lazy'}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
