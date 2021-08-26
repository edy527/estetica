//Brand (titulo/nombre de la tienda)
//un listado de categorias clickeables (p)
//incorporar alguna libreria de estilos con bootstrap u otro (OPCIONAL)
import React from 'react';
import {Link} from 'react-router-dom';
import CartWindget from './CartWindget';

function NavBar() {
    return (
     
      <nav>
          <Link to="/">Rostro</Link>
          <Link to="/">Cuerpo</Link>
          <Link to="/">Solares</Link>
          <Link to="/">Tratamientos</Link>
          <Link to="/">Escribinos</Link>
          <CartWindget/>    
      </nav> 

    );


}

export default NavBar