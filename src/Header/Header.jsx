import styles from './Header.module.scss'
import icon from '../assets/nu-kenzie.svg'
export default function Header({dark}) {
  return (
    <div className={styles.header}>
        <img src={icon} alt="Logo Nu kenzie" />
        <span onClick={dark}>With ❤️ by K</span>
    </div>
  )
}
