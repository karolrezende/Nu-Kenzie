import styles from './Value.module.scss'
export default function Value({list}) {
  const listSoma = list.filter(lista=>{
      return lista.type==='entrada'
    }
  ).reduce((soma,atual)=> soma+atual.value,0)

  const listSub = list.filter(lista=>{
      return lista.type==='saida'
    }
  ).reduce((sub, atual)=> sub-atual.value,0)
  
  const listTotal = listSub+listSoma

  return (
    <div className={styles.value}>
        <div className={styles.value__div}>
            <div>
                <h2>Valor total:</h2>
                <p>R${listTotal}</p>
            </div>
            <p>O valor se refere a: {listTotal <  0 ? <span>saída</span> : <span>entrada</span>}</p>
            
        </div>
    </div>
  )
}
