import Image from 'next/image'
import styles from './ProfessionalPricing.module.css'
import FAQ from './FAQ'

const faqs = [
  {
    q: "What if I'm nervous or not photogenic?",
    a: (<><p>If the thought of being in front of a camera makes you nervous, you&apos;re in good company. Almost every client starts off feeling the same way. Our main goal is to make you feel comfortable and at ease. You don&apos;t need any experience in front of a camera. We&apos;ll focus on keeping the session fun and relaxed, and the natural, authentic shots always follow.</p><p>A lot of actors actually feel less comfortable in front of a still camera than a motion picture one. The performance is totally different, and it can feel strange at first. But you&apos;ll quickly realize there&apos;s no way to mess a photo up. We&apos;re constantly trying things, experimenting, collaborating, and laughing.</p></>),
  },
  {
    q: "I don't want a stiff professional headshot, can I get something that feels creative?",
    a: (<><p>We will make lighting and backdrop choices that look and feel creative. This often can mean layering backdrops, lighting that has some depth/shadow, and more relaxed posing during the session. We also encourage people to consider less formal wardrobe choices which can be a big part of what makes a photo look &ldquo;more creative&rdquo;. This can be colour, pattern, or just your favourite t-shirt. This is highly dependent on your industry and who you&apos;re looking to make an impression on.</p></>),
  },
  {
    q: 'What should I wear for a professional headshot session?',
    a: (<><p>We love when our clients bring a variety of wardrobe options to their session. If you have an agent, they often have suggestions for the kinds of roles they&apos;re sending you out for, and the right piece of clothing can completely shape a shot. A simple t-shirt might make you read younger and more commercial, while a blouse in the next frame can shift your age and energy for entirely different roles.</p><p>We love colour, we love layers, we love basics. Most importantly, we love when our clients bring some personality. With the longer sessions especially, we usually have time to step outside traditional headshots and create more editorial-style portraits, perfect for dropping on your socials.</p><p>When in doubt, bring extras. We&apos;ll always go through everything at the top of your shoot and pick the strongest options before we get to work.</p></>),
  },
  {
    q: 'Do I need professional hair and makeup for my headshot session?',
    a: "Hair and makeup is an optional add-on, and one we recommend if it fits your budget. We work with a handful of incredible Toronto artists who will listen to what you want, stay for the entire session, and tweak and adjust as we go. In almost every case we go for a natural look, so it never feels like you're wearing a ton of makeup. The goal is always the same: you, on your best day.",
  },
  {
    q: 'How many "looks" do I get, and how long is a session?',
    a: 'It of course depends on which package you select. Each session outlines how many looks we can do for that duration of time. Typically for 30 minutes it\'s 1 look.',
  },
  {
    q: "What's the difference between an actor headshot and a professional headshot?",
    a: (<><p>Actor sessions are built around performance. They&apos;re designed to give artists a portfolio of expressions, looks, and energy that work for casting and auditions. The style is often a little more dramatic and cinematic, with deeper shadows, richer tones, and bolder personality.</p><p>Professional headshots, by contrast, lean cleaner and more straightforward. Think LinkedIn-ready, polished, approachable. The kind of image that works on a corporate bio, a website, or a press release.</p><p>That said, the line between the two isn&apos;t fixed. If you&apos;re not an actor but you love that moody, cinematic feel, we can absolutely shoot you that way. We recommend our Session C package if that&apos;s the direction you want to go.</p></>),
  },
  {
    q: "Can I order more retouched headshots after my session?",
    a: "Yes. We keep your entire session archived indefinitely, so at any time you can go back and select additional portraits to be retouched. Additional retouches are $45 per image.",
  },
  {
    q: "How do I prepare the night before and morning of my session?",
    a: (<><p>Honestly, the best thing you can do is keep it simple. Get a good night&apos;s sleep, drink plenty of water, and try not to overthink it. We want you to show up feeling like yourself, not stressed about a checklist.</p><p>That said, a few small things go a long way. The night before, avoid anything that might cause puffiness or irritation. That means go easy on salty food and alcohol, and skip any new skincare products you haven&apos;t tried before. If you have a skincare routine that works for you, stick with it.</p><p>For wardrobe, have everything steamed or wrinkle-free and ready to go the night before. It&apos;s one less thing to think about in the morning. Bring a few more options than you think you&apos;ll need. We&apos;ll go through everything together before we start.</p><p>Beyond that, eat a proper breakfast, bring a water bottle, and come ready to have a good time. We handle the rest.</p></>),
  },
  {
    q: "How often should I update my professional headshots?",
    a: (<><p>The general rule is that your headshots should look like you when you walk into the room. If your appearance has changed significantly, whether that&apos;s a new hairstyle or simply a few years of natural aging, it&apos;s time for new photos.</p><p>Beyond that, many of our clients update their headshots not because they need to, but because they want to. Your taste evolves, your career evolves, and sometimes you want your portfolio to reflect a different side of yourself.</p><p>A good benchmark is every one to two years, but there&apos;s no hard rule. If your current headshots are still working for you, they&apos;re working.</p></>),
  },
  {
    q: "Is your studio accessible?",
    a: "Our studio is located on the upper floor of a 100-year-old building without an elevator, so unfortunately it is not wheelchair accessible. We know this is a real limitation and we're sorry for the inconvenience. If you have any accessibility concerns or questions before booking, please don't hesitate to reach out.",
  },
]

const heroImages = [
  { src: '/professional-gallery/professional-headshot-woman-blazer-grey-backdrop.jpg', alt: 'Professional headshot woman grey backdrop' },
  { src: '/professional-gallery/executive-portrait-polished-toronto-dark.jpg', alt: 'Polished Toronto executive portrait' },
  { src: '/professional-gallery/toronto-corporate-portrait-natural-light.jpg', alt: 'Toronto corporate portrait natural light' },
  { src: '/professional-gallery/corporate-headshot-man-dark-background-toronto.jpg', alt: 'Corporate headshot man dark background' },
  { src: '/professional-gallery/linkedin-headshot-professional-woman-studio.jpg', alt: 'LinkedIn professional headshot woman' },
  { src: '/professional-gallery/business-headshot-woman-warm-smile-studio-light.jpg', alt: 'Business headshot warm smile' },
]

export default function ProfessionalPricing() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.altHeroSection}>
        <div className={styles.altHeroLeft}>
          <p className={styles.altLabel}>Professional Headshots &middot; Toronto</p>
          <h1 className={styles.altHeroHeading}>
            PROFESSIONAL HEADSHOT PRICING<span className={styles.dot}>.</span>
          </h1>
        </div>
        <div className={styles.heroGallery}>
          {heroImages.map((img, i) => (
            <div key={i} className={styles.heroGalleryItem}>
              <Image src={img.src} alt={img.alt} fill sizes="25vw" className={styles.heroImage} priority={i < 3} />
            </div>
          ))}
        </div>
      </section>

      {/* Sessions with Gabriella */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          SESSIONS WITH GABRIELLA<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBodyFull}>
          <div className={styles.altBodyText}>
            <div className={styles.packageGrid}>
              <div className={styles.packageCol}>
                <p className={styles.packageName}>Session A</p>
                <p className={styles.packagePrice}><span className={styles.currency}>$</span>195</p>
                <ul className={styles.featureList}>
                  <li>30 minutes</li>
                  <li>100+ photos (unwatermarked)</li>
                  <li>You keep every photo</li>
                  <li>1 wardrobe change</li>
                  <li>1 backdrop</li>
                  <li>1 retouched headshot</li>
                </ul>
              </div>
              <div className={styles.packageCol}>
                <p className={styles.packageName}>Session B</p>
                <p className={styles.packagePrice}><span className={styles.currency}>$</span>275</p>
                <ul className={styles.featureList}>
                  <li>1 hour shoot</li>
                  <li>200+ photos (unwatermarked)</li>
                  <li>You keep every photo</li>
                  <li>2&ndash;3 wardrobe changes</li>
                  <li>2&ndash;3 backdrops</li>
                  <li>2 retouched headshots</li>
                </ul>
              </div>
              <div className={styles.packageCol}>
                <p className={styles.packageName}>Session C</p>
                <p className={styles.packagePrice}><span className={styles.currency}>$</span>350</p>
                <ul className={styles.featureList}>
                  <li>1.5 hour shoot</li>
                  <li>300+ photos (unwatermarked)</li>
                  <li>You keep every photo</li>
                  <li>Unlimited wardrobe changes</li>
                  <li>Unlimited backdrops</li>
                  <li>4 retouched headshots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions with Calvin */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          SESSIONS WITH CALVIN<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBodyFull}>
          <div className={styles.altBodyText}>
            <div className={styles.packageGrid}>
              <div className={styles.packageCol}>
                <p className={styles.packageName}>Session C</p>
                <p className={styles.packagePrice}><span className={styles.currency}>$</span>395</p>
                <ul className={styles.featureList}>
                  <li>1.5 hour shoot</li>
                  <li>300+ photos (unwatermarked)</li>
                  <li>You keep every photo</li>
                  <li>Unlimited wardrobe changes</li>
                  <li>Unlimited backdrops</li>
                  <li>4 retouched headshots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>OPTIONAL ADD-ONS<span className={styles.dot}>.</span></h2>
        <div className={styles.altBodyFull}>
          <div className={styles.altBodyText}>
            <div className={styles.addons}>
              <div className={styles.addonRow}>
                <span>Extra retouched headshot</span>
                <span className={styles.addonPrice}>$45</span>
              </div>
              <div className={styles.addonRow}>
                <span>Full hair and makeup</span>
                <span className={styles.addonPrice}>$195</span>
              </div>
              <p className={styles.hst}>All rates are subject to HST</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          THE EXPERIENCE<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <div className={styles.altBodyText}>
            <p>Every headshot session is relaxed, creative, and collaborative. We shoot in our home studio in Toronto&apos;s west end, a 100-year-old building with a warm, inviting atmosphere. Music is always playing, the vibe is stress-free, and you&apos;ll feel comfortable in front of the camera within minutes. We&apos;re never rushed, allowing us to take the time to warm up and ease into your session.</p>
            <p>Together we&apos;ll explore a variety of looks by changing wardrobe, lighting, and backgrounds. If your company already has a style in place, we&apos;re happy to match it. Before we start shooting, we take the time to understand exactly what you&apos;re aiming for and tailor the lighting and approach to suit.</p>
            <p>We shoot tethered directly to a computer, which means we can review your images in real time. Every few minutes we&apos;ll check in, talk through what&apos;s working, and adjust on the fly. This live feedback is one of the main reasons our clients walk away with headshots they actually love.</p>
          </div>
        </div>
      </section>

      {/* After the Shoot */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          AFTER THE SHOOT<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <div className={styles.altBodyText}>
            <p>Within one week, you&apos;ll receive a secure online gallery containing every image from your session. All photos are included in your session fee, unwatermarked, high-resolution, and yours to keep forever. You can share them freely with friends, family, or colleagues to help you choose your favourites. Many of our clients find their proof gallery is strong enough to use right away, even before retouching.</p>
            <p>There&apos;s no pressure to pick your final selections quickly. Take your time, and if you&apos;d like a second opinion, we&apos;re always happy to help you choose the headshots that will work hardest for you.</p>
          </div>
        </div>
      </section>

      {/* Retouching */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          WHAT IS RETOUCHING<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <div className={styles.altBodyText}>
            <p>Every session includes professional retouching on your selected images. Retouching isn&apos;t about making you look airbrushed or artificial. It&apos;s about subtle refinements that bring out your best while keeping you completely recognizable.</p>
            <p>If you wake up with a blemish or notice minor skin texture concerns on the morning of your shoot, don&apos;t worry. It can be removed with a simple brush stroke. We&apos;ll also clean up flyaway hairs and balance lighting where needed, all while keeping everything authentic. We&apos;ll go back and forth on each image until it&apos;s exactly right.</p>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          DELIVERY OF FINAL IMAGES<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <div className={styles.altBodyText}>
            <p>Once you&apos;ve made your selections, your final retouched headshots will be delivered digitally within one week. Each image comes in three versions: a print-resolution file, a web-optimized version, and a LinkedIn/socials avatar sized perfectly to update your online profiles. We archive all your files indefinitely, so if you ever lose them or need them years later, we&apos;ve got you covered.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className={styles.faqWrap}>
        <FAQ items={faqs} />
      </div>

    </main>
  )
}
