'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './ActorGallery.module.css'

const images: { src: string; alt: string }[] = [
   {
    src: '/actor-gallery/theatrical-headshot-serious-expression-studio.jpg',
    alt: 'Theatrical studio headshot of a young woman with long box braids, a nose ring, and a diamond stud earring, wearing a white collared top, with a calm and direct expression against a dark teal background',
  },
    {
    src: '/actor-gallery/actor-headshot-button-up-shirt-studio-light.jpg',
    alt: 'Actor headshot of a middle-aged man with short sandy hair and blue eyes wearing a dark teal button-up shirt, with a strong direct gaze against a soft grey studio background',
  },
   {
    src: '/actor-gallery/toronto-actor-headshot-modern-studio-editorial.jpg',
    alt: 'Toronto actor headshot modern studio editorial',
  },
  {
    src: '/actor-gallery/actress-headshot-soft-lighting-toronto-portrait.jpg',
    alt: 'Actress headshot soft lighting Toronto portrait',
  },
  {
    src: '/actor-gallery/toronto-actress-headshot-commercial-smile.jpg',
    alt: 'Toronto actress headshot of a woman with long dark hair, a nose ring, and gold hoop earrings, wearing an off-shoulder black top and looking directly at the camera with a quietly intense expression against a warm grey background',
  },
  {
    src: '/actor-gallery/voice-actor-headshot-approachable-look.jpg',
    alt: 'Voice actor headshot with a warm and approachable expression',
  },
  {
    src: '/actor-gallery/actor-gta-headshots-hamilton.jpg',
    alt: 'Actor GTA headshots Hamilton studio portrait',
  },
   {
    src: '/actor-gallery/toronto-actor-headshot-leather-jacket-urban.jpg',
    alt: 'Toronto actor headshot wearing a leather jacket with an urban, edgy expression',
  },
    {
    src: '/actor-gallery/actor-commercial-headshot-friendly-smile.jpg',
    alt: 'Actor commercial headshot with a warm and friendly smile',
  },
   {
    src: '/actor-gallery/actor-headshot-white-tshirt-clean-backdrop.jpg',
    alt: 'Actor headshot in a white t-shirt against a clean studio backdrop',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-natural-light-studio.jpg',
    alt: 'Toronto actor headshot of a young woman with short auburn hair and freckles, glancing back over her shoulder with a curious expression against a soft light background',
  },
  {
    src: '/actor-gallery/actor-headshot-close-crop-intense-gaze.jpg',
    alt: 'Close-crop actor headshot of a young woman with curly dark hair, gold hoop earrings, and a delicate necklace, wearing a white tank top with a calm, direct gaze against a soft grey backdrop',
  },
    {
    src: '/actor-gallery/toronto-headshot-bearded-actor-intense-look.jpg',
    alt: 'Toronto headshot of a bearded actor with an intense and commanding expression',
  },
  {
    src: '/actor-gallery/toronto-film-actor-headshot-cinematic-tones.jpg',
    alt: 'Toronto film actor headshot of a woman with long dark wavy hair wearing a black sleeveless V-neck top, with bold brows and a composed expression against a dark cinematic teal backdrop',
  },
   {
    src: '/actor-gallery/actress-headshot-soft-smile-cream-backdrop.jpg',
    alt: 'Actress headshot with a soft smile against a warm cream backdrop',
  },
  {
    src: '/actor-gallery/theatrical-headshot-dramatic-lighting-dark-backdrop.jpg',
    alt: 'Theatrical actor headshot of a young man with dark curly hair, wearing a white tank top, with a calm direct gaze against a warm amber-brown backdrop',
  },
  {
    src: '/actor-gallery/toronto-theatre-actor-headshot-moody-lighting.jpg',
    alt: 'Toronto theatre actor headshot of a young woman with long dark wavy hair, resting her chin on her dark-painted hand and gazing directly at the camera with a pensive expression, shot in black and white against a deep dark background',
  },
  {
    src: '/actor-gallery/actor-casting-headshot-neutral-expression.jpg',
    alt: 'Actor casting headshot of a young woman with auburn hair swept back, blue-grey eyes, and gold hoop earrings, wearing a light grey plaid shirt and looking over her shoulder with a calm, neutral expression against a dark moody background',
  },
  {
    src: '/actor-gallery/actress-headshot-soft-studio-light-warm.jpg',
    alt: 'Actress headshot of a young woman with long dark hair glancing back over her shoulder with a soft smile, wearing a grey t-shirt against a bright teal studio backdrop',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-confident-expression-clean.jpg',
    alt: 'Toronto actor headshot of a woman with long blonde hair and blue eyes wearing a black top, with a composed and direct expression against a deep dark studio background',
  },
  {
    src: '/actor-gallery/toronto-voice-actor-headshot-approachable-look.jpg',
    alt: 'Toronto voice actor headshot of a man with short hair wearing an olive ribbed polo, with a strong, steady gaze against a dark teal studio background',
  },
  {
    src: '/actor-gallery/actor-headshot-grey-backdrop-relaxed-expression.jpg',
    alt: 'Actor headshot of a young woman with long dark wavy hair wearing a terracotta shirt over a white top, beaming with a wide natural smile against a warm grey backdrop',
  },
  {
    src: '/actor-gallery/toronto-singer-headshot-warm-studio-light.jpg',
    alt: 'Toronto singer headshot of a young woman with long auburn hair wearing a deep blue long-sleeve top, seated with hands clasped and a calm, direct expression against a soft warm grey studio background',
  },
  {
    src: '/actor-gallery/actor-dramatic-headshot-black-background-close.jpg',
    alt: 'Dramatic actor headshot of a man with a full beard wearing a navy blazer over a light blue shirt, hands clasped, with a commanding and intense gaze against a deep textured blue-black background',
  },
  {
    src: '/actor-gallery/actor-headshot-natural-makeup-studio-portrait.jpg',
    alt: 'Studio actor headshot of a woman with box braids wearing a white puff-sleeve top, resting her chin on her hand with a serene expression, shot in black and white against a soft light backdrop',
  },
  {
    src: '/actor-gallery/film-actor-headshot-moody-cinematic-portrait.jpg',
    alt: 'Film actor headshot of a young man with short dark hair and a neat beard wearing an open navy jacket, with a composed and thoughtful expression against a pale off-white background',
  },
  {
    src: '/actor-gallery/toronto-performing-artist-headshot-studio.jpg',
    alt: 'Toronto performing artist headshot of a young woman with wavy auburn hair, freckles, and a nose ring, wearing a multicoloured knit sweater and glancing back over her shoulder with a soft gaze against a neutral grey background',
  },
  {
    src: '/actor-gallery/actor-commercial-headshot-friendly-smile-toronto.jpg',
    alt: 'Toronto commercial actor headshot of a young woman with short wavy auburn hair and bangs, wearing a white sleeveless top and touching her hair with a gentle smile, visible tattoos on her arm against a warm dusty rose background',
  },
  {
    src: '/actor-gallery/actress-headshot-curly-hair-natural-expression.jpg',
    alt: 'Actor headshot of a young man with dark wavy hair wearing a black t-shirt, looking over his shoulder with a calm, composed expression against a mottled sage-green studio backdrop',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-warm-smile-natural.jpg',
    alt: 'Toronto actor headshot of a young man with dark hair wearing a sherpa-collar denim jacket over a white t-shirt, laughing naturally with eyes closed against a bold warm amber-red background',
  },
  {
    src: '/actor-gallery/toronto-theatre-actor-headshot-editorial-style.jpg',
    alt: 'Toronto theatre actor editorial headshot of a man with vitiligo wearing a mustard yellow button-up shirt, leaning forward with arms folded and a warm engaging smile against a soft off-white background',
  },
  {
    src: '/actor-gallery/theatrical-headshot-warm-tones-brown-backdrop.jpg',
    alt: 'Theatrical headshot of a woman with voluminous dark curly hair wearing a sheer olive floral top, with a direct and expressive gaze against a warm brown studio backdrop',
  },
  {
    src: '/actor-gallery/toronto-actor-casting-headshot-charcoal-backdrop.jpg',
    alt: 'Toronto actor casting headshot of a woman with close-cropped hair wearing a mustard yellow textured shirt, with a calm and quietly intense expression against a dark charcoal-teal backdrop',
  },
  {
    src: '/actor-gallery/actor-headshot-short-hair-studio-portrait.jpg',
    alt: 'Actor studio headshot of a young woman with shoulder-length blonde hair wearing a black embroidered top and red lips, with a direct and composed gaze against a rich warm amber-brown background',
  },
  {
    src: '/actor-gallery/actress-theatrical-headshot-long-hair-studio.jpg',
    alt: 'Theatrical actress headshot of a young woman with long auburn hair wearing a green jacket, with a soft approachable expression against a clean light grey studio background',
  },
  {
    src: '/actor-gallery/actress-commercial-headshot-warm-brown-tones.jpg',
    alt: 'Actress commercial headshot of a woman with long straight brown hair wearing an open-knit off-shoulder dark sweater, hand raised to her head with a relaxed half-smile against a dark moody blue-grey backdrop',
  },
  {
    src: '/actor-gallery/actress-dramatic-headshot-dark-hair-moody.jpg',
    alt: 'Dramatic actress headshot of a woman with long dark hair, layered gold earrings, and a small neck tattoo, wearing a sheer burgundy blouse with a steady and intense gaze against a deep teal studio background',
  },
  {
    src: '/actor-gallery/actress-headshot-black-turtleneck-editorial.jpg',
    alt: 'Editorial actor headshot of a young man with dark curly hair wearing a sage green turtleneck, with a soft natural expression and a small earring against a dark moody studio background',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-confident-smile-grey.jpg',
    alt: 'Toronto actor headshot of a man with short curly hair, a neat goatee, and a small hoop earring, wearing a dark navy shirt and looking back over his shoulder with a composed expression against a clean light grey background',
  },
  {
    src: '/actor-gallery/actress-headshot-hand-to-face-contemplative.jpg',
    alt: 'Actor headshot of a young man with tousled sandy hair wearing a navy blue button-up shirt and ripped jeans, resting his hand against his neck with a small heart tattoo, with a relaxed contemplative look against a textured grey background',
  },
  {
    src: '/actor-gallery/actor-commercial-headshot-black-and-white.jpg',
    alt: 'Black and white commercial actor headshot of a man with slicked-back hair and a thick moustache, cradling his face in both hands with lace-cuffed sleeves and a ring, gazing upward with a theatrical expression against a light background',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-side-lighting-dramatic.jpg',
    alt: 'Toronto actor headshot of a young woman with wavy auburn hair wearing an olive green tank top, looking back over her shoulder with a direct, cool expression against a warm amber-red background',
  },
  {
    src: '/actor-gallery/toronto-actoress-headshot-natural-expression-light.jpg',
    alt: 'Toronto actress headshot with a natural expression in soft studio light',
  },
  {
    src: '/actor-gallery/theatrical-headshot-actor-arms-crossed-studio.jpg',
    alt: 'Theatrical actor headshot of a young man with short natural hair, a nose ring, and a small earring, wearing a grey t-shirt, with an intense and focused expression against a dark blue-grey background',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-warm-natural-tones.jpg',
    alt: 'Toronto actor headshot of a young man with shaggy dark hair and a beard, wearing a white t-shirt under a black leather jacket, with a relaxed and natural expression against a dark moody background',
  },
  {
    src: '/actor-gallery/actress-headshot-dark-background-editorial-toronto.jpg',
    alt: 'Toronto editorial actress headshot of a young woman with blonde hair swept back and gold hoop earrings, wearing a black tank top, with a calm and striking gaze against a dark teal background',
  },
  {
    src: '/actor-gallery/actress-commercial-headshot-bright-natural-light.jpg',
    alt: 'Commercial actress headshot in bright natural light with a warm and approachable expression',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-three-quarter-profile.jpg',
    alt: 'Toronto actor headshot in a three-quarter profile angle with a composed and cinematic expression',
  },
  {
    src: '/actor-gallery/theatrical-headshot-bearded-actor-intense-look.jpg',
    alt: 'Theatrical headshot of a bearded actor with an intense and commanding expression against a studio background',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-natural-expression-light.jpg',
    alt: 'Toronto actor headshot with a natural expression and soft studio light for a relaxed and authentic look',
  },
  {
    src: '/actor-gallery/actress-headshot-blonde-hair-soft-lighting.jpg',
    alt: 'Actress headshot with blonde hair in soft studio lighting',
  },
  {
    src: '/actor-gallery/toronto-actor-portfolio-headshot-signature-style.jpg',
    alt: 'Toronto actor portfolio headshot with a signature cinematic style',
  },
  {
    src: '/actor-gallery/actor-commercial-headshot-white-sweater-warm.jpg',
    alt: 'Actor commercial headshot wearing a white sweater with warm studio tones',
  },
  {
    src: '/actor-gallery/toronto-film-actress-headshot-dramatic-portrait.jpg',
    alt: 'Toronto film actress headshot with a dramatic and cinematic portrait style',
  },
  {
    src: '/actor-gallery/toronto-actra-actor-photography.jpg',
    alt: 'Toronto ACTRA actor photography studio headshot',
  },
  {
    src: '/actor-gallery/theatrical-headshot-expressive-close-crop.jpg',
    alt: 'Theatrical headshot expressive close crop studio portrait',
  },
  {
    src: '/actor-gallery/actor-headshot-studio-soft-tones-editorial.jpg',
    alt: 'Actress headshot studio soft tones editorial portrait',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-natural-studio-portrait.jpg',
    alt: 'Toronto actor headshot natural studio portrait',
  },
  {
    src: '/actor-gallery/actress-theatrical-headshot-moody-backdrop-toronto.jpg',
    alt: 'Actress theatrical headshot moody backdrop Toronto',
  },
  {
    src: '/actor-gallery/actor-casting-headshot-warm-cinematic-light.jpg',
    alt: 'Actor casting headshot warm cinematic light',
  },
  {
    src: '/actor-gallery/toronto-actress-headshot-editorial-confident.jpg',
    alt: 'Toronto actress headshot editorial confident',
  },
  {
    src: '/actor-gallery/actor-headshot-dramatic-portrait-toronto-studio.jpg',
    alt: 'Actor headshot dramatic portrait Toronto studio',
  },
  {
    src: '/actor-gallery/toronto-actress-commercial-headshot-bright-natural.jpg',
    alt: 'Toronto actress commercial headshot bright natural',
  },
  {
    src: '/actor-gallery/theatrical-actor-headshot-close-crop-expressive.jpg',
    alt: 'Theatrical actor headshot close crop expressive',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-warm-studio-confident.jpg',
    alt: 'Toronto actor headshot warm studio confident',
  },
  {
    src: '/actor-gallery/theatrical-headshot-actress-dramatic-close-crop.jpg',
    alt: 'Theatrical headshot actress dramatic close crop',
  },
  {
    src: '/actor-gallery/actor-casting-headshot-natural-expression-toronto.jpg',
    alt: 'Actor casting headshot natural expression Toronto',
  },
  {
    src: '/actor-gallery/toronto-actor-headshot-studio-natural-warm-tones.jpg',
    alt: 'Toronto actor headshot studio natural warm tones',
  },
]

export default function ActorGallery() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
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
  }, [])

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
                sizes="(max-width: 768px) 50vw, 25vw"
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
