import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsJson } from "./productsJson";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productsJson.filter(item => item.id === id)),
        3000
      );
    }).then((dataResolve) => setProduct(dataResolve[0]));
  }, []);
  
  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;
