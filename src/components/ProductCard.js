import image from './img/gel-de-limpieza-p.jpg'


function ProductCard() {
    return (
     
      <div className="site-container">
          <div className="article-container">
                <article className="article-card">
                    <figure className="article-img">
                        <img src="{image}" alt=""/>
                    </figure>
                    <div className="article-content">
                        <a href="#" className="card-category">LIMPIEZA</a>
                        <h3 className="card-title">Gel de limpieza protector</h3>
                        <p className="card-excerpt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus harum corporis eos, atque accusamus at!
                        </p>
                    </div>
                </article>
              
          </div>
      </div>

    );


}

export default ProductCard