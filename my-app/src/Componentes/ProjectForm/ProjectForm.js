import styles from './project.module.css'
import Input from '../form/Input'
import Select from '../form/Select'

function ProjectForm(){
    return(
        <>
        <form className={styles.formulario}>
        <div>
        nome do instrumento:
        <Input
         type="text" 
         text="nome do instrumento"
         name="name"
         placeholder="Insira o nome do instrumento"/>
        </div>

        <div>

        
        preço do instrumento:
        <input type="text" placeholder="Insira o preço do instrumento"/>
        </div>

        <div>
        quantidade de instrumento:
        <Input 
            type="text" 
            text="quantidade de instrumento"
            name="quantidade"
            placeholder="Insira a quantidade do instrumento"/>
        
     
        </div>
        <div>
      
            <Select name="category_id" text="Selecione a categoria"/>

            <div>
            <input className={styles.buttonSalvar} type="submit" value="Criar instrumento"></input>
            </div>
        </div>
        </form>
        </>
        
    )
}
export default ProjectForm