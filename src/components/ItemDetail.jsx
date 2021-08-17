import React from "react";
import './css/ItemDetail.css'


function ItemDetail(props) {
  return (
      
    <div className="Wrapper">
      <div className="ProductImg">
        <img className="ProductImg-img" src={props.pictureUrl} alt='Imagen de producto'/>
      </div>
      <div className="ProductInfo">
        <div className="ProductText">
          <h1> {props.title}</h1>
          {/* <h2>by studio and friends</h2> */}

          <p>
            {props.description}
          </p>
        </div>
        <div className="ProductPriceBtn">
          <p>
            <span>{props.price}</span>$
          </p>
          <button type="button">Comprar</button>
        </div>
      </div>
    </div>
    
  );
}

export default ItemDetail;
