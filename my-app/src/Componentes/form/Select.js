import styles  from '../form/select.module.css'

function Select({text,name,options,handleOnChange,value}){
    return(
        <div className={styles.form_control}>
           <label htmlFor={name}>{text}:</label>
        
       <select name={name} id={name}>
        <option>Selecione a opção</option>
       </select>
         
        </div>
       
    )
}
export default Select