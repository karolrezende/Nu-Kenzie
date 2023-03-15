import Button from "../Button/Button";
import styles from  './Form.module.scss'
export default function Form(props) {
    let description, type, value
  return (
    <div className={styles.form}>
        <form
            onSubmit={(event)=> {
                event.preventDefault()
                props.createNewList(description, type, value)
            }}
        >
            <div>
                <label htmlFor="name">Descrição</label>
                <input type="text" id='name' onChange={(event)=> description = event.target.value} placeholder="Digite aqui sua descrição"/>
                <span>Ex: Compra de roupas</span>
            </div>
            <div>
                <label htmlFor="select">Digíte o tipo</label>
                <select name="select" id="select" onChange={event => type =event.target.value}>
                    <option value="">Selecione</option>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
            </div>
            <div>
                <label htmlFor="value">Valor (R$)</label>
                <input type="text" id='value' onChange={event =>  value =event.target.value} placeholder="1"/>
            </div>
            <Button/>
        </form>
    </div>
  )
}
