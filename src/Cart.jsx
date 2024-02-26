import "./Cart.css"
import React, { useState } from 'react';

const Cart = ({ cartItems, buyItems }) => {
  const [itemCount, setItemCount] = useState({});

  const add = (itemId) => {
    setItemCount((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 0) + 1,
    }));
  };
 

  const subtract = (itemId) => {
    if (itemCount[itemId] > 0) {
      setItemCount((prevCount) => ({
        ...prevCount,
        [itemId]: prevCount[itemId] - 1,
      }));
    }
  };

  return (
    <div className="all">
      {cartItems.map((item) => (
        <div key={item.id} className="allItems">
          <img src={item.image} alt={item.title} />
          <div>
            <h4 className="title">{item.title}</h4>
            <h3 className="title">{itemCount[item.id] || 0}: items</h3>
            <h3 className="price"> single: ${item.Price} </h3>
            <h1 className="price">Total price:{Number(item.Price * (itemCount[item.id] || 0))}$</h1>
           
            <button className="but" onClick={() => add(item.id)}>+</button>
            <button className="but" onClick={() => subtract(item.id)}>-</button>
          </div>
        </div>
      ))}
      <br />
      <button className="checkout" onClick={buyItems}>Continue to checkout</button>
    </div>
  );
}

export default Cart;

