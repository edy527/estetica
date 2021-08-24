import Item from './Item';
import './css/CardContainer.css'




export default function ItemList({products}){
    return(
        <div className="CardContainer">
            {products.map(cadaitem=>(
                <Item
                key = {cadaitem.id} 
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