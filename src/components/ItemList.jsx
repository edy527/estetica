import Item from './Item';
import './css/CardContainer.css'
import ItemDetail from './ItemDetail';

const {useEffect, useState} = require('react')

export default function ItemList(){
    

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        
        new Promise((resolve, reject) => {
            
            const data=[
               
                {
                    id: '1',
                    title: 'Producto 1',
                    description: 'Texto descriptivo producto',
                    price: 132456,
                    stock: 2,
                    pictureUrl:'https://picsum.photos/200'

                    
                },
                {
                    id: '1',
                    title: 'Producto 2',
                    description: 'Texto descriptivo producto',
                    price: 6700,
                    stock: 2,
                    pictureUrl:"../img/gel.jpg"
                },
                {
                    id: '2',
                    title: 'Producto 3',
                    description: 'Texto descriptivo producto',
                    price: 1000,
                    stock: 2,
                    pictureUrl:'../img/gel-de-limpieza-p.jpg'
                },
                {
                    id: '3',
                    title: 'Producto 4',
                    description: 'Texto descriptivo producto',
                    price: 500,
                    stock: 2,
                    pictureUrl:'../img/gel-de-limpieza-p.jpg'
                }
            ];
            setTimeout(() => resolve(data), 3000);
        })

        .then((dataResolve) =>{
            console.log('Data Resolve', dataResolve);
            setProducts(dataResolve);
        })
        .catch((error)=>{
            console.log('err', error);
        })
    }, []);

    return(
        
        <div className="CardContainer">
            {products.map((cadaitem)=>(
                <Item 
                title={cadaitem.title}
                stock={cadaitem.stock}
                description={cadaitem.description}
                pictureUrl={cadaitem.pictureUrl}
                price={cadaitem.price}
                />
                
            ))}


      </div>  
    )
}