import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa";
import styles from '../Rodape/rodape.module.css';
function Rodape(){
  return(
    <>
      <ul className={styles.menu}>
        <></>
        <br/>
        <li> <FaFacebook/>Facebook </li>
        <li> <FaInstagram/>Instagram</li>
        <li> <FaWhatsapp/>WhatsApp </li>
        <li><span>Ariele</span>&copy;2022</li>
      </ul>
  </>
  )
}

export default Rodape;



