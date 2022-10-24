import React from 'react';
import imagem from '../Pages/img/logo.png';
import styles from '../Pages/img/home.module.css';
import CadastroBotao from '../Componentes/CadastroBotao/CadastroBotao';
import ProjectForm from '../Componentes/ProjectForm/ProjectForm';
function Home(){
  return(
  <div className={styles.centralizar} >
    <p>Home</p>
    <CadastroBotao to="/produto" text="Criar instrumento para venda"/>
    
    
    <img className={styles.imagem} src={imagem} alt="instrmento"/>
    <ProjectForm/>
  </div>
  
  )
}

export default Home;