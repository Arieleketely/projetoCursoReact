import {Link} from 'react-router-dom';
import styles from '../CadastroBotao/BotaoCadastrar.module.css';


function CadastroBotao({to,text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}
export default CadastroBotao