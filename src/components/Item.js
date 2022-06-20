import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCart(){
    setInCart((inCart)=>!inCart);//usestate verilerini güncelleme tuşu için kullanıyoruz
  }
  return (
    <li className={inCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleAddToCart}>{inCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
