import styles from './Header.module.scss'
import icon from '../assets/nu-kenzie.svg'
export default function Header() {
  return (
    <div className={styles.header}>
        <img src={icon} alt="Logo Nu kenzie" />
    </div>
  )
}
