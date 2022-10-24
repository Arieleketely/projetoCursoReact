import styles from './project.module.css'


function ProjectForm(){
    return(
        <>
        <form className={styles.formulario}>
        <div>
        nome do instrumento:
        <input type="text" placeholder="Insira o nome do instrumento"/>
        </div>

        <div>
        preço do instrumento:
        <input type="text" placeholder="Insira o preço do instrumento"/>
        </div>

        <div>
        quantidade de instrumento:
        <input type="text" placeholder="Insira a quantidade de instrumento"/>
        </div>
        <div>
            Categoria:
            <select name="category_id">
                <option disabled selected>
                    Selecione o tipo de instrumento
                </option>
            </select>
            <div>
            <input className={styles.buttonSalvar} type="submit" value="Criar instrumento"></input>
            </div>
        </div>
        </form>
        </>
        
    )
}
export default ProjectForm