import React,  { useState, useEffect } from 'react';


function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(initial)
    const [onStock] = useState(stock)
    const [ inhabilitar, setInhabilitar] = useState()
    const [ inhabilitar2, setInhabilitar2] = useState()

    useEffect(()=>{
        count === onStock ? setInhabilitar(true) : setInhabilitar()
        count === 0 ? setInhabilitar2(true) : setInhabilitar2()
    }, [count, onStock])

 
   

    return(
        <>
        <button disabled={inhabilitar2} onClick={ ()=> count > 0 ? setCount(count-1) : '' }>-</button>
        <span>{count}</span>
        <button disabled={inhabilitar} onClick={ ()=> count < onStock ? setCount(count+1) : '' }>+</button>
        <br/>
        <button disabled={inhabilitar2} onClick= {() =>  onAdd(count)}  >Agregar al carrito  </button>
        </>
    )

}

export default ItemCount