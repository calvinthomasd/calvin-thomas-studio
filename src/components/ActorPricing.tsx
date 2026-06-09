import Image from 'next/image'
import styles from './ActorPricing.module.css'
import FAQ from './FAQ'

const faqs = [
  {
    q: "What if I'm nervous or not photogenic?",
    a: (<><p>If the thought of being in front of a camera makes you nervous, you&apos;re in good company. Almost every client starts off feeling the same way. Our main goal is to make you feel comfortable and at ease. You don&apos;t need any experience in front of a camera. We&apos;ll focus on keeping the session fun and relaxed, and the natural, authentic shots always follow.</p><p>A lot of actors actually feel less comfortable in front of a still camera than a motion picture one. The performance is totally different, and it can feel strange at first. But you&apos;ll quickly realize there&apos;s no way to mess a photo up. We&apos;re constantly trying things, experimenting, collaborating, and laughing.</p></>),
  },
  {
    q: 'Do you shoot in a style that casting agents like?',
    a: (<><p>Yes. We understand what casting agents are looking for and we approach it in a modern way. Every session covers the essentials: clean, well-lit headshots that capture your range and feel current. But we also leave room for more creative, editorial-style shots that show personality beyond the traditional frame.</p><p>We use cinematic lighting and natural backgrounds to help you communicate character without anything feeling flat or distracting. Most importantly, the photos will look like you. When you walk into that self-tape, audition, or callback, the person in the room should match the person in the headshot. That&apos;s always the goal.</p></>),
  },
  {
    q: 'What should I wear for an actor headshot session?',
    a: (<><p>We love when our actors bring a variety of wardrobe options to their session. If you have an agent, they often have suggestions for the kinds of roles they&apos;re sending you out for, and the right piece of clothing can completely shape a shot. A simple t-shirt might make you read younger and more commercial, while a blouse in the next frame can shift your age and energy for entirely different roles.</p><p>We love colour, we love layers, we love basics. Most importantly, we love when our actors bring some personality. With the Classic Session especially, we usually have time to step outside traditional headshots and create more editorial-style portraits, perfect for dropping on your socials.</p><p>When in doubt, bring extras. We&apos;ll always go through everything at the top of your shoot and pick the strongest options before we get to work.</p></>),
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
    q: "Can I use my headshots for Actors Access, Casting Workbook, and other platforms?",
    a: "Absolutely. Your final retouched headshots are delivered in both print-resolution and a web-optimized version built for online use. Our clients use their photos on Actors Access, Casting Workbook, Backstage, Mandy, Instagram, personal websites, and countless other platforms. They always look sharp. If you ever have trouble uploading or sizing an image for a specific profile, we're happy to help.",
  },
  {
    q: "How do I prepare the night before and morning of my session?",
    a: (<><p>Honestly, the best thing you can do is keep it simple. Get a good night&apos;s sleep, drink plenty of water, and try not to overthink it. We want you to show up feeling like yourself, not stressed about a checklist.</p><p>That said, a few small things go a long way. The night before, avoid anything that might cause puffiness or irritation. That means go easy on salty food and alcohol, and skip any new skincare products you haven&apos;t tried before. If you have a skincare routine that works for you, stick with it.</p><p>For wardrobe, have everything steamed or wrinkle-free and ready to go the night before. It&apos;s one less thing to think about in the morning. Bring a few more options than you think you&apos;ll need. We&apos;ll go through everything together before we start.</p><p>Beyond that, eat a proper breakfast, bring a water bottle, and come ready to have a good time. We handle the rest.</p></>),
  },
  {
    q: "Do I need both commercial and theatrical headshots?",
    a: (<><p>It depends on what you&apos;re pursuing, but for most actors in Toronto, having both is a smart move. The city has a thriving commercial industry alongside a strong film and television scene, and a lot of our clients are active in both.</p><p>The difference between the two is more subtle than people expect. A commercial headshot tends to be warmer, more approachable, and a little more open. Think friendly energy, easy smile, the kind of person you&apos;d trust in an ad. A theatrical headshot is usually more grounded and internal. It&apos;s about depth, presence, and letting casting see that you can carry a scene.</p><p>We go into each look with a clear target in mind and we&apos;ll guide you through the shifts in expression, energy, and styling that make each one work. If you&apos;re unsure what you need, we&apos;ll figure it out together at the start of your session.</p></>),
  },
  {
    q: "Why do you only photograph one actor per day?",
    a: (<><p>Because your session deserves our full creative energy. Every shoot is different and we put a lot into each one, exploring new ideas, experimenting with lighting and styling, and pushing to get something we&apos;ve never gotten before. That kind of focus takes everything we&apos;ve got.</p><p>After a two-and-a-half hour session, we wouldn&apos;t be able to bring that same level of presence and creativity to another client. So we don&apos;t try to. One actor, one day. That&apos;s how we make sure every session gets our best.</p></>),
  },
  {
    q: "I have facial hair. Can I change my look mid-session?",
    a: "Absolutely. We have washroom facilities for you to trim or shave your facial hair mid-session. This is easiest with the Classic Session where we have more time, but it's doable with the Mini as well. Please note that we don't provide razors or grooming products, so bring what you need.",
  },
  {
    q: "How often should I update my actor headshots?",
    a: (<><p>The general rule is that your headshots should look like you when you walk into the room. If your appearance has changed significantly, whether that&apos;s a new hairstyle, facial hair, or simply a few years of natural aging, it&apos;s time for new photos. Casting agents notice when the person on screen doesn&apos;t match the person in the headshot, and it can work against you.</p><p>Beyond that, many of our actors update their headshots not because they need to, but because they want to. Your taste evolves, your career evolves, and sometimes you want your portfolio to reflect a different side of yourself. Some clients come back because they want to explore a moodier, more cinematic style after starting with something clean and commercial. Others want fresh images from a different photographer&apos;s eye to add variety to their portfolio.</p><p>A good benchmark is every one to two years, but there&apos;s no hard rule. If your current headshots are still booking you auditions and you&apos;re happy with them, they&apos;re working. If something feels off or you&apos;re not getting the response you used to, that&apos;s usually your sign.</p></>),
  },
  {
    q: "Is your studio accessible?",
    a: "Our studio is located on the upper floor of a 100-year-old building without an elevator, so unfortunately it is not wheelchair accessible. We know this is a real limitation and we're sorry for the inconvenience. If you have any accessibility concerns or questions before booking, please don't hesitate to reach out.",
  },
]

export default function ActorPricing() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.altHeroSection}>
        <div className={styles.altHeroLeft}>
          <p className={styles.altLabel}>Actor Headshots &middot; Toronto</p>
          <h1 className={styles.altHeroHeading}>
            ACTOR HEADSHOT PRICING<span className={styles.dot}>.</span>
          </h1>
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            src="/actor-gallery/actress-headshot-dark-background-editorial-toronto.jpg"
            alt="Editorial Toronto actress headshot — a woman with long dark hair photographed in a cinematic style against a deep black studio background"
            fill
            sizes="50vw"
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Packages */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          SESSIONS WITH CALVIN<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBodyFull}>
          <div className={styles.altBodyText}>

            <div className={styles.packageGrid}>
              <div className={styles.packageCol}>
                <p className={styles.packageName}>Classic Session</p>
                <p className={styles.packagePrice}><span className={styles.currency}>$</span>475</p>
                <ul className={styles.featureList}>
                  <li>2.5 hour shoot</li>
                  <li>450+ photos (unwatermarked)</li>
                  <li>You keep every photo</li>
                  <li>Unlimited wardrobe changes</li>
                  <li>Multiple backdrops</li>
                  <li>5 retouched headshots</li>
                </ul>
              </div>
              <div className={styles.packageCol}>
                <p className={styles.packageName}>Mini Session</p>
                <p className={styles.packagePrice}><span className={styles.currency}>$</span>375</p>
                <ul className={styles.featureList}>
                  <li>1 hour shoot</li>
                  <li>200+ photos (unwatermarked)</li>
                  <li>You keep every photo</li>
                  <li>2 wardrobe changes</li>
                  <li>2 backdrops</li>
                  <li>2 retouched headshots</li>
                </ul>
              </div>
            </div>

            <div className={styles.addons}>
              <h2 className={styles.altHeading}>OPTIONAL ADD-ONS<span className={styles.dot}>.</span></h2>
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
            <p>Every actor headshot session is relaxed, creative, and collaborative. We shoot in our home studio in Toronto&apos;s west end, a 100-year-old building with a warm, inviting atmosphere. Music is always playing, the vibe is stress-free, and you&apos;ll feel comfortable in front of the camera within minutes. We only photograph one actor per day, so you&apos;re never rushed and the session is entirely about you.</p>
            <p>Together we&apos;ll explore a variety of looks by changing wardrobe, lighting, and backgrounds, building a well-rounded portfolio that shows your range. Whether you&apos;re going for a classic commercial look, a dramatic theatrical feel, or a mix of both, we&apos;ll tailor the session around what you need.</p>
            <p>We shoot tethered directly to a computer, which means we can review your images in real time. Every few minutes we&apos;ll check in, talk through what&apos;s working, and adjust on the fly. This live feedback loop is one of the main reasons our clients walk away with headshots they actually love.</p>
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
            <p>Within one week, you&apos;ll receive a secure online gallery containing every image from your session. All photos are included in your session fee, unwatermarked, high-resolution, and yours to keep forever. You can share them freely with friends, family, agents, or managers to help you choose your favourites. Many of our clients find their proof gallery is strong enough to use right away, even before retouching.</p>
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
            <p>If you wake up with a blemish or notice minor skin texture concerns on the morning of your shoot, don&apos;t worry. It can be removed with a simple brush stroke. We&apos;ll also clean up flyaway hairs and balance lighting where needed, all while keeping everything authentic and casting-ready. We&apos;ll go back and forth on each image until it&apos;s exactly right.</p>
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
            <p>Once you&apos;ve made your selections, your final retouched headshots will be delivered digitally within one week. Each image comes in two versions: a print-resolution file and a web-optimized version sized perfectly for IMDb, Mandy, Casting Workbook, Backstage, social media, and personal websites. We archive all your files indefinitely, so if you ever lose them or need them years later, we&apos;ve got you covered.</p>
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
