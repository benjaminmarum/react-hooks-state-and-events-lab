import React, { useState } from "react";

function Item({ name, category, className }) {
  const [cart, setCart] = useState(false);
  const listClass = cart ? "in-cart" : ""




  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {cart? 
      <button className="add" onClick={()=>{setCart(!cart)}}>Remove from Cart</button>
    :
    <button className="add" onClick={()=>{setCart(!cart)}}>Add to Cart</button>
    }
    </li>
  );
}

export default Item;
