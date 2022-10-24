import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Produto from './Pages/Produto';
import Usuario from './Pages/Usuario';
import Rodape from './Componentes/Rodape/';
import Logo from './img/sala.jpg'
import Navbar from './Componentes/Navbar';


function App() {
  return (
   
    <Router >
    <>
    
    <Navbar/>
    <img src={Logo}/>
    <Routes>
        <Route path='/' element={<Home />} />
      
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/usuario" element={<Usuario/>} />
          <Route path="/produto" element={<Produto/>} />
         
      
      </Routes>
    </>
 
    
    <Rodape/>
    </Router>
    
  );
}
 
export default App;

