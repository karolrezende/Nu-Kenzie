import Form from "./Form/Form";
import Header from "./Header/Header";
import Resume from "./Resume/Resume";
import Value from "./Value/Value";
import styles from './App.module.scss'
import { useState, useEffect } from "react";
export default function App() {
  const [list, setList] = useState([
  ])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('list'));
    if (items) {
     setList(items);
    }
  }, []);

  //const section = JSON.parse(localStorage.getItem('list'))
  // console.log(section)

  const createNewList = (description, type, value)=> {
    if(description != undefined && type != undefined && value != undefined) setList([...list, {description: description, type: type, value: Number(value)}])
    
  }
  const removeItem = (item)=>{
    setList(list.filter(itemList => item !== itemList))
  }
  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.app}>
        <div>
          <Form createNewList={createNewList}/>
          <Value list={list}/>
        </div>
        <div>
          <h1>Resumo financeiro</h1>
          <Resume list={list} remove={removeItem}/>
        </div>
      </div> 
    </div>
  )
}

