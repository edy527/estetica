import React from 'react';
import ItemCount from './ItemCount';
function ItemListContainer(){
    
    const onAdd = (count)=>{
        console.log(count);
    }

    return(
        <>
        <h3 className="ItemListContainerTitle">Productos destacados</h3>
        <ItemCount stock ={7} initial={1} onAdd ={onAdd}/>
        </>  
    )
   
}
export default ItemListContainer;

