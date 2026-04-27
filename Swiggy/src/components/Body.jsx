import React, { useEffect, useState } from "react";


const Body=()=> {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="product" />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
          <button>Add to Cart</button> 
        </div>
      ))}
    </div>
  );
}
export default Body