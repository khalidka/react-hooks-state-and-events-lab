import React, { useState } from "react";

function Item({ name, category }) {
  const [isItemInCart, setIsItemInCart] = useState(false)
  

  const handleItem = () =>{
    setIsItemInCart(prevItem => !prevItem)
  }
  const btnText = isItemInCart ? 'Remove From Cart' : 'Add to cart'
  const itemInClassList = isItemInCart ? 'in-cart' : ''
  return (
    <li className= {itemInClassList}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className="add">{btnText}</button>
    </li>
  );
}

export default Item;
