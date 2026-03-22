import Image from 'next/image'
import styles from './Gallery.module.css'

const images = [
  { id: 1, src: '/photo1.jpg' },
  { id: 2, src: '/photo2.jpg' },
  { id: 3, src: '/photo3.jpg' },
  { id: 4, src: '/photo4.jpg' },
  { id: 5, src: '/photo5.jpg' },
  { id: 6, src: '/photo6.jpg' },
  { id: 7, src: '/photo7.jpg' },
  { id: 8, src: '/photo8.jpg' },
  { id: 9, src: '/photo9.jpg' },
  { id: 10, src: '/photo10.jpg' },
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
