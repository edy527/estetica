import React from "react";

//import ProductCard from './ProductCard'

export default function Item(props) {
  return (
    
      <div className="SiteContainer">
        <div className="ArticleContainer">
          <article className="ArticleCard">
            <figure className="ArticleImg">
              <img src={props.pictureUrl} alt="Gel de limpieza LACA" />
            </figure>
            <div className="ArticleContent">
              <a href="./" className="CardCategory">
                ${props.price}
              </a>
              <h3 className="CardTitle">{props.title}</h3>
              <p className="CardExcerpt">{props.description}</p>
            </div>
            <div className="BtnContainer">
              <button className="CustomBtn Btn">COMPRAME</button>
            </div>
          </article>
        </div>
      </div>
    
  );
}
