import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section className={styles.mission}>
      <p className={styles.label}>Our Studio</p>
      <p className={styles.statement}>
        Calvin Thomas Studio is a Toronto-based headshot and portrait studio.
        We create natural, modern, professional photos for actors, business
        professionals, and corporate teams. Sessions are relaxed, easy, and
        genuinely fun.
      </p>
    </section>
  )
}
