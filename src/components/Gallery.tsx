import Image from 'next/image'
import styles from './Gallery.module.css'

const images = [
  { id: 1,  src: '/landing%20images/actor-headshot-dark-background-toronto.jpg.jpg' },
  { id: 2,  src: '/landing%20images/actor-headshot-soft-light-clean-backdrop.jpg.jpg' },
  { id: 3,  src: '/landing%20images/actress-headshot-natural-makeup-studio.jpg.jpg' },
  { id: 4,  src: '/landing%20images/artist-headshot-creative-portrait-toronto.jpg.jpg' },
  { id: 5,  src: '/landing%20images/business-headshot-neutral-background.jpg.jpg' },
  { id: 6,  src: '/landing%20images/theatrical-headshot-dramatic-lighting.jpg.jpg' },
  { id: 7,  src: '/landing%20images/toronto-actor-headshot-natural-light.jpg.jpg' },
  { id: 8,  src: '/landing%20images/toronto-actress-headshot-studio-portrait.jpg.jpg' },
  { id: 9,  src: '/landing%20images/toronto-artist-portrait-editorial-style.jpg.jpg' },
  { id: 10, src: '/landing%20images/toronto-corporate-headshot-professional.jpg.jpg' },
]

function getColumns(colCount: number) {
  const cols: typeof images[] = Array.from({ length: colCount }, () => [])
  images.forEach((img, i) => {
    cols[i % colCount].push(img)
  })
  return cols
}

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.masonry}>
        {getColumns(4).map((columnImages, index) => (
          <div key={index} className={styles.col}>
            {columnImages.map((img) => (
              <div key={img.id} className={styles.imageWrapper}>
                <Image
                  src={img.src}
                  alt={`Portrait headshot ${img.id}`}
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
