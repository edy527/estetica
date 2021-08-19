import Item from './Item';
import './css/CardContainer.css'

const {useEffect, useState} = require('react')

export default function ItemList(){
    

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        
        new Promise((resolve, reject) => {
            const data=[
                
                {
                    id: '1',
                    name: 'Producto 1',
                    stock: 2,
                    description: 'Alto gel de limpieza!'
                },
                {
                    id: '2',
                    name: 'Producto 2',
                    stock: 2
                },
                {
                    id: '3',
                    name: 'Producto 3',
                    stock: 2
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
                name={cadaitem.name}
                stock={cadaitem.stock}
                description={cadaitem.description}
                />

            ))}

        </div>  


{products.map((cadaitem)=>(
                <ItemDetail 
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