import image from '../img/gel-de-limpieza-p.jpg'


function ProductCard() {
    return (
     
      <div className="SiteContainer">
          <div className="ArticleContainer">
                <article className="ArticleCard">
                    <figure className="ArticleImg">
                        <img src={image} alt="Gel de limpieza LACA"/>
                    </figure>
                    <div className="ArticleContent">
                        <a href="./" className="CardCategory">LIMPIEZA</a>
                        <h3 className="CardTitle">Gel de limpieza protector</h3>
                        <p className="CardExcerpt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus harum corporis eos, atque accusamus at!
                        </p>
                    </div>
                    <div className="BtnContainer">
                        <button className="CustomBtn Btn">COMPRAR</button>
                    </div>
                </article>
              
          </div>
      </div>

    );


}

export default ProductCard