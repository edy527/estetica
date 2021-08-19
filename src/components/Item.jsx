import React from "react";
import image from "../img/gel-de-limpieza-p.jpg";
//import ProductCard from './ProductCard'

export default function Item(props) {
  return (
    
      <div className="SiteContainer">
        <div className="ArticleContainer">
          <article className="ArticleCard">
            <figure className="ArticleImg">
              <img src={image} alt="Gel de limpieza LACA" />
            </figure>
            <div className="ArticleContent">
              <a href="./" className="CardCategory">
                {props.name}
              </a>
              <h3 className="CardTitle">Gel de limpieza protector</h3>
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
