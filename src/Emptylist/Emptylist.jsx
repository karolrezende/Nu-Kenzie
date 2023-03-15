import styles from './Emptylist.module.scss'
export default function Emptylist() {
  return (
    <div>
        <h3 className={styles.__h3}>Você ainda não adicionou nenhum item</h3>
        <div className={styles.div}>
          <div className={styles.div__div}></div>
          <div className={styles.div__div1}></div>
          <div className={styles.div__div2}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.div__div}></div>
          <div className={styles.div__div1}></div>
          <div className={styles.div__div2}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.div__div}></div>
          <div className={styles.div__div1}></div>
          <div className={styles.div__div2}></div>
        </div>
    </div>
  )
}
