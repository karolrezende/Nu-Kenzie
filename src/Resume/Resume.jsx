import Card from "../Card/Card";
import Emptylist from "../Emptylist/Emptylist";
import styles from './Resume.module.scss'
export default function Resume({list, i, remove}) {
  if(list.length === 0){
    return(
      <div className={styles.resume}>
        <Emptylist/>
      </div>
    )
  }else{
    localStorage.setItem('list', JSON.stringify(list))
    return (
      <div className={styles.resume}>
          <div className={styles.resume__div}>
              
              {list.map((listValue, i) => <Card remove={remove} list={listValue} key={i}/>)}
              
          </div>
      </div>
    )

  }
}
