import Image from 'next/image'
import styles from './Gallery.module.css'

const images = [
  { id: 1,  src: '/landing-images/actor-headshot-dark-background-toronto.jpg',      alt: 'Toronto actor headshot of a young woman with long dark brown hair and green eyes, wearing a black V-neck top, gazing directly at the camera with a calm expression against a deep dark teal background' },
  { id: 2,  src: '/landing-images/actor-headshot-soft-light-clean-backdrop.jpg',    alt: 'Actor headshot of a young woman with shoulder-length strawberry-blonde hair wearing a mustard yellow chunky knit sweater, resting her chin on her hand with a soft warm smile against a rich dark backdrop' },
  { id: 3,  src: '/landing-images/actress-headshot-natural-makeup-studio.jpg',      alt: 'Studio actress headshot of a young woman with long straight dark hair and striking blue-grey eyes, wearing small gold hoop earrings and a black square-neck top, with a confident neutral expression against a clean light grey backdrop' },
  { id: 4,  src: '/landing-images/artist-headshot-creative-portrait-toronto.jpg',   alt: 'Toronto artist portrait of a young woman with dark hair pulled back, wearing a cobalt blue ribbed turtleneck, arms loosely crossed, gazing thoughtfully upward against a moody dark olive-green background' },
  { id: 5,  src: '/landing-images/business-headshot-neutral-background.jpg',        alt: 'Business headshot of a young woman with long box braids and a warm smile, wearing a grey ribbed button-front cardigan, photographed against a soft neutral grey studio background' },
  { id: 6,  src: '/landing-images/theatrical-headshot-dramatic-lighting.jpg',       alt: 'Theatrical headshot of a young man with tousled curly brown hair and green eyes, cradling his face in both hands to reveal dark-painted nails, wearing a blue tie-dye shirt, with an introspective expression against a pale grey background' },
  { id: 7,  src: '/landing-images/toronto-actor-headshot-natural-light.jpg',        alt: 'Toronto actor headshot of a woman with long dark wavy hair wearing a soft grey oversized sweater, one hand lightly touching her collarbone, with a quietly intense gaze against a moody dark green-grey background' },
  { id: 8,  src: '/landing-images/toronto-actress-headshot-studio-portrait.jpg',    alt: 'Toronto actress studio portrait of a woman with short wavy brown hair and a nose ring, wearing a sheer white houndstooth blouse, leaning forward with a direct self-assured look against a warm glowing grey backdrop' },
  { id: 9,  src: '/landing-images/toronto-artist-portrait-editorial-style.jpg',     alt: 'Toronto editorial-style portrait of a young woman with straight black hair wearing a textured green lace knit sweater and layered gold ear cuffs, seated with a quietly assured expression against a raw concrete wall' },
  { id: 10, src: '/landing-images/toronto-corporate-headshot-professional.jpg',     alt: 'Toronto corporate headshot of a man in a navy suit, white dress shirt, black tie, and rectangular glasses, smiling warmly with hands clasped and a silver watch visible against a dark grey studio background' },
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
