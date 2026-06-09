'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './Testimonials.module.css'

const pairs = [
  [
    {
      quote: "Gabi was amazing! So professional and gave great direction. I'm extremely happy with the end results and would work with her again the first chance I get. Highly recommend!",
      name: 'Gillian',
    },
    {
      quote: "My experience working with Calvin was the absolute best. Not only did he accommodate me in such a short time frame but he took the best photos I've ever seen of myself. Extremely talented!!",
      name: 'Arooj',
    },
  ],
  [
    {
      quote: 'Working with Gabi was such a pleasure. From start to finish, I was impressed and put at ease by their set up, friendliness, and process. Professional shots are wonderful and I hope Gabi and I get to work together again in the future.',
      name: 'Kate',
    },
    {
      quote: 'Calvin took my corporate headshot 4.5 years ago (for my entire company) and I have always loved it, so when it came time for my personal headshot (for my book) I went back to Calvin and his artistic touch on each headshot has blown me out of the water! Him and Gabi are awesome.',
      name: 'Rosa',
    },
  ],
  [
    {
      quote: "Had a great time working with Calvin! The headshots he took were top notch and super versatile. The vibe was chill and comfortable, and I have so many photos I can't wait to share.",
      name: 'Jules',
    },
    {
      quote: "Gabi's ability to connect should be studied. She puts you at ease instantly and guides you through the session without ever making it feel too serious. She is the perfect cocktail of a consummate professional and a friend behind the camera. Thx, G.",
      name: 'Krisho',
    },
  ],
  [
    {
      quote: 'I was quite stressed about having my headshots done but Gabi was amazing. She made me relax and went above and beyond my requirements. I highly recommend her for a seamless and joyous process.',
      name: 'Gail',
    },
    {
      quote: "Calvin is hands down the best portrait photographer in Toronto. Doing a photo shoot with him was super fun. He has a great style, will make you feel comfortable, and will guide you to take the best pictures you've ever had.",
      name: 'Ingmar',
    },
  ],
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'exiting' | 'entering'>('idle')
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goTo = useCallback((next: number) => {
    if (phase !== 'idle') return
    setDirection(next >= index ? 'next' : 'prev')
    setPhase('exiting')
    setTimeout(() => {
      setIndex((next + pairs.length) % pairs.length)
      setPhase('entering')
      setTimeout(() => setPhase('idle'), 220)
    }, 220)
  }, [phase, index])

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 10000)
    return () => clearInterval(timer)
  }, [index, goTo])

  const pair = pairs[index]

  const phaseClass =
    phase === 'exiting'
      ? (direction === 'next' ? styles.exitNext : styles.exitPrev)
      : phase === 'entering'
        ? (direction === 'next' ? styles.enterNext : styles.enterPrev)
        : ''

  return (
    <section className={styles.section}>
      <div className={`${styles.pair} ${phaseClass}`}>
        {pair.map((review, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
            <span className={styles.name}>&mdash; {review.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => goTo(index - 1)}
          aria-label="Previous reviews"
        >
          &#8592;
        </button>
        <div className={styles.dots}>
          {pairs.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className={styles.arrow}
          onClick={() => goTo(index + 1)}
          aria-label="Next reviews"
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}
