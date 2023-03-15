import styles from './Card.module.scss'
export default function Card({list, remove}) {
  return (
    <div className={styles.card}>
        <div className={styles.card__div}>
            <h3>{list.description}</h3>
            <p>{list.type}</p>
            {list.type == 'entrada' ? <p>R$ {list.value},00</p> : <p>R$ -{list.value},00</p>}
            <button className={styles.card__but} onClick={()=>remove(list)}>Excluir</button>
        </div>
    </div>
  )
}
