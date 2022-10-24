import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaEye } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa";
import {Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
function Navbar(){
  return(
    <>
    <ul className={styles.menu}>
     
        <li> <Link className='cor' to='/'><FaHome/>Home</Link> </li>
        <li> <Link className='cor' to='/sobre'><FaEye/>Sobre</Link> </li>
        <li> <Link className='cor' to='/usuario'><FaUniversalAccess/>Usuario login</Link> </li>
        <li> <Link className='cor' to='/produto'><FaUniversalAccess/>Produto</Link> </li>
        
     </ul>
    
       </>
  )
}

export default Navbar;