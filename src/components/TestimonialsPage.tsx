'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './TestimonialsPage.module.css'

const testimonials = [
  {
    quote: 'Had a great time shooting with Calvin! He creates a very inviting and laid back atmosphere and is a total pro at what he does. My photos turned out absolutely stunning.',
    name: 'Roshahn',
  },
  {
    quote: "Gabi is amazing! I'm usually not comfortable in front of a camera, but her friendly attitude and clear direction made it so easy. I love my photos!",
    name: 'Sage',
  },
  {
    quote: 'Gabi was such a joy to work with. She made me feel comfortable and confident, which really came out in my final headshots. She has a great eye for lighting and angles, and captured exactly the look I was hoping for. 10/10 would recommend!',
    name: 'Behdokht',
  },
  {
    quote: 'It was such a joy and pleasure meeting and working with Calvin! He helped guide me through the entire process and made me feel very comfortable and at ease. I received a wide variety of beautiful high quality photos. I am very grateful and would 100% recommend!',
    name: 'Robyn',
  },
  {
    quote: "My experience working with Calvin was the absolute best. Not only did he accommodate me in such a short time frame but he took the best photos I've ever seen of myself. Extremely talented!!",
    name: 'Arooj',
  },
  {
    quote: "Had a wonderful time getting my portrait taken by Gabi – she accurately captured my personality and kept the session feeling fun and relaxed. Highly recommend!",
    name: 'Susan',
  },
  {
    quote: "Calvin was fantastic to work with! The quality of his photography is top-tier, and he's such a friendly and approachable person. He worked closely with me to ensure the photos were exactly what I was going for.",
    name: 'Jake',
  },
  {
    quote: "Working with Calvin Thomas was a great experience. He makes you feel relaxed as he does his work and his work is exceptional. I'm thrilled with the headshots I got from Calvin and would highly recommend him to any artist.",
    name: 'Sam',
  },
  {
    quote: "Gabi is an excellent photographer. The whole experience, from arriving to receiving the headshot was perfectly smooth. I felt at ease — she guided me while shooting, gave me clear directions, and it was an open conversation about what I was hoping to achieve/wanted and how to get there. We tried a bunch of angles until we found the perfect settings that worked. Also, there is always chill music and cool vibes in the studio, which makes the experience even more fun.",
    name: 'Pauline',
  },
  {
    quote: "I couldn't have had a better experience working with Calvin on new professional headshots. From taking the photos themselves to the final images, it was a smooth and enjoyable process. Highly recommend!",
    name: 'Rachel',
  },
  {
    quote: "Had a great time working with Calvin! The headshots he took were top notch and super versatile. The vibe was chill and comfortable, and I have so many photos I can't wait to share.",
    name: 'Jules',
  },
  {
    quote: "Calvin was fantastic to work with! I hadn't taken head shots before and was feeling a bit anxious heading into it. He made the process comfortable and easygoing. Most importantly, the photos I got back were amazing!",
    name: 'Will',
  },
  {
    quote: "Working with Calvin was a highly enjoyable and so positive experience!! I am fully satisfied with everything — can't even pick my favourite shot. Will not hesitate to recommend Calvin to everyone.",
    name: 'Mihyeon',
  },
  {
    quote: "I'm so thrilled with my new professional headshots! Gabi did a fabulous job and directed the shoot very well, making you feel comfortable and bringing out your best smile. Her edits are wonderful and I've already used them for my LinkedIn and website. I look forward to returning in the future and highly recommend her.",
    name: 'Tanya',
  },
  {
    quote: "Calvin is hands down the best portrait photographer in Toronto. Doing a photo shoot with him was super fun. He has a great style, will make you feel comfortable, and will guide you to take the best pictures you've ever had.",
    name: 'Ingmar',
  },
  {
    quote: "My portrait session with Calvin was relaxing, fun, collaborative, and even healing. I've never associated such feelings with having my photo taken before. Calvin has a wonderful ease about him that made the experience enjoyable.",
    name: 'Ashley',
  },
  {
    quote: "Calvin is incredibly professional and great at what he does. It was a comfortable and fun process from start to finish, with a quick turnaround time for photos. Would highly recommend!",
    name: 'Sam',
  },
  {
    quote: "This was my first photoshoot which was for real estate and the experience was awesome! Like many others I am also really camera shy but Calvin made me feel relaxed, comfortable, and he even hyped me up too.",
    name: 'Christine',
  },
  {
    quote: "Incredible to walk into a studio and have the team immediately get who you are and how to capture it. Felt so comfortable and the pictures turned out incredible.",
    name: 'Gabrielle',
  },
  {
    quote: "Calvin is hands down the best choice for professional headshot photographer. Professional, organized, kind and produces great work. Thanks Calvin!",
    name: 'Paul',
  },
  {
    quote: "I had a great experience working with Gabi for my headshots. She is incredibly talented and, more importantly, has a way of making you feel completely at ease and comfortable behind the camera. The final edits turned out excellent and the turnaround was quick. If you're looking for high-quality photography in Toronto, I highly recommend her!",
    name: 'Stefan',
  },
  {
    quote: "I had an absolutely fantastic experience working with Gabi. From start to finish, everything felt effortless, professional, and genuinely enjoyable. Gabi created a very comfortable and relaxed atmosphere, which made a huge difference in helping me feel at ease in front of the camera. Her attention to detail, creativity, and ability to capture natural, authentic moments really stood out. She also took the time to understand what I was looking for and tailored the session accordingly, which I truly appreciated.",
    name: 'Gerry',
  },
  {
    quote: "Calvin is kind, professional, and obviously cares about his clients! He strikes a great balance between a fun and encouraging tone in the room, he is a quick and clear communicator - and of course we got the perfect shots!",
    name: 'Sara',
  },
  {
    quote: "Calvin took my corporate headshot 4.5 years ago (for my entire company) and I have always loved it, so when it came time for my personal headshot (for my book) I went back to Calvin and his artistic touch on each headshot has blown me out of the water! Him and Gabi are awesome.",
    name: 'Rosa',
  },
  {
    quote: "Calvin was masterful in our Professional Headshot session. His lead up instructions were clear. He simplified the process of wardrobe selection and focused on presenting the subject, myself. I was very impressed when I saw the results. It has been difficult to choose which pics I want to use. That's a great problem to have and exactly why I recommend Calvin.",
    name: 'Martin',
  },
  {
    quote: "Booked a professional session with Gabriella. From the initial booking to reviewing final edits, every step was quick and comfortable. The experience I had working with Gabi makes it easy to highly recommend.",
    name: 'Jon',
  },
  {
    quote: "This is the second time I have worked with Calvin and he and his work are honestly the best. His sessions are so comfortable and comprehensive, gives great practical notes to help capture you on camera in the most authentic way! I find my photos feel like me and are cinematic in a way that I resonate with. I recommend him to absolutely everyone that asks (and some who dont). I could sing his praises from the rooftops, I am already looking forward to the next time I get to work with him.",
    name: 'Mackenzie',
  },
  {
    quote: "It was such a pleasure to shoot with Gabi at the studio. She is an open-minded, authentic, and skillful photographer who managed to capture headshots that suited professional and semi-professional purposes. I felt extremely comfortable with her guidance and had lots of fun along the way. Thank you so much!!",
    name: 'Chenchen',
  },
  {
    quote: "Calvin and Gabi - such a treat! Such a great eye, a comfy environment to shoot in, and warm people to shoot with. Plus my shots are just -- chef's kiss. Thank you both!",
    name: 'Hannah',
  },
  {
    quote: "I have nothing but great things to say about my experience with Gabi. She made the process very comfortable, and captured photos that were professional but still showed my personality. She is incredibly skilled and it was an absolute pleasure to work with her. The final images were delivered quickly and I would absolutely recommend working with her.",
    name: 'Megan',
  },
]

export default function TestimonialsPage() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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
      { threshold: 0.15 }
    )
    itemRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <p className={styles.label}>Kind words</p>
      <h1 className={styles.heading}>
        WHAT OUR CLIENTS SAY<span className={styles.dot}>.</span>
      </h1>

      <div className={styles.list}>
        {testimonials.map(({ quote, name }, i) => (
          <div
            key={name + i}
            className={styles.item}
            ref={(el) => { itemRefs.current[i] = el }}
          >
            <blockquote className={styles.quote}>
              &ldquo;{quote}&rdquo;
            </blockquote>
            <p className={styles.name}>— {name}</p>
          </div>
        ))}
      </div>

      <Link
        href="https://www.google.com/maps/place/Calvin+Thomas+Photography+%7C+Toronto+Headshots/@43.6418086,-79.4252679,15z/data=!4m5!3m4!1s0x0:0xe217e8e48149dd25!8m2!3d43.6418086!4d-79.4252679"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.moreLink}
      >
        MORE GOOGLE REVIEWS <span className={styles.arrow}>→</span>
      </Link>
    </section>
  )
}
