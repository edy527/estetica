//Brand (titulo/nombre de la tienda)
//un listado de categorias clickeables (p)
//incorporar alguna libreria de estilos con bootstrap u otro (OPCIONAL)
import React from 'react';


function NavBar(props) {
    return (
     
      <nav>
          <a href="./">Rostro</a>
          <a href="./">Cuerpo</a>
          <a href="./">Solares</a>
          <a href="./">Tratamientos</a>
          <a href="./">Escribinos</a>
          { props.children }
          
      </nav> 

    );


}

export default NavBar