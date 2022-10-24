import React from 'react';
function Menu(){
  return(
  <div>
   <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/sobre'>Sobre</Link> </li>
        <li> <Link to='/usuario'>Usuario</Link> </li>
        <li> <Link to='/produto'>Produto</Link></li>
      </ul>
  </div>
  )
}

export default Menu;