import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import './css/ItemListContainer.css'


function ItemListContainer(){
    
    const onAdd = (count)=>{
        console.log(count);
    }

    return(
        <div className="ItemListContainer">
            <h3 className="ItemListContainerTitle">Productos destacados</h3>
            <ItemCount stock ={7} initial={1} onAdd ={onAdd}/>
            <ItemList/>
        </div>  
    )
   
}
export default ItemListContainer;

