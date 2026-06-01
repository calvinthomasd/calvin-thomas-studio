import styles from './Divider.module.css'

export default function Divider() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  )
}
