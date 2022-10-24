
import React from 'react';
import { Link } from 'react-router-dom';
import '../Componentes/Rodape/Rodape.module.css'

function Navbar(){
  return(
  <div className='cor'>
    
    <ul>
            <li>
            <Link  to="/home">Home</Link>
            </li>
            <li>
            <Link to='/sobre'>Sobre</Link>
            </li>
            <li>
            <Link to='/produto'>Produto</Link>
            </li>
         </ul>
  </div>
  )
}

export default Navbar;