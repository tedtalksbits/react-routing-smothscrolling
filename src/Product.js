import "./Product.css";
import React, { useState } from 'react';

function Product({prodName, price}) {
  const [count, setCount] = useState(1);
   return (
      <div className="product">
         <h3>{prodName}</h3>
         <h4>${price}</h4>
         <button onClick={(e) => setCount(count + 1)}>+</button>
         <h5>{count}</h5>
         <button onClick={(e) => setCount(count - 1)}>-</button>
         <button>Buy</button>
      </div>
   )
}

export default Product
