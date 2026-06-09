'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './ProfessionalGallery.module.css'

const images: { src: string; alt: string }[] = [
  {
    src: '/professional-gallery/professional-headshot-woman-blazer-grey-backdrop.jpg',
    alt: 'Professional headshot of a woman with long blonde hair wearing an olive brown blazer over a white top, smiling warmly against a soft warm beige background',
  },
  {
    src: '/professional-gallery/executive-portrait-polished-toronto-dark.jpg',
    alt: 'Polished Toronto executive portrait of a woman with short natural blonde hair wearing a black turtleneck, arms crossed with a ring on her hand, with a direct and self-assured expression against a soft grey background',
  },
    {
    src: '/professional-gallery/attorney-headshot-studio-portrait-toronto.jpg',
    alt: 'Toronto attorney studio headshot with a professional and confident expression',
  },
    {
    src: '/professional-gallery/woman-side-profile-editorial.jpg',
    alt: 'Editorial side profile portrait of a woman with a clean and polished look',
  },
  {
    src: '/professional-gallery/executive-headshot-woman-blue-blouse-professional.jpg',
    alt: 'Professional executive headshot of a woman wearing a blue blouse against a studio background',
  },
  {
    src: '/professional-gallery/linkedin-headshot-professional-woman-studio.jpg',
    alt: 'LinkedIn professional headshot of a woman with long blonde wavy hair wearing a grey blazer over a white top, smiling warmly against a soft neutral grey studio background',
  },
  {
    src: '/professional-gallery/toronto-corporate-portrait-natural-light.jpg',
    alt: 'Toronto corporate portrait of a man with a full beard wearing a grey suit and open-collar light blue shirt, with a strong and composed expression against a soft warm grey background',
  },
  {
    src: '/professional-gallery/executive-headshot-confident-expression-toronto.jpg',
    alt: 'Toronto executive headshot of a young man with short hair and bold black-framed glasses, wearing a colourful striped shirt and a delicate necklace, with a confident smile against a warm grey background',
  },
  {
    src: '/professional-gallery/vocalist-headshot-clean-background-toronto.jpg',
    alt: 'Toronto vocalist headshot of a woman with locs wearing a leopard print beret, round glasses, pearl earrings, a gold necklace, and a sheer black lace top, with hands clasped and a warm composed expression against a dark teal background',
  },
  {
    src: '/professional-gallery/business-portrait-woman-glasses-professional.jpg',
    alt: 'Professional business portrait of a woman with a short dark bob and tortoiseshell glasses, wearing a dark structured button-front jacket, with a calm and authoritative expression against a soft light grey background',
  },
  {
    src: '/professional-gallery/musician-promotional-headshot-toronto.jpg',
    alt: 'Toronto musician promotional headshot of a woman with short blonde hair and black-framed glasses, wearing a bold red turtleneck sweater, seated with a calm composed expression against a textured grey backdrop',
  },
  {
    src: '/professional-gallery/toronto-business-portrait-modern-studio-light.jpg',
    alt: 'Toronto business portrait of a man with short dark hair and retro-style gold-framed glasses, wearing a cobalt blue mock-neck sweater, smiling warmly against a dark teal studio background',
  },
  {
    src: '/professional-gallery/corporate-headshot-man-beard-modern-studio.jpg',
    alt: 'Modern corporate headshot of a man with a full beard wearing a teal blazer over a white button-up shirt and round glasses, smiling confidently against a clean light grey studio background',
  },
  {
    src: '/professional-gallery/corporate-headshot-clean-backdrop-woman-blazer.jpg',
    alt: 'Corporate headshot of a young woman with long dark hair and a beauty mark, wearing a black top with a delicate gold necklace, looking back over her shoulder with a calm and striking expression against a dark teal studio background',
  },
  {
    src: '/professional-gallery/business-headshot-approachable-smile-natural.jpg',
    alt: 'Business headshot of a woman with short dark curly hair and gold earrings, wearing a colourful geometric-print top, beaming with a wide natural smile against a dark studio background',
  },
  {
    src: '/professional-gallery/professional-portrait-toronto-clean-modern-light.jpg',
    alt: 'Toronto professional portrait of a man with a short beard wearing a pink button-up shirt, laughing openly with a hand raised in a warm and approachable expression against a clean white background',
  },
  {
    src: '/professional-gallery/corporate-headshot-woman-white-blouse-clean.jpg',
    alt: 'Corporate headshot of a young woman with long wavy brunette hair wearing a cream ribbed turtleneck sweater, hands clasped and a gold watch visible, with a warm soft smile against a neutral grey studio background',
  },
  {
    src: '/professional-gallery/toronto-executive-headshot-navy-suit-confident.jpg',
    alt: 'Toronto executive headshot of a man with short red hair wearing a navy blazer over a light blue plaid shirt, with a confident and approachable expression against a soft grey studio background',
  },
  {
    src: '/professional-gallery/executive-portrait-woman-silver-hair-studio.jpg',
    alt: 'Executive studio portrait of a woman with long curly dark hair with highlights, wearing a black blazer over a light blue shirt, with a polished and composed expression against a deep dark background',
  },
  {
    src: '/professional-gallery/professional-headshot-woman-natural-smile-toronto.jpg',
    alt: 'Toronto professional headshot of a woman with straight blonde hair wearing a dark green tank top, beaming with a wide natural smile against a soft sage green background',
  },
  {
    src: '/professional-gallery/toronto-business-headshot-relaxed-natural-tones.jpg',
    alt: 'Toronto business headshot of a woman with curly dark hair and highlights wearing a black blazer and silver necklace, smiling warmly and confidently against a clean white background',
  },
  {
    src: '/professional-gallery/corporate-headshot-man-dark-background-toronto.jpg',
    alt: 'Corporate headshot of a man with dark hair and a full beard wearing a navy suit with a white shirt and burgundy polka-dot tie, smiling broadly and confidently against a soft grey background',
  },
  {
    src: '/professional-gallery/executive-headshot-crossed-arms-dark-background.jpg',
    alt: 'Executive headshot of a woman with long dark wavy hair and tortoiseshell glasses wearing a grey pinstripe blazer, resting her chin on her hand with a thoughtful and composed expression against a deep red background',
  },
  {
    src: '/professional-gallery/toronto-corporate-headshot-light-backdrop-woman.jpg',
    alt: 'Toronto corporate headshot of a woman with long dark wavy hair wearing a white wrap blouse and navy trousers, seated and smiling broadly against a muted olive green background',
  },
  {
    src: '/professional-gallery/business-headshot-woman-warm-smile-studio-light.jpg',
    alt: 'Business headshot of a woman with short curly auburn hair wearing a bold red blazer over a black top, smiling warmly and confidently against a soft blue-grey studio background',
  },
  {
    src: '/professional-gallery/lawyer-corporate-headshot-confident.jpg',
    alt: 'Confident corporate lawyer headshot in a professional studio setting',
  },
  {
    src: '/professional-gallery/toronto-business-portrait-modern-studio.jpg',
    alt: 'Toronto business portrait in a modern studio setting with a clean professional look',
  },
  {
    src: '/professional-gallery/linkedin-profile-headshot-man-charcoal-backdrop.jpg',
    alt: 'LinkedIn profile headshot of a man against a charcoal backdrop with a professional and confident expression',
  },
  {
    src: '/professional-gallery/professional-portrait-woman-leadership-confident.jpg',
    alt: 'Confident leadership portrait of a woman with a strong and polished professional presence in a studio setting',
  },
  {
    src: '/professional-gallery/linkedin-headshot-woman-confident-expression.jpg',
    alt: 'LinkedIn headshot of a woman with a confident and approachable expression against a clean studio background',
  },
  {
    src: '/professional-gallery/professional-headshot-man-glasses-dark-backdrop.jpg',
    alt: 'Professional headshot of a man wearing glasses against a dark backdrop with a composed and confident expression',
  },
  {
    src: '/professional-gallery/toronto-business-headshot-approachable-confident.jpg',
    alt: 'Toronto business headshot with an approachable and confident expression in a professional studio setting',
  },
  {
    src: '/professional-gallery/toronto-executive-headshot-signature-professional.jpg',
    alt: 'Signature Toronto executive headshot with a polished and professional studio look',
  },
  {
    src: '/professional-gallery/business-headshot-man-black-shirt-studio.jpg',
    alt: 'Business headshot of a man in a black shirt against a clean studio background',
  },
  {
    src: '/professional-gallery/professional-headshot-man-white-shirt-clean-crop.jpg',
    alt: 'Professional headshot of a man in a white shirt with a clean crop and polished studio look',
  },
  {
    src: '/landing-images/corporate-headshot-team-lead-confident-toronto-business.jpg',
    alt: 'Confident Toronto corporate headshot of a team lead in a professional studio setting',
  },
  {
    src: '/professional-gallery/linkedin-portrait-man-friendly-expression-toronto.jpg',
    alt: 'Toronto LinkedIn portrait of a man with a friendly and approachable expression',
  },
  {
    src: '/professional-gallery/corporate-headshot-woman-layered-blazer-warm.jpg',
    alt: 'Corporate headshot of a woman in a layered blazer with warm studio tones',
  },
  {
    src: '/professional-gallery/linkedin-headshot-woman-cream-blouse-soft-light.jpg',
    alt: 'LinkedIn headshot of a woman in a cream blouse with soft flattering studio light',
  },
  {
    src: '/professional-gallery/corporate-headshot-woman-black-white-tones.jpg',
    alt: 'Corporate headshot of a woman in black and white tones with a clean professional look',
  },
  {
    src: '/professional-gallery/toronto-corporate-portrait-natural-light-warm.jpg',
    alt: 'Toronto corporate portrait of a woman with dark hair pulled back wearing a navy blazer over a white top, with a composed and polished expression against a soft white background',
  },
  {
    src: '/professional-gallery/toronto-professional-headshot-warm-tones-studio.jpg',
    alt: 'Toronto professional headshot of a man with a shaved head and short beard wearing a navy suit and patterned tie, smiling broadly and confidently against a clean white background',
  },
  {
    src: '/professional-gallery/linkedin-headshot-professional-toronto.jpg',
    alt: 'Toronto LinkedIn headshot of a woman with short wavy blonde hair and blue eyes, wearing a dark navy blouse with pearl earrings, smiling warmly with arms crossed against a warm dusty rose background',
  },
  {
    src: '/professional-gallery/business-headshot-approachable-smile.jpg',
    alt: 'Business headshot of a woman with blonde hair pulled back wearing a black turtleneck, with red lips and blue eyes, smiling confidently against a dark moody background with warm amber tones',
  },
  {
    src: '/actor-gallery/toronto-linkedin-headshot-woman-professional-studio.jpg',
    alt: 'Toronto LinkedIn headshot woman professional studio',
  },
  {
    src: '/actor-gallery/corporate-headshot-man-modern-backdrop-polished.jpg',
    alt: 'Corporate headshot man modern backdrop polished',
  },
  {
    src: '/actor-gallery/professional-headshot-woman-confident-natural-toronto.jpg',
    alt: 'Professional headshot woman confident natural Toronto',
  },
  {
    src: '/actor-gallery/executive-portrait-man-clean-studio-approachable.jpg',
    alt: 'Executive portrait man clean studio approachable',
  },
]

export default function ProfessionalGallery() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [mounted])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, prev, next, closeLightbox])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  if (!mounted || images.length === 0) return null

  return (
    <>
      <section className={styles.gallery}>
        <div className={styles.grid}>
          {images.map((img, i) => (
            <div
              key={i}
              className={styles.item}
              ref={(el) => { itemRefs.current[i] = el }}
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 340px"
                loading="lazy"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className={styles.overlay} onClick={closeLightbox}>
          <button className={styles.lbPrev} onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">&#8592;</button>

          <div className={styles.lbImageWrap} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="100vw"
              className={styles.lbImage}
              priority
            />
          </div>

          <button className={styles.lbNext} onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">&#8594;</button>

          <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">&#x2715;</button>
        </div>
      )}
    </>
  )
}
