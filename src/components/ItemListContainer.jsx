import React from 'react';
import {useState, useEffect} from 'react'
//import ItemCount from './ItemCount';
//import ItemList from './ItemList';
import './css/ItemListContainer.css'
import ItemList from './ItemList';
import {productsJson} from './productsJson'


function ItemListContainer(){
    /* const onAdd = (count)=>{
        console.log(count);
    } */

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        new Promise((resolve, reject) => {
            //const data=[];
            setTimeout(() => resolve(productsJson), 3000);
        })

        .then(dataResolve => setProducts(dataResolve))
        .catch((error)=>{
            console.log('Ocurrio un error con los datos solicitados', error);
        })
    }, []);

    
    return(
        <ItemList products={products}/>
    )
   
}
export default ItemListContainer;

