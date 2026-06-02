import Image from 'next/image'
import styles from './CorporatePricing.module.css'

export default function CorporatePricing() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.altHeroSection}>
        <div className={styles.altHeroLeft}>
          <p className={styles.altLabel}>In Office Corporate Headshot Photography &middot; Toronto</p>
          <h1 className={styles.altHeroHeading}>
            CORPORATE &amp; TEAM HEADSHOTS<span className={styles.dot}>.</span>
          </h1>
        </div>
        <div className={styles.altHeroGallery}>
          {[
            { src: '/corp-gallery/corporate-headshot-man-tie-formal-dark-backdrop.jpg', alt: 'Corporate headshot man tie formal dark backdrop' },
            { src: '/corp-gallery/toronto-executive-headshot-woman-editorial-warm.jpg', alt: 'Toronto executive headshot woman editorial warm' },
            { src: '/corp-gallery/corporate-headshot-man-open-collar-modern.jpg', alt: 'Corporate headshot man open collar modern' },
            { src: '/corp-gallery/headshot-portrait-neutral-background.jpg', alt: 'Professional portrait neutral background' },
            { src: '/corp-gallery/executive-portrait-man-charcoal-blazer-studio.jpg', alt: 'Executive portrait man charcoal blazer studio' },
            { src: '/corp-gallery/headshot-woman-confident-expression.jpg', alt: 'Corporate headshot woman confident expression' },
            { src: '/corp-gallery/legal-team-professional-headshots-polished.jpg', alt: 'Legal team professional headshots polished' },
            { src: '/corp-gallery/executive-headshot-man-navy-suit-clean-backdrop.jpg', alt: 'Executive headshot man navy suit clean backdrop' },
            { src: '/corp-gallery/headshot-white-background-studio-toronto.jpg', alt: 'Toronto studio headshot white background' },
          ].map((img, i) => (
            <div key={i} className={styles.altGalleryItem}>
              <Image src={img.src} alt={img.alt} fill sizes="17vw" className={styles.image} />
            </div>
          ))}
        </div>
      </section>

      {/* Our studio in your office */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          OUR STUDIO IN YOUR OFFICE<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>About us</p>
          <div className={styles.altBodyText}>
            <p>We work with companies throughout Toronto and the GTA, photographing up to 40 people in a session. We bring a travelling studio to your offices and make photo day easy and fun.</p>
            <p>Whether it&apos;s a single executive portrait or headshots for an entire team, every person gets the same level of care. We&apos;ll work with you ahead of time to understand your brand and visual style, and plan the entire flow so your team&apos;s schedule stays on track. We provide sign-up templates, tips, and best practices so everyone arrives prepared and ready to make the most of their time in front of the camera. The goal is consistent, polished headshots across your whole team that people actually want on their LinkedIn and company bio.</p>
            <p>And we&apos;re here for the long haul. When new hires join, we can photograph them at our studio or make a follow-up visit to your office so every team member matches. Some of our clients have been working with us for over a decade.</p>
          </div>
        </div>
      </section>

      {/* Team gallery */}
      <section className={styles.teamGallery}>
        {[
          { src: '/corp-gallery/toronto-corporate-team-headshots-modern-office.jpg', alt: 'Toronto corporate team headshots modern office' },
          { src: '/corp-gallery/law-firm-team-headshots-professional-studio.jpg',    alt: 'Law firm team headshots professional studio' },
          { src: '/corp-gallery/startup-team-headshots-toronto-casual-approachable.jpg', alt: 'Startup team headshots Toronto casual' },
          { src: '/corp-gallery/corporate-executive-group-portrait-toronto.jpg',     alt: 'Corporate executive group portrait Toronto' },
          { src: '/corp-gallery/legal-team-professional-headshots-polished.jpg',     alt: 'Legal team professional headshots polished' },
          { src: '/corp-gallery/toronto-startup-founders-headshot-editorial.jpg',    alt: 'Toronto startup founders headshot editorial' },
        ].map((img, i) => (
          <div key={i} className={styles.teamGalleryItem}>
            <Image src={img.src} alt={img.alt} fill sizes="33vw" className={styles.teamGalleryImage} />
          </div>
        ))}
      </section>

      {/* Our Style */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          OUR STYLE<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Aesthetic</p>
          <div className={styles.altBodyText}>
            <p>A lot of business photography still looks like it was taken in 2005. Harsh lighting, forced smiles, and dated looking backdrops. We take a different approach. Our portraits are modern, bright, and approachable. Beyond the technical, we take the time to connect with every person in front of the camera, making them laugh, keeping things loose, and capturing the kind of genuine expressions that makes people feel like themselves.</p>
            <ol className={styles.numberedList}>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[01]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Tailored to your brand.</strong>
                  <span className={styles.numberedDesc}>We tailor the style of portraiture to your brand, whether that&apos;s formal, casual, or creative.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[02]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Exceptional lighting.</strong>
                  <span className={styles.numberedDesc}>Soft studio lighting that mimics natural light, so everyone looks relaxed and naturally themselves.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[03]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Style guide matching.</strong>
                  <span className={styles.numberedDesc}>If you have an existing photography style, we can match it, keeping everything consistent across your team.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[04]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Natural retouching.</strong>
                  <span className={styles.numberedDesc}>High-end editing with a light touch. No one will look overly Photoshopped.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[05]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Cohesive team look.</strong>
                  <span className={styles.numberedDesc}>Consistent look and feel across every portrait, so your team page looks like it belongs together.</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <blockquote className={styles.pullQuote}>
        <p className={styles.pullQuoteText}>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&rdquo;</p>
        <footer className={styles.pullQuoteAttrib}>— Lorem Ipsum, Company Name</footer>
      </blockquote>

      {/* Team gallery 2 */}
      <section className={styles.teamGallery}>
        {[
          { src: '/corp-gallery/toronto-corporate-headshot-woman-confident-studio.jpg', alt: 'Toronto corporate headshot woman confident studio' },
          { src: '/corp-gallery/executive-headshot-man-navy-suit-clean-backdrop.jpg', alt: 'Executive headshot man navy suit clean backdrop' },
          { src: '/corp-gallery/professional-portrait-woman-natural-light-toronto.jpg', alt: 'Professional portrait woman natural light Toronto' },
          { src: '/corp-gallery/corporate-headshot-man-open-collar-modern.jpg', alt: 'Corporate headshot man open collar modern' },
          { src: '/corp-gallery/toronto-executive-headshot-woman-editorial-warm.jpg', alt: 'Toronto executive headshot woman editorial warm' },
          { src: '/corp-gallery/business-professional-headshot-man-grey-background.jpg', alt: 'Business professional headshot man grey background' },
        ].map((img, i) => (
          <div key={i} className={styles.teamGalleryItem}>
            <Image src={img.src} alt={img.alt} fill sizes="17vw" className={styles.teamGalleryImage} />
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          HOW WE WORK<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Process</p>
          <div className={styles.altBodyText}>
            <p>We keep the process efficient and seamless, with minimal disruption to your team&apos;s day. Each person has a 10&ndash;15 minute session, during which we capture a range of expressions and poses. We shoot directly into a computer, allowing for real-time review and adjustments so that everyone leaves confident in their results.</p>
            <ol className={styles.numberedList}>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[01]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>10&ndash;15 minutes per person.</strong>
                  <span className={styles.numberedDesc}>Each session is efficient by design, capturing a range of expressions and poses without rushing anyone.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[02]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Multiple looks captured.</strong>
                  <span className={styles.numberedDesc}>We shoot a variety of expressions and angles so everyone has real options to choose from.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[03]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Real-time review.</strong>
                  <span className={styles.numberedDesc}>Images are displayed on-screen as we shoot, so adjustments happen in the moment and everyone leaves confident.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[04]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Minimal disruption.</strong>
                  <span className={styles.numberedDesc}>We can help with scheduling and sign-up sheets in advance so no one&apos;s waiting around. Your team shows up at their slot, shoots, and gets right back to their day.</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Team gallery 3 */}
      <section className={styles.teamGallery}>
        {[
          { src: '/corp-gallery/toronto-corporate-headshot-woman-pearl-earrings-polished.jpg', alt: 'Toronto corporate headshot woman pearl earrings polished' },
          { src: '/corp-gallery/executive-portrait-man-charcoal-blazer-studio.jpg', alt: 'Executive portrait man charcoal blazer studio' },
          { src: '/corp-gallery/professional-headshot-woman-glasses-approachable-toronto.jpg', alt: 'Professional headshot woman glasses approachable Toronto' },
          { src: '/corp-gallery/corporate-headshot-man-white-shirt-minimal-backdrop.jpg', alt: 'Corporate headshot man white shirt minimal backdrop' },
          { src: '/corp-gallery/toronto-business-headshot-woman-side-profile-elegant.jpg', alt: 'Toronto business headshot woman side profile elegant' },
          { src: '/corp-gallery/executive-headshot-man-confident-smile-warm-light.jpg', alt: 'Executive headshot man confident smile warm light' },
          { src: '/corp-gallery/professional-portrait-woman-black-blazer-toronto-studio.jpg', alt: 'Professional portrait woman black blazer Toronto studio' },
          { src: '/corp-gallery/corporate-headshot-man-beard-modern-professional.jpg', alt: 'Corporate headshot man beard modern professional' },
          { src: '/corp-gallery/toronto-executive-headshot-woman-cream-blouse-natural.jpg', alt: 'Toronto executive headshot woman cream blouse natural' },
          { src: '/corp-gallery/business-portrait-man-three-quarter-studio-light.jpg', alt: 'Business portrait man three quarter studio light' },
          { src: '/corp-gallery/professional-headshot-woman-relaxed-expression-toronto.jpg', alt: 'Professional headshot woman relaxed expression Toronto' },
          { src: '/corp-gallery/corporate-headshot-man-tie-formal-dark-backdrop.jpg', alt: 'Corporate headshot man tie formal dark backdrop' },
        ].map((img, i) => (
          <div key={i} className={styles.teamGalleryItem}>
            <Image src={img.src} alt={img.alt} fill sizes="17vw" className={styles.teamGalleryImage} />
          </div>
        ))}
      </section>

      {/* Pull quote 2 */}
      <blockquote className={styles.pullQuote}>
        <p className={styles.pullQuoteText}>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.&rdquo;</p>
        <footer className={styles.pullQuoteAttrib}>— Lorem Ipsum, Company Name</footer>
      </blockquote>

      {/* After the Shoot */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          AFTER THE SHOOT<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Deliverables</p>
          <div className={styles.altBodyText}>
            <p>After the session, each team member gets a private gallery link with 25 to 50 proof images to browse and choose from. Our quoted rate always includes at least one fully retouched, high-resolution image per person, covering things like wispy hairs, blemishes, and minor clothing adjustments.</p>
            <ol className={styles.numberedList}>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[01]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Private gallery.</strong>
                  <span className={styles.numberedDesc}>Each person receives 25&ndash;50 proof images to keep and choose from.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[02]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Included retouching.</strong>
                  <span className={styles.numberedDesc}>One fully retouched, high-resolution image per person. Covers hair flyaways, blemishes, and light clothing adjustments.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[03]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Optional extras.</strong>
                  <span className={styles.numberedDesc}>Additional retouches can be added to any package. Many teams go with two per person, giving everyone a pair to choose from: a big smile and something more subtle, or a tie and no-tie option.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[04]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Timeline.</strong>
                  <span className={styles.numberedDesc}>Proof galleries delivered within 3&ndash;5 business days. Final edits within 1 week of selection. If you&apos;re on a tight deadline, rush turnaround is available for an additional fee.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[05]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Formats.</strong>
                  <span className={styles.numberedDesc}>Images provided in multi-crop, web-ready versions to suit LinkedIn, websites, and internal use.</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          WE&apos;VE GOT YOU COVERED<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Resources</p>
          <div className={styles.altBodyText}>
            <p>We provide everything you need to make the process simple:</p>
            <ol className={styles.numberedList}>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[01]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Team prep guides.</strong>
                  <span className={styles.numberedDesc}>Wardrobe tips and scheduling details sent to your team in advance so everyone shows up ready.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[02]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Sign-up documents.</strong>
                  <span className={styles.numberedDesc}>Self-scheduling templates so team members can book their own slot without back-and-forth.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[03]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Hair &amp; makeup.</strong>
                  <span className={styles.numberedDesc}>Optional on-site hair and makeup services for a polished, camera-ready finish.</span>
                </div>
              </li>
              <li className={styles.numberedItem}>
                <span className={styles.numberedIndex}>[04]</span>
                <div className={styles.numberedContent}>
                  <strong className={styles.numberedTitle}>Studio shoots.</strong>
                  <span className={styles.numberedDesc}>When you hire someone new, they can easily book a one-off session in our studio at their convenience.</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <blockquote className={styles.pullQuote}>
        <p className={styles.pullQuoteText}>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.&rdquo;</p>
        <footer className={styles.pullQuoteAttrib}>— Lorem Ipsum, Company Name</footer>
      </blockquote>

      {/* Team gallery 4 */}
      <section className={styles.teamGallery}>
        {[
          { src: '/corp-gallery/professional-headshot-woman-warm-smile-natural-light.jpg', alt: 'Professional headshot woman warm smile natural light' },
          { src: '/corp-gallery/executive-headshot-man-silver-hair-distinguished.jpg', alt: 'Executive headshot man silver hair distinguished' },
          { src: '/corp-gallery/toronto-executive-headshot-woman-short-hair-modern.jpg', alt: 'Toronto executive headshot woman short hair modern' },
          { src: '/corp-gallery/corporate-headshot-man-turtleneck-editorial-toronto.jpg', alt: 'Corporate headshot man turtleneck editorial Toronto' },
          { src: '/corp-gallery/professional-headshot-woman-red-blazer-bold-toronto.jpg', alt: 'Professional headshot woman red blazer bold Toronto' },
          { src: '/corp-gallery/toronto-corporate-headshot-man-clean-crop-studio-light.jpg', alt: 'Toronto corporate headshot man clean crop studio light' },
          { src: '/corp-gallery/toronto-business-portrait-woman-statement-necklace.jpg', alt: 'Toronto business portrait woman statement necklace' },
          { src: '/corp-gallery/corporate-portrait-man-casual-blazer-relaxed-studio.jpg', alt: 'Corporate portrait man casual blazer relaxed studio' },
          { src: '/corp-gallery/toronto-corporate-headshot-woman-layered-blazer-studio.jpg', alt: 'Toronto corporate headshot woman layered blazer studio' },
          { src: '/corp-gallery/business-headshot-man-patterned-shirt-approachable.jpg', alt: 'Business headshot man patterned shirt approachable' },
          { src: '/corp-gallery/professional-portrait-woman-dark-background-cinematic.jpg', alt: 'Professional portrait woman dark background cinematic' },
          { src: '/corp-gallery/executive-portrait-man-slim-fit-suit-confident.jpg', alt: 'Executive portrait man slim fit suit confident' },
        ].map((img, i) => (
          <div key={i} className={styles.teamGalleryItem}>
            <Image src={img.src} alt={img.alt} fill sizes="17vw" className={styles.teamGalleryImage} />
          </div>
        ))}
      </section>

      {/* Selected Clients */}
      <section className={styles.altSection}>
        <h2 className={styles.altHeading}>
          SELECTED CLIENTS<span className={styles.dot}>.</span>
        </h2>
        <div className={styles.altBody}>
          <p className={styles.altBodyLabel}>Clients</p>
          <div className={styles.altBodyText}>
            <p>We&apos;ve had the privilege of working with some of Toronto&apos;s leading organizations, from boutique firms to some of the city&apos;s largest practices. Many of our clients have been with us for over a decade as we&apos;ve helped them through rebrands, office expansions, and keeping their team photography consistent across the country.</p>
            <div className={styles.logoGrid}>
              {[
                { src: '/corp-logos/Osler,_Hoskin_&_Harcourt_Logo.svg.png', alt: 'Osler Hoskin & Harcourt', w: 3840, h: 1079 },
                { src: '/corp-logos/CIBC_logo_2021.svg.png',               alt: 'CIBC',                   w: 1280, h: 325  },
                { src: '/corp-logos/BCG_MONOGRAM.png',                     alt: 'BCG',                    w: 801,  h: 321  },
                { src: '/corp-logos/Adair-Goldblatt-Bieber-Logo.jpg',      alt: 'Adair Goldblatt Bieber', w: 486,  h: 486  },
                { src: '/corp-logos/aird-berlis-logo.png',                 alt: 'Aird Berlis',            w: 336,  h: 85   },
                { src: '/corp-logos/StrategyCorp-Logo-e1573222091350.png', alt: 'StrategyCorp',           w: 771,  h: 587  },
                { src: '/corp-logos/ay_logos_black-1.png.webp',            alt: 'Avison Young',           w: 700,  h: 426  },
                { src: '/corp-logos/0348_637551846516900837.png',          alt: 'Torkin Manes',           w: 1000, h: 600  },
              ].map((logo, i) => (
                <div key={i} className={styles.logoItem}>
                  <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className={styles.logoImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
