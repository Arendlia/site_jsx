import Card from "./Card";

import "./../styles/CardList.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get(
        `http://localhost:1337/products`
      )
        .then((data) =>{
        setProducts(data.data);
        setLoading(false);
      })
  }, []);
  
  return (
    loading ? <div className="loading">Loading... </div>:
    <div className="card-group">
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default CardList;
