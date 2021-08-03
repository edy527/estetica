//Brand (titulo/nombre de la tienda)
//un listado de categorias clickeables (p)
//incorporar alguna libreria de estilos con bootstrap u otro (OPCIONAL)
import React from 'react';
import CartWindget from './CartWindget';

function NavBar(props) {
    return (
     
      <nav>
          <a href="./">Rostro</a>
          <a href="./">Cuerpo</a>
          <a href="./">Solares</a>
          <a href="./">Tratamientos</a>
          <a href="./">Escribinos</a>
          <CartWindget/>    
      </nav> 

    );


}

export default NavBar