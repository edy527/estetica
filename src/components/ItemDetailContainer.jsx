import React from 'react';

import ItemDetail from './ItemDetail';


 /* 
    CONSIGNA: 
    Crea tu componenete ItemDetailContainer con la misma premisa que itemListContainer

    *********************************************
    ********************************************

    ASPECTOS A INCUIR EN EL ENTREGABLE:
    Implementar mock invocando getItems() y utilizando el resolver then return JSX que devuelva un ItemDetail (desafio 6b) */
function ItemDetailContainer (){ 
    return(
        <>
        
            <h3 className="Title">Detalles</h3>
            <ItemDetail/>
        
        
        </>
    )
}   
   


export default ItemDetailContainer;