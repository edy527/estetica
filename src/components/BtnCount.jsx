import React,  { useState } from 'react';

function BtnCount(){
    const [count, setCount] = useState(0)
    //const [name, setName] = useState('')

    return (
        <>
        <h1>contador: {count}</h1>
        <button onClick={ ()=> setCount(count +1) }> +</button>
        <button onClick={ ()=> setCount(count -1) }> -</button>
        </>
    )
}

export default BtnCount